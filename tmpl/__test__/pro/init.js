let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@init.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            contents: [
                '1. 依赖 <a class="link-brand" href="https://thx.github.io/magix-cli-book/#/" target="_blank" rel="noopener noreferrer">magix-cli</a> 命令行工具快速创建magix项目',
                '2. 脚手架中的通用吊底数据配置在alp，Lego2渲染层对jsonp进行referer校验，本地测试的时候需要绑个类似于 xxx.taobao.com 的host，否则不会正常返回。'
            ].join('<br />')
        });
    }
});