import {
  SELECTED_VIDEO_FAILURE,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
} from "../actionType";

export const selectedVideoReducer = (
  state = { loading: true, video: null, error: null },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case SELECTED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SELECTED_VIDEO_SUCCESS:
      return {
        ...state,
        video: payload,
        loading: false,
      };
    case SELECTED_VIDEO_FAILURE:
      return {
        ...state,
        video: null,
        error: payload,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
