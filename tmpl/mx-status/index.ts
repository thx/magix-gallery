import Magix, { Vframe } from 'magix';
import * as $ from '$';
import Base from './base';
Magix.applyStyle('@./base.less');
export default Base.extend({
    tmpl: '@index.html',
    '@{set.pos}'(popNode) {
        let oNode = this['@{owner.node}'];
        let { top, left } = oNode.offset();
        let iconNode = popNode.find('.@./base.less:status-icon');
        let popOffset = popNode.offset(),
            iconOffset = $(iconNode[0]).offset();
        popNode.css({
            top: top - (iconOffset.top - popOffset.top),
            left: left - (iconOffset.left - popOffset.left)
        });
    },
    '@{show}'(force) {
        let that = this;
        let { list, info, cur, expand, mode, popId, spm } = that.updater.get();
        if (!force && (expand || (list.length == 0 && mode == 'text' && info.text && !info.tipView && !info.tip))) {
            // 不显示的特殊场景
            return;
        }

        that.updater.digest({
            expand: true
        })

        // 初始化
        if (!that['@{pos.init}']) {
            that['@{pos.init}'] = true;
            that['@{init}']();
        };

        // 每次显示重新传入数据
        let vf = Vframe.get(popId);
        if (vf) {
            vf.unmountView();
        };
        vf.mountView('@./content', {
            data: {
                cur,
                info,
                list,
                spm,
            },
            prepare: () => {
                // 样式
                let popNode = $(`#${popId}`);
                popNode.addClass('@base.less:status-show');

                // 定位
                that['@{set.pos}'](popNode);
            }
        });
    },
});