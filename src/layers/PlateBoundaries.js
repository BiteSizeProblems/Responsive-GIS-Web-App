import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";

const renderer = new SimpleRenderer({
  symbol: {
    type: "simple-line",
    color: "dodgerblue",
    outline: {
      color: 'red',
      width: 1
    },
  }
});

const Boundaries = new FeatureLayer({
  url: "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/Tectonic_Plates_and_Boundaries/FeatureServer/1",
  renderer: renderer
});

const PlateBoundaries = new GroupLayer({
  title: "US Demographics",
    visible: true,
    visibilityMode: "exclusive",
    layers: [Boundaries],
    opacity: 0.75
});

export default PlateBoundaries