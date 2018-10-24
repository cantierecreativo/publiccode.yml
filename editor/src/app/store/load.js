import { createAction, handleActions } from "redux-actions";

export const SET_URL = "SET_URL";
export const RESET_URL = "RESET_URL";

export const setUrl = createAction(SET_URL);
export const resetUrl = createAction(RESET_URL);

const initialState = {
  url: null
};

const reducer = handleActions(
  {
    SET_URL: (state, action) => {
      return {
        ...state,
        url: action.payload.url,
      };
    },
    RESET_URL: (state, action) => initialState
  },
  initialState
);
export default reducer;
