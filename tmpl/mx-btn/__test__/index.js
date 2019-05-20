let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let that = this;
        let viewId = that.id;
        let options = [{
            key: 'color',
            desc: '当前选中颜色',
            type: 'string',
            def: '#ffffff'
        }, {
            key: 'align',
            desc: '与目标的对齐方式，left，right',
            type: 'string',
            def: 'left'
        }, {
            key: 'dot',
            desc: '显示选中值为色值圆点',
            type: 'boolean',
            def: 'false'
        }]

        that.updater.digest({
            viewId,
            options
        });
    }
});