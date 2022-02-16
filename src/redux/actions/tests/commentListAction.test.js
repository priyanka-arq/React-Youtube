import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as types from "../../actionType";
import MockAdapter from "axios-mock-adapter";
import networkRequest from "../../../api";
import mockStore from "../../../utils/mockStore";
import { addComment, getCommentsDetails } from "../commentListAction";

const mock = new MockAdapter(networkRequest, { onNoMatch: "throwException" });
let response;
let store;

beforeEach(() => {
  response = {
    items: ["item1", "item2"],
  };
});

afterAll(() => {
  mock.reset();
});

describe("get comments list action", () => {
  it("it returns comments when api is called", function (done) {
    mock.onGet("/commentThreads").reply(200, response);
    const expectedActions = [
      {
        type: types.COMMENTS_LIST_REQUEST,
      },
      {
        type: types.COMMENTS_LIST_SUCCESS,
        payload: response.items,
      },
    ];
    store = mockStore(
      {
        response,
        auth: {
          accessToken:
            "ya29.A0ARrdaM9KG5nxzuU4bOhVbHKu2EDj2lKG36NY7wtm8IVsKLEbo3_O699EDk8IxvhccuIHPUyhQTT5pXxmCAavDL4iTI7iblxFuIXDONABwlhi8LQHbhvxGfMn27FnCksi2qJhg4hn7-IzIcHxildJ0RIn2ragrw",
          user: {
            name: "Priyanka Patel",
            photoURL:
              "https://lh3.googleusercontent.com/a-/AOh14GgEX3SB8FVF-3OLqmdT3zAW0vRL6alhlseVN0bn=s96-c",
          },
          error: null,
          loading: false,
        },
      },
      expectedActions,
      done
    );
    store.dispatch(getCommentsDetails("abc"));

    expect(mock.history.get.length).toBe(1);
  });
});

describe("POST COMMENT ACTION", () => {
  it("it post comment", (done) => {
    const comment = {
      snippet: {
        videoId: "abc",
        topLevelComment: {
          snippet: {
            textOriginal: "nice",
          },
        },
      },
    };

    mock.onPost("/commentThreads").replyOnce(200);

    const expectedActions = [
      {
        type: types.CREATE_COMMENT_SUCCESS,
      },
    ];

    store = mockStore(
      {
        auth: {
          accessToken:
            "ya29.A0ARrdaM9KG5nxzuU4bOhVbHKu2EDj2lKG36NY7wtm8IVsKLEbo3_O699EDk8IxvhccuIHPUyhQTT5pXxmCAavDL4iTI7iblxFuIXDONABwlhi8LQHbhvxGfMn27FnCksi2qJhg4hn7-IzIcHxildJ0RIn2ragrw",
          user: {
            name: "Priyanka Patel",
            photoURL:
              "https://lh3.googleusercontent.com/a-/AOh14GgEX3SB8FVF-3OLqmdT3zAW0vRL6alhlseVN0bn=s96-c",
          },
          error: null,
          loading: false,
        },
      },
      expectedActions,
      done
    );

    store.dispatch(addComment("abc", "xyz"));

    expect(mock.history.post.length).toBe(1);
  });
});
