import { CHANNEL_DETAILS_SUCCESS } from "../../actionType";
import { channelDetailsReducer } from "../channelDetailsReducer";

let initialState;
let action;
let newState;

beforeEach(() => {
  initialState = { loading: true, channel: {}, error: null };
  action = {};
  newState = channelDetailsReducer(initialState, action);
});

describe("channelDetailsReducer", () => {
  //test for default state return
  it("Should return default state", (done) => {
    //if second parameter action is not defined that means an empty {}, then it returns default state
    expect(newState).toEqual(initialState);
    done();
  });

  it("Should return new state if receiving type", (done) => {
    const initialState = { loading: false, channel: {}, error: null };
    const channel = {
      kind: "youtube#channle",
      id: "123",
      etag: "xDjIUZmbJ8efm6xXRpUps1-9Q6k",
      snippet: {},
      contentDetails: {},
      statistics: {},
    };

    action = { type: CHANNEL_DETAILS_SUCCESS, payload: channel };
    newState = channelDetailsReducer(initialState, action);

    expect(newState).toEqual({ ...initialState, channel });
    done();
  });
});
