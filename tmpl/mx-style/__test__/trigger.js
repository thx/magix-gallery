let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@trigger.less');

module.exports = Base.extend({
    tmpl: '@trigger.html',
    render() {
        let value1 = 100,
            value2 = 200,
            value3 = 'ease-out';

        let vars = [
            `--test-end1: ${value1}%`,
            `--test-end2: ${parseInt(value1 / 2)}%`,
            `--test-end-duration: ${value2}ms`,
            `--test-end-ease: ${value3}`
        ]
        this.updater.digest({
            viewId: this.id,
            open: false,
            testOpen: false,
            value1,
            value2,
            value3,
            styles: vars.join(';')
        });
    },
    'toggle<click>'(event) {
        let open = this.updater.get('open');
        this.updater.digest({
            open: !open
        })
    },
    'toggleTest<click>'(event) {
        let testOpen = this.updater.get('testOpen');
        this.updater.digest({
            testOpen: !testOpen
        })
    },
    'change<click>'(event) {
        let input1 = document.getElementById(`${this.id}_input1`);
        let input2 = document.getElementById(`${this.id}_input2`);
        let input3 = document.getElementById(`${this.id}_input3`);

        let value1 = +input1.value,
            value2 = +input2.value,
            value3 = input3.value;
        let vars = [
            `--test-end1: ${value1}%`,
            `--test-end2: ${parseInt(value1 / 2)}%`,
            `--test-end-duration: ${value2}ms`,
            `--test-end-ease: ${value3}`
        ]
        this.updater.digest({
            value1,
            value2,
            value3,
            styles: vars.join(';'),
            testOpen: false
        });
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