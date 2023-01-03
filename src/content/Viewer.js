import React, { useRef, useEffect, useState } from "react";
import $ from 'jquery';

import WebMap from "@arcgis/core/WebMap";
import SceneView from "@arcgis/core/views/SceneView";

import ChangeLayer from "../utils";
import Earthquakes from "../layers/Earthquakes";
import AirPollution from "../layers/AirPollution";
import PlateBoundaries from "../layers/PlateBoundaries";
import Cities from "../layers/Cities";
import Cyclones from "../layers/Cyclones";
import Widgets from "../components/Widgets.js";

import "./Viewer.css";

function Viewer() {

  const mapRef = useRef(null);
  const [view, setView] = useState();

  useEffect(() => {
    const myMap = new WebMap({basemap: {portalItem: { id: "33ea4550c8144e66847d902e4766c2f7" }}, layers: [  ]});

    const myView = new SceneView({
        container: mapRef.current,
        map: myMap,
        zoom: 1,
    }).when((view) => setView(view)); 

    myView.then(() => console.log('View is ready...'));

    $('#Earthquakes').on('click', function(){ ChangeLayer( '#Earthquakes', myMap, Earthquakes) });
    $('#AirPollution').on('click', function(){ ChangeLayer( '#AirPollution', myMap, AirPollution) });
    $('#TectonicPlates').on('click', function(){ ChangeLayer( '#TectonicPlates', myMap, PlateBoundaries) });
    $('#Cities').on('click', function(){ ChangeLayer( '#Cities', myMap, Cities) });
    $('#Cyclones').on('click', function(){ ChangeLayer( '#Cyclones', myMap, Cyclones) });

  }, []);

  return (
    <div className="viewer_container">
      <div ref={mapRef} className="viewer_mapDiv">
        {view && <Widgets view={view} />}
      </div>
    </div>
  );
}

export default Viewer;