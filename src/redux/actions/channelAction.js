import networkRequest from "../../api";
import {
  CHANNEL_DETAILS_FAILURE,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
} from "../actionType";

export const getChannelDetails = (id) => async (dispatch) => {
  dispatch({
    type: CHANNEL_DETAILS_REQUEST,
  });
  try {
    const response = await networkRequest.get("/channels", {
      params: {
        part: "snippet,statistics, contentDetails",
        id: id,
      },
    });

    dispatch({
      type: CHANNEL_DETAILS_SUCCESS,
      payload: response.data.items[0],
    });
  } catch (error) {
    dispatch({
      type: CHANNEL_DETAILS_FAILURE,
      payload: error.message,
    });
  }
};
