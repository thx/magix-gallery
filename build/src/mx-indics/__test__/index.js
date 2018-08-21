/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/__test__/index",["magix","$","../report/setting","./desc"],(require,exports,module)=>{
/*Magix,$*/
require("../report/setting");
require("./desc");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, selected = $$.selected, selected2 = $$.selected2, selected3 = $$.selected3, options = $$.options; var $expr, $art, $line; try {
    $p += 'Todo<div mxs="_zs_gallerya~:_" class="page-header clearfix"><span class="first-header">报表指标选择与排序</span></div><div mxs="_zs_gallerya~:a" class="tip-content has-icon has-border mb20"><i class="iconfont tip-icon">&#xe6ad;</i><div>保存用户自定义配置 ，切换默认排序</div><div>涉及各bp保存配置的接口和报表指标配置，暂不提取为组件，作为通用模块提取出来；</div></div><div mxs="_zs_gallerya~:b" class="page-header clearfix"><div class="second-header">1. 限制指标选择上限10 + 指标可排序</div></div><div mxv mxa="_zs_gallerya~:_" class="clearfix mb20"><div mxv="selected" class="fl" mx-view="mx-indics/report/setting?pageKey=crabIndex&selected=';
    $line = 24;
    $art = '@selected';
    ;
    $p += '' + ($expr = '<%@selected%>', $i(selected)) + '&limit=10&sortable=true" mx-change="' + $viewId + 'changeFields()"></div><div mxa="_zs_gallerya~:a" class="fl ml20 lh32">当前选中的指标：';
    $line = 25;
    $art = '=selected';
    ;
    $p += '' + ($expr = '<%=selected%>', $e(selected)) + '</div></div><div mxs="_zs_gallerya~:c" class="mb10 fontsize-14">Code:</div><div mxs="_zs_gallerya~:d" class="tip-content mb40"><div class="mb20"><pre>&lt;div mx-view="@../report/setting?pageKey=crabIndex&selected=&#123;&#123;@selected&#125;&#125;&limit=10&sortable=true" mx-change="changeFields()"&gt;&lt;/div&gt;</pre></div><div><pre>\'changeFields&lt;change&gt;\' (event) {\n    let selected = event.selected;\n    // selected 选择指标数组\n    this.updater.set({\n        selected: selected\n    }).digest();\n}</pre></div></div><div mxs="_zs_gallerya~:e" class="page-header clearfix"><div class="second-header">2. 不限制指标选择个数 + 指标排序</div></div><div mxv mxa="_zs_gallerya~:b" class="clearfix mb20"><div mxv="selected2" class="fl" mx-view="mx-indics/report/setting?selected=';
    $line = 47;
    $art = '@selected2';
    ;
    $p += '' + ($expr = '<%@selected2%>', $i(selected2)) + '&sortable=true" mx-change="' + $viewId + 'changeFields2()"></div><div mxa="_zs_gallerya~:c" class="fl ml20 lh32">当前选中的指标：';
    $line = 48;
    $art = '=selected2';
    ;
    $p += '' + ($expr = '<%=selected2%>', $e(selected2)) + '</div></div><div mxs="_zs_gallerya~:c" class="mb10 fontsize-14">Code:</div><div mxs="_zs_gallerya~:f" class="tip-content mb40"><pre>&lt;div mx-view="@../report/setting?selected=&#123;&#123;@selected2&#125;&#125;&sortable=true"&gt;&lt;/div&gt;</pre></div><div mxs="_zs_gallerya~:g" class="page-header clearfix"><div class="second-header">3. 不限制指标选择个数 + 无指标排序</div></div><div mxv mxa="_zs_gallerya~:d" class="mb20"><div mxv="selected3" mx-view="mx-indics/report/setting?selected=';
    $line = 59;
    $art = '@selected3';
    ;
    $p += '' + ($expr = '<%@selected3%>', $i(selected3)) + '"></div></div><div mxs="_zs_gallerya~:c" class="mb10 fontsize-14">Code:</div><div mxs="_zs_gallerya~:h" class="tip-content mb40"><pre>&lt;div mx-view="@../report/setting?selected=&#123;&#123;@selected3&#125;&#125;"&gt;&lt;/div&gt;</pre></div><div mxv="options" mx-view="mx-indics/__test__/desc?options=';
    $line = 66;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-indics/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'mode',
                desc: '页脚类型，简单版（simple）还是复杂版本',
                type: 'string',
                def: ''
            }];
        this.updater.digest({
            options: options
        });
    }
});
// let Magix = require('magix');
// let View = require('zs_scaffold/view')
// module.exports = View.extend({
//     tmpl: '@sort.html',
//     init() {
//         let that = this;
//     },
//     render() {
//         let that = this;
//         let options = [{
//             key: 'limit',
//             desc: '指标选中上限，不传不限制选择个数',
//             type: 'number',
//             def: ''
//         }, {
//             key: 'sortable',
//             desc: '是否需要排序',
//             type: 'boolean',
//             def: 'false'
//         }, {
//             key: 'selected',
//             desc: '当前选中的指标key值的数组，["cost", "impression", "click"]',
//             type: 'array'
//         }, {
//             key: 'pageKey',
//             desc: '保存用户到memberConfig设置对应的key值，无需保存可不传',
//             type: 'string',
//             def: ''
//         }]
//         that.updater.digest({
//             options,
//             selected: ['cost', 'impression', 'click'],
//             selected2: ['cost', 'impression', 'click'],
//             selected3: ['cost', 'impression', 'click']
//         });
//     },
//     'changeFields<change>'(event) {
//         let selected = event.selected;
//         // selected 选择指标数组
//         this.updater.set({
//             selected: selected
//         }).digest();
//     },
//     'changeFields2<change>'(event) {
//         let selected = event.selected;
//         this.updater.set({
//             selected2: selected
//         }).digest();
//     }
// });

});