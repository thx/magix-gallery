let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let that = this;

        // 是否只展示一个：默认为true
        let onlyOne = (extra.onlyOne + '' !== 'false');

        // 展示列表
        let list = extra.list || [];
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

        that.updater.set({
            viewId: that.id,
            onlyOne,
            list
        });

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
    },

    render() {
        this.updater.digest({});
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
    }
});