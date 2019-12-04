/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/examples/20",["magix","examples/example","mx-checkbox/storestate","mx-checkbox/linkage","$","../index","mx-pagination/index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,StoreState,Linkage,$*/
require("../index");
require("mx-pagination/index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var StoreState = require("mx-checkbox/storestate");
var Linkage = require("mx-checkbox/linkage");
var $ = require("$");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, list = $$.list, total = $$.total, size = $$.size, page = $$.page, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerye#:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_gallerye#:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxa="_zs_gallerye#:b" class="mb20"><a mxs="_zs_gallerye#:_" href="javascript:;" mx-click="' + $viewId + 'clear()" class="btn btn-brand mr20">清空所有选中</a><a mxs="_zs_gallerye#:a" href="javascript:;" mx-click="' + $viewId + 'get()" class="btn btn-brand mr20">获取选中值</a><span mxs="_zs_gallerye#:b" class="color-9">当前选中：</span>';
    $line = 6;
    $art = '=selected';
    ;
    $p += ($expr = '<%=selected%>', $e(selected)) + '</div><div mxv mxa="_zs_gallerye#:c" mx-view="mx-table/index?sticky=true"><div mxv><table mxv mxa="_zs_gallerye#:d" class="table"><thead mxv><tr mxv><th mxv mxa="_zs_gallerye#:e" width="50"><input mxs="_zs_gallerye#:c" type="checkbox" class="checkbox" linkage="example"/></th><th mxs="_zs_gallerye#:d" width="200">列1</th><th mxs="_zs_gallerye#:e" width="200">列2</th><th mxs="_zs_gallerye#:f" width="200">列3</th></tr></thead><tbody mxv>';
    $line = 21;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_cbejuygvipv$art_c = list.length; index < $art_cbejuygvipv$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_cbejuygvipv$art_c = list.length; index < $art_cbejuygvipv$art_c; index++) {
        var item = list[index];
        $p += '<tr mxv><td mxv><input type="checkbox" class="checkbox" linkage-parent="example" value="';
        $line = 26;
        $art = '=item.id';
        ;
        $p += ($expr = '<%=item.id%>', $e(item.id)) + '" ';
        $line = 27;
        $art = 'if item.disabled';
        ;
        $expr = '<%if (item.disabled) {%>';
        if (item.disabled) {
            ;
            $p += ' disabled="true" ';
            $line = 27;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '/></td><td>';
        $line = 29;
        $art = '=item.content1';
        ;
        $p += ($expr = '<%=item.content1%>', $e(item.content1)) + '</td><td>';
        $line = 30;
        $art = '=item.content2';
        ;
        $p += ($expr = '<%=item.content2%>', $e(item.content2)) + '</td><td>';
        $line = 31;
        $art = '=item.content3';
        ;
        $p += ($expr = '<%=item.content3%>', $e(item.content3)) + '</td></tr>';
        $line = 33;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div class="table-pager-wrapper" mx-change="' + $viewId + 'changePager()" mx-view="mx-pagination/index?total=';
    $line = 38;
    $art = '=total';
    ;
    $p += ($expr = '<%!$eu(total)%>', $eu(total)) + '&size=';
    $line = 39;
    $art = '=size';
    ;
    $p += ($expr = '<%!$eu(size)%>', $eu(size)) + '&page=';
    $line = 40;
    $art = '=page';
    ;
    $p += ($expr = '<%!$eu(page)%>', $eu(page)) + '"></div></div><div mxa="_zs_gallerye#:f" class="clearfix"><div mxa="_zs_gallerye#:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_gallerye#:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerye#:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 48;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerye#:h" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 51;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n                123\n            </pre></div><div mxa="_zs_gallerye#:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_gallerye#:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 57;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerye#:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 59;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerye#:h" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 62;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n                123\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/examples/20.html';
    throw msg;
} return $p; },
    mixins: [StoreState, Linkage],
    render: function () {
        var that = this;
        var allList = [];
        for (var i = 0; i < 20; i++) {
            allList.push({
                id: i,
                disabled: (i % 2 == 0),
                content1: i + '_列1',
                content2: i + '_列2',
                content3: i + '_列3'
            });
        }
        var size = 5, total = allList.length, page = 1;
        var list = allList.slice(0, 5);
        that.updater.digest({
            allList: allList,
            list: [],
            size: size,
            page: page,
            total: total,
            selected: []
        });
    },
    'changePager<change>': function (e) {
        // e.page 当前第几页
        // e.size 每页多少条
        var that = this;
        var page = +e.page;
        var allList = that.updater.get('allList');
        var list = allList.slice((page - 1) * 5, page * 5);
        that.updater.digest({
            list: list,
            page: page
        });
    },
    'get<click>': function (e) {
        var selected = this.getStoreState('example');
        this.updater.digest({
            selected: selected
        });
    },
    'clear<click>': function (e) {
        this.clearStoreState('example');
        this.updater.digest({
            selected: ''
        });
    }
});

});