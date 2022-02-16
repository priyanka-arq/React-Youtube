import store from "./redux/store";
import { Provider } from "react-redux";

import "./style/_base.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

export default ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
