import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Button,
  Label, Modal, Textarea
} from 'flowbite-react';
import { currentUserAsync } from '../../features/authentication/authenticationSlice';
import { answerQuestionAsync } from '../../features/answers/answersSlice';

const QuestionDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const { register, handleSubmit } = useForm();


  const onCloseModal = () => {
    setOpenModal(false);
    // setEmail('');
  }

  useEffect(() => {
    dispatch(currentUserAsync())
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(answerQuestionAsync({data, user}));
    navigate('/agent');
  }
  return (
    <main className="flex justify-center p-20">
      <div className="p-10">
        <div className="">
          <h3 className="">
            Title: Can I get a loan now?
          </h3>
          <h3 className="">
            Asked by: USERID345
          </h3>
          <h3 className="">
            Date: November 24, 2023
          </h3>
        </div>
        <div className="py-5">
          <Button onClick={() => setOpenModal(true)}>Answer this question</Button>
        </div>

      </div>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          {user && loggedIn ? (
            <>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Answer question
                </h3>
                <p>
                  Question Body
                </p>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="answer" value="Your answer" />
                  </div>
                  <Textarea
                    id="answer"
                    placeholder="Leave an answer..."
                    rows={4}
                    {...register("answer", { required: true })}
                  />
                </div>
              </div>
              <div className="py-5">
                <Button type="submit" onClick={handleSubmit(onSubmit)}>Submit Answer</Button>
              </div>
            </>
          ) : (
            <div>
              <h2>To answer a question you need to login</h2>
              <Link to="/agent/login">
                <Button type="button">Login</Button>
              </Link>
            </div>
          )}

        </Modal.Body>
      </Modal>
    </main>
  )

};
export default QuestionDetail;

