import { CombinedState, combineReducers, Reducer } from "redux";
import demoReducer from "./Demo/reducer";

interface IPayload {
  count: number;
}

const rootReducers: Reducer<
  CombinedState<{
    demoReducer: {
      count: number;
    };
  }>,
  {
    type: string;
    payload: IPayload;
  }
> = combineReducers({ demoReducer });

export default rootReducers;
