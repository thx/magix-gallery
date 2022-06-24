let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@card.html',
    render() {
        let options2 = [{
            key: 'list',
            desc: `<pre>
列表数组：
[{
    value: '必选，checkbox的value',
    text: '必选，展示文案',
    tip: '必选，提示信息',
    icon: '可选，右侧图标',
    tag: '卡片整体右上角打标',
    tags: '可选，["打标1", "打标2"]',
    disabled: '单个禁用状态，当某些选项禁用时可配置'
}]
</pre>`,
            type: 'array'
        }, {
            key: 'adc-list',
            desc: `<pre>联动adc，直接传入adc组件树结构即可，数据格式如下：
[{
    code: '必选，radio的value',
    name: '必选，展示文案',
    description: '必选，提示信息',
    properties: {
        icon: '可选，右侧图标',
        tag: '卡片整体右上角打标',
        tags: '可选，卡片内打标，["打标1", "打标2"]',
        disabled: '单个禁用状态'
    }
}]</pre>`,
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值，传入数组为数组，传入逗号分隔为逗号分隔，默认逗号分隔',
            type: 'string',
            def: ''
        }, {
            key: 'disabled',
            desc: '整体是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'mode',
            desc: `<pre>展现类型
normal：正常尺寸，默认宽度288
small：小尺寸，默认宽度216`,
            type: 'string',
            def: 'small'
        }, {
            key: 'hover-type',
            desc: `<pre>展现类型
common：选中态背景色为品牌色透明度0.1
brand：选中态背景色为品牌色，支持渐变`,
            type: 'string',
            def: 'common'
        }, {
            key: 'text-key',
            desc: '渲染text时读取的key',
            type: 'string',
            def: 'text'
        }, {
            key: 'value-key',
            desc: '渲染value时读取的key',
            type: 'string',
            def: 'value'
        }, {
            key: 'tip-key',
            desc: '渲染tip时读取的key',
            type: 'string',
            def: 'tip'
        }, {
            key: 'width',
            desc: '卡片宽度',
            type: 'number',
            def: 'mode=normal：默认288<br/>mode=small：默认216<br/>'
        }, {
            key: 'text-lines',
            desc: '说明文案行数',
            type: 'number',
            def: '2'
        }, {
            key: 'mt',
            desc: '单个卡片margin-top，单位px',
            type: 'number',
            def: '8'
        }, {
            key: 'mr',
            desc: '单个卡片margin-right，单位px',
            type: 'number',
            def: '16'
        }, {
            key: 'mb',
            desc: '单个卡片margin-bottom，单位px',
            type: 'number',
            def: '8'
        }, {
            key: 'ml',
            desc: '单个卡片margin-left，单位px',
            type: 'number',
            def: '0'
        }]

        let events = [{
            type: 'change',
            desc: '切换日期时会触发',
            params: [{
                key: 'selected',
                desc: '当前选中值，传入数组为数组，传入逗号分隔为逗号分隔，默认逗号分隔',
                type: 'array or string'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options2,
            events,
        });
    }
});