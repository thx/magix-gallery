let Magix = require('magix');

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
            desc: '选中值显示样式为色值圆点',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }]

        let events = [{
            type: 'change',
            desc: '切换颜色时触发',
            params: [{
                key: 'color',
                desc: '当前选中颜色',
                type: 'string'
            }]
        }]

        that.updater.digest({
            viewId,
            options,
            events
        });
    }
});