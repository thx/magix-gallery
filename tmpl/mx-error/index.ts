/**
 * 详见
 */
import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        let type = (extra.type || 'not-found') + '';

        // 历史配置 兼容
        switch (type) {
            case '404':
                type = 'not-found';
                break;
            case '500':
            case '502':
                type = 'network-error';
                break;
        }
        this.updater.set({
            type,
            tip: extra.tip || $(`#${this.id}`).html(),
            btns: (extra.btns + '' !== 'false')
        })
    },
    render() {
        let that = this;
        // not-found： 404
        // network-error： 网络异常
        // empty-content： 暂无内容
        // empty-search： 暂无查询数据
        // no-access：暂无访问权限
        // loading：数据计算中，请耐心等待
        $.getJSON('//g.alicdn.com/mm/bp-source/lib/code.json', (data) => {
            let { type, tip } = that.updater.get();
            let config = data.errorImgs[type] || data.errorImgs['not-found'];
            that.updater.digest(Magix.mix(config, {
                tip: tip || config.text
            }));
        });
    },
    'back<click>'(e) {
        e.preventDefault();
        history.back();
    }
});