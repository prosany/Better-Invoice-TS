import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { STORE_LOGIN_DATA } from "./actionTypes";

interface IUser {
  id?: number | string;
  name?: string;
  email?: string;
  token?: string;
}

interface IActions {
  type: string;
  payload: {
    user: {
      id?: number | string;
      name?: string;
      email?: string;
      token?: string;
    };
  };
}

const initialState: IUser = {
  id: 0,
  name: "",
  email: "",
  token: "",
};

const storeLoginReducer = (state = initialState, action: IActions) => {
  switch (action.type) {
    case STORE_LOGIN_DATA:
      return {
        ...state,
        id: action.payload.user.id,
        name: action.payload.user.name,
        email: action.payload.user.email,
        token: action.payload.user.token,
      };
    default:
      return state;
  }
};

const persistentStore = {
  keyPrefix: "InvoiceTools-",
  key: "loginData",
  storage: storage,
};

export default persistReducer(persistentStore, storeLoginReducer);
