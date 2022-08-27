let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@45.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            list1: [{
                title: '步骤一',
                subTitle: '简略说明',
            }, {
                title: '步骤二',
                subTitle: '简略说明',
            }, {
                title: '步骤三',
                subTitle: '简略说明',
            }],
            list2: [{
                title: '第一个时段',
                subTitle: '子标题简略说明',
                icon: '<i class="mc-iconfont">&#xe674;</i>'
            }, {
                title: '第二个时段',
                subTitle: '子标题简略说明',
                icon: '<i class="mc-iconfont">&#xe671;</i>'
            }, {
                title: '第三个时段',
                subTitle: '子标题简略说明',
                icon: '<i class="mc-iconfont">&#xe639;</i>'
            }]
        });
    }
});