define("mx-main/__test__/inner3",["magix","$"],(i,e,l)=>{var n=i("magix"),a=i("$");n.applyStyle("_zs_galleryad","._zs_galleryiz{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryiA{height:46px;padding:0 20px;line-height:44px;background-color:#fafafa;border:1px solid #e6e6e6;border-radius:4px}._zs_galleryiA ._zs_galleryiB{float:left;height:44px;line-height:44px}._zs_galleryiA ._zs_galleryiB>*{position:relative;top:2px;margin-right:4px;color:#999;font-size:20px}._zs_galleryiA ._zs_galleryiC{float:left;font-size:16px}._zs_galleryiA._zs_galleryiD{background-color:#f6e6e6;border:1px solid #a40100;color:#a40100}._zs_galleryiA._zs_galleryiD ._zs_galleryiB>*{color:#a40100}._zs_galleryiA._zs_galleryiE{background-color:#fff8e6;border:1px solid #ffb400;color:#ffb400}._zs_galleryiA._zs_galleryiE ._zs_galleryiB>*{color:#ffb400}._zs_galleryiF{padding:40px 20px 0}"),l.exports=n.View.extend({tmpl:function(i,e,l,n,a,r,t,s){if(l||(l=i),!a){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,c=function(i){return"&"+o[i]+";"};a=function(i){return""+(null==i?"":i)},n=function(i){return a(i).replace(_,c)}}if(!r){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(i){return g[i]},p=/[!')(*]/g;r=function(i){return encodeURIComponent(a(i)).replace(p,d)}}if(!s){var f=/[\\'"]/g;s=function(i){return a(i).replace(f,"\\$&")}}var x="",y=i.info;return x+='<div mxa="_zs_gallerycI:_" class="_zs_galleryiA clearfix">',y.icon&&(x+='<span mxa="_zs_gallerycI:a" class="_zs_galleryiB">'+a(y.icon)+"</span>"),x+='<span mxa="_zs_gallerycI:b" class="_zs_galleryiC">'+n(y.label)+"</span></div><div mxs=\"_zs_gallerycI:_\" class=\"_zs_galleryiF\" style=\"min-height: 200px;\"><div class=\"lh22 mb10\"><div>页面功能说明：</div></div><div class=\"tip-content mb40\"><div>当前步骤三个子步骤，每个子步骤都有自己对应的右侧提示区域，配置subs里的sideView</div></div><div class=\"lh22 mb10\"><div>当前页面配置信息：</div></div><pre class=\"tip-content mb40\">\n&#123;\n    label: '添加创意',\n    nextTip: '下一步，完成',\n    icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe613;&lt;/i&gt;',\n    subs: [&#123;\n        label: '创意内容1',\n        icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe705;&lt;/i&gt;',\n        view: '@./inner3',\n        sideView: '@./tip'\n    &#125;, &#123;\n        label: '创意内容2',\n        icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe664;&lt;/i&gt;',\n        view: '@./inner',\n        sideView: '@./tip'\n    &#125;, &#123;\n        label: '创意内容3',\n        icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe767;&lt;/i&gt;',\n        view: '@./inner',\n        sideView: '@./tip'\n    &#125;]\n&#125;\n    </pre></div>"},init:function(i){this.updater.set({info:i.info||{},data:a.extend(!0,{},i.data||{})})},render:function(){this.updater.digest()},check:function(){var i=this.updater.get("info"),e={};return e["test_"+i.index]=i.label,new Promise(function(l){l({ok:!0,msg:i.label,remain:e})})}})});