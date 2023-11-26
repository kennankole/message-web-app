import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentUserAsync } from '../../features/authentication/authenticationSlice';

import { Button, Label, Textarea } from 'flowbite-react';

import { Link } from 'react-router-dom';

const AskQuestion = () => {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.loggedIn)
  const dispatch = useDispatch();

  useEffect(() => {
    currentUserAsync(user);
  }, [dispatch, user]);

  return (
    <section className="flex justify-center p-20">
      {isLoggedIn ? (
        <div className="max-w-md w-full">
          <div className="mb-2 block">
            <Label htmlFor="question" value="Your question" />
          </div>
          <Textarea id="question" placeholder="Leave a question..." required rows={4} />
          <div className="py-5">
            <Button type="button">Submit</Button>
          </div>
        </div>
      ) : (
        <div>
          You need to login before asking a question
          <Link to="/customer/login">
            <Button type="button">
              Login
            </Button>
          </Link>

        </div>
      )}
    </section>
  );
}
export default AskQuestion;
