import { useEffect } from "react";
import Home from "@arcgis/core/widgets/Home";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import Legend from "@arcgis/core/widgets/Legend";
import AreaMeasurement3D from "@arcgis/core/widgets/AreaMeasurement3D";

const Widgets = ({ view }) => {

    useEffect(() => {
        view.ui.add( new Home({ view: view }), "top-right" );

        view.ui.add( new Legend({ view: view }), "bottom-right" );

        view.ui.add( new BasemapToggle({ view: view }), "top-right" );

        view.ui.add( new AreaMeasurement3D({ view: view }), "bottom-left" );
    }, []);

    return null;
};

export default Widgets;