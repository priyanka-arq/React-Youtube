import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

import store from "./redux/store";
import App from "./App";
import "./style/_base.scss";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Root>
//     <Router>
//       <App />
//     </Router>
//   </Root>,
//   document.getElementById("root")
// );
