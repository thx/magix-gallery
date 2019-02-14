let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'format',
            desc: `<pre>展示类型，不配置类型默认展示为纯文本
2：图片
4：视频
5：文字链
10：html
23：套图
</pre>`,
            type: 'number',
            def: '5'
        }, {
            key: 'url',
            desc: `<pre>展示内容
2：图片链接
4：视频链接
5：文本内容
10：html链接
</pre>`,
            type: 'string',
            def: ''
        }, {
            key: 'preview',
            desc: '是否需要预览，preview=false的时候只有缩略图没有预览',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'width',
            desc: `<pre>预览实际宽度
会根据当前屏幕的可视范围进行等比例修正
<div class="color-brand">除图片和文本类型外，其余情况下必填</div>
</pre>`,
            type: 'number',
            def: ''
        }, {
            key: 'height',
            desc: `<pre>预览实际高度
<div class="color-brand">除图片和文本类型外，其余情况下必填</div>
</pre>`,
            type: 'number',
            def: ''
        }, {
            key: 'max-width',
            desc: '缩略图最大宽度',
            type: 'number',
            def: 100
        }, {
            key: 'max-height',
            desc: '缩略图最大高度',
            type: 'number',
            def: '100'
        }, {
            key: 'datu-url',
            desc: '套图大图',
            type: 'string',
            def: ''
        }, {
            key: 'xiaotu-url',
            desc: '套图小图',
            type: 'string',
            def: ''
        }, {
            key: 'click-url',
            desc: '点击预览内容的跳转外链',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});