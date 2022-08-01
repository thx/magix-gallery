let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@step.html',
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
mode=circle 圆形数字
</pre>`,
            type: 'string',
            def: 'circle'
        }]
        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});