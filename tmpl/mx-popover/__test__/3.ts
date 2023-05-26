import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@3.html',
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
            chartOptions,
            custom: {
                list: [{
                    name: '消耗',
                    key: 'charge',
                    type: 'double'
                }, {
                    name: '展现量',
                    key: 'adPv',
                    type: 'integer'
                }, {
                    name: '点击量',
                    key: 'click',
                    type: 'integer'
                }, {
                    name: '点击率',
                    key: 'ctr',
                    type: 'percent'
                }]
            }
        });
    }
});