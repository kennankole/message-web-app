// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllQuestionsAsync } from '../features/questions/questionSlice';
// import { Accordion, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Questions = ({ data }) => (
  <div>
    <h2>Asked by {data.user_identity}</h2>
    <p>{data.body}</p>
    <Link to={`/agent/question-detail/${data.id}`}>
      View detail
    </Link>
  </div>
);
// QuestionsList.propTypes = {
//   data: {
//     user_identity: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
//   }
// }
export default Questions;