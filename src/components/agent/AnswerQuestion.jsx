import {
  Button,
  Label, Modal, Textarea
} from 'flowbite-react';


const AnswerQuestion = ({
  openModal, onCloseModal,
  handleSubmit,
}) => {
  return (
    <>

      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
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

        </Modal.Body>
      </Modal>
    </>
  );
}
export default AnswerQuestion;
