import {
  HOME_VIDEOS_FAILURE,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SET_VIDEO_DETAILS,
} from "../actionType";

const initialState = {
  videos: [],
  videoDetails: [],
  loading: false,
  nextPageToken: null,
  homeVideosStatus: true,
  activeCategory: "All",
};
export const homeVideosReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,

        videos:
          //if its same category video then concat ot just update with payload
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        nextPageToken: payload.nextPageToken,
        loading: false,
        homeVideosStatus: payload.homeVideosStatus,
        activeCategory: payload.category,
      };
    case HOME_VIDEOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SET_VIDEO_DETAILS:
      return {
        ...state,
        videoDetails: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
