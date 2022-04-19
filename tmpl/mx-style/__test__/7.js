let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@7.html',
    init() {
        this.on('destroy', () => {
            if (this.animTimer) {
                clearTimeout(this.animTimer);
            }
        });
    },
    render() {
        let list = [];
        for (let i = 0; i < 5; i++) {
            list.push({
                value: i,
                text: `选项${i}`,
                disabled: (i == 2),
            })
        }
        this.updater.digest({
            viewId: this.id,
            open: false,
            list,
            selected: list[0]
        });
    },
    /**
     * 选中某个选项
     */
    'select<click>'(event) {
        let { item } = event.params;
        if (item.disabled) {
            return;
        }
        this.updater.digest({
            open: false,
            selected: item,
        })
    },
    /**
     * 展开收起
     */
    'toggle<click>'(event) {
        let that = this;
        if (that.updater.get('animing')) {
            return;
        };

        // 扩散动画时长变量
        let ms = that.getCssVar('--mx-comp-expand-amin-timer');

        that.updater.digest({
            animing: true,
            open: !that.updater.get('open')
        })

        that.animTimer = setTimeout(() => {
            // 动画结束
            that.updater.digest({
                animing: false
            })
        }, ms.replace('ms', ''));
    },
    getCssVar(key, def) {
        let root = window.getComputedStyle(document.documentElement);
        let v = document.body.style.getPropertyValue(key) || root.getPropertyValue(key);
        if (!v) {
            return def || '';
        } else {
            return v.trim();
        }
    },
    /**
     * 点击非节点区域关闭下拉框
     */
    '$doc<click>'(event) {
        let that = this;
        let id = that.id + '_wrapper';
        if (!Magix.inside(event.target, id)) {
            that.updater.digest({
                open: false
            })
        }
    }
});