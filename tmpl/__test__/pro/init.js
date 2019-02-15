let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@cross.less');

module.exports = Magix.View.extend({
    tmpl: '@init.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            contents: [
                '依赖 <a class="link-brand" href="https://thx.github.io/magix-cli-book/#/" target="_blank" rel="noopener noreferrer">magix-cli</a> 命令行工具快速创建magix项目，接口人<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=vuop5vn" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>崇志</a>',
            ].join('<br />')
        });
    }
});