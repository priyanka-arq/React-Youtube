import axios from "axios";
import { SET_CHANNEL_ICON, SET_VIDEO_DETAILS } from "./redux/actionType";

const networkRequest = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});

export default networkRequest;

export const getVideoDetails = async (videoId, dispatch) => {
  //networkRequest is axios instant, destructure items from response we getting from network request
  try {
    const {
      data: { items },
    } = await networkRequest("/videos", {
      params: {
        part: "contentDetails,statistics",
        id: videoId,
      },
    });
    dispatch({
      type: SET_VIDEO_DETAILS,
      payload: items[0],
    });
  } catch (error) {
    console.log(error.message);
  }
};

// export const getVideoDetails = (_videoId) => async (dispatch) => {
//   try {
//     //request is axios instant, destructure items from response we getting from network request
//     const {
//       data: { items },
//     } = await networkRequest("/videos", {
//       params: {
//         part: "contentDetails, statistics",
//         id: _videoId,
//       },
//     });
//     console.log("response.data.items", items);
//     dispatch({
//       type: SET_VIDEO_DETAILS,
//       payload: items[0],
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export c-0wsd onst getChannelIcon = async (channelId, dispatch) => {
//   try {54
//     //request is axios instant, destructure items from response we getting from network request
//     const {
//       data: { items },
//     } = await networkRequest("/channels", {
//       params: {
//         part: "snippet",
//         id: channelId,
//       },
//     });
//     dispatch({
//       type: SET_CHANNEL_ICON,
//       payload: items,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
