//############################//

//inside src => craete __mocks__ => axios.js
//paste following code

const mockAxios = jest.genMockFromModule("axios");

// this is the key to fix the axios.create() undefined error!
mockAxios.create = jest.fn(() => mockAxios);
mockAxios.post = jest.fn(() => mockAxios);
mockAxios.get = jest.fn(() => mockAxios);

export default mockAxios;

// export default {
//   get: jest.fn(() => Promise.resolve({ data: {} })),
//   create: jest.fn(() => Promise.resolve({ data: {} })),
// };

//#########################################

import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  getCommentsDetails,
  addComment,
} from "../redux/actions/commentListAction";

import {
  COMMENTS_LIST_REQUEST,
  COMMENTS_LIST_SUCCESS,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  COMMENTS_LIST_FAILURE,
} from "../redux/actionType";

let actions;
let store;
const createMockStore = configureMockStore([thunk]);

describe("get comments list action", () => {
  it("it returns data when api is called", async function () {
    const data = { response: true };
    const comments = [
      {
        kind: "youtube#commentThread",
        etag: "9SadOUrGkPQSt0sorsFijKTBL80",
        id: "Ugwybolefx_P4E6phah4AaABAg",
        snippet: {},
      },
      {
        kind: "youtube#commentThread",
        etag: "9SadOUrGkPQSt0sorsFijKTBL80",
        id: "Ugwybolefx_P4E6phah4AaABAg",
        snippet: {},
      },
    ];
    //mock.onGet("/commentThreads").reply(200, comments);

    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { results: comments },
      })
    );

    // expect(mockAxios.get).toHaveBeenCalledTimes(1);

    store = createMockStore({
      commentList: [
        {
          kind: "youtube#commentThread",
          etag: "9SadOUrGkPQSt0sorsFijKTBL80",
          id: "Ugwybolefx_P4E6phah4AaABAg",
          snippet: {},
        },
        {
          kind: "youtube#commentThread",
          etag: "9SadOUrGkPQSt0sorsFijKTBL80",
          id: "Ugwybolefx_P4E6phah4AaABAg",
          snippet: {},
        },
      ],
    });

    store.dispatch(getCommentsDetails("abc")).then(() => {
      expect(store.getActions()).toContainEqual({
        type: COMMENTS_LIST_REQUEST,
      });
    });

    //expect(mock.history.get.length).toBe(1);
  });
});

///###########################
describe("add comment", () => {
  const store = createMockStore({
    auth: {
      accessToken: "AIzaSyCLg4cHF4d0Sj_UwQQhV1JPvCngteYtNkM",
    },
  });

  test("add comment action", () => {
    const comment = "nice";
    const auth = { accessToken: "AIzaSyCLg4cHF4d0Sj_UwQQhV1JPvCngteYtNkM" };

    mockAxios.post("/commentThreads", comment, {
      params: {
        part: "snippet ",
      },
      headers: {
        Authorization: `Bearer ${auth.accessToken}`,
      },
    });

    expect(mockAxios.post).toHaveBeenCalledTimes(1);

    store.dispatch(addComment("abc", "xyz")).then(() => {
      actions = store.getActions();
      expect(store.getActions()).toMatchSnapshot();

      expect(actions[0]).toEqual({
        type: CREATE_COMMENT_SUCCESS,
      });
    });
  });
});

describe("commentList action", () => {
  const store = createMockStore({});

  it("gets a comments list", () =>
    store.dispatch(getCommentsDetails("abc")).then(() =>
      expect(store.getActions()).toContainEqual({
        type: COMMENTS_LIST_FAILURE,
      })
    ));
});

describe("fetches comments ", async () => {
  const comments = [
    {
      kind: "youtube#commentThread",
      etag: "9SadOUrGkPQSt0sorsFijKTBL80",
      id: "Ugwybolefx_P4E6phah4AaABAg",
      snippet: {},
    },
    {
      kind: "youtube#commentThread",
      etag: "9SadOUrGkPQSt0sorsFijKTBL80",
      id: "Ugwybolefx_P4E6phah4AaABAg",
      snippet: {},
    },
  ];

  it("should execute fetch data", () => {
    store = createMockStore();
    // Return the promise
    return store.dispatch(getCommentsDetails()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: COMMENTS_LIST_REQUEST });
    });
  });
});
