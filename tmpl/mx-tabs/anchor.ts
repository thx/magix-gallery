/**
 * 锚点tab
 */
import Magix from 'magix';
import * as $ from '$';
import Base from './base';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@anchor.html',
    render() {
        let that = this;
        that.updater.digest();
        let { selected, list } = that.updater.get();
        that['@{sync.line}'](selected);

        let index = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i].value == selected) {
                index = i;
                break;
            }
        }
        if (index > 0) {
            // 显示第一个时不处理，>1才默认定位到相应位置
            that['@{init.delay.timer}'] = setTimeout(that.wrapAsync(() => {
                let cont = $(`#${list[index].value}`);
                if (cont && cont.length) {
                    let mainNode = $(`#${that.id}`);
                    $(window).scrollTop(Math.ceil(cont.offset().top - mainNode.outerHeight()));
                }
            }), 50);
        }
    },
    '@{select}<click>'(e) {
        let item = e.params.item;
        let { value } = item;
        this['@{select}'](item);

        // 内容滚定到可视范围之内
        let cont = $(`#${value}`);
        if (cont && cont.length) {
            let mainNode = $(`#${this.id}`);
            // 向上取整
            $(window).scrollTop(Math.ceil(cont.offset().top - mainNode.outerHeight()));
        }
    },
    '$win<scroll>'(e) {
        let that = this;
        clearTimeout(that['@{init.delay.timer}']);

        let { list, fixed, selected } = that.updater.get();
        let mainNode = $('#' + that.id);
        let width = mainNode.outerWidth(),
            height = mainNode.outerHeight();
        let scrollTop = $(window).scrollTop();
        let offset = mainNode.offset();
        let top = offset.top;

        if (scrollTop > top) {
            if (!fixed) {
                that.updater.digest({
                    fixed: true,
                    fixedStyle: {
                        left: offset.left,
                        right: $(window).width() - offset.left - width
                    }
                })
            }
        } else {
            if (fixed) {
                that.updater.digest({
                    fixed: false
                })
            }
        }

        let index = -1;
        for (let i = 0; i < list.length; i++) {
            let item = list[i];
            let { value } = item;
            let cont = $(`#${value}`);
            if (cont && cont.length) {
                let contTop = cont.offset().top,
                    contHeight = cont.outerHeight();
                let h = scrollTop + height;
                if ((h >= contTop) &&
                    (h < contTop + contHeight)) {
                    index = i;
                } else if (h >= contTop + contHeight) {
                    // 下一个
                    index = i + 1;
                }
            }
        }

        if ((index >= 0) && (index <= list.length - 1)) {
            let match = list[index];
            if (selected != match.value) {
                // 双向绑定
                that['@{select}'](match);

                // 更新view
                that.updater.digest({
                    selected: match.value
                })
                that['@{sync.line}'](match.value);
            }
        } else {
            // 所有模块不在可视范围内，恢复到默认态
            that.updater.digest({
                fixed: false
            })

        }
    }
});