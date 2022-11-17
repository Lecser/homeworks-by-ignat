import axios from "axios";

type PostRequestType = {
  errorText: string;
  info: string;
};

export const RequestsAPI = {
  postRequest(success: boolean) {
    return axios.post<PostRequestType>(
      `https://neko-cafe-back.herokuapp.com/auth/test`,
      {
        success: success,
      }
    );
  },
};
