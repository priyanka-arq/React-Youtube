import {
  HOME_VIDEOS_FAILURE,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SEARCH_VIDEO_FAILURE,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS,
  SET_VIDEO_DETAILS,
} from "../actionType";

export const searchVideoReducer = (
  state = { videos: null, loading: false, error: null },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case SEARCH_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
