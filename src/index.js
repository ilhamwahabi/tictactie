import React from "react";
import ReactDOM from "react-dom";
import "typeface-raleway";
import splitbee from '@splitbee/web';

import App from "./App";
import "./css/index.css";

splitbee.init()

ReactDOM.render(<App />, document.getElementById("root"));
