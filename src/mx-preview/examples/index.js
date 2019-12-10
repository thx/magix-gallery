let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {

//         {
//             key: 'format',
//             desc: `<pre>展示类型，不配置类型默认展示为纯文本
// 2：图片
// 4：视频
// 5：文字链
// 10：html
// 23：套图
// </pre>`,
//             type: 'number',
//             def: '5'
//         }, {
//             key: 'url',
//             desc: `<pre>展示内容
// 2：图片链接
// 4：视频链接
// 5：文本内容
// 10：html链接
// </pre>`,
//             type: 'string',
//             def: ''
//         },{
//     key: 'datu-url',
//     desc: '套图大图',
//     type: 'string',
//     def: ''
// }, {
//     key: 'xiaotu-url',
//     desc: '套图小图',
//     type: 'string',
//     def: ''
// }, 

        let options = [{
            key: 'type',
            desc: `<pre>展示类型，不配置类型默认展示为纯文本
image：图片
video：视频
text：文字链
iframe：直接iframe嵌入页面展示
</pre>`,
            type: 'number',
            def: 'text'
        }, {
            key: 'url',
            desc: `<pre>展示内容
image：图片链接
video：视频链接
text：文本内容
iframe：html链接
</pre>`,
            type: 'string',
            def: ''
        }, {
            key: 'width',
            desc: `<pre>预览实际宽度
缩略图根据width和height等比例缩放
预览时根据当前屏幕的可视范围进行等比例修正
<div class="color-brand">除图片和文本类型外，其余情况下必填</div>
</pre>`,
            type: 'number',
            def: ''
        }, {
            key: 'height',
            desc: `<pre>预览实际高度
缩略图根据width和height等比例缩放
预览时根据当前屏幕的可视范围进行等比例修正
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
            key: 'click-url',
            desc: '点击预览内容的跳转外链',
            type: 'string',
            def: ''
        }, {
            key: 'preview',
            desc: '是否需要预览，preview=false的时候只有缩略图没有预览',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'preview-data',
            desc: `预览数据，当预览内容是缩略内容不一样时可配置，可配内容如下：<pre>{
    type,
    url,
    width,
    height,
    scale: '缩放比例，默认1'
}</pre>`,
            type: 'object',
            def: '{}'
        }, {
            key: 'preview-view',
            desc: `<div>自定义预览页面，根据preview-data配置的宽度高度来展示预览区域，加载preview-view</div>
<div>preview-data可单独使用，见<a href="javascript:;" mx-click="to({id:'mx_12_demo9'})" class="color-brand">示例</a></div>
<div>preview-view必须结合preview-data使用，<a href="javascript:;" mx-click="to({id:'mx_12_demo10'})" class="color-brand">示例</a></div>`,
            type: 'string',
            def: ''
        }, {
            key: 'placement',
            desc: '相对目标的展示位置，可选left、right',
            type: 'string',
            def: 'right'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});