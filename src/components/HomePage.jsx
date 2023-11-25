import { useState } from "react";

import { Button } from "flowbite-react";
import NavigationMenu from "./NavigationMenu";
import LoginToggle from "./Modal";
import QuestionsList from "./QuestionsList";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoginForm, setIsLoginForm] = useState('');

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
        <div className="flex justify-end py-5">
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



