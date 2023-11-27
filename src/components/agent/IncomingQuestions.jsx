const RealTimeQuestions = () => {
  const dummyQuestions = [
    'I have just paid my loan before the deadline, can I apply for another one?',
    'I am not able to login to my app',
    'Can I get a loan of 100,000 as a first timer?',
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
