import { LOAD_PROFILE, LOGIN_SUCCESS } from "../../actionType";
import { authReducer } from "../authReducer";

let initialState;
let action;
let newState;

beforeEach(() => {
  initialState = {
    accessToken: "",
    user: "",
    error: null,
    loading: false,
  };
  action = {};
  newState = authReducer(initialState, action);
});

describe("auth Reducer", () => {
  const user = {
    name: "Priyanka Patel",
    photoURL:
      "https://lh3.googleusercontent.com/a-/AOh14GgEX3SB8FVF-3OLqmdT3zAW0vRL6alhlseVN0bn=s96-c",
  };

  const accessToken = "AIzaSyCLg4cHF4d0Sj_UwQQhV1JPvCngteYtNkM";

  it("Should return default state", () => {
    expect(newState).toEqual(initialState);
  });

  it("Should render LOGIN_SUCCESS correctly", () => {
    action = { type: LOGIN_SUCCESS, payload: accessToken };
    newState = authReducer(initialState, action);
    expect(newState).toEqual({ ...initialState, accessToken });
  });

  it("Should render LOAD_PROFILE correctly", () => {
    action = { type: LOAD_PROFILE, payload: user };
    newState = authReducer(initialState, action);
    expect(newState).toEqual({ ...initialState, user });
  });

  it("Should render initialState state if recive incorrect type", () => {
    action = { type: "ABHDVHA_SNAN", payload: user };
    newState = authReducer(initialState, action);
    expect(newState).toEqual({ ...initialState });
  });
});
