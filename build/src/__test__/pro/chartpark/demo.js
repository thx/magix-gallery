define("__test__/pro/chartpark/demo",["magix","$","./index"],(t,e,a)=>{"use strict";var i=t("magix"),r=t("$"),d=t("./index");r(document).on("navslidend",function(){d.default.resize()}),r(window).on("resize",function(){d.default.resize()}),a.exports=i.default.View.extend({init:function(t){this.updater.snapshot(),this.assign(t)},assign:function(t,e){e&&(e.deep=!1);var a=this.updater.altered();return this.updater.set(t),a||(a=this.updater.altered()),!!a&&(this.updater.snapshot(),!0)},render:function(){var t=this.updater.get(),e=t.data,a=t.options;t.chartId&&(a=d.default.getOptions(t.chartId));var i=this.capture("chart");i&&i.destroy(),i=d.default.create(this.id,e,r.extend(!0,{},a)),this.capture("chart",i)}})});