import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@12.html',
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        let dlg = this.mxDialog('@./dialog-inner-tip', {
            content: 'beforeClose：关闭浮层之前事件响应'
        }, {
            height: 400,
            header: {
                title: '浮层标题'
            },
            footer: {
                enter: false,
                cancel: true,
            }
        });

        dlg.beforeClose(() => {
            // do something
            // resolve 组件自动支持dlg.close
            return new Promise(resolve => {
                this.confirm({
                    title: '二次确认',
                    content: '确认要关闭吗',
                    enterCallback: resolve
                })
            })
        })
    }
});