let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@demo3.html',
    init(e) {
        this.viewOptions = e;
    },
    render() {
        this.updater.digest();
    },
    'cancel<click>'(event) {
        event.preventDefault();
        let viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    }
});
