let $ = require('$');
let Magix = require('magix');
module.exports = {
    ctor() {
        // &#xe653; 收起
        // &#xe652; 展开

        let me = this;
        me['@{sub.toggle.store}'] = {};
        let ready = e => {
            let state = me['@{sub.toggle.store}'];
            let context = $('#' + (e.id || me.id));
            let trigger = context.find('[sub-toggle]');

            trigger.each((idx, item) => {
                let toggleName = $(item).attr('sub-toggle');

                // 默认状态
                let expand = (/^true$/i).test($(item).data('expand'));
                if (expand && !state[toggleName]) {
                    state[toggleName] = {
                        expand: true
                    }
                }
                let object = state[toggleName];
                if (object && object.expand) {
                    // 收起
                    $(item).html('<i class="mc-iconfont color-brand cursor-pointer">&#xe653;</i>');
                    context.find('[sub-toggle-parent=' + toggleName + ']').removeClass('hide');
                } else {
                    // 展开
                    $(item).html('<i class="mc-iconfont color-9 cursor-pointer">&#xe652;</i>');
                    context.find('[sub-toggle-parent=' + toggleName + ']').addClass('hide');
                }
            });
        };
        me.on('rendered', ready);
        me.on('domready', ready);
    },
    '$[sub-toggle]<click>' (e) {
        let me = this;
        let context = $('#' + me.id);
        let item = $(e.eventTarget);
        let toggleName = item.attr('sub-toggle');
        let object = me['@{sub.toggle.store}'][toggleName];
        if (!object) {
            object = me['@{sub.toggle.store}'][toggleName] = {};
        }

        object.expand = !object.expand;
        if (object.expand) {
            // 收起
            item.html('<i class="mc-iconfont color-brand cursor-pointer">&#xe653;</i>');
            context.find('[sub-toggle-parent=' + toggleName + ']').removeClass('hide');
        } else {
            // 展开
            item.html('<i class="mc-iconfont color-9 cursor-pointer">&#xe652;</i>');
            context.find('[sub-toggle-parent=' + toggleName + ']').addClass('hide');
        }
        $(document).trigger('tableresize');
        
    }
};