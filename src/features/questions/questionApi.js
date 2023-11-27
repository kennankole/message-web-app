import { axiosInstance } from "../authentication/authenticationApi";

export const getAllQuestionsApi = () => axiosInstance.get('/api/v1/questions');

export const askQuestionApi = (data) => {
  return axiosInstance.post(`/api/v1/questions/`, {
    question: {
      body: data.question,
    }
  })
}