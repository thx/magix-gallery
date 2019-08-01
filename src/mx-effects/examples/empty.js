let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@empty.html',
    render() {
        let options = [{
            key: 'content',
            desc: '空状态提示文案',
            type: 'string',
            def: '暂无内容'
        },{
            key: 'bg',
            desc: '背景样式，默认灰色，需要白底空状态时配置bg="white"',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            options
        });
    }
});