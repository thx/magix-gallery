/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-util/css-var",[],(require,exports,module)=>{
/**/

module.exports = {
    get: function (key, def) {
        var root = window.getComputedStyle(document.documentElement);
        var v = document.body.style.getPropertyValue(key) || root.getPropertyValue(key);
        if (!v) {
            return def || '';
        }
        else {
            return v.trim();
        }
    }
};

});