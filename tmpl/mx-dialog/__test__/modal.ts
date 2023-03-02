import Magix from 'magix';
import Base from './index';

export default Base.extend({
    tmpl: '@modal.html',
    render() {
        let methods = [{
            key: 'mxModal(viewPath, [viewOptions], [dialogOptions])',
            desc: '自定义浮层',
        }, {
            key: 'mxCloseAllDialogs()',
            desc: '关闭当前所有展开的浮层',
        }];

        this.updater.digest({
            methods,
        });
    }
});