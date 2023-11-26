import { axiosInstance } from "../authentication/authenticationApi";

export const answerQuestionsApi = (formData) => {
  const { data, id } = formData;
  return axiosInstance.post(`/api/v1/questions/${id}/answers`, {
    answer: {
      body: data.answer
    }
  });
}
