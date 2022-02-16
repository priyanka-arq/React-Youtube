import Home from "../Home";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "../../../Root.js";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { useSelector, useDispatch } from "react-redux";
import { getPopularVideos } from "../../../redux/actions/videosAction";
import * as redux from "react-redux";
import * as ReactReduxHooks from "../react-redux-hooks.js";
import { store } from "../../../utils/mockdata";
import { HOME_VIDEOS_REQUEST } from "../../../redux/actionType";

let wrapper;
let fetchData;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Render Home component", () => {
  fetchData = jest.fn();

  it("Should render Home correctly ", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("Should rander Header correctly", () => {
    //expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper.find("Categories").length).toEqual(1);
  });

  //checks that loading is false and videos is fetched from store
  it("should mock dispatch", function () {
    expect(wrapper.find("Video").length).toEqual(2);
  });
});

describe("Home component hook testing", () => {
  it("dispatch  action to store", () => {
    const actions = store.getActions();

    getPopularVideos();
    console.log(actions);
    expect(actions[0]).toEqual({ type: HOME_VIDEOS_REQUEST });
  });
});
