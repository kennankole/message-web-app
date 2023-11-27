
import { Button, Label, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { registerUserAsync } from '../features/authentication/authenticationSlice';
import randomIDGenerator from './random';

const Signup = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password, confirmPassword } = data;
    const formData = {
      email,
      password,
      password_confirmation: confirmPassword,
      user_identity: randomIDGenerator('AG')
    }
    dispatch(registerUserAsync(formData));
    navigate("/login");
  }
  return (
    <>
      <section className="flex justify-center">
        <form
          className="flex max-w-md flex-col gap-4 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@flowbite.com"
              shadow
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password2"
              type="password"
              shadow
              {...register("password", { required: true })}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput
              id="repeat-password"
              type="password"
              shadow
              {...register("confirmPassword", { required: true })}
            />
          </div>
          <Button type="submit">Register new account</Button>
        </form>
      </section>
    </>
  );
}
export default Signup;