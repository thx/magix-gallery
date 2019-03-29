/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-util/attr",[],(require,exports,module)=>{
/**/

module.exports = {
    process: function (attrs, style, ignores, className) {
        var attrStr = '', classAdded = false, styleAdded = false;
        for (var p in attrs) {
            if (ignores[p] !== 1) {
                var v = attrs[p];
                if ((p == 'class') && className) {
                    attrStr += " class=\"" + className + " " + v + "\"";
                    classAdded = true;
                }
                else if ((p == 'style') && style) {
                    attrStr += " style=\"" + style + v + "\"";
                    styleAdded = true;
                }
                else {
                    if (v === true)
                        v = '';
                    else
                        v = '="' + v + '"';
                    attrStr += ' ' + p + v;
                }
            }
        }
        if (!classAdded && className) {
            attrStr += ' class="' + className + '"';
        }
        if (!styleAdded && style) {
            attrStr += " style=\"" + style + "\"";
        }
        return attrStr;
    }
};

});