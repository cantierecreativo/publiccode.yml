import { createAction, handleActions } from "redux-actions";

export const SHOW_INFO = "SHOW_INFO";
export const HIDE_INFO = "HIDE_INFO";

export const show = createAction(SHOW_INFO);
export const hide = createAction(HIDE_INFO);

const initialState = {
  owner: null,
  repo: null,
  path: null
};

const reducer = handleActions(
  {
    SHOW_INFO: (state, action) => {
      return {
        ...state,
        owner: action.payload.owner,
        repo: action.payload.repo,
        path: action.payload.path,
      };
    },
    HIDE_INFO: (state, action) => initialState
  },
  initialState
);
export default reducer;
