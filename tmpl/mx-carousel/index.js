let Magix = require('magix');
let $ = require('$');
let Runner = require('../mx-runner/index');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let that = this;
        let node = $('#' + that.id);
        that['@{owner.node}'] = node;

        that['@{extra.info}'] = extra;
        that.updater.set({
            mode: extra.mode || 'carousel', //carousel跑马灯，fade渐显渐隐
            width: extra.width || $(node).width() || 400,
            height: extra.height || $(node).height() || 200,
            active: extra.active || 0, // 当前第几帧动画
            interval: (extra.interval | 0) || 3000, // 播放暂停间隔，单位毫秒
            autoplay: (extra.autoplay + '') === 'true',  // 是否自动播放
            dots: (extra.dots + '') !== 'false', // 是否显示轮播点
            vertical: (extra.vertical + '') === 'true', // 是否是垂直方向
            timing: extra.timing || 'ease-in-out', // transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);
            duration: extra.duration || '.5s' // 动画持续时间
        })
        that.on('destroy', () => {
            that['@{stop.auto.play}']();

            if (that['@{over.timer}']) {
                clearTimeout(that['@{over.timer}']);
            }
        });
    },
    render() {
        let that = this;
        let data = that.updater.get();
        let node = that['@{owner.node}'];
        let children = node.children();

        that.updater.digest({
            len: children.length,
            content: node.html(),
        })

        that['@{dots.node}'] = node.find('.@index.less:dot');
        let panelsCnt = node.find('.@index.less:inner');
        that['@{panels.cnt}'] = panelsCnt;
        that['@{panels.node}'] = panelsCnt.find('.carousel-panel');

        that['@{update.stage.size}']();
        that['@{to.panel}'](data.active, 1);
        if (data.autoplay) {
            that['@{start.auto.play}']();
        }
    },

    '@{update.stage.size}'() {
        let that = this;
        let node = that['@{owner.node}'];
        let data = that.updater.get();
        let w = data.width,
            h = data.height,
            mode = data.mode;

        let panelNodes = that['@{panels.node}'];
        switch (mode) {
            case 'carousel':
                for (let index = 0; index < panelNodes.length; index++) {
                    let panelNode = $(panelNodes[index]);

                    if (data.vertical) {
                        panelNode.css({
                            top: h * index,
                            left: 0,
                            width: w,
                            height: h
                        })
                    } else {
                        panelNode.css({
                            top: 0,
                            left: w * index,
                            width: w,
                            height: h
                        })
                    }
                }
                break;
            case 'fade':
                for (let index = 0; index < panelNodes.length; index++) {
                    let panelNode = $(panelNodes[index]);
                    panelNode.css({
                        opacity: 0,
                        top: 0,
                        left: 0,
                        width: w,
                        height: h
                    })
                }
                break;
        }

        if (data.vertical) {
            that['@{panels.cnt}'].height(panelNodes.length * h).width(w);
        } else {
            that['@{panels.cnt}'].width(panelNodes.length * w).height(h);
        }
    },

    '@{to.panel}'(active, immediate) {
        let that = this;
        let updater = that.updater;
        let data = updater.get();
        let mode = data.mode,
            duration = data.duration,
            timing = data.timing;
        switch (mode) {
            case 'carousel':
                updater.set({
                    active: active
                })
                
                let width = data.width,
                    height = data.height,
                    vertical = data.vertical;
                let style = {
                    transform: `translate3d(${vertical ? `0,-${active * height}px` : `-${active * width}px,0`},0)`,
                    transition: `transform ${duration} ${timing}`
                };
                if (immediate) {
                    delete style.transition;
                }
                that['@{panels.cnt}'].css(style);
                break;
            case 'fade':
                let panelNodes = that['@{panels.node}'];
                panelNodes.css({
                    opacity: 0
                });

                let style = {
                    opacity: 1,
                    transition: `opacity ${duration} ${timing}`
                }
                panelNodes.eq(active).css(style);
                updater.set({
                    active: active
                })
                break;
        }

        let cName = '@index.less:active';
        that['@{dots.node}'].removeClass(cName).eq(active).addClass(cName);
    },

    '@{start.auto.play}'() {
        let that = this;
        let data = that.updater.get();

        if (data.autoplay) {
            let active = data.active;
            that['@{play.task}'] = setInterval(() => {
                let n = ++active;
                if (n >= that['@{panels.node}'].length) {
                    active = n = 0;
                }
                that['@{to.panel}'](n);
            }, data.interval);
        }
    },

    '@{stop.auto.play}'() {
        let that = this;
        if (that['@{play.task}']) {
            clearInterval(that['@{play.task}']);
        }
    },

    '@{active}<click>'(e) {
        this['@{to.panel}'](e.params.idx);
    },

    '@{start}<mouseout>'(e) {
        let that = this;
        if (!Magix.inside(e.relatedTarget, that.id)) {
            that['@{over.timer}'] = setTimeout(that.wrapAsync(that['@{start.auto.play}'], that), 50);
        }
    },

    '@{stop}<mouseover>'(e) {
        let that = this;
        if (!Magix.inside(e.relatedTarget, that.id)) {
            if (that['@{over.timer}']) {
                clearTimeout(that['@{over.timer}']);
            }
            that['@{stop.auto.play}']();
        }
    },

    '$win<resize>'() {
        let that = this;
        let data = that.updater.get();
        let extra = that['@{extra.info}'];
        let node = that['@{owner.node}'];
        that.updater.set({
            width: extra.width || $(node).width() || 400
        })
        that['@{update.stage.size}']();
        that['@{to.panel}'](data.active, 1);
    }
});