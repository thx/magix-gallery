/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-day/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-day</h2><h3>展示</h3><div class=\"_B _ai\"><div style=\"width:800px\" mx-change=\"\u001f\u001eshowDays()\" mx-view=\"mx-day/index?years=<%@$$.years%>&selectedYear=2002&selectedDays=<%@{'2012':'0011,,0011,1100'}%>\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-day\n    years=\"&lt;%@years%&gt;\"\n    selected-year=\"2002\"\n    selected-days=\"&lt;%@{'2012':'0011,,0011,1100'}%&gt;\"\n    style=\"width:800px\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        let years = [];\n        for (let i = 1996; i &lt; 2020; i++) {\n            years.push(i);\n        }\n        me.updater.digest({\n            years\n        });\n    }\n});</pre></div>"},
    render: function () {
        var me = this;
        var years = [];
        for (var i = 1996; i < 2020; i++) {
            years.push(i);
        }
        me.updater.digest({
            days: { '2012': '0011,,0011,1100' },
            years: years
        });
    },
    'showDays<change>': function (e) {
        console.log(e.days);
    }
});

});