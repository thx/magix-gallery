/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/index",["magix","./branch"],(require,exports,module)=>{
/*Magix*/
require("./branch");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
var ListToTree = function (list, id, pId) {
    var map = {}, listMap = {}, rootList = [];
    for (var i = 0, max = list.length; i < max; i++) {
        var one = Magix.mix({}, list[i]);
        map[one[id]] = one;
        if (listMap[one[id]]) {
            one.children = listMap[one[id]];
        }
        if (Magix.has(one, pId) && one[pId] !== '') {
            if (map[one[pId]]) {
                var c = map[one[pId]].children || (map[one[pId]].children = []);
                c.push(one);
            }
            else {
                if (!listMap[one[pId]])
                    listMap[one[pId]] = [one];
                else
                    listMap[one[pId]].push(one);
            }
        }
        else {
            rootList.push(one);
        }
    }
    return { list: rootList, map: map };
};
Magix.applyStyle("__mx-tree_index_","/* @dependent: ./index.less */\n.__mx-tree_index_-indent {\n  padding-left: 15px;\n}\n.__mx-tree_index_-li {\n  line-height: 22px;\n  padding: 0 4px;\n  position: relative;\n  border-left: solid 1px #e6e6e6;\n}\n.__mx-tree_index_-li:before {\n  content: '';\n  position: absolute;\n  border-top: solid 1px #e6e6e6;\n  width: 12px;\n  left: 0;\n  top: 10px;\n}\n.__mx-tree_index_-icon {\n  width: 14px;\n  height: 14px;\n  float: left;\n  text-align: center;\n  font-weight: 800;\n  margin-left: -11px;\n  margin-top: -2px;\n  position: relative;\n  z-index: 2;\n}\n.__mx-tree_index_-ricon {\n  display: inline-block;\n  background-color: #fff;\n  width: 10px;\n  height: 10px;\n  line-height: 6px;\n  border: solid 1px #e6e6e6;\n  font-size: 11px;\n}\n.__mx-tree_index_-name {\n  margin-left: 10px;\n}\n.__mx-tree_index_-p0 {\n  padding: 0;\n}\n.__mx-tree_index_-li-last {\n  border-left-color: transparent;\n}\n.__mx-tree_index_-li-last:after {\n  content: '';\n  border-left: solid 1px #e6e6e6;\n  position: absolute;\n  left: -1px;\n  top: -2px;\n  width: 1px;\n  height: 13px;\n}\n.__mx-tree_index_-top-li-first:after {\n  position: absolute;\n  content: '';\n  height: 13px;\n  width: 1px;\n  border-left: solid 1px #fff;\n  top: -3px;\n  left: -1px;\n}\n.__mx-tree_index_-b-text {\n  padding: 1px 3px;\n  line-height: 1;\n}\n.__mx-tree_index_-b-cb {\n  margin: 2px 2px 0 0;\n}\n");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', id = $$.id, valueKey = $$.valueKey, textKey = $$.textKey, parentKey = $$.parentKey, list = $$.list; var $expr, $art, $line; try {
    $p += '<div mxv="list" id="tree_' + ($expr = '<%=id%>', $e(id)) + '" mx-view="mx-tree/branch?valueKey=' + ($expr = '<%!$eu(valueKey)%>', $eu(valueKey)) + '&textKey=' + ($expr = '<%!$eu(textKey)%>', $eu(textKey)) + '&parentKey=' + ($expr = '<%!$eu(parentKey)%>', $eu(parentKey)) + '&fromTop=' + ($expr = '<%@true%>', $i($$ref, true)) + '&list=' + ($expr = '<%@list%>', $i($$ref, list)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tree/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this['@{extra}'] = extra;
    },
    render: function () {
        var me = this;
        var ops = me['@{extra}'];
        var valueKey = ops.valueKey || 'id';
        var parentKey = ops.parentKey || 'pId';
        var info = ListToTree(ops.list, valueKey, parentKey);
        me.updater.digest({
            id: me.id,
            valueKey: valueKey,
            parentKey: parentKey,
            textKey: ops.textKey || 'text',
            list: info.list
        });
    }
});

});