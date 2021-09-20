function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@font-face {\r\n  font-family: 'Source Sans Pro';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Source Sans Pro Light';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu3cOWxw.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Source Sans Pro SemiBold';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: local('Source Sans Pro SemiBold'), local('SourceSansPro-SemiBold'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu3cOWxw.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n\r\n/* ft calendar customization */\r\n.fc-cal-date-normal-fusion {\r\n  color: #5F5F5F;\r\n  font-family: 'Source Sans Pro';\r\n  font-size: 11px;\r\n}\r\n\r\n.fc-cal-date-selected-fusion {\r\n  color: #FEFEFE;\r\n  font-family: 'Source Sans Pro SemiBold';\r\n  font-size: 11px;\r\n}";
styleInject(css);

/*
 Fusion Theme v0.6
 FusionCharts JavaScript Library

 Copyright FusionCharts, Inc.
 License Information at <http://www.fusioncharts.com/license>
*/
/* jshint ignore:end */
var themeObject = {
  name: "fusion",
  theme: {
    base: {
      chart: {
        // plot customization
        paletteColors:
          "#5D62B5, #29C3BE, #F2726F, #FFC533, #62B58F, #BC95DF, #67CDF2",
        showShadow: "0",
        showPlotBorder: "0",
        usePlotGradientColor: "0",
        showValues: "0",

        // chart and canvas background customization
        bgColor: "#FFFFFF",
        canvasBgAlpha: "0",
        bgAlpha: "100",
        showBorder: "0",
        showCanvasBorder: "0",

        // axis and div line customization
        showAlternateHGridColor: "0",
        divLineColor: "#DFDFDF",
        showXAxisLine: "0",
        yAxisNamePadding: "15",
        sYAxisNamePadding: "15",
        xAxisNamePadding: "15",
        captionPadding: "15",
        xAxisNameFontColor: "#999",
        yAxisNameFontColor: "#999",
        sYAxisNameFontColor: "#999",
        yAxisValuesPadding: "15",
        labelPadding: "10",
        transposeAxis: "1",

        // tooltip customization
        toolTipBgColor: "#FFFFFF",
        toolTipPadding: "6",
        toolTipBorderColor: "#E1E1E1",
        toolTipBorderThickness: "1",
        toolTipBorderAlpha: "100",
        toolTipBorderRadius: "2",

        // font and text size customization
        baseFont: "Source Sans Pro",
        baseFontColor: "#5A5A5A",
        baseFontSize: "14",
        xAxisNameFontBold: "0",
        yAxisNameFontBold: "0",
        sYAxisNameFontBold: "0",
        xAxisNameFontSize: "15",
        yAxisNameFontSize: "15",
        sYAxisNameFontSize: "15",
        captionFontSize: "18",
        captionFontFamily: "Source Sans Pro SemiBold",
        subCaptionFontSize: "13",
        captionFontBold: "1",
        subCaptionFontBold: "0",
        subCaptionFontColor: "#999",
        valueFontColor: "#000000",
        valueFont: "Source Sans Pro",

        // legend customization
        drawCustomLegendIcon: "1",
        legendShadow: "0",
        legendBorderAlpha: "0",
        legendBorderThickness: "0",
        legendItemFont: "Source Sans Pro",
        legendItemFontColor: "#7C7C7C",
        legendIconBorderThickness: "0",
        legendBgAlpha: "0",
        legendItemFontSize: "15",
        legendCaptionFontColor: "#999",
        legendCaptionFontSize: "13",
        legendCaptionFontBold: "0",
        legendScrollBgColor: "#FFF",

        // cross line customization
        crossLineAnimation: "1",
        crossLineAlpha: "100",
        crossLineColor: "#DFDFDF",

        // hover effect
        showHoverEffect: "1",
        plotHoverEffect: "1",
        plotFillHoverAlpha: "90",
        barHoverAlpha: "90"
      }
    },

    // 1 column2d chart
    column2d: {
      chart: {
        paletteColors: "#5D62B5",
        placeValuesInside: "0"
      }
    },

    // 2 column3d chart
    column3d: {
      chart: {
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        showShadow: "0",
        chartTopMargin: "35",
        paletteColors: "#5D62B5"
      }
    },

    // 3 line2d chart
    line: {
      chart: {
        lineThickness: "2",
        paletteColors: "#5D62B5",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        drawCrossLine: "1"
      }
    },

    // 4 area2d chart
    area2d: {
      chart: {
        paletteColors: "#5D62B5",
        drawCrossLine: "1"
      }
    },

    // 5 bar2d chart
    bar2d: {
      chart: {
        placeValuesInside: "0",
        showAlternateVGridColor: "0",
        yAxisValuesPadding: "10",
        paletteColors: "#5D62B5"
      }
    },

    // 6 bar3d chart
    bar3d: {
      chart: {
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        placeValuesInside: "0",
        showShadow: "0",
        chartTopMargin: "35",
        adjustDiv: "1",
        showAlternateVGridColor: "0",
        yAxisValuesPadding: "10",
        paletteColors: "#5D62B5"
      }
    },

    // 7 pie2d chart
    pie2d: {
      chart: {
        use3DLighting: "0",
        showPercentValues: "1",
        showValues: "1",
        showPercentInTooltip: "0",
        showLegend: "1",
        legendIconSides: "2",
        useDataPlotColorForLabels: 0
      }
    },

    // 8 pie3d chart
    pie3d: {
      chart: {
        use3DLighting: "0",
        showPercentValues: "1",
        showValues: "1",
        useDataPlotColorForLabels: "0",
        showLegend: "1",
        legendIconSides: "2",
        pieSliceDepth: "15",
        pieYScale: "60",
        labelDistance: "20",
        showPercentInTooltip: "0"
      }
    },

    // 9 doughnut2d chart
    doughnut2d: {
      chart: {
        use3DLighting: "0",
        showPercentValues: "1",
        showValues: "1",
        useDataPlotColorForLabels: "0",
        showLegend: "1",
        legendIconSides: "2",
        showPlotBorder: "0",
        centerLabelColor: "#666",
        centerLabelFontSize: "14",
        showPercentInTooltip: "0"
      }
    },

    // 10 doughnut3d chart
    doughnut3d: {
      chart: {
        use3DLighting: "0",
        showPercentValues: "1",
        showValues: "1",
        useDataPlotColorForLabels: "0",
        showLegend: "1",
        legendIconSides: "2",
        pieSliceDepth: "15",
        pieYScale: "60",
        centerLabelColor: "#666",
        centerLabelFontSize: "14",
        showPercentInTooltip: "0"
      }
    },

    // 11 pareto2d chart
    pareto2d: {
      chart: {
        paletteColors: "#5D62B5",
        lineThickness: "2",
        anchorRadius: "4",
        lineColor: "#5D5D5D",
        anchorBgColor: "#5D5D5D",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 12 pareto3d chart
    pareto3d: {
      chart: {
        paletteColors: "#5D62B5",
        lineThickness: "2",
        anchorRadius: "4",
        lineColor: "#5D5D5D",
        anchorBgColor: "#5D5D5D",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1",
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        placeValuesInside: "0",
        showShadow: "0",
        chartTopMargin: "35",
        adjustDiv: "1",
        showAlternateVGridColor: "0"
      }
    },

    // 13 multi-series column2d chart
    mscolumn2d: {
      chart: {
        showLegend: "1",
        legendIconSides: "4"
      }
    },

    // 14 multi-series column3d chart
    mscolumn3d: {
      chart: {
        showLegend: "1",
        legendIconSides: "4",
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        placeValuesInside: "0",
        showShadow: "0",
        chartTopMargin: "35",
        adjustDiv: "1",
        showAlternateVGridColor: "0"
      }
    },

    // 15 multi-series line chart
    msline: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        drawCrossLine: "1",
        showLegend: "1",
        legendIconSides: "2",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 16 multi-series bar2d chart
    msbar2d: {
      chart: {
        placeValuesInside: "0",
        showAlternateVGridColor: "0",
        showLegend: "1",
        legendIconSides: "4",
        yAxisValuesPadding: "10"
      }
    },

    // 17 multi-series bar3d chart
    msbar3d: {
      chart: {
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        placeValuesInside: "0",
        showShadow: "0",
        chartTopMargin: "35",
        adjustDiv: "1",
        showAlternateVGridColor: "0",
        showLegend: "1",
        legendIconSides: "4",
        yAxisValuesPadding: "10"
      }
    },

    // 18 multi-series area2d chart
    msarea: {
      chart: {
        drawCrossLine: "1",
        showLegend: "1",
        legendIconSides: "4"
      }
    },

    // 19 marimekko chart
    marimekko: {
      chart: {
        legendIconSides: "4",
        valueBgColor: "#FFFFFF",
        valueBgAlpha: "65"
      }
    },

    // 20 zoomline chart
    zoomline: {
      chart: {
        lineThickness: "2",
        flatScrollBars: "1",
        scrollShowButtons: "0",
        scrollColor: "#FFF",
        scrollheight: "10",
        crossLineThickness: "1",
        crossLineColor: "#DFDFDF",
        showLegend: "1",
        legendIconSides: "2",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 21 zoomline dual y-axis chart
    zoomlinedy: {
      chart: {
        lineThickness: "2",
        flatScrollBars: "1",
        scrollShowButtons: "0",
        scrollColor: "#FFF",
        scrollHeight: "10",
        crossLineThickness: "1",
        crossLineColor: "#DFDFDF",
        showLegend: "1",
        legendIconSides: "2",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 22 stacked column2d chart
    stackedcolumn2d: {
      chart: {
        showLegend: "1",
        legendIconSides: "4"
      }
    },

    // 23 stacked column3d chart
    stackedcolumn3d: {
      chart: {
        showLegend: "1",
        legendIconSides: "4",
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        placeValuesInside: "0",
        showShadow: "0",
        chartTopMargin: "35",
        adjustDiv: "1"
      }
    },

    // 24 stacked bar2d chart
    stackedbar2d: {
      chart: {
        placeValuesInside: "0",
        showAlternateVGridColor: "0",
        legendIconSides: "4",
        yAxisValuesPadding: "10"
      }
    },

    // 25 stacked bar3d chart
    stackedbar3d: {
      chart: {
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        placeValuesInside: "0",
        showShadow: "0",
        chartTopMargin: "35",
        adjustDiv: "1",
        showAlternateVGridColor: "0",
        showLegend: "1",
        legendIconSides: "4",
        yAxisValuesPadding: "10"
      }
    },

    // 26 stacked area2d chart
    stackedarea2d: {
      chart: {
        drawCrossLine: "1",
        showLegend: "1",
        legendIconSides: "4"
      }
    },

    // 27 multi-series stacked column2d chart
    msstackedcolumn2d: {
      chart: {
        showLegend: "1",
        legendIconSides: "4"
      }
    },

    // 28 Multi-series 2D Single Y Combination Chart
    mscombi2d: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        drawCrossLine: "1",
        showLegend: "1",
        drawCustomLegendIcon: "0",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 29 Multi-series 3D Single Y Combination Chart
    mscombi3d: {
      chart: {
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        placeValuesInside: "0",
        showShadow: "0",
        chartTopMargin: "35",
        adjustDiv: "1",
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        drawCustomLegendIcon: "0",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 30 multi-series column3d + line - singe y-axis chart
    mscolumnline3d: {
      chart: {
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        placeValuesInside: "0",
        showShadow: "0",
        chartTopMargin: "35",
        adjustDiv: "1",
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        drawCustomLegendIcon: "0",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 31 Stacked Column 2D + Line Single Y Axis Chart
    stackedcolumn2dline: {
      chart: {
        showLegend: "1",
        drawCustomLegendIcon: "0",
        lineThickness: "2",
        anchorRadius: "4",
        drawCrossLine: "1",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 32 Stacked Column 3D + Line Single Y Axis Chart
    stackedcolumn3dline: {
      chart: {
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        placeValuesInside: "0",
        showShadow: "0",
        chartTopMargin: "35",
        adjustDiv: "1",
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        drawCustomLegendIcon: "0",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 33 Multi-series 2D Dual Y Combination Chart
    mscombidy2d: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        drawCrossLine: "1",
        showLegend: "1",
        drawCustomLegendIcon: "0",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 34 Multi-series Column 3D + Line - Dual Y Axis Chart
    mscolumn3dlinedy: {
      chart: {
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        placeValuesInside: "0",
        showShadow: "0",
        adjustDiv: "1",
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        drawCustomLegendIcon: "0",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 35 Stacked Column 3D + Line Dual Y Axis Chart
    stackedcolumn3dlinedy: {
      chart: {
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        showShadow: "0",
        adjustDiv: "1",
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        drawCustomLegendIcon: "0",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 36 Multi-series Stacked Column 2D + Line Dual Y Axis
    msstackedcolumn2dlinedy: {
      chart: {
        placeValuesInside: "0",
        showShadow: "0",
        adjustDiv: "1",
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        drawCustomLegendIcon: "0",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      },
      lineset: [
        {
          color: "#5D5D5D",
          anchorBgColor: "#5D5D5D"
        }
      ]
    },

    // 37 Scatter Chart
    scatter: {
      chart: {
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        showShadow: "0",
        adjustDiv: "1",
        lineThickness: "2",
        anchorRadius: "4",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverColor: "#AFAFAF",
        anchorBorderHoverThickness: "1.5",
        showLegend: "1",
        drawCustomLegendIcon: "0"
      }
    },

    // 38 Zoom Scatter Chart
    zoomscatter: {
      chart: {
        showShadow: "0",
        adjustDiv: "1",
        lineThickness: "2",
        anchorRadius: "4",
        anchorBorderHoverColor: "#AFAFAF",
        showLegend: "1",
        drawCustomLegendIcon: "0"
      }
    },

    // 39 Bubble Chart
    bubble: {
      chart: {
        use3DLighting: "0",
        showLegend: "1",
        legendIconSides: "2",
        plotFillAlpha: "80"
      }
    },

    // 40 Scroll Column 2D
    scrollcolumn2d: {
      chart: {
        showLegend: "1",
        legendIconSides: "4",
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        showShadow: "0",
        adjustDiv: "1",
        flatScrollBars: "1",
        scrollShowButtons: "0",
        scrollheight: "10",
        scrollColor: "#EBEBEB"
      }
    },

    // 41 Scroll Line 2D
    scrollline2d: {
      chart: {
        showShadow: "0",
        adjustDiv: "1",
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        legendIconSides: "2",
        flatScrollBars: "1",
        scrollShowButtons: "0",
        scrollheight: "10",
        scrollColor: "#EBEBEB",
        drawCrossLine: "1",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 42 Scroll Area 2D
    scrollarea2d: {
      chart: {
        showShadow: "0",
        adjustDiv: "1",
        lineThickness: "2",
        drawAnchors: "0",
        showLegend: "1",
        legendIconSides: "2",
        flatScrollBars: "1",
        scrollShowButtons: "0",
        scrollheight: "10",
        scrollColor: "#EBEBEB"
      }
    },

    // 43 Scroll Stacked Column 2D
    scrollstackedcolumn2d: {
      chart: {
        showLegend: "1",
        legendIconSides: "4",
        flatScrollBars: "1",
        scrollShowButtons: "0",
        scrollheight: "10",
        scrollColor: "#EBEBEB"
      }
    },

    // 44 Scroll Combination 2D (Single Y)
    scrollcombi2d: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        flatScrollBars: "1",
        scrollShowButtons: "0",
        scrollheight: "10",
        scrollColor: "#EBEBEB",
        drawCustomLegendIcon: "0",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 45 Scroll Combination 2D (Dual Y)
    scrollcombidy2d: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        flatScrollBars: "1",
        scrollShowButtons: "0",
        scrollheight: "10",
        scrollColor: "#EBEBEB",
        drawCustomLegendIcon: "0",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 46 Real-time Angular
    angulargauge: {
      chart: {
        setAdaptiveMin: "1",
        adjustTM: "1",
        tickvaluedistance: "10",
        placeTicksInside: "0",
        autoAlignTickValues: "1",
        showGaugeBorder: "0",
        minortmnumber: "0",
        majorTMHeight: "8",
        gaugeFillMix: "{light-0}",
        pivotbgcolor: "#000000",
        pivotfillmix: "0",
        showpivotborder: "1",
        pivotBorderColor: "#FFFFFF",
        showValue: "0",
        valueBelowPivot: "1"
      },
      dials: {
        dial: [
          {
            bgColor: "#000000",
            borderThickness: "0"
          }
        ]
      }
    },

    // 47 Real-time bulb
    bulb: {
      chart: {
        is3D: "0",
        placeValuesInside: "1",
        valueFont: "Source Sans Pro"
      }
    },

    // 48 Real-time Cylinder
    cylinder: {
      chart: {
        cylRadius: "50",
        cylYScale: "13"
      }
    },

    // 49 Real-time Horizontal LED
    hled: {
      chart: {
        ledGap: "0",
        showGaugeBorder: "0",
        setAdaptiveMin: "1",
        adjustTM: "1",
        placeTicksInside: "0",
        autoAlignTickValues: "1",
        minortmnumber: "0",
        majorTMHeight: "8",
        majorTMAlpha: "50"
      }
    },

    // 50 Real-time Horizontal Linear Gauge
    hlineargauge: {
      chart: {
        showGaugeBorder: "0",
        setAdaptiveMin: "1",
        adjustTM: "1",
        placeTicksInside: "0",
        autoAlignTickValues: "1",
        minorTMnumber: "0",
        majorTMHeight: "8",
        majorTMAlpha: "50",
        gaugeFillMix: "{light-0}",
        valueAbovePointer: "1"
      }
    },

    // 51 Real-time Thermometer
    thermometer: {
      chart: {
        use3DLighting: "0",
        manageResize: "1",
        autoScale: "1",
        showGaugeBorder: "1",
        gaugeBorderAlpha: "40",
        placeTicksInside: "0",
        autoAlignTickValues: "1",
        minortmnumber: "0",
        majorTMHeight: "8",
        majorTMAlpha: "50"
      }
    },

    // 52 Real-time Vertical LED
    vled: {
      chart: {
        ledGap: "0",
        showGaugeBorder: "0",
        setAdaptiveMin: "1",
        adjustTM: "1",
        placeTicksInside: "0",
        autoAlignTickValues: "1",
        minortmnumber: "0",
        majorTMHeight: "8",
        majorTMAlpha: "50"
      }
    },

    // 53 Real-time Area
    realtimearea: {
      chart: {
        showLegend: "1",
        legendIconSides: "2"
      }
    },

    // 54 Real-time Column
    realtimecolumn: {
      chart: {
        showLegend: "1",
        legendIconSides: "2"
      }
    },

    // 55 Real-time Line
    realtimeline: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        legendIconSides: "2",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 56 Real-time Stacked Area
    realtimestackedarea: {
      chart: {
        showLegend: "1",
        legendIconSides: "2"
      }
    },

    // 57 Real-time Stacked Column
    realtimestackedcolumn: {
      chart: {
        showLegend: "1",
        legendIconSides: "4"
      }
    },

    // 58 Real-time Line (Dual Y)
    realtimelinedy: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        legendIconSides: "2",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 59 Spark Line
    sparkline: {
      chart: {
        plotFillColor: "#5D62B5",
        anchorRadius: "4",
        highColor: "#29C3BE",
        lowColor: "#F2726F",
        captionPosition: "top",
        showOpenAnchor: "0",
        showCloseAnchor: "0",
        showOpenValue: "0",
        showCloseValue: "0",
        showHighLowValue: "0",
        periodColor: "#F3F3F3"
      }
    },

    // 60 Spark Column
    sparkcolumn: {
      chart: {
        plotFillColor: "5D62B5",
        highColor: "#29C3BE",
        lowColor: "#F2726F",
        captionPosition: "middle",
        periodColor: "#F3F3F3"
      }
    },

    // 61 Spark Win/Loss
    sparkwinloss: {
      chart: {
        winColor: "#29C3BE",
        lossColor: "#F2726F",
        captionPosition: "middle",
        drawColor: "#FFC533",
        scoreLessColor: "#5D62B5",
        periodColor: "#F3F3F3"
      }
    },

    // 62 Horizontal Bullet Graph
    hbullet: {
      chart: {
        plotFillColor: "#5D5D5D",
        colorRangeFillMix: "{light+0}",
        tickValueDistance: "3",
        tickMarkDistance: "3"
      }
    },

    // 63 Vertical Bullet Graph
    vbullet: {
      chart: {
        plotFillColor: "#5D5D5D",
        colorRangeFillMix: "{light+0}",
        tickValueDistance: "3",
        tickMarkDistance: "3"
      }
    },

    // 64 Funnel Chart
    funnel: {
      chart: {
        is2D: "1",
        smartLineThickness: "1",
        smartLineColor: "#B1AFAF",
        smartLineAlpha: "70",
        streamlinedData: "1",
        useSameSlantAngle: "1",
        alignCaptionWithCanvas: "1"
      }
    },

    // 65 Pyramid Chart
    pyramid: {
      chart: {
        is2D: "1",
        smartLineThickness: "1",
        smartLineColor: "#B1AFAF",
        smartLineAlpha: "70",
        streamlinedData: "1",
        useSameSlantAngle: "1",
        alignCaptionWithCanvas: "1",
        use3dlighting: "0"
      }
    },

    // 66 Gantt Chart
    gantt: {
      chart: {
        taskBarFillMix: "{light+0}",
        flatScrollBars: "1",
        gridBorderAlpha: "100",
        gridBorderColor: "#EAEAEA",
        ganttLineColor: "#EAEAEA",
        ganttLineAlpha: "100",
        taskBarRoundRadius: "2",
        showHoverEffect: "1",
        plotHoverEffect: "1",
        plotFillHoverAlpha: "50",
        showCategoryHoverBand: "1",
        categoryHoverBandAlpha: "50",
        showGanttPaneVerticalHoverBand: "1",
        showProcessHoverBand: "1",
        processHoverBandAlpha: "50",
        showGanttPaneHorizontalHoverBand: "1",
        showConnectorHoverEffect: "1",
        connectorHoverAlpha: "50",
        showTaskHoverEffect: "1",
        taskHoverFillAlpha: "50",
        slackHoverFillAlpha: "50",
        scrollShowButtons: "0",
        drawCustomLegendIcon: "0",
        legendShadow: "0",
        legendBorderAlpha: "0",
        legendBorderThickness: "0",
        legendIconBorderThickness: "0",
        legendBgAlpha: "0"
      },

      categories: [
        {
          fontcolor: "#5D5D5D",
          fontsize: "14",
          bgcolor: "#F3F3F3",
          hoverBandAlpha: "50",
          showGanttPaneHoverBand: "1",
          showHoverBand: "1",
          category: [
            {
              fontcolor: "#5D5D5D",
              fontsize: "14",
              bgcolor: "#F3F3F3"
            }
          ]
        }
      ],

      tasks: {
        showBorder: "0",
        showHoverEffect: "0"
      },

      processes: {
        fontcolor: "#5D5D5D",
        isanimated: "0",
        bgcolor: "#FFFFFF",
        bgAlpha: "100",
        headerbgcolor: "#F3F3F3",
        headerfontcolor: "#5D5D5D",
        showGanttPaneHoverBand: "1",
        showHoverBand: "1"
      },

      text: {
        fontcolor: "#5D5D5D",
        bgcolor: "#FFFFFF"
      },

      datatable: {
        fontcolor: "#5D5D5D",
        bgcolor: "#FFFFFF",
        bgAlpha: "100",
        datacolumn: [
          {
            bgcolor: "#FFFFFF"
          }
        ]
      },

      connectors: [
        {
          hoverThickness: "1.5"
        }
      ],

      milestones: {
        milestone: [
          {
            color: "#FFC533"
          }
        ]
      }
    },

    // 67 Logarithmic Column 2D Chart
    logmscolumn2d: {
      chart: {
        showLegend: "1",
        legendIconSides: "4"
      }
    },

    // 68 Logarithmic Line 2D Chart
    logmsline: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        drawCrossLine: "1",
        showLegend: "1",
        legendIconSides: "2",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 69 Single-Series Spline 2D
    spline: {
      chart: {
        lineThickness: "2",
        paletteColors: "#5D62B5",
        anchorBgColor: "#5D62B5",
        anchorRadius: "4",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 70 Single-Series Spline Area 2D
    splinearea: {
      chart: {
        paletteColors: "#5D62B5",
        drawAnchors: "0"
      }
    },

    // 71 Multi-Series Spline 2D
    msspline: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1",
        showLegend: "1",
        legendIconSides: "2"
      }
    },

    // 72 Multi-Series Spline Area 2D
    mssplinearea: {
      chart: {
        showLegend: "1",
        legendIconSides: "2",
        drawAnchors: "0"
      }
    },

    // 73 Error Bar Chart
    errorbar2d: {
      chart: {
        legendIconSides: "4",
        errorBarColor: "#5D5D5D",
        errorBarThickness: "0.7",
        errorBarAlpha: "80"
      }
    },

    // 74 Error Line 2D Chart
    errorline: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1",
        showLegend: "1",
        legendIconSides: "2",
        errorBarColor: "#5D5D5D",
        errorBarThickness: "0.7",
        errorBarAlpha: "80"
      }
    },

    // 75 Error Scatter Chart
    errorscatter: {
      chart: {
        showShadow: "0",
        adjustDiv: "1",
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        legendIconSides: "2",
        errorBarColor: "#5D5D5D",
        errorBarThickness: "0.7",
        errorBarAlpha: "80",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 76 Inverse Y-Axis Area 2D Chart
    inversemsarea: {
      chart: {
        drawCrossLine: "1",
        showLegend: "1",
        legendIconSides: "2"
      }
    },

    // 77 Inverse Y-Axis Column 2D Chart
    inversemscolumn2d: {
      chart: {
        showLegend: "1",
        legendIconSides: "4"
      }
    },

    // 78 Inverse Y-Axis Line 2D Chart
    inversemsline: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1",
        drawCrossLine: "1",
        showLegend: "1",
        legendIconSides: "2"
      }
    },

    // 79 Drag-able Column 2D Chart
    dragcolumn2d: {
      chart: {
        showLegend: "1",
        legendIconSides: "4"
      },
      categories: [
        {
          category: [
            {
              fontItalic: "1"
            }
          ]
        }
      ],
      dataset: [
        {
          data: [
            {
              allowDrag: "1",
              alpha: "80"
            }
          ]
        }
      ]
    },

    // 80 Drag-able Line 2D Chart
    dragline: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1",
        showLegend: "1",
        legendIconSides: "2"
      },
      categories: [
        {
          category: [
            {
              fontItalic: "1"
            }
          ]
        }
      ],
      dataset: [
        {
          data: [
            {
              allowDrag: "1",
              alpha: "80",
              dashed: "1"
            }
          ]
        }
      ]
    },

    // 81 Drag-able Area 2D Chart
    dragarea: {
      chart: {
        showLegend: "1",
        legendIconSides: "2",
        drawAnchors: "0"
      },
      categories: [
        {
          category: [
            {
              fontItalic: "1"
            }
          ]
        }
      ],
      dataset: [
        {
          data: [
            {
              allowDrag: "1",
              alpha: "80",
              dashed: "1"
            }
          ]
        }
      ]
    },

    // 82 Treemap Chart
    treemap: {
      chart: {
        parentLabelLineHeight: "16",
        baseFontSize: "14",
        labelFontSize: "14",
        showParent: "1",
        showNavigationBar: "0",
        plotBorderThickness: "0.5",
        plotBorderColor: "#EAEAEA",
        labelGlow: "1",
        labelGlowIntensity: "100",
        btnBackChartTooltext: "Back",
        btnResetChartTooltext: "Home",
        legendScaleLineThickness: "0",
        legendaxisborderalpha: "0",
        legendShadow: "0",
        toolbarButtonScale: "1.55",
        plotToolText: "$label, $dataValue, $sValue"
      },
      data: [
        {
          fillColor: "#FAFAFA"
        }
      ]
    },

    // 83 Radar Chart
    radar: {
      chart: {
        showLegend: "1",
        legendIconSides: "2",
        plotFillAlpha: "20",
        drawAnchors: "0"
      }
    },

    // 84 Heat Map Chart
    heatmap: {
      chart: {
        baseFontSize: "14",
        labelFontSize: "14",
        showPlotBorder: "1",
        plotBorderAlpha: "100",
        plotBorderThickness: "0.5",
        plotBorderColor: "#EAEAEA",
        tlFontColor: "#FDFDFD",
        tlFont: "Source Sans Pro Light",
        tlFontSize: "13",
        trFontColor: "#FDFDFD",
        trFont: "Source Sans Pro Light",
        trFontSize: "13",
        blFontColor: "#FDFDFD",
        blFont: "Source Sans Pro Light",
        blFontSize: "13",
        brFontColor: "#FDFDFD",
        brFont: "Source Sans Pro Light",
        brFontSize: "13",
        captionPadding: "20",
        legendScaleLineThickness: "0",
        legendaxisborderalpha: "0",
        legendShadow: "0"
      },
      colorrange: {
        gradient: "1",
        code: "#FFC533"
      }
    },

    // 85 Box and Whisker Chart
    boxandwhisker2d: {
      chart: {
        drawCustomLegendIcon: "0",
        showLegend: "1",
        showDetailedLegend: "1",
        legendIconSides: "2",
        showPlotBorder: "0",
        upperBoxBorderAlpha: "0",
        lowerBoxBorderAlpha: "0",
        lowerQuartileAlpha: "0",
        upperQuartileAlpha: "0",
        upperWhiskerColor: "#5D5D5D",
        upperWhiskerThickness: "0.7",
        upperWhiskerAlpha: "80",
        lowerWhiskerColor: "#5D5D5D",
        lowerWhiskerThickness: "0.7",
        lowerWhiskerAlpha: "80",
        medianColor: "#5D5D5",
        medianThickness: "0.7",
        medianAlpha: "100",
        outliericonshape: "spoke",
        outliericonsides: "9",
        meaniconcolor: "#5D5D5D",
        meanIconShape: "spoke",
        meaniconsides: "9",
        meaniconradius: "5"
      }
    },

    // 86 Candle-Stick Chart
    candlestick: {
      chart: {
        showShadow: "0",
        showVPlotBorder: "0",
        bearFillColor: "#F2726F",
        bullFillColor: "#62B58F",
        plotLineThickness: "0.3",
        plotLineAlpha: "100",
        divLineDashed: "0",
        showDetailedLegend: "1",
        legendIconSides: "2",
        showHoverEffect: "1",
        plotHoverEffect: "1",
        showVolumeChart: "0",
        trendLineColor: "#5D5D5D",
        trendLineThickness: "1",
        trendValueAlpha: "100",
        rollOverBandAlpha: "100",
        rollOverBandColor: "#F2F2F2"
      },

      categories: [
        {
          verticalLineColor: "#5D5D5D",
          verticalLineThickness: "1",
          verticalLineAlpha: "35"
        }
      ]
    },

    // 87 Drag Node Chart
    dragnode: {
      chart: {
        use3DLighting: "0",
        plotBorderThickness: "0",
        plotBorderAlpha: "0",
        showDetailedLegend: "1",
        legendIconSides: "2"
      },
      dataset: [
        {
          color: "#5D62B5"
        }
      ],
      connectors: [
        {
          connector: [
            {
              color: "#29C3BE"
            }
          ]
        }
      ]
    },

    // 88 Step Line Chart
    msstepline: {
      chart: {
        drawAnchors: "0",
        lineThickness: "2",
        drawCustomLegendIcon: "0"
      }
    },

    // 89 Multi-axis Line Chart
    multiaxisline: {
      chart: {
        showLegend: "1",
        lineThickness: "2",
        allowSelection: "0",
        connectNullData: "1",
        drawAnchors: "0",
        divLineDashed: "0",
        divLineColor: "#DFDFDF",
        vDivLineColor: "#DFDFDF",
        vDivLineDashed: "0",
        yAxisNameFontSize: "13",
        drawCustomLegendIcon: "0"
      },

      axis: [
        {
          divLineColor: "#DFDFDF",
          setAdaptiveYMin: "1",
          divLineDashed: "0"
        }
      ]
    },

    // 90 Multi-level Pie Chart
    multilevelpie: {
      chart: {
        useHoverColor: "1",
        hoverFillColor: "#EDEDED",
        showHoverEffect: "1",
        plotHoverEffect: "1"
      },
      category: [
        {
          color: "#EDEDED",
          category: [
            {
              color: "#5D62B5",
              category: [
                {
                  color: "#5D62B5"
                }
              ]
            }
          ]
        }
      ]
    },

    // 91 Select-Scatter Chart
    selectscatter: {
      chart: {
        showShadow: "0",
        adjustDiv: "1",
        lineThickness: "2",
        anchorRadius: "4",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverColor: "#FFFFFF",
        anchorBorderHoverThickness: "1.5",
        showLegend: "1",
        legendIconSides: "2"
      }
    },

    // 92 Waterfall / Cascade Chart
    waterfall2d: {
      chart: {
        paletteColors:
          "#5D62B5, #29C3BE, #F2726F, #FFC533, #62B58F, #BC95DF, #67CDF2",
        positiveColor: "62B58F",
        negativeColor: "#F2726F",
        showConnectors: "1",
        connectorDashed: "1",
        connectorThickness: "0.7",
        connectorColor: "#5D5D5D"
      }
    },

    // 93 Kagi Chart
    kagi: {
      chart: {
        rallyThickness: "2",
        declineThickness: "2",
        legendIconSides: "2",
        drawAnchors: "0",
        rallyColor: "#62B58F",
        declineColor: "#F2726F"
      }
    },

    // 94 Geo Maps
    geo: {
      chart: {
        showLabels: "0",
        legendScaleLineThickness: "0",
        legendaxisborderalpha: "0",
        legendShadow: "0",
        fillColor: "#FDFDFD",
        showEntityHoverEffect: "1",
        entityFillHoverAlpha: "90",
        connectorHoverAlpha: "90",
        markerBorderHoverAlpha: "90",
        showBorder: "1",
        borderColor: "#5D5D5D",
        borderThickness: "0.1",
        nullEntityColor: "5D5D5D",
        nullEntityAlpha: "50",
        entityFillHoverColor: "#5D5D5D"
      },
      colorrange: {
        gradient: "1",
        code: "#FFC533"
      }
    },

    // 95 Overlapped Bar2D Chart
    overlappedbar2d: {
      chart: {
        placeValuesInside: "0",
        showAlternateVGridColor: "0",
        showLegend: "1",
        legendIconSides: "4",
        yAxisValuesPadding: "10"
      }
    },

    // 96 Overlapped Column2D Chart
    overlappedcolumn2d: {
      chart: {
        showLegend: "1",
        legendIconSides: "4"
      }
    },

    // 97 scroll Bar 2D
    scrollbar2d: {
      chart: {
        showLegend: "1",
        legendIconSides: "4",
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        showShadow: "0",
        adjustDiv: "1",
        flatScrollBars: "1",
        scrollShowButtons: "0",
        scrollWidth: "10",
        scrollColor: "#EBEBEB",
        showAlternateVGridColor: 0
      }
    },

    // 98 Scroll Stacked Bar2D
    scrollstackedbar2d: {
      chart: {
        showLegend: "1",
        legendIconSides: "4",
        flatScrollBars: "1",
        scrollShowButtons: "0",
        scrollWidth: "10",
        scrollColor: "#EBEBEB",
        showAlternateVGridColor: 0
      }
    },

    // 99 Scroll Multi-series Stacked Column2D
    scrollmsstackedcolumn2d: {
      chart: {
        showLegend: "1",
        legendIconSides: "4",
        showShadow: "0",
        adjustDiv: "1",
        flatScrollBars: "1",
        scrollShowButtons: "0",
        scrollheight: "10",
        scrollColor: "#EBEBEB"
      }
    },

    // 100 Scroll Multi-series Stacked Column 2D + Line Dual Y Axis
    scrollmsstackedcolumn2dlinedy: {
      chart: {
        placeValuesInside: "0",
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        drawCustomLegendIcon: "0",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1",
        showShadow: "0",
        adjustDiv: "1",
        flatScrollBars: "1",
        scrollShowButtons: "0",
        scrollheight: "10",
        scrollColor: "#EBEBEB"
      },
      lineset: [
        {
          color: "#5D5D5D",
          anchorBgColor: "#5D5D5D"
        }
      ]
    },

    // 101 Stacked Column2D + Line Dual Y-Axis
    stackedcolumn2dlinedy: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        drawCrossLine: "1",
        showLegend: "1",
        drawCustomLegendIcon: "0",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 102 Stacked Area2D + Line Dual Y-Axis
    stackedarea2dlinedy: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        drawCrossLine: "1",
        drawCustomLegendIcon: "0",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 103 Multi-series 3D Single Y Combination
    mscombidy3d: {
      chart: {
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        placeValuesInside: "0",
        showShadow: "0",
        chartTopMargin: "35",
        adjustDiv: "1",
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        drawCustomLegendIcon: "0",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "1.5",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 104 Sankey Diagram
    sankey: {
      chart: {
        nodeLabelFontColor: "#666",
        nodeLabelFontSize: 14,
        nodeLabelPosition: "inside",
        nodeHoverAlpha: 75,
        legendPosition: "bottom",
        plothighlighteffect: "fadeout",
        linkColor: "source",
        textOutline: 1,
        linkHoverAlpha: 75,
        linkAlpha: 30,
        enableDrag: 0
      }
    },

    // 105 Sunburst Chart
    sunburst: {
      chart: {
        textOutline: 1,
        unfocussedAlpha: 30,
        hoverFillAlpha: 100
      }
    },

    // 106 Chord Diagram
    chord: {
      chart: {
        drawCustomLegendIcon: 0,
        legendPosition: "right",
        nodeThickness: 8,
        nodeLabelColor: "#666",
        nodeLabelFontSize: 14,
        nodeLabelPosition: "outside",
        nodeHoverAlpha: 100,
        nodeLinkPadding: 5,
        nodeBorderThickness: 0.5,
        nodeAlpha: 100,
        linkAlpha: 40,
        linkBorderAlpha: 40,
        linkHoverAlpha: 75
      }
    },
    
    // 107 RadialBar
    radialBar: {
      chart: {
        legendIconSides: "2",
        labelPadding: "6px 10px 6px 10px"
      }
    },

    // timeseries
    timeseries: {
      // caption styling
      caption: {
        style: {
          text: {
            "font-size": 18,
            "font-family": "Source Sans Pro SemiBold",
            fill: "#5A5A5A"
          }
        }
      },
      // sub-caption styling
      subcaption: {
        style: {
          text: {
            "font-family": "Source Sans Pro",
            "font-size": 13,
            fill: "#999999"
          }
        }
      },
      crossline: {
        style: {
          line: {
            stroke: "#DFDFDF",
            "stroke-width": 1
          }
        }
      },
      chart: {
        paletteColors:
          "#5D62B5, #29C3BE, #F2726F, #FFC533, #62B58F, #BC95DF, #67CDF2",
        baseFont: "Source Sans Pro",
        multiCanvasTooltip: 1,
        style: {
          text: {
            "font-family": "Source Sans Pro"
          },
          canvas: {
            stroke: "#DFDFDF",
            "stroke-width": 1
          }
        }
      },
      tooltip: {
        style: {
          container: {
            "background-color": "#FFFFFF",
            opacity: 0.9,
            border: "1px solid #E1E1E1",
            "border-radius": "2px",
            padding: "6px"
          },
          text: {
            "font-size": "13px",
            color: "#5A5A5A"
          },
          header: {
            color: "#5A5A5A",
            "font-family": "Source Sans Pro SemiBold",
            padding: "0px"
          },
          body: {
            padding: "0px"
          }
        }
      },
      navigator: {
        scrollbar: {
          style: {
            button: {
              fill: "#EBEBEB"
            },
            track: {
              fill: "#FFFFFF",
              stroke: "#DFDFDF",
              "stroke-width": 1
            },
            scroller: {
              fill: "#EBEBEB"
            }
          }
        },
        window: {
          style: {
            handle: {
              fill: "#EBEBEB"
            }
          }
        }
      },
      extensions: {
        customRangeSelector: {
          style: {
            "title-text": {
              "font-family": "Source Sans Pro SemiBold"
            },
            "title-icon": {
              "font-family": "Source Sans Pro SemiBold"
            },
            label: {
              color: "#999999",
              "font-family": "Source Sans Pro SemiBold"
            },
            "button-apply": {
              color: "#FFFFFF",
              "background-color": "#5648D4",
              border: "none"
            },
            "button-apply:hover": {
              "font-family": "Source Sans Pro SemiBold"
            },
            "button-cancel": {
              color: "#999999",
              "background-color": "#FFFFFF",
              border: "none"
            },
            "button-cancel:hover": {
              color: "#5648D4",
              "font-family": "Source Sans Pro SemiBold"
            },
            "cal-selecteddate": {
              color: "#FEFEFE",
              "font-family": "Source Sans Pro SemiBold",
              "font-size": "11px"
            },
            "cal-date": {
              color: "#5F5F5F",
              "font-family": "Source Sans Pro",
              "font-size": "11px"
            },
            "cal-disableddate": {
              color: "#CACACA",
              "font-family": "Source Sans Pro",
              "font-size": "11px"
            }
          }
        },
        standardRangeSelector: {
          style: {
            "button-text": {
              fill: "#999999"
            },
            "button-text:hover": {
              fill: "#5648D4",
              "font-family": "Source Sans Pro SemiBold"
            },
            "button-text:active": {
              fill: "#5648D4",
              "font-family": "Source Sans Pro SemiBold"
            },
            separator: {
              stroke: "#DFDFDF"
            }
          }
        }
      },
      legend: {
        style: {
          text: {
            fill: "#7C7C7C",
            "font-size": 15,
            "font-family": "Source Sans Pro"
          }
        }
      },
      xaxis: {
        timemarker: [
          {
            style: {
              marker: {
                fill: "#62b58f",
                stroke: "#62b58f"
              },
              "marker:hover": {
                fill: "#3e8464",
                stroke: "#3e8464",
                "stroke-width": 1
              },
              "marker-box": {
                fill: "#F8B8B7",
                stroke: "#F8B8B7",
                "stroke-width": 1
              },
              "marker-box:hover": {
                fill: "#F2726F",
                stroke: "#F2726F",
                "stroke-width": 1
              },
              "marker-notch": {
                fill: "#F8B8B7",
                stroke: "#F8B8B7"
              },
              "marker-notch:hover": {
                fill: "#F2726F",
                stroke: "#F2726F"
              },
              "marker-line": {
                stroke: "#F8B8B7"
              },
              "marker-line:hover": {
                stroke: "#F2726F"
              },
              text: {
                fill: "#5F5F5F"
              },
              "text:hover": {
                fill: "#5F5F5F"
              }
            }
          }
        ],
        style: {
          title: {
            "font-size": 15,
            "font-family": "Source Sans Pro",
            fill: "#999999"
          },
          "grid-line": {
            stroke: "#DFDFDF",
            "stroke-width": 1
          },
          "tick-mark-major": {
            stroke: "#DFDFDF",
            "stroke-width": 1
          },
          "tick-mark-minor": {
            stroke: "#DFDFDF",
            "stroke-width": 0.75
          },
          "label-major": {
            color: "#5A5A5A"
          },
          "label-minor": {
            color: "#8D8D8D"
          },
          "label-context": {
            color: "#5A5A5A"
          }
        }
      },
      plotconfig: {
        column: {
          style: {
            "plot:hover": {
              opacity: 0.75
            },
            "plot:highlight": {
              opacity: 0.75
            }
          }
        },
        line: {
          style: {
            plot: {
              "stroke-width": 1.5
            },
            anchor: {
              "stroke-width": 0
            }
          }
        },
        area: {
          style: {
            anchor: {
              "stroke-width": 0
            }
          }
        },
        candlestick: {
          style: {
            bear: {
              stroke: "#F2726F",
              fill: "#F2726F"
            },
            "bear:hover": {
              opacity: 0.75
            },
            "bear:highlight": {
              opacity: 0.75
            },
            bull: {
              stroke: "#62B58F",
              fill: "#62B58F"
            },
            "bull:hover": {
              opacity: 0.75
            },
            "bull:highlight": {
              opacity: 0.75
            }
          }
        },
        ohlc: {
          style: {
            bear: {
              stroke: "#F2726F",
              fill: "#F2726F"
            },
            "bear:hover": {
              opacity: 0.75
            },
            "bear:highlight": {
              opacity: 0.75
            },
            bull: {
              stroke: "#62B58F",
              fill: "#62B58F"
            },
            "bull:hover": {
              opacity: 0.75
            },
            "bull:highlight": {
              opacity: 0.75
            }
          }
        }
      },
      yaxis: [
        {
          style: {
            title: {
              "font-size": "15",
              "font-family": "Source Sans Pro",
              fill: "#999999"
            },
            "tick-mark": {
              stroke: "#DFDFDF",
              "stroke-width": 1
            },
            "grid-line": {
              stroke: "#DFDFDF",
              "stroke-width": 1
            },
            label: {
              color: "#5A5A5A"
            }
          }
        }
      ]
    }
  }
};

var index = {
  extension: themeObject,
  name: "fusionTheme",
  type: "theme"
};

export default index;
