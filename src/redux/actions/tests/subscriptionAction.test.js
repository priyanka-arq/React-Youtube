import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as types from "../../actionType";
import MockAdapter from "axios-mock-adapter";
import networkRequest from "../../../api";
import {
  checkSubscriptionStatus,
  getSubscribedChannels,
  subascribeChannel,
} from "../subscriptionAction";

let store;
let response;

const middlewares = [thunk];
const mock = new MockAdapter(networkRequest, { onNoMatch: "throwException" });

beforeEach(() => {
  response = {
    items: ["item1", "item2"],
  };
});
afterAll(() => {
  mock.reset();
});

function mockStore(getState, expectedActions = [], done) {
  if (!Array.isArray(expectedActions)) {
    throw new Error("expectedActions should be an array of expected actions.");
  }
  if (typeof done !== "undefined" && typeof done !== "function") {
    throw new Error("done should either be undefined or function.");
  }

  function mockStoreWithoutMiddleware() {
    return {
      getState() {
        return typeof getState === "function" ? getState() : getState;
      },

      dispatch(action) {
        const expectedAction = expectedActions.shift();

        try {
          expect(action).toEqual(expectedAction);
          if (done && !expectedActions.length) {
            done();
          }
          return action;
        } catch (e) {
          done(e);
        }
      },
    };
  }

  const mockStoreWithMiddleware = applyMiddleware(...middlewares)(
    mockStoreWithoutMiddleware
  );

  return mockStoreWithMiddleware();
}

describe("Subscription Action", () => {
  it("checkSubscriptionStatus when fetching api has been done", (done) => {
    mock.onGet("/subscriptions").reply(200, response);

    const expectedActions = [
      {
        type: types.SET_SUBSCRIPTION_STATUS,
        payload: response.items.length !== 0,
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
    store.dispatch(checkSubscriptionStatus("abc"));
    expect(mock.history.get.length).toBe(1);
  });
});

describe("getSubscribedChannels action", () => {
  it("getSubscribedChannels ", (done) => {
    mock.onGet("/subscriptions").reply(200, response);
    const expectedActions = [
      {
        type: types.SUBSCRIPTIONS_CHANNEL_REQUEST,
      },
      {
        type: types.SUBSCRIPTIONS_CHANNEL_SUCCESS,
        payload: response.items,
      },
      {
        type: types.SUBSCRIPTIONS_CHANNEL_FAILURE,
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
    store.dispatch(getSubscribedChannels());
    done();
    expect(mock.history.get.length).toBe(2);
  });
});
