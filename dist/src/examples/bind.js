/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/bind",["magix","$","mx-title/second"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryb:_" mx-view="mx-title/second?content=%E9%9C%80%E6%B1%82%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryb:a" class="mb40 lh22">假设我们实现一个获取用户信息的组件，比如用户可以输入姓名，年龄并选择性别的功能。</div><div mxs="_zs_galleryb:b" mx-view="mx-title/second?content=%E7%A1%AE%E8%AE%A4%E8%BE%93%E5%85%A5%E4%B8%8E%E8%BE%93%E5%87%BA"></div><div mxs="_zs_galleryb:c" class="mb40 lh22"><div>我们的组件命名为<span class="color-brand">mx-profile</span>，并在相应目录下新建<span class="color-brand">index.ts</span>，<span class="color-brand">index.html</span>等文件；</div><div>组件接收<span class="color-brand">name</span>，<span class="color-brand">age</span>和<span class="color-brand">gender</span>三个参数并根据需要展示他们供用户修改；</div><div>当<span class="color-brand">name</span>，<span class="color-brand">age</span>和<span class="color-brand">gender</span>有变化时，组件派发change事件通知外部。</div></div><div mxs="_zs_galleryb:d" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F"></div><div mxs="_zs_galleryb:e" class="mb40 lh22"><div class="mb10">最终我们使用<span class="color-brand">mx-profile</span>的js代码可能如下：</div><pre class="tip-content mb10">\nimport Magix from \'magix\';\nexport default Magix.View.extend({\n    tmpl:\'@user-settings.html\',\n    render(){\n        this.updater.digest({\n            name:\'xl\',\n            age:32,\n            gender:\'male\'\n        });\n    }\n})</pre><div class="mb10">对应的html片断可能是：</div><pre class="tip-content mb10">\n&lt;mx-profile name="&#123;&#123;:name&#125;&#125;" age="&#123;&#123;:age&#125;&#125;" gender="&#123;&#123;:gender&#125;&#125;"/&gt;</pre></div><div mxs="_zs_galleryb:f" mx-view="mx-title/second?content=%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0"></div><div mxs="_zs_galleryb:g" class="mb40 lh22"><div><span class="color-brand">mx-profile</span>与<span class="color-brand">一般view</span>一样，接收参数，并按需要渲染即可，这一部分的代码实现不再具体示意。</div><div>对于双向绑定功能，我们已经实现了数据变化更新界面，接下来我们重点看界面上变化后，如何更新数据</div><div>用户姓名和年龄，我们可能用<span class="color-brand">2个input</span>来做为输入，性别可能使用下拉框，不管用什么样的标签，我们都可以在它们的类似change或input事件中得知界面的变化。</div><div class="mb10">比如我们监听<span class="color-brand">input</span>的<span class="color-brand">change</span>事件：</div><pre class="tip-content mb10">\nimport Magix from \'magix\';\nimport $ from \'$\';\nexport default Magix.View.extend({\n    tmpl:\'@mx-profile.html\',\n    \'name&lt;change&gt;\'(e){\n        e.stopPropagation();\n        $(\'#\'+this.id).trigger({\n            type:\'change\',\n            name:e.eventTarget.trim()\n        });\n    }\n})</pre><div>1. 当<span class="color-brand">input</span>的<span class="color-brand">change</span>事件发生后，我们停止事件冒泡，因为这个<span class="color-brand">input</span>只为<span class="color-brand">当前view</span>服务，不必通知到外部</div><div>2. 我们从<span class="color-brand">view根节点</span>上派发一个<span class="color-brand">change</span>事件来通知外部数据变化</div><div>3. 事件上数据的<span class="color-brand">key</span>要与输入一致，比如输入是<span class="color-brand">age</span>，那么如果年龄发生变化，则通知外部时，事件对象上要有<span class="color-brand">age</span>这个字段，这一点非常重要，是实现双向绑定时，多参数绑定的根本</div><div>4. 当前只实现了名称变化，年龄、性别变化同理，这样就完成了一个组件多个参数的双向绑定功能</div></div><div mxs="_zs_galleryb:h" mx-view="mx-title/second?content=%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AF%3Cspan%20class%3D%27color-brand%27%3Echange%3C%2Fspan%3E%E4%BA%8B%E4%BB%B6"></div><div mxs="_zs_galleryb:i" class="mb40 lh22">这取决于<span class="color-brand">zs_gallery/mx-form/index.js</span>中的实现，因为要实现原生节点与自定义组件的双向绑定，在原生节点中数据变化多为<span class="color-brand">change</span>，所以我们自定义组件也沿用<span class="color-brand">change</span>就好</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:examples/bind.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});