import React from "react";

import "./ViewButton.css";

const ViewButton = ( props ) => {

  const IconComponent = props.icon;

  return (
    <div className="tooltip">
      <input id={props.id} checked={props.isOn} onChange={props.handleToggle} className="react-switch-checkbox" type="checkbox" />
      <label style={{ background: props.isOn && 'orange', color: props.isOn && 'orange', boxShadow: props.isOn && 'inset 0 0 10px rgb(50, 20, 43)' }} className="react-switch-label" htmlFor={props.id} >
        <span className={`react-switch-button`} >
          <IconComponent className={`react-switch-icon`} style={{ color: props.isOn && 'orange' }}/>
        </span>
      </label>
      <span className="tooltiptext">{props.caption}</span>
    </div>
  );
};

export default ViewButton;