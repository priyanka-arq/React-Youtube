import Comments from "../Comments";
import { testStore } from "../../../utils/testStore";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { store } from "../../../utils/mockdata";

// const setUp = (initialState = {}) => {
//   const store = testStore(initialState);
//   const wrapper = mount(
//     <Provider store={store}>
//       <Comments />
//     </Provider>
//   );

//   return wrapper;
// };

// describe("Should render comment component correctly", () => {
//   let wrapper;
//   let initialState = {
//     auth: {
//       accessToken:
//         "ya29.A0ARrdaM9KG5nxzuU4bOhVbHKu2EDj2lKG36NY7wtm8IVsKLEbo3_O699EDk8IxvhccuIHPUyhQTT5pXxmCAavDL4iTI7iblxFuIXDONABwlhi8LQHbhvxGfMn27FnCksi2qJhg4hn7-IzIcHxildJ0RIn2ragrw",
//       user: {
//         name: "Priyanka Patel",
//         photoURL:
//           "https://lh3.googleusercontent.com/a-/AOh14GgEX3SB8FVF-3OLqmdT3zAW0vRL6alhlseVN0bn=s96-c",
//       },
//       error: null,
//       loading: false,
//     },
//   };

//   wrapper = setUp(initialState);

//   test("Should render Comment component correctly ", () => {
//     expect(toJSON(wrapper)).toMatchSnapshot();
//   });

//   expect(wrapper.find(".comments")).toHaveLength(1);
// });

///###################################################

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <Comments />
    </Provider>
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe("Comments Component", () => {
  it("Comments component snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

test("Should render Comments component correctly ", () => {
  expect(wrapper.find(".comments")).toHaveLength(1);
});
