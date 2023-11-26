import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllQuestionsAsync } from '../features/questions/questionSlice';
import { Accordion } from 'flowbite-react';
// import { useNavigate } from 'react-router';

const QuestionsList = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);
  console.log(questions);

  useEffect(() => {
    dispatch(getAllQuestionsAsync())
  }, [dispatch]);

  return (
    <>
      <Accordion>
        {questions.length ? (
          questions.map((item) => (
            <Accordion.Panel key={item.question.id}>
              <Accordion.Title>
                Asked by USER ID {item.question.user_identity.replace(/\.\d+$/, '')}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {item.question.body}
                </p>
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