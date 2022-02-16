import {
  LIKED_VIDEOS_FAILURE,
  LIKED_VIDEOS_REQUEST,
  LIKED_VIDEOS_SUCCESS,
} from "../actionType";

export const likedVideosReducer = (
  state = { loading: false, videos: [], error: null },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case LIKED_VIDEOS_REQUEST:
      return {
        ...state,
        loadind: true,
      };

    case LIKED_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case LIKED_VIDEOS_FAILURE:
      return {
        ...state,
        loading: false,
        videos: [],
        error: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
