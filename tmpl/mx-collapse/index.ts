import Magix from 'magix';
import * as View from '../mx-util/view';
import * as $ from '$';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        let that = this;
        that['@{owner.node}'] = $('#' + that.id);
        that.owner.oncreated = () => {
            // 所有子view加载完成后
            if (!that.$init) {
                that.$init = 1;

                // 计算实际高度
                let { viewId, list } = that.updater.get();
                list.forEach((item, index) => {
                    let content = $('#' + viewId + '_content_' + index);
                    item.height = content.outerHeight();
                })
                that.updater.digest({
                    list
                })
            }
        };
        that.ondestroy = () => {
            that.owner.off('created');
        }

        that.assign(extra);
    },
    assign(extra) {
        let that = this;
        that.updater.snapshot();

        let mode = extra.mode;
        if (['common', 'ghost', 'light'].indexOf(mode) < 0) {
            mode = 'common';
        }

        let list = (extra.list || []).map((item, index) => {
            let expand = item.expand + '' === 'true';
            let disabled = item.disabled + '' === 'true';
            if (disabled) {
                // 禁用的不展开
                expand = false;
            }

            return {
                ...item,
                opers: item.opers || [],
                arrow: item.arrow || '<span class="mc-iconfont fontsize-14">&#xe6b8;</span>',
                view: item.view || '@./content',
                expand,
                disabled,
            };
        })

        that.updater.set({
            mode,
            onlyOne: (extra.onlyOne + '' !== 'false'), // 是否只展示一个：默认为true
            list,
        });

        let altered = that.updater.altered();
        return altered;
    },
    render() {
        // trigger oncreated
        // 每次重新render的时候重新触发
        this.$init = null;
        this.updater.digest();
    },

    '@{fire}'() {
        let { list } = this.updater.get();
        this['@{owner.node}'].trigger({
            type: 'change',
            expands: list.map(item => {
                return item.expand;
            })
        })
    },

    'toggle<click>'(event) {
        let cur = event.params.index;
        let { list, onlyOne } = this.updater.get();
        list.forEach((item, index) => {
            if (index == cur) {
                item.expand = !item.expand;
            } else {
                if (onlyOne) {
                    item.expand = false;
                }
            }
        })
        this.updater.digest({
            list
        })
        this['@{fire}']();
    },

    'edit<click>'(event) {
        event.stopPropagation();
        
        this['@{owner.node}'].trigger({
            type: 'edit',
            ...event.params,
        })
    }
});