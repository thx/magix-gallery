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
    link: "配置了该字段时外链打开",
    subs: [{
        text:"二级菜单展示文案",
        value:"二级菜单value值",
        link: "配置了该字段时外链打开"
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
            desc: '项目logo的图片地址，高度40，长度图片自适应，无间距预留，留白在logo上体现',
            type: 'string',
            def: '<img width="200" src="//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png">'
        }, {
            key: 'links',
            desc: '顶部妈妈相关产品线信息是否需要',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'ceiling',
            desc: '是否需要滚定吸顶功能',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'login',
            desc: '<div>是否需要显示用户登录信息，links=true时才生效</div><img width="600" src="https://img.alicdn.com/tfs/TB17_QneYj1gK0jSZFOXXc7GpXa-1652-200.png">',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'user',
            desc: '登陆的用户名称，有该值认为已登录，否则未登录，login=true时必有',
            type: 'string',
            def: ''
        }, {
            key: 'login-view',
            desc: '未登录时点击登陆弹出的淘宝登陆框view，350*340，login=true时必有',
            type: 'string',
            def: ''
        }, {
            key: 'logout-url',
            desc: '登出接口，login=true时必有',
            type: 'string',
            def: ''
        }, {
            key: 'right-view',
            desc: '<div>右侧预留自定义view</div><img width="600" src="https://img.alicdn.com/tfs/TB1y0Ame1L2gK0jSZFmXXc7iXXa-1652-200.png">',
            type: 'string',
            def: ''
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
                desc: `选中的菜单完整信息，一级 or 二级，传入的数据原样返回`,
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