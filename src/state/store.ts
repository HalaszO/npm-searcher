import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// reducers, init state, thunk middleware
export const store = createStore(reducers, {}, applyMiddleware(thunk));
