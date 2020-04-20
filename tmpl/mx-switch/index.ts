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
        let altered = that.updater.altered();

        that['@{owner.node}'] = $('#' + that.id);

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (extra.disabled + '' === 'true') || $('#' + that.id)[0].hasAttribute('mx-disabled');
        that.updater.set({
            on: (extra.state + '' === 'true'),
            disabled,
            tip: extra.tip || '',
            confirmToTrue: extra.confirmToTrue || {},
            confirmToFalse: extra.confirmToFalse || {}
        });
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render() {
        this.updater.digest();
    },

    '@{toggle}<click>'(e) {
        let that = this;
        let { disabled, on, confirmToTrue, confirmToFalse } = that.updater.get();

        if (disabled) {
            return;
        }

        let state = !on;

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
                on: state
            });
            let event = $.Event('change', {
                state
            });
            that['@{owner.node}'].val(state).trigger(event);
        }
        if (title && content) {
            that.confirm({
                title,
                content,
                enterCallback
            }, {
                    target: $(e.eventTarget)
                })
        } else {
            enterCallback();
        }
    }
});