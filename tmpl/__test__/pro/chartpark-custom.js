let Magix = require('magix');
let $ = require('$');
let Chartx = require('./chartpark/index');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@chartpark-custom.html',
    render() {
        let chartData = [
            ['time', 'click', 'uv'],
            ['2017-03-21', 10, 23],
            ['2017-03-22', 20, 65],
            ['2017-03-23', 40, 45],
            ['2017-03-24', 18, 123],
            ['2017-03-25', 32, 32]
        ];

        let chartOptions = this.getChartOptions(4);
        chartOptions.graphs[0].field = ['click', 'uv'];

        this.updater.digest({
            chartData,
            chartOptions
        });
    },
    getChartOptions(id) {
        return $.extend(true, {}, Chartx.default.getOptions(id))
    }
});