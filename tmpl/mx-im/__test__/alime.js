let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@alime.html',
    render() {
        // 可配置参数：https://yuque.antfin-inc.com/alime/tg3n3k/dsyxto#TdIHu
        // 机器人配置地址：https://alimebot.taobao.com/alime.htm?tenantId=702#/robot/list
        let options = [{
            key: 'default-source-id',
            desc: '必填，页面问答的默认from，若当前页面路径不在source-map，则默认为该from',
            type: 'string',
            def: 'text'
        }, {
            key: 'source-map',
            desc: `如果不同路径的对应不同的问答，配置路径到from的映射关系，<br/>
<span class="color-brand">支持带参数的配置（当前参数包含配置参数则匹配上）</span>，例如：<pre>
{
    '/im/alime': 'QfsKONEz8k',
    '/im/wx': 'p8t93eWHJx'
}
</pre>`,
            type: 'object',
            def: '{}'
        }]

        this.updater.digest({
            options,
            tip: '<a href="https://yuque.antfin-inc.com/alime/tg3n3k/dsyxto#TdIHu" target="_blank" class="color-brand">点此查看完整配置项</a>',
            viewId: this.id
        });
    }
});