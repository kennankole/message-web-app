import { Button } from 'flowbite-react';
import { useState } from 'react';
import AnswerQuestion from './AnswerQuestion';

const QuestionDetail = () => {
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
    setEmail('');
  }

  const handleSubmit = () => {
    alert('Submiting an answer')
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
      <AnswerQuestion
        openModal={openModal}
        onCloseModal={onCloseModal}
        handleSubmit={handleSubmit}
      />
    </main>
  )

};
export default QuestionDetail;

