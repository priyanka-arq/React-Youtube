import {
  CHANNEL_VIDEOS_FAILURE,
  CHANNEL_VIDEOS_REQUEST,
  CHANNEL_VIDEOS_SUCCESS,
} from "../actionType";

export const channelVideosReducer = (
  state = { loading: false, videos: [], error: null },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case CHANNEL_VIDEOS_REQUEST:
      return {
        ...state,
        loadind: true,
      };

    case CHANNEL_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case CHANNEL_VIDEOS_FAILURE:
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
