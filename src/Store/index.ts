import {
  AnyAction,
  applyMiddleware,
  compose,
  createStore,
  EmptyObject,
} from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducers from "./rootReducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore<
  EmptyObject,
  AnyAction,
  {
    dispatch: unknown;
  },
  {}
>(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
export default store;