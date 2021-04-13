let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        let list = [{
            text: '选项1',
            value: 1,
            tip: '选项说明1文案一行或者两行高度一致',
            icon: '<img src="//img.alicdn.com/tfs/TB1OZxdaQT2gK0jSZFkXXcIQFXa-168-168.png" />',
        }, {
            text: '选项2',
            value: 2,
            tip: '选项说明2文案一行或者两行高度一致',
            icon: '<img src="https://img.alicdn.com/tfs/TB14KngWeH2gK0jSZJnXXaT1FXa-168-168.png" />',
        }, {
            text: '选项3',
            value: 3,
            tip: '选项说明3文案一行或者两行高度一致',
            icon: '<img src="//img.alicdn.com/tfs/TB1lDjaa81D3KVjSZFyXXbuFpXa-168-168.png" />',
            subs: [{
                text: '选项31',
                value: 31,
                tip: '选项说明31文案一行或者两行高度一致',
            }, {
                text: '选项32',
                value: 32,
                tip: '选项说明32文案一行或者两行高度一致',
            }]
        }];

        this.updater.digest({
            list,
            selected: list[0].value
        });
    },

    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected
        })
    }
});