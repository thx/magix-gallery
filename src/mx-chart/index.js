let Magix = require('magix');
let Chartx = require('../../chartpark/index');
Chartx = Chartx.default || Chartx;
let $ = require('$');

function stringify(obj){
    return JSON.stringify(obj, function(key, value){
        if(typeof value === 'function'){
            return value.toString();
        }
        return value;
    });
}

module.exports = Magix.View.extend({
    init(options) {
        let me = this;
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
    assign(extra, ctrl) {
        if (ctrl) {
            ctrl.deep = false;
        }
        let {
            chartId: oldChartId,
            options: oldOptions,
            data: oldData,
            variables: oldVariables
        } = this.updater.get();

        let {chartId, options, data, variables, force} = extra;
        this.updater.set({chartId, options: {...options}, data: [...data], variables: {...variables}});
        let chart = this.capture('chart');
        
        let newChartOptions = Chartx.getOptions(chartId, options, data, variables) || options;

        if (!chart) {
            chart = Chartx.create(this.id, data, newChartOptions);
            this.capture('chart', chart);
            return false;
        }

        if (force || oldChartId !== chartId) {
            chart.reset(newChartOptions, data);
            return false;
        }

        let userOptionsChange = stringify(options) !== stringify(oldOptions) || stringify(variables) !== stringify(oldVariables);
        let dataChange = stringify(data) !== stringify(oldData);

        if (userOptionsChange) {
            chart.reset(newChartOptions, data);
            return false;
        }

        if (dataChange) {
            chart.resetData(data);
            return false;
        }

        return false;
    },
    render() {
    },
    '$doc<navslidend>' () {
        Chartx.resize();
    },
    '$win<resize>' () {
        Chartx.resize();
    }
});