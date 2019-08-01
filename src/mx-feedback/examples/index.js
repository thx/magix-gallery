let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'fd-id',
            desc: '反馈表单id',
            type: 'number',
            def: ''
        }, {
            key: 'fd-style',
            desc: '附加到外层容器的样式，驼峰传入<br/>默认相对当前节点下居中定位',
            type: 'object',
            def: '{}'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});