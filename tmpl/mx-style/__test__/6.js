let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            open: false,
        });
    },
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