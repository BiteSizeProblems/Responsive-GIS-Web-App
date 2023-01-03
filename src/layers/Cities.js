import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const less5m = {
  type: "simple-marker",
  color: "rgb(243,211,243, 0.5)",
  style: "circle",
  size: 10,
  outline: {
    width: 250,
    color: [243, 211, 243, 0.75]
  }
};

const less10m = {
  type: "simple-marker",
  color: "rgb(250,176,251, 0.75)",
  style: "circle",
  size: 10,
  outline: {
    width: 500,
    color: [250, 176, 251, 0.75]
  }
};

const less20m = {
  type: "simple-marker",
  color: "rgb(162,100,253, 0.75)",
  style: "circle",
  size: 10,
  outline: {
    width: 750,
    color: [162, 100, 253, 0.75]
  }
};

const more20m = {
  type: "simple-marker",
  color: "rgb(25,16,217, 0.75)",
  style: "circle",
  size: 10,
  outline: {
    width: 1000,
    color: [25, 16, 217, 0.75]
  }
};

const renderer = {
  type: "class-breaks",
  field: "POP",
  classBreakInfos: [
    {
      minValue: 1000000,
      maxValue: 4999999,
      symbol: less5m,
      label: "< 5m"
    },
    {
      minValue: 5000000, 
      maxValue: 9999999,
      symbol: less10m,
      label: "< 10m"
    },
    {
      minValue: 10000000,
      maxValue: 19999999,
      symbol: less20m,
      label: "< 20m"
    },
    {
      minValue: 20000000,
      maxValue: 30000000,
      symbol: more20m,
      label: "> 20m"
    }
  ]
};


  
  const PopupTemplate = {
    title: "{CITY_NAME}, {CNTRY_NAME}",
    content: [ 
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "STATUS",
            label: "Type"
          },
          {
            fieldName: "POP",
            label: "Population",
            format: {
              "places": 0,
              "digitSeparator": true
            }
          },
          {
            fieldName: "POP_RANK",
            label: "Ranked Group"
          }
        ]
      }
     ]
}

const Cities = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer",
    renderer: renderer,
});

Cities.popupTemplate = PopupTemplate;

export default Cities;