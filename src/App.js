import React, {useState, useEffect} from "react";
import $ from 'jquery';
import Start from "./content/Start";
import Topbar from "./components/Topbar";
import Viewer from "./content/Viewer";
import Help from "./content/Help";

import "./App.css";

function App() {

  const [backdrop, setBackdrop] = useState(false);

  useEffect(() => {

    $('#help-button').on('click', function(){ setBackdrop(true) });
    $('#backdrop_div').on('click', function(){ setBackdrop(false) });
    $('#help_exit').on('click', function(){ setBackdrop(false) });

  }, []);

  return (
    <div className="app_container">
      <Topbar />
      <div className="app_content" >
        <div id="backdrop_div" className="backdrop" style={{visibility: backdrop === true ? 'visible' : 'hidden'}} >

        </div>
        <Start />
        <Viewer />
        <Help />
      </div>
    </div>
  );
}

export default App;
