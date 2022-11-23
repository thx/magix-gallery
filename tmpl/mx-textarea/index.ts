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
        let that = this;
        that.updater.snapshot();

        this.updater.set({
            value: extra.value || '',
            name: extra.name || `${this.id}_name`,
            rows: +extra.rows || 4,
            cols: +extra.cols || 20,
            placeholder: extra.placeholder || '请输入',
            autocomplete: extra.autocomplete || 'off',
            minlength: +extra.minlength || 0,
            maxlength: +extra.maxlength || 0,
        });

        this['@{owner.node}'] = $(`#${this.id}`);

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        this['@{owner.node}'].val(this.updater.get('value'));
    },

    /**
     * 双向绑定处理
     * 
     * mx-form $[mxc]<change,focusout>
     * 原生change，focusout不冒泡：此时e上无searchValue，双向绑定会失效
     * 阻止冒泡，二次包装，值有修改时派发
     */
    '@{fire}<change>'(e) {
        // 同名原生事件不冒泡，避免重复触发
        // 且原生change上无 searchValue
        e.stopPropagation();

        let oldValue = this.updater.get('value');
        let node = $(`#${this.id}_textarea`);
        let value = node.val();
        if (oldValue !== value) {
            this.updater.digest({ value });
            this['@{fire}'](['change']);
        }
    },

    /**
    * 双向绑定处理
    * 
    * mx-form $[mxc]<change,focusout>
    * 原生change，focusout不冒泡：此时e上无searchValue，双向绑定会失效
    * 阻止冒泡，二次包装，固定派发
    */
    '@{fire}<focusout>'(e) {
        e.stopPropagation();

        let node = $(`#${this.id}_textarea`);
        this.updater.digest({
            value: node.val(),
        });
        this['@{fire}'](['focusout']);
    },

    /**
     * keyup：正常冒泡，有修改触发change
     */
    '@{fire}<keyup>'(e) {
        let oldValue = this.updater.get('value');
        let node = $(`#${this.id}_textarea`);
        let value = node.val();
        if (oldValue !== value) {
            this.updater.digest({ value });
            this['@{fire}'](['change']);
        }
    },

    '@{fire}'(types) {
        let that = this;
        let { value } = that.updater.get();
        that['@{owner.node}'].val(value);

        types.forEach(type => {
            that['@{owner.node}'].trigger({
                type,
                value,
            });
        })
    }
});
