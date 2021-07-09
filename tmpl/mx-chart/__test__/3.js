let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        let chartData = [
            {"time":"2020-03-21","pv":10,"uv":11,"click":12,"ppc":45},
            {"time":"2020-03-22","pv":20,"uv":32,"click":14,"ppc":34},
            {"time":"2020-03-23","pv":30,"uv":15,"click":12,"ppc":65},
            {"time":"2020-03-24","pv":15,"uv":23,"click":21,"ppc":23},
            {"time":"2020-03-25","pv":28,"uv":15,"click":15,"ppc":12}
        ];
        var options = {
            coord: {
                type: "rect",
                xAxis: {
                    field: 'time'
                }
            },
            graphs: [
                {
                    type: "line",
                    field: ["uv", "pv" ]
                }
            ],
            legend:{}
        };
        this.updater.digest({
            chartData,
            options
        });
    }
});