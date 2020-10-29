let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@chartpark-id.html',
    render() {
        let chartData = [
            ['time', 'click', 'ppc'],
            ['2017-03-21', 10, 23],
            ['2017-03-22', 20, 65],
            ['2017-03-23', 40, 45],
            ['2017-03-24', 18, 123],
            ['2017-03-25', 32, 32]
        ];

        this.updater.digest({
            chartData
        });
    }
});