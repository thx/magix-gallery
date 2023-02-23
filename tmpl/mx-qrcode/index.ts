import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra, configs) {
        // 当前数据截快照
        this.updater.snapshot();

        // 展示内容
        let content = '';
        if (configs && configs.node) {
            // attr change
            // 此时取owner.innerHTML为button
            content = extra.content || configs.node.innerHTML || '';
        } else {
            // 首次渲染
            let owner = document.getElementById(this.id);
            content = extra.content || owner.innerHTML || '';
        }

        let triggerType = (['flat', 'hover'].indexOf(extra.triggerType) > -1) ? extra.triggerType : 'flat';

        let width = extra.width || extra.size || 80,
            height = extra.height || extra.size || 80;
        this.updater.set({
            content,
            qrContent: `<div id="qrcode_${this.id}" style="width: ${width}px; height: ${height}px;"></div>`,
            triggerType,
            width,
            height,
            url: extra.url,
            placement: extra.placement,
            align: extra.align,
        });

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;

    },
    render() {
        Magix.use('http://test.taobao.com:5556/build/src/mx-qrcode/vendor/qrcode.min.js', () => {
            this.updater.digest();

            if (this.updater.get('triggerType') == 'flat') {
                this['@{show}<focusin>']();
            }
        })
    },
    '@{show}<focusin>'(e) {
        let { url, width, height } = this.updater.get();
        let node = $(`#qrcode_${this.id}`);
        if (url && node && node.length) {
            node.qrcode({
                text: url,
                width,
                height,
            })
        }
    }
});