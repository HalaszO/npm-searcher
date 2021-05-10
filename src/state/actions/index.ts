import { ActionType } from "../action-types";

interface searchReposAction {
  type: ActionType.SEARCH_REPOS;
}

interface searchReposSuccessAction {
  type: ActionType.SEARCH_REPOS_SUCCESS;
  payload: string[];
}

interface searchReposErrorAction {
  type: ActionType.SEARCH_REPOS_ERROR;
  payload: string;
}

type Action =
  | searchReposAction
  | searchReposSuccessAction
  | searchReposErrorAction;

export type { Action };
