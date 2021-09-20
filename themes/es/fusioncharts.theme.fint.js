/** !
 * @license Fint Theme v//? write(JSON.parse(require('fs').readFileSync('./package.json')).version);
 * FusionCharts JavaScript Library
 *
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 */
var themeObject = {
  name: 'fint',
  theme: {
    base: {
      chart: {
        paletteColors: '#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000,#0e948c,#8cbb2c,#f3de00,#c02d00,#5b0101',
        labelDisplay: 'auto',
        baseFontColor: '#333333',
        baseFont: 'Helvetica Neue,Arial',
        captionFontSize: '14',
        subcaptionFontSize: '14',
        subcaptionFontBold: '0',
        showBorder: '0',
        bgColor: '#ffffff',
        showShadow: '0',
        canvasBgColor: '#ffffff',
        showCanvasBorder: '0',
        useplotgradientcolor: '0',
        useRoundEdges: '0',
        showPlotBorder: '0',
        showAlternateHGridColor: '0',
        showAlternateVGridColor: '0',
        toolTipColor: '#ffffff',
        toolTipBorderThickness: '0',
        toolTipBgColor: '#000000',
        toolTipBgAlpha: '80',
        toolTipBorderRadius: '2',
        toolTipPadding: '5',
        legendBgAlpha: '0',
        legendBorderAlpha: '0',
        legendShadow: '0',
        legendItemFontSize: '10',
        legendItemFontColor: '#666666',
        legendCaptionFontSize: '9',
        divlineAlpha: '100',
        divlineColor: '#999999',
        divlineThickness: '1',
        divLineIsDashed: '1',
        divLineDashLen: '1',
        divLineGapLen: '1',
        scrollheight: '10',
        flatScrollBars: '1',
        scrollShowButtons: '0',
        scrollColor: '#cccccc',
        showHoverEffect: '1',
        valueFontSize: '10',
        showXAxisLine: '1',
        xAxisLineThickness: '1',
        xAxisLineColor: '#999999'
      },
      dataset: [{}],
      trendlines: [{}]
    },
    geo: {
      chart: {
        showLabels: '0',
        fillColor: '#0075c2',
        showBorder: '1',
        borderColor: '#eeeeee',
        borderThickness: '1',
        borderAlpha: '50',
        entityFillhoverColor: '#0075c2',
        entityFillhoverAlpha: '80',
        connectorColor: '#cccccc',
        connectorThickness: '1.5',
        markerFillHoverAlpha: '90'
      }
    },
    pie2d: {
      chart: {
        placeValuesInside: '0',
        use3dlighting: '0',
        valueFontColor: '#333333',
        captionPadding: '15'
      },
      data: function (index, dataItem, dataLength) {
        var math = window.Math,
          alphaSlab = dataLength > 50 ?
            math.round(100 / math.ceil(dataLength / 10)) : 20,
          alpha = 100 - alphaSlab * math.floor(index / 10);
        return {
          alpha: alpha
        };
      }
    },
    doughnut2d: {
      chart: {
        placeValuesInside: '0',
        use3dlighting: '0',
        valueFontColor: '#333333',
        centerLabelFontSize: '12',
        centerLabelBold: '1',
        centerLabelFontColor: '#333333',
        captionPadding: '15'
      },
      data: function (index, dataItem, dataLength) {
        var math = window.Math,
          alphaSlab = dataLength > 50 ?
            math.round(100 / math.ceil(dataLength / 10)) : 20,
          alpha = 100 - alphaSlab * math.floor(index / 10);
        return {
          alpha: alpha
        };
      }
    },
    line: {
      chart: {
        lineThickness: '2'
      }
    },
    spline: {
      chart: {
        lineThickness: '2'
      }
    },
    column2d: {
      chart: {
        paletteColors: '#0075c2',
        valueFontColor: '#ffffff',
        placeValuesInside: '1',
        rotateValues: '1'
      }
    },
    bar2d: {
      chart: {
        paletteColors: '#0075c2',
        valueFontColor: '#ffffff',
        placeValuesInside: '1'
      }
    },
    column3d: {
      chart: {
        paletteColors: '#0075c2',
        valueFontColor: '#ffffff',
        placeValuesInside: '1',
        rotateValues: '1'
      }
    },
    bar3d: {
      chart: {
        paletteColors: '#0075c2',
        valueFontColor: '#ffffff',
        placeValuesInside: '1'
      }
    },
    area2d: {
      chart: {
        valueBgColor: '#ffffff',
        valueBgAlpha: '90',
        valueBorderPadding: '-2',
        valueBorderRadius: '2'
      }
    },
    splinearea: {
      chart: {
        valueBgColor: '#ffffff',
        valueBgAlpha: '90',
        valueBorderPadding: '-2',
        valueBorderRadius: '2'
      }
    },
    mscolumn2d: {
      chart: {
        valueFontColor: '#ffffff',
        placeValuesInside: '1',
        rotateValues: '1'
      }
    },
    mscolumn3d: {
      chart: {
        showValues: '0'
      }
    },
    msstackedcolumn2dlinedy: {
      chart: {
        showValues: '0'
      }
    },
    stackedcolumn2d: {
      chart: {
        showValues: '0'
      }
    },
    stackedarea2d: {
      chart: {
        valueBgColor: '#ffffff',
        valueBgAlpha: '90',
        valueBorderPadding: '-2',
        valueBorderRadius: '2'
      }
    },
    stackedbar2d: {
      chart: {
        showValues: '0'
      }
    },
    msstackedcolumn2d: {
      chart: {
        showValues: '0'
      }
    },
    mscombi3d: {
      chart: {
        showValues: '0'
      }
    },
    mscombi2d: {
      chart: {
        showValues: '0'
      }
    },
    mscolumn3dlinedy: {
      chart: {
        showValues: '0'
      }
    },
    stackedcolumn3dline: {
      chart: {
        showValues: '0'
      }
    },
    stackedcolumn2dline: {
      chart: {
        showValues: '0'
      }
    },
    scrollstackedcolumn2d: {
      chart: {
        valueFontColor: '#ffffff'
      }
    },
    scrollcombi2d: {
      chart: {
        showValues: '0'
      }
    },
    scrollcombidy2d: {
      chart: {
        showValues: '0'
      }
    },
    logstackedcolumn2d: {
      chart: {
        showValues: '0'
      }
    },
    logmsline: {
      chart: {
        showValues: '0'
      }
    },
    logmscolumn2d: {
      chart: {
        showValues: '0'
      }
    },
    msstackedcombidy2d: {
      chart: {
        showValues: '0'
      }
    },
    scrollcolumn2d: {
      chart: {
        valueFontColor: '#ffffff',
        placeValuesInside: '1',
        rotateValues: '1'
      }
    },
    pareto2d: {
      chart: {
        paletteColors: '#0075c2',
        showValues: '0'
      }
    },
    pareto3d: {
      chart: {
        paletteColors: '#0075c2',
        showValues: '0'
      }
    },
    angulargauge: {
      chart: {
        pivotFillColor: '#ffffff',
        pivotRadius: '4',
        gaugeFillMix: '{light+0}',
        showTickValues: '1',
        majorTMHeight: '12',
        majorTMThickness: '2',
        majorTMColor: '#000000',
        minorTMNumber: '0',
        tickValueDistance: '10',
        valueFontSize: '24',
        valueFontBold: '1',
        gaugeInnerRadius: '50%',
        showHoverEffect: '0'
      },
      dials: {
        dial: [{
          baseWidth: '10',
          rearExtension: '7',
          bgColor: '#000000',
          bgAlpha: '100',
          borderColor: '#666666',
          bgHoverAlpha: '20'
        }]
      }
    },
    hlineargauge: {
      chart: {
        pointerFillColor: '#ffffff',
        gaugeFillMix: '{light+0}',
        showTickValues: '1',
        majorTMHeight: '3',
        majorTMColor: '#000000',
        minorTMNumber: '0',
        valueFontSize: '18',
        valueFontBold: '1'
      },
      pointers: {
        pointer: [{}]
      }
    },
    bubble: {
      chart: {
        use3dlighting: '0',
        showplotborder: '0',
        showYAxisLine: '1',
        yAxisLineThickness: '1',
        yAxisLineColor: '#999999',
        showAlternateHGridColor: '0',
        showAlternateVGridColor: '0',
        plotFillHoverColor: '#2b8ecf'
      },
      categories: [{
        verticalLineDashed: '1',
        verticalLineDashLen: '1',
        verticalLineDashGap: '1',
        verticalLineThickness: '1',
        verticalLineColor: '#000000',
        category: [{}]
      }],
      vtrendlines: [{
        line: [{
          alpha: '0'
        }]
      }]
    },
    scatter: {
      chart: {
        use3dlighting: '0',
        showYAxisLine: '1',
        yAxisLineThickness: '1',
        yAxisLineColor: '#999999',
        showAlternateHGridColor: '0',
        showAlternateVGridColor: '0'
      },
      categories: [{
        verticalLineDashed: '1',
        verticalLineDashLen: '1',
        verticalLineDashGap: '1',
        verticalLineThickness: '1',
        verticalLineColor: '#000000',
        category: [{}]
      }],
      vtrendlines: [{
        line: [{
          alpha: '0'
        }]
      }]
    },
    boxandwhisker2d: {
      chart: {
        valueBgColor: '#ffffff',
        valueBgAlpha: '90',
        valueBorderPadding: '-2',
        valueBorderRadius: '2'
      }
    },
    thermometer: {
      chart: {
        gaugeFillColor: '#0075c2'
      }
    },
    cylinder: {
      chart: {
        cylFillColor: '#0075c2'
      }
    },
    sparkline: {
      chart: {
        linecolor: '#0075c2'
      }
    },
    sparkcolumn: {
      chart: {
        plotFillColor: '#0075c2'
      }
    },
    sparkwinloss: {
      chart: {
        winColor: '#0075c2',
        lossColor: '#1aaf5d',
        drawColor: '#f2c500',
        scoreLessColor: '#f45b00'
      }
    },
    hbullet: {
      chart: {
        plotFillColor: '#0075c2',
        targetColor: '#1aaf5d'
      }
    },
    vbullet: {
      chart: {
        plotFillColor: '#0075c2',
        targetColor: '#1aaf5d'
      }
    },
    radialBar: {
      chart: {
        labelPadding: "6px 10px 6px 10px"
      }
    }
  }
};

var index = {
  extension: themeObject,
  name: 'fintTheme',
  type: 'theme'
};

export default index;
