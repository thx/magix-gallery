/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/16",["magix","$","../index"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
var Magix = require("magix");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', line = $$.line; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryco:_" mx-view="mx-table/index?sticky=true"><div><table mxa="_zs_galleryco:a" class="table" left="true"><thead><tr>';
    $line = 6;
    $art = 'for (let i=0;i<4;i++)';
    ;
    $p += '';
    $expr = '<%for (var i = 0; i < 4; i++) {%>';
    for (var i = 0; i < 4; i++) {
        ;
        $p += '<th mxa="_zs_galleryco:b" width="120">固定字段';
        $line = 7;
        $art = '=i';
        ;
        $p += '' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 8;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 12;
    $art = 'for (let j=0;j<line;j++)';
    ;
    $p += '';
    $expr = '<%for (var j = 0; j < line; j++) {%>';
    for (var j = 0; j < line; j++) {
        ;
        $p += '<tr>';
        $line = 14;
        $art = 'for (let i=0;i<4;i++)';
        ;
        $p += '';
        $expr = '<%for (var i = 0; i < 4; i++) {%>';
        for (var i = 0; i < 4; i++) {
            ;
            $p += '<td>固定内容';
            $line = 15;
            $art = '=i';
            ;
            $p += '' + ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 16;
            $art = '/for';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $line = 18;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div><div><table mxa="_zs_galleryco:c" class="table" center="true"><thead><tr>';
    $line = 25;
    $art = 'for (let i=0;i<10;i++)';
    ;
    $p += '';
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<th width="';
        $line = 26;
        $art = '=(80 + i * 10)';
        ;
        $p += '' + ($expr = '<%=(80 + i * 10)%>', $e((80 + i * 10))) + '">滚动';
        $line = 26;
        $art = '=i';
        ;
        $p += '' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 27;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 31;
    $art = 'for (let j=0;j<line;j++)';
    ;
    $p += '';
    $expr = '<%for (var j = 0; j < line; j++) {%>';
    for (var j = 0; j < line; j++) {
        ;
        $p += '<tr>';
        $line = 33;
        $art = 'for (let i=0;i<10;i++)';
        ;
        $p += '';
        $expr = '<%for (var i = 0; i < 10; i++) {%>';
        for (var i = 0; i < 10; i++) {
            ;
            $p += '<td>滚动内容';
            $line = 34;
            $art = '=i';
            ;
            $p += '' + ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 35;
            $art = '/for';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $line = 37;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxa="_zs_galleryco:d" mx-view="mx-table/index?sticky=true"><div><table mxa="_zs_galleryco:e" class="table" left="true" width="500"><thead><tr>';
    $line = 47;
    $art = 'for (let i=0;i<4;i++)';
    ;
    $p += '';
    $expr = '<%for (var i = 0; i < 4; i++) {%>';
    for (var i = 0; i < 4; i++) {
        ;
        $p += '<th mxa="_zs_galleryco:f" width="120">固定字段';
        $line = 48;
        $art = '=i';
        ;
        $p += '' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 49;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 53;
    $art = 'for (let j=0;j<line;j++)';
    ;
    $p += '';
    $expr = '<%for (var j = 0; j < line; j++) {%>';
    for (var j = 0; j < line; j++) {
        ;
        $p += '<tr>';
        $line = 55;
        $art = 'for (let i=0;i<4;i++)';
        ;
        $p += '';
        $expr = '<%for (var i = 0; i < 4; i++) {%>';
        for (var i = 0; i < 4; i++) {
            ;
            $p += '<td>固定内容';
            $line = 56;
            $art = '=i';
            ;
            $p += '' + ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 57;
            $art = '/for';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $line = 59;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div><div><table mxa="_zs_galleryco:g" class="table" center="true" width="1000"><thead><tr>';
    $line = 66;
    $art = 'for (let i=0;i<10;i++)';
    ;
    $p += '';
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<th>滚动';
        $line = 67;
        $art = '=i';
        ;
        $p += '' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 68;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 72;
    $art = 'for (let j=0;j<line;j++)';
    ;
    $p += '';
    $expr = '<%for (var j = 0; j < line; j++) {%>';
    for (var j = 0; j < line; j++) {
        ;
        $p += '<tr>';
        $line = 74;
        $art = 'for (let i=0;i<10;i++)';
        ;
        $p += '';
        $expr = '<%for (var i = 0; i < 10; i++) {%>';
        for (var i = 0; i < 10; i++) {
            ;
            $p += '<td>滚动内容';
            $line = 75;
            $art = '=i';
            ;
            $p += '' + ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 76;
            $art = '/for';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $line = 78;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/16.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            line: 2
        });
    }
});

});