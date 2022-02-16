import { store } from "../../../utils/mockdata";
import { getChannelDetails } from "../channelAction";
import { CHANNEL_DETAILS_REQUEST } from "../../actionType";
//import moxios from 'moxios'

describe("CHANNEL_DETAILS ACTION", () => {
  test("dispatch channel details actions", () => {
    store.dispatch(getChannelDetails()).then(() => {
      const actions = store.getActions();
      expect(store.getActions()).toMatchSnapshot();
      console.log(actions);
      expect(actions[0]).toEqual({ type: CHANNEL_DETAILS_REQUEST });
    });
    expect(store.getActions()).toMatchSnapshot();
  });
});

//#########    using moxios   ###########
// const mockSuccess = (data) => ({ status: 200, response: { data } });
// const mockError = (data) => ({ status: 500, response: { error } });

// describe("Fetch channel details", () => {
//   beforeEach(() => moxios.install());
//   afterEach(() => moxios.uninstall());

//   test("API call and get channel details", () => {
//     const channel = {
//       kind: "youtube#channle",
//       id: "123",
//       etag: "xDjIUZmbJ8efm6xXRpUps1-9Q6k",
//       snippet: {},
//       contentDetails: {},
//       statistics: {},
//     };

//     const error = "";

//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith(mockSuccess(channel));
//     });

//     const expected = [
//       { type: CHANNEL_DETAILS_REQUEST },
//       {
//         type: CHANNEL_DETAILS_SUCCESS,
//         payload: channel,
//       },
//       {
//         type: CHANNEL_DETAILS_FAILURE,
//         payload: error,
//       },
//     ];
//     const channelDetails = getChannelDetails("123");
//     store.dispatch(getChannelDetails("123")).then(() => {
//       const actions = store.getActions();
//       expect(actions[0]).toEqual({
//         type: CHANNEL_DETAILS_REQUEST,
//       });
//       expect(actions[1]).toEqual(expected[1]);
//       expect(actions[0]).toEqual(getChannelDetails());
//       expect(channelDetails).toEqual({
//         kind: "youtube#channle",
//         id: "123",
//         etag: "xDjIUZmbJ8efm6xXRpUps1-9Q6k",
//         snippet: {},
//         contentDetails: {},
//         statistics: {},
//       });
//     });
//   });
// });
