import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllQuestionsApi, askQuestionApi } from './questionApi';

export const getAllQuestionsAsync = createAsyncThunk(
  'questions/fetchAllQuestions', 
  async () => {
    const response = await getAllQuestionsApi();
    return response.data;
  }
);

export const askQuestionAsync = createAsyncThunk(
  'question/askQuestion',
  async (data) => {
    const response = await askQuestionApi(data);
    return response.data;
  }
);


const initialState = {
  status: 'idle',
  error: null,
  isLoading: false,
  questions: [],
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.status = action.payload.status;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllQuestionsAsync.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(getAllQuestionsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.questions = action.payload;
        state.status = 'successfull';
      })
      .addCase(getAllQuestionsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.status = 'rejected';
      })

      // Ask Question
      .addCase(askQuestionAsync.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(askQuestionAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.status = 'successfull';
      })
      .addCase(askQuestionAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.status = 'rejected';
      });
  },
});
export const { updateStatus } = questionsSlice.actions;
export default questionsSlice.reducer;
