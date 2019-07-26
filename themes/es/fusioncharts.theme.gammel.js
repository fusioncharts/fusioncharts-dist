/*
 Gammel Theme v0.3
 FusionCharts JavaScript Library

 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
*/
var themeObject = {
  name: "gammel",
  theme: {
    base: {
      chart: {
        // plot customization
        paletteColors:
          "#7CB5EC, #434348, #8EED7D, #F7A35C, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1",
        usePlotGradientColor: "0",
        showPlotBorder: "0",
        showShadow: "0",

        // chart and canvas background and padding customization
        showBorder: "0",
        showCanvasBorder: "0",
        bgColor: "#FFFFFF",
        bgAlpha: "100",
        canvasBgAlpha: "0",

        // axis and grid lines customization
        showAlternateHGridColor: "0",
        showAlternateVGridColor: "0",
        divLineAlpha: "100",
        divLineColor: "#E6E6E6",
        divLineThickness: "1",
        yAxisValuesPadding: "10",
        labelPadding: "10",
        canvasPadding: "10",
        valuePadding: "0",
        adjustDiv: "1",
        labelDisplay: "AUTO",
        transposeAxis: "1",
        showCanvasBase: "0",

        // tooltip customization
        tooltipColor: "#333333",
        toolTipBgColor: "#F6F6F6",
        toolTipBgAlpha: "85",
        toolTipPadding: "8",
        toolTipBorderColor: "#999999",
        toolTipBorderRadius: "3",
        toolTipBorderThickness: "1",
        tooltipBorderAlpha: "90",
        showToolTipShadow: "1",

        // font and text size customization
        baseFontSize: "11",
        baseFont:
          "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
        baseFontColor: "#666666",
        outCnvBaseFontSize: "11",
        outCnvBaseFont:
          "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
        outCnvBaseFontColor: "#666666",
        captionFontSize: "18",
        captionFontBold: "0",
        captionFontColor: "#333333",
        subCaptionFontSize: "12",
        subCaptionFontBold: "0",
        subCaptionFontColor: "#666666",
        valueFontBold: "1",
        valueFontSize: "11",
        valueFontColor: "#000000",
        placeValuesInside: "0",
        xAxisNameFontBold: "0",
        xAxisNameFontSize: "12",
        xAxisNameFontColor: "#666666",
        yAxisNameFontBold: "0",
        yAxisNameFontSize: "12",
        yAxisNameFontColor: "#666666",
        sYAxisNameFontBold: "0",
        sYAxisNameFontSize: "12",
        sYAxisNameFontColor: "#666666",
        xAxisNamePadding: "8",
        yAxisNamePadding: "8",
        sYAxisNamePadding: "8",
        captionPadding: "10",
        centerLabelFontSize: "11",
        centerLabelColor: "#666666",
        centerLabelBgOval: "1",
        useEllipsesWhenOverflow: "1",

        // legend customization
        showLegend: "1",
        legendBgAlpha: "0",
        legendBorderThickness: "0",
        legendBorderAlpha: "0",
        legendShadow: "0",
        legendItemFontSize: "12",
        legendItemFontColor: "#333333",
        legendItemFontBold: "1",
        legendPosition: "bottom",
        legendNumColumns: "4",
        drawCustomLegendIcon: "1",
        legendIconSides: "2",
        legendIconBorderThickness: "0",
        legendItemHiddenColor: "#CCCCCC",

        // cross line customization
        drawCrossLineOnTop: "0",
        crossLineThickness: "1",
        crossLineColor: "#E6E6E6",
        crossLineAlpha: "60",

        // hover effect
        showHoverEffect: "1",
        plotHoverEffect: "1",
        plotFillHoverAlpha: "95",
        columnHoverAlpha: "95",

        // scroll customization
        scrollColor: "#808080",
        scrollHeight: "11",
        flatscrollbars: "1",
        scrollshowbuttons: "1"
      }
    },

    // 1. Column 2D
    column2d: {
      chart: {
        plotToolText: "$label: <b>$dataValue</b>",
        paletteColors: "#7CB5EC"
      }
    },

    // 2. Column 3D
    column3d: {
      chart: {
        plotToolText: "$label: <b>$dataValue</b>",
        paletteColors: "#7CB5EC"
      }
    },

    // 3. Line 2D
    line: {
      chart: {
        paletteColors: "#7CB5EC",
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        plotToolText: "$label: <b>$dataValue</b>",
        showValues: "0",
        anchorBgColor: "#7CB5EC",
        anchorBorderHoverColor: "#D8D8D8",
        drawCrossLine: "1",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
      }
    },

    // 4. Area 2D
    area2d: {
      chart: {
        paletteColors: "#7CB5EC",
        plotBorderColor: "#7CB5EC",
        showPlotBorder: "1",
        plotBorderAlpha: "100",
        plotBorderThickness: "1.5",
        plotFillAlpha: "70",
        drawAnchors: "0",
        plotToolText: "$label: <b>$dataValue</b>",
        showValues: "0",
        drawCrossLine: "1"
      }
    },

    // 5. Bar 2D
    bar2d: {
      chart: {
        plotToolText: "$label: <b>$dataValue</b>",
        paletteColors: "#7CB5EC"
      }
    },

    // 6. Bar 3D
    bar3d: {
      chart: {
        plotToolText: "$label: <b>$dataValue</b>",
        paletteColors: "#7CB5EC"
      }
    },

    // 7. Pie 2D
    pie2d: {
      chart: {
        showZeroPies: "1",
        plotToolText: "$label: <b>$dataValue</b>",
        showPercentValues: "1",
        showPercentInToolTip: "0",
        labelSepChar: ": ",
        use3DLighting: "0",
        enableMultiSlicing: "0",
        isSmartLineSlanted: "0",
        smartLineColor: "#434348",
        smartLineThickness: "1",
        smartLabelClearance: "0"
      },

      data: function(b, a, c) {
        a = window.Math;
        return {
          alpha:
            100 -
            (c > 50 ? a.round(100 / a.ceil(c / 10)) : 20) * a.floor(b / 10)
        };
      }
    },

    // 8. Pie 3D
    pie3d: {
      chart: {
        showZeroPies: "1",
        plotToolText: "$label: <b>$dataValue</b>",
        showPercentValues: "1",
        showPercentInToolTip: "0",
        labelSepChar: ": ",
        use3DLighting: "0",
        enableMultiSlicing: "0",
        pieYScale: "75",
        pieSliceDepth: "10",
        isSmartLineSlanted: "0",
        smartLineColor: "#434348",
        smartLineThickness: "1",
        smartLabelClearance: "0"
      },

      data: function(b, a, c) {
        a = window.Math;
        return {
          alpha:
            100 -
            (c > 50 ? a.round(100 / a.ceil(c / 10)) : 20) * a.floor(b / 10)
        };
      }
    },

    // 9. Doughnut 2D
    doughnut2d: {
      chart: {
        showZeroPies: "1",
        plotToolText: "$label: <b>$dataValue</b>",
        showPercentValues: "1",
        showPercentInToolTip: "0",
        labelSepChar: ": ",
        use3DLighting: "0",
        enableMultiSlicing: "0",
        isSmartLineSlanted: "0",
        smartLineColor: "#434348",
        smartLineThickness: "1",
        smartLabelClearance: "0"
      },

      data: function(b, a, c) {
        a = window.Math;
        return {
          alpha:
            100 -
            (c > 50 ? a.round(100 / a.ceil(c / 10)) : 20) * a.floor(b / 10)
        };
      }
    },

    // 10. Doughnut 3D
    doughnut3d: {
      chart: {
        showZeroPies: "1",
        plotToolText: "$label: <b>$dataValue</b>",
        showPercentValues: "1",
        showPercentInToolTip: "0",
        labelSepChar: ": ",
        use3DLighting: "0",
        enableMultiSlicing: "0",
        pieYScale: "75",
        pieSliceDepth: "10",
        isSmartLineSlanted: "0",
        smartLineColor: "#434348",
        smartLineThickness: "1",
        smartLabelClearance: "0"
      },

      data: function(b, a, c) {
        a = window.Math;
        return {
          alpha:
            100 -
            (c > 50 ? a.round(100 / a.ceil(c / 10)) : 20) * a.floor(b / 10)
        };
      }
    },

    // 11. Pareto 2D
    pareto2d: {
      chart: {
        paletteColors: "#434348",
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        plotToolText: "$label: <b>$dataValue</b>",
        showValues: "0",
        lineColor: "#7CB5EC",
        anchorBgColor: "#7CB5EC",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2"
      }
    },

    // 12. Pareto 3D
    pareto3d: {
      chart: {
        paletteColors: "#434348",
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        plotToolText: "$label: <b>$dataValue</b>",
        showValues: "0",
        lineColor: "#7CB5EC",
        anchorBgColor: "#7CB5EC",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2"
      }
    },

    // 13. Multi-series Column 2D
    mscolumn2d: {
      chart: {
        showValues: "0",
        drawCrossLine: "1"
      }
    },

    // 14. Multi-series Column 3D
    mscolumn3d: {
      chart: {
        showValues: "0"
      }
    },

    // 15. Multi-series Line 2D
    msline: {
      chart: {
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        drawCrossLine: "1",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
      }
    },

    // 16. Multi-series Bar 2D
    msbar2d: {
      chart: {
        showValues: "0",
        drawCrossLine: "1"
      }
    },

    // 17. Multi-series Bar 3D
    msbar3d: {
      chart: {
        showValues: "0"
      }
    },

    // 18. Multi-series Area 2D
    msarea: {
      chart: {
        showPlotBorder: "1",
        plotBorderAlpha: "100",
        plotBorderThickness: "1.5",
        plotFillAlpha: "70",
        drawAnchors: "0",
        showValues: "0",
        drawCrossLine: "1"
      }
    },

    // 19. Marikekko
    marimekko: {
      chart: {
        plotToolText: "$seriesName - <b>$label: $dataValue</b>"
      }
    },

    // 20. Zoom Line
    zoomline: {
      chart: {
        // fallback in case cross line is not used
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
      }
    },

    // 21. Zoom Line Dual Y-Axis
    zoomlinedy: {
      chart: {
        // fallback in case cross line is not used
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
      }
    },

    // 22. Stacked Column2D Chart
    stackedcolumn2d: {
      chart: {
        showValues: "0",
        showSum: "1"
      }
    },

    // 23. Stacked Column3D Chart
    stackedcolumn3d: {
      chart: {
        showValues: "0",
        showSum: "1"
      }
    },

    // 24. Stacked Bar2D Chart
    stackedbar2d: {
      chart: {
        showValues: "0",
        showSum: "1"
      }
    },

    // 25. Stacked Bar3D Chart
    stackedbar3d: {
      chart: {
        showValues: "0",
        showSum: "1"
      }
    },

    // 26. Stacked Area 2D Chart
    stackedarea2d: {
      chart: {
        showValues: "0",
        showSum: "0",
        drawCrossLine: "1",
        plotFillAlpha: "70"
      }
    },

    // 27. Multi-series Stacked Column2D Chart
    msstackedcolumn2d: {
      chart: {
        showValues: "0",
        showSum: "0",
        drawCrossLine: "0"
      }
    },

    // 28. Multi-series 2D Single Y Combination Chart
    mscombi2d: {
      chart: {
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        drawCrossLine: "1",
        legendIconBorderThickness: "1"
      }
    },

    // 29. Multi-series 3D Single Y Combination Chart
    mscombi3d: {
      chart: {
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
      }
    },

    // 30. Multi-series Column 3D + Line - Single Y Axis Chart
    mscolumnline3d: {
      chart: {
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
      }
    },

    // 31. Stacked Column 2D + Line Single Y Axis Chart
    stackedcolumn2dline: {
      chart: {
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        drawCrossLine: "1",
        legendIconBorderThickness: "1"
      }
    },

    // 32. Stacked Column 3D + Line Single Y Axis Chart
    stackedcolumn3dline: {
      chart: {
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
      }
    },

    // 33. Multi-series 2D Dual Y Combination Chart
    mscombidy2d: {
      chart: {
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        drawCrossLine: "1",
        legendIconBorderThickness: "1"
      }
    },

    // 34. Multi-series Column 3D + Line - Dual Y Axis Chart
    mscolumn3dlinedy: {
      chart: {
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
      }
    },

    // 35. Stacked Column 3D + Line Dual Y Axis Chart
    stackedcolumn3dlinedy: {
      chart: {
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
      }
    },

    // 36. Multi-series Stacked Column 2D + Line Dual Y Axis Chart
    msstackedcolumn2dlinedy: {
      chart: {
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        drawCrossLine: "1",
        legendIconBorderThickness: "1"
      }
    },

    // 37. Scatter
    scatter: {
      chart: {
        drawCustomLegendIcon: "0",
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "7",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2"
      }
    },

    // 38. Bubble
    bubble: {
      chart: {
        quadrantLineThickness: "2",
        quadrantLineColor: "#000000",
        quadrantLineDashed: "1",
        quadrantLineAlpha: "100",
        setAdaptiveYMin: "1",
        setAdaptiveXMin: "1",
        quadrantLineDashGap: "3.5",
        quadrantLineDashLen: "2",
        use3dlighting: "0",
        plotFillAlpha: "80"
      }
    },

    // 39. Zoom Scatter
    zoomscatter: {
      chart: {
        drawCustomLegendIcon: "0",
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "7",
        showValues: "0"
      }
    },

    // 40 Scroll Column 2D
    scrollcolumn2d: {
      chart: {
        showLegend: "1",
        showShadow: "0",
        adjustDiv: "1",
        flatScrollBars: "1",
        scrollShowButtons: "1",
        scrollHeight: "15",
        scrollColor: "#F3F3F3"
      }
    },

    // 41 Scroll Line 2D
    scrollline2d: {
      chart: {
        showValues: "0",
        showShadow: "0",
        adjustDiv: "1",
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        flatScrollBars: "1",
        scrollShowButtons: "1",
        scrollHeight: "15",
        scrollColor: "#F3F3F3",
        anchorHoverEffect: "1",
        anchorHoverRadius: "6",
        anchorBorderHoverThickness: "2",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 42 Scroll Area 2D
    scrollarea2d: {
      chart: {
        showValues: "0",
        showCanvasBase: "0",
        canvasBaseDepth: "0",
        showShadow: "0",
        chartTopMargin: "35",
        adjustDiv: "1",
        lineThickness: "2",
        drawAnchors: "0",
        showLegend: "1",
        flatScrollBars: "1",
        scrollShowButtons: "1",
        scrollHeight: "15",
        scrollColor: "#F3F3F3"
      }
    },

    // 43 Scroll Stacked Column 2D
    scrollstackedcolumn2d: {
      chart: {
        showLegend: "1",
        showValues: "0",
        flatScrollBars: "1",
        scrollShowButtons: "1",
        scrollHeight: "15",
        scrollColor: "#F3F3F3"
      }
    },

    // 44 Scroll Combination 2D (Single Y)
    scrollcombi2d: {
      chart: {
        showValues: "0",
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        flatScrollBars: "1",
        scrollShowButtons: "1",
        scrollHeight: "15",
        scrollColor: "#F3F3F3",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "2",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 45 Scroll Combination 2D (Dual Y)
    scrollcombidy2d: {
      chart: {
        showValues: "0",
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        flatScrollBars: "1",
        scrollShowButtons: "1",
        scrollHeight: "15",
        scrollColor: "#F3F3F3",
        anchorHoverEffect: "1",
        anchorHoverRadius: "4",
        anchorBorderHoverThickness: "2",
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
            borderThickness: "0",
            rearExtension: "13"
          }
        ]
      }
    },

    // 47 Real-time bulb
    bulb: {
      chart: {
        is3D: "0",
        placeValuesInside: "1",
        valueFont:
          "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif"
      }
    },

    // 48 Real-time Cylinder
    cylinder: {
      chart: {
        cylRadius: "50",
        cylYScale: "30"
      }
    },

    // 49 Real-time Horizontal LED
    hled: {
      chart: {
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
        minortmnumber: "0",
        majorTMHeight: "8",
        majorTMAlpha: "50",
        gaugeFillMix: "{light-0}"
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
        showValues: "0"
      }
    },

    // 54 Real-time Column
    realtimecolumn: {
      chart: {
        showLegend: "1",
        showValues: "0"
      }
    },

    // 55 Real-time Line
    realtimeline: {
      chart: {
        showValues: "0",
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        anchorHoverEffect: "1",
        anchorHoverRadius: "6",
        anchorBorderHoverThickness: "2",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 56 Real-time Stacked Area
    realtimestackedarea: {
      chart: {
        showLegend: "1",
        showValues: "0",
        showSum: "0",
        plotFillAlpha: "80"
      }
    },

    // 57 Real-time Stacked Column
    realtimestackedcolumn: {
      chart: {
        showLegend: "1",
        showValues: "1",
        showSum: "1"
      }
    },

    // 58 Real-time Line (Dual Y)
    realtimelinedy: {
      chart: {
        lineThickness: "2",
        anchorRadius: "4",
        showLegend: "1",
        anchorHoverEffect: "1",
        anchorHoverRadius: "6",
        anchorBorderHoverThickness: "2",
        anchorBgHoverColor: "#FFFFFF",
        legendIconBorderThickness: "1"
      }
    },

    // 59 Spark Line
    sparkline: {
      chart: {
        plotFillColor: "#7CB5EC",
        anchorRadius: "4",
        highColor: "#8EED7D",
        lowColor: "#F45B5B",
        captionPosition: "top",
        showOpenAnchor: "0",
        showCloseAnchor: "0",
        showOpenValue: "0",
        showCloseValue: "0",
        showHighLowValue: "0",
        periodColor: "#C0C0C0"
      }
    },

    // 60 Spark Column
    sparkcolumn: {
      chart: {
        plotFillColor: "#7CB5EC",
        highColor: "#8EED7D",
        lowColor: "#F45B5B",
        captionPosition: "top",
        periodColor: "#C0C0C0"
      }
    },

    // 61 Spark Win/Loss
    sparkwinloss: {
      chart: {
        winColor: "#7CB5EC",
        lossColor: "#F45B5B",
        captionPosition: "top",
        drawColor: "#E4D354",
        scoreLessColor: "#8085E9",
        periodColor: "#C0C0C0"
      }
    },

    // 62 Horizontal Bullet Graph
    hbullet: {
      chart: {
        plotFillColor: "#434348",
        showTickMarks: "0",
        showTickValues: "1",
        showLimits: "1"
      }
    },

    // 63 Horizontal Bullet Graph
    vbullet: {
      chart: {
        plotFillColor: "#434348",
        showTickMarks: "0",
        showTickValues: "1",
        showLimits: "1"
      }
    },

    // 64 Funnel Chart
    funnel: {
      chart: {
        is2D: "1",
        isSmartLineSlanted: "0",
        smartLineColor: "#434348",
        smartLineThickness: "1",
        smartLabelClearance: "0",
        streamlinedData: "1",
        useSameSlantAngle: "1",
        alignCaptionWithCanvas: "1",
        showPlotBorder: "1",
        plotBorderColor: "#FFFFFF",
        plotBorderThickness: "1.5",
        plotBorderAlpha: "100"
      }
    },

    // 65 Pyramid Chart
    pyramid: {
      chart: {
        is2D: "1",
        isSmartLineSlanted: "0",
        smartLineColor: "#434348",
        smartLineThickness: "1",
        smartLabelClearance: "0",
        streamlinedData: "1",
        useSameSlantAngle: "1",
        alignCaptionWithCanvas: "1",
        use3dlighting: "0",
        showPlotBorder: "1",
        plotBorderColor: "#FFFFFF",
        plotBorderThickness: "1.5",
        plotBorderAlpha: "100"
      }
    },

    // 66 Gantt Chart
    gantt: {
      chart: {
        taskBarFillMix: "{light+0}",
        flatScrollBars: "1",
        gridBorderAlpha: "100",
        gridBorderColor: "#E6E6E6",
        ganttLineColor: "#E6E6E6",
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
          fontcolor: "#434348",
          fontsize: "11",
          bgcolor: "#F4F4F4",
          hoverBandAlpha: "50",
          showGanttPaneHoverBand: "1",
          showHoverBand: "1",
          category: [
            {
              fontcolor: "#434348",
              fontsize: "11",
              bgcolor: "#F4F4F4"
            }
          ]
        }
      ],

      tasks: {
        showBorder: "0",
        showHoverEffect: "0"
      },

      processes: {
        fontcolor: "#434348",
        isanimated: "0",
        bgcolor: "#FFFFFF",
        bgAlpha: "70",
        headerbgcolor: "#F4F4F4",
        headerfontcolor: "#434348",
        showGanttPaneHoverBand: "1",
        showHoverBand: "1"
      },

      text: {
        fontcolor: "#434348",
        bgcolor: "#FFFFFF"
      },

      datatable: {
        fontcolor: "#434348",
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
            color: "#8EED7D"
          }
        ]
      }
    },

    // 67 Logarithmic Column 2D Chart
    logmscolumn2d: {
      chart: {
        showValues: "0",
        drawCrossLine: "1"
      }
    },

    // 68 Logarithmic Line 2D Chart
    logmsline: {
      chart: {
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        drawCrossLine: "1",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
      }
    },

    // 69 Single-Series Spline 2D
    spline: {
      chart: {
        paletteColors: "#7CB5EC",
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBgColor: "#7CB5EC",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        plotToolText: "$label: <b>$dataValue</b>",
        legendIconBorderThickness: "1"
      }
    },

    // 70 Single-Series Spline Area 2D
    splinearea: {
      chart: {
        paletteColors: "#7CB5EC",
        drawAnchors: "0",
        showValues: "0",
        plotFillAlpha: "70",
        plotToolText: "$label: <b>$dataValue</b>"
      }
    },

    // 71 Multi-Series Spline 2D
    msspline: {
      chart: {
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        drawCrossLine: "1",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
      }
    },

    // 72 Multi-Series Spline Area 2D
    mssplinearea: {
      chart: {
        showValues: "0",
        showLegend: "1",
        drawAnchors: "0",
        plotFillAlpha: "70"
      }
    },

    // 73 Error Bar Chart
    errorbar2d: {
      chart: {
        paletteColors:
          "#7CB5EC, #8EED7D, #F7A35C, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1",
        errorBarColor: "#434348",
        errorBarThickness: "1.3",
        showValues: "0"
      }
    },

    // 74 Error Line 2D Chart
    errorline: {
      chart: {
        paletteColors:
          "#7CB5EC, #8EED7D, #F7A35C, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1",
        errorBarColor: "#434348",
        errorBarThickness: "1.3",
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
      }
    },

    // 75 Error Scatter Chart
    errorscatter: {
      chart: {
        paletteColors:
          "#7CB5EC, #8EED7D, #F7A35C, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1",
        errorBarColor: "#434348",
        errorBarThickness: "1.3",
        drawCustomLegendIcon: "0",
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "7",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2"
      }
    },

    // 76 Inverse Y-Axis Area 2D Chart
    inversemsarea: {
      chart: {
        showValues: "0",
        drawCrossLine: "1",
        showLegend: "1",
        plotFillAlpha: "70"
      }
    },

    // 77 Inverse Y-Axis Column 2D Chart
    inversemscolumn2d: {
      chart: {
        showLegend: "1",
        showValues: "0"
      }
    },

    // 78 Inverse Y-Axis Line 2D Chart
    inversemsline: {
      chart: {
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        drawCrossLine: "1",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
      }
    },

    // 79 Drag-able Column 2D Chart
    dragcolumn2d: {
      chart: {
        showValues: "0",
        showLegend: "1"
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
              alpha: "70"
            }
          ]
        }
      ]
    },

    // 80 Drag-able Line 2D Chart
    dragline: {
      chart: {
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
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
              alpha: "70",
              dashed: "1"
            }
          ]
        }
      ]
    },

    // 81 Drag-able Area 2D Chart
    dragarea: {
      chart: {
        showValues: "0",
        showLegend: "1",
        drawAnchors: "0",
        plotFillAlpha: "70"
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
              dashed: "1"
            }
          ]
        }
      ]
    },

    // 82 Treemap Chart
    treemap: {
      chart: {
        parentLabelLineHeight: "13",
        baseFontSize: "11",
        labelFontSize: "11",
        showParent: "1",
        showNavigationBar: "0",
        plotBorderThickness: "0.5",
        plotBorderColor: "#FFFFFF",
        labelGlow: "0",
        labelGlowIntensity: "100",
        btnBackChartTooltext: "Back",
        btnResetChartTooltext: "Home",
        legendScaleLineThickness: "0",
        legendaxisborderalpha: "0",
        legendShadow: "0",
        toolbarButtonScale: "1.50",
        plotToolText: "$label, $dataValue, $sValue"
      },
      data: [
        {
          fillColor: "#F4F4F4",
          data: [
            {
              fillColor: "#F4F4F4"
            }
          ]
        }
      ]
    },

    // 83 Radar Chart
    radar: {
      chart: {
        showLegend: "1",
        plotFillAlpha: "40",
        anchorBgAlpha: "40",
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "6",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2",
        legendIconBorderThickness: "1"
      }
    },

    // 84 Heat Map Chart
    heatmap: {
      chart: {
        baseFontSize: "11",
        labelFontSize: "11",
        showPlotBorder: "1",
        plotBorderAlpha: "100",
        plotBorderThickness: "0.5",
        plotBorderColor: "#FFFFFF",
        tlFontColor: "#FDFDFD",
        tlFont:
          "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
        tlFontSize: "10",
        trFontColor: "#FDFDFD",
        trFont:
          "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
        trFontSize: "10",
        blFontColor: "#FDFDFD",
        blFont:
          "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
        blFontSize: "10",
        brFontColor: "#FDFDFD",
        brFont:
          "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
        brFontSize: "10",
        captionPadding: "20",
        legendScaleLineThickness: "0",
        legendaxisborderalpha: "0",
        legendShadow: "0"
      },
      colorrange: {
        gradient: "1",
        code: "#7CB5EC"
      }
    },

    // 85 Box and Whisker Chart
    boxandwhisker2d: {
      chart: {
        drawCustomLegendIcon: "0",
        showLegend: "1",
        showDetailedLegend: "1",
        showValues: "0",
        showPlotBorder: "1",
        plotBorderColor: "#7CB5EC",
        plotBorderAlpha: "100",
        plotBorderThickness: "1.5",
        upperBoxBorderAlpha: "0",
        lowerBoxBorderAlpha: "0",
        lowerQuartileAlpha: "0",
        upperQuartileAlpha: "0",
        upperWhiskerColor: "#7CB5EC",
        upperWhiskerThickness: "1.5",
        lowerWhiskerColor: "#7CB5EC",
        lowerWhiskerThickness: "1.5",
        medianColor: "#7CB5EC",
        medianThickness: "0.7",
        medianAlpha: "100",
        outliericonshape: "spoke",
        outliericonsides: "9",
        meaniconcolor: "#7CB5EC",
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
        bearFillColor: "#F45B5B",
        bullFillColor: "#8EED7D",
        plotLineThickness: "0.3",
        plotLineAlpha: "100",
        divLineDashed: "0",
        showDetailedLegend: "1",
        showHoverEffect: "1",
        plotHoverEffect: "1",
        showVolumeChart: "0",
        trendLineColor: "#434348",
        trendLineThickness: "1",
        trendValueAlpha: "100",
        rollOverBandAlpha: "100",
        rollOverBandColor: "#E6E6E6"
      },

      categories: [
        {
          verticalLineColor: "#434348",
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
        divLineThickness: "0"
      },
      dataset: [
        {
          color: "#7CB5EC"
        }
      ],
      connectors: [
        {
          connector: [
            {
              color: "#434348",
              strength: "1.5"
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
        showValues: "0",
        plotToolText: "$label: <b>$dataValue</b>"
      }
    },

    // 89 Multi-axis Line Chart
    multiaxisline: {
      chart: {
        showValues: "0",
        showLegend: "1",
        lineThickness: "2",
        connectNullData: "1",
        drawAnchors: "0",
        divLineDashed: "0",
        divLineColor: "#E6E6E6",
        vDivLineColor: "#E6E6E6",
        vDivLineDashed: "0",
        yAxisNameFontSize: "11",
        drawCustomLegendIcon: "0",
        legendIconBorderThickness: "1"
      },

      axis: [
        {
          divLineColor: "#E6E6E6",
          setAdaptiveYMin: "1",
          divLineDashed: "0"
        }
      ]
    },

    // 90 Multi-level Pie Chart
    multilevelpie: {
      chart: {
        useHoverColor: "1",
        hoverFillColor: "#8087E5",
        showHoverEffect: "1",
        plotHoverEffect: "1"
      },
      category: [
        {
          color: "#8087E5",
          category: [
            {
              color: "#7CB5EC",
              category: [
                {
                  color: "#7CB5EC"
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
        drawCustomLegendIcon: "0",
        drawAnchors: "1",
        anchorRadius: "4",
        anchorHoverRadius: "7",
        showValues: "0",
        anchorBorderHoverColor: "#D8D8D8",
        anchorHoverEffect: "1",
        anchorBgHoverAlpha: "95",
        anchorBorderHoverThickness: "2"
      }
    },

    // 92 Waterfall / Cascade Chart
    waterfall2d: {
      chart: {
        showValues: "0",
        paletteColors:
          "#7CB5EC, #434348, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1",
        positiveColor: "#8EED7D",
        negativeColor: "#F7A35C",
        showConnectors: "1",
        connectorDashed: "1",
        connectorThickness: "1.5",
        connectorColor: "#434348"
      }
    },

    // 93 Kagi Chart
    kagi: {
      chart: {
        rallyThickness: "2",
        declineThickness: "2",
        drawAnchors: "0",
        rallyColor: "#8EED7D",
        declineColor: "#F45B5B",
        showValues: "0"
      }
    },

    // 94 Geo Maps
    geo: {
      chart: {
        showLabels: "0",
        legendScaleLineThickness: "0",
        legendaxisborderalpha: "0",
        legendShadow: "0",
        fillColor: "#E6E6E6",
        showEntityHoverEffect: "1",
        entityFillHoverAlpha: "70",
        connectorHoverAlpha: "70",
        markerBorderHoverAlpha: "70",
        showBorder: "1",
        borderColor: "#434348",
        borderThickness: "0.3",
        nullEntityColor: "434348",
        nullEntityAlpha: "30",
        entityFillHoverColor: "#434348"
      },
      colorrange: {
        gradient: "1",
        code: "#7CB5EC"
      }
    },

    // timeseries
    timeseries: {
      // caption styling
      caption: {
        style: {
          text: {
            "font-size": 18,
            "font-family":
              "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
            fill: "#333333",
            "font-weight": 500
          }
        }
      },
      // subcaption styling
      subcaption: {
        style: {
          text: {
            "font-family":
              "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
            "font-size": 12,
            fill: "#666666"
          }
        }
      },
      chart: {
        paletteColors:
          "#7CB5EC, #434348, #8EED7D, #F7A35C, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1",
        multiCanvasTooltip: 1,
        baseFont:
          "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
        style: {
          text: {
            "font-family":
              "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif"
          },
          canvas: {
            stroke: "#E6E6E6",
            "stroke-width": 1
          }
        }
      },
      tooltip: {
        style: {
          container: {
            "background-color": "#F6F6F6",
            opacity: 0.85,
            border: "1px solid rgba(153, 153, 153, 0.9)",
            "border-radius": "3px",
            padding: "8px"
          },
          text: {
            "font-family":
              "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
            color: "#333333"
          },
          header: {
            "font-family":
              "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
            color: "#666666",
            padding: "0px"
          },
          body: {
            padding: "0px",
            "font-size": "12px"
          }
        }
      },
      navigator: {
        scrollbar: {
          style: {
            button: {
              fill: "#E6E6E6",
              stroke: "#CCCCCC",
              "stroke-width": 1
            },
            arrow: {
              fill: "#333333"
            },
            grip: {
              fill: "#333333"
            },
            track: {
              fill: "#F2F2F2"
            },
            scroller: {
              fill: "#CCCCCC"
            }
          }
        },
        window: {
          style: {
            handle: {
              fill: "#F2F2F2",
              stroke: "#999999",
              "stroke-width": 0.3
            },
            mask: {
              opacity: 0.3,
              fill: "#6667C2"
            }
          }
        }
      },
      crossline: {
        style: {
          line: {
            stroke: "#E6E6E6",
            opacity: 0.6,
            "stroke-width": 1
          }
        }
      },
      extensions: {
        standardRangeSelector: {
          style: {
            "button-text": {
              fill: "#666666",
              "font-family":
                "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif"
            },
            "button-text:hover": {
              fill: "#333333",
              "font-family":
                "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif"
            },
            "button-text:active": {
              fill: "#333333",
              "font-family":
                "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
              "font-weight": 600
            },
            "button-background": {
              fill: "#F7F7F7"
            },
            "button-background:hover": {
                fill: "#F7F7F7"
            },
            "button-background:active": {
              fill: "#EBEBF5"
            },
            separator: {
              stroke: "#E6E6E6"
            }
          }
        },
        customRangeSelector: {
          style: {
            "title-text": {
              fill: "#333333",
              "font-weight": "500"
            },
            "title-icon": {
              fill: "#333333"
            },
            label: {
              "font-family":
                "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
              color: "#666666"
            },
            input: {
              "font-family":
                "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
              color: "#333333",
              "background-color": "#FFFFFF",
              border: "1px solid #CCCCCC"
            },
            "button-apply": {
              "font-family":
                "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
              "background-color": "#7CB5EC",
              color: "#333333",
              border: "none",
              "font-weight": 600
            },
            "button-cancel": {
              "font-family":
                "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
              color: "#666666",
              "background-color": "#FFFFFF",
              border: "none",
              "font-weight": 500
            },
            "button-cancel:hover": {
              color: "#333333",
              "font-weight": 600
            },
            "cal-navprev": {
              "font-family": "Lucida Grande",
              "font-weight": 400
            },
            "cal-navnext": {
              "font-family": "Lucida Grande",
              "font-weight": 400
            },
            "cal-header": {
              "font-family": "Lucida Grande",
              "background-color": "#7CB5EC",
              color: "#333333"
            },
            "cal-days": {
              "font-family": "Lucida Grande",
              color: "#333333"
            },
            "cal-date": {
              "font-family": "Lucida Grande",
              "font-size": "11px",
              color: "#333333"
            },
            "cal-disableddate": {
              "font-family": "Lucida Grande",
              "font-size": "11px",
              color: "#999999"
            },
            "cal-selecteddate": {
              "font-family": "Lucida Grande",
              "background-color": "#7CB5EC",
              color: "#333333",
              "font-weight": "bold",
              "font-size": "11px"
            },
            "cal-weekend": {
              "background-color": "#F3F8FD"
            }
          }
        }
      },
      legend: {
        item: {
          style: {
            text: {
              fill: "#333333",
              "font-size": 12,
              "font-family":
                "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
              "font-weight": 600
            }
          }
        }
      },
      xaxis: {
        style: {
          title: {
            "font-size": 12,
            "font-family":
              "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
            fill: "#666666"
          },
          "grid-line": {
            stroke: "#E6E6E6",
            "stroke-width": 1
          },
          "tick-mark-major": {
            stroke: "#CCD6EB",
            "stroke-width": 1
          },
          "tick-mark-minor": {
            stroke: "#CCD6EB",
            "stroke-width": 0.75
          },
          "label-major": {
            color: "#666666"
          },
          "label-minor": {
            color: "#666666"
          },
          "label-context": {
            color: "#333333",
            "font-weight": 600
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
              opacity: 0.9
            }
          }
        },
        line: {
          style: {
            plot: {
              "stroke-width": 2
            },
            anchor: {
              "stroke-width": 1
            }
          }
        },
        area: {
          style: {
            anchor: {
              "stroke-width": 1
            }
          }
        },
        candlestick: {
          style: {
            bear: {
              stroke: "#F45B5B",
              fill: "#F45B5B"
            },
            bull: {
              stroke: "#8EED7D",
              fill: "#8EED7D"
            },
            "bear:hover": {
              opacity: 0.75
            },
            "bear:highlight": {
              opacity: 0.9
            },
            "bull:hover": {
              opacity: 0.75
            },
            "bull:highlight": {
              opacity: 0.9
            }
          }
        },
        ohlc: {
          style: {
            bear: {
              stroke: "#F45B5B",
              fill: "#F45B5B"
            },
            bull: {
              stroke: "#8EED7D",
              fill: "#8EED7D"
            },
            "bear:hover": {
              opacity: 0.75
            },
            "bear:highlight": {
              opacity: 0.9
            },
            "bull:hover": {
              opacity: 0.75
            },
            "bull:highlight": {
              opacity: 0.9
            }
          }
        }
      },
      yaxis: [
        {
          style: {
            title: {
              "font-size": 12,
              "font-family":
                "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif",
              fill: "#666666"
            },
            "tick-mark": {
              stroke: "#E6E6E6",
              "stroke-width": 1
            },
            "grid-line": {
              stroke: "#E6E6E6",
              "stroke-width": 1
            },
            label: {
              color: "#666666"
            }
          }
        }
      ]
    }
  }
};

var index = {
  extension: themeObject,
  name: 'gammelTheme',
  type: 'theme'
};

export default index;
