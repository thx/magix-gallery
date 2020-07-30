let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'width',
            desc: '导航中间区域宽度，默认屏幕宽度，会根据屏幕宽度进行修正',
            type: 'number',
            def: ''
        }, {
            key: 'navs',
            desc: `导航数组<pre>[{
    text:"一级菜单展示文案",
    value:"一级菜单value值",
    link: "配置了该字段时直接外链打开link",
    tag: "打标，文案或者html片段均可",
    tagColor: "打标颜色，默认红色",
    icon: '移动端icon，如&lt;i class="mc-iconfont"&gt;&#38;&#35;xe724;&lt;/i&gt;',
    subs: [{
        text: "二级菜单展示文案",
        value: "二级菜单value值",
        link: "配置了该字段时直接外链打开link",
        group: "三级分组的名称，如需三级三组，则相同组配置相同的组名即可"
    }]
}]</pre>`,
            type: 'array',
            def: ''
        }, {
            key: 'value-key',
            desc: 'navs里value取值字段',
            type: 'string',
            def: 'value'
        }, {
            key: 'text-key',
            desc: 'navs里text取值字段',
            type: 'string',
            def: 'text'
        }, {
            key: 'link-key',
            desc: 'navs里link取值字段',
            type: 'string',
            def: 'link'
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
            desc: '登录的用户名称，有该值认为已登录，否则未登录，login=true时必有',
            type: 'string',
            def: ''
        }, {
            key: 'biz-code',
            desc: '各产品bizCode，用于包装登陆框逻辑，必传，<a href="#!/dialog/index?highlightId=mx_12_demo13" class="color-brand">详细定义参见mxLoginView</a>',
            type: 'string',
            def: ''
        }, 
        // 已废弃，用bizCode替换，根据bizCode项目包装登陆框逻辑
        // { 
        //     key: 'login-view',
        //     desc: '<div class="mb10">已登录时显示的淘宝登录框view，350*340，login=true时必有</div><img style="border: 1px solid #e6e6e6;" width="200" src="https://img.alicdn.com/tfs/TB1C3ebo4n1gK0jSZKPXXXvUXXa-692-674.jpg">',
        //     type: 'string',
        //     def: ''
        // }, 
        {
            key: 'logout-url',
            desc: '登出接口，login=true时必有',
            type: 'string',
            def: ''
        }, {
            key: 'right-view',
            desc: '<div>右侧预留自定义view</div><img width="600" src="https://img.alicdn.com/tfs/TB1y0Ame1L2gK0jSZFmXXc7iXXa-1652-200.png">',
            type: 'viewpath',
            def: ''
        }, {
            key: 'right-view-data',
            desc: '传入right-view的data',
            type: 'object',
            def: '{}'
        }, {
            key: 'right-ceiling-show',
            desc: '右侧自定义的view默认不展示，吸顶的时候显示',
            type: 'boolean',
            def: 'false'
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