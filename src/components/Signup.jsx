
import { Button, Label, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUserAsync } from '../features/authentication/authenticationSlice';
import NavigationMenu from './NavigationMenu';

const Signup = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(registerUserAsync(data));
    reset();
  }
  return (
    <>
      <NavigationMenu />
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
              {...register("confirPassword", { required: true })}
            />
          </div>
          <Button type="submit">Register new account</Button>
        </form>
      </section>
    </>
  );
}
export default Signup;