import { useState } from "react";

import { Button } from "flowbite-react";
import NavigationMenu from "./NavigationMenu";
import LoginToggle from "./Modal";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoginForm, setIsLoginForm] = useState('');
  const [password, setPassword] = useState('');

  const onCloseModal = () => {
    setOpenModal(false);
    setEmail('');
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    if (isLoginForm) {
      alert('You are loggin in')
    } else {
      alert('You are signin up')
    }
  };

  return (
    <>
      <NavigationMenu />
      <main className="flex flex-col items-center">
        <div>
          <h1>Welcome to Branch International messaging web app</h1>
        </div>
        <div className="w-full border-2">
          <div className="flex flex-col items-center">
            list of questions
          </div>
        </div>
        <div className="flex items-end">
        <Button onClick={() => setOpenModal(true)}>Ask a question</Button>
        </div>
        <LoginToggle
          openModal={openModal}
          onCloseModal={onCloseModal}
          email={email}
          handleEmail={handleEmail}
          isLoginForm={isLoginForm}
          handleToggleForm={handleToggleForm}
          handleSubmit={handleSubmit}
        />
      </main>
    </>
  )

};
export default HomePage;



