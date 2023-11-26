import { useDispatch, useSelector } from 'react-redux';
import { Button, Label, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form'
import { loginUserAsync } from '../../features/authentication/authenticationSlice';

const LoginForm = () => {

  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password, data)
    // dispatch(loginUserAsync(data))
    reset();
  }
  return (
    <section className="flex justify-center p-20">
      <form
        className="flex max-w-md flex-col gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
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
  );
}
export default LoginForm;