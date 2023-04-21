import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css"
import "./index.css";
import './i18n';
import TagManager from 'react-gtm-module'
import "bootstrap/dist/js/bootstrap.bundle.min"
import App from "./App";

const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_ID
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(<App />, document.getElementById("root"));