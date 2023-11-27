import { useDispatch, useSelector } from 'react-redux';
import { Button, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form'

import { currentUserAsync, loginUserAsync } from '../../features/authentication/authenticationSlice';
import { useEffect } from 'react';
import NavigationMenu from '../NavigationMenu';

const LoginForm = () => {

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const onSubmit = (data) => {
    dispatch(loginUserAsync(data))
  };

  useEffect(() => {
    if (user && user.user_identity.startsWith("AG")) {
      navigate('/agent');
    } else if (user && user.user_identity.startsWith("CU")) {
      navigate('/customer')
    }
  }, [dispatch, user, navigate]);

  useEffect(() => {
    dispatch(currentUserAsync());
  }, [dispatch]);

  return (
    <>
      <NavigationMenu />
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
        </form>
      </section>
    </>
  );
}
export default LoginForm;