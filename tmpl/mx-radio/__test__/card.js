let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@card.html',
    render() {
        let options2 = [{
            key: 'list',
            desc: `<pre>
列表数组：
[{
    value: '必选，radio的value',
    text: '必选，展示文案',
    tip: '必选，提示信息',
    icon: '可选，右侧图标',
    tag: '卡片整体右上角打标',
    tags: '可选，卡片内打标，["打标1", "打标2"]',
    disabled: '单个禁用状态，当某些选项禁用时可配置',
    disabledTip: '禁用提示信息',
    detail: '详情说明',
    subs: [{  // 可选，当包含子选项时可用
        value: '必选，字radio的value',
        text: '必选，展示文案',
        tip: '可选，提示信息，选项旁小问号提示',
    },{
        value: '必选，字radio的value',
        text: '必选，展示文案',
        tip: '可选，提示信息，选项旁小问号提示',
    }],
    link: '' // 如果配置外链地址，则点击该卡片直接跳转
}]
</pre>`,
            type: 'array'
        }, {
            key: 'adc-list',
            desc: `<pre>联动adc，直接传入adc组件树结构即可，数据格式如下：
[{
    code: '对应list的value',
    name: '对应list的text',
    description: '对应list的tip',
    properties: {
        icon: '对应list的icon',
        tag: '对应list的tag',
        tags: '对应list的tags',
        disabled: '对应list的disabled'
        disabledTip: '对应list的disabledTip',
        tip: '对应list的detail',
    }
}]</pre>`,
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值，当包含子选项时，选中值为子选项的值',
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
normal：正常尺寸
small：小尺寸
vertical：垂直布局`,
            type: 'string',
            def: 'small'
        }, {
            key: 'radio-name',
            desc: '自定义radio的name，可实现多列表混合选择场景',
            type: 'string',
            def: 'view.id_radioes'
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
            desc: '自定义卡片展示宽度',
            type: 'number',
            def: ''
        }, {
            key: 'text-lines',
            desc: '说明文案行数',
            type: 'number',
            def: '2'
        }, {
            key: 'hide-radio',
            desc: '是否隐藏radio，显示为卡片样式',
            type: 'boolean',
            def: 'false'
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
            desc: '卡片切换时触发',
            params: [{
                key: 'selected',
                desc: '当前选中值，当包含子选项时，选中值为子选项的值',
                type: 'string'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options2,
            events
        });
    }
});