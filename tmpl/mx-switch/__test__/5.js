let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        this.updater.digest({
            state1: true,
            state2: true,
            disabled: false
        });
    },
    'disabled<click>'(event) {
        let { disabled } = this.updater.get();
        this.updater.digest({
            disabled: !disabled
        })
    },
    'toggle<change>'(event) {
        // event.state 当前开还是关
        let index = event.params.index;
        this.updater.digest({
            [`state${index}`]: event.state
        });
    },
    'change<click>'(event) {
        let { state1, state2 } = this.updater.get();
        this.updater.digest({
            state1: !state1,
            state2: !state2,
        });
    },
    'close<click>'(event) {
        this.updater.digest({
            state1: false,
            state2: false,
        });
    },
    'open<click>'(event) {
        this.updater.digest({
            state1: true,
            state2: true,
        });
    },
});