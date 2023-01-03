import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const less1m = {
  type: "simple-marker",
  color: "#009933",
  style: "solid",
  size: 2,

};

const less5m = {
  type: "simple-marker",
  color: "#cccc00",
  style: "solid",
  size: 3,

};

const less10m = {
  type: "simple-marker",
  color: "#ff9900",
  style: "solid",
  size: 4,
  outline: {
    width: 10,
    color: [102, 102, 153, 0.2]
  }
};

const less20m = {
  type: "simple-marker",
  color: "#ff0000",
  style: "solid",
  size: 6,
  outline: {
    width: 10,
    color: [102, 102, 153, 0.2]
  }
};

const more20m = {
  type: "simple-marker",
  color: "#cc00ff",
  style: "solid",
  size: 8,
  outline: {
    width: 10,
    color: [102, 102, 153, 0.2]
  }
};

const renderer = {
  type: "class-breaks",
  field: "POP",
  classBreakInfos: [
    {
      minValue: 0,
      maxValue: 999999,
      symbol: less1m,
      label: "< 1m"
    },
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
            label: "City Type"
          },
          {
            fieldName: "POP",
            label: "Population"
          },
          {
            fieldName: "POP_RANK",
            label: "Population Rank"
          }
        ]
      }
     ]
}

const Cities = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer",
    renderer: renderer
});

Cities.popupTemplate = PopupTemplate;

export default Cities;