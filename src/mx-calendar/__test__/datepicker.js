/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/__test__/datepicker',["magix","mx-gtip/index","../datepicker"],function(require,exports,module){
/*Magix,GTip*/
require("../datepicker");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar</h2><h3>默认情形</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker\" class=\"an\" placeholder=\"请选择日期\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallerymx-calendar/datepicker\" class=\"input\" placeholder=\"请选择日期\"/&gt;</pre></div><h3 class=\"f\">默认选中某天</h3><div class=\"B ag\"><input class=\"an\" placeholder=\"请选择日期\" mx-view=\"mx-calendar/datepicker?selected=2018-01-01\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" class=\"input\" placeholder=\"请选择日期\"\n    path=\"app/gallery/mx-calendar/datepicker\"\n    selected=\"2018-01-01\"&gt;</pre></div><h3 class=\"f\">从input中读取日期</h3><div class=\"B ag\"><input class=\"an\" placeholder=\"请选择日期\" value=\"2018-03-02\" mx-view=\"mx-calendar/datepicker\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" class=\"input\" placeholder=\"请选择日期\"\n    value=\"2018-03-02\"\n    path=\"app/gallery/mx-calendar/datepicker\"&gt;</pre></div><h3 class=\"f\">设置可选择的范围</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?min=2017-08-05&max=2017-08-22\" value=\"2017-08-12\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    min=\"2017-08-05\"\n    max=\"2017-08-22\"\n    value=\"2017-08-12\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">设置周二为一周的开始</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?weekStart=<%@2%>\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    week-start=\"&lt;%@ 2 %&gt;\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">右下对齐</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?align=right\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    align=\"right\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">右上对齐</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?align=right&placement=top\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    align=\"right\"\n    placement=\"top\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">带时分秒</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?timeType=all\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    time-type=\"all\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">带时分秒的选中</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?timeType=all\" value=\"2018-08-08 18:08:20\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    time-type=\"all\"\n    value=\"2018-08-08 18:08:20\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">带时分秒,只能选择小时</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?timeType=hour\" value=\"2018-08-08 18:08:20\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    time-type=\"hour\"\n    value=\"2018-08-08 18:08:20\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"f\">change事件</h3><div class=\"B ag\"><input mx-view=\"mx-calendar/datepicker?timeType=all&selected=2018-08-08%2018%3A08%3A20\" mx-change=\"\u001f\u001eshowDatetime()\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"app/gallery/mx-calendar/datepicker\"\n    time-type=\"all\"\n    selected=\"2018-08-08 18:08:20\"\n    mx-change=\"showDatetime()\"\n    class=\"input\"/&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        this.gtipRT('日期：' + e.date + '，时间：' + e.time);\n    }\n});</pre></div><h3 class=\"f\">只选择年月</h3><div class=\"B ag\"><input class=\"an\" mx-view=\"mx-calendar/datepicker?dateType=year%2Cmonth&selected=2010-02\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker class=\"input\" date-type=\"year,month\" selected=\"2010-02\" /&gt;</pre></div>","subs":[]},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showDatetime<change>': function (e) {
        this.gtipRT('日期：' + e.date + '，时间：' + e.time);
    }
});

});