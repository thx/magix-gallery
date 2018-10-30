let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'width',
            desc: '导航中间区域宽度，默认1184，会根据屏幕宽度进行修正',
            type: 'number',
            def: 1184
        }, {
            key: 'navs',
            desc: `导航数组<pre>[{
    text:"展示文案",
    value:"value值"
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
            def: '<img src="//img.alicdn.com/tfs/TB1Zn4Sq1uSBuNjy1XcXXcYjFXa-240-39.png">'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});