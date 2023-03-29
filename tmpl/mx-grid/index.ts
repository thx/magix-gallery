/**
 * 卡片吸顶
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    init(extra) {
        let that = this;
        that['@{owner.node}'] = $('#' + that.id);

        let node = that['@{owner.node}'].find('[mx-grid-sticky="outer"]');
        if (node[0]) {
            let placeholder = $(node[0]);
            let child = placeholder.children('[mx-grid-sticky="inner"]');
            placeholder.outerHeight(child.outerHeight());

            let watchScroll = () => {
                let width = placeholder.outerWidth();
                let scrollTop = $(window).scrollTop();
                let offset = placeholder.offset();
                let top = offset.top;

                if (scrollTop > top) {
                    if (!that['@{grid.sticky.state}']) {
                        that['@{grid.sticky.state}'] = true;
                        child.addClass('@index.less:fixed');
                        child.css({
                            paddingLeft: offset.left,
                            paddingRight: $(window).width() - offset.left - width,
                        })
                    }
                } else {
                    if (that['@{grid.sticky.state}']) {
                        that['@{grid.sticky.state}'] = false;
                        child.removeClass('@index.less:fixed');
                        child.css({
                            paddingLeft: 0,
                            paddingRight: 0,
                        })
                    }
                }
            }

            let stickyName = `scroll.grid.sticky${that.id}`;
            that.on('destroy', () => {
                $(window).off(stickyName);
            });
            $(window).off(stickyName, watchScroll).on(stickyName, watchScroll);
            watchScroll();
        }

        that.assign(extra);
    },
    assign(extra) {
        return true;
    },
    render() {
        let rgb = this['@{color.to.rgb}'](this['@{get.css.var}']('--color-brand'));
        let vars = {};
        ['r', 'g', 'b'].forEach(key => {
            // 转成字符串防止加px
            vars[`--mx-grid-brand-${key}`] = rgb[key] + '';
        })
        this['@{owner.node}'].css(vars);
    }
});