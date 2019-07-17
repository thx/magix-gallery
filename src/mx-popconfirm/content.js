let Magix = require('magix');
Magix.applyStyle('@../mx-popover/index.less');

module.exports = Magix.View.extend({
    tmpl: '@content.html',
    init(e) {
        this.viewOptions = e;

        let that = this;
        let data = e.data || {};
        this.updater.set({
            content: data.content || ''
        })
    },
    render() {
        this.updater.digest({});
    },
    'submit<click>'(e) {
        let viewOptions = this.viewOptions;
        if(viewOptions.submit){
            viewOptions.submit();
        }
    },
    'cancel<click>'(e) {
        let viewOptions = this.viewOptions;
        if(viewOptions.cancel){
            viewOptions.cancel();
        }
    }
});