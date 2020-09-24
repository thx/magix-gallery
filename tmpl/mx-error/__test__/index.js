let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'type',
            desc: `异常类型：
not-found：默认tip=抱歉，您查看的页面不存在
network-error：默认tip=网络连接失败，请检查您的网络连接
empty-content：默认tip=暂无内容
no-access：默认tip=暂无访问权限
loading：默认tip=数据计算中，请耐心等待`,
            type: 'string',
            def: 'not-found'
        }, {
            key: 'tip',
            desc: '自定义提示信息',
            type: 'string',
            def: '默认不同type不同文案'
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