import App from "./App";
import { testStore } from "./utils/testStore";
import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import toJSON from "enzyme-to-json";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  // .childAt(0)
  // .dive();

  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  const initialState = {
    homeVideos: {},
    selectedVideo: {},
    channelDetails: {},
    subscriptionStatus: {},
    commentList: {},
    relatedVideos: {},
    searchedVideos: {},
    subscriptionChannelVideos: {},
    channelVideos: {},
    likedVideos: {},
  };
  wrapper = setUp(initialState);

  test("Should render App component correctly ", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
