## Introduction

FusionCharts Suite XT is a front-end, JavaScript-based, comprehensive collection of 90+ charts and  1000+ maps. This includes simple and complex charts (like the column and bar charts, pie and doughnut charts, the treemap, heatmap, and logarithmic charts), gauges (like the angular gauge, bulb gauge, and the thermometer gauge) and maps (all continents, major countries, and all US states).

The **fusioncharts** package includes files for all charts and widgets offered by the product. In order to limit the package size, it includes map definition files for only two maps—the world map and the USA map.

It is recommended that you download the **fusionmaps** package if you want to render maps. This package includes the complete FusionCharts Suite XT as well as the map definition files for all maps.

* Official website: [http://www.fusioncharts.com/](http://www.fusioncharts.com/)
* Download page: [http://www.fusioncharts.com/download/](http://www.fusioncharts.com/download/)
* Licensing: [http://www.fusioncharts.com/buy/](http://www.fusioncharts.com/buy/)
* Documentation: [http://www.fusioncharts.com/dev/](http://www.fusioncharts.com/dev/)
* Support: [http://www.fusioncharts.com/support/](http://www.fusioncharts.com/support/)

## Table of Contents

- [Quick Start](#quick-start)
  - [Installing FusionCharts from npm](#installing-fusioncharts-from-npm)
    - [Package-specific dependencies for npm](#package-specific-dependencies-for-npm)
    - [Chart-specific dependencies for npm](#chart-specific-dependencies-for-npm)
  - [Installing FusionCharts from Bower](#installing-fusioncharts-from-bower)
    - [Package-specific dependencies for Bower](#package-specific-dependencies-for-bower)
    - [Chart-specific dependencies for Bower](#chart-specific-dependencies-for-bower)
- [What's Included](#whats-included)
  - [Directory structure for FusionCharts installed via npm](#directory-structure-for-fusioncharts-installed-via-npm)
  - [Directory structure for FusionCharts installed via Bower](#directory-structure-for-fusioncharts-installed-via-bower)


## Quick Start

### Installing FusionCharts from npm

1. Install the FusionCharts package.

   `npm install fusioncharts`
   
2. Load FusionCharts using require.

   `var FusionCharts = require("fusioncharts");`
   
3. Load the charts module using require.

   `require("fusioncharts/fusioncharts.charts")(FusionCharts);`
   
4. Create the FusionCharts instance required to render the chart.

```
var chart = new FusionCharts ({
   "type": "column2d",
   "width": "500",
   "height": "300",
   "dataFormat": "json",
   "dataSource": {
      chart:{},
      data: [{value: 500}, {value: 600}, {value: 700}]
   }
}).render("chartContainer");
```

#### Package-specific dependencies for npm

- To render a chart belonging to the PowerCharts package, load the PowerCharts module:

  `require("fusioncharts/fusioncharts.powercharts")(FusionCharts);`

- To render a chart belonging to the FusionWidgets package, load the FusionWidgets module:

  `require("fusioncharts/fusioncharts.widgets")(FusionCharts);`

To know which chart belongs to which package, refer the [list of charts](http://www.fusioncharts.com/dev/getting-started/list-of-charts.html).

- To render a map, load the FusionMaps module and the map definition file for that map:

```
require("fusioncharts/fusioncharts.maps")(FusionCharts);
require("fusioncharts/maps/fusioncharts.world")(FusionCharts);
```

To know the map definition file names, refer the [list of maps](http://www.fusioncharts.com/dev/getting-started/list-of-maps.html).

**Note**: The map definition files have to be included for all maps that you want to render in your application. Unlike the core files that are stored in the **fusioncharts** directory, all map definition files are stored in the **maps** directory and are required to be fetched from there.

#### Chart-specific dependencies for npm

For some chart types, you need to include/exclude certain files and in a certain order. These chart types and the corresponding files are mentioned below:

- To render the zoom-scatter chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.charts.js** files _before_ the **fusioncharts.zoomscatter.js** file. 

```
var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.charts")(FusionCharts);
require("fusioncharts/fusioncharts.zoomscatter")(FusionCharts);
```

- To render the treemap chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.powercharts.js** files _before_ the **fusioncharts.treemap.js** file.

```
var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.powercharts")(FusionCharts);
require("fusioncharts/fusioncharts.treemap")(FusionCharts);
```

- To render the SS Grid chart _only_ the **fusioncharts.js** and the **fusioncharts.ssgrid.js** files are needed.

```
var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.ssgrid")(FusionCharts);
```

- To render the Gantt chart _only_ the **fusioncharts.js** and the **fusioncharts.gantt.js** files are needed.

```
var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.gantt")(FusionCharts);
```

### Installing FusionCharts from Bower

1. Install the FusionCharts package.

   `bower install fusioncharts`
   
2. Load FusionCharts module.

   `<script src="bower_components/fusioncharts/fusioncharts.js"></script>`
   
3. Load the charts module.

   `<script src="bower_components/fusioncharts/fusioncharts.maps.js"></script>`
   
4. Create the FusionCharts instance required to render the chart.

```
<script>
    new FusionCharts({
        "type": "column2d",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource": {
            chart:{},
            data: [{value: 500}, {value: 600}, {value: 700}]
        }
    }).render("chartContainer");
</script>
```

#### Package-specific dependencies for Bower

- To render a chart belonging to the PowerCharts package, load the PowerCharts module:

  `<script src="bower_components/fusioncharts/fusioncharts.powercharts.js"> </script>`

- To render a chart belonging to the FusionWidgets package, load the FusionWidgets module:

  `<script src="bower_components/fusioncharts/fusioncharts.widgets.js"> </script>`

To know which chart belongs to which package, refer the [list of charts](http://www.fusioncharts.com/dev/getting-started/list-of-charts.html).

- To render a map, load the FusionMaps module and the map definition file for that map:

```
<script src="bower_components/fusioncharts/fusioncharts.maps.js"> </script>
<script src="bower_components/fusioncharts/maps/fusioncharts.world.js"> </script>
```

To know the map definition file names, refer the [list of maps](http://www.fusioncharts.com/dev/getting-started/list-of-maps.html).

**Note**: The map definition files have to be included for all maps that you want to render in your application. Unlike the core files that are stored in the **fusioncharts** directory, all map definition files are stored in the **maps** directory and are required to be fetched from there.

#### Chart-specific dependencies for Bower

For some chart types, you need to include/exclude certain files and in a certain order. These chart types and the corresponding files are mentioned below:

- To render the zoom-scatter chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.charts.js** files _before_ the **fusioncharts.zoomscatter.js** file.

```
<script src = "bower_components/fusioncharts/fusioncharts.js"> </script>
<script src = "bower_components/fusioncharts/fusioncharts.charts.js"> </script>
<script src = "bower_components/fusioncharts/fusioncharts.zoomscatter.js"> </script>
```

- To render the treemap chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.powercharts.js** files _before_ the **fusioncharts.treemap.js** file.

```
<script src = "bower_components/fusioncharts/fusioncharts.js"> </script>
<script src = "bower_components/fusioncharts/fusioncharts.powercharts.js"> </script>
<script src = "bower_components/fusioncharts/fusioncharts.treemap.js"> </script>
```

- To render the SS Grid chart _only_ the **fusioncharts.js** and the **fusioncharts.ssgrid.js** files are needed.

```
<script src = "bower_components/fusioncharts/fusioncharts.js"> </script>
<script src = "bower_components/fusioncharts/fusioncharts.ssgrid.js"> </script>
```

- To render the Gantt chart _only_ the **fusioncharts.js** and the **fusioncharts.gantt.js** files are needed.

```
<script src = "bower_components/fusioncharts/fusioncharts.js"> </script>
<script src = "bower_components/fusioncharts/fusioncharts.gantt.js"> </script>
```
  
## What's Included

### Directory structure for FusionCharts installed via npm

When FusionCharts is installed via npm, the downloaded package contains the following directories and files:

```
node_modules/
└── fusioncharts/
  │
  ├── package.json
  │
  ├── maps/
  │   ├── fusioncharts.world.js
  │   └── fusioncharts.usa.js
  │
  ├── themes/
  │   ├── fusioncharts.theme.carbon.js
  │   ├── fusioncharts.theme.fint.js
  │   ├── fusioncharts.theme.ocean.js
  │   └── fusioncharts.theme.zune.js
  │
  ├── fusioncharts.js
  ├── fusioncharts.charts.js
  ├── fusioncharts.zoomscatter.js
  ├── fusioncharts.powercharts.js
  ├── fusioncharts.ssgrid.js
  ├── fusioncharts.gantt.js
  ├── fusioncharts.treemap.js
  ├── fusioncharts.widgets.js
  └── fusioncharts.maps.js
```
### Directory structure for FusionCharts installed via Bower 

When FusionCharts is installed via Bower, the downloaded package contains the following directories and files:

```
bower_components/
└── fusioncharts/
  │
  ├── maps/
  │   ├── fusioncharts.world.js
  │   └── fusioncharts.usa.js
  │
  ├── themes/
  │   ├── fusioncharts.theme.carbon.js
  │   ├── fusioncharts.theme.fint.js
  │   ├── fusioncharts.theme.ocean.js
  │   └── fusioncharts.theme.zune.js
  │
  ├── fusioncharts.js
  ├── fusioncharts.charts.js
  ├── fusioncharts.zoomscatter.js
  ├── fusioncharts.powercharts.js
  ├── fusioncharts.ssgrid.js
  ├── fusioncharts.gantt.js
  ├── fusioncharts.treemap.js
  ├── fusioncharts.widgets.js
  └── fusioncharts.maps.js
```
