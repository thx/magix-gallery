let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options1 = [{
            key: 'name',
            desc: 'radio的name值',
            type: 'string',
            def: ''
        }, {
            key: 'value',
            desc: 'radio的value值',
            type: 'string',
            def: ''
        }, {
            key: 'text',
            desc: '显示的文案值',
            type: 'string',
            def: ''
        }, {
            key: 'tip',
            desc: '小问号提示',
            type: 'string',
            def: ''
        }, {
            key: 'checked',
            desc: '是否选中',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }];

        let options2 = [{
            key: 'list',
            desc: `<pre>
列表数组：
[{
    value: '必选，radio的value',
    text: '必选，展示文案',
    tip: '必选，提示信息',
    icon: '可选，右侧打标',
    tags: '可选，["打标1", "打标2"]',
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
            key: 'selected',
            desc: '当前选中值，当包含子选项时，选中值为子选项的值',
            type: 'string',
            def: ''
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
            key: 'hide-radio',
            desc: '是否隐藏radio，显示为卡片样式',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'mt',
            desc: '单个卡片margin-top，单位px',
            type: 'number',
            def: '0'
        }, {
            key: 'mr',
            desc: '单个卡片margin-right，单位px',
            type: 'number',
            def: '16'
        }, {
            key: 'mb',
            desc: '单个卡片margin-bottom，单位px',
            type: 'number',
            def: '16'
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
                key: 'date',
                desc: '当前日期（不包含时分秒）',
                type: 'string'
            }, {
                key: 'time',
                desc: '当前时分秒',
                type: 'string'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options1,
            options2,
            events
        });
    }
});