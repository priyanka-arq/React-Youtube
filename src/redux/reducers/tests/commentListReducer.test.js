import { COMMENTS_LIST_SUCCESS } from "../../actionType";
import { commentListReducer } from "../commentListReducer";

let initialState;
let action;
let newState;

beforeEach(() => {
  initialState = { loading: true, comments: null, error: null };
  action = {};
  newState = commentListReducer(initialState, action);
});

describe("channelDetailsReducer", () => {
  //test for default state return
  it("Should return default state", (done) => {
    //if second parameter action is not defined that means an empty {}, then it returns default state
    expect(newState).toEqual(initialState);
    done();
  });

  it("Should return new state if receiving type", (done) => {
    const comments = ["comment1", "comment2"];

    action = { type: COMMENTS_LIST_SUCCESS, payload: comments };
    newState = commentListReducer(initialState, action);

    expect(newState).toEqual({ ...initialState, comments, loading: false });
    done();
  });
});
