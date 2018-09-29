let Magix = require('magix');
module.exports = Magix.View.extend({
    render() {
        this.updater.digest();

        // 纯样式展示类，异步渲染，避免影响性能
        // let that = this;
        // setTimeout(that.wrapAsync(() => {
        //     that.updater.digest();
        // }), 0);
    }
});