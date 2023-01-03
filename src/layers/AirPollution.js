import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const AirPollution = new FeatureLayer({
    url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Air_Quality_PM25_Latest_Results/FeatureServer"
});

export default AirPollution;