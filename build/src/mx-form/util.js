/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/util",["$"],(require,exports,module)=>{
/*$*/

var $ = require("$");
module.exports = {
    addCheckbox: function (name, src, actions) {
        $('input[name="' + name + '"]:checked').each(function (idx, item) {
            var value = item.value;
            if (actions.number) {
                value = parseFloat(value);
            }
            idx = src.indexOf(value);
            if (idx === -1) {
                src.push(value);
            }
        });
    },
    indexOf: function (src, value) {
        // 兼容字符串和数字
        var s_str = src.map(function (v) {
            return v + '';
        });
        var s_value = value + '';
        return $.inArray(s_value, s_str);
    },
    fix: function (actions, value) {
        // if (actions.number) {
        //     value = parseFloat(value);
        // }
        // return value;
    }
};

});