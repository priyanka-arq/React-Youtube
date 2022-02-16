import {
  COMMENTS_LIST_FAILURE,
  COMMENTS_LIST_SUCCESS,
  COMMENTS_LIST_REQUEST,
} from "../actionType";

export const commentListReducer = (
  state = { loading: true, comments: null, error: null },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case COMMENTS_LIST_REQUEST:
      return {
        ...state,
        loadind: true,
      };

    case COMMENTS_LIST_SUCCESS:
      return {
        ...state,
        comments: payload,
        loading: false,
      };
    case COMMENTS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        comments: null,
        error: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
