import {
  CHANNEL_DETAILS_FAILURE,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
} from "../actionType";

export const channelDetailsReducer = (
  state = { loading: true, channel: {}, error: null },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case CHANNEL_DETAILS_REQUEST:
      return {
        ...state,
        loadind: true,
      };

    case CHANNEL_DETAILS_SUCCESS:
      return {
        ...state,
        channel: payload,
        loading: false,
      };
    case CHANNEL_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        channel: {},
        error: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
