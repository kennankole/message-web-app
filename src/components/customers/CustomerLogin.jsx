import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUserAsync } from '../../features/authentication/authenticationSlice';
import { useNavigate } from 'react-router';

import { Button, Label, TextInput } from 'flowbite-react';


const CustomerLoginForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(loginUserAsync(data))
    reset();
    navigate("/customer")

  }
  return (
    <section className="flex justify-center p-20">
      <form className="flex max-w-md flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
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
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <div>
          <Button type="submit" className="w-1/3">Login</Button>
        </div>
        {errors && (
          <p className="text-red-500 dark:text-red-400">
            {Object.values(errors).map((error, index) => (
              <span key={index}>{error.message}</span>
            ))}
          </p>
        )}
      </form>
    </section>
  );
}
export default CustomerLoginForm;