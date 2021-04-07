import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
import * as Monitor from '../mx-util/monitor';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@picker.html',
    init(extra) {
        let that = this;

        Monitor['@{setup}']();
        that.on('destroy', () => {
            Monitor['@{remove}'](that);
            Monitor['@{teardown}']();
        });

        that.assign(extra);
    },

    assign(extra) {
        let that = this;

        // 当前数据截快照
        that.updater.snapshot();

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (extra.disabled + '' === 'true') || $('#' + that.id)[0].hasAttribute('mx-disabled');

        let color = extra.color || '';
        that.updater.set({
            disabled,
            align: extra.align,
            show: false,
            dot: (extra.dot + '') === 'true',
            info: {
                showBtns: true,
                showAlpha: extra.showAlpha,
                color
            }
        })

        // 双向绑定
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(color);

        // altered是否有变化
        // true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest({});
    },

    '@{stop}<change>'(e) {
        e.stopPropagation();
    },

    '@{toggle}<click>'(e) {
        e.preventDefault();
        let show = this.updater.get('show');
        if (show) {
            this['@{hide}']();
        } else {
            this['@{show}']();
        }
    },

    '@{show}'() {
        let that = this;
        let updater = that.updater;
        let show = updater.get('show');
        if (!show) {
            updater.digest({
                show: true
            })

            let inputNode = $('#trigger_' + that.id),
                calNode = $('#cpcnt_' + that.id);

            let left = 0,
                top = inputNode.outerHeight();
            let align = updater.get('align');
            if (align == 'right') {
                left = inputNode.outerWidth() - calNode.outerWidth();
            }

            updater.digest({
                top,
                left
            })

            Monitor['@{add}'](that);
        }
    },

    '@{hide}'() {
        let that = this;
        let { show, info } = this.updater.get();
        if (show) {
            let color = that['@{owner.node}'].val();
            info.color = color;
            that.updater.digest({
                show: false,
                info
            })

            Monitor['@{remove}'](that);
        }
    },

    '@{inside}'(node) {
        let that = this;
        let inView = Magix.inside(node, that.id) ||
            Magix.inside(node, that['@{owner.node}'][0]);
        if (!inView) {
            let children = that.owner.children();
            for (let i = children.length - 1; i >= 0; i--) {
                let child = Magix.Vframe.get(children[i]);
                if (child) {
                    inView = child.invoke('@{inside}', [node]);
                }
                if (inView) break;
            }
        }
        return inView;
    },

    '@{color.picked}<change>'(e) {
        e.stopPropagation();
        let that = this;
        that['@{owner.node}'].val(e.color).trigger({
            type: 'change',
            color: e.color
        });

        that['@{hide}']();
    }
});