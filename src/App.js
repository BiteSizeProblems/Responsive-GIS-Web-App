import React from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import Start from "./content/Start";
import Topbar from "./components/Topbar";
import Viewer from "./content/Viewer";
import Help from "./content/Help";

import "./App.css";

function App() {

  return (
    <div className="app_container">
      <Topbar />
      <div className="app_content">
        <Start />
        <Viewer />
        <Help />
      </div>
    </div>
  );
}

export default App;
