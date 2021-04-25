let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options2 = [{
            key: 'list',
            desc: `<pre>
列表数组：
[{
    value: '必选，checkbox的value',
    text: '必选，展示文案',
    tip: '必选，提示信息',
    icon: '可选，右侧打标',
    tags: '可选，["打标1", "打标2"]',
}]
</pre>`,
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值，传入数组为数组，传入逗号分隔为逗号分隔，默认逗号分隔',
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
            options: [{
                key: 'checked',
                desc: '是否选中',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'disabled',
                desc: '是否禁用',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'indeterminate',
                desc: '是否部分选中，只控制样式，不控制属性',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'name',
                desc: 'checkbox 的名称',
                type: 'string',
                def: ''
            }, {
                key: 'value',
                desc: 'checkbox 的 value 属性的值',
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
                key: 'tag-content',
                desc: '打标文案',
                type: 'string',
                def: ''
            }, {
                key: 'tag-color',
                desc: '打标颜色，品牌色按钮默认红色，禁用按钮默认灰色，其他默认品牌色',
                type: '合法色值',
                def: ''
            }],
            options2,
            events
        });
    }
});