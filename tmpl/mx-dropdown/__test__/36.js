let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@36.html',
    mixins: [Form, Validator],
    render() {
        let list = [{
            value: 1,
            text: '<img style="width: 50px; height: 50px; margin: 8px 4px 8px 0;" src="https://img.alicdn.com/bao/uploaded/i2/13498885/O1CN01yAamtY2FVNaDTQjt2_!!0-saturn_solar.jpg"/>2019夏装新款韩版女装宽松打底潮上衣短袖T恤OM80147婏'
        }, {
            value: 2,
            text: '<img style="width: 50px; height: 50px; margin: 8px 4px 8px 0;" src="https://img.alicdn.com/bao/uploaded/i3/13498885/O1CN01Zo87cQ2FVNaHt6Bt2_!!0-saturn_solar.jpg"/>韩都衣舍2019夏装新款女装韩版显瘦打底衫圆领套头T恤IG8397僥'
        }, {
            value: 3,
            text: '<img style="width: 50px; height: 50px; margin: 8px 4px 8px 0;" src="https://img.alicdn.com/bao/uploaded/i2/13498885/TB2NE.eoA9WBuNjSspeXXaz5VXa_!!0-saturn_solar.jpg"/>韩都衣舍2019夏装新款女装韩版宽松打底上衣潮短袖T恤JW12746筱'
        }];
        this.updater.digest({
            selected: '',
            list
        });
    }
});