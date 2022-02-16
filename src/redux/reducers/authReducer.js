import {
  LOAD_PROFILE,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actionType";

//sessionStorage - when we close window sessionStorage will be null
//localStorage - when we close browser, after an hour accessToken will expire so if we try to visit app we will not get data and get some 403 or 404 error
const initialState = {
  accessToken: sessionStorage.getItem("ytc-access-token")
    ? sessionStorage.getItem("ytc-access-token")
    : null,
  user: sessionStorage.getItem("ytc-user")
    ? JSON.parse(sessionStorage.getItem("ytc-user"))
    : null,
  error: null,
  loading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        accessToken: null,
        loading: false,
        error: action.payload,
      };
    case LOAD_PROFILE:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        accessToken: null,
        user: null,
      };
    default:
      return {
        ...state,
      };
  }
};
