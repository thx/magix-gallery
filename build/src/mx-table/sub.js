/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/sub",["$","magix"],(require,exports,module)=>{
/*$,Magix*/

var $ = require("$");
var Magix = require("magix");
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
        if (expand) {
            // 收起
            $(item).html('<i class="mc-iconfont color-brand cursor-pointer">&#xe653;</i>');
            context.find('[sub-toggle-parent=' + toggleName + ']').removeClass('hide');
        }
        else {
            // 展开
            $(item).html('<i class="mc-iconfont color-9 color-h-3 cursor-pointer">&#xe652;</i>');
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