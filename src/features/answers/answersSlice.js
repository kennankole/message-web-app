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
  status: 'idle',
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
        state.status = 'loading';
      })
      .addCase(answerQuestionAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.status = 'fulfilled';
      })
      .addCase(answerQuestionAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.status = 'rejected';
      });
  },
});
export const { updateStatus } = answersSlice.actions;
export default answersSlice.reducer;
