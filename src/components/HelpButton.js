import React from "react";
import { FiHelpCircle } from 'react-icons/fi';

import "./HelpButton.css";

const HelpButton = () => {

  return (
    <button id="help-button" className="help_button_container" >
      <FiHelpCircle className="help_button_icon" />
    </button>
  );
};

export default HelpButton;