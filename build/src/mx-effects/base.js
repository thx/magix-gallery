/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/base",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
module.exports = Magix.View.extend({
    render: function () {
        this.updater.digest();
        // 纯样式展示类，异步渲染，避免影响性能
        // let that = this;
        // setTimeout(that.wrapAsync(() => {
        //     that.updater.digest();
        // }), 0);
    }
});

});