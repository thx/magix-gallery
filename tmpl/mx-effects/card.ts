/**
 * hover上移卡片
 * 1. 支持大小尺寸
 * 2. 支持配置图片、说明、链接、指标等等
 * 3. 支持配置每行展现次数，支持轮播 or 平铺
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
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

        // mode定义
        // 1. carousel-common-list：卡片图文链接轮播
        // 2. carousel-small-list：小尺寸卡片图文链接轮播
        // 3. carousel-common-quota：卡片图文指标轮播
        // 4. flat-common-list：卡片图文链接平铺
        // 5. flat-small-list：小尺寸卡片图文链接平铺
        // 6. flat-common-quota：卡片图文指标平铺
        // 7. carousel-icon-list：icon图文卡片
        // 8. flat-icon-list：平铺icon图文卡片
        // 9. carousel-logo-list：logo图文卡片
        // 10. flat-logo-list：平铺logo图文卡片
        let mode = extra.mode || 'carousel-common-list',
            lineNumber = +extra.lineNumber || 3, //每行卡片个数
            titleLineNumber = extra.titleLineNumber, // 标题行数，非默认不补充，走样式的默认值
            tipLineNumber = extra.tipLineNumber, // 说明行数，非默认不补充，走样式的默认值
            autoplay = (extra.autoplay + '' !== 'false'), //轮播情况下是否自动轮播，默认自动轮播
            interval = extra.interval || 5000, // 轮播情况下，播放间隔，单位毫秒
            textAlign = extra.textAlign || 'left',
            imgHeight = extra.imgHeight; //图片高度

        let wrapperClasses = 'names@card.less[carousel-common-list,carousel-small-list,carousel-common-quota,flat-common-list,flat-small-list,flat-common-quota,carousel-icon-list,flat-icon-list,carousel-logo-list,flat-logo-list,carousel-btns-list,flat-btns-list,carousel-links-list,flat-links-list]';
        let wrapperClass = wrapperClasses[mode];

        // 是否轮播
        let carousel = (mode.indexOf('carousel') > -1);

        // 是否为指标显示
        let quota = (mode.indexOf('quota') > -1);

        let list = extra.list || [];
        let groups = [];
        let line = Math.ceil(list.length / lineNumber);
        let mr = 2.5; // margin-right: 2% 两边留阴影
        let width = (100 - mr * (lineNumber + 1)) / lineNumber;
        let hasBtn = true,  // 是否有按钮
            hasIcon = true; // 是否有icon
        for (let i = 0; i < line; i++) {
            let groupList = list.slice(i * lineNumber, (i + 1) * lineNumber);
            groupList.forEach(item => {
                hasBtn = hasBtn && item.btn;
                hasIcon = hasIcon && item.icon;
            })
            groups[i] = {
                list: groupList
            }
        }

        // 是否整个卡片可点
        // 多按钮，多链接类型，整个卡片不响应点击
        let cardClick = !(
            mode == 'carousel-btns-list' ||
            mode == 'flat-btns-list' ||
            mode == 'carousel-links-list' ||
            mode == 'flat-links-list'
        );

        that.updater.set({
            mode,
            imgHeight,
            hasBtn,
            hasIcon,
            wrapperClass,
            width,
            groups,
            lineNumber,
            titleLineNumber,
            tipLineNumber,
            autoplay,
            interval,
            carousel,
            innerData: {
                cardClick,
                textAlign,
                quota
            }
        });
        that['@{owner.node}'] = $(`#${that.id}`);

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
        this.updater.digest();
    },

    '@{select}<click>'(event) {
        let item = event.params.item;
        this['@{owner.node}'].trigger({
            type: 'select',
            item
        });
    },

    /**
     * carousel-btns-list,flat-btns-list
     * 多按钮类型，点击按钮选中
     */
    '@{btn.select}<select>'(e) {
        this['@{owner.node}'].trigger({
            type: 'select',
            item: e.item,
            btn: e.btn
        });
    }
});