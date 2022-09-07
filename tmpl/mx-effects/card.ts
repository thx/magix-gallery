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
        // 当前数据截快照
        that.updater.snapshot();

        // mode定义
        // 1. carousel-common-list：大卡片图文链接轮播
        // 2. flat-common-list：大卡片图文链接平铺
        // 3. carousel-small-list：小卡片图文链接轮播
        // 4. flat-small-list：小卡片图文链接平铺
        // 5. carousel-common-quota：大卡片图文指标轮播
        // 6. flat-common-quota：大卡片图文指标平铺
        // 7. carousel-icon-list：icon图文卡片轮播
        // 8. flat-icon-list：icon图文卡片平铺
        // 9. carousel-logo-list：logo图文卡片轮播
        // 10. flat-logo-list：logo图文卡片平铺
        // 11. carousel-btns-list：多按钮图文卡片轮播
        // 12. flat-btns-list：多按钮图文卡片平铺
        // 13. carousel-links-list：多外链图文卡片轮播
        // 14. flat-links-list：多外链图文卡片平铺
        // 15. carousel-hover-list：hover背景色图文卡片轮播
        // 16. flat-hover-list：hover背景色图文卡片平铺
        let wrapperClasses = 'names@card.less';
        let mode = extra.mode;
        let wrapperClass = wrapperClasses[mode];
        if (!wrapperClass) {
            mode = 'carousel-common-list';
            wrapperClass = wrapperClasses[mode];
        }

        let lineNumber = +extra.lineNumber || 3, //每行卡片个数
            titleLineNumber = extra.titleLineNumber, // 标题行数，非默认不补充，走样式的默认值
            tipLineNumber = extra.tipLineNumber, // 说明行数，非默认不补充，走样式的默认值
            autoplay = (extra.autoplay + '' !== 'false'), //轮播情况下是否自动轮播，默认自动轮播
            interval = extra.interval || 5000, // 轮播情况下，播放间隔，单位毫秒
            textAlign = extra.textAlign || 'left',
            imgHeight = extra.imgHeight,  //图片高度
            dotVars = Magix.mix({
                '--mx-carousel-trigger-gap': '0px'
            }, extra.dotVars || {}),
            list = extra.list || [];

        // 移动兼容处理：移动端每行只显示一个
        let devInfo = that['@{get.dev.info}']();
        if (devInfo && !devInfo.pc) {
            // 移动端每行一个
            lineNumber = 1;
        }

        // 是否轮播
        let carousel = (mode.indexOf('carousel') > -1);

        let groups = [];
        let hasBtn = true,  // 是否有按钮
            hasIcon = true; // 是否有icon
        for (var i = 0, len = list.length; i < len; i += lineNumber) {
            groups.push({
                list: list.slice(i, i + lineNumber).map(item => {
                    hasBtn = hasBtn && item.btn;
                    hasIcon = hasIcon && item.icon;
                    return item;
                })
            });
        }

        that.updater.set({
            mode,
            imgHeight,
            hasBtn,
            hasIcon,
            wrapperClass,
            groups,
            dotVars,
            lineNumber,
            titleLineNumber,
            tipLineNumber,
            autoplay,
            interval,
            carousel,
        });
        that['@{owner.node}'] = $(`#${that.id}`);

        let altered = that.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },

    '@{select}<click>'(e) {
        let { mode } = this.updater.get();

        // 多按钮整个卡片不响应点击
        if (mode.indexOf('-btns-list') > -1) {
            return;
        }

        let { item } = e.params;
        if (item.link) {
            let a = document.createElement('a');
            a.style.position = 'absolute';
            a.style.opacity = '0';
            a.href = item.link;
            if (item.outer + '' !== 'false') {
                a.target = '_blank';
            }
            a.click();
        }
        this['@{owner.node}'].trigger({
            type: 'select',
            item,
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