let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@desc.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>可选状态列表：
[{
    value: '状态值',
    text: '状态文案',
    icon: 'iconfont图标，如&lt;i class="mc-iconfont"&gt;&#38;&#35;xe67f;&lt;/i&gt;',
    color: '图标显示颜色',
    tip: '状态提示文案'
}]
        
当可选列表只有一个时也显示为只读状态</pre>`,
            type: 'array',
            def: '[]'
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string',
            def: 'list[0].value'
        }, {
            key: 'readonly',
            desc: '是否只读，状态显示',
            type: 'boolean',
            def: 'false'
        }]

        this.updater.digest({
            options
        });
    }
});