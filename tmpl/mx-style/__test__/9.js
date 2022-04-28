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
        let list = [];
        for (let i = 0; i < 3; i++) {
            list.push({
                value: i,
                text: `选项${i}`
            })
        }
        this.updater.digest({
            viewId: this.id,
            list,
            selected: list[0]
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

        that.updater.digest({
            selected: event.params.item,
            animing: true
        })

        that.animTimer = setTimeout(() => {
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

});