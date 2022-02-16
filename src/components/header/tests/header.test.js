import React, { useState as useStateMock } from "react";

import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import toJSON from "enzyme-to-json";
import { findByTestAtrr } from "../../../utils/testStore";
import Header from "../Header";
import { store } from "../../../utils/mockdata";
import { BrowserRouter as Router } from "react-router-dom";

let wrapper;
let handleClick;
let input;
const mockStore = configureMockStore([thunk]);

beforeEach(() => {
  //   setState = jest.fn();
  //   const useStateSpy = jest.spyOn(React, "useState");
  //   useStateSpy.mockImplementation((init) => [init, setState("React courses")]);

  wrapper = mount(
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Render Header component", () => {
  handleClick = jest.fn();

  //mock function form submit event
  const formEventMocked = { preventDefault: jest.fn() };

  it("Should rander Header correctly", () => {
    //expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper.find(".header").length).toEqual(1);
  });

  it("should handle onClick event", () => {
    expect(wrapper.find("form")).toHaveLength(1);
  });

  it("should handle form submit event", () => {
    wrapper.find("form").simulate("submit", formEventMocked);
    expect(formEventMocked.preventDefault).toBeCalledTimes(1);
  });

  it("should set search on input change", () => {
    const value = "React courses";
    input = wrapper.find("input");
    const event = { target: { name: "input", value: "React courses" } };

    input.simulate("change", event);
    input = wrapper.find("input");

    expect(input.prop("value")).toEqual(value);
  });
});
