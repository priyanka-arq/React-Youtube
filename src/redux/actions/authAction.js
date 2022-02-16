import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { firebaseApp } from "../../firebase";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOAD_PROFILE,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actionType";

// actionCreator is  a function #login is actionCreator
// action is an Object
// login function returns dispatch fucntion
export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
    const response = await signInWithPopup(auth, provider);

    //get accessToken
    const credential = GoogleAuthProvider.credentialFromResult(response);
    const accessToken = credential.accessToken;
    //get user profile
    const profile = {
      name: response.user.displayName,
      photoURL: response.user.photoURL,
    };

    //set accessToken and user in sessionStorage
    //stringify # profile Object
    //accessToken valid for 60min
    //#ytc is youtube-clone
    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
    console.log("Auth Response", response);
  } catch (error) {
    const credential = GoogleAuthProvider.credentialFromError(error);

    dispatch({
      type: LOGIN_FAILURE,
      payload: error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const auth = getAuth();
    await signOut(auth);

    dispatch({
      type: LOGOUT,
    });

    sessionStorage.removeItem("ytc-access-token");
    sessionStorage.removeItem("ytc-user");
  } catch (error) {
    console.log(error.message);
  }
};
