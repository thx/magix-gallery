/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-day/__test__/index',["magix","../index"],(require,exports,module)=>{
/*Magix*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-day</h2><h3>展示</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" style=\"width:800px\" mx-change=\"\u001f\u001eshowDays()\" mx-view=\"mx-day/index?years=<%@$$.years%>&selectedYear=2002&selectedDays=<%@{'2012':'0011,,0011,1100'}%>\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-day\n    years=\"&lt;%@years%&gt;\"\n    selected-year=\"2002\"\n    selected-days=\"&lt;%@{'2012':'0011,,0011,1100'}%&gt;\"\n    style=\"width:800px\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        let years = [];\n        for (let i = 1996; i &lt; 2020; i++) {\n            years.push(i);\n        }\n        me.updater.digest({\n            years\n        });\n    }\n});</pre></div>","subs":[{"keys":["years"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-day/index?years=<%@$$.years%>&selectedYear=2002&selectedDays=<%@{'2012':'0011,,0011,1100'}%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-day/__test__/index.html"},
    render() {
        let me = this;
        let years = [];
        for (let i = 1996; i < 2020; i++) {
            years.push(i);
        }
        me.updater.digest({
            days: { '2012': '0011,,0011,1100' },
            years
        });
    },
    'showDays<change>'(e) {
        console.log(e.days);
    }
});

});