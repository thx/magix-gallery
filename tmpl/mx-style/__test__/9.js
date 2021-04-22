let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@9.less');

module.exports = Base.extend({
    tmpl: '@9.html',
    init() {
        this.on('destroy', () => {
            if (this.animTimer) {
                clearTimeout(this.animTimer);
            }
        });
    },
    render() {
        this.updater.digest({
            viewId: this.id
        });
    },
    /**
     * 选中某个选项
     */
    'select<click>'(event) {
        let that = this;
        if (that.updater.get('animing')) {
            return;
        };

        // 扩散动画时长变量，单位毫秒
        let ms = that.getCssVar('--mx-comp-expand-amin-timer');

        // 只记录状态不digest
        let node = event.eventTarget;
        that.updater.set({ animing: true })
        node.setAttribute('mx-comp-expand-amin', 'animing');
        that.animTimer = setTimeout(() => {
            node.setAttribute('mx-comp-expand-amin', 'animend');
            that.updater.set({ animing: false })
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

});