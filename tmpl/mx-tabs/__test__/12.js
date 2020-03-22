let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@12.less');

module.exports = Base.extend({
    tmpl: '@12.html',
    render() {
        let viewId = this.id;

        this.updater.digest({
            viewId,
            list: [{
                value: `${viewId}_1`,
                text: '红色模块',
                tag: 'New'
            }, {
                value: `${viewId}_2`,
                text: '绿色模块',
                tag: 'New',
                color: '#30ab66'
            }, {
                value: `${viewId}_3`,
                text: '黄色模块'
            }],
            index: 0
        });
    },
    'change<change>'(e) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: index + 1
        })
    }
});
