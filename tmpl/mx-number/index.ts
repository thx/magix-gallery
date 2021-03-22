/**
 * 数字动画
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        // 当前数据截快照
        this.updater.snapshot();

        // 默认行高1.5倍
        let fontSize = +extra.fontSize || 32;
        let lineHeight = +extra.lineHeight || (fontSize * 1.5);
        let color = extra.color || '#333333';

        // 动画（毫秒）
        let delay = +extra.delay || 200,
            duration = +extra.duration || 200;

        let num = +extra.num || 0;
        let reg = /^[0-9]*$/;
        let arr = (num + '').split('').map(i => {
            let isNumber = reg.test(i);
            return {
                num: isNumber ? +i : i,
                isNumber
            }
        });
        this.updater.set({
            color,
            fontSize,
            lineHeight,
            arr,
            delay,
            duration: duration / 1000,
            inited: false
        });

        // altered是否有变化
        // true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        let that = this;
        that.updater.digest();

        let { delay } = that.updater.get();
        setTimeout(() => {
            that.updater.digest({
                inited: true
            });
        }, delay)
    }
});

