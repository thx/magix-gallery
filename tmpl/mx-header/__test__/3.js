let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            loginView: '@./login',
            rightView: '@./right',
            navs: [{
                value: 1,
                text: '本页打开1'
            }, {
                value: 2,
                text: '支持二级',
                subs: [{
                    value: 21,
                    text: '本页打开'
                }, {
                    value: 22,
                    text: '外链打开',
                    link: 'https://www.taobao.com/' //直接外链打开
                }]
            }, {
                value: 3,
                text: '支持三级',
                subs: [{
                    value: 31,
                    text: '本页打开1',
                    group: '分组1'
                }, {
                    value: 32,
                    text: '本页打开2',
                    group: '分组1'
                }, {
                    value: 33,
                    text: '本页打开3',
                    group: '分组1'
                }, {
                    value: 34,
                    text: '本页打开4',
                    group: '分组1'
                }, {
                    value: 35,
                    text: '本页打开5',
                    group: '分组2'
                }, {
                    value: 36,
                    text: '外链打开',
                    link: 'https://www.taobao.com/',
                    group: '分组2'
                }]
            }, {
                value: 4,
                text: '本页打开2',
                tag: 'NEW'
            }, {
                value: 5,
                text: '外链打开',
                link: 'https://www.taobao.com/',
                // tag: '<i class="mc-iconfont">&#xe619;</i>',
                tag: '<img src="https://img.alicdn.com/tfs/TB14QSlBpP7gK0jSZFjXXc5aXXa-603-134.png" />',
                tagColor: '#4d7fff'
            }]
        });
    }
});