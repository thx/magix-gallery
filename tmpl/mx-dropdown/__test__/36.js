let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@36.html',
    render() {
        let list1 = [{
            value: 1,
            text: '<img style="width: 50px; height: 50px; margin: 8px 4px 8px 0;" src="https://img.alicdn.com/bao/uploaded/i2/13498885/O1CN01yAamtY2FVNaDTQjt2_!!0-saturn_solar.jpg"/>2019夏装新款韩版女装宽松打底潮上衣短袖T恤OM80147'
        }, {
            value: 2,
            text: '<img style="width: 50px; height: 50px; margin: 8px 4px 8px 0;" src="https://img.alicdn.com/bao/uploaded/i3/13498885/O1CN01Zo87cQ2FVNaHt6Bt2_!!0-saturn_solar.jpg"/>韩都衣舍2019夏装新款女装韩版显瘦打底衫圆领套头T恤IG8397'
        }];

        let list2 = [{
            value: 1,
            text: '<i class="mc-iconfont mr5">&#xe670;</i>测试信息'
        }, {
            value: 2,
            text: 'logo'
        }, {
            value: 3,
            text: '123456'
        }];

        this.updater.digest({
            list1,
            selected1: list1[0].value,
            list2,
            selected2: list2[0].value,
        });
    }
});