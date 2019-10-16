/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-util/view",["magix"],(require,exports,module)=>{
/*magix_1*/

"use strict";
/**
 * 通用方法定义
 * 具体页面继承该View
 */
var magix_1 = require("magix");
module.exports = magix_1["default"].View.merge({
    ctor: function () {
        this.updater.set({
            viewId: this.id
        });
    }
});

});