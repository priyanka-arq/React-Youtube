import networkRequest from "../../api";
import {
  COMMENTS_LIST_FAILURE,
  COMMENTS_LIST_SUCCESS,
  COMMENTS_LIST_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
} from "../actionType";

export const getCommentsDetails = (id) => async (dispatch) => {
  dispatch({
    type: COMMENTS_LIST_REQUEST,
  });
  try {
    const { data } = await networkRequest.get("/commentThreads", {
      params: {
        part: "snippet ",
        videoId: id,
      },
    });

    dispatch({
      type: COMMENTS_LIST_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: COMMENTS_LIST_SUCCESS,
    });
  }
};

export const addComment = (id, text) => async (dispatch, getState) => {
  try {
    const obj = {
      snippet: {
        videoId: id,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    };

    await networkRequest.post("/commentThreads", obj, {
      params: {
        part: "snippet ",
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: CREATE_COMMENT_SUCCESS,
    });
    //feetch all commnents immmedietly after writing adding comment
    //setTimeout(() => dispatch(getCommentsDetails(id)), 3000);
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: CREATE_COMMENT_FAILURE,
    });
  }
};
