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
    tags: '可选，["打标1", "打标2"]'
}]
</pre>`,
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值',
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