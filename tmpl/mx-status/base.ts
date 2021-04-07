
import Magix, { Vframe } from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
import dropdown from './dropdown';

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

        let selected = extra.selected || '';
        this.updater.set({
            isDd: (this.owner.path.indexOf('mx-status/dropdown') > -1),
            opers: extra.opers || [],
            info: extra.info || {},
            selected
        });
        this['@{owner.node}'].val(selected);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        let that = this;
        let { opers, info, selected } = that.updater.get();

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
        that.updater.digest({
            cur,
            showInfo: !$.isEmptyObject(info) // 是否有提示信息
        })
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
            let popNode = $(`#${popId}`),
                oNode = that['@{owner.node}'],
                isDd = that.updater.get('isDd');
            let { top, left } = oNode.offset();
            if (!isDd) {
                top = top - 10;
            }
            popNode.css({
                top: top - 1,
                left: left - 1
            })

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
    '@{show}'() {
        let that = this;
        let { opers, info, cur, showInfo, isDd } = that.updater.get();
        if (that['@{pos.show}'] || (isDd && (opers.length == 0) && showInfo && !info.tip && !info.tipView)) {
            return;
        }
        that['@{pos.show}'] = true;

        // 初始化
        if (!that['@{pos.init}']) {
            that['@{pos.init}'] = true;
            that['@{init}']();
        }
        let popId = `status_${that.id}`;
        let vf = Vframe.get(popId);
        if (vf) {
            vf.unmountView();
        };
        vf.mountView('@./content', {
            data: {
                cur,
                info,
                opers,
                showInfo
            }
        });

        // 样式
        let popNode = $('#status_' + that.id);
        popNode.addClass('@base.less:status-show');
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