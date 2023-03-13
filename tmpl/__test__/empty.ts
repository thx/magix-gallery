import Magix, { Router } from 'magix';
import * as $ from '$';
Magix.applyStyle('@global.style');
Magix.applyStyle('@scoped.style');

export default Magix.View.extend({
    tmpl: '@empty.html',
    init() {
        this.observeLocation({
            path: true
        });
    },
    render() {
        $(window).scrollTop(0);

        // 当前路径
        let loc = Router.parse();
        let path = loc.path;
        let view = path.slice(1);
        let i = view.indexOf('/');
        if (path.indexOf('/all/') > -1) {
            view = '__test__' + view.slice(i);
        } else {
            view = 'mx-' + view.slice(0, i) + '/__test__' + view.slice(i);
        }

        let darkPaths = {
            '/main/nav-demo': true,
        }
        this.updater.digest({
            view,
            dark: darkPaths[path],
        });
    }
});