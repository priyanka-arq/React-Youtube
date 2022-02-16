import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { homeVideosReducer } from "./reducers/homevideosReducer";
import { selectedVideoReducer } from "./reducers/selectedVideoReducer";
import { channelDetailsReducer } from "./reducers/channelDetailsReducer";
import {
  subscriptionReducer,
  subscriptionsChannelReducer,
} from "./reducers/subscriptionReducer";
import { commentListReducer } from "./reducers/commentListReducer";
import { relatedVideoReducer } from "./reducers/relatedVideoReduce";
import { searchVideoReducer } from "./reducers/searchVideoReducer";
import { channelVideosReducer } from "./reducers/channelVideosReducer";
import { likedVideosReducer } from "./reducers/likedVideosReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  subscriptionStatus: subscriptionReducer,
  commentList: commentListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchVideoReducer,
  subscriptionChannelVideos: subscriptionsChannelReducer,
  channelVideos: channelVideosReducer,
  likedVideos: likedVideosReducer,
});

export const middlewares = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

const store = createStoreWithMiddleware(rootReducer, composeWithDevTools());
// const store = createStore(
//   rootReducer,
//   {},
//   composeWithDevTools(applyMiddleware(thunk))
// );

export default store;
