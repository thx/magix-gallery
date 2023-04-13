import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@7.html',
    init() {
        Base.prototype.init.call(this);
        this.on('destroy', () => {
            ['closeTimer', 'animTimer'].forEach(key => {
                if (this[key]) {
                    clearTimeout(this[key]);
                }
            })
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
            selected: item,
        })
        this.hide();
    },

    'toggle<click>'(e) {
        let that = this;
        if (that.updater.get('animing')) {
            return;
        };

        // 动画开始
        that.updater.digest({
            animing: true,
        });

        that.animTimer = setTimeout(() => {
            // 动画结束
            that.updater.digest({
                animing: false
            })
        }, that.getCssTimer('--mx-comp-expand-amin-timer'));

        this[this.updater.get('open') ? 'hide' : 'show']();
    },

    show() {
        this.updater.digest({
            open: true
        })
    },

    hide() {
        this.updater.digest({
            open: false,
            closing: true,
        })
        this.closeTimer = setTimeout(() => {
            this.updater.digest({
                closing: false
            })
        }, this.getCssTimer('--duration'));
    },

    getCssTimer(key) {
        let root = window.getComputedStyle(document.documentElement);
        let v = document.body.style.getPropertyValue(key) || root.getPropertyValue(key);
        if (!v) {
            return 0;
        } else {
            v = v.trim();
            let milliseconds = 0;
            if (v.indexOf('ms') < 0) {
                // 秒
                milliseconds = Math.abs(+(v.replace('s', '')) * 1000);
            } else {
                // 毫秒
                milliseconds = +(v.replace('ms', ''));
            }
            return milliseconds;
        }
    },

    /**
     * 点击非节点区域关闭下拉框
     */
    '$doc<click>'(event) {
        let id = this.id + '_wrapper';
        if (!Magix.inside(event.target, id) && this.updater.get('open')) {
            this.hide();
        }
    }
});