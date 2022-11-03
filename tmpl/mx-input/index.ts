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

        // 输入框
        let type = 'text';

        // 字符数，此处仅做样式，不处理校验逻辑，实际校验位mx-form
        let maxlength = +extra.maxlength || 0;

        // 输入框的值
        let value = (extra.value === undefined || extra.value === null) ? '' : extra.value;

        // 前缀
        let prefix = extra.prefix || '', prefixes = [];
        switch (prefix) {
            case 'search':
            case 'money':
            case 'user':
                prefixes.push(prefix);
                break;

            default:
                if (extra.search + '' === 'true') {
                    // 兼容历史api
                    prefixes.push('search');
                };
                if (prefix) {
                    // 自定义提示
                    prefixes.push(prefix);
                };
                break;
        }

        // 后缀
        let suffix = extra.suffix || '', suffixes = [];
        switch (suffix) {
            case 'password':
                type = 'password'; // 密码输入框
                suffixes.push(suffix);
                break;

            case 'delete':
                suffixes.push(suffix);
                break;

            default:
                if (extra.showDelete + '' === 'true') {
                    // 兼容历史api
                    suffixes.push('delete');
                };
                if (suffix) {
                    // 自定义提示
                    suffixes.push(suffix);
                };
                break;
        }

        // 兼容老api small
        let size = extra.size || ((extra.small + '' === 'true') ? 'small' : 'normal');
        if (['small', 'normal', 'large'].indexOf(size) < 0) {
            size = 'normal';
        }

        // 搜索类型，默认两个字符位置
        let searchWidth = extra.searchWidth || 'calc(var(--input-h-gap, 8px) * 2 + var(--arrow-size, 18px) + var(--input-font-size, var(--font-size)) * 2 + 2px)';
        let searchList = extra.searchList || [];
        let searchValue = (extra.searchValue === null || extra.searchValue === undefined) ? (searchList[0] ? searchList[0].value : '') : extra.searchValue;

        this.updater.set({
            type,
            value,
            placeholder: extra.placeholder || '请输入',
            autocomplete: extra.autocomplete || 'off',
            maxlength,
            searchWidth,
            searchList,
            searchValue,
            prefixes,
            suffixes,
            size,
        });

        this['@{owner.node}'] = $(`#${this.id}`);
        this['@{owner.node}'].val(value);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
    },

    /**
     * 清空输入内容
     */
    '@{clear}<click>'(e) {
        e.preventDefault();
        e.stopPropagation();

        // 清空选中项
        // input值被动修改时不会触发change
        // 需要手动触发
        this.updater.digest({ value: '' })
        this['@{fire}'](['clear', 'change']);
    },

    '@{togglePassword}<click>'(e) {
        e.stopPropagation();
        let { type } = this.updater.get();
        this.updater.digest({
            type: (type == 'password') ? 'text' : 'password',
        });
    },

    '@{changeSearchType}<change>'(e) {
        e.stopPropagation();
        this.updater.digest({ searchValue: e.value });
        this['@{fire}'](['change']);
    },

    '@{stop}<focusin,focusout,keyup>'(e) {
        e.stopPropagation();
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
        let node = $(`#${this.id}_input`);
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

        let node = $(`#${this.id}_input`);
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
        let node = $(`#${this.id}_input`);
        let value = node.val();
        if (oldValue !== value) {
            this.updater.digest({ value });
            this['@{fire}'](['change']);
        }
    },

    /**
     * 点击搜索按钮固定派发change事件
     */
    '@{fire}<click>'(e) {
        e.stopPropagation();

        let oldValue = this.updater.get('value');
        let node = $(`#${this.id}_input`);
        let value = node.val();
        this.updater.digest({ value });
        if (oldValue !== value) {
            // 数据变化派发change
            this['@{fire}'](['change']);
        }
        
        // 固定派发search事件
        this['@{fire}'](['search']);
    },

    '@{fire}'(types) {
        let that = this;
        let { value, searchList, searchValue } = that.updater.get();
        let d = { value };
        if (searchList.length > 0) {
            Magix.mix(d, { searchValue });
        }
        that['@{owner.node}'].val(value);

        types.forEach(type => {
            that['@{owner.node}'].trigger({
                type,
                ...d,
            });
        })
    }
});
