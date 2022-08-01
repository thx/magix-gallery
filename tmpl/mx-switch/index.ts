import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Dialog from '../mx-dialog/index';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    mixins: [Dialog],
    init(extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        that.updater.snapshot();

        that['@{owner.node}'] = $('#' + that.id);

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (extra.disabled + '' === 'true') || $('#' + that.id)[0].hasAttribute('mx-disabled');

        // 值映射对象
        // {
        //     true: 1,
        //     false: 0
        // }
        let valueMap, state;
        if (extra.hasOwnProperty('valueMap')) {
            valueMap = extra.valueMap;
            for (let key in valueMap) {
                if (valueMap[key] + '' === extra.state + '') {
                    state = key;
                }
            }

            // 转成布尔值
            state = (state + '' === 'true');
        } else {
            // 布尔值
            state = (extra.state + '' === 'true');
        }

        // 自定义圆角 配置 4或者4px都可以
        let borderRadius = extra.borderRadius;
        let reg = /^[0-9]*$/;
        let isNumber = reg.test(extra.borderRadius);
        if (borderRadius && isNumber) {
            borderRadius = borderRadius + 'px';
        }

        // 显示文案图标
        let icon = extra.icon;

        that.updater.set({
            borderRadius,
            icon,
            valueMap,
            state,
            disabled,
            tip: extra.tip || '',
            confirmToTrue: extra.confirmToTrue || {},
            confirmToFalse: extra.confirmToFalse || {}
        });

        // 双向绑定
        that['@{owner.node}'].val(state);

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },
    '@{toggle}<click>'(e) {
        let that = this;
        let { disabled, state: curState, confirmToTrue, confirmToFalse, valueMap } = that.updater.get();
        if (disabled) {
            return;
        }

        let state = !curState;
        let title = '', content = '';
        if (state && confirmToTrue.title && confirmToTrue.content) {
            // 切换为true，需要二次提示
            title = confirmToTrue.title;
            content = confirmToTrue.content;
        } else if (!state && confirmToFalse.title && confirmToFalse.content) {
            // 切换为false，需要二次提示
            title = confirmToFalse.title;
            content = confirmToFalse.content;
        }

        let enterCallback = () => {
            that.updater.digest({
                state
            });

            let val = state;
            if (!$.isEmptyObject(valueMap)) {
                val = valueMap[state + ''];
            }

            that['@{owner.node}'].val(val).trigger($.Event('change', {
                state: val
            }));
        };

        if (title && content) {
            that.confirm({
                title,
                content,
                enterCallback
            }, {
                type: 'warn',
                target: $(e.eventTarget)
            })
        } else {
            enterCallback();
        }
    }
});