import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";

const baseSymbolLayer = {
  type: "icon",
  resource: {primitive:"circle"},
  material:{color:[192,29,96,0.9]},
  size:3
}

const secondSymbolLayer = {
  type: "icon",
  resource: {primitive: "circle"},
  material: {color: [245,116,73,0.15]},
  outline: {color: [245,116,73,0.7], size: 1},
  size: 20
}

const thirdSymbolLayer = {
  type: "icon",
  resource: {primitive: "circle"},
  material: {color: [245,116,73,0.15]},
  outline: {color: [245,116,73,0.5], size: 1},
  size: 40
}

let renderer = {
  type: "class-breaks",
  field: "mag",
  classBreakInfos: [
    {
      minValue: -2,
      maxValue: 5,
      symbol: {
        type: "point-3d",
        symbolLayers: [
          baseSymbolLayer
        ]
      }
    },
    {
      minValue: 5,
      maxValue: 7,
      symbol: {
        type: "point-3d",
        symbolLayers: [
          baseSymbolLayer,
          secondSymbolLayer
        ]
      }
    },
    {
      minValue: 7,
      maxValue: 10,
      symbol: {
        type: "point-3d",
        symbolLayers: [
          baseSymbolLayer,
          secondSymbolLayer,
          thirdSymbolLayer
        ]
      }
    }
  ]
};

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

export default Earthquakes;