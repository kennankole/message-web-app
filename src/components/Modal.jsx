import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

const LoginToggle = ({
  openModal, onCloseModal, email,
  handleEmail, isLoginForm, handleSubmit,
  handleToggleForm,
}) => {
  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {isLoginForm ? 'Sign in to our platform' : 'Create an account'}
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={handleEmail}
                required
              />
            </div>
            {isLoginForm ? (
              <>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                  </div>
                  <TextInput id="password" type="password" required />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                  </div>
                  <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                    Lost Password?
                  </a>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                  </div>
                  <TextInput id="password" type="password" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Confirm password" />
                  </div>
                  <TextInput id="password" type="password" required />
                </div>
              </>
            )}
            <div className="w-full">
              <Button onClick={handleSubmit}>
                {isLoginForm ? 'Login in to your account' : 'Creat your account'}
              </Button>
            </div>
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
    </>
  );
}
export default LoginToggle;
