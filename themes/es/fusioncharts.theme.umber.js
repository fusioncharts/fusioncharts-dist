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

var css = "@font-face {\n  font-family: \"Titillium Web Regular\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Titillium Web Regular\"), local(\"TitilliumWeb-Regular\"),\n    url(https://fonts.gstatic.com/s/titilliumweb/v7/NaPecZTIAOhVxoMyOr9n_E7fdMPmDaZRbrw.woff2)\n      format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\n    U+FEFF, U+FFFD;\n}\n\n@font-face {\n  font-family: \"Titillium Web SemiBold\";\n  font-style: normal;\n  font-weight: 600;\n  src: local(\"Titillium Web SemiBold\"), local(\"TitilliumWeb-SemiBold\"),\n    url(https://fonts.gstatic.com/s/titilliumweb/v7/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzY5abuWI.woff2)\n      format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\n    U+FEFF, U+FFFD;\n}\n\n/* ft calendar customiztion */\n.fc-cal-day-umber {\n  background-color: #fff1e5;\n  color: #33302e;\n  font-family: \"Titillium Web Regular\";\n  border: none;\n}\n\n.fc-cal-date-normal-umber {\n  background-color: #fff1e5;\n  color: #33302e;\n  font-family: \"Titillium Web Regular\";\n  border: none;\n}\n\n.fc-cal-date-normal-umber:hover {\n  background-color: #000000;\n  color: #ffffff;\n  font-family: \"Titillium Web Regular\";\n  border: none;\n}\n\n.fc-cal-date-disabled-umber {\n  background-color: #fff1e5;\n  color: rgba(51, 48, 46, 0.5);\n  font-family: \"Titillium Web Regular\";\n  border: none;\n}\n\n.fc-cal-month-header-umber {\n  background-color: #000000;\n  font-family: \"Titillium Web Regular\";\n}\n\n.fc-cal-weekend-umber {\n  background-color: rgba(0, 0, 0, 0.25);\n}\n\n.fc-cal-container-umber {\n  border: none;\n}\n\n.fc-cal-nav-next-umber,\n.fc-cal-nav-prev-umber {\n  font-family: \"Titillium Web Regular\";\n  font-size: 12px;\n}\n\n.fc-cal-date-selected-umber {\n  background-color: #000000;\n  color: #ffffff;\n  font-family: \"Titillium Web Regular\";\n}\n\n.fc-cal-date-selected-umber:hover {\n  background-color: #000000;\n  color: #ffffff;\n  font-family: \"Titillium Web Regular\";\n}\n";
styleInject(css);

/*
 Umber Theme v0.6
 FusionCharts JavaScript Library

 Copyright FusionCharts, Inc.
 License Information at <http://www.fusioncharts.com/license>
*/
/* jshint ignore:end */
var themeObject = {
  name: "umber",
  theme: {
    base: {
      chart: {
        // chart body and canvas customization
        // border
        showBorder: 0,
        showCanvasBorder: 0,
        // background
        bgColor: "#FFF1E5",
        bgAlpha: 100,
        canvasBgAlpha: 0,
        // other canvas customization's
        showAlternateHGridColor: 0,
        showAlternateVGridColor: 0,

        // text - font and font style customization
        // caption (title) and sub-caption (sub-title) customization
        captionFont: "Titillium Web SemiBold",
        captionFontSize: 16,
        captionFontBold: 0,
        captionFontColor: "#000000",
        subcaptionFont: "Titillium Web Regular",
        subCaptionFontSize: 12,
        subCaptionFontBold: 0,
        subcaptionFontColor: "#66605C",
        captionAlignment: "left",
        captionPadding: 20,
        // axis titles (x and y axis names) customization
        xAxisNameFont: "Titillium Web Regular",
        xAxisNameFontSize: 12,
        xAxisNameFontBold: 0,
        xAxisNameFontColor: "#33302E",
        yAxisNameFont: "Titillium Web Regular",
        yAxisNameFontSize: 12,
        yAxisNameFontBold: 0,
        yAxisNameFontColor: "#33302E",
        sYAxisNameFont: "Titillium Web Regular",
        sYAxisNameFontSize: 12,
        sYAxisNameFontBold: 0,
        sYAxisNameFontColor: "#33302E",
        // base font customization
        baseFont: "Titillium Web Regular",
        baseFontColor: "#606060",
        baseFontSize: 11,
        outCnvBaseFont: "Titillium Web Regular",
        outCnvBaseFontColor: "#606060",
        outCnvBaseFontSize: 11,
        // value customization
        showValues: 0,
        placeValuesInside: 0,
        valueFont: "Titillium Web Regular",
        valueFontSize: 11,
        valueFontColor: "#33302E",
        // legend font customization
        legendItemFont: "Titillium Web Regular",
        legendItemFontSize: 12,
        legendItemFontColor: "#33302E",
        legendItemHiddenColor: "#D5CDBE",
        // label customization
        labelDisplay: "auto",

        // grid lines (div lines customization)
        divLineColor: "#D5CDBE",
        divLinealpha: 100,
        divLineThickness: 0.75,
        vDivLineColor: "#D5CDBE",
        vDivLinealpha: 100,
        vDivLineThickness: 0.75,

        // plot customization
        paletteColors:
          "#0f5499, #B5323E, #0a5e66, #EDB34A, #676668, #ED9CBD, #4CCBB8, #B9C36C, #749FC0, #FC6D6D",
        usePlotGradientColor: 0,
        showPlotBorder: 0,
        showShadow: 0,
        use3DLighting: 0,

        // tooltip and crossline customization
        // tooltip customization
        tooltipPadding: 6,
        tooltipBgColor: "#FFF9F5",
        tooltipColor: "#33302E",
        tooltipBorderRadius: 3,
        tooltipBorderColor: "#D5CDBE",
        tooltipBorderThickness: 0.5,
        tooltipBgAlpha: 90,
        // crossline customization
        crossLineColor: "#D5CDBE",
        crossLineAlpha: 100,
        crossLineThickness: 1,

        // legend customization
        legendBgAlpha: 0,
        legendBorderThickness: 0,
        legendIconScale: 1,
        drawCustomLegendIcon: 1,
        legendShadow: 0,

        // hover effect customization
        showHoverEffect: 1,
        plotHoverEffect: 1,
        anchorHoverEffect: 0,
        plotFillHoverAlpha: 85,
        plotBorderHoverThickness: 0,
        plotBorderHoverAlpha: 0,

        // toolbar customization
        toolbarButtonColor: "#FFF1E5",
        toolbarButtonHoverColor: "#FFF9F5",
        toolbarButtonBorderColor: "#D5CDBE",
        toolbarButtonBorderThickness: 0.5,
        toolbarButtonScale: 1.3,

        // axis customization
        transposeAxis: 1,
        setAdaptiveYMin: 1,
        setAdaptiveXMin: 1
      }
    },

    // column2d chart (1)
    column2d: {
      chart: {
        paletteColors: "#0f5499"
      }
    },

    // column3d chart (2)
    column3d: {
      chart: {
        paletteColors: "#0f5499",
        showCanvasBase: 0
      }
    },

    // line2d chart (3)
    line: {
      chart: {
        paletteColors: "#0f5499",
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2,
        plotHoverEffect: 0
      }
    },

    // area2d chart (4)
    area2d: {
      chart: {
        drawAnchors: 0,
        paletteColors: "#0f5499",
        plotFillAlpha: 85,
        legendIconBgAlpha: 85,
        legendIconBorderAlpha: 0,
        drawCrossLine: 1,
        anchorBgColor: "#FFF1E5",
        anchorBorderThickness: 2,
        plotHoverEffect: 0
      }
    },

    // bar2d chart (5)
    bar2d: {
      chart: {
        paletteColors: "#0f5499"
      }
    },

    // bar3d chart (6)
    bar3d: {
      chart: {
        paletteColors: "#0f5499",
        showCanvasBase: 0
      }
    },

    // pie2d chart (7)
    pie2d: {
      chart: {
        showLegend: "1",
        enableMultiSlicing: 0,
        legendIconSides: 2,
        isSmartLineSlanted: 0,
        smartLineColor: "#D5CDBE",
        smartLineThickness: 1,
        showValues: 1,
        showPercentValues: 1,
        showPercentInToolTip: 0
      }
    },

    // pie3d chart (8)
    pie3d: {
      chart: {
        showLegend: 1,
        enableMultiSlicing: 0,
        legendIconSides: 2,
        pieYScale: 75,
        pieSliceDepth: 10,
        isSmartLineSlanted: 0,
        smartLineColor: "#D5CDBE",
        smartLineThickness: 1,
        showValues: 1,
        showPercentValues: 1,
        showPercentInToolTip: 0
      }
    },

    // doughnut2d chart (9)
    doughnut2d: {
      chart: {
        showLegend: 1,
        enableMultiSlicing: 0,
        legendIconSides: 2,
        isSmartLineSlanted: 0,
        smartLineColor: "#D5CDBE",
        smartLineThickness: 1,
        showValues: 1,
        showPercentValues: 1,
        showPercentInToolTip: 0,
        centerLabelFont: "Titillium Web Regular",
        centerLabelFontSize: 12,
        centerLabelColor: "#33302E",
        // setting default as null
        defaultCenterLabel: null,
        centerLabel: null
      }
    },

    // doughnut3d chart (10)
    doughnut3d: {
      chart: {
        showLegend: 1,
        enableMultiSlicing: 0,
        legendIconSides: 2,
        pieYScale: 75,
        pieSliceDepth: 10,
        isSmartLineSlanted: 0,
        smartLineColor: "#D5CDBE",
        smartLineThickness: 1,
        showValues: 1,
        showPercentValues: 1,
        showPercentInToolTip: 0
      }
    },

    // pareto2d chart (11)
    pareto2d: {
      chart: {
        paletteColors: "#0f5499",
        lineColor: "#B5323E",
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2
      }
    },

    // pareto3d chart (12)
    pareto3d: {
      chart: {
        paletteColors: "#0f5499",
        lineColor: "#B5323E",
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        showCanvasBase: 0
      }
    },

    // multi-series column2d chart (13)
    mscolumn2d: {
      chart: {
        drawCrossLine: 1
      }
    },

    // multi-series column3d chart (14)
    mscolumn3d: {
      chart: {
        showCanvasBase: 0
      }
    },

    // multi-series line2d chart (15)
    msline: {
      chart: {
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        plotHoverEffect: 0
      }
    },

    // multi-series bar2d chart (16)
    msbar2d: {
      chart: {
        drawCrossLine: 1
      }
    },

    // multi-series bar3d chart (17)
    msbar3d: {
      chart: {
        showCanvasBase: 0
      }
    },

    // multi-series area2d chart (18)
    msarea: {
      chart: {
        drawAnchors: 0,
        plotFillAlpha: 50,
        legendIconBgAlpha: 50,
        legendIconBorderAlpha: 0,
        legendIconSides: 2,
        drawCrossLine: 1,
        anchorBgColor: "#FFF1E5",
        anchorBorderThickness: 2,
        plotHoverEffect: 0
      }
    },

    // marimekko chart (19)
    marimekko: {
      chart: {
        showSum: 0,
        valueBgColor: "FFF9F5",
        valueFontColor: "#33302E",
        valueFontSize: 12,
        valueBorderThickness: 0.5,
        valueBorderColor: "#D5CDBE",
        valueBorderRadius: 3,
        showPlotBorder: 1,
        plotborderThickness: 0.5,
        plotBorderColor: "#D5CDBE"
      }
    },

    // zoomline chart (20)
    zoomline: {
      chart: {
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        flatscrollbars: 1,
        scrollHeight: 17,
        scrollColor: "#F2E5D9"
      }
    },

    // zoomline dual y-axis chart (21)
    zoomlinedy: {
      chart: {
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        flatscrollbars: 1,
        scrollHeight: 17,
        scrollColor: "#F2E5D9"
      }
    },

    // stacked column2d chart (22)
    stackedcolumn2d: {
      chart: {
        drawCrossLine: 1
      }
    },

    // stacked column3d chart (23)
    stackedcolumn3d: {
      chart: {
        showCanvasBase: 0
      }
    },

    // stacked bar2d chart (24)
    stackedbar2d: {
      chart: {
        drawCrossLine: 1
      }
    },

    // stacked bar3d chart (25)
    stackedbar3d: {
      chart: {
        showCanvasBase: 0
      }
    },

    // stacked area2d chart (26)
    stackedarea2d: {
      chart: {
        drawAnchors: 0,
        plotFillAlpha: 85,
        legendIconBgAlpha: 85,
        legendIconBorderAlpha: 0,
        legendIconSides: 2,
        drawCrossLine: 1,
        anchorBgColor: "#FFF1E5",
        anchorBorderThickness: 2,
        plotHoverEffect: 0
      }
    },

    // multi-series stacked column2D chart (27)
    msstackedcolumn2d: {
      chart: {
        drawCrossLine: 1
      }
    },

    // multi-series 2D single y-axis combination chart (28)
    mscombi2d: {
      chart: {
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2
      }
    },

    // multi-series 3D single y-axis combination chart (29)
    mscombi3d: {
      chart: {
        showCanvasBase: 0,
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2
      }
    },

    // multi-series column 3D + line - single y-axis chart (30)
    mscolumnline3d: {
      chart: {
        showCanvasBase: 0,
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2
      }
    },

    // stacked column 2D + line single y-axis chart (31)
    stackedcolumn2dline: {
      chart: {
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2
      }
    },

    // stacked column 3D + line single y-axis chart (32)
    stackedcolumn3dline: {
      chart: {
        showCanvasBase: 0,
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2
      }
    },

    // multi-series 2D dual y-axis combination chart (33)
    mscombidy2d: {
      chart: {
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        drawCrossLine: 1
      }
    },

    // multi-series column 3D + line - dual y-axis chart (34)
    mscolumn3dlinedy: {
      chart: {
        showCanvasBase: 0,
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2
      }
    },

    // stacked column 3D + line dual y-axis chart (35)
    stackedcolumn3dlinedy: {
      chart: {
        showCanvasBase: 0,
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2
      }
    },

    // multi-series stacked column 2D + line dual y-axis chart (36)
    msstackedcolumn2dlinedy: {
      chart: {
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        drawCrossLine: 1
      }
    },

    // scatter chart (37)
    scatter: {
      chart: {
        anchorBgColor: "#FFF1E5",
        drawCustomLegendIcon: 0,
        anchorBorderThickness: 2,
        legendIconBorderThickness: 2
      }
    },

    // bubble chart (38)
    bubble: {
      chart: {
        plotFillAlpha: 85,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        quadrantLineThickness: 1.5,
        quadrantLineColor: "#33302E",
        quadrantLineDashed: 1,
        quadrantLineAlpha: 100,
        quadrantLineDashGap: 2,
        quadrantLineDashLen: 2,
        quadrantLabelFont: "Titillium Web Regular",
        quadrantLabelFontSize: 12,
        quadrantLabelFontBold: 0,
        quadrantLabelFontColor: "#33302E",
        plotFillHoverAlpha: 60
      }
    },

    // zoom scatter chart (39)
    zoomscatter: {
      chart: {
        plotFillAlpha: 85,
        anchorRadius: 4,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        quadrantLineThickness: 1.5,
        quadrantLineColor: "#33302E",
        quadrantLineDashed: 1,
        quadrantLineAlpha: 100,
        quadrantLineDashGap: 2,
        quadrantLineDashLen: 2,
        quadrantLabelFont: "Titillium Web Regular",
        quadrantLabelFontSize: 12,
        quadrantLabelFontBold: 0,
        quadrantLabelFontColor: "#33302E",
        plotFillHoverAlpha: 60
      }
    },

    // scroll column2D chart (40)
    scrollcolumn2d: {
      chart: {
        drawCrossLine: 1,
        flatscrollbars: 1,
        scrollHeight: 17,
        scrollColor: "#F2E5D9"
      }
    },

    // scroll line2D chart (41)
    scrollline2d: {
      chart: {
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        flatscrollbars: 1,
        scrollHeight: 17,
        scrollColor: "#F2E5D9",
        plotHoverEffect: 0
      }
    },

    // scroll area2d chart (42)
    scrollarea2d: {
      chart: {
        drawAnchors: 0,
        anchorBgColor: "#FFF1E5",
        plotFillAlpha: 50,
        legendIconBgAlpha: 50,
        legendIconBorderAlpha: 0,
        legendIconSides: 2,
        drawCrossLine: 1,
        flatscrollbars: 1,
        scrollHeight: 17,
        scrollColor: "#F2E5D9",
        plotHoverEffect: 0
      }
    },

    // scroll stacked column2d chart (43)
    scrollstackedcolumn2d: {
      chart: {
        drawCrossLine: 1,
        flatscrollbars: 1,
        scrollHeight: 17,
        scrollColor: "#F2E5D9"
      }
    },

    // scroll combination2D (single y-axis) chart (44)
    scrollcombi2d: {
      chart: {
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        flatscrollbars: 1,
        scrollHeight: 17,
        scrollColor: "#F2E5D9"
      }
    },

    // scroll combination2D (dual y-axis) chart (45)
    scrollcombidy2d: {
      chart: {
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        drawCrossLine: 1,
        flatscrollbars: 1,
        scrollHeight: 17,
        scrollColor: "#F2E5D9"
      }
    },

    // real-time angular chart/gauge (46)
    angulargauge: {
      chart: {
        captionAlignment: "center",
        setAdaptiveMin: 1,
        adjustTM: 1,
        tickvaluedistance: 5,
        placeTicksInside: 0,
        autoAlignTickValues: 1,
        showGaugeBorder: 0,
        minortmnumber: 0,
        majorTMHeight: 10,
        majorTMColor: "D5CDBE",
        gaugeFillMix: "{light-0}",
        pivotbgcolor: "#33302E",
        pivotfillmix: 0,
        showpivotborder: 1,
        pivotBorderColor: "#D5CDBE",
        showValue: 0,
        valueBelowPivot: 1,
        valueFont: "Titillium Web SemiBold",
        valueFontSize: 12,
        valueFontColor: "#33302E"
      },
      dials: {
        dial: [
          {
            bgColor: "#33302E",
            borderThickness: 0
          }
        ]
      }
    },

    // real-time bulb chart/gauge (47)
    bulb: {
      chart: {
        captionAlignment: "center",
        is3D: 0,
        placeValuesInside: 1,
        valueFont: "Titillium Web SemiBold",
        valueFontSize: 12,
        valueFontColor: "#33302E"
      }
    },

    // real-time cylinder chart/gauge (48)
    cylinder: {
      chart: {
        cylRadius: 50,
        cylYScale: 30,
        cylFillColor: "#0f5499",
        cylGlassColor: "#FFF9F5",
        majorTMHeight: 10,
        majorTMColor: "#D5CDBE",
        minortmnumber: 0,
        showValue: 1,
        valueFont: "Titillium Web SemiBold",
        valueFontSize: 12,
        valueFontColor: "#33302E",
        baseFontColor: "#33302E"
      }
    },

    // real-time horizontal led chart/gauge (49)
    hled: {
      chart: {
        captionAlignment: "center",
        showGaugeBorder: 0,
        setAdaptiveMin: 1,
        adjustTM: 1,
        placeTicksInside: 0,
        autoAlignTickValues: 1,
        minortmnumber: 0,
        majorTMHeight: 10,
        majorTMColor: "#D5CDBE",
        ledGap: 0,
        valueFont: "Titillium Web SemiBold",
        valueFontSize: 12,
        valueFontColor: "#33302E",
        baseFontColor: "#33302E"
      }
    },

    // real-time horizontal linear chart/gauge (50)
    hlineargauge: {
      chart: {
        captionAlignment: "center",
        showGaugeBorder: 0,
        setAdaptiveMin: 1,
        adjustTM: 1,
        placeTicksInside: 0,
        autoAlignTickValues: 1,
        minortmnumber: 0,
        majorTMHeight: 10,
        majorTMColor: "#D5CDBE",
        gaugeFillMix: "{light-0}",
        valueFont: "Titillium Web SemiBold",
        valueFontSize: 12,
        valueFontColor: "#33302E",
        baseFontColor: "#33302E"
      }
    },

    // real-time thermometer chart/gauge (51)
    thermometer: {
      chart: {
        manageResize: 1,
        autoScale: 1,
        showGaugeBorder: 1,
        gaugeBorderColor: "#D5CDBE",
        gaugeBorderThickness: 2,
        gaugeBorderAlpha: 100,
        thmFillColor: "#0f5499",
        thmGlassColor: "#FFF9F5",
        placeTicksInside: 0,
        autoAlignTickValues: 1,
        minortmnumber: 0,
        majorTMHeight: 10,
        majorTMColor: "#D5CDBE",
        valueFont: "Titillium Web SemiBold",
        valueFontSize: 12,
        valueFontColor: "#33302E",
        baseFontColor: "#33302E"
      }
    },

    // real-time vertical led gauge (52)
    vled: {
      chart: {
        captionAlignment: "center",
        showGaugeBorder: 0,
        setAdaptiveMin: 1,
        adjustTM: 1,
        placeTicksInside: 0,
        autoAlignTickValues: 1,
        minortmnumber: 0,
        majorTMHeight: 10,
        majorTMColor: "#D5CDBE",
        ledGap: 0,
        valueFont: "Titillium Web SemiBold",
        valueFontSize: 12,
        valueFontColor: "#33302E",
        baseFontColor: "#33302E"
      }
    },

    // real-time area chart (53)
    realtimearea: {
      chart: {
        drawAnchors: 0,
        anchorBgColor: "#FFF1E5",
        plotFillAlpha: 50,
        legendIconBgAlpha: 50,
        legendIconBorderAlpha: 0,
        legendIconSides: 2,
        realTimeValueFont: "Titillium Web SemiBold",
        realTimeValueFontSize: 12,
        realTimeValueFontColor: "#33302E"
      }
    },

    // real-time column chart (54)
    realtimecolumn: {
      chart: {
        realTimeValueFont: "Titillium Web SemiBold",
        realTimeValueFontSize: 12,
        realTimeValueFontColor: "#33302E"
      }
    },

    // real-time line chart (55)
    realtimeline: {
      chart: {
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        realTimeValueFont: "Titillium Web SemiBold",
        realTimeValueFontSize: 12,
        realTimeValueFontColor: "#33302E"
      }
    },

    // real-time stacked area chart (56)
    realtimestackedarea: {
      chart: {
        drawAnchors: 0,
        anchorBgColor: "#FFF1E5",
        plotFillAlpha: 85,
        legendIconBgAlpha: 85,
        legendIconBorderAlpha: 0,
        legendIconSides: 2,
        realTimeValueFont: "Titillium Web SemiBold",
        realTimeValueFontSize: 12,
        realTimeValueFontColor: "#33302E"
      }
    },

    // real-time stacked column chart (57)
    realtimestackedcolumn: {
      chart: {
        realTimeValueFont: "Titillium Web SemiBold",
        realTimeValueFontSize: 12,
        realTimeValueFontColor: "#33302E"
      }
    },

    // real-time line (dual y-axis) (58)
    realtimelinedy: {
      chart: {
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        realTimeValueFont: "Titillium Web SemiBold",
        realTimeValueFontSize: 12,
        realTimeValueFontColor: "#33302E"
      }
    },

    // spark line chart (59)
    sparkline: {
      chart: {
        captionPosition: "middle",
        plotFillColor: "#0F5499",
        lineAlpha: 85,
        plotFillHoverColor: "#D5CDBE",
        lineThickness: 2,
        anchorRadius: 4,
        anchorBorderThickness: 2,
        highColor: "#0A5E66",
        lowColor: "#B5323E",
        showOpenAnchor: 0,
        showCloseAnchor: 0,
        showOpenValue: 0,
        showCloseValue: 0,
        showHighLowValue: 0,
        periodColor: "#D5CDBE",
        chartLeftMargin: 5,
        chartRightMargin: 5
      }
    },

    // spark column chart (60)
    sparkcolumn: {
      chart: {
        captionPosition: "middle",
        plotFillColor: "#0F5499",
        highColor: "#0A5E66",
        lowColor: "#B5323E",
        periodColor: "#D5CDBE",
        chartLeftMargin: 5
      }
    },

    // spark win/loss chart (61)
    sparkwinloss: {
      chart: {
        captionPosition: "middle",
        winColor: "#0A5E66",
        lossColor: "#B5323E",
        drawColor: "#EDB34A",
        scoreLessColor: "#0F5499",
        periodColor: "#D5CDBE",
        chartLeftMargin: 5
      }
    },

    // horizontal bullet chart/graph (62)
    hbullet: {
      chart: {
        plotFillColor: "#0F5499",
        colorRangeFillMix: "{light-0}",
        targetColor: "#000000",
        targetThickness: "2",
        targetCapStyle: "round",
        showTickMarks: 0,
        showTickValues: 1,
        showLimits: 1,
        valueFont: "Titillium Web SemiBold",
        valueFontSize: 12,
        valueFontColor: "#33302E",
        baseFontColor: "#33302E"
      }
    },

    // vertical bullet chart/graph (63)
    vbullet: {
      chart: {
        plotFillColor: "#0F5499",
        colorRangeFillMix: "{light-0}",
        targetColor: "#000000",
        targetThickness: "2",
        targetCapStyle: "round",
        showTickMarks: 0,
        showTickValues: 1,
        showLimits: 1,
        valueFont: "Titillium Web SemiBold",
        valueFontSize: 12,
        valueFontColor: "#33302E",
        baseFontColor: "#33302E"
      }
    },

    // funnel chart (64)
    funnel: {
      chart: {
        is2D: 1,
        isSmartLineSlanted: 0,
        smartLineColor: "#D5CDBE",
        smartLineThickness: 1,
        streamlinedData: 1,
        useSameSlantAngle: 1,
        showLegend: 1,
        legendPosition: "right",
        showLabels: 0
      }
    },

    // pyramid chart (65)
    pyramid: {
      chart: {
        is2D: 1,
        isSmartLineSlanted: 0,
        smartLineColor: "#D5CDBE",
        smartLineThickness: 1,
        streamlinedData: 1,
        useSameSlantAngle: 1,
        showLegend: 1,
        legendPosition: "right",
        showLabels: 0,
        plotBorderThickness: 0
      }
    },

    // gantt chart (66)
    gantt: {
      chart: {
        taskBarFillMix: "{light+0}",
        scrollHeight: 17,
        scrollColor: "#F2E5D9",
        gridBorderAlpha: 100,
        gridBorderColor: "#D5CDBE",
        ganttLineColor: "#D5CDBE",
        ganttLineAlpha: 100,
        taskBarRoundRadius: 3,
        flatScrollBars: 1,
        showHoverEffect: 1,
        plotHoverEffect: 1,
        plotFillHoverAlpha: 85,
        showCategoryHoverBand: 1,
        categoryHoverBandAlpha: 85,
        showGanttPaneVerticalHoverBand: 1,
        showProcessHoverBand: 1,
        processHoverBandAlpha: 85,
        showGanttPaneHorizontalHoverBand: 1,
        showConnectorHoverEffect: 1,
        connectorHoverAlpha: 85,
        showTaskHoverEffect: 1,
        taskHoverFillAlpha: 85,
        slackHoverFillAlpha: 85,
        scrollShowButtons: 1,
        showCanvasBorder: 1,
        canvasBorderColor: "#D5CDBE",
        canvasBorderThickness: 0.75
      },
      categories: [
        {
          fontcolor: "#33302E",
          fontsize: 12,
          bgcolor: "#FFF9F5",
          hoverBandAlpha: 85,
          showGanttPaneHoverBand: 1,
          showHoverBand: 1,
          category: [
            {
              fontcolor: "#33302E",
              fontsize: 11,
              bgAlpha: 85,
              bgcolor: "#FFF9F5"
            }
          ]
        }
      ],
      tasks: {
        showBorder: 0,
        showHoverEffect: 0,
        task: [
          {
            color: "#0f5499"
          }
        ]
      },
      processes: {
        fontcolor: "#33302E",
        isanimated: 0,
        bgcolor: "#FFF9F5",
        bgAlpha: 85,
        headerbgcolor: "#FFF9F5",
        headerfontcolor: "#33302E",
        showGanttPaneHoverBand: 1,
        showHoverBand: 1
      },
      text: {
        fontcolor: "#33302E",
        bgcolor: "#FFF9F5"
      },
      datatable: {
        fontcolor: "#33302E",
        bgcolor: "#FFF9F5",
        datacolumn: [
          {
            bgcolor: "#FFF9F5"
          }
        ]
      },
      connectors: [
        {
          hoverThickness: 1
        }
      ],
      milestones: {
        milestone: [
          {
            color: "#33302E"
          }
        ]
      }
    },

    // logarithmic column2D chart (67)
    logmscolumn2d: {
      chart: {
        drawCrossLine: 1
      }
    },

    // logarithmic line2D chart (68)
    logmsline: {
      chart: {
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2
      }
    },

    // single-series spline2D chart (69)
    spline: {
      chart: {
        paletteColors: "#0f5499",
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2
      }
    },

    // single-series spline area2D chart (70)
    splinearea: {
      chart: {
        drawAnchors: 0,
        paletteColors: "#0f5499",
        plotFillAlpha: 85,
        legendIconBgAlpha: 85,
        legendIconBorderAlpha: 0,
        drawCrossLine: 1,
        anchorBgColor: "#FFF1E5",
        anchorBorderThickness: 2,
        plotHoverEffect: 0
      }
    },

    // multi-series spline2D chart (71)
    msspline: {
      chart: {
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2
      }
    },

    // multi-series spline area2D chart (72)
    mssplinearea: {
      chart: {
        drawAnchors: 0,
        plotFillAlpha: 50,
        legendIconBgAlpha: 50,
        legendIconBorderAlpha: 0,
        legendIconSides: 2,
        drawCrossLine: 1,
        anchorBgColor: "#FFF1E5",
        anchorBorderThickness: 2,
        plotHoverEffect: 0
      }
    },

    // error bar chart (73)
    errorbar2d: {
      chart: {
        errorBarColor: "#33302E",
        errorBarThickness: 1
      }
    },

    // error line2D chart (74)
    errorline: {
      chart: {
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        errorBarColor: "#33302E",
        errorBarThickness: 1
      }
    },

    // error scatter chart (75)
    errorscatter: {
      chart: {
        anchorBgColor: "#FFF1E5",
        drawCustomLegendIcon: 0,
        anchorBorderThickness: 2,
        legendIconBorderThickness: 2,
        errorBarColor: "#33302E",
        errorBarThickness: 1
      }
    },

    // inverse y-axis area2D chart (76)
    inversemsarea: {
      chart: {
        drawAnchors: 0,
        anchorBgColor: "#FFF1E5",
        plotFillAlpha: 50,
        legendIconBgAlpha: 50,
        legendIconBorderAlpha: 0,
        legendIconSides: 2,
        drawCrossLine: 1,
        anchorBorderThickness: 2,
        plotHoverEffect: 0
      }
    },

    // inverse y-axis column2D chart (77)
    inversemscolumn2d: {
      chart: {
        drawCrossLine: 1
      }
    },

    // inverse y-axis line2D chart (78)
    inversemsline: {
      chart: {
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        plotHoverEffect: 0
      }
    },

    // drag-able column2D chart (79)
    dragcolumn2d: {
      chart: {},
      categories: [
        {
          category: [
            {
              fontItalic: 1
            }
          ]
        }
      ],
      dataset: [
        {
          data: [
            {
              allowDrag: 1,
              alpha: 85
            }
          ]
        }
      ]
    },

    // drag-able line2D chart (80)
    dragline: {
      chart: {
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        plotHoverEffect: 0
      },
      categories: [
        {
          category: [
            {
              fontItalic: 1
            }
          ]
        }
      ],
      dataset: [
        {
          data: [
            {
              allowDrag: 1,
              alpha: 85,
              dashed: 1
            }
          ]
        }
      ]
    },

    // drag-able area2D chart (81)
    dragarea: {
      chart: {
        drawAnchors: 0,
        anchorBgColor: "#FFF1E5",
        plotFillAlpha: 50,
        legendIconBgAlpha: 50,
        legendIconBorderAlpha: 0,
        legendIconSides: 2,
        anchorBorderThickness: 2,
        plotHoverEffect: 0
      },
      categories: [
        {
          category: [
            {
              fontItalic: 1
            }
          ]
        }
      ],
      dataset: [
        {
          data: [
            {
              drawAnchors: 1,
              allowDrag: 1,
              dashed: 1
            }
          ]
        }
      ]
    },

    // treemap chart (82)
    treemap: {
      chart: {
        parentLabelLineHeight: 12.5,
        baseFontSize: 11,
        labelFontSize: 11,
        showParent: 1,
        showNavigationBar: 0,
        plotBorderThickness: 0.5,
        plotBorderColor: "#D5CDBE",
        labelGlow: 0,
        btnBackChartTooltext: "Back",
        btnResetChartTooltext: "Home",
        legendScaleLineThickness: 0,
        legendaxisborderalpha: 0,
        legendPointerColor: "#FFF9F5",
        legendpointerbordercolor: "#606060",
        legendPointerAlpha: 85,
        defaultParentBgColor: "#FFF9F5",
        fontcolor: "#33302E"
      },
      data: [
        {
          fillcolor: "#FFF9F5"
        }
      ]
    },

    // radar chart (83)
    radar: {
      chart: {
        drawAnchors: 1,
        anchorBgColor: "#FFF1E5",
        plotFillAlpha: 50,
        legendIconBgAlpha: 50,
        legendIconBorderAlpha: 0,
        legendIconSides: 2,
        anchorBorderThickness: 2,
        radarFillColor: "#FFF9F5",
        radarBorderThickness: 0
      }
    },

    // heat map chart (84)
    heatmap: {
      chart: {
        showPlotBorder: 1,
        plotBorderThickness: 0.5,
        plotBorderColor: "#D5CDBE",
        tlFontColor: "#606060",
        tlFontSize: 10,
        trFontColor: "#606060",
        trFontSize: 10,
        blFontColor: "#606060",
        blFontSize: 10,
        brFontColor: "#606060",
        brFontSize: 10,
        legendScaleLineThickness: 0,
        legendaxisborderalpha: 0,
        legendPointerColor: "#FFF9F5",
        legendpointerbordercolor: "#606060",
        legendPointerAlpha: 85,
        showCanvasBorder: 1,
        canvasBorderThickness: 0.5,
        canvasBorderColor: "#D5CDBE"
      },
      colorrange: {
        gradient: 1,
        code: "#0f5499"
      }
    },

    // box and whisker chart (85)
    boxandwhisker2d: {
      chart: {
        drawCustomLegendIcon: 0,
        showLegend: 1,
        showDetailedLegend: 1,
        legendIconSides: 2,
        showPlotBorder: 0,
        upperBoxBorderAlpha: 0,
        lowerBoxBorderAlpha: 0,
        lowerQuartileAlpha: 0,
        upperQuartileAlpha: 0,
        upperWhiskerThickness: 1,
        upperWhiskerColor: "#33302E",
        lowerWhiskerColor: "#33302E",
        lowerWhiskerThickness: 1,
        medianColor: "#000000",
        medianThickness: 1,
        outliericonshape: "circle",
        outliericonsides: 4,
        meaniconcolor: "#000000",
        meanIconShape: "circle",
        meaniconsides: 2,
        meaniconradius: 3
      }
    },

    // candle-stick chart (86)
    candlestick: {
      chart: {
        showVPlotBorder: 1,
        vplotborderThickness: 0.5,
        plotborderThickness: 0.5,
        bearFillColor: "#B5323E",
        bearBorderColor: "#B5323E",
        bullFillColor: "#FFF9F5",
        bullBorderColor: "#606060",
        plotLineThickness: 0.75,
        plotLineAlpha: 100,
        divLineDashed: 0,
        showDetailedLegend: 1,
        legendIconSides: 4,
        showHoverEffect: 1,
        plotHoverEffect: 1,
        trendLineColor: "#000000",
        trendLineThickness: 1,
        trendValueAlpha: 100,
        rollOverBandAlpha: 100,
        rollOverBandColor: "#D5CDBE"
      },
      categories: [
        {
          verticalLineColor: "#D5CDBE",
          verticalLineThickness: 1
        }
      ]
    },

    // drag node chart (87)
    dragnode: {
      chart: {
        showDetailedLegend: 1,
        legendIconSides: 2,
        divLineAlpha: 0,
        numDivLines: 0,
        valueFontColor: "#FFFFFF"
      },
      dataset: [
        {
          color: "#0F5499"
        }
      ],
      connectors: [
        {
          connector: [
            {
              color: "#33302E"
            }
          ]
        }
      ]
    },

    // step line chart (88)
    msstepLine: {
      chart: {
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        plotHoverEffect: 0
      }
    },

    // multi-axis line chart (89)
    multiaxisline: {
      chart: {
        drawAnchors: 0,
        anchorBgColor: "#FFF1E5",
        drawCrossLine: 1,
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        allowSelection: 0,
        plotHoverEffect: 0
      },
      axis: [
        {
          divLineColor: "#D5CDBE",
          divLineThickness: 0.75,
          setAdaptiveYMin: "1"
        }
      ]
    },

    // multi-level pie chart (90)
    multilevelpie: {
      chart: {
        useHoverColor: 0, // seems to be an issue plot hover alpha is not working
        valueFontColor: "#FFFFFF",
        showPlotBorder: 1,
        plotborderThickness: 0.5,
        plotBorderColor: "#D5CDBE"
      },
      category: [
        {
          color: "#33302E",
          category: [
            {
              color: "#0F5499",
              alpha: 85,
              category: [
                {
                  color: "#0F5499",
                  alpha: 70,
                  category: [
                    {
                      color: "#0F5499",
                      alpha: 55
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    // select-scatter chart (91)
    selectscatter: {
      chart: {
        anchorBgColor: "#FFF1E5",
        drawCustomLegendIcon: 0,
        anchorBorderThickness: 2,
        legendIconBorderThickness: 2
      }
    },

    // waterfall/cascade chart (92)
    waterfall2d: {
      chart: {
        paletteColors: "#0F5499",
        positiveColor: "#0A5E66",
        negativeColor: "#B5323E",
        showConnectors: 1,
        connectorColor: "#33302E",
        connectorThickness: 1
      }
    },

    // kagi chart (93)
    kagi: {
      chart: {
        rallyThickness: 2,
        declineThickness: 2,
        legendIconSides: 2,
        drawAnchors: 0,
        rallyColor: "#0A5E66",
        declineColor: "#B5323E"
      }
    },

    // Maps - Geo (94)
    geo: {
      chart: {
        showLabels: 0,
        legendScaleLineThickness: 0,
        legendaxisborderalpha: 0,
        legendPointerColor: "#FFF9F5",
        legendpointerbordercolor: "#606060",
        legendPointerAlpha: 85,
        fillColor: "#0f5499",
        showEntityHoverEffect: 1,
        connectorHoverAlpha: 85,
        markerBorderHoverAlpha: 85,
        showBorder: 1,
        borderColor: "#D5CDBE",
        borderThickness: 0.5,
        nullEntityColor: "FFF9F5",
        entityFillHoverColor: "#606060",
        entityFillHoverAlpha: 85
      },
      colorrange: {
        gradient: 1,
        code: "#0f5499"
      }
    },

    // Overlapped Bar2D Chart (95)
    overlappedbar2d: {
      chart: {
        drawCrossLine: 1
      }
    },

    // Overlapped Column2d Chart (96)
    overlappedcolumn2d: {
      chart: {
        drawCrossLine: 1
      }
    },

    // Scroll Bar2D Chart (97)
    scrollbar2d: {
      chart: {
        drawCrossLine: 1,
        flatscrollbars: 1,
        scrollWidth: 17,
        scrollColor: "#F2E5D9"
      }
    },

    // Scroll Stacked Bar2D Chart (98)
    scrollstackedbar2d: {
      chart: {
        drawCrossLine: 1,
        flatscrollbars: 1,
        scrollWidth: 17,
        scrollColor: "#F2E5D9"
      }
    },

    // Scroll Multi-series Stacked Column2D Chart (99)
    scrollmsstackedcolumn2d: {
      chart: {
        drawCrossLine: 1,
        flatscrollbars: 1,
        scrollHeight: 17,
        scrollColor: "#F2E5D9"
      }
    },

    // Scroll Multi-series Stacked Column2D + Line Dual Y-Axis (100)
    scrollmsstackedcolumn2dlinedy: {
      chart: {
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        drawCrossLine: 1,
        flatscrollbars: 1,
        scrollHeight: 17,
        scrollColor: "#F2E5D9"
      }
    },

    // Stacked Column2D + Line Dual Y-Axis Chart (101)
    stackedcolumn2dlinedy: {
      chart: {
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        drawCrossLine: 1
      }
    },

    // Stacked Area2D + Line Dual Y-Axis Chart (102)
    stackedarea2dlinedy: {
      chart: {
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2,
        drawCrossLine: 1,
        drawAnchors: 1,
        plotFillAlpha: 85,
        legendIconBgAlpha: 85
      }
    },

    // Multi-series 3D Single Y Combination Chart (103)
    mscombidy3d: {
      chart: {
        showCanvasBase: 0,
        anchorBgColor: "#FFF1E5",
        lineThickness: 2,
        anchorBorderThickness: 2,
        legendIconSides: 2,
        legendIconBorderThickness: 2
      }
    },

    // Sankey Diagram (104)
    sankey: {
      chart: {
        nodeLabelFontColor: "#606060",
        nodeLabelFontSize: 11,
        nodeLabelPosition: "end",
        nodeAlpha: 80,
        linkAlpha: 40,
        nodeHoverAlpha: 100,
        linkHoverAlpha: 75,
        enableDrag: 0,
        plothighlighteffect: "fadeout",
        linkColor: "source"
      }
    },

    // Sunburst Chart (105)
    sunburst: {
      chart: {
        valueFontColor: "#FFFFFF",
        showPlotBorder: 1,
        plotborderThickness: 0.5,
        plotBorderColor: "#D5CDBE",
        unfocussedAlpha: 40,
        hoverFillAlpha: 100
      }
    },

    // Chord Diagram (106)
    chord: {
      chart: {
        drawCustomLegendIcon: 0,
        legendPosition: "right",
        nodeThickness: 10,
        nodeLabelColor: "#606060",
        nodeLabelFontSize: 11,
        nodeLabelPosition: "outside",
        nodeHoverAlpha: 100,
        nodeLinkPadding: 0,
        nodeSpacing: 3,
        nodeBorderThickness: 0,
        nodeAlpha: 80,
        linkAlpha: 40,
        linkBorderAlpha: 40,
        linkHoverAlpha: 75
      }
    },

    // timeseries
    timeseries: {
      chart: {
        baseFont: "Titillium Web Regular",
        style: {
          text: {
            "font-family": "Titillium Web Regular"
          },
          background: {
            fill: "#FFF1E5"
          },
          canvas: {
            fill: "#FFF1E5",
            stroke: "#D5CDBE",
            "stroke-width": 0.75
          }
        }
      },
      tooltip: {
        style: {
          container: {
            "background-color": "#FFF9F5",
            opacity: 0.9,
            border: "0.5px solid #D5CDBE",
            "border-radius": "3px",
            padding: "6px"
          },
          text: {
            "font-size": "11px",
            color: "#606060"
          },
          header: {
            "font-family": "Titillium Web SemiBold",
            "font-size": "12px",
            color: "#33302E",
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
              fill: "#D5CDBE"
            },
            track: {
              fill: "#F2E5D9"
            },
            scroller: {
              fill: "#D5CDBE"
            }
          }
        },
        window: {
          style: {
            handle: {
              fill: "#D5CDBE"
            },
            mask: {
              opacity: 0.5,
              stroke: "#D5CDBE",
              "stroke-width": 0.75
            }
          }
        }
      },
      crossline: {
        style: {
          line: {
            stroke: "#D5CDBE",
            "stroke-width": 1
          }
        }
      },
      caption: {
        style: {
          text: {
            "font-size": 16,
            "font-family": "Titillium Web SemiBold",
            fill: "#000000"
          }
        }
      },
      subcaption: {
        style: {
          text: {
            "font-size": 12,
            "font-family": "Titillium Web Regular",
            fill: "#66605C"
          }
        }
      },
      plotconfig: {
        column: {
          style: {
            "plot:hover": {
              opacity: 0.85
            },
            "plot:highlight": {
              opacity: 0.85
            }
          }
        },
        line: {
          style: {
            plot: {
              "stroke-width": 2
            }
          }
        },
        candlestick: {
          style: {
            bear: {
              stroke: "#B5323E",
              fill: "#B5323E"
            },
            "bear:hover": {
              opacity: 0.85
            },
            "bear:highlight": {
              opacity: 0.85
            },
            bull: {
              stroke: "#606060",
              fill: "#FFF9F5"
            },
            "bull:hover": {
              opacity: 0.85
            },
            "bull:highlight": {
              opacity: 0.85
            }
          }
        },
        ohlc: {
          style: {
            bear: {
              stroke: "#B5323E",
              fill: "#B5323E"
            },
            "bear:hover": {
              opacity: 0.85
            },
            "bear:highlight": {
              opacity: 0.85
            },
            bull: {
              stroke: "#606060",
              fill: "#FFF9F5"
            },
            "bull:hover": {
              opacity: 0.85
            },
            "bull:highlight": {
              opacity: 0.85
            }
          }
        }
      },
      yaxis: [
        {
          referenceline: [
            {
              style: {
                marker: {
                  fill: "#33302E",
                  stroke: "#33302E",
                  "stroke-width": 1.5
                }
              }
            }
          ],
          style: {
            title: {
              "font-size": 12,
              fill: "#33302E"
            },
            "tick-mark": {
              stroke: "#D5CDBE",
              "stroke-width": 0.75
            },
            "grid-line": {
              stroke: "#D5CDBE",
              "stroke-width": 0.75
            },
            label: {
              color: "#606060"
            }
          }
        }
      ],
      xaxis: {
        timemarker: [
          {
            style: {
              marker: {
                fill: "#262932",
                stroke: "#a8aaad",
                "stroke-width": 1
              },
              "marker-notch": {
                fill: "#262932",
                stroke: "#262932"
              },
              "marker:hover": {
                fill: "#101115",
                stroke: "#666666",
                "stroke-width": 1
              },
              "marker-notch:hover": {
                fill: "#101115",
                stroke: "#101115"
              },
              "marker-line": {
                stroke: "#262932"
              },
              "marker-line:hover": {
                stroke: "#101115"
              },
              text: {
                fill: "#a8aaad"
              },
              "text:hover": {
                fill: "#FFFFFF"
              }
            }
          }
        ],
        style: {
          title: {
            "font-size": 12,
            fill: "#33302E"
          },
          "tick-mark-major": {
            stroke: "#D5CDBE",
            "stroke-width": 0.75
          },
          "tick-mark-minor": {
            stroke: "#D5CDBE",
            "stroke-width": 0.5
          },
          "label-major": {
            color: "#606060"
          },
          "label-minor": {
            color: "#606060"
          },
          "label-context": {
            color: "#000000"
          },
          "grid-line": {
            stroke: "#D5CDBE",
            "stroke-width": 0.75
          }
        }
      },
      legend: {
        style: {
          text: {
            fill: "#33302E",
            "font-size": 12
          }
        }
      },
      extensions: {
        standardRangeSelector: {
          style: {
            "button-text": {
              fill: "#66605C",
              "font-family": "Titillium Web Regular"
            },
            "button-text:hover": {
              fill: "#33302E",
              "font-family": "Titillium Web SemiBold"
            },
            "button-text:active": {
              fill: "#33302E",
              "font-family": "Titillium Web SemiBold"
            },
            separator: {
              stroke: "#D5CDBE",
              "stroke-width": 0.75
            }
          }
        },
        customRangeSelector: {
          style: {
            "title-text": {
              fill: "#33302E",
              "font-family": "Titillium Web SemiBold"
            },
            "title-icon": {
              fill: "#33302E",
              "font-family": "Titillium Web SemiBold"
            },
            container: {
              "background-color": "#FFF1E5"
            },
            label: {
              color: "#33302E",
              "font-family": "Titillium Web SemiBold"
            },
            input: {
              "background-color": "#FFF9F5",
              border: "0.5px solid #D5CDBE",
              "border-radius": "3px",
              color: "#33302E",
              "font-family": "Titillium Web Regular"
            },
            select: {
              "background-color": "#FFF9F5",
              border: "0.5px solid #D5CDBE",
              "border-radius": "3px",
              color: "#33302E"
            },
            "button-apply": {
              color: "#FFFFFF",
              "background-color": "#33302E",
              border: "none"
            },
            "button-cancel": {
              color: "#33302E",
              "background-color": "#FFF1E5",
              border: "none"
            },
            "button-apply:hover": {
              "font-family": "Titillium Web SemiBold"
            },
            "button-cancel:hover": {
              "font-family": "Titillium Web SemiBold"
            },
            "cal-header": {
              "background-color": "#000000",
              "font-family": "Titillium Web Regular"
            },
            "cal-navprev": {
              "font-family": "Titillium Web Regular",
              "font-size": "12px"
            },
            "cal-navnext": {
              "font-family": "Titillium Web Regular",
              "font-size": "12px"
            },
            "cal-weekend": {
              "background-color": "#00000040"
            },
            "cal-days": {
              "background-color": "#fff1e5",
              color: "#33302e",
              "font-family": "Titillium Web Regular",
              border: "none"
            },
            "cal-date": {
              "background-color": "#fff1e5",
              color: "#33302e",
              "font-family": "Titillium Web Regular",
              border: "none"
            },
            "cal-date:hover": {
              "background-color": "#000000",
              color: "#ffffff",
              "font-family": "Titillium Web Regular",
              border: "none"
            },
            "cal-disableddate": {
              "background-color": "#fff1e5",
              color: "#33302e80",
              "font-family": "Titillium Web Regular",
              border: "none"
            },
            "cal-disableddate:hover": {
              "background-color": "#fff1e5",
              color: "#33302e80",
              "font-family": "Titillium Web Regular",
              border: "none"
            },
            "cal-selecteddate": {
              "background-color": "#000000",
              color: "#ffffff",
              "font-family": "Titillium Web Regular"
            }
          }
        }
      }
    }
  }
};

var index = {
  extension: themeObject,
  name: "umberTheme",
  type: "theme"
};

export default index;
