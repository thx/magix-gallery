let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@custom.less');

module.exports = Base.extend({
    tmpl: '@custom.html',
    init(e) {
        this.updater.set({
            ...e.data,
            viewId: this.id
        });
    },
    render() {
        let chartData = [
            ['time', 'click', 'uv', 'd1', 'd1vs', 'd2', 'd2vs'],
            ['2017-03-21', 10, 23, 10, 11, 12, 45],
            ['2017-03-22', 20, 65, 20, 32, 14, 24],
            ['2017-03-23', 40, 45, 30, 14, 12, 76],
            ['2017-03-24', 18, 123, 15, 23, 18, 34],
            ['2017-03-25', 32, 32, 28, 16, 28, 26]
        ];

        // let chartOptions = this.getChartOptions(4);
        // chartOptions.graphs[0].field = ['click', 'uv'];
        let chartOptions = this.getChartOptions(7);
        this.updater.digest({
            chartData,
            chartOptions
        });
    }
});