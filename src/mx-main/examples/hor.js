let Magix = require('magix');
let $ = require('$');
let Base = require('examples/example');

module.exports = Base.extend({
    tmpl: '@hor.html',
    render() {
        let viewId = this.id;
        let options = [{
            key: 'step-infos',
            desc: `步骤信息，<a href="javascript:;" mx-click="to({id:'${viewId}_step'})" class="color-brand">查看详细说明</a>`,
            type: 'array',
            def: '[]'
        }, {
            key: 'already-step',
            desc: '当前已经到达第几步，从1开始',
            type: 'number',
            def: '取路由地址上stepIndex，1 和 alreadyStep的最大值'
        }]
        this.updater.digest({
            viewId,
            options
        });
    }
});