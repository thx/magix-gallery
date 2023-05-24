import Magix, { Vframe } from 'magix';
import * as $ from '$';
Magix.applyStyle('@index.less');

// 引导的z-index，触点，引导线，弹窗消息 + 3
const MxGuideDirSize = 34;
const MxGuideDirLine = 48;
const MxGuideDirGap = 6;
const MxGuideHideDuration = 200;
const Logos = {
    subway: [
        'https://img.alicdn.com/imgextra/i3/O1CN01mXX1Qs1hNsORw84Qx_!!6000000004266-2-tps-280-320.png',
        'https://img.alicdn.com/imgextra/i3/O1CN01kN8pvz29gTijt3GK7_!!6000000008097-2-tps-280-320.png',
        'https://img.alicdn.com/imgextra/i2/O1CN01DeCiL81ZKCHiqHsbX_!!6000000003175-2-tps-280-320.png',
        'https://img.alicdn.com/imgextra/i3/O1CN015KDVwL1X0qJiRT2xD_!!6000000002862-2-tps-280-320.png'
    ],
    def: [
        'https://img.alicdn.com/imgextra/i3/O1CN01NdPCYZ1IH8AEi7rHr_!!6000000000867-2-tps-280-320.png',
        'https://img.alicdn.com/imgextra/i2/O1CN01lureC11OqIGXZlisO_!!6000000001756-2-tps-280-320.png',
        'https://img.alicdn.com/imgextra/i3/O1CN01CFbw8d1QPOEToTww0_!!6000000001968-2-tps-280-320.png',
        'https://img.alicdn.com/imgextra/i3/O1CN018XZ4Bi1jUrfNtWbpd_!!6000000004552-2-tps-280-320.png'
    ]
}

let MxGuideZIndex = 10990;
let MxGuideCacheList = [];
let MxGuideCalCache = (view, type) => {
    let zindex = 10990;
    if (type == 'add') {
        MxGuideCacheList.push(view);
    }

    for (let i = MxGuideCacheList.length - 1, cacheItem; i >= 0; i--) {
        cacheItem = MxGuideCacheList[i];
        let cacheId = `${cacheItem.id}_mx_guide`;
        if (type == 'remove' && (cacheId == view.id)) {
            MxGuideCacheList.splice(i, 1);
        } else {
            // 取最大的z-index
            let dzi = +$(`#${cacheId}`).css('--mx-guide-z-index');
            if (dzi > zindex) {
                zindex = dzi;
            }
        }
    };

    // 计算下一个的z-index
    MxGuideZIndex = zindex + 4;
};

export = Magix.View.extend({
    tmpl: '@index.html:updateby[]',
    init(extra) {
        let that = this;
        that.updater.set(extra);

        that.on('destroy', () => {
            MxGuideCalCache(that, 'remove');

            // 删除节点
            let { guideId, cur, list } = that.updater.get();
            if (guideId) {
                let node = $(`#${guideId}`);
                if (node && node.length) {
                    // 通知外部关闭引导
                    node.trigger($.Event('cancel', {
                        index: +cur
                    }));
                    node.remove();
                }

                [`${guideId}_dir`, `${guideId}_mask`].forEach(key => {
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
                $(list[i].sizzle)[0].style.removeProperty('--mx-guide-z-index');
            }
        });
    },

    render() {
        this.updater.digest();
        this['@{set.guide.pos}'](true);
    },

    '@{set.guide.pos}'(init) {
        let { type } = this.updater.get();
        if (type == 'brand') {
            this['@{set.brand.pos}'](init);
        } else {
            this['@{set.line.pos}'](init);
        }
    },

    '@{set.brand.pos}'(init) {
        let data = this.updater.get();
        let { list, cur, guideId, ignoreScroll, mode, scrollWrapper } = data;
        let placement = list[cur].placement;
        let node = $(`#${guideId}`),
            sizzle = $(list[cur].sizzle);

        // 设置定位
        let { top, left } = sizzle.offset();
        if (list[cur].offset) {
            top += (+list[cur].offset.top || 0);
            left += (+list[cur].offset.left || 0);
        }

        let nt, nl, gap = 24, arrowSize = 28;
        if (scrollWrapper && scrollWrapper.length) {
            nt = top - scrollWrapper.offset().top + scrollWrapper.scrollTop();
            nl = left - scrollWrapper.offset().left + scrollWrapper.scrollLeft();
        } else {
            nt = top;
            nl = left;
        }

        let sWidth = sizzle.outerWidth(),
            sHeight = sizzle.outerHeight(),
            nWidth = node.outerWidth(),
            nHeight = node.outerHeight();
        switch (placement) {
            case 'left':
                nt -= (56 - (sHeight - arrowSize) / 2);
                nl -= (nWidth + gap);
                break;

            case 'right':
                nt -= (56 - (sHeight - arrowSize) / 2);
                nl += sWidth + gap;
                break;

            case 'top':
                nt -= (nHeight + gap);
                nl += (sWidth - nWidth) / 2;
                break;

            default:
                placement = 'bottom';
                nt += sHeight + gap;
                nl += (sWidth - nWidth) / 2;
                break;
        }

        // 模块引导，高亮出当前节点
        if (mode == 'module') {
            for (let i = 0; i < list.length; i++) {
                $(list[i].sizzle).removeClass('@index.less:sizzle');
                $(list[i].sizzle)[0].style.removeProperty('--mx-guide-z-index');
            }
            sizzle.addClass('@index.less:sizzle');
            sizzle[0].style.setProperty('--mx-guide-z-index', MxGuideZIndex);
        }

        let inViewFn = () => {
            // 如果不在可视范围内则滚动到可视范围内
            if (scrollWrapper && scrollWrapper[0] && sizzle[0].scrollIntoView) {
                let { top: wt, right: wr, bottom: wb, left: wl, } = scrollWrapper[0].getBoundingClientRect();
                let { top: st, right: sr, bottom: sb, left: sl, } = sizzle[0].getBoundingClientRect();
                if (st > wb || sl > wr || sr < wl || sb < wt) {
                    sizzle[0].scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } else {
                let vw = window.innerWidth || document.documentElement.clientWidth;
                let vh = window.innerHeight || document.documentElement.clientHeight;
                let { top: t, right: r, bottom: b, left: l, } = node[0].getBoundingClientRect();
                if (!ignoreScroll && (t < 0 || l < 0 || r > vw || b > vh) && node[0].scrollIntoView) {
                    node[0].scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        }

        if (init) {
            // 首次直接显示
            node.css({ top: nt, left: nl });

            if (mode == 'module') {
                // 模块引导时，跳转到可视范围内
                inViewFn();
            }
        } else {
            // 切换动画
            // 1. 点位引导：切换下一个
            // 2. 模块引导：跳转到当前模块
            node.animate({
                top: nt,
                left: nl,
            }, MxGuideHideDuration * 2, () => {
                inViewFn();
            });
        }
    },

    '@{set.line.pos}'(init) {
        let { list, cur, guideId, ignoreScroll, mode, scrollWrapper } = this.updater.get();
        let placement = list[cur].placement;
        let node = $(`#${guideId}`),
            dirNode = $(`#${guideId}_dir`),
            sizzle = $(list[cur].sizzle);

        // 设置定位
        let { top, left } = sizzle.offset();
        if (list[cur].offset) {
            top += (+list[cur].offset.top || 0);
            left += (+list[cur].offset.left || 0);
        }

        let nt, dnt, nl, dnl;
        if (scrollWrapper && scrollWrapper.length) {
            nt = dnt = top - scrollWrapper.offset().top + scrollWrapper.scrollTop();
            nl = dnl = left - scrollWrapper.offset().left + scrollWrapper.scrollLeft();
        } else {
            nt = dnt = top;
            nl = dnl = left;
        }

        let sWidth = sizzle.outerWidth(),
            sHeight = sizzle.outerHeight(),
            nWidth = node.outerWidth(),
            nHeight = node.outerHeight();

        switch (placement) {
            case 'left':
                nt += (sHeight - nHeight) / 2;
                nl -= (nWidth + MxGuideDirLine);
                dnt += (sHeight - MxGuideDirSize) / 2;
                dnl -= (MxGuideDirSize - MxGuideDirGap);
                break;

            case 'right':
                nt += (sHeight - nHeight) / 2;
                nl += sWidth + MxGuideDirLine;
                dnt += (sHeight - MxGuideDirSize) / 2;
                dnl += sWidth - MxGuideDirGap;
                break;

            case 'top':
                nt -= (nHeight + MxGuideDirLine);
                nl += (sWidth - nWidth) / 2;
                dnt -= (MxGuideDirSize - MxGuideDirGap);
                dnl += (sWidth - MxGuideDirSize) / 2;
                break;

            default:
                placement = 'bottom';
                nt += sHeight + MxGuideDirLine;
                nl += (sWidth - nWidth) / 2;
                dnt += sHeight - MxGuideDirGap;
                dnl += (sWidth - MxGuideDirSize) / 2;
                break;
        }

        // 模块引导，高亮出当前节点
        if (mode == 'module') {
            for (let i = 0; i < list.length; i++) {
                $(list[i].sizzle).removeClass('@index.less:sizzle');
                $(list[i].sizzle)[0].style.removeProperty('--mx-guide-z-index');
            }
            sizzle.addClass('@index.less:sizzle')
            sizzle[0].style.setProperty('--mx-guide-z-index', MxGuideZIndex);
        }

        let inViewFn = () => {
            // 如果不在可视范围内则滚动到可视范围内
            if (scrollWrapper && scrollWrapper[0] && sizzle[0].scrollIntoView) {
                let { top: wt, right: wr, bottom: wb, left: wl, } = scrollWrapper[0].getBoundingClientRect();
                let { top: st, right: sr, bottom: sb, left: sl, } = sizzle[0].getBoundingClientRect();
                if (st > wb || sl > wr || sr < wl || sb < wt) {
                    sizzle[0].scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } else {
                let vw = window.innerWidth || document.documentElement.clientWidth;
                let vh = window.innerHeight || document.documentElement.clientHeight;
                let { top: t, right: r, bottom: b, left: l, } = node[0].getBoundingClientRect();
                if (!ignoreScroll && (t < 0 || l < 0 || r > vw || b > vh) && node[0].scrollIntoView) {
                    node[0].scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        }

        if (init) {
            // 首次直接显示
            node.css({ top: nt, left: nl });
            dirNode.attr('data-placement', placement);
            dirNode.css({ top: dnt, left: dnl });

            if (mode == 'module') {
                // 模块引导时，跳转到可视范围内
                inViewFn();
            }
        } else {
            // 切换动画
            node.animate({
                top: nt,
                left: nl,
            }, MxGuideHideDuration * 2);

            dirNode.animate({
                opacity: 0,
            }, MxGuideHideDuration, () => {
                dirNode.attr('data-placement', `anim-${placement}`);
                dirNode.css({ top: dnt, left: dnl });
                dirNode.animate({
                    opacity: 1,
                }, MxGuideHideDuration);
                inViewFn();
            });
        }
    },

    '@{mxguide.prev}<click>'(e) {
        let { cur } = this.updater.get();
        this.updater.digest({
            cur: +cur - 1,
        })
        this['@{set.guide.pos}']();
    },

    '@{mxguide.next}<click>'(e) {
        let { cur } = this.updater.get();
        this.updater.digest({
            cur: +cur + 1,
        })
        this['@{set.guide.pos}']();
    },

    '@{mxguide.cancel}<click>'(e) {
        let that = this;
        let { guideId } = that.updater.get();
        let node = $(`#${guideId}`),
            dirNode = $(`#${guideId}_dir`);
        dirNode.animate({ opacity: 0 }, MxGuideHideDuration);
        node.animate({
            opacity: 0,
        }, MxGuideHideDuration, () => {
            // trigger destroy
            that.owner.unmountView();
        });
    },
}, {
    showMxGuides(configs) {
        MxGuideCalCache(this, 'add');

        let guideId = `${this.id}_mx_guide`;
        let logos = Logos[configs.bizCode] || Logos.def;
        let ll = logos.length;

        // 过滤找不到的节点
        let list = configs.list || [];
        for (let i = 0; i < list.length; i++) {
            let sizzle = $(list[i].sizzle);
            if (!sizzle || !sizzle.length) {
                list.splice(i--);
            } else {
                // 内置logo按照顺序取，结束动作固定
                Magix.mix(list[i], {
                    logo: list[i].logo || (list.length - 1 == i ? logos[ll - 1] : logos[i % ll]),
                })
            }
        };

        if (!list.length) {
            // 无有效引导步骤
            return;
        }

        let scrollWrapper = configs.scrollWrapper ? $(configs.scrollWrapper) : null,
            len = list.length;

        // point：单点； 
        // module：模块；
        let mode = (['point', 'module'].indexOf(configs.mode) < 0) ? 'point' : configs.mode;
        if (scrollWrapper && scrollWrapper.length) {
            // 追加到指定节点内则无蒙层
            mode = 'point';
        }

        // 展现样式
        let type = (['line', 'brand'].indexOf(configs.type) < 0) ? 'line' : configs.type;

        let node = $(`#${guideId}`);
        if (!node || !node.length) {
            let rt = `<div id="${guideId}" mx-view class="@index.less:mx-guide" style="--mx-guide-z-index: ${MxGuideZIndex};"></div>`;
            let lt = `<div id="${guideId}_dir" class="@index.less:dir" style="--mx-guide-z-index: ${MxGuideZIndex}; width: ${MxGuideDirSize}px; height: ${MxGuideDirSize}px;"><div class="@index.less:dir-line"></div><div class="@index.less:dir-icon"></div></div>`;

            if (scrollWrapper && scrollWrapper.length) {
                // 追加到指定容器内
                scrollWrapper.css({ position: 'relative' });
                scrollWrapper.append(rt);
                if (type == 'line') {
                    scrollWrapper.append(lt);
                }
            } else {
                // 追加到body
                $(document.body).append(rt);
                if (type == 'line') {
                    $(document.body).append(lt);
                }

                // 是否为模块引导（包含蒙层，追加节点内无蒙层）
                if (mode == 'module') {
                    $(document.body).append(`<div id="${guideId}_mask" class="@index.less:mask" style="--mx-guide-z-index: ${MxGuideZIndex};"></div>`);
                }
            }
        }

        let data = {
            guideId,
            spm: configs.spm || ((this.owner && this.owner.path) ? 'gostr=/alimama_bp.4.1;locaid=d' + this.owner.path.replace(/\//g, '_') : ''),
            spmc: configs.spmc || ((this.owner && this.owner.path) ? ('c' + this.owner.path.replace(/\//g, '_')) : ''),
            mode,
            type,
            ignoreScroll: configs.ignoreScroll + '' === 'true',
            scrollWrapper,
            len,
            list,
            cur: 0,
        };

        let vf = Vframe.get(guideId);
        if (vf) {
            vf.mountView('@moduleId', data);
        } else {
            this.owner.mountVframe(guideId, '@moduleId', data);
        }

        return $(`#${guideId}`);
    },
})