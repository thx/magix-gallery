let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@wanxiang.html',
    render() {
        let options = [{
            key: 'default-source-id',
            desc: '必填，页面问答的默认sourceId，若当前页面路径不在source-map，则默认为该sourceId',
            type: 'string',
            def: 'text'
        }, {
            key: 'source-map',
            desc: `如果不同路径的对应不同的问答，配置路径到sourceId的映射关系，<br/>
<span class="color-brand">支持带参数的配置（当前参数包含配置参数则匹配上）</span>，例如：<pre>
{
    '/im/demo1': 83475,
    '/im/demo2?version=1': 83476
}
</pre>
<br/>
<span class="color-red">需要注意不同sourceId的页面默认配置项必须相同，不然会产生位置差错</span>`,
            type: 'object',
            def: '{}'
        }]

        this.updater.digest({
            options,
            viewId: this.id
        });
    }
});