# FusionCharts

In its 3.13 release, the FusionCharts framework can be consumed as ES6 modules. This package contains files needed to render charts using the FusionCharts library.

### FusionCharts folder structure

```
fusioncharts/
  ├── core/ - Contains the FusionCharts core.
  ├── viz/ - Contains all the individual vizualizations (Column2D, SplineArea, AngularGauge etc.)
  ├── charts/ - Contains all the visualizations of the Charts package (similar to fusioncharts.charts.js).
  ├── powercharts/ - Contains all the visualizations of the PowerCharts package.
  ├── widgets/ - Contains all the visualizations of the FusionWidgets package.
  ├── maps/ - Contains the map renderer
  │   └── es/ - Contains the map definition files of World and USA
  └── themes/es - Contains all the theme files. 
```

### Use ES6 to render a chart

Include the core fusioncharts file -
```javascript
import FusionCharts from 'fusioncharts/core';
```
Include the desired chart from the viz folder - 
```javascript
import ChartType from fusioncharts/viz/[ChartType];
```
Example: 
```javascript
import Column2D from 'fusioncharts/viz/column2d';
```
Add the chart as dependency - 
```javascript
FusionCharts.addDep(ChartType);
```
Example:
```javascript
FusionCharts.addDep(Column2D);
```

Instantiate the chart.
```javascript
var chartInstance = new FusionCharts({
        type: 'Column2D',
        width: '700', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data type
        renderAt:'chart-container', //container where the chart will render
        dataSource: {
                // Chart Configuration
                "chart": {
                    "caption": "Countries With Most Oil Reserves [2017-18]",
                    "subCaption": "In MMbbl = One Million barrels",
                    "xAxisName": "Country",
                    "yAxisName": "Reserves (MMbbl)",
                    "numberSuffix": "K",
                    "theme": "fusion"
                },
                // Chart Data
                "data": [{
                    "label": "Venezuela",
                    "value": "290"
                }, {
                    "label": "Saudi",
                    "value": "260"
                }, {
                    "label": "Canada",
                    "value": "180"
                }, {
                    "label": "Iran",
                    "value": "140"
                }, {
                    "label": "Russia",
                    "value": "115"
                }, {
                    "label": "UAE",
                    "value": "100"
                }, {
                    "label": "US",
                    "value": "30"
                }, {
                    "label": "China",
                    "value": "30"
                }]
            }
        }
    });
```
Render the chart
```javascript
chartInstance.render()
```

### Render a map

Include the core fusioncharts file from core  -
```javascript
import FusionCharts from 'fusioncharts/core';
```
Include map renderer -
```javascript
import Maps from 'fusioncharts/maps';
```
Include the definition file for the map you want to render - 
```javascript
import World from 'fusioncharts/maps/es/fusioncharts.world';
```
- *Note:* If you want to render a map which is not in the fusioncharts
package (i.e. any map other than world or usa), then you need to install 'fusionmaps'
which contains all the ES6 map definitions 
```javascript
npm install fusionmaps
```
The map definitions are available as ES6 modules in `node_modules/fusionmaps/maps/es/fusioncharts.[MAP-ALIAS].js`

Add the map renderer and definition(s) as dependencies to the core -

```javascript
FusionCharts.addDep(Maps); // Maps -  reference from above
FusionCharts.addDep(World); // World - reference from above
```

Define an instance of the chart - 

```javascript
var salesByContinent =   new  FusionCharts({
        type: 'world', // Map type
        renderAt: 'chart-container', // Container
        width: '800', // Width of the chart
        height: '550', // Height of the chart
        dataFormat: 'json', // Data Type
        dataSource: {
        // Map Configuration
            "chart": {
                "caption": "Average Annual Population Growth",
                "subcaption": " 1955-2015",
                "numbersuffix": "%",
                "includevalueinlabels": "1",
                "labelsepchar": ": ",
                "entityFillHoverColor": "#FFF9C4",
                "theme": "fusion"
            },
            // Aesthetics; ranges synced with the slider
            "colorrange": {
                "minvalue": "0",
                "code": "#FFE0B2",
                "gradient": "1",
                "color": [{
                    "minvalue": "0.5",
                    "maxvalue": "1.0",
                    "color": "#FFD74D"
                }, {
                    "minvalue": "1.0",
                    "maxvalue": "2.0",
                    "color": "#FB8C00"
                }, {
                    "minvalue": "2.0",
                    "maxvalue": "3.0",
                    "color": "#E65100"
                }]
            },
            // Source data as JSON --> id represents countries of world.
            "data": [{
                "id": "NA",
                "value": ".82",
                "showLabel": "1"
            }, {
                "id": "SA",
                "value": "2.04",
                "showLabel": "1"
            }, {
                "id": "AS",
                "value": "1.78",
                "showLabel": "1"
            }, {
                "id": "EU",
                "value": ".40",
                "showLabel": "1"
            }, {
                "id": "AF",
                "value": "2.58",
                "showLabel": "1"
            }, {
                "id": "AU",
                "value": "1.30",
                "showLabel": "1"
            }]
        }
    }
});
```

Render the map -

```javascript
chartInstance.render();
```

### Render using a theme

Import FusionCharts' core -
```javascript
import FusionCharts from 'fusioncharts/core'
```
Import the theme file to use the theme -
```javascript
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion'
```
Add the theme to FusionCharts -
```javascript
FusionCharts.addDep(FusionTheme);
```
Simply importing the `fusioncharts.theme.fusion` module will not apply the theme to the chart. To apply the theme, set the value of `theme` attribute to the respective name of the theme. For more details click [here](https://www.fusioncharts.com/dev/themes/introduction-to-themes).