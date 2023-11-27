import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Accordion, Button, Spinner } from 'flowbite-react';
import { getAllQuestionsAsync } from '../features/questions/questionSlice';
import { currentUserAsync } from '../features/authentication/authenticationSlice';

const QuestionsList = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);
  const status = useSelector((state) => state.questions.status);
  const user = useSelector((state) => state.auth.user);
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  useEffect(() => {
    dispatch(getAllQuestionsAsync())
  }, [dispatch]);

  useEffect(() => {
    dispatch(currentUserAsync())
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center p-10">
        <Spinner size="xl" aria-label="Extra large spinner example" className="text-center mx-auto mt-20" />
      </div>
    )
  }
  return (
    <>
      <Accordion>
        {questions.length > 0 ? (
          questions.map((item) => (
            <Accordion.Panel key={item.question.id}>
              <Accordion.Title>
                {item.question.body}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Asked by USER ID {item.question.user_identity.replace(/\.\d+$/, '')}
                </p>
                {item.question.answer ? (
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {item.question.answer}
                  </p>
                ) : (
                  <div>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Has not been answered
                    </p>
                    {loggedIn && user && user.user_identity.startsWith("AG") && (
                      <div>
                        <Button type="button">
                          <Link to={`/agent/question-detail/${item.question.id}`}>
                            View Details
                          </Link>
                        </Button>

                      </div>
                    )}
                  </div>
                )}
              </Accordion.Content>
            </Accordion.Panel>
          ))
        ) : (
          <div>
            There are no questions currently
          </div>
        )}
      </Accordion>
    </>
  );
}
export default QuestionsList;