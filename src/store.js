import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const inetialState = {};
const middleWare = [thunk];
const store = createStore(
  rootReducer,
  inetialState,
  applyMiddleware(...middleWare)
);

export default store;
