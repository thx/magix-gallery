import Magix from 'magix';
import * as $ from '$';
Magix.applyStyle('@index.less');
const MxGuideWidth = 320;
const MxGuideDirSize = 34;
const MxGuideDirLine = 48;
const MxGuideDirGap = 6;
const MxGuideHideDuration = 200;
const MxGuideZIndex = 9999999;
const Tmpl = '@index.html';

export = {
    ctor() {
        this.on('destroy', () => {
            this['@{mxguide.delete}']();
        });
    },

    '@{mxguide.delete}'() {
        // 删除节点
        let { viewId, cur, list } = this['@{mxguide.data}'] || {};
        if (viewId) {
            let node = $(`#${viewId}`);
            if (node && node.length) {
                // 通知外部关闭引导
                node.trigger($.Event('cancel', {
                    index: +cur
                }));
                node.remove();
            }

            [`${viewId}_dir`, `${viewId}_mask`].forEach(key => {
                let extra = $(`#${key}`);
                if (extra && extra.length) {
                    extra.remove();
                }
            });
        }

        // 模块显示时需要高亮节点，取消额外样式影响
        list = list || [];
        for (let i = 0; i < list.length; i++) {
            $(list[i].sizzle).removeClass('@index.less:sizzle');
        }
    },

    '@{mxguide.init}'({ viewId, len, wrapper, mode }) {
        if (!wrapper || !wrapper.length) {
            // 追加到body
            wrapper = $(document.body);
        } else {
            // 自定义容器
            wrapper.css({ position: 'relative' });
        };

        let node = $(`#${viewId}`);
        if (!node.length) {
            wrapper.append(`<div id="${viewId}" class="${(len > 1) ? '@index.less:big-wrapper' : '@index.less:wrapper'}" style="z-index: ${(MxGuideZIndex + 3)}; width: ${MxGuideWidth}px;"></div>`);
            wrapper.append(`<div id="${viewId}_dir" class="@index.less:dir" style="z-index: ${(MxGuideZIndex + 2)}; width: ${MxGuideDirSize}px; height: ${MxGuideDirSize}px;"><div class="@index.less:dir-line"></div><div class="@index.less:dir-icon"></div></div>`);

            // 是否为模块引导（包含蒙层）
            if (mode == 'module') {
                wrapper.append(`<div id="${viewId}_mask" class="@index.less:mask" style="z-index: ${MxGuideZIndex}"></div>`);
            }
        }

    },

    '@{cal.guide.pos}'(init) {
        let data = this['@{mxguide.data}'];
        let { list, cur, viewId, wrapper, ignoreScroll, mode } = data;
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
            top += (+list[cur].offset.top || 0);
            left += (+list[cur].offset.left || 0);
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

        if (mode == 'module') {
            // 模块引导，高亮出当前节点
            for (let i = 0; i < list.length; i++) {
                $(list[i].sizzle).removeClass('@index.less:sizzle');
            }
            sizzle.addClass('@index.less:sizzle');
            sizzle.css({ zIndex: MxGuideZIndex + 1 });
        }
        node.css({ top: nt, left: nl });
        if (init) {
            // 首次
            dirNode.css({ top: lnt, left: lnl });
            dirNode.attr('data-placement', placement);
        } else {
            // 切换动画
            dirNode.animate({
                opacity: 0,
            }, MxGuideHideDuration, () => {
                dirNode.attr('data-placement', `anim-${placement}`);
                dirNode.css({ top: lnt, left: lnl });
                dirNode.animate({
                    opacity: 1,
                }, MxGuideHideDuration);

                // 如果不在可视范围内则滚动到可视范围内
                if (!ignoreScroll) {
                    let inview = this['@{mxguide.inview}'](node[0]);
                    if (!inview && node[0].scrollIntoView) {
                        node[0].scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        }
    },

    '@{mxguide.inview}'(element) {
        const viewWidth = window.innerWidth || document.documentElement.clientWidth;
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        const { top, right, bottom, left, } = element.getBoundingClientRect();
        return (top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight);
    },

    '@{mxguide.prev}<click>'(e) {
        let { cur } = this['@{mxguide.data}'];
        Magix.mix(this['@{mxguide.data}'], {
            cur: +cur - 1,
        });
        this['@{cal.guide.pos}']();
    },

    '@{mxguide.next}<click>'(e) {
        let { cur } = this['@{mxguide.data}'];
        Magix.mix(this['@{mxguide.data}'], {
            cur: +cur + 1,
        });
        this['@{cal.guide.pos}']();
    },

    '@{mxguide.cancel}<click>'(e) {
        let that = this;
        let { viewId } = that['@{mxguide.data}'];
        let node = $(`#${viewId}`),
            dirNode = $(`#${viewId}_dir`);
        dirNode.animate({ opacity: 0 }, MxGuideHideDuration);
        node.animate({
            opacity: 0,
        }, MxGuideHideDuration, () => {
            that['@{mxguide.delete}']();
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

        this['@{mxguide.data}'] = {
            wrapper: configs.wrapper ? $(configs.wrapper) : null,
            ignoreScroll: configs.ignoreScroll + '' === 'true',
            mode: configs.mode || 'point',
            width: MxGuideWidth,
            viewId: guideId,
            len: list.length,
            list,
            cur: 0,
        }
        this['@{mxguide.init}'](this['@{mxguide.data}']);
        this['@{cal.guide.pos}'](true);

        return $(`#${guideId}`);
    },
};