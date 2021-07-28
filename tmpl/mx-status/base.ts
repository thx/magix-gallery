
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';

export default View.extend({
    init(extra) {
        let that = this;

        that.on('destroy', () => {
            that['@{owner.node}'].off('mouseenter mouseleave');
            if (that['@{dealy.show.timer}']) {
                clearTimeout(that['@{dealy.show.timer}']);
            }
            if (that['@{dealy.hide.timer}']) {
                clearTimeout(that['@{dealy.hide.timer}']);
            }
            $('#status_' + that.id).remove();
        });
        let oNode = $('#' + that.id);
        that['@{owner.node}'] = oNode;
        oNode.hover(() => {
            clearTimeout(that['@{dealy.hide.timer}']);
            that['@{dealy.show.timer}'] = setTimeout(that.wrapAsync(() => {
                //等待内容显示
                that['@{show}']();
            }), 100);
        }, () => {
            that['@{delay.hide}']();
        });

        that.assign(extra);
    },
    assign(extra) {
        // 当前数据截快照
        this.updater.snapshot();

        let selected = extra.selected || '',
            opers = extra.opers || [],
            info = extra.info || {};

        // 当前项在最前面
        let cur = {};
        if (opers.length > 0) {
            for (var i = 0; i < opers.length; i++) {
                if (opers[i].value + '' === selected + '') {
                    cur = opers[i];
                    opers.splice(i, 1);
                    break;
                }
            }
            if (!$.isEmptyObject(cur)) {
                opers.unshift(cur);
            }
        }

        this.updater.set({
            mode: extra.mode || 'icon',
            opers,
            info,
            selected,
            cur,
            showInfo: !$.isEmptyObject(info), // 是否有提示信息
        });
        this['@{owner.node}'].val(selected);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },
    '@{init}'() {
        let that = this;

        let popId = `status_${that.id}`;
        if (!$(`#${popId}`).length) {
            $(document.body).append(`<div mx-view class="mx-shadow @base.less:status-info" id="${popId}"></div>`);
        }

        // 先实例化，绑定事件，再加载对应的view
        let vf = that.owner.mountVframe(popId, '');
        vf.on('created', () => {
            let popNode = $(`#${popId}`);
            let styles = that['@{get.pos}']();
            popNode.css(styles);

            popNode.hover(() => {
                clearTimeout(that['@{dealy.hide.timer}']);
            }, () => {
                that['@{delay.hide}']();
            });

            popNode.off('change.status').on('change.status', (e) => {
                that['@{hide}']();
                let selected = e.status.value;
                that.updater.set({
                    selected
                });
                that.render();
                $('#' + that.id).val(selected).trigger({
                    type: 'change',
                    status: e.status
                })
            })
        });
    },
    '@{delay.hide}'() {
        let that = this;
        clearTimeout(that['@{dealy.show.timer}']);
        clearTimeout(that['@{dealy.hide.timer}']);
        that['@{dealy.hide.timer}'] = setTimeout(that.wrapAsync(() => {
            that['@{hide}']();
        }), 200);
    },
    '@{hide}'() {
        if (!this['@{pos.show}']) {
            return;
        }
        this['@{pos.show}'] = false;

        // 样式
        let popNode = $('#status_' + this.id);
        popNode.removeClass('@base.less:status-show');
    }
});