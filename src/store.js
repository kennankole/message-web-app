import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './features/authentication/authenticationSlice';
import questionSliceReducer from './features/questions/questionSlice';
import answersSliceReducer from './features/answers/answersSlice';
export default configureStore({
  reducer: {
    auth: authenticationReducer,
    questions: questionSliceReducer,
    answer: answersSliceReducer,
  },
});
