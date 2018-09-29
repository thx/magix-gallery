let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra){
        let content = extra.content || '标题';
        let tip = extra.tip || '';
        this.updater.set({
            content,
            tip
        })
    },
    render() {
        // 纯样式展示类，异步渲染，避免影响性能
        let that = this;
        setTimeout(that.wrapAsync(() => {
            that.updater.digest();
        }), 0);
    }
});