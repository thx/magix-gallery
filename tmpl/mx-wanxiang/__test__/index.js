let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'biz-code',
            desc: '必填，引入配置中申请到的bizCode，项目唯一标识',
            type: 'string',
            def: ''
        }, {
            key: 'default-source-id',
            desc: '必填，页面问答的默认sourceId，若当前页面路径不在source-map，则默认为该sourceId',
            type: 'string',
            def: 'text'
        }, {
            key: 'source-map',
            desc: `如果不同路径的对应不同的问答，配置路径到sourceId的映射关系，<br/>
<span class="color-brand">支持带参数的配置（当前参数包含配置参数则匹配上）</span>，例如：<pre>
{
    '/wanxiang/demo1': 1,
    '/wanxiang/demo2?version=1': 2
    '/wanxiang/demo3': 3
}
</pre>
<br/>
<span class="color-red">需要注意不同sourceId的页面默认配置项必须相同，不然会产生位置差错</span>`,
            type: 'object',
            def: '{}'
        }, {
            key: 'bottom',
            desc: '万象模块相对于页面右下角定位，该字段表示距离右边底部的距离',
            type: 'number',
            def: '0'
        }]

        this.updater.digest({
            options
        });
    }
});