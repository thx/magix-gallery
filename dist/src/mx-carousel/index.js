/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-carousel_index_","._zs_gallery_mx-carousel_index_-triggers {\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  z-index: 4;\n  background: rgba(0, 0, 0, 0.5);\n  width: 30px;\n  height: 60px;\n  margin-top: -30px;\n  text-align: center;\n  line-height: 60px;\n  font-size: 22px;\n  color: rgba(255, 255, 255, 0.5);\n  transition: all var(--duration);\n  cursor: pointer;\n  border-radius: 0 4px 4px 0;\n}\n._zs_gallery_mx-carousel_index_-triggers:hover {\n  color: #fff;\n}\n._zs_gallery_mx-carousel_index_-triggers-left {\n  left: -2px;\n}\n._zs_gallery_mx-carousel_index_-triggers-right {\n  right: -2px;\n  transform: rotate(180deg);\n}\n._zs_gallery_mx-carousel_index_-type--h--line-in-center,\n._zs_gallery_mx-carousel_index_-type--h--line-in-left,\n._zs_gallery_mx-carousel_index_-type--h--line-in-right,\n._zs_gallery_mx-carousel_index_-type--h--line-out-center,\n._zs_gallery_mx-carousel_index_-type--v--line-in-center,\n._zs_gallery_mx-carousel_index_-type--v--line-in-left,\n._zs_gallery_mx-carousel_index_-type--v--line-in-right,\n._zs_gallery_mx-carousel_index_-type--v--line-out-center {\n  position: absolute;\n  z-index: 4;\n}\n._zs_gallery_mx-carousel_index_-type--h--line-in-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--line-in-left ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--line-in-right ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--line-out-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--line-in-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--line-in-left ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--line-in-right ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--line-out-center ._zs_gallery_mx-carousel_index_-dot {\n  display: inline-block;\n  opacity: 0.5;\n  border-radius: 1px;\n  transition: all 0.5s;\n  cursor: pointer;\n  vertical-align: top;\n}\n._zs_gallery_mx-carousel_index_-type--h--line-in-center ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-type--h--line-in-left ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-type--h--line-in-right ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-type--h--line-out-center ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-type--v--line-in-center ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-type--v--line-in-left ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-type--v--line-in-right ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-type--v--line-out-center ._zs_gallery_mx-carousel_index_-dot:hover {\n  opacity: 0.8;\n}\n._zs_gallery_mx-carousel_index_-type--h--line-in-center,\n._zs_gallery_mx-carousel_index_-type--h--line-in-left,\n._zs_gallery_mx-carousel_index_-type--h--line-in-right,\n._zs_gallery_mx-carousel_index_-type--h--line-out-center {\n  left: 0;\n  width: 100%;\n  height: 5px;\n}\n._zs_gallery_mx-carousel_index_-type--h--line-in-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--line-in-left ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--line-in-right ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--line-out-center ._zs_gallery_mx-carousel_index_-dot {\n  width: 20px;\n  height: 5px;\n  margin: 0 2px;\n}\n._zs_gallery_mx-carousel_index_-type--h--line-in-center ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active,\n._zs_gallery_mx-carousel_index_-type--h--line-in-left ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active,\n._zs_gallery_mx-carousel_index_-type--h--line-in-right ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active,\n._zs_gallery_mx-carousel_index_-type--h--line-out-center ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active {\n  opacity: 1;\n  width: 28px;\n}\n._zs_gallery_mx-carousel_index_-type--v--line-in-center,\n._zs_gallery_mx-carousel_index_-type--v--line-in-left,\n._zs_gallery_mx-carousel_index_-type--v--line-in-right,\n._zs_gallery_mx-carousel_index_-type--v--line-out-center {\n  top: 50%;\n  width: 5px;\n  transform: translateY(-50%);\n  text-align: center;\n}\n._zs_gallery_mx-carousel_index_-type--v--line-in-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--line-in-left ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--line-in-right ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--line-out-center ._zs_gallery_mx-carousel_index_-dot {\n  width: 5px;\n  height: 20px;\n  margin: 2px 0;\n}\n._zs_gallery_mx-carousel_index_-type--v--line-in-center ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active,\n._zs_gallery_mx-carousel_index_-type--v--line-in-left ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active,\n._zs_gallery_mx-carousel_index_-type--v--line-in-right ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active,\n._zs_gallery_mx-carousel_index_-type--v--line-out-center ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active {\n  opacity: 1;\n  height: 28px;\n}\n._zs_gallery_mx-carousel_index_-type--h--dot-in-center,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-left,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-right,\n._zs_gallery_mx-carousel_index_-type--h--dot-out-center,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-center,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-left,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-right,\n._zs_gallery_mx-carousel_index_-type--v--dot-out-center {\n  position: absolute;\n  z-index: 4;\n}\n._zs_gallery_mx-carousel_index_-type--h--dot-in-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-left ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-right ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--dot-out-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-left ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-right ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--dot-out-center ._zs_gallery_mx-carousel_index_-dot {\n  display: inline-block;\n  opacity: 0.4;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  transition: all 0.5s;\n  cursor: pointer;\n  vertical-align: top;\n}\n._zs_gallery_mx-carousel_index_-type--h--dot-in-center ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-left ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-right ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-type--h--dot-out-center ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-center ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-left ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-right ._zs_gallery_mx-carousel_index_-dot:hover,\n._zs_gallery_mx-carousel_index_-type--v--dot-out-center ._zs_gallery_mx-carousel_index_-dot:hover {\n  opacity: 0.8;\n}\n._zs_gallery_mx-carousel_index_-type--h--dot-in-center,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-left,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-right,\n._zs_gallery_mx-carousel_index_-type--h--dot-out-center {\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n._zs_gallery_mx-carousel_index_-type--h--dot-in-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-left ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-right ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--dot-out-center ._zs_gallery_mx-carousel_index_-dot {\n  margin: 0 4px;\n}\n._zs_gallery_mx-carousel_index_-type--h--dot-in-center ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-left ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-right ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active,\n._zs_gallery_mx-carousel_index_-type--h--dot-out-center ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active {\n  opacity: 1;\n}\n._zs_gallery_mx-carousel_index_-type--v--dot-in-center,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-left,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-right,\n._zs_gallery_mx-carousel_index_-type--v--dot-out-center {\n  top: 50%;\n  width: 8px;\n  transform: translateY(-50%);\n  text-align: center;\n}\n._zs_gallery_mx-carousel_index_-type--v--dot-in-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-left ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-right ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--dot-out-center ._zs_gallery_mx-carousel_index_-dot {\n  margin: 4px 0;\n}\n._zs_gallery_mx-carousel_index_-type--v--dot-in-center ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-left ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-right ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active,\n._zs_gallery_mx-carousel_index_-type--v--dot-out-center ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active {\n  opacity: 1;\n}\n._zs_gallery_mx-carousel_index_-type--h--line-in-center,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-center {\n  bottom: 12px;\n  text-align: center;\n}\n._zs_gallery_mx-carousel_index_-type--h--line-in-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-center ._zs_gallery_mx-carousel_index_-dot {\n  background-color: #fff;\n}\n._zs_gallery_mx-carousel_index_-type--h--line-in-left,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-left {\n  padding-left: 24px;\n  bottom: 12px;\n  text-align: left;\n}\n._zs_gallery_mx-carousel_index_-type--h--line-in-left ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-left ._zs_gallery_mx-carousel_index_-dot {\n  background-color: #fff;\n}\n._zs_gallery_mx-carousel_index_-type--h--line-in-right,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-right {\n  bottom: 12px;\n  padding-right: 24px;\n  text-align: right;\n}\n._zs_gallery_mx-carousel_index_-type--h--line-in-right ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--dot-in-right ._zs_gallery_mx-carousel_index_-dot {\n  background-color: #fff;\n}\n._zs_gallery_mx-carousel_index_-type--h--line-out-center,\n._zs_gallery_mx-carousel_index_-type--h--dot-out-center {\n  bottom: -12px;\n  text-align: center;\n}\n._zs_gallery_mx-carousel_index_-type--h--line-out-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--h--dot-out-center ._zs_gallery_mx-carousel_index_-dot {\n  background-color: var(--color-brand);\n}\n._zs_gallery_mx-carousel_index_-type--v--line-in-center,\n._zs_gallery_mx-carousel_index_-type--v--line-in-right,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-center,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-right {\n  right: 12px;\n}\n._zs_gallery_mx-carousel_index_-type--v--line-in-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--line-in-right ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-right ._zs_gallery_mx-carousel_index_-dot {\n  background-color: #fff;\n}\n._zs_gallery_mx-carousel_index_-type--v--line-in-left,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-left {\n  left: 12px;\n}\n._zs_gallery_mx-carousel_index_-type--v--line-in-left ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--dot-in-left ._zs_gallery_mx-carousel_index_-dot {\n  background-color: #fff;\n}\n._zs_gallery_mx-carousel_index_-type--v--line-out-center,\n._zs_gallery_mx-carousel_index_-type--v--dot-out-center {\n  right: -12px;\n}\n._zs_gallery_mx-carousel_index_-type--v--line-out-center ._zs_gallery_mx-carousel_index_-dot,\n._zs_gallery_mx-carousel_index_-type--v--dot-out-center ._zs_gallery_mx-carousel_index_-dot {\n  background-color: var(--color-brand);\n}\n._zs_gallery_mx-carousel_index_-carousel {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n._zs_gallery_mx-carousel_index_-carousel ._zs_gallery_mx-carousel_index_-inner {\n  position: relative;\n  z-index: 3;\n}\n._zs_gallery_mx-carousel_index_-carousel:hover ._zs_gallery_mx-carousel_index_-triggers {\n  opacity: 1;\n}\n[mx-view*=\"mx-carousel\"] {\n  position: relative;\n}\n");
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
} ; var $g = '', $_temp, $p = '', height = $$.height, content = $$.content, triggers = $$.triggers, len = $$.len, dots = $$.dots, dotPrefix = $$.dotPrefix, dotType = $$.dotType, dotClass = $$.dotClass; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-carousel_index_-carousel" style="height: ';
    $line = 1;
    $art = '=height';
    ;
    $p += ($expr = '<%=height%>', $e(height)) + 'px;"><div mxa="_zs_galleryaj:_" class="_zs_gallery_mx-carousel_index_-inner">';
    $line = 3;
    $art = '!content';
    ;
    $p += ($expr = '<%!content%>', $n(content)) + '</div>';
    $line = 6;
    $art = 'if triggers && (len > 1)';
    ;
    $expr = '<%if (triggers && (len > 1)) {%>';
    if (triggers && (len > 1)) {
        ;
        $p += '<i mxs="_zs_galleryaj:_" class="_zs_gallery_mx-carousel_index_-triggers _zs_gallery_mx-carousel_index_-triggers-left mc-iconfont" mx-click="' + $viewId + '@{trigger}({offset: -1})">&#xe61e;</i><i mxs="_zs_galleryaj:a" class="_zs_gallery_mx-carousel_index_-triggers _zs_gallery_mx-carousel_index_-triggers-right mc-iconfont" mx-click="' + $viewId + '@{trigger}({offset: 1})">&#xe61e;</i>';
        $line = 9;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
    $line = 12;
    $art = 'if dots && (len > 1)';
    ;
    $expr = '<%if (dots && (len > 1)) {%>';
    if (dots && (len > 1)) {
        ;
        $p += '<div class="_zs_gallery_mx-carousel_index_-type--';
        $line = 13;
        $art = '=dotPrefix';
        ;
        $p += ($expr = '<%=dotPrefix%>', $e(dotPrefix)) + '--';
        $line = 13;
        $art = '=dotType';
        ;
        $p += ($expr = '<%=dotType%>', $e(dotType)) + '">';
        $line = 14;
        $art = 'for (let i=0;i<len;i+=1)';
        ;
        $expr = '<%for (var i = 0; i < len; i += 1) {%>';
        for (var i = 0; i < len; i += 1) {
            ;
            $p += '<span class="_zs_gallery_mx-carousel_index_-dot ';
            $line = 15;
            $art = '=dotClass';
            ;
            $p += ($expr = '<%=dotClass%>', $e(dotClass)) + '" mx-click="' + $viewId + '@{active}({idx:';
            $line = 15;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '})"></span>';
            $line = 16;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 18;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
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
        // 是否是垂直方向   
        var vertical = (extra.vertical + '') === 'true';
        that.updater.set({
            mode: extra.mode || 'carousel',
            width: extra.width || $(node).width() || 400,
            height: extra.height || $(node).height() || 200,
            active: extra.active || 0,
            interval: (extra.interval | 0) || 3000,
            autoplay: (extra.autoplay + '') === 'true',
            dots: (extra.dots + '') !== 'false',
            dotPrefix: vertical ? 'v' : 'h',
            dotType: extra.dotType || 'line-in-center',
            dotClass: extra.dotClass || '',
            triggers: (extra.triggers + '') == 'true',
            triggerClass: extra.triggerClass || '',
            vertical: vertical,
            timing: extra.timing || 'ease-in-out',
            duration: extra.duration || '.5s' // 动画持续时间
        });
        if (extra.prevTrigger) {
            // 自定义上一页trigger
            $('#' + extra.prevTrigger).on('click', function () {
                that['@{trigger}<click>']({
                    params: {
                        offset: -1
                    }
                });
            });
        }
        if (extra.nextTrigger) {
            // 自定义下一页trigger
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
        var firstClone = that['@{clone}'](children[0]), lastClone = that['@{clone}'](children[len - 1]);
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
        // 大于一帧时可自动播放
        if (autoplay && (len > 1)) {
            that['@{start.auto.play}']();
            that['@{owner.node}'].hover(function () {
                that['@{stop.auto.play}']();
            }, function () {
                that['@{over.timer}'] = setTimeout(that.wrapAsync(that['@{start.auto.play}'], that), 50);
            });
        }
    },
    /**
     * 避免id重复
     */
    '@{clone}': function (node) {
        var cloneNode = $(node).clone(true).attr('data-carousel-clone', true);
        var children = cloneNode.find('*');
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.id) {
                child.id = child.id + Magix.guid('_clone');
            }
        }
        return cloneNode;
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
        var interval = that.updater.get().interval;
        that['@{play.task}'] = setInterval(function () {
            var active = that.updater.get().active;
            that['@{to.panel}'](++active);
        }, interval);
    },
    '@{stop.auto.play}': function () {
        var that = this;
        if (that['@{over.timer}']) {
            clearTimeout(that['@{over.timer}']);
        }
        if (that['@{play.task}']) {
            clearInterval(that['@{play.task}']);
        }
    },
    '@{trigger}<click>': function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        var _a = this.updater.get(), active = _a.active, len = _a.len;
        // 大于一帧才可轮播
        if (len > 1) {
            var offset = +e.params.offset;
            active = +active + offset;
            this['@{to.panel}'](active);
        }
    },
    '@{active}<click>': function (e) {
        this['@{to.panel}'](e.params.idx);
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