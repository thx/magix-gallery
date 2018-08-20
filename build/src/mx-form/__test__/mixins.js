/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/mixins",["magix","__test__/subs","mx-title/second","./1","./2","./10","./11","./12","./13","./9","./14","./3","./4","./5","./6","./7","./16","./8","./15"],(require,exports,module)=>{
/*Magix*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./2");
require("./10");
require("./11");
require("./12");
require("./13");
require("./9");
require("./14");
require("./3");
require("./4");
require("./5");
require("./6");
require("./7");
require("./16");
require("./8");
require("./15");
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mx-view="__test__/subs?list=';
    $line = 1;
    $art = '@[{\n    name: \'查看完整示例\',\n    key: viewId + \'_demo\'\n}, {\n    name: \'查看校验项详细示例\',\n    key: viewId + \'_rules\'\n}, {\n    name: \'查看校验项API\',\n    key: viewId + \'_api\'\n}, {\n    name: \'查看方法定义\',\n    key: viewId + \'_method\'\n}]';
    ;
    $p += '' + ($expr = '<%@[{name:\'查看完整示例\',key:viewId+\'_demo\'},{name:\'查看校验项详细示例\',key:viewId+\'_rules\'},{name:\'查看校验项API\',key:viewId+\'_api\'},{name:\'查看方法定义\',key:viewId+\'_method\'}]%>', $i([{ name: '查看完整示例', key: viewId + '_demo' }, { name: '查看校验项详细示例', key: viewId + '_rules' }, { name: '查看校验项API', key: viewId + '_api' }, { name: '查看方法定义', key: viewId + '_method' }])) + '"></div><div id="';
    $line = 16;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%20%2B%20%E6%A0%A1%E9%AA%8C%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerya%:d" class="clearfix mb20"><div mx-view="mx-form/__test__/1"></div></div><div id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_rules" mx-view="mx-title/second?content=%E6%A3%80%E9%AA%8C%E9%A1%B9%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerya%:a" class="clearfix mb20"><div mx-view="mx-form/__test__/2"></div><div mx-view="mx-form/__test__/10"></div><div mx-view="mx-form/__test__/11"></div><div mx-view="mx-form/__test__/12"></div><div mx-view="mx-form/__test__/13"></div><div mx-view="mx-form/__test__/9"></div><div mx-view="mx-form/__test__/14"></div><div mx-view="mx-form/__test__/3"></div><div mx-view="mx-form/__test__/4"></div><div mx-view="mx-form/__test__/5"></div><div mx-view="mx-form/__test__/6"></div><div mx-view="mx-form/__test__/7"></div><div mx-view="mx-form/__test__/16"></div><div mx-view="mx-form/__test__/8"></div><div mx-view="mx-form/__test__/15"></div></div><div id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxs="_zs_gallerya%:b" class="pr20 mb40"><table class="table _zs_gallery___test___base_-desc-table"><thead><tr><th width="100">可配参数</th><th width="200">说明</th><th width="100">类型</th><th width="120">默认值</th></tr></thead><tbody><tr><td>refresh</td><td>数据变化是否需要更新view，调用view.digest</td><td>boolean</td><td>false</td></tr><tr><td>placement</td><td>错误信息展示位置，可配置left，bottom</td><td>string</td><td>bottom</td></tr><tr><td>currency</td><td>金额<br/>currency: true<br/>currency: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>url</td><td>合法链接<br/>url: true<br/>url: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>english</td><td>英文<br/>english: true<br/>english: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>chinese</td><td>中文<br/>chinese: true<br/>chinese: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>mobile</td><td>手机号码<br/>mobile: true<br/>mobile: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>number</td><td>是否为数字<br/>number: true</td><td></td><td></td></tr><tr><td>pattern</td><td>正则<br/>pattern: ^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$<br/>pattern: [\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\', \'自定义错误提示\']</td><td></td><td></td></tr><tr><td>required</td><td>必填<br/>required: true<br/>required: [true, \'必选\']</td><td></td><td></td></tr><tr><td>trim</td><td>不能有空格<br/>trim: true<br/>trim: [true, \'不能包含空格\']</td><td></td><td></td></tr><tr><td>int</td><td>整数<br/>int: true</td><td></td><td></td></tr><tr><td>posint</td><td>正整数<br/>posint: true<br/>posint: [true, \'自定义提示\']</td><td></td><td></td></tr><tr><td>negint</td><td>负整数<br/>negint: true<br/>negint: [true, \'自定义提示\']</td><td></td><td></td></tr><tr><td>length</td><td>字个数范围<br/>length: [2, 8]</td><td></td><td></td></tr><tr><td>minlength</td><td>最少多少个字<br/>minlength: 2</td><td></td><td></td></tr><tr><td>maxlength</td><td>最多多少个字<br/>maxlength: 8</td><td></td><td></td></tr><tr><td>blength</td><td>字符个数范围，一个汉字两个字符<br/>blength: [2, 8]</td><td></td><td></td></tr><tr><td>bminlength</td><td>最少多少个字符，一个汉字两个字符<br/>bminlength: 2<br/>bminlength: [2, 自定义提示文案]</td><td></td><td></td></tr><tr><td>bmaxlength</td><td>最多多少个字符，一个汉字两个字符<br/>bmaxlength: 8<br/>bmaxlength: [8, 自定义提示文案]</td><td></td><td></td></tr><tr><td>unequalto</td><td><div>与某些节点内容不一致</div><div>unequalto: \'id1,id2\'</div><div>unequalto: [\'id1,id2\', 自定义提示]</div></td><td></td><td></td></tr><tr><td>equalto</td><td>与某个节点内容一致<br/>equalto: id<br/>equalto: [id, 自定义提示]</td><td></td><td></td></tr><tr><td>range</td><td>数字范围<br/>range: [2, 8]</td><td></td><td></td></tr><tr><td>min</td><td>不能小于某个数字<br/>min: 2<br/>min: [2, 自定义提示文案]</td><td></td><td></td></tr><tr><td>max</td><td>不能大于某个数字<br/>max: 8<br/>max: [8, 自定义提示文案]</td><td></td><td></td></tr><tr><td>warn</td><td><div>警告类信息，对象</div><div>必然是在valid=true的前提下才会有</div><div><pre>warn: {\n    min: [2, 自定义提示文案]\n}</pre></div></td><td></td><td></td></tr></tbody></table></div><div id="';
    $line = 223;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerya%:c" class="pr20"><table class="table _zs_gallery___test___base_-desc-table"><thead><tr><th width="100">方法名</th><th width="200">说明</th></tr></thead><tbody><tr><td>isValid(configs: object)</td><td><pre>this.isValid(&#123;\n    // 单独校验某个节点，可以传入dom节点，或者#id，.class，直接传入字符串默认为id\n    // 1. 默认null，整个view校验\n    // 2. 传入element的时候\n    //    2.1 如果element本身有校验，则只校验该节点\n    //    2.2 如果element本身无校验，则找该节点下所有的校验项去校验\n    element: null,\n\n    // 校验有错误的情况下是否要滚动到错误节点，默认true\n    scrollIntoView: true, \n\n    //是否调用子view校验，children.isValid，默认true\n    checkSubs: true \n&#125;)\n</pre></td></tr></tbody></table></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/mixins.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});