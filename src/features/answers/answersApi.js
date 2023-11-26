import { axiosInstance } from "../authentication/authenticationApi";

export const answerQuestionsApi = (data) => {
  const { answer, user } = data;
  axiosInstance.post(`/api/v1/users/${user.id}/answers`, {
    answer: {
      body: answer,
      user_identity: user.user_identity,
    }
  });
}