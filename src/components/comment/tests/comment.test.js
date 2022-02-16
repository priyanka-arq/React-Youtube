import Comment from "../Comment";
import { testStore } from "../../../utils/testStore";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const comment = {
    authorProfileImageUrl:
      "https://yt3.ggpht.com/CjsSMRQ7VyPakuFAu6fPSw0MOmQPBxb2Jt0QbITftcGX4sc9uA4NXOuv6XEJaHIx9MSr_CSMY04=s48-c-k-c0x00ffffff-no-rj",
    authorDisplayName: "Innovato Rayeen",
    textDisplay: "Chutiya banayi wo aapko 😂",
    likeCount: 12,
    publishedAt: "2022-01-31T03:53:38Z",
  };

  const wrapper = mount(
    <Provider store={store}>
      <Comment comment />
    </Provider>
  );

  return wrapper;
};

describe("Should render comment component correctly", () => {
  let wrapper;
  let initialState = {};
  wrapper = setUp(initialState);

  test("Should render Comment component correctly ", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  expect(wrapper.find(".comment")).toHaveLength(1);
});
