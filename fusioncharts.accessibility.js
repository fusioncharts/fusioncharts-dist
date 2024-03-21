!function(e){"object"==typeof module&&"undefined"!=typeof module.exports?module.exports=e:e()}((function(){(window.webpackJsonpFusionCharts=window.webpackJsonpFusionCharts||[]).push([[14],{1612:function(e,t,a){"use strict";var n=a(250);t.__esModule=!0,t["default"]=void 0;var s=n(a(1613))["default"];t["default"]=s},1613:function(e,t,a){"use strict";var n=a(250);t.__esModule=!0,t["default"]=void 0;var s=n(a(1614)),r=a(1618),i=n(a(1624)),c=n(a(1625));!function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){var a=t;a=a||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,a.bubbles,a.cancelable,a.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var o={extension:function(e){var t=function(e,t){return!("0"!==e.getChartAttribute("showanchors")&&(!t||"area2d"!==t&&"msarea"!==t||"1"===e.getChartAttribute("showanchors")))&&(e.setChartAttribute({showanchors:"1",anchorbgalpha:"0",anchoralpha:"0"}),!0)},a=e.accesibilityTexts,n=new s["default"];function o(e,t,s){var i=a.buildAriaTexts(t.id,"nonCartesian",s),c=new r.FCAccessibilitySingleSeriesWithLegend(e,t,i,n.getConfig());c.makeChartAccessible(c.makeSingleSeriesWithLegendAccessible)}function l(e,t,s){var i=a.buildAriaTexts(t.id,"singleSeries",s),c=new r.FCAccessibilitySingleSeries(e,t,i,n.getConfig());c.addAxisInformation(),c.makeChartAccessible(c.makeSingleSeriesAccessible)}e.addEventListener("renderComplete",(function(e){var s=e.sender,r=(document.getElementById(e.sender.id),s.apiInstance.getFromEnv("paper").canvas),d=s.chartType(),u=s.apiInstance.getFromEnv("dataSource").chart.accessibility;if(r&&("1"===u||1===u))switch(d){case"msline":case"msspline":case"stackedarea2d":case"msarea":case"radar":case"msstepline":case"logmsline":case"inversemsline":case"inversemsarea":case"sparkline":case"mscombi2d":case"mscombi3d":case"mscombidy2d":case"stackedcolumn2dline":case"stackedcolumn3dline":case"mscolumnline3d":case"mscolumn3dlinedy":case"stackedcolumn3dlinedy":if(t(s,d))break;case"mscolumn2d":case"mscolumn3d":case"msbar2d":case"msbar3d":case"stackedcolumn2d":case"stackedcolumn3d":case"stackedbar2d":case"stackedbar3d":case"scatter":case"bubble":case"inversemscolumn2d":case"logmscolumn2d":case"logstackedcolumn2d":case"sparkcolumn":case"sparkwinloss":!function(e,t,s){var r=a.buildAriaTexts(t.id,"multiSeries",s),c=new i["default"](e,t,r,n.getConfig());c.makeChartAccessible(c.makeMultiSeriesAccessible)}(r,s,d);break;case"pie2d":case"pie3d":case"doughnut2d":case"doughnut3d":case"pyramid":case"angulargauge":case"hlineargauge":case"hled":case"vled":case"bulb":case"hbullet":case"vbullet":o(r,s,d);break;case"funnel":o(r,s,"funnel");break;case"line":case"spline":case"kagi":case"area2d":if(t(s,d))break;case"column2d":case"column3d":case"bar2d":case"bar3d":l(r,s,d);break;case"waterfall2d":l(r,s,"waterfall2d");break;case"heatmap":!function(e,t,s){var r=a.buildAriaTexts(t.id,"heatmap",s),i=new c["default"](e,t,r,n.getConfig());i.makeChartAccessible(i.makeNestedDataAccessible)}(r,s,d)}}))},name:"AccessibilityExtension",type:"extension",requiresFusionCharts:!0};t["default"]=o},1614:function(e,t,a){"use strict";t.__esModule=!0,t["default"]=void 0;var n=a(1615),s=function(){function e(){this.config={base:{readerPreferenceForEdge:"jaws",disablePlotDetailsForIE:!1}}}var t=e.prototype;return t.setConfig=function(e,t,a){e&&a&&"string"==typeof e?t?this.config[t][e]=a:this.config.base[e]=a:t?this.config[t]=(0,n.mergeDeep)(this.config[t],e):this.config.base=(0,n.mergeDeep)(this.config.base,e)},t.getConfig=function(e){return this.config.hasOwnProperty(e)?(0,n.mergeDeep)(this.config[e],this.config.base):this.config.base},e}();t["default"]=s},1618:function(e,t,a){"use strict";var n=a(250);t.__esModule=!0,t.FCAccessibilitySingleSeriesWithLegend=t.FCAccessibilitySingleSeries=void 0;var s=n(a(269)),r=a(1619),i=a(1620),c=function(e){function t(t,a,n,s){return e.call(this,t,a,n,s)||this}return(0,s["default"])(t,e),t.prototype.makeSingleSeriesAccessible=function(){var e,t,a=this,n=this;switch(!n._conf&&(n._conf={}),e="angulargauge"===this.chartType?this.chartData.dials.dial.length:"hlineargauge"===this.chartType?this.chartData.pointers.pointer.length:"hled"===this.chartType||"vled"===this.chartType||"bulb"===this.chartType||"hbullet"===this.chartType||"vbullet"===this.chartType?1:this.chartData.data.length,n.makeExportAccessible(),this.chartType){case"pyramid":case"funnel":t=this.chartInstance.apiInstance.getDatasets()[0]._components.data;break;default:t=this.chartInstance.apiInstance.getDatasets()[0].components.data}n._conf.plotData=t,n._conf.dataLength=e,n._conf.plotSelectOnKeyPressSS=function(e){var t=+this.getAttribute("pIndex"),a=!1,i=!1,c=0,o=n._conf.dataLength-1;for("waterfall2d"===n.chartType&&(o=n._conf.dataLength);!i&&c<n._conf.dataLength;){switch(++c,e.keyCode){case 37:case 38:--t<0&&(t=o),a=!0;break;case 39:case 40:++t>o&&(t=0),a=!0;break;case 13:case 32:n.chartInstance.apiInstance.getDatasets()[0]._firePlotEvent?n.chartInstance.apiInstance.getDatasets()[0]._firePlotEvent("fc-click",t<0?0:t,new CustomEvent("click")):"angulargauge"===n.chartType?n.chartInstance.apiInstance.getDatasets()[0].components.data[t<0?0:t].graphics.pointersTpath.data("eventArgs")?n.chartInstance.apiInstance.plotEventHandler(n.chartInstance.apiInstance.getDatasets()[0].components.data[t<0?0:t].graphics.pointersTpath,new CustomEvent("click")):n.chartInstance.apiInstance.plotEventHandler(n.chartInstance.apiInstance.getDatasets()[0].components.data[t<0?0:t].graphics.pointersPath,new CustomEvent("click")):"funnel"===n.chartType||"pyramid"===n.chartType?n.chartInstance.apiInstance.plotEventHandler(n.chartInstance.apiInstance.getDatasets()[0]._components.data[t<0?"funnel"===n.chartType?1:0:t]._graphics.trackerObj,new CustomEvent("click")):"hlineargauge"===n.chartType&&n.chartInstance.apiInstance.plotEventHandler(n.chartInstance.apiInstance.getDatasets()[0].components.data[t<0?0:t].graphics.pointer,new CustomEvent("click")),"pie2d"!==n.chartType&&"pie3d"!==n.chartType&&"doughnut2d"!==n.chartType&&"doughnut3d"!==n.chartType||n.chartInstance.apiInstance.getDatasets()[0].plotGraphicClick.call(n.chartInstance.apiInstance.getDatasets()[0].components.data[t<0?0:t].graphics.element)}if(!a)break;if(e.preventDefault(),n._conf.plotData[t]){var l=s(n._conf.plotData[t]);if(l){if(document.activeElement===l.node)continue;(0,r.crossBrowserFocus)(l.node),i=!0}}}};var s=function(e){switch(a.chartType){case"pyramid":case"funnel":return e._graphics.graphic;case"angulargauge":return e.graphics.pointersTpath.data("eventArgs")?e.graphics.pointersTpath:e.graphics.pointersPath;case"hlineargauge":return e.graphics.pointer;case"hled":case"vled":return e.graphics.element.parent.parent.node.children[0];case"hbullet":case"vbullet":return e.graphics.element.parent.parent;default:return e.graphics.element}},i=-1;(function(){for(var a=this,c=function(e,n){var s={};return s["{label}"]=e.label||e.categoryLabel||e.dataLabel||"",s["{value}"]=e.y||e.setValue||0,s["{target}"]=e.target||0,s["{formattedValue}"]=e.formatedVal||a.chartInstance.formatNumber(s["{value}"])||"",s["{plotIndex}"]=n+1,s["{totalPlots}"]=t.length,s["{percentValue}"]=e.pValue,s},o=function(e){var o;if(t[e]){var l,d=s(t[e]);if(d)-1===i&&(i=e),l="pyramid"===a.chartType||"funnel"===a.chartType?c(t[e],e):c(t[e].config,e),o=a.alternateTexts.plot,(t[e].config.setLink&&""!==t[e].config.setLink||t[e].config.link&&""!==t[e].config.link||t[e].config.dataLink&&""!==t[e].config.dataLink||t[e].link&&""!==t[e].link)&&(o+=" This is a clickable plot"),a.addTabIndexAndSetAria(d.node||d,o,(0,r.mergeDeep)(a.chartPropertyMap,l),i===e?"2":"-1","img",{pIndex:e}),(d.node||d).removeEventListener("keydown",(d.node||d).plotSelectOnKeyPressSS,!1),(d.node||d).plotSelectOnKeyPressSS=n._conf.plotSelectOnKeyPressSS,(d.node||d).addEventListener("keydown",(d.node||d).plotSelectOnKeyPressSS,!1)}},l=0;l<e;l++)o(l);"waterfall2d"===this.chartType&&o(e)}).call(this)},t}(n(a(1621))["default"]);t.FCAccessibilitySingleSeries=c;var o=function(e){function t(t,a,n,s){return e.call(this,t,a,n,s)||this}return(0,s["default"])(t,e),t.prototype.makeSingleSeriesWithLegendAccessible=function(){this.makeLegendAccessible(),new c(this.svgRoot,this.chartInstance,this.alternateTexts,this.config).makeSingleSeriesAccessible()},t}(i.FCAccessibilityLegendEnabled);t.FCAccessibilitySingleSeriesWithLegend=o},1619:function(e,t,a){"use strict";t.__esModule=!0,t.mergeDeep=function s(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];if(!a.length)return e;var i=a.shift();if(n(e)&&n(i))for(var c in i){var o,l;if(n(i[c]))e[c]||Object.assign(e,((o={})[c]={},o)),s(e[c],i[c]);else Object.assign(e,((l={})[c]=i[c],l))}return s.apply(void 0,[e].concat(a))},t.replaceMultipleStrings=function(e,t){var a=new RegExp(Object.keys(t).join("|"),"gi");return e.replace(a,(function(e){return t[e]}))},t.crossBrowserFocus=function(e){e.focus&&e.focus();return e},t.isEdge=function(){return navigator.userAgent.indexOf("Edge")>=0},t.isIE=function(){return/MSIE|Trident/.test(navigator.userAgent)};var n=function(e){return e&&"object"==typeof e&&!Array.isArray(e)}},1620:function(e,t,a){"use strict";var n=a(250);t.__esModule=!0,t.FCAccessibilityLegendEnabled=void 0;var s=n(a(269)),r=a(1619),i=n(a(1621)),c=n(a(1622));t.FCAccessibilityBase=c["default"];var o=function(e){function t(t,a,n,s){return e.call(this,t,a,n,s)||this}(0,s["default"])(t,e);var a=t.prototype;return a.isAllLegendItemHidden=function(){var e=this.chartInstance.apiInstance._components.legend;if(e&&0!==e.length){var t=e[0]._components.legendItem;if(!t)return!1;for(var a=0;a<t.length;a++)if(-1===t[a]._legendState.indexOf("hidden"))return!1;return!0}return!1},a.isLegendItemHidden=function(e){var t=this.chartInstance.apiInstance._components.legend&&this.chartInstance.apiInstance._components.legend[0]._components.legendItem;return!!t&&t[e]._legendState.indexOf("hidden")>=0},a.makeLegendAccessible=function(e){var t=e;if(void 0===t&&(t=!0),t){var a=this;if("0"!==this.chartInstance.getChartAttribute("showlegend")){var n=this.svgRoot.querySelectorAll("g[class^=raphael][class$=legendGroup] > [class$=item] > text");if(n&&n.length>0){var s=n.length,i=-1;function c(e){var t=!1;switch(e.stopPropagation(),e.keyCode){case 37:case 38:i>0&&(i=+this.getAttribute("pIndex")-1),t=!0;break;case 39:case 40:i<s-1&&(i=+this.getAttribute("pIndex")+1),t=!0;break;case 13:case 32:i=+this.getAttribute("pIndex"),a.chartInstance.apiInstance._components.legend[0]._components.legendItem[i].fireEvent("fc-click"),setTimeout((function(){a.makeMultiSeriesAccessible&&a.makeMultiSeriesAccessible(!1)}),100),t=!0}t&&((0,r.crossBrowserFocus)(n[i]),e.preventDefault())}for(var o=0;o<n.length;o++){var l={};l["{legendText}"]=n[o].innerHTML,this.addTabIndexAndSetAria(n[o],this.alternateTexts.legendItem,(0,r.mergeDeep)(this.chartPropertyMap,l),0===o?"3":"-1","button",{pIndex:o}),n[o].removeEventListener("keydown",n[o].legendSelectOnKeyPress,!1),n[o].legendSelectOnKeyPress=c,n[o].addEventListener("keydown",n[o].legendSelectOnKeyPress,!1)}n[0].addEventListener("focus",(function(){i=0}))}}}},a.makeGradientLegendAccessible=function(){var e=this.svgRoot.querySelectorAll("g[class^=raphael][class$=fc-gl-slider]"),t=this.chartInstance,a=this.addTabIndexAndSetAria,n=this.alternateTexts,s=this.chartPropertyMap;if(e){var i,c={},o=0,l=0;function d(i,d){i.stopPropagation();var u,h,p,m=i.keyCode,g=t.apiInstance._components.gLegend[0].sGroup.extremes,f=0,b=0===d?o:l,y=!1,v=Math.floor(g[1]-g[0]),I=v+l===o,k=0===d?v:-v;switch(u=0===d?t.apiInstance._components.gLegend[0].sGroup.sliders["false"]:t.apiInstance._components.gLegend[0].sGroup.sliders["true"],m){case 37:(0===d&&b>0||1===d&&b>k&&!I)&&(f=b-v/10,0===d?o=f:l=f,y=!0);break;case 39:(0===d&&b<k&&!I||1===d&&b<0)&&(f=b+v/10,0===d?o=f:l=f,y=!0)}(h=u.rangeGroup.updateWhenInMove(u,u.currPos+f),0===d?c["{currentStartValue}"]=h:c["{currentEndValue}"]=h,a(e[0],n.lowerRange,(0,r.mergeDeep)(s,c),"3"),a(e[1],n.upperRange,(0,r.mergeDeep)(s,c),"3"),y)&&((p=0===d?t.apiInstance._components.gLegend[0].sGroup.sliders["false"].getDragAPI():t.apiInstance._components.gLegend[0].sGroup.sliders["true"].getDragAPI()).dragStart({stopPropagation:function(){}}),p.dragging({stopPropagation:function(){},data:[f]}))}c["{lowerRangeLabel}"]=this.chartData.colorrange.startlabel,c["{upperRangeLabel}"]=this.chartData.colorrange.endlabel,i=t.apiInstance._components.gLegend[0].sGroup.sliders,c["{rangeStart}"]=c["{currentStartValue}"]=i["false"].rangeGroup.updateWhenInMove(i["false"],i["false"].currPos),c["{rangeEnd}"]=c["{currentEndValue}"]=i["true"].rangeGroup.updateWhenInMove(i["true"],i["true"].currPos),this.addTabIndexAndSetAria(e[0],this.alternateTexts.lowerRange,(0,r.mergeDeep)(this.chartPropertyMap,c),"3"),this.addTabIndexAndSetAria(e[1],this.alternateTexts.upperRange,(0,r.mergeDeep)(this.chartPropertyMap,c),"3"),e[0].addEventListener("keydown",(function(e){d(e,0)})),e[1].addEventListener("keydown",(function(e){d(e,1)}))}},t}(i["default"]);t.FCAccessibilityLegendEnabled=o},1621:function(e,t,a){"use strict";var n=a(250);t.__esModule=!0,t["default"]=void 0;var s=n(a(269)),r=a(1619),i=n(a(1622)),c=function(e){function t(t,a,n,s){return e.call(this,t,a,n,s)||this}return(0,s["default"])(t,e),t.prototype.makeExportAccessible=function(){if(this.chartData.chart.exportenabled){var e=this.svgRoot.querySelector("g[class^=raphael][class$=toolbar] > [class$=button]"),t=this,a=this.chartInstance.apiInstance.getFromEnv("chart-container").querySelector("[type=div]").childNodes,n=!1,s=-1;function i(i){switch(i.stopPropagation(),i.keyCode){case 37:case 38:n&&(s>0?s=+this.getAttribute("pIndex")-1:-1===s&&(s=a.length-1));break;case 39:case 40:n&&(s>-1&&s<a.length-1?s=+this.getAttribute("pIndex")+1:-1===s&&(s=0));break;case 13:case 32:-1===s?(n?t.chartInstance.apiInstance._env.hamburger.fireEvent("fc-mouseout"):t.chartInstance.apiInstance._env.hamburger.fireEvent("fc-mouseover"),n=!n):(t.chartInstance.apiInstance.getFromEnv("hamburger")._componentStore.listContainer.elemStore[0]._componentStore.item.elemStore[s].fireEvent("fc-click"),s=-1,n=!1);break;case 27:(0,r.crossBrowserFocus)(e),t.chartInstance.apiInstance._env.hamburger.fireEvent("fc-mouseout"),n=!1,s=-1}n&&s>-1&&((0,r.crossBrowserFocus)(a[s]),i.preventDefault())}this.addTabIndexAndSetAria(e,this.alternateTexts.exportMenu,this.chartPropertyMap,"4","button");for(var c=0;c<a.length;c++){var o=a[c];o.style.outline="",t.addTabIndexAndSetAria(o,Array.isArray(t.alternateTexts.exportMenuItems)?t.alternateTexts.exportMenuItems[c]:null,t.chartPropertyMap,0===c?"4":"-1","button",{pIndex:c}),a[c].removeEventListener("keydown",a[c].exportSelectOnKeyPress,!1),a[c].exportSelectOnKeyPress=i,a[c].addEventListener("keydown",a[c].exportSelectOnKeyPress,!1)}e.addEventListener("keydown",i)}},t}(i["default"]);t["default"]=c},1622:function(e,t,a){"use strict";var n=a(250);t.__esModule=!0,t["default"]=void 0;var s=n(a(1623)),r=a(1619),i=function(){function e(e,t,a,n){this.svgRoot=e,this.chartInstance=t,this.alternateTexts=a,this.config=n,this.chartData=t.getJSONData(),this.chartType=this.chartInstance.chartType(),this.isIE=(0,r.isIE)(),this.chartPropertyMap={"{chartType}":this.config&&this.config.chartType||this._getFormattedChartName(this.chartType),"{caption}":this.chartData.chart.caption,"{subcaption}":this.chartData.chart.subcaption}}var t=e.prototype;return t._getFormattedChartName=function(){var e=this.chartType;return s["default"].hasOwnProperty(e)?s["default"][e].displayName:e},t.addAxisInformation=function(){this.chartPropertyMap=(0,r.mergeDeep)(this.chartPropertyMap,{"{xAxisName}":this.chartData.chart.xaxisname||"","{yAxisName}":this.chartData.chart.yaxisname||""})},t.addTabIndexAndSetAria=function(e,t,a,n,s,i){if(e){var c,o="tabindex";if((0,r.isEdge)()&&(o="tabIndex"),c=n||"0",e.setAttribute(o,c||"0"),e.setAttribute("focusable","true"),t&&a&&e.setAttribute("aria-label",(0,r.replaceMultipleStrings)(t,a)),i)for(var l in i)e.setAttribute(l,i[l]);s&&e.setAttribute("role",s)}},t.addAriaHiddenAndRole=function(e,t,a){e&&(e.setAttribute("aria-hidden",t),a&&e.setAttribute("role",a))},t.makeChartAccessible=function(e){var t,a=this.chartInstance,n=this.addAriaHiddenAndRole;if("funnel"===this.chartType){for(var s,i,c=0;c<this.chartData.data.length;c++)if(this.chartData.data[c].value){s=this.chartData.data[c].label,i=this.chartInstance.formatNumber(this.chartData.data[c].value);break}this.chartPropertyMap=(0,r.mergeDeep)(this.chartPropertyMap,{"{plot-0-label}":s||"","{plot-0-value}":i||""})}function o(e,t){var s=a.apiInstance.getFromEnv("chart-container").querySelectorAll(".fc__tooltip")[0];n(s,e,t)}this.addTabIndexAndSetAria(this.chartInstance.apiInstance.getFromEnv("chart-container"),null,null,"-1","region"),this.addTabIndexAndSetAria(this.svgRoot,this.alternateTexts.chart,this.chartPropertyMap,"1"),(t=this.chartInstance.jsVars.overlayButton)&&(this.addTabIndexAndSetAria(t,"Back Button. Click this button to go back to the previous chart.",this.chartPropertyMap,"5","button"),t.addEventListener("keydown",function(e){switch(e.stopPropagation(),e.keyCode){case 13:case 32:t.click()}}.bind(this),!1)),e&&e.call(this),this.chartInstance.addEventListener("dataPlotRollOver",o.bind(null,!1,"tooltip")),this.chartInstance.addEventListener("dataPlotRollOut",o.bind(null,!0,"tooltip"))},e}();t["default"]=i},1623:function(e,t,a){"use strict";t.__esModule=!0,t["default"]=void 0;var n={msline:{displayName:"multi series line",category:"multiseries"},msspline:{displayName:"multi series spline",category:"multiseries"},stackedarea2d:{displayName:"stacked area",category:"multiseries"},msarea:{displayName:"multi series area",category:"multiseries"},msstepline:{displayName:"multi series step line",category:"multiseries"},mscolumn2d:{displayName:"multi series column",category:"multiseries"},mscolumn3d:{displayName:"multi series column 3D",category:"multiseries"},msbar2d:{displayName:"multi series bar",category:"multiseries"},msbar3d:{displayName:"multi series bar 3D",category:"multiseries"},stackedcolumn2d:{displayName:"stacked column",category:"multiseries"},stackedcolumn3d:{displayName:"stacked column 3D",category:"multiseries"},stackedbar2d:{displayName:"stacked bar",category:"multiseries"},stackedbar3d:{displayName:"stacked bar 3D",category:"multiseries"},inversemscolumn2d:{displayName:"inverse axis multi series column",category:"multiseries"},inversemsline:{displayName:"inverse axis multi series line",category:"multiseries"},inversemsarea:{displayName:"inverse axis multi series area",category:"multiseries"},logmscolumn2d:{displayName:"log axis multi series column",category:"multiseries"},logmsline:{displayName:"log axis multi series line",category:"multiseries"},logstackedcolumn2d:{displayName:"log axis stacked column",category:"multiseries"},pie2d:{displayName:"pie",category:"multiseries"},pie3d:{displayName:"pie 3D",category:"multiseries"},doughnut2d:{displayName:"doughnut",category:"multiseries"},doughnut3d:{displayName:"doughnut 3D",category:"multiseries"},column2d:{displayName:"column",category:"multiseries"},column3d:{displayName:"column 3D",category:"multiseries"},bar2d:{displayName:"bar",category:"multiseries"},bar3d:{displayName:"bar 3D",category:"multiseries"},waterfall2d:{displayName:"waterfall",category:"multiseries"},mscombi2d:{displayName:"Multi-series 2D Single Y Combination Chart",category:"multiseries"},mscombidy2d:{displayName:"Multi-series 2D Dual Y Combination Chart",category:"multiseries"},area2d:{displayName:"area",category:"multiseries"},heatmap:{displayName:"heatmap",category:"multiseries"}};t["default"]=n},1624:function(e,t,a){"use strict";var n=a(250);t.__esModule=!0,t["default"]=void 0;var s=n(a(269)),r=a(1619),i=function(e){function t(t,a,n,s){var r;return(r=e.call(this,t,a,n,s)||this).addAxisInformation(),r}return(0,s["default"])(t,e),t.prototype.makeMultiSeriesAccessible=function(e){var t,a,n,s,i=this,c=e,o=this;void 0===c&&(c=!0),!o._conf&&(o._conf={}),o.makeLegendAccessible(c),o.makeExportAccessible(),t=o.chartInstance.apiInstance.getDatasets(),a=o.chartData.categories&&o.chartData.categories[0].category.length,n=o.chartData.dataset.length,s=o.chartData.dataset&&o.chartData.dataset.length>0?o.chartData.dataset[0].data.length:0,"logmscolumn2d"!==this.chartType&&"logmsline"!==this.chartType||(s=a),o._conf.seriesLength=n,o._conf.dataLength=s,o._conf.dataSet=t,o._conf.plotSelectOnKeyPressMS=function(e){var t,n;if(t=+this.getAttribute("pIndex"),n=+this.getAttribute("sIndex"),"logmscolumn2d"!==this.chartType&&"logmsline2d"!==this.chartType||(s=a),o._conf.dataLength=o.chartData.dataset[n].data.length,!o.isAllLegendItemHidden()){for(var i=!1,c=!1,l=!1,d=0!==["stackedcolumn2d","stackedcolumn3d"].filter((function(e){return e===o.chartInstance.chartType()})).length;!c;){switch(e.keyCode){case 37:t>0?--t:l=!0,i=!0;break;case 39:t<o._conf.dataLength-1?++t:l=!0,i=!0;break;case 38:n<o._conf.seriesLength-1&&d?++n:n>0&&!d?--n:l=!0,i=!0;break;case 40:n>0&&d?--n:n<o._conf.seriesLength-1&&!d?++n:l=!0,i=!0;break;case 13:case 32:o.chartInstance.apiInstance.getDatasets()[n]._firePlotEvent("fc-click",t<0?0:t,new CustomEvent("click"))}if(!i)break;if(l)break;o._conf.dataSet[n].components.data[t].graphics.element&&"none"!==getComputedStyle(o._conf.dataSet[n].components.data[t].graphics.element.node).display&&(c=!0),c||37!==e.keyCode&&39!==e.keyCode||!o.isLegendItemHidden(n)||(++n,t=-1)}i&&c&&(0,r.crossBrowserFocus)(o._conf.dataSet[n].components.data[t].graphics.element.node)}};var l,d;switch(this.chartType){case"scatter":l=function(e,t){var a={};return a["{xValue}"]=i.chartData.dataset[e].data[t].x||"",a["{yValue}"]=i.chartData.dataset[e].data[t].y||"",a["{seriesName}"]=i.chartData.dataset[e].seriesname||"",a};break;case"bubble":l=function(e,t){var a={};return a["{xValue}"]=i.chartData.dataset[e].data[t].x||"",a["{yValue}"]=i.chartData.dataset[e].data[t].y||"",a["{zValue}"]=i.chartData.dataset[e].data[t].z||"",a["{bubbleName}"]=i.chartData.dataset[e].data[t].name||"",a["{seriesName}"]=i.chartData.dataset[e].seriesname||"",a};break;default:l=function(e,t){var a={};return a["{label}"]=i.chartData.categories&&i.chartData.categories[0].category[t].label||"",a["{value}"]=i.chartData.dataset[e].data[t].value,a["{formattedValue}"]=i.chartInstance.formatNumber(i.chartData.dataset[e].data[t].value),a["{seriesName}"]=i.chartData.dataset[e].seriesname||"",a}}for(var u=0;u<n;u++)for(var h=0;h<s;h++){var p=l.call(this,u,h);"scatter"===this.chartType&&(s=o.chartData.dataset[u].data.length),p["{plotIndex}"]=h+1,p["{seriesIndex}"]=u+1,p["{totalPlots}"]=s,p["{totalSeries}"]=n,d=this.alternateTexts.plot,(t[u].components.data[h].config.setLink&&""!==t[u].components.data[h].config.setLink||t[u].components.data[h].config.link&&""!==t[u].components.data[h].config.link)&&(d+=" This is a clickable plot"),this.addTabIndexAndSetAria(t[u].components.data[h].graphics.element&&t[u].components.data[h].graphics.element.node,d,(0,r.mergeDeep)(this.chartPropertyMap,p),0===u&&0===h?"2":"-1","img",{sIndex:u,pIndex:h});var m=t[u].components.data[h].graphics.element;m&&m.node.removeEventListener("keydown",m.node.plotSelectOnKeyPressMS,!1),m&&(m.node.plotSelectOnKeyPressMS=o._conf.plotSelectOnKeyPressMS),m&&m.node.addEventListener("keydown",m.node.plotSelectOnKeyPressMS,!1)}},t}(a(1620).FCAccessibilityLegendEnabled);t["default"]=i},1625:function(e,t,a){"use strict";var n=a(250);t.__esModule=!0,t["default"]=void 0;var s=n(a(269)),r=a(1619),i=function(e){function t(t,a,n,s){var r;return(r=e.call(this,t,a,n,s)||this).addAxisInformation(),r}return(0,s["default"])(t,e),t.prototype.makeNestedDataAccessible=function(){var e,t,a,n,s,i,c,o,l;this.chartInstance.apiInstance._components.gLegend?this.makeGradientLegendAccessible():this.makeLegendAccessible(),this.makeExportAccessible(),e=this.chartInstance.apiInstance.getDatasets(),t=this.chartData.dataset,a=this.chartData.dataset.length,n=this.chartData.dataset&&this.chartData.dataset.length>0?this.chartData.dataset[0].data.length:0,s=this.chartData.rows.row,i=this.chartData.columns.column,c=function(e,t){var a,n,r={},c=this.chartData.dataset,o=c[e].data[t].rowid,l=c[e].data[t].columnid;return r["{value}"]=c[e].data[t].value,r["{formattedValue}"]=this.chartInstance.formatNumber(c[e].data[t].value),r["{topLeftLabel}"]=c[e].data[t].tllabel,r["{topRightLabel}"]=c[e].data[t].trlabel,r["{bottomLeftLabel}"]=c[e].data[t].bllabel,r["{bottomRightLabel}"]=c[e].data[t].brlabel,a=s.find((function(e){return e.id.toUpperCase()===o.toUpperCase()&&e})),n=i.find((function(e){return e.id.toUpperCase()===l.toUpperCase()&&e})),r["{yAxisLabel}"]=a.label,r["{xAxisLabel}"]=n.label,r};for(var d=0;d<a;d++)for(var u=0;u<n;u++){var h=c.call(this,d,u);h["{plotIndex}"]=u+1,h["{totalPlots}"]=n,this.addTabIndexAndSetAria(e[d].components.data[u].graphics.element&&e[d].components.data[u].graphics.element.node,this.alternateTexts.plot,(0,r.mergeDeep)(this.chartPropertyMap,h),0===d&&0===u?"2":"-1")}o=-1,l=0,e[0].components.data[0].graphics.element&&e[0].components.data[0].graphics.element.node.addEventListener("focus",(function(){o=l=0})),this.svgRoot.addEventListener("keydown",function(a){var i=this;this.isAllLegendItemHidden()||function(){var c,d,u,h,p,m=!1,g=!1,f=!1;for(-1!==o&&(u=t[l].data[o].rowid,h=t[l].data[o].columnid,p=s.findIndex((function(e){return e.id===u})));!g;){switch(a.keyCode){case 38:p>0&&(d=p-1,(c=t[l].data.findIndex((function(e){return e.rowid===s[d].id&&e.columnid===h})))>-1&&(o=c)),m=!0;break;case 40:p<s.length-1&&(d=p+1,(c=t[l].data.findIndex((function(e){return e.rowid===s[d].id&&e.columnid===h})))>-1&&(o=c)),m=!0;break;case 37:o>0?--o:f=!0,m=!0;break;case 39:o<n-1?++o:f=!0,m=!0}if(!m)break;if(f)break;e[l].components.data[o].graphics.element&&"none"!==getComputedStyle(e[l].components.data[o].graphics.element.node).display&&(g=!0),g||37!==a.keyCode&&39!==a.keyCode||!i.isLegendItemHidden(l)||(++l,o=-1)}m&&g&&(0,r.crossBrowserFocus)(e[l].components.data[o].graphics.element.node)}()}.bind(this),!1)},t}(a(1620).FCAccessibilityLegendEnabled);t["default"]=i}}])}));
//# sourceMappingURL=http://localhost:3052/3.23.0/map/eval/fusioncharts.accessibility.js.map