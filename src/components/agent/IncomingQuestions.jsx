// import React from 'react';

const RealTimeQuestions = () => {
  const dummyQuestions = [
    'How does the system handle authentication?',
    'What are the supported browsers?',
    'Can I change my profile picture?',
    'How does the system handle authentication?',
    'What are the supported browsers?',
    'Can I change my profile picture?',
    'How does the system handle authentication?',
    'What are the supported browsers?',
    'Can I change my profile picture?',
    'How does the system handle authentication?',
    'What are the supported browsers?',
    'Can I change my profile picture?',
  ];

  return (
    <section className="bg-gray-200 p-4 h-80 overflow-y-auto flex flex-col-reverse chat">
      <div className="max-w-sm my-auto py-20">
        {dummyQuestions.map((question, index) => (
          <div
            key={index}
            className="bg-white p-3 mb-2 rounded-md shadow-md"
          >
            {question}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RealTimeQuestions;
