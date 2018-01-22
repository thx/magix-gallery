/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-footer/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-footer</h2><div class=\"_B _ai\"><div mx-view=\"mx-footer/index?mode=<%!$eu($$.mode)%>\"></div></div><div class=\"_B\"><div>HTML Code:</div><%if($$.mode=='simple'){%><pre mx-view=\"__test__/hl\">\n&lt;mx-footer mode=\"simple\" /&gt;</pre><%}else{%><pre mx-view=\"__test__/hl\">\n&lt;mx-footer /&gt;</pre><%}%></div>"},
    render: function () {
        var me = this;
        me.updater.digest({
            mode: Magix.Router.parse().get('mode')
        });
    }
});

});