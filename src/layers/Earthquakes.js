import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";

const renderer = new SimpleRenderer({
  symbol: {
    type: "simple-marker",
    color: "dodgerblue",
    outline: {
      color: [0, 0, 0, 0.5],
      width: 1
    },
    size: 7.5
  },
  visualVariables: [
    {
      type: "color",
      field: "MAG",
      stops: [
        { value: 1, color: "#A6F55D" },  
        { value: 2, color: "#3B7902" },
        { value: 3, color: "#FBD004" },
        { value: 4, color: "#C1A001" },
        { value: 5, color: "#F96C00" },
        { value: 6, color: "#A24701" },
        { value: 7, color: "#FF0F04" },
        { value: 8, color: "#B30B03" },
        { value: 9, color: "#6F0802" },
        { value: 10, color: "#21130d" },
      ]
    },
    {
      type: "size",
      field: "MAG",
      minDataValue: 1,
      maxDataValue: 10,
      minSize: 1,
      maxSize: 10
    }
  ]
});

const PopupTemplate = {
  title: "{PLACE}",
  content: [ 
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "PLACE",
          label: "Location"
        },
        {
          fieldName: "MAG",
          label: "Magnitude"
        },
        {
          fieldName: "TSUNAMI",
          label: "TSUNAMI"
        }
      ]
    }
   ]
}

const Earthquakes = new GeoJSONLayer({
    url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
    renderer: renderer
});

Earthquakes.popupTemplate = PopupTemplate;

Earthquakes.effect = "bloom(1.3, 0.1px, 15%)";


export default Earthquakes;