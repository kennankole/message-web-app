import { useDispatch, useSelector } from 'react-redux';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form'

import { currentUserAsync, loginUserAsync } from '../../features/authentication/authenticationSlice';
import { useEffect } from 'react';
import NavigationMenu from '../NavigationMenu';
import { Link } from 'react-router-dom';

const LoginForm = () => {

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const user = useSelector((state) => state.auth.user);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const status = useSelector((state) => state.auth.status);
  console.log(status);

  const onSubmit = (data) => {
    dispatch(loginUserAsync(data))
  };

  useEffect(() => {
    dispatch(currentUserAsync());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center p-10">
        <Spinner  size="xl" aria-label="Extra large spinner example" className="text-center mx-auto mt-20" />
      </div>
    )
  }
  return (
    <>
      <NavigationMenu />
      {loggedIn ? (
        user.user_identity.startsWith("CU") ? (
          <div className="flex justify-center p-10">
            <Link to="/customer">
              Go to your dashboard
            </Link>
          </div>
        ) : (
          <div className="flex justify-center p-10">
            <Link to="/agent">
              Go to your dashboard
            </Link>
          </div>
        )
      ) : (
        <section className="flex justify-center p-20">
          <form
            className="flex max-w-md flex-col gap-4 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                {...register("password", { required: true })}
              />
            </div>
            <Button type="submit" className="w-1/3">Login</Button>
            <div>
              <p>Don&apos;t have an account?</p>

              <Link to="/agent/signup">
                Sign up
              </Link>
            </div>
          </form>
        </section>
      )}
    </>
  );
}
export default LoginForm;