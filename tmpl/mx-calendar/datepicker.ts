import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Monitor from '../mx-util/monitor';
import * as I18n from '../mx-medusa/util';
import * as Util from './util';
const { foreverStr: ForeverStr, padZero: PadZero, dateFormat: DateFormat, dateParse: DateParse, getDefaultDate: GetDefaultDate, getQuickInfos: GetQuickInfos, getOffsetDate: GetOffsetDate, parseDateType: ParseDateType } = Util;
Magix.applyStyle('@rangepicker.less');

export default View.extend({
    tmpl: '@datepicker.html',
    init(extra) {
        let that = this;

        Monitor['@{setup}']();
        that.on('destroy', () => {
            Monitor['@{remove}'](that);
            Monitor['@{teardown}']();

            if (that['@{anim.timer}']) {
                clearTimeout(that['@{anim.timer}']);
            }
        });

        let today = DateFormat(GetOffsetDate(0)),
            yesterday = DateFormat(GetOffsetDate(-1)),
            tomorrow = DateFormat(GetOffsetDate(1));
        that.updater.set({
            aliasMap: {
                [today]: I18n['calendar.today'],
                [yesterday]: I18n['calendar.yesterday'],
                [tomorrow]: I18n['calendar.tomorrow']
            },
            dateInfo: {
                ...extra,
                placeholder: extra.placeholder || I18n['choose'],
                arrow: (extra.arrow + '' !== 'false'),// 默认有箭头
            }
        });
        that['@{owner.node}'] = $('#' + that.id);

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        that['@{ui.disabled}'] = (extra.disabled + '' === 'true') || $('#' + that.id)[0].hasAttribute('mx-disabled');
    },

    render() {
        this['@{val}']();
    },

    '@{date.picked}<change>'(e) {
        e.stopPropagation();
        let { dateInfo } = this.updater.get();
        this.updater.set({
            dateInfo: Magix.mix(dateInfo, {
                selected: e.date + (e.time ? ` ${e.time}` : ''),
            }),
        })
        this['@{val}'](true);
        this['@{hide}']();
    },

    '@{val}'(fire) {
        let { dateInfo, aliasMap } = this.updater.get();
        let selected = dateInfo.selected || '';
        this.updater.digest({
            selectedStr: aliasMap[selected] || selected || dateInfo.placeholder,
        })
        this['@{owner.node}'].val(selected);
        if (fire) {
            let [date, time] = selected.split(' ');
            this['@{owner.node}'].trigger({
                type: 'change',
                selected,
                date: date || '',
                time: time || '',
            });
        }
    },

    '@{inside}'(node) {
        return Magix.inside(node, this.id) || Magix.inside(node, this['@{owner.node}'][0]);
    },

    '@{stop}<change,focusin,focusout>'(e) {
        if (!e.dates) {
            e.stopPropagation();
        }
    },

    '@{toggle}<click>'(e) {
        let that = this;
        e.preventDefault();
        if (that['@{ui.disabled}'] || that.updater.get('animing')) {
            return;
        }

        // 只记录状态不digest
        let node = e.eventTarget;
        that.updater.set({ animing: true })
        node.setAttribute('mx-comp-expand-amin', 'animing');
        that['@{anim.timer}'] = setTimeout(() => {
            node.setAttribute('mx-comp-expand-amin', 'animend');
            that.updater.set({ animing: false })
        }, that['@{get.css.time.var}']('--mx-comp-expand-amin-timer'));

        let show = that.updater.get('show');
        that[show ? '@{hide}' : '@{show}']();
    },

    '@{show}'() {
        let that = this;
        let { show } = that.updater.get();
        if (!show) {
            that.updater.digest({
                show: true
            })
            that['@{owner.node}'].trigger('focusin');
            Monitor['@{add}'](that);
        }
    },

    '@{hide}'() {
        let that = this;
        let { show } = that.updater.get();
        if (show) {
            that.updater.digest({
                show: false
            })

            that['@{owner.node}'].trigger('focusout');
            Monitor['@{remove}'](that);
        }
    },
    '@{hide}<cancel>'() {
        this['@{hide}']();
    }
});