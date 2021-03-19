let Magix = require('magix');
let $ = require('$');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@ver.html',
    render() {
        let viewId = this.id;
        let options = [{
            key: 'step-infos',
            desc: `步骤信息，<a href="javascript:;" mx-click="to({id:'${viewId}_step'})" class="color-brand">查看详细说明</a>`,
            type: 'array',
            def: '[]'
        }, {
            key: 'fix-step',
            desc: `<pre>顶部固定展开的步骤信息，格式如下：
{
    label: 'string，可选，一级标题文案',
    icon: 'string，可选，标题前icon',
    title: 'string，可选，title = title || label',
    tip: 'string，可选，标题旁提示',
    view: '当前步骤加载的view地址'
}</pre>`,
            type: 'object',
            def: '{}'
        }, {
            key: 'already-step',
            desc: '当前已经到达第几步，从1开始',
            type: 'number',
            def: '取路由地址上stepIndex，1 和 alreadyStep的最大值'
        }, {
            key: 'wrapper',
            desc: '导航相对定位的容器节点，默认为window',
            type: 'string'
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