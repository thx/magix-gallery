let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        let list = [];
        for (let i = 0; i < 5; i++) {
            list.push({
                value: i,
                text: `选项${i}`
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
        this.updater.digest({
            open: false,
            selected: event.params.item
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

        // 只记录状态不digest
        let node = event.eventTarget;
        that.updater.set({ animing: true })
        node.setAttribute('mx-comp-expand-amin', 'animing');
        that['@{anim.timer}'] = setTimeout(() => {
            node.setAttribute('mx-comp-expand-amin', 'animend');
            that.updater.set({ animing: false })
        }, ms.replace('ms', ''));

        let open = that.updater.get('open');
        that.updater.digest({
            open: !open
        })
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