import { CHANNEL_VIDEOS_SUCCESS } from "../../actionType";
import { channelVideosReducer } from "../channelVideosReducer";
import * as types from "../../actionType";

let initialState;
let action;
let newState;

beforeEach(() => {
  initialState = { loading: true, videos: [], error: null };
  action = {};
  newState = channelVideosReducer(initialState, action);
});

describe("channelDetailsReducer", () => {
  //test for default state return
  it("Should return default state", (done) => {
    //if second parameter action is not defined that means an empty {}, then it returns default state
    expect(newState).toEqual(initialState);
    done();
  });

  it("Should return new state if receiving type", (done) => {
    const videos = ["video1", "video2"];
    action = { type: CHANNEL_VIDEOS_SUCCESS, payload: videos };
    newState = channelVideosReducer(initialState, action);

    expect(newState).toEqual({ ...initialState, videos, loading: false });
    done();
  });
});
