let Magix = require('magix');
let Base = require('__test__/example');
let Copy = require('@../../mx-copy/dt');
module.exports = Base.extend({
    tmpl: '@3.html',
    mixins: [Copy],
    render() {
        this.updater.digest();
    },
    'copy<click>'(e) {
        let that = this;
        let text = Magix.guid('copy_');
        that.copy(text).then(() => {
            // success
            that.updater.digest({
                success: true,
                text
            })
        }, () => {
            // error
            that.updater.digest({
                success: false
            })
        })
    }
});