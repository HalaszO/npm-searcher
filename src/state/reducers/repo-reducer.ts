import { Action } from "../actions";
import { ActionType } from "../action-types";

interface repoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initalState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state: repoState = initalState, action: Action): repoState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export { reducer as repoReducer };
