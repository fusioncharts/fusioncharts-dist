!function(e){"object"==typeof module&&"undefined"!=typeof module.exports?module.exports=e:e()}((function(){(window.webpackJsonpFusionCharts=window.webpackJsonpFusionCharts||[]).push([[6],{1182:function(e,t,i){"use strict";var n=i(219);t.__esModule=!0,t["default"]=void 0;var o=n(i(1183));t.ZoomLine=o["default"];var a=n(i(1189));t.ZoomLineDY=a["default"];var s=n(i(1192)),r={name:"zoomline",type:"package",requiresFusionCharts:!0,extension:function(e){e.addDep(s["default"]),e.addDep(o["default"]),e.addDep(a["default"])}};t["default"]=r},1183:function(e,t,i){"use strict";var n=i(219);t.__esModule=!0,t["default"]=void 0;var o=n(i(1184))["default"];t["default"]=o},1184:function(e,t,i){"use strict";var n=i(219);t.__esModule=!0,t["default"]=void 0;var o=n(i(238)),a=i(224),s=n(i(717)),r=n(i(1185)),l=n(i(1187)),c=i(236),u=i(629),h=i(1188),d=i(232),p=window.navigator.userAgent,f=(0,d.getDep)("redraphael","plugin"),g=window.doc,m="rgba(192,192,192,"+(/msie/i.test(p)&&!window.opera?.002:1e-6)+")",v=window.parseFloat,b=window.parseInt,x=Math,C=x.max,y=x.min,k=x.ceil,w=x.floor,E=0,M=function(e,t){var i=t.get("config"),n=(0,a.getMouseCoordinate)(t.get("linkedItems","container"),e,t),o=n.chartX,s=n.chartY,r=i.canvasLeft,l=i.canvasTop,c=i.canvasLeft+i.canvasWidth,u=i.canvasHeight+i.canvasTop;return n.insideCanvas=!1,n.originalEvent=e,o>r&&o<c&&s>l&&s<u&&(n.insideCanvas=!0),n};f.addSymbol(h.symbolList);var P=function(e){function t(){var t;return(t=e.call(this)||this).zoomX=!0,t.hasScroll=!0,t.eiMethods={zoomOut:function(e){var t,i=this.apiInstance,n=i.getChildren&&i.getChildren("canvas")[0],o=n&&n.getChildren("inputManager");o=o&&o[0],i&&o&&i.addJob("zoomOut"+E++,(function(){t=o.zoomOut(),"function"==typeof e&&e(t)}),c.priorityList.postRender)},zoomTo:function(e,t,i){var n,o=this.apiInstance,s=o.getChildren&&o.getChildren("canvas")[0],r=s&&s.getChildren("inputManager");if(e!==a.UNDEF&&t!==a.UNDEF&&(r=r&&r[0],o&&r))return i?void o.addJob("zoomTo"+E++,(function(){n=r.zoomTo(e,t),"function"==typeof i&&i(n)}),c.priorityList.postRender):r.zoomTo(e,t)},resetChart:function(){var e=this.apiInstance,t=e.getChildren&&e.getChildren("canvas")[0],i=t&&t.getChildren("inputManager");i=i&&i[0],e&&i&&e.addJob("resetChart"+E++,(function(){i.resetChart()}),c.priorityList.postRender)},setZoomMode:function(e){var t=this.apiInstance,i=t.getChildren&&t.getChildren("canvas")[0],n=i&&i.getChildren("inputManager");n=n&&n[0],t&&n&&t.addJob("setZoomMode"+E++,(function(){n.setZoomMode(e)}),c.priorityList.postRender)},getViewStartIndex:function(e){var t,i,n,o=this.apiInstance;if(!e)return t=o.getChildren("xAxis")[0],i=t.getVisibleConfig().minValue,0===(n=Math.ceil(i))?0:n;o.addJob("getViewStartIndex"+E++,(function(){"function"==typeof e&&(t=o.getChildren("xAxis")[0],i=t.getVisibleConfig().minValue,n=Math.ceil(i),e(0===n?0:n))}),c.priorityList.postRender)},getViewEndIndex:function(e){var t,i,n=this.apiInstance;if(!e)return t=n.getChildren("xAxis")[0],i=t.getVisibleConfig().maxValue,Math.floor(i);n.addJob("getViewEndIndex"+E++,(function(){"function"==typeof e&&(t=n.getChildren("xAxis")[0],i=t.getVisibleConfig().maxValue,e(Math.floor(i)))}),c.priorityList.postRender)}},t.eiMethods.scrollTo=u.scrollTo,t.registerFactory("dataset",l["default"],["vCanvas"]),t}(0,o["default"])(t,e),t.getName=function(){return"ZoomLine"},t.includeInputOptions=function(){return["DragZoomIn","DragPin","ZoomResetButton","ZoomOutButton"]};var i=t.prototype;return i.__setDefaultConfig=function(){e.prototype.__setDefaultConfig.call(this);var t=this.config;t.friendlyName="Zoomable and Panable Multi-series Line Chart",t.defaultDatasetType="zoomline",t.showValues=0,t.zeroplanethickness=1,t.zeroplanealpha=40,t.showzeroplaneontop=0,t.enablemousetracking=!0,t.skipAttr=!0,t.canvasborderthickness=1,t.showvalues=0},i.getName=function(){return"ZoomLine"},i.parseChartAttr=function(t){e.prototype.parseChartAttr.call(this,t);var i=this.config,n=(t||this.getFromEnv("dataSource")).chart;i.useCrossline=Number(n.usecrossline)||n.usecrossline===a.UNDEF?1:0,i.drawTrendRegion=0},i.getInputConfigurations=function(){var e=this,t=e.config,i=function(i,n){e.addJob("inputZoom",(function(){var o=t.viewPortConfig;o.dsi=i,o.dei=n,e.updateManager(),e.getChildren("xAxis")[0].prepareAttributes()}),c.priorityList.configure)};return{dragZoomIn:{scaleX:!0,scaleY:!1,drawButton:!1,boxStyle:{stroke:t.zoomPaneStroke,fill:t.zoomPaneFill,"stroke-width":0},catZoomLimit:2,skipGraphics:!0,dragendFn:function(){return i(arguments.length<=1?undefined:arguments[1],arguments.length<=2?undefined:arguments[2])}},zoomResetButton:{hookFn:i,tooltext:t.btnResetChartTooltext},zoomOutButton:{hookFn:i,tooltext:t.btnZoomOutTooltext},dragPin:{orientation:"horizontal",attr:{stroke:t.zoomPaneStroke,fill:t.zoomPaneFill,"stroke-width":0},skipGraphics:!t.allowPinMode,pinAttr:{"stroke-width":0,stroke:"none",fill:t.pinPaneFill,"shape-rendering":"crisp"},strokeWidth:0,tooltext:t.showToolBarButtonTooltext&&t.btnSwitchToPinModeTooltext||""}}},i._setCategories=function(){var e,t,i,n,o=this.config,s=this.getFromEnv("dataSource"),r=s.chart||{},l=this.getChildren("xAxis"),c=o.cdm,u=o.cdmchar,h=s.categories&&s.categories[0].category||[];if(o.cdm=c=(0,a.pluckNumber)(r.compactdatamode,0),o.cdmchar=u=(0,a.pluck)(r.dataseparator,"|"),(c||"string"==typeof h)&&h.split){for(t=[],i=0,n=(e=h.split(u)).length;i<n;i+=1)t.push({label:e[i]});this.config.categories=s.categories[0].category=t}l[0].setAxisPadding(0,0),l[0].setTickValues(t||h)},i.isWithinCanvas=function(e,t){return M.call(this,e,t)},i.highlightPoint=function(e,t,i,n,o,a){var s,r,l,c,u,h,d=this,p=d.config,f=d.getFromEnv("animationManager"),v=d.components,b=d.graphics,x=Number(e),C=b.tracker,y=v.dataset[o],k=y&&y.config,w=y&&k.zoomedRadius||0,E=y&&k.hoverCosmetics,M=E&&E.fill,P=E&&E.borderColor,L=E&&E.borderThickness,_=function(e){d.plotEventHandler(this,e)},S=function(e){d.plotEventHandler(this,e,"dataplotRollover")},T=function(e){d.plotEventHandler(this,e,"dataplotRollout")};C||(s=b.tracker=f.setAnimation({el:"circle",attr:{cx:0,cy:0,r:w,fill:x?M:m,stroke:x?P:m,"stroke-width":x?L:0,"clip-rect":p.canvasLeft+","+p.canvasTop+","+p.canvasWidth+","+p.canvasHeight},container:b.trackerGroup,component:d}).on("fc-click",_).hover(S,T)),n&&s.data("eventArgs",{x:n.x,y:n.y,tooltip:n.tooltip,link:n.link}),p.lastHoveredPoint=n,d.getFromEnv("toolTipController").enableToolTip(s,a),s.transform("t"+(t+p.canvasLeft)+","+(i+p.canvasTop)),n&&(r="mouseover",l=s&&s.node,c=p.lastMouseEvent,h=c,l&&r&&(h||(h={}),h.originalEvent&&(h=h.originalEvent),h.touches&&(h=h.touches[0]),l.dispatchEvent?(MouseEvent?u=new MouseEvent(r,{bubbles:!!h.bubbles,cancelable:!!h.cancelable,clientX:h.clientX||h.pageX&&h.pageX-g.body.scrollLeft-g.documentElement.scrollLeft||0,clientY:h.clientY||h.pageY&&h.pageY-g.body.scrollTop-g.documentElement.scrollTop||0,screenX:h.screenX||0,screenY:h.screenY||0,pageX:h.pageX||0,pageY:h.pageY||0}):g.createEvent&&(u=g.createEvent("HTMLEvents")).initEvent(r,!!h.bubbles,!!h.cancelable),u.eventName=r,u&&l.dispatchEvent(u)):g.createEventObject&&l.fireEvent&&((u=g.createEventObject()).eventType=r,u.eventName=r,l.fireEvent("on"+r,u))))},i.configureAttributes=function(t){e.prototype.configureAttributes.call(this,t);var i,n,o=this.getFromEnv("dataSource").chart||{},s=this.getFromEnv("color-manager"),r=s.getColor("canvasBorderColor"),l=(0,a.pluckNumber)(o.showtoolbarbuttontooltext,1);i=(n=this.config).style,n.stepZoom=400/(100-(0,a.pluckNumber)(o.stepzoom,25)),n.stepZoom<=2&&(n.stepZoom=1.9),(0,a.extend2)(n,{useRoundEdges:(0,a.pluckNumber)(o.useroundedges,0),zoomType:"x",canvasPadding:(0,a.pluckNumber)(o.canvaspadding,0),scrollColor:(0,a.getFirstColor)((0,a.pluck)(o.scrollcolor,s.getColor("altHGridColor"))),scrollShowButtons:!!(0,a.pluckNumber)(o.scrollshowbuttons,1),scrollHeight:(0,a.pluckNumber)(o.scrollheight,16)||16,scrollBarFlat:(0,a.pluckNumber)(o.flatscrollbars,0),allowPinMode:(0,a.pluckNumber)(o.allowpinmode,1),skipOverlapPoints:(0,a.pluckNumber)(o.skipoverlappoints,1),showToolBarButtonTooltext:l,btnResetChartTooltext:l?(0,a.pluck)(o.btnresetcharttooltext,"Reset Chart"):"",btnZoomOutTooltext:l?(0,a.pluck)(o.btnzoomouttooltext,"Zoom out one level"):"",btnSwitchToZoomModeTooltext:l?(0,a.pluck)(o.btnswitchtozoommodetooltext,"<strong>Switch to Zoom Mode</strong><br/>Select a subset of data to zoom into it for detailed view"):"",btnSwitchToPinModeTooltext:l?(0,a.pluck)(o.btnswitchtopinmodetooltext,"<strong>Switch to Pin Mode</strong><br/>Select a subset of data and compare with the rest of the view"):"",pinPaneFill:(0,a.convertColor)((0,a.pluck)(o.pinpanebgcolor,r),(0,a.pluckNumber)(o.pinpanebgalpha,15)),zoomPaneFill:(0,a.convertColor)((0,a.pluck)(o.zoompanebgcolor,"#b9d5f1"),(0,a.pluckNumber)(o.zoompanebgalpha,30)),zoomPaneStroke:(0,a.convertColor)((0,a.pluck)(o.zoompanebordercolor,"#3399ff"),(0,a.pluckNumber)(o.zoompaneborderalpha,80)),showPeakData:(0,a.pluckNumber)(o.showpeakdata,0),maxPeakDataLimit:(0,a.pluckNumber)(o.maxpeakdatalimit,o.maxpeaklimit,null),minPeakDataLimit:(0,a.pluckNumber)(o.minpeakdatalimit,o.minpeaklimit,null),crossline:{enabled:(0,a.pluckNumber)(o.showcrossline,1),line:{"stroke-width":(0,a.pluckNumber)(o.crosslinethickness,1),stroke:(0,a.getFirstColor)((0,a.pluck)(o.crosslinecolor,"#000000")),"stroke-opacity":(0,a.pluckNumber)(o.crosslinealpha,20)/100},labelEnabled:(0,a.pluckNumber)(o.showcrosslinelabel,o.showcrossline,1),labelstyle:{fontSize:v(o.crosslinelabelsize)?v(o.crosslinelabelsize)+"px":i.outCanfontSize,fontSizeWithUnit:(0,a.pluckFontSizeMaintainUnit)(o.crosslinelabelsize,i.outCanfontSizeWithUnit),fontFamily:(0,a.pluck)(o.crosslinelabelfont,i.outCanfontFamily)},valueEnabled:(0,a.pluckNumber)(o.showcrosslinevalues,o.showcrossline,1),valuestyle:{fontSize:v(o.crosslinevaluesize)?v(o.crosslinevaluesize)+"px":i.inCanfontSize,fontSizeWithUnit:(0,a.pluckFontSizeMaintainUnit)(o.crosslinevaluesize,i.outCanfontSizeWithUnit),fontFamily:(0,a.pluck)(o.crosslinevaluefont,i.inCanvasStyle.fontFamily)}},useCrossline:(0,a.pluckNumber)(o.usecrossline,1),tooltipSepChar:(0,a.pluck)(o.tooltipsepchar,", "),showTerminalValidData:(0,a.pluckNumber)(o.showterminalvaliddata,0)})},i.getValuePixel=function(e){var t=this.config.viewPortConfig;return t.ddsi+w(e/t.ppp)},i.getDatasets=function(){var e=[];return this.iterateComponents((function(t){t.getType&&"dataset"===t.getType()&&e.push(t)})),e},i.__preDraw=function(){var e,t,i,n,o,s=this.config,r=this.getFromEnv("dataSource").chart,l=s.cdm,c=this.getChildren("xAxis")[0],u=s.viewPortConfig,h=s.crossline,d=this.getChildren("canvas")[0].config,p=C(d.canvasPadding,d.canvasPaddingLeft,d.canvasPaddingRight),f=this.getChildren("yAxis")[0],g=s.canvasHeight,m=this.getFromEnv("dataSource").chart,v=c.getTicksLen(),x=c.getVisibleConfig(),y=x.minValue,k=x.maxValue,w=(0,a.pluckNumber)(r.displaystartindex,y,1),E=(0,a.pluckNumber)(r.displayendindex,k,v||2),M=b(w,10)-1,P=b(E,10)-1,L=0;if(h.labelstyle.fontSize=this.computeFontSize(h.labelstyle.fontSizeWithUnit),h.valuestyle.fontSize=this.computeFontSize(h.valuestyle.fontSizeWithUnit),o=(n=this.getDatasets()).length,s.borderWidth=(0,a.pluckNumber)(m.showborder,1)?(0,a.pluckNumber)(m.borderthickness,1):0,s.updateAnimDuration=500,s.status="zoom",s.maxZoomLimit=(0,a.pluckNumber)(r.maxzoomlimit,1e3),s.viewPortHistory=[],(t=(0,a.pluckNumber)(r.pixelsperpoint,15))<1&&(t=1),(i=(0,a.pluckNumber)(r.pixelsperlabel,r.xaxisminlabelwidth,c.getAxisConfig("labels").rotation?20:60))<t&&(i=t),(M<0||M>=(v-1||1))&&(M=0),(P<=M||P>(v-1||1))&&(P=v-1||1),(u=s.viewPortConfig=(0,a.extend2)(s.viewPortConfig,{amrd:(0,a.pluckNumber)(r.anchorminrenderdistance,20),nvl:(0,a.pluckNumber)(r.numvisiblelabels,0),cdm:l,oppp:t,oppl:i,dsi:M,dei:P,vdl:P-M,clen:v,offset:0,step:1,llen:0,alen:0,ddsi:M,ddei:P,ppc:0})).clen){for(;o--;)e=n[o].config,L=C(L,e.drawanchors&&(e.anchorradius||0)+(Number(e.anchorborderthickness)||0)||0);s.overFlowingMarkerWidth=L,p=s.canvasPadding=C(L,p),s._prezoomed=u.dei-u.dsi<u.clen-1,s._visw=Math.max(1,s.canvasWidth-2*p),s._visx=s.canvasLeft+p,s._visout=-(s.height+g+1e3),s._yminValue=f.getLimit().min,s._ymin=f.getPixel(s._yminValue),(0,a.pluckNumber)(r.displaystartindex,r.displayendindex)&&c.setVisibleConfig(w,E),this.updateManager()}},i.resetZoom=function(){var e=this.config.viewPortHistory,t=e[0];return!!e.length&&(e.length=0,this.zoomTo(t.dsi,t.dei,t)&&this.fireChartInstanceEvent("zoomReset",this._zoomargs,[this.getFromEnv("chartInstance").id]),!0)},i.zoomOut=function(){var e,t,i,n,o,a=this.config,s=a.viewPortHistory;return e=s.pop(),t=s[0]||a.viewPortConfig,e?(i=e.dsi,n=e.dei):a._prezoomed&&(i=0,n=t.clen-1),(o=this.zoomTo(i,n,e))&&this.fireChartInstanceEvent("zoomedout",o),!0},i.zoomRangePixels=function(e,t){var i,n,o=this.config.viewPortConfig,a=o.ppp,s=o.ddsi;i=s+w(e/a),n=s+w(t/a),o.dsi=i,o.dei=n,this.updateManager()},i.prepareAttributes=function(){this.config.hasChartMessage||(this.__preDraw(),e.prototype.prepareAttributes.call(this))},i.getValue=function(e){var t=this.config,i=t.viewPortConfig,n=this.getOriginalPositions(e.x,e.y,e.x,e.y),o=n[0],a=n[1],s=this.getChildren("xAxis")[0],r=this.getChildren("yAxis")[0],l=s.config.axisRange,c=r.config.axisRange,u=l.min,h=l.max,d=c.max,p=c.min,f=t.canvasWidth*i.scaleX/(h-u),g=t.canvasHeight*i.scaleY/(d-p);return{x:u+(o-t.canvasLeft)/f,y:d-(a-t.canvasTop)/g}},i.getOriginalPositions=function(e,t,i,n){var o=this.config,a=o.viewPortConfig,s=a.scaleX,r=a.scaleY,l=a.x,c=a.y,u=y(e,i),h=C(e,i),d=y(t,n),p=C(t,n);return[l+(u=u<0?0:u)/s,c+(d=d<0?0:d)/r,((h=h>o.canvasWidth?o.canvasWidth:h)-u)/s,((p=p>o.canvasHeight?o.canvasHeight:p)-d)/r]},i.updateManager=function(){var e,t,i,n,o,a,s,r,l,c,u,h,d,p,f,g,m,b=this.getDatasets(),x=b.length,y=this.config,w=y.viewPortConfig,E=y._visw,M=this.getChildren("xAxis")[0],P=function(e){return M.getPixel(e,{wrtVisible:!0})},L=M.getAxisConfig("labels").style;if(y.legendClicked)for(e=0;e<x;e+=1)b[e].draw();else!w&&(w=y.viewPortConfig),o=w.oppp,g=w.nvl,h=w.dsi,d=w.dei,a=w.vdl=d-h,s=w.ppl=g?E/g:w.oppl,l=w.step=(r=w.ppp=E/a)<o?k(o/r):1,c=w.lskip=k(C(s,v(L.lineHeight))/r/l),p=w.dsi,f=w.dei,w.offset=0,u=w.norm=p%l,w.ddsi=p-=u,w.ddei=f=f+2*l-u,w._ymin=y._ymin,w._yminValue=y._yminValue,w.x=(P(p)-P(M.getVisibleConfig().minValue)+w.offset)/w.scaleX,f-p>M.getTicksLen()?w.scaleX=1:w.scaleX=M.getTicksLen()/Math.abs(f-p-l-.9),m=M.getVisibleConfig(),i=Math.ceil((m.maxValue-m.minValue+1)/g),n=y.viewPortConfig&&y.viewPortConfig.scaleX,t=Math.max(Math.round(M.getAxisConfig("labelStep")/n),g?i:c*l),M.setLabelConfig({step:t})},i.getParsedLabel=function(e){var t=this.xlabels;return t.parsed[e]||(t.parsed[e]=(0,a.parseUnsafeString)(t.data[e]||""))},i._setAxisScale=function(){this.setScrollType("always")},i.getDSdef=function(){return r["default"]},t}(s["default"]);t["default"]=P},1185:function(e,t,i){"use strict";var n=i(219);t.__esModule=!0,t["default"]=void 0;var o=n(i(238)),a=i(224),s=n(i(555)),r=i(232),l=n(i(1186)),c=a.hasTouch?a.TOUCH_THRESHOLD_PIXELS:a.CLICK_THRESHOLD_PIXELS;(0,r.addDep)({name:"zoomlineAnimation",type:"animationRule",extension:l["default"]});var u=function(e){function t(){return e.apply(this,arguments)||this}(0,o["default"])(t,e);var i=t.prototype;return i.getType=function(){return"dataset"},i.getName=function(){return"zoomLine"},i.__setDefaultConfig=function(){e.prototype.__setDefaultConfig.call(this),this.config.skipIgnorerIndices=[],this.config.showPeakData=0,this.config.showTerminalValidData=0,this.config.minPeakDataLimit=null,this.config.maxPeakDataLimit=null},i._plotConfigure=function(t,i,n){e.prototype._plotConfigure.call(this,t,i,n);var o=this.config,a=this.components.data[t].config.setValue,s=n||this.getFromEnv("xAxis").getTicksLen(),r=o.showTerminalValidData,l=o.showPeakData,c=o.maxPeakDataLimit,u=o.minPeakDataLimit;l&&(c<u&&(a>c&&a<u)||c>u&&(a>c||a<u))&&o.skipIgnorerIndices.push(t),r&&t===s-1&&o.skipIgnorerIndices.push(t)},i.drawPlots=function(){var t=this.getFromEnv("xAxis"),i=this.getFromEnv("chartConfig").viewPortConfig;t.getPixel(i.step)-t.getPixel(0)>=i.amrd?e.prototype.drawPlots.call(this):this.hideAllAnchors()},i._setConfigure=function(t,i){var n=this.config,o=this.getFromEnv("chart"),s=o.config,r=o.getFromEnv("dataSource").chart,l=this.config.JSONData;n.drawanchors=(0,a.pluckNumber)(r.drawanchors,r.showanchors,1),n.anchorradius=(0,a.pluckNumber)(l.anchorradius,r.anchorradius,n.linethickness+2),n.showTerminalValidData=(0,a.pluckNumber)(s.showTerminalValidData,0),n.showPeakData=(0,a.pluckNumber)(s.showPeakData,0),n.showPeakData&&(s.maxPeakDataLimit||s.minPeakDataLimit)&&(n.maxPeakDataLimit=(0,a.pluckNumber)(s.maxPeakDataLimit,Number.MIN_SAFE_INTEGER),n.minPeakDataLimit=(0,a.pluckNumber)(s.minPeakDataLimit,Number.MAX_SAFE_INTEGER)),e.prototype._setConfigure.call(this,t,i)},i.configureAttributes=function(t){e.prototype.configureAttributes.call(this,t);var i,n,o={},s=this.getFromEnv("chart").getFromEnv("dataSource").chart;i=(n=this.config).linethickness+(0,a.pluckNumber)(s.pinlinethicknessdelta,1),o["stroke-width"]=i>0&&i||0,o["stroke-dasharray"]=[3,2],o.stroke=(0,a.hashify)(n.linecolor),o["stroke-opacity"]=n.alpha/100,o["stroke-linejoin"]=n["stroke-linejoin"]="round",o["stroke-linecap"]=n["stroke-linecap"]="round",n.pin=o,n.animation=!1,n.transposeanimduration=0,n.defaultPadding={left:0,right:0}},i.drawLabel=function(){return this},i.isWithinShape=function(e,t,i,n){var o,s,r,l,u,h,d,p,f,g,m,v;if(e)return o=e.config.anchorProps,s=e.config,l=o.borderThickness,this,u=this.components.data,h=(0,a.pluckNumber)(s.dragTolerance,0),d=e._xPos,null!==(p=e._yPos)?(v=e.config.hoverEffects,r=Math.max(o.radius,v&&v.anchorRadius||0,c)+l/2,f=i-d,g=n-p,((m=Math.sqrt(Math.pow(f,2)+Math.pow(g,2)))<=r||m<=h)&&{pointIndex:t,hovered:!0,pointObj:u[t]}):void 0},i.hideAllAnchors=function(){var e,t,i,n=this.components.data;for(t=0,i=n.length;t<i;t++)(e=n[t])&&e.graphics&&e.graphics.element&&e.graphics.element.hide()},i._firePlotEvent=function(e,t,i){var n,o,a,s=this.getFromEnv("chart"),r=this.components.data,l=this.getFromEnv("toolTipController"),c=r[t],u=c.graphics.element,h=this.config.currentToolTip,d=!s.config.useCrossline;switch(a=(n=c.config).setLink,o=n.eventArgs,e){case"fc-mouseover":d&&this._decideTooltipType(t,i),this._rolloverResponseSetter(s,c,i),a&&(u.node.style.cursor="pointer");break;case"fc-mouseout":l.hide(h),this._rolloutResponseSetter(s,c,i),a&&(u.node.style.cursor="default");break;case"fc-click":s.plotEventHandler(u,i,"dataplotclick",o);break;case"fc-mousemove":d&&this._decideTooltipType(t,i)}},i.calculateScrollRange=function(){var e=this.config,t=this.getFromEnv("xAxis"),i=t.getTicksLen(),n=this.getFromEnv("chartConfig").viewPortConfig.step||1;e.scrollMinVal=Math.max(Math.round(t.getVisibleConfig().minValue),0)-n,e.scrollMaxVal=Math.min(Math.round(t.getVisibleConfig().maxValue)+1,i)+n,e.scrollMinValForLabel=Math.max(Math.round(t.getVisibleConfig().minValue),0)-n,e.scrollMaxValForLabel=Math.min(Math.round(t.getVisibleConfig().maxValue)+1,i)+n,e.scrollMinVal-=e.scrollMinVal%n,e.scrollMinValForLabel-=e.scrollMinValForLabel%n},t}(s["default"]);t["default"]=u},1186:function(e,t,i){"use strict";var n=i(219);t.__esModule=!0,t["default"]=void 0;var o={"initial.dataset.zoomLine":n(i(558))["default"]["initial.dataset.line"]};t["default"]=o},1187:function(e,t,i){"use strict";t.__esModule=!0,t["default"]=function(e){var t,i,o,a,s,r,l,c,u=e.getFromEnv("dataSource"),h=u.chart||{},d=e.config,p=u.dataset,f=e.getChildren().canvas[0].getChildren("vCanvas")[0];d.cdm=t=(0,n.pluckNumber)(h.compactdatamode,0),d.cdmchar=i=(0,n.pluck)(h.dataseparator,"|"),p||e.setChartMessage();for(a=0;a<p.length;a++)if(o=p[a],t&&o.data&&o.data.split){for(l=o.data.split(i),s=[],r=0,c=l.length;r<c;r++)s.push({value:l[r]});o.data=s}(0,n.datasetFactory)(f,e.getDSdef(),"dataset",p.length,p),e.iterateComponents((function(e){e.getType&&"dataset"===e.getType()&&e.createPinElem&&e.addEventListener("createpinelements",e.createPinElem)}))};var n=i(224)},1189:function(e,t,i){"use strict";var n=i(219);t.__esModule=!0,t["default"]=void 0;var o=n(i(1190))["default"];t["default"]=o},1190:function(e,t,i){"use strict";var n=i(219);t.__esModule=!0,t["default"]=void 0;var o=n(i(238)),a=n(i(1184)),s=i(607),r=n(i(608)),l=n(i(1191)),c=function(e){function t(){var t;return(t=e.call(this)||this).getSpecificxAxisConf=s.getSpecificxAxisConf,t.getSpecificyAxisConf=s.getSpecificyAxisConf,t.registerFactory("axis",r["default"],["canvas"]),t.registerFactory("dataset",l["default"],["vCanvas"]),t}(0,o["default"])(t,e),t.getName=function(){return"ZoomLineDy"};var i=t.prototype;return i.getName=function(){return"ZoomLineDy"},i.__setDefaultConfig=function(){e.prototype.__setDefaultConfig.call(this);var t=this.config;t.friendlyName="Zoomable and Panable Multi-series Dual-axis Line Chart",t.defaultDatasetType="zoomline",t.isdual=!0,t.syncaxislimits=0},i._feedAxesRawData=function(){return s._feedAxesRawData.call(this)},t}(a["default"]);c.prototype.setAxisDimention=s.setAxisDimention;var u=c;t["default"]=u},1191:function(e,t,i){"use strict";t.__esModule=!0,t["default"]=function(e){var t,i,a,s,r,l,c,u,h,d=e.getFromEnv("dataSource"),p=d.chart||{},f=e.config,g=d.dataset,m=e.getChildren().canvas[0],v=[],b=[],x=[],C=[],y=m.getChildren("vCanvas");f.cdm=t=(0,n.pluckNumber)(p.compactdatamode,0),f.cdmchar=i=(0,n.pluck)(p.dataseparator,"|"),g||e.setChartMessage();for(s=0;s<g.length;s++)if(a=g[s],t&&a.data&&a.data.split){for(c=a.data.split(i),r=[],l=0,u=c.length;l<u;l++)r.push({value:c[l]});a.data=r}for(s=0;s<g.length;s++)h=g[s],"s"===(h.parentyaxis||"").toLowerCase()?(C.push(h),b.push(s)):(x.push(h),v.push(s));x.length?(0,n.datasetFactory)(y[0],e.getDSdef(),"dataset_line",x.length,x,v):o(y[0]);C.length?(0,n.datasetFactory)(y[1],e.getDSdef(),"dataset_line",C.length,C,b):o(y[1]);e.iterateComponents((function(e){e.getType&&"dataset"===e.getType()&&e.createPinElem&&e.addEventListener("createpinelements",e.createPinElem)}))};var n=i(224),o=function(e){e&&e.iterateComponents((function(e){"dataset"===e.getType()&&e.remove()}))}},1192:function(e,t,i){"use strict";var n=i(219);t.__esModule=!0,t["default"]=void 0;var o,a,s,r=n(i(242)),l=n(i(238)),c=i(224),u=i(240),h=Math,d=h.max,p=h.min,f=0,g="ontouchstart"in window,m={zoomlinedy:!0,zoomline:!0},v=function(){this.remove()},b=function(){this.remove()},x=function(e,t,i){return i.getFromEnv("animationManager").setAnimation({el:"group",attr:{name:e},container:t,state:"appearing",component:i,label:"group"})},C=function(e){var t,i,n,a={},s=Number.POSITIVE_INFINITY;for(t=0;t<this.length;t++)n=(i=this[t]-e)<0?o.NEG:o.POS,(i=Math.abs(i))<=s&&(s=i,a.absValue=i,a.noScaleSide=n);return a},y=function(e){function t(){var t,i;return(t=e.call(this)||this).config.handlers=(i=(0,r["default"])(t),{onMouseOut:function(){i.hide(),i.position=void 0},onMouseMove:function(e){var t,n,o,a,s,r,l,u,h,d,p,f;i.disabled||i._mouseIsDown&&!g||(n=i.getZoomInfo(),o=i.getGraphicalElement("line"),a=n.step,r=(s=i.chart).getChildren("xAxis")[0],u=(l=s.get("config")).canvasLeft,h=(0,c.getMouseCoordinate)(i.getFromEnv("chart-container"),e,s).chartX,d=r.getVisibleConfig(),p=r.getAxisConfig("axisDimention").x-u,f=(f=i.getDataIndexFromPixel(Math.round(h)))+((t=f%a)>a/2?a-t:-t),h=r.getPixel(f,{wrtVisible:!0})-p-u,h-=n.offset,o.transform(["T",Math.round(h),0]),i.hidden&&0!==l.crossline.enabled&&i.show(),(f<d.minValue||f>d.maxValue)&&i.hide(),(f!==i.position||i.hidden)&&(i.position=f,i.lineX=h,i.updateLabels()))}}),t}(0,l["default"])(t,e);var i=t.prototype;return i.configureAttributes=function(e){this.config.options=e},i.draw=function(){var e,t,i,n,o,a,s,r,l={},u=this.getFromEnv("chart"),h=u.getFromEnv()["number-formatter"],d=u.config,p=this.left=u.getChildren("xAxis")[0].getAxisConfig("axisDimention").x,f=this.top=d.canvasTop,g=this.height=d.canvasHeight,m=this._visout=d._visout,C=[],y=this.getFromEnv("animationManager"),k=this.getGraphicalElement("line"),w=this.config.options,E=w.labelstyle,M=w.valuestyle,P=u.getChildren("yAxis")[0],L=P.getLimit(),_=u.getChildren("yAxis")[1],S=_&&_.getLimit(),T=this.getGraphicalElement("labels"),F=[],N=this.getGraphicalElement("positionLabel"),D=this.getLinkedParent().getChildContainer("crosslineBottom"),A=this.getLinkedParent().getChildContainer("crosslineTop");if(u.iterateComponents((function(e){e.getType&&"dataset"===e.getType()&&!e.getState("removed")&&C.push(e)})),this.plots=C,this.width=d._visw,o=this.group,(o=this.getContainer("valueGroup"))||(o=this.addContainer("valueGroup",x("crossline-value-group",A,this))),(r=this.getContainer("labelGroup"))||(r=this.addContainer("labelGroup",x("crossline-label-group",A,this))).insertBefore(u.getChildContainer("plotGroup")),this.container=D,o.attr({transform:["T",p,d._ymin]}).css(M),a=y.setAnimation({el:k||"path",container:D,doNotRemove:!0,attr:(0,c.extend2)({path:["M",p,f,"l",0,g]},w.line)}).toBack(),k||this.addGraphicalElement("line",a,!1),w.labelEnabled&&(l.x=m,l.y=f+g+(d.scrollHeight||0)+2.5,l["vertical-align"]="top",l.direction=d.textDirection,l.text=""),s=y.setAnimation({el:N||"text",attr:w.labelEnabled&&l,css:w.labelEnabled&&E,container:r,doNotRemove:!0,callback:!w.labelEnabled&&v}),!N&&w.labelEnabled&&this.addGraphicalElement("positionLabel",s,!1),this.hide(),this.ppixelRatio=-P.config.axisDimention.axisLength/P.getVisibleLength(),this.spixelRatio=_&&-_.config.axisDimention.axisLength/_.getVisibleLength(),this.yminValue=d._yminValue,this.pyaxisminvalue=L.min,this.pyaxismaxvalue=L.max,this.syaxisminvalue=S&&S.min,this.syaxismaxvalue=S&&S.max,this.positionLabels=d.xlabels||{data:[],parsed:[]},this.chart=u,e=0,w.valueEnabled){for(t=C.length;e<t;e+=1)i=C[e],n=(0,c.hashify)(i.config.linecolor),l.x=0,l.y=m,l.fill=n,l.direction=d.textDirection,l.text="",l["text-bound"]=M["text-bound"],l.lineHeight=M.lineHeight,F[e]=y.setAnimation({el:T&&T[e]||"text",container:o,doNotRemove:!0,attr:l}),(!T||!T[e])&&this.addGraphicalElement("labels",F[e],!0);this.numberFormatter=h}for(t=T&&T.length;e<t;e++)y.setAnimation({el:T[e],component:this,doNotRemove:!0,callback:b});T&&T.splice(C.length)},i.getType=function(){return"crossline"},i.getName=function(){return"crossLine"},i.getZoomInfo=function(){return this.getFromEnv("chartConfig").viewPortConfig},i.getDataIndexFromPixel=function(e){return Math.round(this.getFromEnv("chart").getChildren("xAxis")[0].getValue(e,{wrtVisible:!0}))},i.getPositionLabel=function(e){var t=this.getFromEnv("chart").getChildren("xAxis")[0].getLabel(e);return t&&t.label||""},i.disable=function(e){return void 0!==e&&(this.disabled=!!e,this.disabled&&this.visible&&this.hide()),this.disabled},i.updateLabels=function(){var e=this,t=e.getFromEnv("animationManager"),i=e.getGraphicalElement("labels"),n=e.getGraphicalElement("positionLabel"),r=e.plots,l=e.width,c=e.position,u=e.lineX,h=Math.floor(u),g=e.dummyText,m=e.numberFormatter,v=e.pyaxisminvalue,b=e.pyaxismaxvalue,x=e.syaxisminvalue,C=e.syaxismaxvalue,y=function(e){var t,i,n=e.getFromEnv("chart").getChildren("yAxis")[0].getPixel(e.yminValue),s={};o={},a=-1*e.height;try{Object.defineProperty(o,"POS",{enumerable:!1,configurable:!1,get:function(){return 1}}),Object.defineProperty(o,"NEG",{enumerable:!1,configurable:!1,get:function(){return-1}})}catch(r){o.POS=1,o.NEG=-1}try{Object.defineProperty(s,"top",{enumerable:!1,configurable:!1,get:function(){return a}}),Object.defineProperty(s,"bottom",{enumerable:!1,configurable:!1,get:function(){return n}})}catch(r){s.top=a,s.bottom=n}return s.init=function(e){var n;for(a+=(f=e+2)/2,i=Math.floor(Math.abs(a)/f),t=new w(i),n=0;n<i;n++)t.pos.push(0)},s.occupy=function(e,i){var n=Math.floor(Math.abs(a-e)/f);t&&t.attachShift(e,n,i)},s}(e);if(s=e._visout,i){g||(g=e.dummyText=e.getFromEnv("paper").text().hide()),g.attr({text:m.yAxis("0")}),g&&y.init(g.getBBox().height,i.length);var k=[];i.forEach((function(t,i){if(!r[i].getState("removed")){var n,o=r[i],a=o.components.data[c]&&o.components.data[c].config.setValue,l=o.config.parentYAxis;n=void 0===a||!o.getState("visible")||(l?a>C||a<x:a>b||a<v)?s:l?(a-x)*e.spixelRatio:(a-v)*e.ppixelRatio,k.push({value:a,labelYPos:n,label:t})}})),k.sort((function(e,t){return t.value-e.value})),k.forEach((function(e){y.occupy(e.labelYPos,e.label)}))}i&&i.forEach((function(i,n){if(!r[n].getState("removed")){var o,a,s,f,g,v,b=r[n],x=b.components.data[c]&&b.components.data[c].config.setValue,C=m[b.config.parentYAxis?"sYAxis":"yAxis"](x);C?(i.attr({text:C}),f=(s=(a=(o=i.getBBox())&&o.width)&&.5*a)&&s+10,v=i.calcY,g=d(0,p(h,l)),void 0!==v&&void 0!==g&&t.setAnimation({el:i,attr:{x:g,y:v,"text-anchor":(u<=f?"start":u+f>=l&&"end")||"middle","text-bound":["rgba(255,255,255,0.8)","rgba(0,0,0,0.2)",1,2.5]},doNotRemove:!0,component:e})):i.attr({x:-l})}})),n&&t.setAnimation({el:n,attr:{x:u+e.left,text:e.getPositionLabel(c),"text-bound":["rgba(255,255,255,1)","rgba(0,0,0,1)",1,2.5]},component:e})},i.show=function(){if(!this.disabled){this.hidden=!1;var e=this.getContainer("valueGroup"),t=this.getGraphicalElement("positionLabel"),i=this.getGraphicalElement("line");e&&e.show(),t&&t.show(),i&&i.show()}},i.hide=function(){this.hidden=!0;var e=this.getContainer("valueGroup"),t=this.getGraphicalElement("positionLabel"),i=this.getGraphicalElement("line");e&&e.hide(),t&&t.hide(),i&&i.hide()},i.dispose=function(){var e;for(e in this)this.hasOwnProperty(e)&&delete this[e]},t}(u.ComponentInterface);var k=function(){function e(){this.y=0,this.lRef=void 0,this.__shift=0,this.__index=0}var t=e.prototype;return t.applyShift=function(e){this.__shift=e,this.lRef.calcY=this.y+=e*f},t.applyDirectIndex=function(e){this.__index=e,this.lRef.calcY=this.y=a-e*f*-1},e}(),w=function(){function e(e){this.holes=[],this.pos=[];for(var t=0;t<e;t++)this.holes.push(t)}var t=e.prototype;return t.repositionHoles=function(){var e,t=0,i=this.pos;for(this.holes.length=0,e=0;e<i.length;e++)!i[e]&&(this.holes[t++]=e)},t.attachShift=function(e,t,i){var n,a,r,l,c,u,h,d=this.pos,p=d.length;if(e!==s){if(n=d[u=t>p-1?p-1:t],(l=new k).y=e,l.lRef=i,!n)return l.applyDirectIndex(u),d.splice(u,1,l),void this.holes.splice(this.holes.indexOf(u),1);if(a=u+(h=C.call(this.holes,u)).absValue*h.noScaleSide,h.noScaleSide===o.POS)return l.applyDirectIndex(a),d.splice(a,1,l),this.holes.splice(this.holes.indexOf(a),1),a;if(h.noScaleSide===o.NEG){for(r=d.splice(a+1,d.length-1),d.pop(),r.forEach((function(e){e&&e.applyShift(-1)})),[].push.apply(d,r),c=a;d[c];)c++;return d.push(0),this.repositionHoles(),c+=(h=C.call(this.holes,c)).absValue*h.noScaleSide,l.applyDirectIndex(c),d.splice(c,1,l),this.repositionHoles(),d.length-1}}else i.calcY=s},e}(),E={extension:function(e){e.addEventListener("instantiated",(function(e){if("canvas"===e.sender.getName()){var t,i,n,o=e.sender;o.registerFactory("crossLineManager-zoomline",(function(){var a,s=e.sender.getFromEnv("chart"),r=s&&s.getName();r&&m[r.toLowerCase()]&&((i=s.config.crossline)&&0!==i.enabled&&1===s.config.useCrossline?n=1:(i&&(i.enabled=0),n=0),(0,c.componentFactory)(o,y,"crossLine",n,[i]),n&&(a=o.getChildren("crossLine")[0],t=a.config.handlers,a.addExtEventListener("fc-mousemove",t.onMouseMove,o),a.addExtEventListener("fc-mouseover",t.onMouseMove,o),a.addExtEventListener("fc-dragstart",(function(e){t.onMouseOut(e),a.removeExtEventListener("fc-mousemove",t.onMouseMove,o)}),o),a.addExtEventListener("fc-dragend",(function(){a.addExtEventListener("fc-mousemove",t.onMouseMove,o)}),o),a.addExtEventListener("fc-mouseout",(function(e){t.onMouseOut(e)}),o)))}))}}))},name:"crossline-manager",type:"extension",requiresFusionCharts:!0};t["default"]=E}}])}));
//# sourceMappingURL=http://localhost:3052/3.18.0/map/eval/fusioncharts.zoomline.js.map