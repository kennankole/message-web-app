import RealTimeQuestions from './IncomingQuestions';
import Questions from './Questions';
const AgentDashBoard = () => {
  return (
    <section className="flex p-20 gap-5 dashboard">
      <div className="flex-none w-1/2 pr-8 py-10 question-list">
        <Questions />
      </div>
      <div className="flex-grow w-1/2 question-chat">
        <h1 className="text-end font-bold p-5">Incoming Questions.</h1>
        <RealTimeQuestions />
      </div>
    </section>
  );
}
export default AgentDashBoard;