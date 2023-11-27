import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currentUserAsync } from '../../features/authentication/authenticationSlice';
import { getAllQuestionsAsync } from '../../features/questions/questionSlice';
import { Accordion, Button, Spinner } from 'flowbite-react';
import { Link } from 'react-router-dom';


const CustomerDashBoard = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);
  const status = useSelector((state) => state.questions.status);
  const user = useSelector((state) => state.auth.user);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  let myQuestions = []
  if (user && user.user_identity) {
    myQuestions = questions.filter((question) => question.question.user_identity === user.user_identity);
  }

  console.log(status);

  useEffect(() => {
    dispatch(currentUserAsync())
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllQuestionsAsync())
  }, [dispatch]);

  if (!loggedIn) {
    return (
      <div className="flex flex-col items-center p-20">
        <p>Please log in to view your questions.</p>
        <Button type="button">
          <Link to="/login">
            Login
          </Link>
        </Button>
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
      <section className="p-10">
        <div className="p-5">
          <h1 className="text-center font-bold">
            Your questions
          </h1>
        </div>
        <Accordion>
          {user && myQuestions.length ? (
            myQuestions.map((item) => (
              <Accordion.Panel key={item.question.id}>
                <Accordion.Title>
                  {item.question.body}
                </Accordion.Title>
                <Accordion.Content>
                  <div>
                    {item.question.answer ? (
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {item.question.answer}
                      </p>
                    ) : (
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        No answer
                      </p>
                    )}
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            ))
          ) : (
            <Accordion.Panel>
              <Accordion.Title>
                You have no question
              </Accordion.Title>
              <div className="flex justify-end py-5">
                <Link to="/customer/ask">
                  <Button type="button">
                    Post a question
                  </Button>
                </Link>
              </div>
            </Accordion.Panel>
          )}
        </Accordion>
        <div className="flex justify-end py-5">
          <Link to="/customer/ask">
            <Button type="button">
              Ask another question
            </Button>
          </Link>
        </div>
      </section >
    </>
  );
}
export default CustomerDashBoard;