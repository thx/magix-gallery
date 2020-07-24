let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@range.html',
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
            key: 'selected',
            desc: '最小值和最大值，支持逗号分隔"100,120"格式或者数组格式[100,120]<br/>双向绑定返回值格式与selected保持一致',
            type: 'string / array',
            def: '默认取0和50%'
        }, {
            key: 'need-input',
            desc: '是否需要输入框，横向时才有，width不包含输入框宽度',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'width',
            desc: '滑块宽度',
            type: 'number',
            def: 280
        }, {
            key: 'vertical',
            desc: '是否垂直',
            type: 'boolean',
            def: 'border'
        }, {
            key: 'height',
            desc: '滑块高度，vertical=true时可设置',
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
                key: 'start',
                desc: '开始刻度',
                type: 'number'
            }, {
                key: 'end',
                desc: '结束刻度',
                type: 'number'
            }, {
                key: 'selected',
                desc: 'start,end  或者 [start, end]<br/>由入参selected确定格式',
                type: 'string / array'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});