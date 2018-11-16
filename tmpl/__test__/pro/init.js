let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@init.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            contents: [
                '依赖 <a class="link-brand" href="https://thx.github.io/magix-cli-book/#/" target="_blank" rel="noopener noreferrer">magix-cli</a> 命令行工具快速创建magix项目',
            ].join('<br />')
        });
    }
});