let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@pannel.html',
    init(e) {
        this.viewOptions = e;
        this.updater.set({
            inlayConfig: $.extend(true, {}, e.inlay)
        })
    },
    render() {
        this.updater.digest();
    },
    'submit<change>'(e) {
        // e.dates
        // e.vs
        let inlayConfig = this.updater.get('inlayConfig');
        inlayConfig.dates = e.dates;
        inlayConfig.vs = e.vs;
        let viewOptions = this.viewOptions;
        if(viewOptions.submit){
            viewOptions.submit(inlayConfig);
        }
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    },
    'hide<cancel>'(e) {
        e.stopPropagation();
        let viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    }
});