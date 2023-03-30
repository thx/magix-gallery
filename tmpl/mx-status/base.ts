
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';

export default View.extend({
    init(extra) {
        let that = this;
        that.updater.set({
            popId: `status_${that.id}`
        })

        that.on('destroy', () => {
            that['@{owner.node}'].off('mouseenter mouseleave');
            ['@{dealy.show.timer}', '@{dealy.hide.timer}'].forEach(key => {
                if (that[key]) {
                    clearTimeout(that[key]);
                }
            })

            let { popId } = that.updater.get();
            $(`#${popId}`).remove();
        });

        let oNode = $('#' + that.id);
        that['@{owner.node}'] = oNode;
        oNode.hover(() => {
            clearTimeout(that['@{dealy.hide.timer}']);
            that['@{dealy.show.timer}'] = setTimeout(that.wrapAsync(() => {
                //等待内容显示
                that['@{show}']();
            }), 200);
        }, () => {
            that['@{delay.hide}']();
        });

        that.assign(extra);
    },
    assign(extra) {
        // 当前数据截快照
        this.updater.snapshot();

        // 历史配置list，统一成list和adc-list
        let list = [];
        let textKey = extra.textKey || 'text',
            valueKey = extra.valueKey || 'value';
        if (extra.adcList && extra.adcList.length) {
            list = extra.adcList.map(item => {
                return {
                    ...item,
                    text: item.name,
                    value: item.code,
                    icon: item.properties?.icon,
                    color: item.properties?.color,
                }
            });
        } else {
            list = ((extra.list && extra.list.length) ? extra.list : (extra.list || [])).map(item => {
                return {
                    ...item,
                    text: item[textKey],
                    value: item[valueKey],
                }
            });
        };
        let selected = (extra.selected === null || extra.selected === undefined) ? '' : extra.selected,
            info = extra.info || {};

        this.updater.set({
            mode: extra.mode || 'icon',
            info,
            list,
            selected,
        });
        this['@{owner.node}'].val(selected);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        let { selected, list } = this.updater.get();

        // 当前项在最前面
        let cur = {};
        if (list.length > 0) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].value + '' === selected + '') {
                    cur = list[i];
                    list.splice(i, 1);
                    break;
                }
            }
            if (!$.isEmptyObject(cur)) {
                list.unshift(cur);
            }
        }
        this.updater.digest({
            cur,
            list,
        });
    },
    '@{init}'() {
        let that = this;

        let { popId } = that.updater.get();
        if (!$(`#${popId}`).length) {
            $(document.body).append(`<div mx-view class="mx-shadow @base.less:status-info" id="${popId}"></div>`);
        }

        // 先实例化，绑定事件，再加载对应的view
        let vf = that.owner.mountVframe(popId, '');
        vf.on('created', () => {
            let popNode = $(`#${popId}`);
            that['@{set.pos}'](popNode);

            popNode.hover(() => {
                clearTimeout(that['@{dealy.hide.timer}']);
            }, () => {
                that['@{delay.hide}']();
            });

            popNode.off('change.status').on('change.status', (e) => {
                that['@{hide}']();

                let selected = e.status.value;
                that.updater.set({ selected });
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
        let { expand, popId } = this.updater.get();
        if (expand) {
            this.updater.digest({
                expand: false
            });

            // 样式
            $(`#${popId}`).removeClass('@base.less:status-show');
        }
    }
});