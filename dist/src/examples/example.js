/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/example",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
var CopyText = '复制代码';
module.exports = Magix.View.extend({
    init: function () {
        var that = this;
        that.updater.set({
            viewId: that.id,
            text1: CopyText,
            text2: CopyText,
            text3: CopyText,
            text4: CopyText,
            text5: CopyText,
            text6: CopyText,
            text7: CopyText,
            text8: CopyText,
            text9: CopyText,
            text10: CopyText,
            text11: CopyText
        });
    },
    'done<success>': function (e) {
        var that = this;
        var id = e.params.id;
        var data = {};
        data['text' + id] = '<i class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip-icon">&#xe630;</i>复制成功';
        that.updater.digest(data);
        setTimeout(function () {
            data['text' + id] = CopyText;
            that.updater.digest(data);
        }, 1000);
    }
});

});