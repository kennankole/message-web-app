import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { answerQuestionsApi } from './answersApi';

export const answerQuestionAsync = createAsyncThunk(
  'answer/answerQuestions', 
  async (formData) => {
    const response = await answerQuestionsApi(formData);
    return response.data;
  }
)

const initialState = {
  error: null,
  isLoading: false,
  answer: [],
};

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.status = action.payload.status;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(answerQuestionAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(answerQuestionAsync.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(answerQuestionAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        console.log(state.error);
      });
  },
});
export const { updateStatus } = answersSlice.actions;
export default answersSlice.reducer;
