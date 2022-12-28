/**
 * error
 */
import Magix from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@error.less');

export default Base.extend({
    tmpl: '@51.html',
    render() {
        this.updater.digest({
            expand: true,
            expandIcon: '<i class="mx-iconfont @error.less:rotate-icon">&#xe7c9;</i>',
            closeIcon: '<i class="mx-iconfont">&#xe7c9;</i>'
        });
    },
    'toggle<click>'(e) {
        // 如果有动画，需要抛出navslidend通知变更
        let { expand } = this.updater.get();
        this.updater.digest({
            expand: !expand,
        })
    }
});