import { login, logout } from "../../actions/authAction";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOAD_PROFILE,
  LOGIN_FAILURE,
  LOGOUT,
} from "../../actionType";

const createMockStore = configureMockStore([thunk]);

let profile;
let accessToken;
let error;
let actions;
let action;

beforeEach(() => {
  profile = {
    name: "Priyanka Patel",
    photoURL:
      "https://lh3.googleusercontent.com/a-/AOh14GgEX3SB8FVF-3OLqmdT3zAW0vRL6alhlseVN0bn=s96-c",
  };
  (error =
    "Firebase: Error (auth/operation-not-supported-in-this-environment)."),
    (accessToken = "AIzaSyCLg4cHF4d0Sj_UwQQhV1JPvCngteYtNkM");
});

describe("auth action", () => {
  test("LOGIN_SUCCESS action", () => {
    action = { type: LOGIN_SUCCESS, payload: accessToken };
    expect(action).toEqual({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });
  });

  test("login action", () => {
    const expected = [
      { type: LOGIN_REQUEST },
      {
        type: LOGIN_SUCCESS,
        payload: accessToken,
      },
      {
        type: LOAD_PROFILE,
        payload: profile,
      },
      {
        type: LOGIN_FAILURE,
        payload: error,
      },
    ];
    const store = createMockStore();
    store.dispatch(login()).then(() => {
      actions = store.getActions();
      expect(store.getActions()).toMatchSnapshot();
      expect(actions[0]).toEqual({
        type: LOGIN_REQUEST,
      });
      expect(actions[1]).toEqual({
        type: LOGIN_FAILURE,
        payload: error,
      });
    });
  });
});

describe("LOGOUT", () => {
  const store = createMockStore();
  test("logout action", () => {
    store.dispatch(logout()).then(() => {
      actions = store.getActions();
      expect(store.getActions()).toMatchSnapshot();
      expect(actions[0]).toEqual({
        type: LOGOUT,
      });
    });
  });
});
