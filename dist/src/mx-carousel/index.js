/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-carousel_index_","._zs_gallery_mx-carousel_index_-triggers {\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  z-index: 4;\n  background: rgba(0, 0, 0, 0.5);\n  width: 30px;\n  height: 60px;\n  margin-top: -30px;\n  text-align: center;\n  line-height: 60px;\n  font-size: 22px;\n  color: #999;\n  transition: all var(--duration);\n  cursor: pointer;\n  border-radius: 0 4px 4px 0;\n}\n._zs_gallery_mx-carousel_index_-triggers:hover {\n  color: #fff;\n}\n._zs_gallery_mx-carousel_index_-triggers-left {\n  left: -2px;\n}\n._zs_gallery_mx-carousel_index_-triggers-right {\n  right: -2px;\n  transform: rotate(180deg);\n}\n._zs_gallery_mx-carousel_index_-dots,\n._zs_gallery_mx-carousel_index_-v-dots {\n  position: absolute;\n  z-index: 4;\n  text-align: center;\n  vertical-align: middle;\n}\n._zs_gallery_mx-carousel_index_-dots ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-v-dots ._zs_gallery_mx-carousel_index_-dot {\n  display: inline-block;\n  background-color: #fff;\n  opacity: 0.5;\n  border-radius: 1px;\n  transition: all 0.5s;\n  cursor: pointer;\n  vertical-align: middle;\n}\n._zs_gallery_mx-carousel_index_-dots ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-v-dots ._zs_gallery_mx-carousel_index_-dot:hover {\n  opacity: 0.8;\n}\n._zs_gallery_mx-carousel_index_-dots {\n  left: 0;\n  bottom: 16px;\n  width: 100%;\n  height: 5px;\n}\n._zs_gallery_mx-carousel_index_-dots ._zs_gallery_mx-carousel_index_-dot {\n  width: 20px;\n  height: 5px;\n  margin: 0 2px;\n}\n._zs_gallery_mx-carousel_index_-dots ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active {\n  opacity: 1;\n  width: 28px;\n}\n._zs_gallery_mx-carousel_index_-v-dots {\n  top: 50%;\n  right: 12px;\n  width: 5px;\n  transform: translateY(-50%);\n}\n._zs_gallery_mx-carousel_index_-v-dots ._zs_gallery_mx-carousel_index_-dot {\n  width: 5px;\n  height: 20px;\n  margin: 2px 0;\n}\n._zs_gallery_mx-carousel_index_-v-dots ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active {\n  opacity: 1;\n  height: 28px;\n}\n._zs_gallery_mx-carousel_index_-carousel {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n._zs_gallery_mx-carousel_index_-carousel ._zs_gallery_mx-carousel_index_-inner {\n  position: relative;\n  z-index: 3;\n}\n._zs_gallery_mx-carousel_index_-carousel:hover ._zs_gallery_mx-carousel_index_-triggers {\n  opacity: 1;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', height = $$.height, content = $$.content, len = $$.len, dots = $$.dots, vertical = $$.vertical, dotClass = $$.dotClass; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-carousel_index_-carousel" style="height: ';
    $line = 1;
    $art = '=height';
    ;
    $p += ($expr = '<%=height%>', $e(height)) + 'px;"><div mxa="_zs_galleryaf:_" class="_zs_gallery_mx-carousel_index_-inner" mx-mouseover="' + $viewId + '@{stop}()" mx-mouseout="' + $viewId + '@{start}()">';
    $line = 3;
    $art = '!content';
    ;
    $p += ($expr = '<%!content%>', $n(content)) + '</div>';
    $line = 5;
    $art = 'if len > 1';
    ;
    $expr = '<%if (len > 1) {%>';
    if (len > 1) {
        ;
        $p += ' ';
        $line = 6;
        $art = 'if dots';
        ;
        $expr = '<%if (dots) {%>';
        if (dots) {
            ;
            $p += '<div class="';
            $line = 7;
            $art = 'if vertical';
            ;
            $expr = '<%if (vertical) {%>';
            if (vertical) {
                ;
                $p += ' _zs_gallery_mx-carousel_index_-v-dots ';
                $line = 7;
                $art = 'else';
                ;
                $expr = '<%}        else {%>';
            }
            else {
                ;
                $p += ' _zs_gallery_mx-carousel_index_-dots ';
                $line = 7;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' clearfix" mx-mouseover="' + $viewId + '@{stop}()" mx-mouseout="' + $viewId + '@{start}()">';
            $line = 10;
            $art = 'for (let i=0;i<len;i+=1)';
            ;
            $expr = '<%for (var i = 0; i < len; i += 1) {%>';
            for (var i = 0; i < len; i += 1) {
                ;
                $p += '<span class="_zs_gallery_mx-carousel_index_-dot ';
                $line = 11;
                $art = '=dotClass';
                ;
                $p += ($expr = '<%=dotClass%>', $e(dotClass)) + '" mx-click="' + $viewId + '@{active}({idx:';
                $line = 11;
                $art = '=i';
                ;
                $p += ($expr = '<%=i%>', $e(i)) + '})"></span>';
                $line = 12;
                $art = '/for';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 14;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<i mxs="_zs_galleryaf:j" class="_zs_gallery_mx-carousel_index_-triggers _zs_gallery_mx-carousel_index_-triggers-left mc-iconfont" mx-click="' + $viewId + '@{trigger}({offset: -1})">&#xe61e;</i><i mxs="_zs_galleryaf:k" class="_zs_gallery_mx-carousel_index_-triggers _zs_gallery_mx-carousel_index_-triggers-right mc-iconfont" mx-click="' + $viewId + '@{trigger}({offset: 1})">&#xe61e;</i>';
        $line = 18;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-carousel/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var that = this;
        var node = $('#' + that.id);
        that['@{owner.node}'] = node;
        that['@{extra.info}'] = extra;
        that.updater.set({
            mode: extra.mode || 'carousel',
            width: extra.width || $(node).width() || 400,
            height: extra.height || $(node).height() || 200,
            active: extra.active || 0,
            interval: (extra.interval | 0) || 3000,
            autoplay: (extra.autoplay + '') === 'true',
            dots: (extra.dots + '') !== 'false',
            vertical: (extra.vertical + '') === 'true',
            timing: extra.timing || 'ease-in-out',
            duration: extra.duration || '.5s',
            dotClass: extra.dotClass || ''
        });
        if (extra.prevTrigger) {
            $('#' + extra.prevTrigger).on('click', function () {
                that['@{trigger}<click>']({
                    params: {
                        offset: -1
                    }
                });
            });
        }
        if (extra.nextTrigger) {
            $('#' + extra.nextTrigger).on('click', function () {
                that['@{trigger}<click>']({
                    params: {
                        offset: 1
                    }
                });
            });
        }
        that.on('destroy', function () {
            that['@{stop.auto.play}']();
            if (that['@{over.timer}']) {
                clearTimeout(that['@{over.timer}']);
            }
        });
    },
    render: function () {
        var that = this;
        var _a = that.updater.get(), autoplay = _a.autoplay, active = _a.active;
        var node = that['@{owner.node}'];
        var children = node.children();
        var len = children.length;
        // 跑马灯平滑轮播
        // 复制第一个节点和最后一个节点
        // panel1, panel2, panel3 转成 panel3, panel1, panel2, panel3, panel1
        var firstClone = $(children[0]).clone().attr('data-carousel-clone', true), lastClone = $(children[len - 1]).clone().attr('data-carousel-clone', true);
        node.prepend(lastClone).append(firstClone);
        // 修正active
        var len = children.length;
        if (active < 0) {
            active = 0;
        }
        else if (active > len - 1) {
            active = len - 1;
        }
        that.updater.digest({
            active: active,
            len: len,
            content: node.html()
        });
        that['@{dots.node}'] = node.find('._zs_gallery_mx-carousel_index_-dot');
        var panelsCnt = node.find('._zs_gallery_mx-carousel_index_-inner');
        that['@{panels.cnt}'] = panelsCnt;
        that['@{panels.node}'] = panelsCnt.find('[data-carousel="true"]');
        // 初始化单帧样式
        that['@{update.stage.size}']();
        // 初始化位置
        that['@{to.panel}'](active, true);
        // 自动播放
        if (autoplay) {
            that['@{start.auto.play}']();
        }
    },
    '@{update.stage.size}': function () {
        var that = this;
        var node = that['@{owner.node}'];
        var _a = that.updater.get(), width = _a.width, height = _a.height, mode = _a.mode, vertical = _a.vertical;
        var panelNodes = that['@{panels.node}'];
        for (var index = 0; index < panelNodes.length; index++) {
            var panelNode = $(panelNodes[index]);
            var style = void 0;
            switch (mode) {
                case 'carousel':
                    // 跑马灯
                    if (vertical) {
                        // 垂直方向
                        style = {
                            position: 'absolute',
                            top: height * index,
                            left: 0,
                            width: width,
                            height: height
                        };
                    }
                    else {
                        // 水平方向
                        style = {
                            position: 'absolute',
                            top: 0,
                            left: width * index,
                            width: width,
                            height: height
                        };
                    }
                    break;
                case 'fade':
                    // 渐显渐隐
                    style = {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        left: 0,
                        width: width,
                        height: height
                    };
                    break;
            }
            panelNode.css(style);
        }
        if (vertical) {
            that['@{panels.cnt}'].height(panelNodes.length * height).width(width);
        }
        else {
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
    '@{to.panel}': function (index, immediate) {
        index = +index;
        var that = this;
        var updater = that.updater;
        var _a = updater.get(), mode = _a.mode, duration = _a.duration, timing = _a.timing, width = _a.width, height = _a.height, vertical = _a.vertical, len = _a.len;
        var targetIndex = index + 1;
        switch (mode) {
            case 'carousel':
                var style = {
                    transform: "translate3d(" + (vertical ? "0,-" + targetIndex * height + "px" : "-" + targetIndex * width + "px,0") + ",0)",
                    transition: "transform " + duration + " " + timing
                };
                if (immediate) {
                    delete style.transition;
                }
                var cnt_1 = that['@{panels.cnt}'];
                cnt_1.css(style);
                cnt_1.off('transitionend').on('transitionend', function () {
                    cnt_1.css('transition', '');
                    if (targetIndex == len + 1) {
                        // 回到panel1
                        cnt_1.css({
                            transform: "translate3d(" + (vertical ? "0,-" + height + "px" : "-" + width + "px,0") + ",0)"
                        });
                    }
                    else if (targetIndex == 0) {
                        // 回到panel3
                        cnt_1.css({
                            transform: "translate3d(" + (vertical ? "0,-" + len * height + "px" : "-" + len * width + "px,0") + ",0)"
                        });
                    }
                });
                break;
            case 'fade':
                var panelNodes = that['@{panels.node}'];
                panelNodes.css({
                    opacity: 0
                });
                var style = {
                    opacity: 1,
                    transition: "opacity " + duration + " " + timing
                };
                panelNodes.eq(targetIndex).css(style);
                break;
        }
        // 高亮对应的节点
        var active;
        if (index < 0) {
            active = len - 1;
        }
        else if (index > len - 1) {
            active = 0;
        }
        else {
            active = index;
        }
        updater.set({
            active: active
        });
        var cName = '_zs_gallery_mx-carousel_index_-active';
        that['@{dots.node}'].removeClass(cName).eq(active).addClass(cName);
    },
    '@{start.auto.play}': function () {
        var that = this;
        var _a = that.updater.get(), autoplay = _a.autoplay, interval = _a.interval;
        if (autoplay) {
            that['@{play.task}'] = setInterval(function () {
                var active = that.updater.get().active;
                that['@{to.panel}'](++active);
            }, interval);
        }
    },
    '@{stop.auto.play}': function () {
        var that = this;
        if (that['@{play.task}']) {
            clearInterval(that['@{play.task}']);
        }
    },
    '@{trigger}<click>': function (e) {
        e.preventDefault();
        var offset = +e.params.offset;
        var active = this.updater.get().active;
        active = +active + offset;
        this['@{to.panel}'](active);
    },
    '@{active}<click>': function (e) {
        this['@{to.panel}'](e.params.idx);
    },
    '@{start}<mouseout>': function (e) {
        var that = this;
        if (!Magix.inside(e.relatedTarget, that.id)) {
            that['@{over.timer}'] = setTimeout(that.wrapAsync(that['@{start.auto.play}'], that), 50);
        }
    },
    '@{stop}<mouseover>': function (e) {
        var that = this;
        if (!Magix.inside(e.relatedTarget, that.id)) {
            if (that['@{over.timer}']) {
                clearTimeout(that['@{over.timer}']);
            }
            that['@{stop.auto.play}']();
        }
    },
    '$win<resize>': function () {
        var that = this;
        var data = that.updater.get();
        var extra = that['@{extra.info}'];
        var node = that['@{owner.node}'];
        that.updater.set({
            width: extra.width || $(node).width() || 400
        });
        that['@{update.stage.size}']();
        that['@{to.panel}'](data.active, true);
    }
});

});