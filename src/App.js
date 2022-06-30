import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { FaBeer } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";

import { HeartFilled, HeartOutlined, HeartTwoTone, LoadingOutlined } from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { Camera } from "react-feather";

import { Lock } from "@styled-icons/material";

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* react-icons */}
        <FaBeer className="icon" />
        <AiFillAlert className="icon" />
        {/* ant-design/icons */}
        <HeartFilled spin className="icon" />
        <HeartOutlined rotate={180} className="icon" />
        <HeartTwoTone twoToneColor={"red"} className="icon" />
        <LoadingOutlined className="icon" />
        {/* react-fontawesome */}
        {/* <FontAwesomeIcon icon={faCoffee} className="icon" /> */}
        <FontAwesomeIcon icon="coffee" className="icon" />
        <FontAwesomeIcon icon={["fas", "coffee"]} className="icon" />
        <FontAwesomeIcon icon={["fas", "address-card"]} className="icon" />
        {/* react-feather */}
        <Camera className="icon" size={"3em"} />
        {/* styled-icons */}
        <Lock className="icon" size={"3em"} />
        {/* bootstrap-icons */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          fill="currentColor"
          class="bi bi-star-half icon"
          viewBox="0 0 16 16"
        >
          <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          fill="currentColor"
          className="bi bi-chevron-right icon"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </header>
    </div>
  );
}

export default App;
