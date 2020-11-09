let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'min',
            desc: '区间最小值，保留小数位同step',
            type: 'number',
            def: 0
        }, {
            key: 'max',
            desc: '区间最大值，保留小数位同step',
            type: 'number',
            def: 100
        }, {
            key: 'step',
            desc: '步长，滑动时变化的刻度',
            type: 'number',
            def: 1
        }, {
            key: 'value',
            desc: '滑块当前值，超过可选范围会根据可选范围进行修正',
            type: 'string',
            def: '默认取中间值'
        }, {
            key: 'need-input',
            desc: '是否需要输入框，横向时才有，width不包含输入框宽度',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'width',
            desc: '滑块宽度，横向时可设置',
            type: 'number',
            def: 280
        }, {
            key: 'vertical',
            desc: '是否垂直',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'height',
            desc: '滑块高度，纵向时（vertical=true）可设置',
            type: 'number',
            def: 280
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: '',
            def: 'false'
        }, {
            key: 'tip',
            desc: '提示文案',
            type: '',
            def: ''
        }, {
            key: 'show-dot',
            desc: '是否显示刻度点',
            type: 'boolean',
            def: 'false'
        }]

        let events = [{
            type: 'change',
            desc: '刻度变化（输入框调整或者拖动滑轴）时触发',
            params: [{
                key: 'value',
                desc: '当前刻度值',
                type: 'number'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});