let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let that = this;
        that['@{owner.node}'] = $('#' + that.id);

        //初始化时保存一份当前数据的快照
        that.updater.snapshot();

        that.assign(extra);

        that.owner.oncreated = () => {
            // 所有子view加载完成后
            if (!that.$init) {
                that.$init = 1;

                // 计算实际高度
                let viewId = that.id;
                let list = that.updater.get('list');
                list.forEach((item, index) => {
                    let content = $('#' + viewId + '_content_' + index);
                    item.height = content.outerHeight();
                })
                that.updater.digest({
                    list
                })

                // 加载展开动画
                list.forEach((item, index) => {
                    item.inited = true
                })
                that.updater.digest({
                    list
                })
            }
        };
        that.ondestroy = () => {
            that.owner.off('created');
        }
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        that.updater.set({
            viewId: that.id,
            onlyOne: (extra.onlyOne + '' !== 'false'), // 是否只展示一个：默认为true
            originList: extra.list || [] // 初始展示列表
        });

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
        // trigger oncreated
        // 每次重新render的时候重新触发
        this.$init = null;

        let originList = this.updater.get('originList');
        let list = $.extend(true, [], originList);
        let hasExpand = false;
        list.forEach((item, index) => {
            if(!item.arrow){
                item.arrow = '<span class="mc-iconfont" style="font-size: 14px;">&#xe602;</span>';
            }
            if (!item.view) {
                item.view = '@./content';
            }
            item.expand = item.expand || false;
            if (item.disabled) {
                // 禁用的不展开
                item.expand = false;
            }
            hasExpand = hasExpand || item.expand;
        })
        if (!hasExpand) {
            // 默认展开非禁用第一个
            for (let i = 0; i < list.length; i++) {
                if (!list[i].disabled) {
                    list[i].expand = true;
                    break;
                }
            }
        }

        this.updater.digest({
            list
        });
        if (!hasExpand){
            // 组件内默认展开的请款，外抛事件通知展开状态变更
            this['@{fire}']();
        }
    },

    '@{fire}' () {
        let that = this;
        let list = that.updater.get('list');
        that['@{owner.node}'].trigger({
            type: 'change',
            expands: list.map(item => {
                return item.expand
            })
        })
    },

    'toggle<click>'(event) {
        let cur = event.params.index;
        let list = this.updater.get('list'),
            onlyOne = this.updater.get('onlyOne');
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
    }
});