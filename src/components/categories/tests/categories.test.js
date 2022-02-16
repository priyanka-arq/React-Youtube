import Categories from "../Categories";
import React from "react";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import toJSON from "enzyme-to-json";
import { findByTestAtrr } from "../../../utils/testStore";

let wrapper;
let props;
let handleClickSpy;
let handleClick;

const mockStore = configureMockStore([thunk]);

beforeEach(() => {
  props = {
    handleClickSpy: jest.fn(),
  };
  const store = mockStore({
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
  });

  wrapper = mount(
    <Provider store={store}>
      <Categories handleClick />
    </Provider>
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe("Categories component", () => {
  describe("Should render categories  correctly ", () => {
    test("Should render categories  correctly ", () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it("should render a Categories component", () => {
      expect(wrapper.find("Categories").length).toEqual(1);
    });

    it("Should render without errors", () => {
      const component = findByTestAtrr(wrapper, "categoriesComponent");
      expect(component.length).toBe(1);
    });
  });
});

//##############
describe("Render span components ", () => {
  handleClick = jest.fn();
  const clickEventMocked = {
    getPopularVideos: jest.fn(),
    getVideosByCategory: jest.fn(),
  };
  it("should render a span component", () => {
    const component = findByTestAtrr(wrapper, "buttonComponent");
    expect(component.length).toBe(26);
  });

  it("Test onclick event ", () => {
    let active;
    active = wrapper.find("Categories").find(".active");
    // const component = findByTestAtrr(wrapper, "buttonComponent");
    // component.at(0).simulate("click", clickEventMocked);
    active.simulate("click", clickEventMocked);
    expect(active).toHaveLength(1);
    active = wrapper.find("Categories").find(".active");
    //const callBack = handleClick.mock.calls.length;

    //expect(clickEventMocked.getPopularVideos).toBeCalledTimes(1);
    //expect(clickEventMocked.getVideosByCategory).toBeCalledTimes(1);
  });
});
