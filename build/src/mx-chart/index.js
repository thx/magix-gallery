/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-chart/index",["magix","../../chartpark/index","$"],(require,exports,module)=>{
/*Magix,Chartx,$*/

var Magix = require("magix");
var Chartx = require("../../chartpark/index");
var $ = require("$");
function stringify(obj) {
    return JSON.stringify(obj, function (key, value) {
        if (typeof value === 'function') {
            return value.toString();
        }
        return value;
    });
}
module.exports = Magix.View.extend({
    init: function (options) {
        var me = this;
        me.assign(options);
    },
    /**
     * 检测当前传入属性是否变化，变化后则重绘组件
     * @param {Object} extra 用户传入属性
     * @param {number} extra.chartId 可选、chartpark 图表id; 若不传入chartId则必须传入options
     * @param {Array} extra.data 必选、绘制图表使用的数据
     * @param {Object} extra.variables 可选、绘制图表使用的变量
     * @param {Boolean} extra.force 可选、是否强制重绘，如无特殊需求，不建议开启
     * @param {Object} extra.options 可选、绘制图表使用的配置；无chartId时，使用options直接作为图表配置；若同时传入chartId，则使用options覆盖chartpark中的图表配置
     * @param {Object} ctrl Magix传入
     * @return {Boolean} 是否重绘组件，true则重绘
     */
    assign: function (extra, ctrl) {
        if (ctrl) {
            ctrl.deep = false;
        }
        var _a = this.updater.get(), oldChartId = _a.chartId, oldOptions = _a.options, oldData = _a.data, oldVariables = _a.variables;
        var chartId = extra.chartId, options = extra.options, data = extra.data, variables = extra.variables, force = extra.force;
        this.updater.set({ chartId: chartId, options: options, data: data, variables: variables });
        var chart = this.capture('chart');
        if (!chart) {
            var newChartOptions = Chartx.getOptions(chartId, options, data, variables);
            chart = Chartx.create(this.id, data, newChartOptions);
            this.capture('chart', chart);
            return false;
        }
        if (force || oldChartId !== chartId) {
            var newChartOptions = Chartx.getOptions(chartId, options, data, variables);
            chart.reset(newChartOptions, data);
        }
        else {
            var userOptionsChange = stringify(options) !== stringify(oldOptions)
                || stringify(variables) !== stringify(oldVariables);
            var dataChange = stringify(data) !== stringify(oldData);
            if (userOptionsChange) {
                var newChartOptions = Chartx.getOptions(chartId, options, data, variables);
                chart.reset(newChartOptions, data);
            }
            else if (dataChange) {
                chart.resetData(data);
            }
        }
        return false;
    },
    render: function () {
    },
    '$doc<navslidend>': function () {
        Chartx.resize();
    },
    '$win<resize>': function () {
        Chartx.resize();
    }
});

});