let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@pipeline.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>
list = [{
    title: '第一行描述信息',
    subTitle: '第二行描述信息',
    tip: '标题旁小问号提示',
    icon: '标题旁小图标'
}]
</pre>`,
            type: 'array',
            def: '数据格式'
        }, {
            key: 'selected',
            desc: '当前选中项',
            type: 'number',
            def: '选中态的index索引，0开始'
        }, {
            key: 'mode',
            desc: `样式类型<pre>
1. mode=circle 圆形数字
2. mode=line 文案在线上方 
3. mode=box 盒状
</pre>`,
            type: 'string',
            def: 'circle'
        }, {
            key: 'logo',
            desc: 'mode=box：logo地址',
            type: 'string',
            def: ''
        }, {
            key: 'color',
            desc: 'mode=box：盒子背景色',
            type: 'string',
            def: ''
        }, {
            key: 'color-gradient',
            desc: 'mode=box：盒子背景渐变色，若需要渐变，则color-gradient为深色',
            type: 'string',
            def: ''
        }]
        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});