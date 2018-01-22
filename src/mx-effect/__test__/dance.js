/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/__test__/dance",["magix","../../mx-form/index","../dance","mx-dropdown/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Form*/
require("../dance");
require("mx-dropdown/index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Form = require("../../mx-form/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-effect dance</h2><div class=\"_B _ai\"><div mx-view=\"mx-effect/dance?value=<%!$eu($$.content)%>&duration=<%!$eu($$.duration)%>&dance=<%!$eu($$.dance)%>\"></div><div mx-ssid=\"\u001f0\" style=\"width:180px\" mx-change=\"\u001f\u001e__b({c:[{p:'duration',f:{refresh:true}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" mx-view=\"mx-dropdown/index?emptyText=%E5%8D%95%E5%AD%97%E6%95%88%E6%9E%9C%E9%97%B4%E9%9A%94%E6%97%B6%E9%97%B4&selected=<%@$$.duration%>\"><i value=\"10\" class=\"_ah\">10ms</i><i value=\"30\" class=\"_ah\">30ms</i><i value=\"60\" class=\"_ah\">60ms</i><i value=\"90\" class=\"_ah\">90ms</i><i value=\"120\" class=\"_ah\">120ms</i></div><div mx-ssid=\"\u001f1\" style=\"width:180px\" class=\"_t\" mx-change=\"\u001f\u001e__b({c:[{p:'dance',f:{refresh:true}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" mx-view=\"mx-dropdown/index?emptyText=%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C&selected=<%@$$.dance%>\"><i value=\"d1\" class=\"_ah\">效果一</i><i value=\"d2\" class=\"_ah\">效果二</i><i value=\"d3\" class=\"_ah\">效果三</i><i value=\"d4\" class=\"_ah\">效果四</i><i value=\"d5\" class=\"_ah\">效果五</i><i value=\"d6\" class=\"_ah\">效果六</i><i value=\"d7\" class=\"_ah\">效果七</i><i value=\"d8\" class=\"_ah\">效果八</i><i value=\"d9\" class=\"_ah\">效果九</i><i value=\"d10\" class=\"_ah\">效果十</i><i value=\"d11\" class=\"_ah\">效果十一</i></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">\n&lt;mx-effect.dance value=\"&lt;%=content%&gt;\" duration=\"&lt;%=duration%&gt;\" dance=\"&lt;%=dance%&gt;\"  /&gt;\n&lt;mx-dropdown empty-text=\"单字效果间隔时间\" style=\"width:180px\" selected=\"&lt;%:duration({refresh:true})%&gt;\"&gt;\n    &lt;mx-dropdown.item value=\"10\"&gt;10ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"30\"&gt;30ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"60\"&gt;60ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"90\"&gt;90ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"120\"&gt;120ms&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;\n&lt;mx-dropdown empty-text=\"动画效果\" style=\"width:180px\" class=\"ml10\" selected=\"&lt;%:dance({refresh:true})%&gt;\"&gt;\n    &lt;mx-dropdown.item value=\"d1\"&gt;效果一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d2\"&gt;效果二&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d3\"&gt;效果三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d4\"&gt;效果四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d5\"&gt;效果五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d6\"&gt;效果六&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d7\"&gt;效果七&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d8\"&gt;效果八&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d9\"&gt;效果九&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d10\"&gt;效果十&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d11\"&gt;效果十一&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;\n    </pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">\nlet Magix = require('magix');\nlet Form = require('app/gallery/mx-form/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form],\n    render() {\n        let me = this;\n        me.updater.digest({\n            content: '你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。',\n            dance: 'd1',\n            duration: '60'\n        });\n    }\n});\n    \n    </pre></div>"},
    mixins: [Form],
    render: function () {
        var me = this;
        me.updater.digest({
            toNumber: 20,
            content: '你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。',
            dance: 'd1',
            duration: '60'
        });
    },
    'changeNumber<click>': function (e) {
        var me = this;
        var to = me.updater.get('toNumber');
        var diff = 300;
        if (!e.params.i) {
            diff = -diff;
        }
        me.updater.digest({
            toNumber: to + diff
        });
    }
});

});