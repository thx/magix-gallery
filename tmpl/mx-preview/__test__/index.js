let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'format',
            desc: '展示类型，不配置类型默认展示为纯文本<br>2：图片<br>4：视频<br>5：文字链<br>10：html<br>23：套图',
            type: 'number',
            def: 5
        }, {
            key: 'url',
            desc: '展示内容<br>2：图片链接<br>4：视频链接<br>5：文本<br>10：html链接',
            type: 'string',
            def: ''
        }, {
            key: 'width',
            desc: '预览实际宽度<br>会根据当前屏幕的可视范围进行修正',
            type: 'number',
            def: 640
        }, {
            key: 'height',
            desc: '预览实际高度',
            type: 'number',
            def: '自适应'
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
            desc: '预览内容可配置点击外链的format<br>2：图片<br>4：视频<br>5：文字链<br>23：套图',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});