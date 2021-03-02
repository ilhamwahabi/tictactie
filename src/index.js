import React from "react";
import ReactDOM from "react-dom";
import "typeface-raleway";
import splitbee from '@splitbee/web';

import App from "./App";
import "./css/index.css";

splitbee.init({
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
})

ReactDOM.render(<App />, document.getElementById("root"));
