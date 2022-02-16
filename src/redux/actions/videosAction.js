import networkRequest from "../../api";
import {
  CHANNEL_VIDEOS_FAILURE,
  CHANNEL_VIDEOS_REQUEST,
  CHANNEL_VIDEOS_SUCCESS,
  HOME_VIDEOS_FAILURE,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  LIKED_VIDEOS_FAILURE,
  LIKED_VIDEOS_REQUEST,
  LIKED_VIDEOS_SUCCESS,
  LIKED_VIDEO_FAILURE,
  LIKED_VIDEO_SUCCESS,
  LIKE_VIDEO_REQUEST,
  RELATED_VIDEOS_FAILURE,
  RELATED_VIDEOS_REQUEST,
  RELATED_VIDEOS_SUCCESS,
  SEARCH_VIDEO_FAILURE,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAILURE,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
} from "../actionType";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const response = await networkRequest.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: response.data.items,
        nextPageToken: response.data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAILURE,
      payload: error.message,
    });
  }
};

//display each category on click
export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const response = await networkRequest.get("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: "video",
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: response.data.items,
        nextPageToken: response.data.nextPageToken,
        category: keyword,
        homeVideosStatus: false,
      },
    });

    console.log("response", response);
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAILURE,
      payload: error.message,
    });
  }
};

//display indiviual video on new page on click
export const getVideoById = (id) => async (dispatch) => {
  dispatch({
    type: SELECTED_VIDEO_REQUEST,
  });
  try {
    const response = await networkRequest.get("/videos", {
      params: {
        part: "snippet,statistics",
        id: id,
      },
    });

    dispatch({
      type: SELECTED_VIDEO_SUCCESS,
      payload: response.data.items[0],
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SELECTED_VIDEO_FAILURE,
      payload: error.message,
    });
  }
};

//display related videos on sidebar
export const getRelatedVieos = (id) => async (dispatch) => {
  dispatch({
    type: RELATED_VIDEOS_REQUEST,
  });
  try {
    const response = await networkRequest.get("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 15,
        type: "video",
      },
    });

    dispatch({
      type: RELATED_VIDEOS_SUCCESS,
      payload: response.data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: RELATED_VIDEOS_FAILURE,
    });
  }
};

//Search bar actions
export const getVideosBySearch = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SEARCH_VIDEO_REQUEST,
    });
    const response = await networkRequest.get("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: "video, channel",
      },
    });

    dispatch({
      type: SEARCH_VIDEO_SUCCESS,
      payload: response.data.items,
    });

    console.log("response", response);
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SEARCH_VIDEO_FAILURE,
      payload: error.message,
    });
  }
};

//display videos by channel
export const getChannelVideos = (id) => async (dispatch) => {
  dispatch({
    type: CHANNEL_VIDEOS_REQUEST,
  });
  try {
    //1.get upload playlist id
    const {
      data: { items },
    } = await networkRequest.get("/channels", {
      params: {
        part: "contentDetails",
        id: id,
      },
    });

    console.log("channel video response", items);
    //get uploadPlayListId from channel response and use it to get all videos os that channel
    const uploadPlayListId = items[0].contentDetails.relatedPlaylists.uploads;

    //1.get the videos using uploadPlayListId that received form 1st request
    const { data } = await networkRequest.get("/playlistItems", {
      params: {
        part: "contentDetails, snippet",
        playlistId: uploadPlayListId,
        maxResults: 30,
      },
    });

    dispatch({
      type: CHANNEL_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: CHANNEL_VIDEOS_FAILURE,
      payload: error.message,
    });
  }
};

//Liked videos
export const getLikedVideos = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: LIKED_VIDEOS_REQUEST,
    });
    const response = await networkRequest.get("/videos", {
      params: {
        part: "snippet, contentDetails,  statistics",
        myRating: "like",
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    console.log("liked videos", response.data.items);
    dispatch({
      type: LIKED_VIDEOS_SUCCESS,
      payload: response.data.items,
    });

    console.log("response", response);
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LIKED_VIDEOS_FAILURE,
      payload: error.message,
    });
  }
};

//Liked videos
export const likeVideo = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: LIKE_VIDEO_REQUEST,
    });
    const response = await networkRequest.post("/videos/rate", {
      params: {
        part: "snippet, contentDetails,  statistics",
        rating: "like",
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: LIKED_VIDEO_SUCCESS,
    });

    console.log("response", response);
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LIKED_VIDEO_FAILURE,
    });
  }
};
