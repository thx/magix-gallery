/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/util",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
module.exports = {
    listToTree: function (list, id, pId, close) {
        var map = {}, listMap = {}, rootList = [];
        for (var i = 0, max = list.length; i < max; i++) {
            var one = Magix.mix({}, list[i]);
            one.close = close;
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
        return {
            list: rootList,
            map: map
        };
    }
};

});