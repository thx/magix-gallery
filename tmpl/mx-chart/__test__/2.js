let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        let chartData = [
            {"time":"2017-03-21","pv":10,"uv":11,"click":12,"ppc":45},
            {"time":"2017-03-22","pv":20,"uv":32,"click":14,"ppc":34},
            {"time":"2017-03-23","pv":30,"uv":15,"click":12,"ppc":65},
            {"time":"2017-03-24","pv":15,"uv":23,"click":21,"ppc":23},
            {"time":"2017-03-25","pv":28,"uv":15,"click":15,"ppc":12}
        ];
        var fieldsList = [
            {text: 'pv', value: 'pv'},
            {text: 'uv', value: 'uv'},
        ]
        let chartId = 1;
        this.updater.digest({
            fieldsList,
            variables: {
                yField: 'pv'
            },
            chartData,
            chartId
        });
    },
    'select<change>'(e) {
        // 触发
        this.updater.digest({
            variables: {
                yField: e.value
            }
        });
    }
});