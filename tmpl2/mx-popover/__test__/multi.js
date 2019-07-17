let Magix = require('magix');
let Dialog = require('@../index');

module.exports = Magix.View.extend({
    tmpl: '@multi.html',
    mixins: [Dialog],
    init(e) {
        this.viewOptions = e;
    },
    render() {
        this.updater.digest({
            height: $(window).height()
        });
    },
    'cancel<click>'(event) {
        event.preventDefault();
        let viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    }
});
