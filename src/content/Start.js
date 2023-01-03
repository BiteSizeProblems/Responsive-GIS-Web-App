import React, { useEffect, useState } from "react";
import $ from 'jquery';

import "./Start.css";

function Start() {

  const [visibility, setVisibility] = useState(true);

  function runViewer() {
    setVisibility(false);
  }

  useEffect(() => {

    $('#home-button').on('click', function(){ setVisibility(true) });

  }, []);

  return (
    <div className="start_container" style={{visibility: visibility === true ? 'visible' : 'hidden'}}>
      <div className="start_content">
        <div className="start_title_container" >
          <h1>Natural Disasters</h1>
        </div>
        <div className="start_button_container" >
          <button onClick={e => runViewer()}>GO</button>
        </div>
      </div>
    </div>
  );
}

export default Start;