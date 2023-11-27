import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button, Label, Modal, TextInput, Spinner } from 'flowbite-react';
import { currentUserAsync } from "../features/authentication/authenticationSlice";
import randomIDGenerator from "./random";
import NavigationMenu from "./NavigationMenu";
import { registerUserAsync, loginUserAsync } from "../features/authentication/authenticationSlice";
import QuestionsList from "./QuestionsList";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState('');
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.status);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onCloseModal = () => {
    setOpenModal(false);
  }

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  useEffect(() => {
    dispatch(currentUserAsync())
  }, [dispatch]);

  const onSubmit = (data) => {
    if (isLoginForm) {
      dispatch(loginUserAsync(data))
      navigate('/customer/ask');
    } else {
      const { email, password, passwordConfirmation } = data;
      const formData = {
        email,
        password,
        password_confirmation: passwordConfirmation,
        user_identity: randomIDGenerator('CU')
      }
      dispatch(registerUserAsync(formData));
      navigate('/login');
    }
  };

  if (status === 'loading') {
    return (
      <div className="flex justify-center p-10">
        <Spinner size="xl" aria-label="Extra large spinner example" className="text-center mx-auto mt-20" />
      </div>
    )
  }
  return (
    <>
      <NavigationMenu />
      <main className="p-10">
        <div className="flex justify-center">
          <p className=" text-center font-bold p-5">
            Welcome to Branch International messaging web app
          </p>
        </div>
        <div className="w-full">
          <div className="">
            <QuestionsList />
          </div>
        </div>
        {user && user.user_identity.startsWith("AG") ? (
          <div></div>
        ) : (
          <div className="flex justify-end py-5">
            <Button
              onClick={() => setOpenModal(true)}
              className="fixed right-0 top-1/2 transform -translate-y-1/2"
            >
              Ask a question
            </Button>
          </div>
        )}

        <div>
          <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  {isLoginForm ? 'Sign in to our platform' : 'Create an account'}
                </h3>
                {isLoginForm ? (
                  <div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                      </div>
                      <TextInput
                        id="email"
                        placeholder="name@company.com"
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div className="mb-2 block">
                      <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput
                      id="password"
                      type="password"
                      {...register("password", { required: true })}
                    />
                  </div>
                ) : (
                  <>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                      </div>
                      <TextInput
                        id="email"
                        placeholder="name@company.com"
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                      </div>
                      <TextInput
                        id="password1"
                        type="password"
                        {...register("password", { required: true })}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="password" value="Confirm password" />
                      </div>
                      <TextInput
                        id="password2"
                        type="password"
                        {...register("passwordConfirmation", { required: true })}
                      />
                    </div>
                  </>
                )}
                <div className="w-full">
                  <Button onClick={handleSubmit(onSubmit)}>
                    {isLoginForm ? 'Login in to your account' : 'Creat your account'}
                  </Button>
                </div>
                {errors && (
                  <p className="text-red-500 dark:text-red-400">
                    {Object.values(errors).map((error, index) => (
                      <span key={index}>{error.message}</span>
                    ))}
                  </p>
                )}
                <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                  {isLoginForm ? (
                    <>
                      Not registered?&nbsp;
                      <a href="#" onClick={handleToggleForm} className="text-cyan-700 hover:underline dark:text-cyan-500">
                        Create account
                      </a>
                    </>
                  ) : (
                    <>
                      Already have an account?&nbsp;
                      <a href="#" onClick={handleToggleForm} className="text-cyan-700 hover:underline dark:text-cyan-500">
                        Sign in
                      </a>
                    </>
                  )}
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </main >
    </>
  );
};
export default HomePage;
