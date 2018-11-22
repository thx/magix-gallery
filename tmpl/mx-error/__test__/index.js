let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'type',
            desc: '异常类型，可选404，502',
            type: 'string',
            def: '404'
        }, {
            key: 'tip',
            desc: '自定义提示信息',
            type: 'string',
            def: '404：抱歉，您查看的页面不存在或无权限查看当前页面<br/>502：Bad Gateway'
        }, {
            key: 'btns',
            desc: '是否需要返回首页 + 返回上一页按钮',
            type: 'boolean',
            def: 'true'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});