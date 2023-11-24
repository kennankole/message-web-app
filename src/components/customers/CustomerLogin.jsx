import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

const CustomerLoginForm = () => {
  return (
    <section className="flex justify-center p-20">
      <form className="flex max-w-md flex-col gap-4 w-full">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <Button type="submit" className="w-1/3">Login</Button>
      </form>
    </section>
  );
}
export default CustomerLoginForm;