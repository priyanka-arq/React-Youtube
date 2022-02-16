import { createStore, applyMiddleware, combineReducers } from "redux";
import { rootReducer, middlewares } from "../redux/store";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
export const testStore = (initialState = {}) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );

  return createStoreWithMiddleware(rootReducer, initialState);
};
// const mockStore = configureStore([thunk]);

// export const testStore = (state = {}) => {
//   return mockStore({
//     ...state,
//   });
// };
