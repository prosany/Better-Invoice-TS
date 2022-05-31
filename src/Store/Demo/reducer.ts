import { DECREMENT, INCREMENT, RESET } from "./actionTypes";

interface IPayload {
  count: number;
}

const initialState = {
  count: 0,
};

const demoReducer = (
  state = initialState,
  action: { type: string; payload: IPayload }
) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: action.payload.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };
    default:
      return state;
  }
};

export default demoReducer;
