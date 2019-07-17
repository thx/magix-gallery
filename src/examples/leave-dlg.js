let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@leave-dlg.html',
    init(e) {
        this.viewOptions = e;
        this.updater.set(e);
    },
    render() {
        this.updater.digest();
    },
    'submit<click>'(event) {
        event.preventDefault();
        let viewOptions = this.viewOptions;
        if(viewOptions.enterCallback){
            viewOptions.enterCallback(event.params.save);
        }
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    },
    'cancel<click>'(event) {
        event.preventDefault();
        let viewOptions = this.viewOptions;
        if(viewOptions.cancelCallback){
            viewOptions.cancelCallback();
        }
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    }
});
