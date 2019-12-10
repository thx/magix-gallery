/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/examples/steps",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerydx:_" class="mb40"><div class="mb10" id="';
    $line = 2;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_step1">1. step-infos数组所有可配参数说明</div><div mxs="_zs_gallerydx:_" class="pl15 mb20"><pre class="tip-content">\n[{\n    label: \'必填，一级标题文案\',\n    sideView: \'可选，侧边提示，自定义view，优先级 sideView > sideTitle + sideTip\',\n    sideTitle: \'可选，侧边提示，使用默认样式的提示标题\',\n    sideTip: \'可选，侧边提示，使用默认样式的提示内容\',\n    subs: [{\n        label: \'必填，二级标题文案，当只有一个二级标题时，不显示二级标题\',\n        icon: \'可选，二级标题icon\',\n        view: \'必填，二级标题对应的view，该view必须实现check方法\'\n    }, {\n        label: \'必填，二级标题文案\',\n        icon: \'可选，二级标题icon\',\n        view: \'必填，二级标题对应的view，该view必须实现check方法\'\n    }],\n    btns: [&#123; // 自定义底部按钮，优先级 btns > prevTip + nextTip + nextFn\n        type: \'\', // 可选prev（预置返回上一步按钮），next（预置下一步按钮）\n        text: \'\', // 按钮显示文案，type=prev时默认为返回上一步，type=next时默认为下一步\n        check: true, // 点击该按钮是否需要调用子view的check方法，如需，则callback中remains为子view数据并集\n        brand: true, // 是否为品牌色按钮，默认false\n        callback: (remains) =&gt; &#123;\n            // remains：当前步骤保留的信息，提交处理\n            return new Promise(resolve =&gt; &#123;\n                // type = next时，resolve为返回值为保留到地址栏的参数，同nextFn\n                resolve();\n            &#125;)\n        &#125;\n    &#125;], \n    prevTip: \'可选，自定义返回上一步文案，默认返回上一步；第一步无返回上一步按钮；若当前步骤前一步骤锁定了，也无返回上一步按钮；\'\n    nextTip: \'可选，自定义下一步文案，默认返回下一步；最后一个无下一步按钮；\',\n    nextFn: (remains) => {\n        // remains：当前步骤保留的信息，提交处理\n        return new Promise(resolve =&gt; &#123;\n            // 返回值为保留到地址栏的参数\n            resolve(&#123;\n                adgroupId: 1\n            &#125;)\n        &#125;)\n    },\n    locked: true // 显示配置当前步骤不可操作\n}]\n        </pre></div><div class="mb10" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_step2">2. 子view必须实现的check方法说明，返回一个Promise</div><div mxs="_zs_gallerydx:a" class="pl15"><pre class="tip-content">\ncheck() {\n    let ok = true,\n        remain = {};\n\n    return new Promise((resolve) => {\n        // 此处返回promise，防止有接口提交校验等\n        resolve({\n            ok,  // 是否校验通过，false的时候不提交\n            msg: \'错误信息提示\',\n            remain: {} // 当前步骤保留的参数，所有子view交集\n        })\n    })\n}\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/examples/steps.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});