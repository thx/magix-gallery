let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
require('./index');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@picker.html',
    init(extra) {
        let that = this;

        Monitor['@{setup}']();
        that.on('destroy', () => {
            Monitor['@{remove}'](that);
            Monitor['@{teardown}']();
        });

        //初始化时保存一份当前数据的快照
        that.updater.snapshot();

        that.assign(extra);
    },

    assign(extra) {
        let that = this;
        let altered = that.updater.altered();
        
        let color = extra.color || '';
        that.updater.set({
            viewId: that.id,
            align: extra.align,
            info: {
                showBtns: true,
                showAlpha: extra.showAlpha,
                color
            }
        })

        // 双向绑定
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(color);

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            that.updater.snapshot();
            return true;
        }
        return false;
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

            let inputNode = $('#input_' + that.id),
                calNode = $('#cpcnt_' + that.id);

            let gap = 10;
            let left = 0,
                top = inputNode.outerHeight() + gap;
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
        let show = that.updater.get('show');
        if (show) {
            let info = that.updater.get('info');
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