let Magix = require('magix');
Magix.applyStyle('@content.less');

module.exports = Magix.View.extend({
    tmpl: '@content.html',
    init(e) {
        this.viewOptions = e;

        let data = e.data || {};
        this.updater.set({
            menus: data.menus
        })
    },
    render() {
        this.updater.digest({});
    },
    'submit<click>'(e) {
        let viewOptions = this.viewOptions;
        if(viewOptions.submit){
            viewOptions.submit(e.params.value);
        }
    }
});