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
        let mode = extra.mode || 'carousel-common-list',
            lineNumber = +extra.lineNumber || 3, //每行卡片个数
            tipLineNumber = extra.tipLineNumber, // 非默认不补充，走样式的默认值
            autoplay = (extra.autoplay + '' !== 'false'), //轮播情况下是否自动轮播，默认自动轮播
            interval = extra.interval || 5000, // 轮播情况下，播放间隔，单位毫秒
            textAlign = extra.textAlign || 'left';

        let wrapperClasses = 'names@card.less[carousel-common-list,carousel-small-list,carousel-common-quota,flat-common-list,flat-small-list,flat-common-quota]';
        let wrapperClass = wrapperClasses[mode];

        // 是否轮播
        let carousel = (mode.indexOf('carousel') > -1);

        // 是否为指标显示
        let quota = (mode.indexOf('quota') > -1);
        
        let list = extra.list || [];
        let groups = [];
        let line = Math.ceil(list.length / lineNumber);
        let mr = 2; // margin-right: 2% 两边留阴影
        let width = (100 - mr * (lineNumber + 1)) / lineNumber;
        let hasBtn = true;
        for (let i = 0; i < line; i++) {
            let groupList = list.slice(i * lineNumber, (i + 1) * lineNumber);
            groupList.forEach(item => {
                hasBtn = hasBtn && item.btn;
            })
            groups[i] = {
                list: groupList
            }
        }

        that.updater.set({
            hasBtn,
            wrapperClass,
            width,
            textAlign,
            quota,
            groups,
            lineNumber,
            tipLineNumber,
            autoplay,
            interval,
            carousel
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

    '@{click}<click>'(event) {
        let item = event.params.item;

        this['@{owner.node}'].trigger({
            type: 'select',
            item
        });
    }
});