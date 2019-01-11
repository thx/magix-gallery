define("mx-main/__test__/inner2",["magix","$"],(i,e,n)=>{var l=i("magix"),t=i("$");l.applyStyle("_zs_galleryaa","._zs_galleryiA{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryiB{height:46px;padding:0 20px;line-height:44px;background-color:#fafafa;border:1px solid #e6e6e6;border-radius:4px}._zs_galleryiB ._zs_galleryiC{float:left;height:44px;line-height:44px}._zs_galleryiB ._zs_galleryiC>*{position:relative;top:2px;margin-right:4px;color:#999;font-size:20px}._zs_galleryiB ._zs_galleryiD{float:left;font-size:16px}._zs_galleryiB._zs_galleryiE{background-color:#f6e6e6;border:1px solid #a40100;color:#a40100}._zs_galleryiB._zs_galleryiE ._zs_galleryiC>*{color:#a40100}._zs_galleryiB._zs_galleryiF{background-color:#fff8e6;border:1px solid #ffb400;color:#ffb400}._zs_galleryiB._zs_galleryiF ._zs_galleryiC>*{color:#ffb400}._zs_galleryiG{padding:40px 20px 0}"),n.exports=l.View.extend({tmpl:function(i,e,n,l,t,r,a,s){if(n||(n=i),!t){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,g=function(i){return"&"+o[i]+";"};t=function(i){return""+(null==i?"":i)},l=function(i){return t(i).replace(d,g)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(i){return c[i]},p=/[!')(*]/g;r=function(i){return encodeURIComponent(t(i)).replace(p,_)}}if(!s){var f=/[\\'"]/g;s=function(i){return t(i).replace(f,"\\$&")}}var v="",x=i.info;return v+='<div mxa="_zs_galleryce:_" class="_zs_galleryiB clearfix">',x.icon&&(v+='<span mxa="_zs_galleryce:a" class="_zs_galleryiC">'+t(x.icon)+"</span>"),v+='<span mxa="_zs_galleryce:b" class="_zs_galleryiD">'+l(x.label)+'</span></div><div mxs="_zs_galleryce:_" class="_zs_galleryiG" style="min-height: 200px;"><div class="lh22 mb10"><div>页面功能说明：</div></div><div class="tip-content mb40"><div>1. 测导航子标题有几个对应当前页面有几个子view，以该页面为例，子标题有推广宝贝 + 出价方式，则对应有两个子view</div><div>2. 所有子模块共用一个侧标提示区域，配置sideTip使用组件默认样式</div><div>3. 子view实现check方法完成当前模块的校验</div><div>4. 自定义下一步按钮文案（nextTip）</div><div>5. 当前步骤提交的时候保留参数adgroupId，初始化的时候判断是否有dgroupId，有的话则表示第一步已完成，直接展开（nextFn）</div></div><div class="lh22 mb10"><div>当前页面配置信息：</div></div><pre class="tip-content mb40">\n&#123;\n    label: \'设置单元\',\n    nextTip: \'下一步，设置计划\',\n    nextFn: (remains, next) =&gt; &#123;\n        // remains 当前步骤保留的信息，提交处理\n        next(&#123;\n            adgroupId: 1\n        &#125;)\n    &#125;\n    icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe7b5;&lt;/i&gt;\',\n    sideTip: `&lt;div&gt;说明：&lt;/div&gt;\n        &lt;div&gt;1、条件1&lt;/div&gt;\n        &lt;div&gt;2、条件2&lt;/div&gt;\n        &lt;div&gt;3、条件3&lt;/div&gt;`,\n    subs: [&#123;\n        label: \'推广宝贝\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe613;&lt;/i&gt;\',\n        view: \'@./inner2\'\n    &#125;, &#123;\n        label: \'出价方式\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;\',\n        view: \'@./inner\'\n    &#125;]\n&#125;\n    </pre><div class="lh22 mb10"><div>JS Code：</div></div><pre class="tip-content mb40">\ninit(extra)&#123;\n    // extra.info（stepInfos[index]）：当前步骤信息\n    this.updater.set(&#123;\n        info: extra.info || &#123;&#125;\n    &#125;)\n&#125;\n/**\n* 子view实现该方法\n*/\ncheck() &#123;\n    let info = this.updater.get(\'info\');\n    let ok = true,\n        remain = &#123;&#125;;\n\n    return new Promise((resolve) =&gt; &#123;\n        // 此处返回promise，防止有接口提交校验等\n        resolve(&#123;\n            ok,\n            msg: info.label,\n            remain\n        &#125;)\n    &#125;)\n&#125;\n    </pre></div>'},init:function(i){this.updater.set({info:i.info||{},data:t.extend(!0,{},i.data||{})})},render:function(){this.updater.digest()},check:function(){var i=this.updater.get("info"),e={};return e["test_"+i.index]=i.label,new Promise(function(n){n({ok:!0,msg:i.label,remain:e})})}})});