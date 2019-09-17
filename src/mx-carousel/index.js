let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let that = this;
        let node = $('#' + that.id);
        that['@{owner.node}'] = node;

        that['@{extra.info}'] = extra;

        // 是否是垂直方向   
        let vertical = (extra.vertical + '') === 'true';
        that.updater.set({
            mode: extra.mode || 'carousel', //carousel跑马灯，fade渐显渐隐
            width: extra.width || $(node).width() || 400,
            height: extra.height || $(node).height() || 200,
            active: extra.active || 0, // 当前第几帧动画
            interval: (extra.interval | 0) || 3000, // 播放暂停间隔，单位毫秒
            autoplay: (extra.autoplay + '') === 'true',  // 是否自动播放
            dots: (extra.dots + '') !== 'false', // 是否显示轮播点，默认显示
            dotPrefix: vertical ? 'v' : 'h',
            dotType: extra.dotType || 'line-in-center', // 内置轮播点样式
            dotClass: extra.dotClass || '', //自定义轮播点样式
            triggers: (extra.triggers + '') == 'true', // 是否显示轮播点，默认不显示
            triggerClass: extra.triggerClass || '', // 自定义trigger样式
            vertical,
            timing: extra.timing || 'ease-in-out', // transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);
            duration: extra.duration || '.5s' // 动画持续时间
        })

        if (extra.prevTrigger) {
            // 自定义上一页trigger
            $('#' + extra.prevTrigger).on('click', () => {
                that['@{trigger}<click>']({
                    params: {
                        offset: -1
                    }
                });
            })
        }
        if (extra.nextTrigger) {
            // 自定义下一页trigger
            $('#' + extra.nextTrigger).on('click', () => {
                that['@{trigger}<click>']({
                    params: {
                        offset: 1
                    }
                });
            })
        }

        that.on('destroy', () => {
            that['@{stop.auto.play}']();
        });
    },
    render() {
        let that = this;
        let { autoplay, active } = that.updater.get();
        let node = that['@{owner.node}'];
        let children = node.children();
        let len = children.length;

        // 跑马灯平滑轮播
        // 复制第一个节点和最后一个节点
        // panel1, panel2, panel3 转成 panel3, panel1, panel2, panel3, panel1
        let firstClone = $(children[0]).clone().attr('data-carousel-clone', true),
            lastClone = $(children[len - 1]).clone().attr('data-carousel-clone', true);
        node.prepend(lastClone).append(firstClone);

        // 修正active
        let len = children.length;
        if (active < 0) {
            active = 0;
        } else if (active > len - 1) {
            active = len - 1;
        }
        that.updater.digest({
            active,
            len,
            content: node.html()
        })

        that['@{dots.node}'] = node.find('.@index.less:dot');
        let panelsCnt = node.find('.@index.less:inner');
        that['@{panels.cnt}'] = panelsCnt;
        that['@{panels.node}'] = panelsCnt.find('[data-carousel="true"]');

        // 初始化单帧样式
        that['@{update.stage.size}']();

        // 初始化位置
        that['@{to.panel}'](active, true);

        // 大于一帧时可自动播放
        if (autoplay && (len > 1)) {
            that['@{start.auto.play}']();
            that['@{owner.node}'].hover(() => {
                that['@{stop.auto.play}']();
            }, () => {
                that['@{over.timer}'] = setTimeout(that.wrapAsync(that['@{start.auto.play}'], that), 50);
            });
        }
    },

    '@{update.stage.size}'() {
        let that = this;
        let node = that['@{owner.node}'];
        let { width, height, mode, vertical } = that.updater.get();

        let panelNodes = that['@{panels.node}'];
        for (let index = 0; index < panelNodes.length; index++) {
            let panelNode = $(panelNodes[index]);
            let style;

            switch (mode) {
                case 'carousel':
                    // 跑马灯
                    if (vertical) {
                        // 垂直方向
                        style = {
                            position: 'absolute',
                            top: height * index,
                            left: 0,
                            width,
                            height
                        }

                    } else {
                        // 水平方向
                        style = {
                            position: 'absolute',
                            top: 0,
                            left: width * index,
                            width,
                            height
                        }
                    }
                    break;
                case 'fade':
                    // 渐显渐隐
                    style = {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        left: 0,
                        width,
                        height
                    }
                    break;
            }
            panelNode.css(style);
        }

        if (vertical) {
            that['@{panels.cnt}'].height(panelNodes.length * height).width(width);
        } else {
            that['@{panels.cnt}'].width(panelNodes.length * width).height(height);
        }
    },

    /**
     * 假设有3个panel，
     * 真是节点有
     *      panel3（targetIndex=0, active = 2）
     *      panel1（targetIndex=1, active = 0）
     *      panel2（targetIndex=2, active = 1）
     *      panel3（targetIndex=3, active = 2）
     *      panel1（targetIndex=4, active = 0）
     * 入参index可存在的值: 
     *      -1：对应panel3
     *      0：对应panel1
     *      1：对应panel2
     *      2：对应panel3
     *      3：对应panel1
     */
    '@{to.panel}'(index, immediate) {
        index = +index;
        let that = this;
        let updater = that.updater;
        let { mode, duration, timing, width, height, vertical, len } = updater.get();

        let targetIndex = index + 1;
        switch (mode) {
            case 'carousel':
                let style = {
                    transform: `translate3d(${vertical ? `0,-${targetIndex * height}px` : `-${targetIndex * width}px,0`},0)`,
                    transition: `transform ${duration} ${timing}`
                };
                if (immediate) {
                    delete style.transition;
                }
                let cnt = that['@{panels.cnt}'];
                cnt.css(style);
                cnt.off('transitionend').on('transitionend', () => {
                    cnt.css('transition', '');
                    if (targetIndex == len + 1) {
                        // 回到panel1
                        cnt.css({
                            transform: `translate3d(${vertical ? `0,-${height}px` : `-${width}px,0`},0)`,
                        })
                    } else if (targetIndex == 0) {
                        // 回到panel3
                        cnt.css({
                            transform: `translate3d(${vertical ? `0,-${len * height}px` : `-${len * width}px,0`},0)`,
                        })
                    }
                })
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
                panelNodes.eq(targetIndex).css(style);
                break;
        }

        // 高亮对应的节点
        let active;
        if (index < 0) {
            active = len - 1;
        } else if (index > len - 1) {
            active = 0;
        } else {
            active = index;
        }
        updater.set({
            active
        })
        let cName = '@index.less:active';
        that['@{dots.node}'].removeClass(cName).eq(active).addClass(cName);
    },

    '@{start.auto.play}'() {
        let that = this;
        let { autoplay, interval } = that.updater.get();

        if (autoplay) {
            that['@{play.task}'] = setInterval(() => {
                let { active } = that.updater.get();
                that['@{to.panel}'](++active);
            }, interval);
        }
    },

    '@{stop.auto.play}'() {
        let that = this;
        if (that['@{over.timer}']) {
            clearTimeout(that['@{over.timer}']);
        }
        if (that['@{play.task}']) {
            clearInterval(that['@{play.task}']);
        }
    },

    '@{trigger}<click>'(e) {
        e.preventDefault();
        let offset = +e.params.offset;
        let { active } = this.updater.get();
        active = +active + offset;
        this['@{to.panel}'](active);
    },

    '@{active}<click>'(e) {
        this['@{to.panel}'](e.params.idx);
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
        that['@{to.panel}'](data.active, true);
    }
});