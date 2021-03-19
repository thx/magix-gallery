let Magix = require('magix');
let $ = require('$');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@index.html',
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
        }, {
            key: 'left-width',
            desc: '左侧导航区域宽度',
            type: 'number',
            def: '160'
        }, {
            key: 'right-width',
            desc: '右侧提示区域宽度',
            type: 'number',
            def: '260'
        }, {
            key: 'mode',
            desc: '样式版本<br/>dark：深底色版本<br/>common：白底色版本',
            type: 'string',
            def: 'dark'
        }]
        this.updater.digest({
            viewId,
            options
        });
    }
});