import React, { useState } from "react";
import { AiFillSetting } from 'react-icons/ai';
import { RiEarthquakeLine } from 'react-icons/ri';
import { TbBuildingFactory } from 'react-icons/tb';
import { HiOutlineGlobeAsiaAustralia } from 'react-icons/hi2';
import { MdOutlineLocationCity } from 'react-icons/md';
import { GiTornado } from 'react-icons/gi';

import HomeButton from "./HomeButton";
import HelpButton from "./HelpButton";
import ViewButton from "./ViewButton";

import "./Topbar.css";

function Topbar() {

  const [earthquakes, setEarthquakes] = useState(false);
  const [pollution, setPollution] = useState(false);
  const [plates, setPlates] = useState(false);
  const [cities, setCities] = useState(false);
  const [cyclones, setCyclones] = useState(false);

  return (
    <div className="topbar_container">
      <div className="topbar_content_container">
        <div className="topbar_content_start">
          <HomeButton />
        </div>
        <div className="topbar_content_center">
          <ViewButton id="Earthquakes" isOn={earthquakes} icon={RiEarthquakeLine} caption="Earthquakes" handleToggle={() => setEarthquakes(!earthquakes)} />
          <ViewButton id="AirPollution" isOn={pollution} icon={TbBuildingFactory} caption="Air Pollution" handleToggle={() => setPollution(!pollution)} />
          <ViewButton id="TectonicPlates" isOn={plates} icon={HiOutlineGlobeAsiaAustralia} caption="Tectonic Plates" handleToggle={() => setPlates(!plates)} />
          <ViewButton id="Cities" isOn={cities} icon={MdOutlineLocationCity} caption="Cities" handleToggle={() => setCities(!cities)} />
          <ViewButton id="Cyclones" isOn={cyclones} icon={GiTornado} caption="Cyclones" handleToggle={() => setCyclones(!cyclones)} />
        </div>
        <div className="topbar_content_end">
          <HelpButton />
        </div>
      </div>
    </div>
  );
}

export default Topbar;