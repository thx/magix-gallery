/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/index",["magix","./branch"],(require,exports,module)=>{
/*Magix*/
require("./branch");
/*
ver:2.0.1
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
Magix.applyStyle("_Q","._fG{padding-left:15px}._fH{line-height:22px;padding:0 4px;position:relative;border-left:1px solid #e6e6e6}._fH:before{content:\"\";position:absolute;border-top:1px solid #e6e6e6;width:12px;left:0;top:10px}._fI{width:14px;height:14px;float:left;text-align:center;font-weight:800;margin-left:-11px;margin-top:-2px;position:relative;z-index:2}._fJ{display:inline-block;background-color:#fff;width:10px;height:10px;line-height:6px;border:1px solid #e6e6e6;font-size:11px}._fK{margin-left:10px}._fL{padding:0}._fM{border-left-color:transparent}._fM:after{border-left:1px solid #e6e6e6;top:-2px}._fM:after,._fN:after{content:\"\";position:absolute;left:-1px;width:1px;height:13px}._fN:after{border-left:1px solid #fff;top:-3px}._fO{padding:1px 3px;line-height:1}._fP{margin:2px 2px 0 0}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div id=\"tree_<%=$$.id%>\" mx-view=\"mx-tree/branch?valueKey=<%!$eu($$.valueKey)%>&textKey=<%!$eu($$.textKey)%>&parentKey=<%!$eu($$.parentKey)%>&fromTop=<%@true%>&list=<%@$$.list%>\"></div>"},
    init: function (extra) {
        this['__c'] = extra;
    },
    render: function () {
        var me = this;
        var ops = me['__c'];
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