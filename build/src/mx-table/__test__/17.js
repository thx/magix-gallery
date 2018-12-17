/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/17",["magix","__test__/example","$","mx-dropdown/index","../index","mx-pagination/index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-dropdown/index");
require("../index");
require("mx-pagination/index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-table___test___17_","._zs_gallery_mx-table___test___17_-filters {\n  height: 50px;\n}\n._zs_gallery_mx-table___test___17_-filters-inner {\n  height: 50px;\n  padding-top: 8px;\n  background-color: #fff;\n}\n._zs_gallery_mx-table___test___17_-filters-fixed {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 280px;\n  right: 40px;\n}\n");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, interval = $$.interval, page = $$.page, text1 = $$.text1, text3 = $$.text3, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerydl:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerydl:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerydl:_" class="mb10 lh22 clearfix"><div class="fl color-9">该示例：</div><div class="fl"><div>筛选项同表头一起吸顶</div><div>表头的吸顶逻辑是表格可见时吸顶，筛选项的吸顶逻辑同表头，筛选项吸顶时注意预留筛选项的占位符</div><div>筛选项的吸顶功能请自行控制，表格上设置&nbsp;<span class="color-brand">sticky-interval</span>&nbsp;预留吸顶空白</div><div>sticky-interval 只在 sticky == true && scroll-wrapper == window时生效</div></div></div><div id="';
    $line = 12;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_filters" class="_zs_gallery_mx-table___test___17_-filters"><div id="';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_filters_inner" class="_zs_gallery_mx-table___test___17_-filters-inner clearfix"><div class="fl mr10" mx-change="' + $viewId + 'changeFilter()" mx-view="mx-dropdown/index?list=';
    $line = 15;
    $art = '@[1,2,3]';
    ;
    $p += ($expr = '<%@[1, 2, 3]%>', $i($$ref, [1, 2, 3])) + '"></div><div class="fl" mx-change="' + $viewId + 'changeFilter()" mx-view="mx-dropdown/index?list=';
    $line = 19;
    $art = '@[4,5,6]';
    ;
    $p += ($expr = '<%@[4, 5, 6]%>', $i($$ref, [4, 5, 6])) + '"></div></div></div><div mx-view="mx-table/index?sticky=true&stickyInterval=';
    $line = 24;
    $art = '=interval';
    ;
    $p += ($expr = '<%!$eu(interval)%>', $eu(interval)) + '" id="';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_table"><div><table mxa="_zs_gallerydl:b" class="table" left="true"><thead><tr>';
    $line = 28;
    $art = 'for (let i=0;i<4;i++)';
    ;
    $expr = '<%for (var i = 0; i < 4; i++) {%>';
    for (var i = 0; i < 4; i++) {
        ;
        $p += '<th mxa="_zs_gallerydl:c" width="120">固定字段';
        $line = 29;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 30;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 34;
    $art = 'for (let j=0;j<(page * 5);j++)';
    ;
    $expr = '<%for (var j = 0; j < (page * 5); j++) {%>';
    for (var j = 0; j < (page * 5); j++) {
        ;
        $p += '<tr>';
        $line = 36;
        $art = 'for (let i=0;i<4;i++)';
        ;
        $expr = '<%for (var i = 0; i < 4; i++) {%>';
        for (var i = 0; i < 4; i++) {
            ;
            $p += '<td>固定内容';
            $line = 37;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 38;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</tr><tr mxs="_zs_gallerydl:a" class="operation-tr"><td colspan="4"><a href="javascript:;" class="btn btn-small mr10">操作</a><a href="javascript:;" class="btn btn-small">操作</a></td></tr>';
        $line = 46;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div><div><table mxa="_zs_gallerydl:d" class="table" center="true"><thead><tr>';
    $line = 52;
    $art = 'for (let i=0;i<10;i++)';
    ;
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<th mxa="_zs_gallerydl:e" width="120">滚动';
        $line = 53;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 54;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 58;
    $art = 'for (let j=0;j<(page * 5);j++)';
    ;
    $expr = '<%for (var j = 0; j < (page * 5); j++) {%>';
    for (var j = 0; j < (page * 5); j++) {
        ;
        $p += '<tr>';
        $line = 60;
        $art = 'for (let i=0;i<10;i++)';
        ;
        $expr = '<%for (var i = 0; i < 10; i++) {%>';
        for (var i = 0; i < 10; i++) {
            ;
            $p += '<td>滚动内容';
            $line = 61;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 62;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</tr><tr mxs="_zs_gallerydl:b" class="operation-tr"><td colspan="10"></td></tr>';
        $line = 67;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxs="_zs_gallerydl:c" class="table-pager-wrapper" mx-change="' + $viewId + 'changePager()" mx-view="mx-pagination/index?total=100&size=40&page=1"></div></div><div mxa="_zs_gallerydl:f" class="clearfix"><div mxa="_zs_gallerydl:g" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_gallerydl:d" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 80;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerydl:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 82;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerydl:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 85;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div id="&#123;&#123;=viewId&#125;&#125;_filters" class="filters"&gt;\n    &lt;div id="&#123;&#123;=viewId&#125;&#125;_filters_inner" class="filters-inner clearfix"&gt;\n        &lt;mx-dropdown class="fl mr10" \n            list="&#123;&#123;@[1,2,3]&#125;&#125;"\n            mx-change="changeFilter()"&gt;\n        &lt;/mx-dropdown&gt;\n        &lt;mx-dropdown class="fl" \n            list="&#123;&#123;@[4,5,6]&#125;&#125;"\n            mx-change="changeFilter()"&gt;\n        &lt;/mx-dropdown&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;mx-table id="&#123;&#123;=viewId&#125;&#125;_table" \n        sticky="true" sticky-interval="&#123;&#123;=interval&#125;&#125;"&gt;\n    &lt;table class="table" left="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;(page * 5);j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="4"&gt;\n                    &lt;a href="javascript:;" class="btn btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-small"&gt;操作&lt;/a&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;table class="table" center="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;(page * 5);j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="10"&gt;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n\n&lt;mx-pagination class="table-pager-wrapper"\n    total="100" \n    size="40" \n    page="1"\n    mx-change="changePager()"/&gt;\n</pre></div><div mxa="_zs_gallerydl:i" class="_zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxa="_zs_gallerydl:j" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydl:f" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 158;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_gallerydl:k" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 160;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_gallerydl:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 163;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nMagix.applyStyle(\'@index.less\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let that = this;\n        let total = 20,\n            page = 1;\n        that.updater.digest(&#123;\n            viewId: that.id,\n            page,\n            total,\n            interval: 50\n        &#125;);\n    &#125;,\n\n    \'changeFilter&lt;change&gt;\'(e) &#123;\n        this.change(&#123;\n            page: 1\n        &#125;)\n    &#125;,\n\n    \'changePager&lt;change&gt;\'(e) &#123;\n        let page = +e.page;\n        this.change(&#123;\n            page\n        &#125;)\n    &#125;,\n\n    change(params) &#123;\n        this.updater.digest(params);\n        \n        // 回到顶部筛选项顶部\n        let filters = $(\'#\' + this.id + \'_filters\');\n        $(window).scrollTop(filters.offset().top);\n    &#125;,\n\n    \'$win&lt;scroll&gt;\'(e) &#123;\n        let that = this;\n        let filtersInner = $(\'#\' + that.id + \'_filters_inner\');\n\n        // 筛选项的定位逻辑跟表格保持一致\n        let table = $(\'#\' + that.id + \'_table\');\n        let scrollTop = $(window).scrollTop();\n        let tableOffset = table.offset();\n        let interval = that.updater.get(\'interval\');\n        let tableHeaderHeight = table.find(\'thead\').outerHeight();\n        let min = tableOffset.top - interval;\n        let max = min + table.height() - tableHeaderHeight;\n        if (scrollTop &gt;= min && scrollTop &lt;= max) &#123;\n            filtersInner.addClass(\'@index.less:filters-fixed\');\n        &#125; else &#123;\n            filtersInner.removeClass(\'@index.less:filters-fixed\');\n        &#125;\n    &#125;\n&#125;);\n                </pre></div><div mxa="_zs_gallerydl:l" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydl:g" class="_zs_gallery___test___layout_-eg-title">CSS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 226;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerydl:m" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 228;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerydl:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 231;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n.filters&#123;\n    height: 50px;\n&#125;\n\n.filters-inner&#123;\n    height: 50px;\n    padding-top: 8px;\n    background-color: #fff;\n&#125;\n\n.filters-fixed&#123;\n    position: fixed;  //自定控制筛选项的位置\n    z-index: 100;\n    top: 0;\n    left: 280px;\n    right: 40px;\n&#125;</pre></div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/17.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var total = 20, page = 1;
        that.updater.digest({
            page: page,
            total: total,
            interval: 50
        });
    },
    'changeFilter<change>': function (e) {
        this.change({
            page: 1
        });
    },
    'changePager<change>': function (e) {
        var page = +e.page;
        this.change({
            page: page
        });
    },
    change: function (params) {
        this.updater.digest(params);
        var filters = $('#' + this.id + '_filters');
        $(window).scrollTop(filters.offset().top);
    },
    '$win<scroll>': function (e) {
        var that = this;
        var filtersInner = $('#' + that.id + '_filters_inner');
        var table = $('#' + that.id + '_table');
        var scrollTop = $(window).scrollTop();
        var tableOffset = table.offset();
        var interval = that.updater.get('interval');
        var tableHeaderHeight = table.find('thead').outerHeight();
        var min = tableOffset.top - interval;
        var max = min + table.height() - tableHeaderHeight;
        if (scrollTop >= min && scrollTop <= max) {
            filtersInner.addClass('_zs_gallery_mx-table___test___17_-filters-fixed');
        }
        else {
            filtersInner.removeClass('_zs_gallery_mx-table___test___17_-filters-fixed');
        }
    }
});

});