import networkRequest from "../../api";
import {
  SET_SUBSCRIPTION_STATUS,
  SUBSCRIBE_CHANNEL_FAILURE,
  SUBSCRIBE_CHANNEL_REQUEST,
  SUBSCRIBE_CHANNEL_SUCCESS,
  SUBSCRIPTIONS_CHANNEL_FAILURE,
  SUBSCRIPTIONS_CHANNEL_REQUEST,
  SUBSCRIPTIONS_CHANNEL_SUCCESS,
} from "../actionType";

export const checkSubscriptionStatus = (id) => async (dispatch, getState) => {
  try {
    const { data } = await networkRequest.get("/subscriptions", {
      params: {
        part: "snippet",
        forChannelId: id,
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    console.log(data);
    dispatch({
      type: SET_SUBSCRIPTION_STATUS,
      payload: data.items.length !== 0,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//get subscription video channel
export const getSubscribedChannels = () => async (dispatch, getState) => {
  dispatch({
    type: SUBSCRIPTIONS_CHANNEL_REQUEST,
  });
  try {
    const { data } = await networkRequest.get("/subscriptions", {
      params: {
        part: "snippet, contentDetails",
        mine: true,
        maxResults: 20,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: SUBSCRIPTIONS_CHANNEL_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: SUBSCRIPTIONS_CHANNEL_FAILURE,
      payload: error.response.data,
    });
  }
};

//Subscribe Channel
export const subascribeChannel = (channelId) => async (dispatch, getState) => {
  dispatch({
    type: SUBSCRIBE_CHANNEL_REQUEST,
  });
  try {
    const obj = {
      snippet: {
        resourceId: {
          channelId: channelId,
        },
      },
    };
    const { data } = await networkRequest.post("/subscriptions", obj, {
      params: {
        part: "snippet, contentDetails, subscriberSnippet",
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: SUBSCRIBE_CHANNEL_SUCCESS,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SUBSCRIBE_CHANNEL_FAILURE,
      payload: error.response.data,
    });
  }
};
