import { axiosInstance } from "../authentication/authenticationApi";

export const getAllQuestionsApi = () => axiosInstance.get('/api/v1/questions');