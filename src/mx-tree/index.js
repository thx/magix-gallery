/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-tree/index',["magix","./branch"],function(require,exports,module){
/*Magix*/
require("./branch");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
var ListToTree = function (list, id, pId) {
    id = id || 'id';
    pId = pId || 'pId';
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
Magix.applyStyle("J",".fv{padding-left:15px}.fw{line-height:22px;padding:0 4px;position:relative;border-left:1px solid #e6e6e6}.fw:before{content:\"\";position:absolute;border-top:1px solid #e6e6e6;width:12px;left:0;top:10px}.fx{width:14px;height:14px;float:left;text-align:center;font-weight:800;margin-left:-11px;margin-top:-2px;position:relative;z-index:2}.fy{display:inline-block;background-color:#fff;width:10px;height:10px;line-height:6px;border:1px solid #e6e6e6;font-size:11px}.fz{margin-left:10px}.fA{padding:0}.fB{border-left-color:transparent}.fB:after{border-left:1px solid #e6e6e6;top:-2px}.fB:after,.fC:after{content:\"\";position:absolute;left:-1px;width:1px;height:13px}.fC:after{border-left:1px solid #fff;top:-3px}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" id=\"tree_<%=$$.id%>\" mx-view=\"mx-tree/branch?valueKey=<%!$eu($$.valueKey)%>&textKey=<%!$eu($$.textKey)%>&parentKey=<%!$eu($$.parentKey)%>&fromTop=<%@true%>&list=<%@$$.list%>\"></div>","subs":[{"keys":["id","valueKey","textKey","parentKey","list"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"id=\"tree_<%=$$.id%>\" mx-view=\"mx-tree/branch?valueKey=<%!$eu($$.valueKey)%>&textKey=<%!$eu($$.textKey)%>&parentKey=<%!$eu($$.parentKey)%>&fromTop=<%@true%>&list=<%@$$.list%>\"","attrs":[{"n":"id","p":1},{"n":"mx-view","v":1}]}]},
    init: function (extra) {
        this.$extra = extra;
    },
    render: function () {
        var me = this;
        var ops = me.$extra;
        var info = ListToTree(ops.list, ops.valueKey, ops.parentKey);
        me.updater.digest({
            id: me.id,
            valueKey: ops.valueKey || 'id',
            parentKey: ops.parentKey || 'pId',
            textKey: ops.textKey || 'text',
            list: info.list
        });
    }
});

});