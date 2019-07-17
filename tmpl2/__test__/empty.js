let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('global@../mx-style/index.less');
Magix.applyStyle('@scoped.style');

module.exports = Magix.View.extend({
    tmpl: '@empty.html',
    init() {
        this.observeLocation({
            path: true
        });
    },
    render() {
        $(window).scrollTop(0);
        let that = this;
        let updater = that.updater;
        
        // 当前路径
        let loc = Magix.Router.parse();
        let path = loc.path;
        let view = path.slice(1);
        let i = view.indexOf('/');
        if (path.indexOf('/all/') > -1) {
            view = '__test__' + view.slice(i);
        } else {
            view = 'mx-' + view.slice(0, i) + '/__test__' + view.slice(i);
        }

        updater.digest({
            view
        });
    }
});