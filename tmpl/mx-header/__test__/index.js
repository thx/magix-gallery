let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'width',
            desc: '导航中间区域宽度，默认1200，会根据屏幕宽度进行修正',
            type: 'number',
            def: 1200
        }, {
            key: 'navs',
            desc: `导航数组<pre>[{
    text:"一级菜单展示文案",
    value:"一级菜单value值",
    subs: [{
        text:"二级菜单展示文案",
        value:"二级菜单value值",
    }]
}]</pre>`,
            type: 'array',
            def: ''
        }, {
            key: 'cur',
            desc: '当前哪个导航，对应navs的value，默认不选中任何一个导航',
            type: 'string',
            def: ''
        }, {
            key: 'wrapper',
            desc: '导航相对定位的容器节点，默认为window',
            type: 'string',
            def: ''
        }, {
            key: 'logo',
            desc: '项目logo的图片地址',
            type: 'string',
            def: '<img width="200" src="//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png">'
        }, {
            key: 'dark',
            desc: '深底色版本',
            type: 'boolean',
            def: 'true'
        }]

        let events = [{
            type: 'navchange',
            desc: '菜单切换的时候触发',
            params: [{
                key: 'nav',
                desc: `选中的菜单，一级 or 二级 <pre>{
    text:"菜单展示文案",
    value:"菜单value值"
}</pre>`,
                type: 'object'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});