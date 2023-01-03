import React from "react";
import { AiFillHome } from 'react-icons/ai';

import "./HomeButton.css";

const HomeButton = () => {

  return (
    <button id="home-button" className="home_button_container" >
      <AiFillHome className="home_button_icon" />
      <h3 className="home_button_label" >NATURAL <br/> DISASTERS</h3>
    </button>
  );
};

export default HomeButton;