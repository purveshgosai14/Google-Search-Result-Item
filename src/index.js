import React from "react";
import { render } from "react-dom";
import Title from "./Title";
import URL from "./URL";
import Desc from "./Desc";
import "./App.css";

const App = () => (
  <div className="gMain">
    <div className="mainTitle">
      <h3 className="sHeader">
        <Title name="Vulcan Search: Digital Marketing Solutions Powered by Data ..." />
      </h3>
      <div className="search">
        <div>
          <div className="sam abc">
            <URL name="https://vulcansearch.com/" />
          </div>
          <Desc name="Digital marketing solutions designed to amplify performance and drive sustainable growth through multi-channel integration and cognitive technology."/>
        </div>
      </div>
    </div>
  </div>
);

render(<App />, document.getElementById("root"));