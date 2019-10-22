let Magix = require('magix');
let $ = require('$');
let Router = Magix.Router;

module.exports = Magix.View.extend({
    tmpl: '@demo.html',
    render() {
        let loc = Router.parse();
        this.updater.digest({
            cur: loc.srcHash,
            list: [{
                path: '/im/demo1',
                id: 496,
                tip: '第一个问题：我要咨询钻展流量的问题',
                extra: '匹配中source-map中配置的496'
            }, {
                path: '/im/demo2?version=1&mode=2',
                id: 502,
                tip: '第一个问题：如何查看资源位的类目要求？',
                extra: '匹配中source-map中配置的502'
            }, {
                path: '/im/demo3',
                id: 432,
                tip: '第一个问题：我要咨询内容推广的问题',
                extra: 'source-map中没有额外配置，使用默认的432'
            }]
        });
    }
});