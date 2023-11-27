import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserAsync } from '../../features/authentication/authenticationSlice';

import RealTimeQuestions from './IncomingQuestions';
import Questions from './Questions';
import { Button, Spinner } from 'flowbite-react';
import { Link } from 'react-router-dom';
const AgentDashBoard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loggedIn = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.status);


  useEffect(() => {
    dispatch(currentUserAsync())
  }, [dispatch]);

  if (user && user.user_identity.startsWith("CU")) {
    return (
      <div>
        <h1>You are unauthorized to access this page</h1>
        <p>Contatc the Admin</p>
      </div>
    );
  }

  if (status === 'loading') {
    return (
      <div className="flex justify-center p-10">
        <Spinner size="xl" aria-label="Extra large spinner example" className="text-center mx-auto mt-20" />
      </div>
    )
  }
  return (
    <>
      {user && loggedIn ? (
        <section className="flex p-20 gap-5 dashboard">
          <div className="flex-none w-1/2 pr-8 py-10 question-list overflow-y-auto">
            <Questions />
          </div>
          <div className="flex-grow w-1/2 question-chat">
            <h1 className="text-end font-bold p-5">Incoming Questions.</h1>
            <RealTimeQuestions />
          </div>
        </section>
      ) : (
        <div className="flex flex-col items-center p-20">
          <h3>Login to continue to your dashboard</h3>
          <Button type="button">
            <Link to="/login">
              Login
            </Link>
          </Button>
        </div>
      )}

    </>
  );
}
export default AgentDashBoard;