import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentUserAsync } from '../../features/authentication/authenticationSlice';
import { askQuestionAsync } from '../../features/questions/questionSlice';

import { Button, Label, Textarea } from 'flowbite-react';

import { Link } from 'react-router-dom';

const AskQuestion = () => {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.loggedIn)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    currentUserAsync(user);
  }, [dispatch, user]);

  const onSubmit = (data) => {
    dispatch(askQuestionAsync(data))
    navigate('/customer');
  }

  return (
    <section className="flex justify-center p-20">
      {isLoggedIn ? (
        <div className="max-w-md w-full">
          <div className="mb-2 block">
            <Label htmlFor="question" value="Your question" />
          </div>
          <Textarea
            id="question"
            placeholder="Leave a question..."
            rows={4}
            {...register("question", {required: true})}
          />
          <div className="py-5">
            <Button type="button" onClick={handleSubmit(onSubmit)}>Submit</Button>
          </div>
        </div>
      ) : (
        <div>
          You need to login before you can ask a question
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
