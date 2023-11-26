import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserAsync } from '../../features/authentication/authenticationSlice';

import {
  Button,
  Label, Modal, Textarea
} from 'flowbite-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AnswerQuestion = ({
  openModal, onCloseModal,
  handleSubmit,
}) => {
  const user = useSelector((state) => state.auth.user);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserAsync(user));
  }, [dispatch, user]);

  return (
    <div>

      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          {user && loggedIn ? (
            <>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Answer question</h3>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="answer" value="Your answer" />
                  </div>
                  <Textarea id="answer" placeholder="Leave an answer..." required rows={4} />
                </div>
              </div>
              <div className="py-5">
                <Button type="submit" onClick={handleSubmit}>Submit Answer</Button>
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
    </div>
  );
}
AnswerQuestion.propTypes = {
  openModal: PropTypes.object.isRequired,
  onCloseModal: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}
export default AnswerQuestion;
