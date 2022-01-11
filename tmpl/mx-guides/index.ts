import Magix from 'magix';
import * as $ from '$';
Magix.applyStyle('@index.less');
const MxGuideWidth = 320;
const MxGuideDirSize = 34;
const MxGuideDirLine = 48;
const MxGuideDirGap = 6;
const MxGuideHideDuration = 200;
const Tmpl = '@index.html';

export = {
    ctor() {
        this.on('destroy', () => {
            this['@{guide.delete}']();
        });
    },

    '@{guide.delete}'() {
        // 删除节点
        let { viewId } = this['@{guide.data}'] || {};
        if (viewId) {
            let node = $(`#${viewId}`);
            if (node && node.length) {
                // 通知外部关闭引导
                node.trigger('cancel');
                node.remove();
            }

            [`${viewId}_dir`].forEach(key => {
                let extra = $(`#${key}`);
                if (extra && extra.length) {
                    extra.remove();
                }
            });
        }
    },

    '@{guide.init}'({ viewId, len, wrapper }) {
        if (!wrapper || !wrapper.length) {
            wrapper = $(document.body);
        } else {
            // 自定义容器
            wrapper.css({ position: 'relative' });
        }
        let node = $(`#${viewId}`);
        if (!node.length) {
            wrapper.append(`<div id="${viewId}" class="${(len > 1) ? '@index.less:big-wrapper' : '@index.less:wrapper'}" style="width: ${MxGuideWidth}px;"></div>`);
            wrapper.append(`<div id="${viewId}_dir" class="@index.less:dir" style="width: ${MxGuideDirSize}px; height: ${MxGuideDirSize}px;"><div class="@index.less:dir-line"></div><div class="@index.less:dir-icon"></div></div>`);
        }

        // 是否为模块引导（包含蒙层）
        // if (configs.mode == 'block') {
        //     let backNode = $('#' + guideId + '_mask');
        //     if (!backNode.length) {
        //         $(document.body).append('<div id="' + guideId + '_mask" class="@index.less:mask-loading-backdrop"></div>');
        //         backNode = $('#' + guideId + '_mask');
        //     }
        //     backNode.css({
        //         display: 'block'
        //     });
        // }
    },

    '@{cal.guide.pos}'(init) {
        let data = this['@{guide.data}'];
        let { list, cur, viewId, wrapper } = data;
        let node = $(`#${viewId}`),
            dirNode = $(`#${viewId}_dir`);
        node.html(Tmpl(data, this.id));

        let sizzle = $(list[cur].sizzle);
        let { top, left } = sizzle.offset(),
            sWidth = sizzle.outerWidth(),
            sHeight = sizzle.outerHeight(),
            nWidth = node.outerWidth(),
            nHeight = node.outerHeight();
        if (wrapper && wrapper.length) {
            let wOffset = wrapper.offset();
            top = top - wOffset.top + wrapper.scrollTop();
            left = left - wOffset.left + wrapper.scrollLeft();
        }
        if (list[cur].offset) {
            top += list[cur].offset.top || 0;
            left += list[cur].offset.left || 0;
        }

        let nt = top, nl = left,
            lnt = top, lnl = left,
            placement = list[cur].placement;
        switch (placement) {
            case 'left':
                nt += (sHeight - nHeight) / 2;
                nl -= (nWidth + MxGuideDirLine);
                lnt += (sHeight - MxGuideDirSize) / 2;
                lnl -= (MxGuideDirSize - MxGuideDirGap);
                break;

            case 'right':
                nt += (sHeight - nHeight) / 2;
                nl += sWidth + MxGuideDirLine;
                lnt += (sHeight - MxGuideDirSize) / 2;
                lnl += sWidth - MxGuideDirGap;
                break;

            case 'top':
                nt -= (nHeight + MxGuideDirLine);
                nl += (sWidth - nWidth) / 2;
                lnt -= (MxGuideDirSize - MxGuideDirGap);
                lnl += (sWidth - MxGuideDirSize) / 2;
                break;

            default:
                placement = 'bottom';
                nt += sHeight + MxGuideDirLine;
                nl += (sWidth - nWidth) / 2;
                lnt += sHeight - MxGuideDirGap;
                lnl += (sWidth - MxGuideDirSize) / 2;
                break;
        }

        node.css({ top: nt, left: nl });
        if (init) {
            // 首次
            dirNode.css({ top: lnt, left: lnl });
            dirNode.attr('data-placement', placement);
        } else {
            dirNode.animate({
                opacity: 0,
            }, MxGuideHideDuration, () => {
                dirNode.attr('data-placement', `anim-${placement}`);
                dirNode.css({ top: lnt, left: lnl });
                dirNode.animate({
                    opacity: 1,
                }, MxGuideHideDuration);

                // 如果不在可视范围内则滚动到可视范围内
                let inview = this['@{guide.inview}'](node[0]);
                if (!inview && node[0].scrollIntoView) {
                    node[0].scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }
    },

    '@{guide.inview}'(element) {
        const viewWidth = window.innerWidth || document.documentElement.clientWidth;
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        const { top, right, bottom, left, } = element.getBoundingClientRect();
        return (top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight);
    },

    '@{guide.prev}<click>'(e) {
        let { cur } = this['@{guide.data}'];
        Magix.mix(this['@{guide.data}'], {
            cur: +cur - 1,
        });
        this['@{cal.guide.pos}']();
    },

    '@{guide.next}<click>'(e) {
        let { cur } = this['@{guide.data}'];
        Magix.mix(this['@{guide.data}'], {
            cur: +cur + 1,
        });
        this['@{cal.guide.pos}']();
    },

    '@{guide.cancel}<click>'(e) {
        let that = this;
        let { viewId } = that['@{guide.data}'];
        let node = $(`#${viewId}`),
            dirNode = $(`#${viewId}_dir`);
        dirNode.animate({ opacity: 0, })
        node.animate({
            opacity: 0,
        }, MxGuideHideDuration, () => {
            that['@{guide.delete}']();
        });
    },

    showMxGuides(configs) {
        let guideId = `${this.id}_mx_guide`;

        // 过滤找不到的节点
        let list = configs.list || [];
        for (let i = 0; i < list.length; i++) {
            let sizzle = $(list[i].sizzle);
            if (!sizzle || !sizzle.length) {
                list.splice(i--);
            }
        };
        if (!list.length) {
            // 无有效引导步骤
            return;
        }

        this['@{guide.data}'] = {
            wrapper: configs.wrapper ? $(configs.wrapper) : null,
            width: MxGuideWidth,
            viewId: guideId,
            len: list.length,
            list,
            cur: 0,
        }
        this['@{guide.init}'](this['@{guide.data}']);
        this['@{cal.guide.pos}'](true);

        return $(`#${guideId}`);
    },
};