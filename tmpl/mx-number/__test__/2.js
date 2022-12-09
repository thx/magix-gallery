let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        let num = 1842.68;

        this.updater.digest({
            setting: {
                delay: 400,
                duration: 400,
            },
            num,
            str: this['@{num.format}'](num),
            duration: 400,
        });
    },
    'run<click>'(e) {
        let { delay, duration } = this.updater.get();
        this.updater.digest({
            numberDelay: delay,
            numberDuration: duration
        })
    },
    'add<click>'(e) {
        let { num, setting } = this.updater.get();
        num = (+num) + 1423.08;
        this.updater.digest({
            ...setting,
            num,
            str: this['@{num.format}'](num),
        })
    },
    'sub<click>'(e) {
        let { num, setting } = this.updater.get();
        num = (+num) - 800.23;
        this.updater.digest({
            ...setting,
            num,
            str: this['@{num.format}'](num),
        })
    }
});