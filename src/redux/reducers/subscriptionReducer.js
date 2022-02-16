import {
  SET_SUBSCRIPTION_STATUS,
  SUBSCRIPTIONS_CHANNEL_FAILURE,
  SUBSCRIPTIONS_CHANNEL_REQUEST,
  SUBSCRIPTIONS_CHANNEL_SUCCESS,
} from "../actionType";

export const subscriptionReducer = (
  state = { subscriptionStatus: false },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SUBSCRIPTION_STATUS: {
      return {
        subscriptionStatus: payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export const subscriptionsChannelReducer = (
  state = { loading: false, videos: null },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case SUBSCRIPTIONS_CHANNEL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIPTIONS_CHANNEL_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case SUBSCRIPTIONS_CHANNEL_FAILURE:
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
