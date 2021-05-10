import { combineReducers } from "redux";
import { repoReducer } from "./repo-reducer";

const reducers = combineReducers({
  repos: repoReducer,
});

export default reducers;
export type RootStateType = ReturnType<typeof reducers>;
