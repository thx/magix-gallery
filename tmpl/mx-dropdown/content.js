let Magix = require('magix');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@content.html',
    init(e) {
        this.viewOptions = e;

        this.updater.set(e.data)
    },
    render() {
        this.updater.digest({});
    },
    '@{select}<click>'(e) {
        let viewOptions = this.viewOptions;
        if(viewOptions.submit){
            viewOptions.submit(e.params.item);
        }
    }
});