!function(e){"object"==typeof module&&"undefined"!=typeof module.exports?module.exports=e:e()}((function(){(window.webpackJsonpFusionCharts=window.webpackJsonpFusionCharts||[]).push([[12],{1271:function(e,t,l){"use strict";var a=l(249);t.__esModule=!0,t["default"]=void 0;var n=a(l(1272));t.OverlapperColumn2D=n["default"];var o=a(l(1123)),i={name:"overlappedcolumn2d",type:"package",requiresFusionCharts:!0,extension:function(e){e.addDep(o["default"]),e.addDep(n["default"])}};t["default"]=i},1272:function(e,t,l){"use strict";var a=l(249);t.__esModule=!0,t["default"]=void 0;var n=a(l(1273))["default"];t["default"]=n},1273:function(e,t,l){"use strict";var a=l(249);t.__esModule=!0,t["default"]=void 0;var n=a(l(268)),o=a(l(599)),i=a(l(1274)),r=a(l(1270)),s=a(l(601)),u=function(e){function t(){var t;return(t=e.call(this)||this).eiMethods={},t.registerFactory("dataset",s["default"],["vCanvas"]),t}(0,n["default"])(t,e);var l=t.prototype;return l.getName=function(){return"OverlappedColumn2D"},t.getName=function(){return"OverlappedColumn2D"},l.__setDefaultConfig=function(){e.prototype.__setDefaultConfig.call(this),this.config.friendlyName="Multi-series Overlapped Column Chart",this.config.defaultDatasetType="column",this.config.enablemousetracking=!0},l.getDSdef=function(){return i["default"]},l.getDSGroupdef=function(){return r["default"]},t}(o["default"]);t["default"]=u},1274:function(e,t,l){"use strict";var a=l(249);t.__esModule=!0,t["default"]=void 0;var n=a(l(268)),o=l(254);function i(e,t){var l,a,n,o,i=e.y,r=e.height;for(l=0,a=t.length;l<a;l++)if(o=t[l].height,n=t[l].y,t[l].labelShown&&i+r>=n&&n+o>=i)return!0;return!1}var r=function(e){function t(){var t;return(t=e.call(this)||this)._labeldimensionMap={},t}return(0,n["default"])(t,e),t.prototype.drawLabel=function(e,t){var l,a,n,r,s,u,f,p,d,h,c,b,g,m=this.getFromEnv("chart"),v=this.getFromEnv("animationManager"),w=this.getFromEnv("toolTipController"),y=m.config,S=this.getFromEnv("xAxis"),_=this.getFromEnv("paper"),x=this.getState("visible"),k=m.getFromEnv("smartLabel"),C=m.config.dataLabelStyle,D=this.config,M=S.getTicksLen(),F=this.components,O=F.data,E=F.pool,N=y.rotatevalues?270:0,L={},T=this.getJSONIndex(),A=this.getSkippingInfo&&this.getSkippingInfo(),I=A&&A.skippingApplied,J=A&&A.labelDraw||[],V=J.length,W=(0,o.pluckNumber)(e,0),G=(0,o.pluckNumber)(t,I?V:M),z=V===Math.abs(G-(W+1)),R=function(){this.attr({"text-bound":[]}),this.hide()},j=function(){this.show()};for((g=this.getContainer("labelGroup")).css({fontFamily:C.fontFamily,fontSize:C.fontSize,fontWeight:C.fontWeight,fontStyle:C.fontStyle}),g.show(),k.useEllipsesOnOverflow(m.config.useEllipsesWhenOverflow),k.setStyle(C),s=W;s<G;s++)f=(p=(a=O[r=I&&z?J[s]:s])&&a.config)&&p.setValue,void 0!==a&&null!=f&&!0!==p.labelSkip?(u=a.graphics)&&(d=p.showValue,b=m.getDatasets().map((function(e){return e.getJSONIndex()<T&&e._labeldimensionMap[s]})).filter(Boolean),D.showValues&&p.showValue&&(l=i(L={x:p.props.label.attr.x,y:p.props.label.attr.y,width:p._state.labelWidth,height:p._state.labelHeight},b)),this._labeldimensionMap[s]=L,d&&null!==f&&!l?((n=p.props.label.attr).transform=_.getSuggestiveRotation(N,n.x,n.y),(h=u.label)||E&&E.label[0]&&(h=u.label=E.label[0],E.label.splice(0,1)),(h=v.setAnimation({el:u.label||"text",attr:n,component:this,label:"plotLabel",index:r,container:g,callback:x?j:R}))&&h.outlineText(D.showTextOutline,n.fill),y.showtooltip&&h.abbrArr&&h.abbrArr.length&&w.enableToolTip(h,void 0),this._labeldimensionMap[s].labelShown=!!x,u.label||(u.label=this.addGraphicalElement("plotLabel",h,!0))):(u.label&&v.setAnimation({el:u.label,component:this,doNotRemove:!0,callback:R,label:"plotLabel"}),this._labeldimensionMap[s].labelShown=!1)):(p&&delete p.labelSkip,(c=a&&a.graphics)&&c.label&&c.label.hide());D.labelDrawn=!0},t}(a(l(572))["default"]);t["default"]=r}}])}));
//# sourceMappingURL=http://localhost:3052/3.21.1/map/eval/fusioncharts.overlappedcolumn2d.js.map