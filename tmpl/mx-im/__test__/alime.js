let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@alime.html',
    render() {
        // 可配置参数：https://yuque.antfin-inc.com/alime/tg3n3k/dsyxto#TdIHu
        // 机器人配置地址：https://alimebot.taobao.com/alime.htm?tenantId=702#/robot/list
        let options = [{
            key: 'from',
            desc: '必填，页面问答的from',
            type: 'string',
            def: 'text'
        }]

        this.updater.digest({
            options,
            tip: '<a href="https://yuque.antfin-inc.com/alime/tg3n3k/dsyxto#TdIHu" target="_blank" class="color-brand">完整配置项</a>',
            viewId: this.id
        });
    }
});