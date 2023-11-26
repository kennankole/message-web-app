import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllQuestionsApi } from './questionApi';

export const getAllQuestionsAsync = createAsyncThunk(
  'questions/fetchAllQuestions', 
  async () => {
    const response = await getAllQuestionsApi();
    return response.data;
  }
)

const initialState = {
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
      })
      .addCase(getAllQuestionsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.questions = action.payload;
      })
      .addCase(getAllQuestionsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});
export const { updateStatus } = questionsSlice.actions;
export default questionsSlice.reducer;
