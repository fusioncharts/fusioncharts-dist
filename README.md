FusionMaps is a companion package meant to be used in conjunction with [FusionCharts](https://www.npmjs.com/package/fusioncharts) to render data-driven maps  (over 2,000+ maps for different continents, countries, states & regions). This package contains choropleth maps that can render on both desktop & mobile, with extended functionality like city or location markers, annotations, events etc.

This package contains definition files for all the maps. Map definition files are the path files required by FusionMaps to plot a map for a particular region. Each map has its own path file.

_By default, FusionCharts package only includes definition files for two maps - the World map and the USA map._

-   Official Website: [https://www.fusioncharts.com/](https://www.fusioncharts.com/)
-   FusionCharts NPM: [https://www.npmjs.com/package/fusioncharts](https://www.npmjs.com/package/fusioncharts)
-   Documentation: [https://www.fusioncharts.com/dev/](https://www.fusioncharts.com/dev/)
-   Map Specification Sheets: [https://www.fusioncharts.com/dev/maps/spec-sheets/](https://www.fusioncharts.com/dev/maps/spec-sheets/)
-   Support: [https://www.fusioncharts.com/contact-support](https://www.fusioncharts.com/contact-support)
-   Issues: [https://github.com/fusioncharts/fusionmaps-dist](https://github.com/fusioncharts/fusionmaps-dist)

---
### Table of Contents
- [Installing FusionMaps](#installing-fusionmaps)
- [Getting Started](#getting-started)
- [Using FusionMaps as an ES Module](#using-fusionmaps-as-an-es-module)
- [Related Packages](#related-packages)
  - [Front-end Integrations to help you easily integrate FusionCharts Suite in your projects/apps](#front-end-integrations-to-help-you-easily-integrate-fusioncharts-suite-in-your-projectsapps)
  - [Back-end Integrations to help you easily integrate FusionCharts Suite in your projects/apps](#back-end-integrations-to-help-you-easily-integrate-fusioncharts-suite-in-your-projectsapps)
- [Contact Support](#contact-support)
- [Folder Structure](#folder-structure)


## Installing FusionMaps
There are multiple ways to install FusionMaps. For general instructions, refer to this [developer docs page](https://www.fusioncharts.com/dev/map-guide/setup).

**Direct Download**
You can download zipped version [here](https://www.fusioncharts.com/download/map-definition-files).

**Using CDN**
Instead of downloading, you can also use FusionCharts’s CDN to access map definition files directly. See below for details

```html
<script src="https://cdn.fusioncharts.com/fusioncharts/latest/maps/<MAP_ALIAS>.js"></script>
```
`MAP_ALIAS` is the name of the map that you're plotting, used by FusionMaps. For each map, FusionMaps has a different JavaScript alias. e.g., World Map is `world` etc.

**Install from NPM**
```bash
npm install --save fusionmaps
```
You will also need FusionCharts package installed on your system to use maps. You can install the same using below command
```bash
npm install --save fusioncharts
```
See [npm documentation](https://docs.npmjs.com/) to know more about npm usage.


## Getting Started
Easiest way to render map is to include the FusionCharts JavaScript library files and map definition file in your webpage, create `<div>` container and chart instance, configure the data and render. Check this HTML snippet below:
```html
<!doctype html>
<html>
<head>
    <script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.maps.js"></script>
    <script src="https://cdn.fusioncharts.com/fusioncharts/latest/maps/fusioncharts.world.js"></script>
    <script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
</head>
<body>
  <div id="chart-container"></div>
  <script>
        FusionCharts.ready(function () {
            // chart instance
            var chart = new FusionCharts({
                type: "world",
                renderAt: "chart-container", // container where chart will render
                width: "600",
                height: "400",
                dataFormat: "json",
                dataSource: {
                    "chart": {
                      "caption": "Average Annual Population Growth",
                      "subcaption": " 1955-2015",
                      "numbersuffix": "%",
                      "includevalueinlabels": "1",
                      "labelsepchar": ": ",
                      "entityFillHoverColor": "#FFF9C4",
                      "theme": "fusion"
                    },
                    "data": [
                      { "id": "NA", "value": ".82", "showLabel": "1" },
                      { "id": "SA", "value": "2.04", "showLabel": "1" },
                      { "id": "AS", "value": "1.78", "showLabel": "1" },
                      { "id": "EU", "value": ".40", "showLabel": "1" },
                      { "id": "AF", "value": "2.58", "showLabel": "1" },
                      { "id": "AU", "value": "1.30", "showLabel": "1" }
                  ]
              }
            }).render();
        });
    </script>
</body>
</html>
```
As you can see in above example, each continent is referenced using an ID. Each map in FusionMaps has its own regions, each of which have its own ID and name. These are present in specification sheets for the map. You can find specification sheets for all maps [here](https://www.fusioncharts.com/dev/maps/spec-sheets/).

Learn more through resources below:
-   [Documentation](https://www.fusioncharts.com/dev/map-guide/simple-data-driven-maps)
-   [Examples](https://www.fusioncharts.com/explore/chart-gallery?product=fusionmaps)
-   [Marker Data](https://www.fusioncharts.com/dev/maps/marker-data/)
-   API [Events](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-events) & [Methods](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods)


## Using FusionMaps as an ES Module
FusionMaps can be loaded as an ES module via transpilers. 

The following examples presumes you are using npm to install FusionCharts and FusionMaps, see Installing FusionMaps for more details.
```javascript
import FusionCharts from 'fusioncharts/core';
import Maps from 'fusioncharts/maps';

// include map definition file from maps/es folder - import mapName from fusionmaps/maps/es/<MAP_ALIAS>
import World from fusionmaps/maps/es/world

// add chart as dependency - FusionCharts.addDep(ChartType);
FusionCharts.addDep(Maps);
FusionCharts.addDep(World);

// instantiate the chart.
var chart = new FusionCharts({
  type: "world",
  renderAt: "chart-container", // container where chart will render
  width: "600",
  height: "400",
  dataFormat: "json",
  dataSource: {
    "chart": {
      "caption": "Average Annual Population Growth",
      "subcaption": " 1955-2015",
      "numbersuffix": "%",
      "includevalueinlabels": "1",
      "labelsepchar": ": ",
      "entityFillHoverColor": "#FFF9C4"
    },
    "data": [
      { "id": "NA", "value": ".82", "showLabel": "1" },
      { "id": "SA", "value": "2.04", "showLabel": "1" },
      { "id": "AS", "value": "1.78", "showLabel": "1" },
      { "id": "EU", "value": ".40", "showLabel": "1" },
      { "id": "AF", "value": "2.58", "showLabel": "1" },
      { "id": "AU", "value": "1.30", "showLabel": "1" }
    ]
  }
});

// render the chart
chart.render();
```


## Related Packages
### Front-end Integrations to help you easily integrate FusionCharts Suite in your projects/apps

| | | |
|:----------------|:---------------|:---------|
|AngularJS (1.x and above)|[Github Repo](https://github.com/fusioncharts/angularjs-fusioncharts)|[Documentation](https://www.fusioncharts.com/dev/getting-started/angular/angularjs/your-first-chart-using-angularjs)|
|Angular (2.x and above)|[Github Repo](https://github.com/fusioncharts/angular-fusioncharts)|[Documentation](https://www.fusioncharts.com/dev/getting-started/angular/angular/your-first-chart-using-angular)|
|jQuery|[Github Repo](https://github.com/fusioncharts/fusioncharts-jquery-plugin)|[Documentation](https://www.fusioncharts.com/dev/getting-started/jquery/your-first-chart-using-jquery)|
|React|[Github Repo](https://github.com/fusioncharts/react-fusioncharts-component)|[Documentation](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)|
|Vue.js|[Github Repo](https://github.com/fusioncharts/vue-fusioncharts)|[Documentation](https://www.fusioncharts.com/dev/getting-started/vue/your-first-chart-using-vuejs)|

### Back-end Integrations to help you easily integrate FusionCharts Suite in your projects/apps
| | | |
|:----------------|:---------------|:---------|
|ASP.NET (C#)|[Github Repo](https://github.com/fusioncharts/asp-net-wrapper)|[Documentation](https://www.fusioncharts.com/dev/getting-started/aspnet/your-first-chart-using-aspnet)|
|ASP.NET (VB)|[Github Repo](https://github.com/fusioncharts/vb-net-wrapper)|[Documentation](https://www.fusioncharts.com/dev/getting-started/aspnet/your-first-chart-using-aspnet)|
|Java (JSP)|[Github Repo](https://github.com/fusioncharts/jsp-wrapper)|[Documentation](https://www.fusioncharts.com/dev/getting-started/java/your-first-chart-using-java)|
|Django|[Github Repo](https://github.com/fusioncharts/django-wrapper)|[Documentation](https://www.fusioncharts.com/dev/getting-started/django/your-first-chart-using-django)|
|PHP|[Github Repo](https://github.com/fusioncharts/php-wrapper)|[Documentation](https://www.fusioncharts.com/dev/getting-started/php/your-first-chart-using-php)|
|Ruby on Rails|[Github Repo](https://github.com/fusioncharts/rails-wrapper)|[Documentation](https://www.fusioncharts.com/dev/getting-started/ruby-on-rails/your-first-chart-using-ruby-on-rails)|


## Contact Support
Fill [this form](https://www.fusioncharts.com/contact-support) or drop an email to [support@fusioncharts.com](mailto: support@fusioncharts.com)


## Folder Structure
```
fusionmaps/
└── maps/
    ├── es
    │   ├── fusioncharts.world.js
    │   ├── fusioncharts.usa.js
    │   ├── ...
    │   └── fusioncharts.<MAP_ALIAS>.js
    ├── fusioncharts.world.js
    ├── fusioncharts.usa.js
    ├── ...
    └── fusioncharts.<MAP_ALIAS>.js
```