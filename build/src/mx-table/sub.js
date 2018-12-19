/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/sub",["$","magix"],(require,exports,module)=>{
/*$,Magix*/

var $ = require("$");
var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-table_sub_","/* @dependent: ./index.less */\n._zs_gallery_mx-table_sub_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-table_sub_-sub-wrapper {\n  position: relative;\n  display: inline-block;\n  width: 1px;\n  height: 1px;\n}\n._zs_gallery_mx-table_sub_-sub-wrapper ._zs_gallery_mx-table_sub_-sub-expand,\n._zs_gallery_mx-table_sub_-sub-wrapper ._zs_gallery_mx-table_sub_-sub-close {\n  position: absolute;\n  top: -10px;\n  left: 0;\n  width: 16px;\n  height: 16px;\n  text-align: center;\n  line-height: 16px;\n}\n._zs_gallery_mx-table_sub_-sub-expand {\n  cursor: pointer;\n  color: #4d7fff;\n}\n._zs_gallery_mx-table_sub_-sub-close {\n  cursor: pointer;\n  color: #999;\n}\n._zs_gallery_mx-table_sub_-sub-close:hover {\n  color: #333;\n}\n");
module.exports = {
    ctor: function () {
        // &#xe653; 收起
        // &#xe652; 展开
        var me = this;
        me['@{sub.toggle.store}'] = {};
        var ready = function (e) {
            var state = me['@{sub.toggle.store}'];
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
        $(item).addClass('_zs_gallery_mx-table_sub_-sub-wrapper');
        if (expand) {
            // 收起
            $(item).html('<i class="mc-iconfont _zs_gallery_mx-table_sub_-sub-expand">&#xe653;</i>');
            context.find('[sub-toggle-parent=' + toggleName + ']').removeClass('hide');
        }
        else {
            // 展开
            $(item).html('<i class="mc-iconfont _zs_gallery_mx-table_sub_-sub-close">&#xe652;</i>');
            context.find('[sub-toggle-parent=' + toggleName + ']').addClass('hide');
        }
    },
    '$[sub-toggle]<click>': function (e) {
        var me = this;
        var context = $('#' + me.id);
        var item = $(e.eventTarget);
        var toggleName = item.attr('sub-toggle');
        var object = me['@{sub.toggle.store}'][toggleName];
        if (!object) {
            object = me['@{sub.toggle.store}'][toggleName] = {};
        }
        object.expand = !object.expand;
        me.sync(object.expand, item, toggleName);
        $(document).trigger('tableresize');
    }
};

});