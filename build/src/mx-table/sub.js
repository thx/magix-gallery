/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/sub",["$","magix"],(require,exports,module)=>{
/*$,Magix*/

var $ = require("$");
var Magix = require("magix");
Magix.applyStyle("_zs_galleryaB","._zs_gallerymo{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerymp{position:relative;display:inline-block;width:1px;height:1px}._zs_gallerymp ._zs_gallerymq,._zs_gallerymp ._zs_gallerymr{position:absolute;top:-10px;left:0;width:16px;height:16px;text-align:center;line-height:16px}._zs_gallerymr{cursor:pointer;color:#4d7fff}._zs_gallerymq{cursor:pointer;color:#999}._zs_gallerymq:hover{color:#333}");
module.exports = {
    ctor: function () {
        // &#xe653; 收起
        // &#xe652; 展开
        var me = this;
        me['__eB'] = {};
        var ready = function (e) {
            var state = me['__eB'];
            var context = $('#' + (e.id || me.id));
            var trigger = context.find('[sub-toggle]');
            trigger.each(function (idx, item) {
                var toggleName = $(item).attr('sub-toggle');
                // 默认状态
                var expand = (/^true$/i).test($(item).attr('data-expand'));
                if (expand && !state[toggleName]) {
                    state[toggleName] = {
                        expand: true
                    };
                }
                var object = state[toggleName];
                me.sync((object && object.expand), item, toggleName);
            });
        };
        me.on('rendered', ready);
        me.on('domready', ready);
    },
    sync: function (expand, item, toggleName) {
        var me = this;
        var context = $('#' + me.id);
        $(item).addClass('_zs_gallerymp');
        if (expand) {
            // 收起
            $(item).html('<i class="mc-iconfont _zs_gallerymr">&#xe653;</i>');
            context.find('[sub-toggle-parent=' + toggleName + ']').removeClass('hide');
        }
        else {
            // 展开
            $(item).html('<i class="mc-iconfont _zs_gallerymq">&#xe652;</i>');
            context.find('[sub-toggle-parent=' + toggleName + ']').addClass('hide');
        }
    },
    '$[sub-toggle]<click>': function (e) {
        var me = this;
        var context = $('#' + me.id);
        var item = $(e.eventTarget);
        var toggleName = item.attr('sub-toggle');
        var object = me['__eB'][toggleName];
        if (!object) {
            object = me['__eB'][toggleName] = {};
        }
        object.expand = !object.expand;
        me.sync(object.expand, item, toggleName);
        $(document).trigger('tableresize');
    }
};

});