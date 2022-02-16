import {
  RELATED_VIDEOS_FAILURE,
  RELATED_VIDEOS_REQUEST,
  RELATED_VIDEOS_SUCCESS,
} from "../actionType";

export const relatedVideoReducer = (
  state = { loading: true, videos: null, error: null },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case RELATED_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case RELATED_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case RELATED_VIDEOS_FAILURE:
      return {
        ...state,
        videos: null,
        error: payload,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
