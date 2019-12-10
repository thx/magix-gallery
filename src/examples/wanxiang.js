let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('global@../mx-style/index.less');
Magix.applyStyle('@scoped.style');

module.exports = Magix.View.extend({
    tmpl: '@wanxiang.html',
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
            view = 'examples' + view.slice(i);
        } else {
            view = 'mx-' + view.slice(0, i) + '/examples' + view.slice(i);
        }

        updater.digest({
            view
        });
    }
});