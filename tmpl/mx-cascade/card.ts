import Magix from 'magix';
import * as $ from '$';
import View from './index';
import Util from '../mx-tree/util';
import * as I18n from '../mx-medusa/util';
const Vframe = Magix.Vframe;
Magix.applyStyle('@card.less');

export default View.extend({
    tmpl: '@card.html',
    init(extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        let valueKey = extra.valueKey || 'value';
        let textKey = extra.textKey || 'text';
        let parentKey = extra.parentKey || 'pValue';
        let imgKey = extra.imgKey || 'img';
        let tipKey = extra.tipKey || 'tip';

        let info = Util.listToTree(extra.list, valueKey, parentKey);
        let map = info.map,
            list = info.list;
        that.updater.set({
            placeholder: that.placeholder || I18n['choose'],
            valueKey,
            textKey,
            parentKey,
            imgKey,
            tipKey,
            map,
            list,
            title: extra.headerTitle || '标题',
            tip: extra.headerTip || '',
            width: extra.width || 280,
            height: extra.height || 360,
            triggerType: 'hover' //复用index的逻辑
        })
        //复用index的逻辑
        that['@{output.animation.end}'] = true;

        // 完整的选择结果
        let selectedValue = extra.selected || '';
        let data = that['@{get}'](selectedValue);
        that.updater.set({
            groups: [data.groups[0]], //只保留第一个卡片
            selectedTexts: data.selectedTexts,
            selectedValues: data.selectedValues,
            selectedValue
        });
        that['@{owner.node}'] = $('#' + that.id);

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },

    render() {
        let that = this;
        that.updater.digest();

        // 双向绑定
        let { selectedValue } = that.updater.get();
        that['@{owner.node}'].val(selectedValue);

        // 恢复到初始态
        that['@{owner.node}'].hover(() => {
            clearTimeout(that['@{hide.timer}']);
        }, () => {
            clearTimeout(that['@{hide.timer}']);
            that['@{hide.timer}'] = setTimeout(() => {
                that['@{hide}']();
            }, 300)
        })
    },

    '@{hide}'(e) {
        let { groups } = this.updater.get();
        // 卡片只保留第一组
        groups[0].forEach(i => {
            i.hover = false;
        })
        this.updater.digest({
            groups: [groups[0]]
        })
    }
});

