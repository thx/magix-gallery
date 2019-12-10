let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@options.html',
    render() {
        let options = [{
            key: 'opers',
            desc: `<pre>可选操作项列表：
[{
    value: '状态值',
    text: '状态文案',
    icon: 'iconfont图标，如&lt;i class="mc-iconfont"&gt;&#38;&#35;xe67f;&lt;/i&gt;',
    color: '图标显示颜色'
}]
</pre>`,
            type: 'array',
            def: '[]'
        }, {
            key: 'selected',
            desc: '当前操作项选中值',
            type: 'string',
            def: 'opers[0].value'
        }, {
            key: 'info',
            desc: `<pre>额外的提示信息：
{
    value: '状态值',
    text: '状态文案',
    icon: 'iconfont图标，如&lt;i class="mc-iconfont"&gt;&#38;&#35;xe67f;&lt;/i&gt;',
    color: '图标显示颜色',
    tip: '提示信息内容'
}
</pre>`,
            type: 'object',
            def: '{}'
        }]

        this.updater.digest({
            options
        });
    }
});