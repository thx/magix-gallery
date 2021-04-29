/**
 * 涉及规范 https://aone.alibaba-inc.com/req/33590073
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

        let width = extra.width || '100%';
        if (width.indexOf('%') < 0 && width.indexOf('px') < 0) {
            width += 'px';
        };

        this.updater.set({
            value: extra.value || '',
            width,
            textAlign: extra.textAlign || 'left',
            placeholder: extra.placeholder,
            autocomplete: extra.autocomplete,
            small: (extra.small + '' === 'true'),
            search: (extra.search + '' === 'true'),
            showDelete: (extra.showDelete + '' === 'true'),
            maxlength: +extra.maxlength || 0
        });

        this['@{owner.node}'] = $(`#${this.id}`);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        this['@{fire}<keyup,change,focusout>']();
    },

    /**
     * 清空输入内容
     */
    '@{clear}<click>'(e) {
        e.preventDefault();
        e.stopPropagation();

        // 清空选中项
        this.updater.digest({
            value: ''
        });

        // input值被动修改时不会触发change
        // 需要手动触发
        this['@{owner.node}'].val('').trigger({
            type: 'change',
            value: ''
        });
        this['@{owner.node}'].trigger({
            type: 'clear',
            value: ''
        });
    },

    /**
     * 双向绑定处理
     */
    '@{fire}<keyup,change,focusout>'(e) {
        let node = $(`#${this.id}_input`);
        let value = node.val();

        if (e) {
            // 双向绑定事件参数
            e.value = value;
        }

        this.updater.digest({
            value
        })
        this['@{owner.node}'].val(value);
    }
});
