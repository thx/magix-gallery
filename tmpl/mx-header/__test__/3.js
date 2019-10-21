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
                text: '本页打开2',
                tag: 'NEW'
            }, {
                value: 4,
                text: '外链打开',
                link: 'https://www.taobao.com/'
            }]
        });
    }
});