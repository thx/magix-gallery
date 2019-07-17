/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/pro/chartpark/demo",["magix","$","./index"],(require,exports,module)=>{
/*magix_1,$,index_1*/

"use strict";
/**
 * 每次项目各自的通用方法定义
 * 具体页面继承该View
 * 包括挂在在view上的接口管理的fetch，save
 */
var magix_1 = require("magix");
var $ = require("$");
var index_1 = require("./index");
$(document).on('navslidend', function () {
    index_1["default"].resize();
});
$(window).on('resize', function () {
    index_1["default"].resize();
});
module.exports = magix_1["default"].View.extend({
    init: function (options) {
        var me = this;
        me.updater.snapshot();
        me.assign(options);
    },
    assign: function (data, ctrl) {
        var me = this;
        if (ctrl)
            ctrl.deep = false;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        var altered = me.updater.altered();
        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        me.updater.set(data);
        //如果数据没变化,则设置新的数据后再次检测
        if (!altered)
            altered = me.updater.altered();
        if (altered) {
            me.updater.snapshot();
            return true;
        }
        return false; //如果数据
    },
    render: function () {
        var me = this;
        var da = me.updater.get();
        var data = da.data;
        var options = da.options; //options由业务里自行获取
        //如果指定了chartId，则options直接来自chartPark配置
        if (da.chartId) {
            options = index_1["default"].getOptions(da.chartId);
        }
        var chart = this.capture('chart');
        if (chart) {
            chart.destroy();
        }
        chart = index_1["default"].create(this.id, data, $.extend(true, {}, options));
        this.capture('chart', chart);
    }
});

});