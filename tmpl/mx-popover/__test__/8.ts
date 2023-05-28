import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@8.html',
    render() {
        let list = [{
            text: '默认情况下',
            action: `操作：<a class="color-brand" href="javascript:;" mx-click="open()">点击打开浮层</a>`
        }, {
            text: '自定义较小的z-index',
            zIndex: 100,
            action: `操作：<a class="color-brand" href="javascript:;" mx-click="open()">点击打开浮层</a>`
        }];
        this.updater.digest({
            list
        });
    },
});