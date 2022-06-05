import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  STORE_LOGIN_DATA,
} from "./actionTypes";
import { post } from "API/Helpers";

const startLogin =
  (email: string, password: string) => async (dispatch: any) => {
    dispatch(requestLogin());
    try {
      const response = await post("/api/login", { email, password });
      dispatch(receivedSuccess(response.message, response.user));
      dispatch(storeUserData(response.user));
    } catch (error: any) {
      dispatch(requestFailure(error.response.message));
    }
  };

const requestLogin = () => ({
  type: LOGIN_REQUEST,
});

const requestFailure = (message: string) => ({
  type: LOGIN_FAILURE,
  payload: {
    message,
  },
});

const receivedSuccess = (message: string, user: any) => ({
  type: LOGIN_SUCCESS,
  payload: {
    message,
    user,
  },
});

const storeUserData = (user: any) => ({
  type: STORE_LOGIN_DATA,
  payload: {
    user,
  },
});

export default startLogin;
