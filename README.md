<p align="center">
<img src="https://cdn.fusioncharts.com/fusioncharts/assets/fusioncharts-logo.svg" width="234px" alt="FusionCharts - Build beautiful web & mobile dashboards">
</p>
<p align="center">
<img alt="FusionCharts jsDelivr Hits" src="https://img.shields.io/jsdelivr/npm/hm/fusioncharts.svg">
<img alt="FusionCharts Downloads" src="https://img.shields.io/npm/dm/fusioncharts.svg">
<img alt="FusionCharts NPM Version" src="https://img.shields.io/npm/v/fusioncharts.svg">
</p>

FusionCharts is a JavaScript charting library providing 100+ charts and 2,000+ maps for your web and mobile applications. All the visualizations are interactive and animated, which are rendered in SVG and VML (for IE 6/7/8).

This package also contains FusionTime (timeseries charts), FusionWidgets (gauges, real-time charts), PowerCharts (statistical and advanced charts), and FusionMaps (choropleth geo maps).

- Official Website: [https://www.fusioncharts.com/](https://www.fusioncharts.com/)
- Documentation: [https://www.fusioncharts.com/dev/](https://www.fusioncharts.com/dev/)
- Download page: [https://www.fusioncharts.com/download/](https://www.fusioncharts.com/download/)
- Licensing: [Legal Terms & Customer Agreements](https://www.ideracorp.com/legal/FusionCharts#tabs-2)
- Support: [https://www.fusioncharts.com/contact-support](https://www.fusioncharts.com/contact-support)
- Issues: [https://github.com/fusioncharts/fusioncharts-dist/issues](https://github.com/fusioncharts/fusioncharts-dist/issues)

### What's New – v4.2 – Sept 2025

#### New Features

- FusionCharts version 4.2 introduces the `ignoredepthforlineplots` attribute, which, when set to `true`, makes the leftover line plot in an `mscolumn3dlinedy` or `stackedcolumn3dlinedy` chart act as a 2D line. Otherwise, the line continues to appear in 3D.
- FusionCharts version 4.2 introduces support for inverse axes in Scatter and Bubble charts. You can now reverse the X and Y axes by setting the new attributes `reversexaxis` and `reverseyaxis` to `true` in the chart configuration.

#### Improvements

- Upgraded third-party integrations of C#, Python, and Java support to the latest version of the framework:
  - **C#**: upgraded and now supports up to .NET 9
  - **Python**: upgraded and now supports up to Python 3.13.5 and Django 5.2.4.
  - **Java**: upgraded and now supports up to Java 24
- Added descriptions and documentation for the `legendWidth` attribute, which allows managing legend width and avoiding unwanted scrollbars on legendbox.
- Added an explicit Webpack public path assignment to ensure compatibility in non-browser-like environments such as React Native WebView.
- Upgraded third-party integrations support to the latest version of the framework:
  - Upgraded `react-fusioncharts` integration supports up to the latest version of React v19.
  - Upgraded `vue-fusioncharts` integration supports up to Vue 3.5.17.
  - Upgraded `angular-fusioncharts` integration supports up toAngular v20.

#### Fixes

- Resolved the Accessibility issue where resizing a chart using the Accessibility module changed the focus.
- Fixed an issue where the Color Range for maps was not working as expected in the latest version.
- Resolved an issue where the hover effect did not work correctly when having multiple markers in FusionMaps.
- Fixed the issue where the legend caption exceeded the legend box limit, overlapping with the chart. Also, when using the `chartBottomMargin` attribute, ensure that the value is set to a value higher than 5px; otherwise, the trial watermark and legend will overlap.
- Resolved the issue where JS threw an error when opening the popup view in Scroll charts. This issue affected the following chart types: `scrollColumn2d`, `scrollBar2D`, `scrollcombi2d`, and `scrollStackedBar2D`.
- FusionCharts version 4.2 resolved an issue where the `displayValue` was unable to render the ampersand (`&`) symbol in various chart types.
- Resolved an issue that prevented the `react-fusioncharts` component from rendering correctly inside the shadow DOM.
- Resolved an issue where tooltips did not display upon hovering over values on an `Errorline` chart. Now, the tooltips are shown as expected.
- Resolved the issue where ReactJS FusionCharts did not work as expected when using StrictMode. Users using React version 17 can use `react-fusioncharts` version 4.1, while those using React version 18 or higher should use the latest `react-fusioncharts` version.

<br />

---

<br />

### Table of Contents

- [Installing FusionCharts](#installing-fusioncharts)
- [Getting Started](#getting-started)
- [Using FusionCharts as an ES Module](#using-fusioncharts-as-an-es-module)
- [Related Packages](#related-packages)
  - [Front-end Integrations](#front-end-integrations)
  - [Back-end Integrations](#back-end-integrations)
- [Using Themes](#using-themes)
- [FusionMaps](#fusionmaps)
- [Going beyond Charts](#going-beyond-charts)
- [Version History](#version-history)
- [Contact Support](#contact-support)
- [Folder Structure](#folder-structure)

## Installing FusionCharts

There are multiple ways to install FusionCharts. For general instructions, refer to this [developer docs page](https://www.fusioncharts.com/dev/getting-started/plain-javascript/install-using-plain-javascript).

### Direct Download

All binaries are located on our [github repository](https://github.com/fusioncharts/fusioncharts-dist). You can also download zipped version [here](https://www.fusioncharts.com/download/).

### Using CDN

Instead of downloading, you can also use FusionCharts’s CDN to access files directly. See below for details

```html
<script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
```

### Install from NPM

```sh
npm install fusioncharts
```

See [npm documentation](https://docs.npmjs.com/) to know more about npm usage.

## Getting Started

Easiest way to start with FusionCharts is to include the JavaScript library in your webpage, create a `<div>` container and chart instance, configure the data and render. Check this HTML snippet below:

```javascript
<!doctype html>
<html>
<head>
    <script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
</head>
<body>
    <div id="chart-container"></div>
    <script>
        FusionCharts.ready(function () {
            // chart instance
            var chart = new FusionCharts({
                type: "column2d",
                renderAt: "chart-container", // container where chart will render
                width: "600",
                height: "400",
                dataFormat: "json",
                dataSource: {
                    // chart configuration
                    chart: {
                        caption: "Countries With Most Oil Reserves [2017-18]",
                        subcaption: "In MMbbl = One Million barrels"
                    },
                    // chart data
                    data: [
                        { label: "Venezuela", value: "290000" },
                        { label: "Saudi", value: "260000" },
                        { label: "Canada", value: "180000" },
                        { label: "Iran", value: "140000" },
                        { label: "Russia", value: "115000" },
                        { label: "UAE", value: "100000" },
                        { label: "US", value: "30000" },
                        { label: "China", value: "30000" }
                    ]
                }
            }).render();
        });
    </script>
</body>
</html>
```

Here’re links to quick start guides:

- [FusionCharts](https://www.fusioncharts.com/dev/getting-started/plain-javascript/your-first-chart-using-plain-javascript#create-your-first-chart-1)
- [FusionTime](https://www.fusioncharts.com/dev/fusiontime/getting-started/create-your-first-chart-in-fusiontime)
- [FusionWidgets](https://www.fusioncharts.com/dev/getting-started/plain-javascript/your-first-chart-using-plain-javascript#create-your-first-gauge-8)
- [FusionMaps](https://www.fusioncharts.com/dev/getting-started/plain-javascript/your-first-chart-using-plain-javascript#create-your-first-map-13)

## Using FusionCharts as an ES Module

FusionCharts can be loaded as an ES module via transpilers.

_The following examples presumes you are using npm to install FusionCharts, see Install FusionCharts for more details._

```javascript
import FusionCharts from 'fusioncharts/core';

// include chart from viz folder - import ChartType from fusioncharts/viz/[ChartType];
import Column2D from 'fusioncharts/viz/column2d';

// add chart as dependency - FusionCharts.addDep(ChartType);
FusionCharts.addDep(Column2D);

// instantiate the chart.
var chartInstance = new FusionCharts({
  type: 'Column2D',
  renderAt: 'chart-container', // div container where chart will render
  width: '600',
  height: '400',
  dataFormat: 'json',
  dataSource: {
    // chart configuration
    chart: {
      caption: 'Countries With Most Oil Reserves [2017-18]',
      subcaption: 'In MMbbl = One Million barrels',
    },
    // chart data
    data: [
      { label: 'Venezuela', value: '290000' },
      { label: 'Saudi', value: '260000' },
      { label: 'Canada', value: '180000' },
      { label: 'Iran', value: '140000' },
      { label: 'Russia', value: '115000' },
      { label: 'UAE', value: '100000' },
      { label: 'US', value: '30000' },
      { label: 'China', value: '30000' },
    ],
  },
});

// render the chart
chartInstance.render();
```

Want to render data-driven maps (FusionMaps) - check out [this link](https://www.npmjs.com/package/fusionmaps).

## Related Packages

### Front-end Integrations

|                           |                                                                             |                                                                                                                      |
| :------------------------ | :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| AngularJS (1.x and above) | [Github Repo](https://github.com/fusioncharts/angularjs-fusioncharts)       | [Documentation](https://www.fusioncharts.com/dev/getting-started/angular/angularjs/your-first-chart-using-angularjs) |
| Angular (2.x and above)   | [Github Repo](https://github.com/fusioncharts/angular-fusioncharts)         | [Documentation](https://www.fusioncharts.com/dev/getting-started/angular/angular/your-first-chart-using-angular)     |
| jQuery                    | [Github Repo](https://github.com/fusioncharts/fusioncharts-jquery-plugin)   | [Documentation](https://www.fusioncharts.com/dev/getting-started/jquery/your-first-chart-using-jquery)               |
| React                     | [Github Repo](https://github.com/fusioncharts/react-fusioncharts-component) | [Documentation](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)                 |
| Vue                       | [Github Repo](https://github.com/fusioncharts/vue-fusioncharts)             | [Documentation](https://www.fusioncharts.com/dev/getting-started/vue/your-first-chart-using-vuejs)                   |
| Ember                     | [Github Repo](https://github.com/fusioncharts/ember-fusioncharts)           | [Documentation](https://www.fusioncharts.com/dev/getting-started/ember/your-first-chart-using-ember)                 |

### Back-end Integrations

|               |                                                                |                                                                                                                      |
| :------------ | :------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| ASP.NET (C#)  | [Github Repo](https://github.com/fusioncharts/asp-net-wrapper) | [Documentation](https://www.fusioncharts.com/dev/getting-started/aspnet/your-first-chart-using-aspnet)               |
| ASP.NET (VB)  | [Github Repo](https://github.com/fusioncharts/vb-net-wrapper)  | [Documentation](https://www.fusioncharts.com/dev/getting-started/aspnet/your-first-chart-using-aspnet)               |
| Java (JSP)    | [Github Repo](https://github.com/fusioncharts/jsp-wrapper)     | [Documentation](https://www.fusioncharts.com/dev/getting-started/java/your-first-chart-using-java)                   |
| Django        | [Github Repo](https://github.com/fusioncharts/django-wrapper)  | [Documentation](https://www.fusioncharts.com/dev/getting-started/django/your-first-chart-using-django)               |
| PHP           | [Github Repo](https://github.com/fusioncharts/php-wrapper)     | [Documentation](https://www.fusioncharts.com/dev/getting-started/php/your-first-chart-using-php)                     |
| Ruby on Rails | [Github Repo](https://github.com/fusioncharts/rails-wrapper)   | [Documentation](https://www.fusioncharts.com/dev/getting-started/ruby-on-rails/your-first-chart-using-ruby-on-rails) |

## Using Themes

FusionCharts provides several out-of-the box themes that can be applied to all the charts to configure the visual appearance of the charts. Below is an example on how to use a theme:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
  </head>
  <body>
    <div id="chart-container"></div>
    <script>
      FusionCharts.ready(function () {
        // chart instance
        var chart = new FusionCharts({
          type: 'column2d',
          renderAt: 'chart-container', // container where chart will render
          width: '600',
          height: '400',
          dataFormat: 'json',
          dataSource: {
            // chart configuration
            chart: {
              caption: 'Countries With Most Oil Reserves [2017-18]',
              subcaption: 'In MMbbl = One Million barrels',
              theme: 'fusion', //Specifying which theme to use
            },
            // chart data
            data: [
              { label: 'Venezuela', value: '290000' },
              { label: 'Saudi', value: '260000' },
              { label: 'Canada', value: '180000' },
              { label: 'Iran', value: '140000' },
              { label: 'Russia', value: '115000' },
              { label: 'UAE', value: '100000' },
              { label: 'US', value: '30000' },
              { label: 'China', value: '30000' },
            ],
          },
        }).render();
      });
    </script>
  </body>
</html>
```

### Using themes in ES6

```javascript
import FusionCharts from 'fusioncharts/core';

// include chart from viz folder - import ChartType from fusioncharts/viz/[ChartType];
import Column2D from 'fusioncharts/viz/column2d';

// include theme from themes folder
import fusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

// add chart as dependency - FusionCharts.addDep(ChartType);
FusionCharts.addDep(Column2D);
FusionCharts.addDep(fusionTheme);

// instantiate the chart.
var chartInstance = new FusionCharts({
  type: 'Column2D',
  renderAt: 'chart-container', // container where chart will render
  width: '600',
  height: '400',
  dataFormat: 'json',
  dataSource: {
    // chart configuration
    chart: {
      caption: 'Countries With Most Oil Reserves [2017-18]',
      subcaption: 'In MMbbl = One Million barrels',
      theme: 'fusion',
    },
    // chart data
    data: [
      { label: 'Venezuela', value: '290000' },
      { label: 'Saudi', value: '260000' },
      { label: 'Canada', value: '180000' },
      { label: 'Iran', value: '140000' },
      { label: 'Russia', value: '115000' },
      { label: 'UAE', value: '100000' },
      { label: 'US', value: '30000' },
      { label: 'China', value: '30000' },
    ],
  },
});

// render the chart
chartInstance.render();
```

See all the themes live [here](https://www.fusioncharts.com/explore/chart-gallery/stacked-charts/stacked-columns). Check out [this link](https://www.fusioncharts.com/dev/themes/introduction-to-themes) to know more about themes. Want us to build a theme to suit your corporate branding? [Request one here](https://www.fusioncharts.com/contact-support)!

## FusionMaps

FusionMaps is a companion package meant to be used in conjunction with FusionCharts to render choropleth geo maps. FusionMaps provide over 1,400+ geographical maps, including all countries, US states, and regions in Europe for plotting business data like revenue by regions, employment levels by state and office locations. See below links to know more:

- [Examples](https://www.fusioncharts.com/explore/chart-gallery?product=fusionmaps)
- [Documentation](https://www.fusioncharts.com/dev/map-guide/setup)
- [Github Repo](https://github.com/fusioncharts/fusionmaps-dist) and [NPM Package](https://www.npmjs.com/package/fusionmaps)

## Going beyond Charts

- Explore 20+ pre-built business specific dashboards for different industries like energy and manufacturing to business functions like sales, marketing and operations [here](https://www.fusioncharts.com/explore/dashboards).
- See [Data Stories](https://www.fusioncharts.com/explore/data-stories) built using FusionCharts’ interactive JavaScript visualizations and learn how to communicate real-world narratives through underlying data to tell compelling stories.

## Version History

- [What’s New](https://www.fusioncharts.com/dev/upgrading/whats-new)
- [Change Log](https://www.fusioncharts.com/dev/upgrading/change-log)
- [Changed Behaviour & Depreciation](https://www.fusioncharts.com/dev/upgrading/changed-behavior)

## Contact Support

Fill [this form](https://www.fusioncharts.com/contact-support) or drop an email to [support@fusioncharts.com](mailto:support@fusioncharts.com)

## Folder Structure

```
fusioncharts/
  ├── core/ - Contains the FusionCharts core.
  ├── viz/ - Contains all the individual vizualizations (Column2D, SplineArea, AngularGauge etc.)
  ├── charts/ - Contains all the visualizations of the Charts package (similar to fusioncharts.charts.js).
  ├── powercharts/ - Contains all the visualizations of the PowerCharts package.
  ├── timeseries/ - Contains all the visualizations of the FusionTime package.
  ├── widgets/ - Contains all the visualizations of the FusionWidgets package.
  ├── maps/ - Contains the map renderer
  │   └── es/ - Contains the map definition files of World and USA
  └── themes/es - Contains all the theme files.
```
