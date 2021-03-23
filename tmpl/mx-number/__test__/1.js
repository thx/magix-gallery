let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            delay: 200,
            duration: 200,
            number: 12.68,
            numberDelay: 200,
            numberDuration: 200
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
        let { number } = this.updater.get();
        this.updater.digest({
            number: number + 100
        })
    },
    'sub<click>'(e) {
        let { number } = this.updater.get();
        this.updater.digest({
            number: number - 10
        })
    }
});