let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@wangwang.html',
    render() {
        let options = [{
            key: 'uid',
            desc: '用户名，必填',
            type: 'string',
            def: ''
        }, {
            key: 'icon',
            desc: '图标类型<br/>small：抖动小图标<br/>static：静态图标<br/>large：带和我联系图标<br/>none：不需要图标',
            type: 'string',
            def: 'small'
        }, {
            key: 'content',
            desc: '提示内容',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            options
        });
    }
});