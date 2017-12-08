/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-uploader/__test__/index',["magix","../index","mx-progress/index"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("mx-progress/index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-uploader</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-fl\" mx-view=\"mx-uploader/index?action=.%2Findex.html&name=file1&multiple=true\" mx-start=\"\u001f\u001eshowStart()\" mx-error=\"\u001f\u001eshowError()\" mx-success=\"\u001f\u001eshowSuccess()\" mx-progress=\"\u001f\u001eshowProgress()\">上传文件</div><div mx-guid=\"g0\u001f\" class=\"__mx-style_index_-fl __mx-style_index_-ml20\" mx-view=\"mx-progress/index?value=<%!$eu($$.percent)%>&fixed=2\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-uploader\n    class=\"btn btn-brand fl\"\n    action=\"./index.html\"\n    name=\"file1\"\n    multiple=\"true\"\n    mx-error=\"showError()\"\n    mx-success=\"showSuccess()\"\n    mx-progress=\"showProgress()\"\n&gt;上传文件&lt;/mx-uploader&gt;\n&lt;mx-progress value=\"&lt;%=percent%&gt;\" fixed=\"2\" class=\"fl ml20\" /&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            showProgress: false,\n            percent: 0\n        });\n    },\n    'showError&lt;error&gt;'(e) {\n        console.log(e.error);\n    },\n    'showSuccess&lt;success&gt;'(e) {\n        console.log(e.response);\n    },\n    'showProgress&lt;progress&gt;'(e) {\n        this.updater.digest({\n            percent:e.percent\n        });\n    }\n});</pre></div>","subs":[{"keys":["percent"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-progress/index?value=<%!$eu($$.percent)%>&fixed=2\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-uploader/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest({
            showProgress: false,
            percent: 0
        });
    },
    'showError<error>'(e) {
        console.log(e.error);
    },
    'showSuccess<success>'(e) {
        console.log(e.response);
    },
    'showProgress<progress>'(e) {
        this.updater.digest({
            percent: e.percent
        });
    },
    'showStart<start>'(e) {
        console.log(e);
    }
});

});