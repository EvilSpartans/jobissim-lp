import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";

import App from "./App";

const LandingElement = reactToWebComponent(App, React, ReactDOM, {
  shadow: "open",
});

customElements.define("react-landing", LandingElement);
