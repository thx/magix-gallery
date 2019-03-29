define("mx-dialog/__test__/8",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(e,l,a)=>{e("mx-copy/index"),e("__test__/hl");var s=e("magix"),i=e("mx-dialog/index"),r=e("__test__/example");e("$");s.applyStyle("_zs_galleryD","._zs_gallerydV{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerydW,._zs_gallerydX{position:fixed;left:0;width:100%;height:100%;transition:all .25s}._zs_gallerydW{opacity:0;top:0;background-color:rgba(0,0,0,.4)}._zs_gallerydW._zs_gallerydY{opacity:1}._zs_gallerydZ{position:absolute;border-radius:4px;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerydZ ._zs_gallerye_{position:relative;word-break:break-all}._zs_gallerydZ ._zs_galleryea{position:absolute;top:16px;right:24px;width:26px;height:26px;z-index:20;border-radius:50%;background:transparent;color:#ccc;text-align:center}._zs_gallerydZ ._zs_galleryea ._zs_galleryeb{font-size:18px;font-weight:700;line-height:26px}._zs_gallerydZ ._zs_galleryea:focus,._zs_gallerydZ ._zs_galleryea:hover{background-color:#999;color:#fff}._zs_gallerydZ._zs_galleryec{border-radius:0}._zs_galleryed{position:relative}._zs_galleryed ._zs_galleryee{opacity:1;position:relative;z-index:1}._zs_galleryed ._zs_galleryef{display:none;position:absolute;top:50%;left:50%;z-index:2;margin-top:-2px;margin-left:-2px}._zs_galleryed._zs_galleryeg ._zs_galleryee{opacity:0}._zs_galleryed._zs_galleryeg ._zs_galleryef{display:inline}"),a.exports=r.extend({tmpl:function(e,l,a,s,i,r,_,t){if(a||(a=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,o=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(n,o)}}if(!r){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return g[e]},x=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(x,c)}}if(!t){var y=/[\\'"]/g;t=function(e){return i(e).replace(y,"\\$&")}}var v="",p=e.viewId,z=e.text1,f=e.text2;return v+='<div mxa="_zs_galleryaD:_" class="_zs_galleryh"><div mxs="_zs_galleryaD:_" class="_zs_galleryk"><div class="clearfix mb10 lh22"><div class="color-9 fl">beforeClose：</div><div class="fl"><div>关闭浮层之前调用（包括右上角关闭按钮，取消按钮）</div><div>return true; 继续调用dialog.close()</div><div>return false; 中断关闭</div></div></div><div class="clearfix mb10 lh22"><div class="color-9 fl">适用场景：</div><div class="fl">只有右上角关闭按钮，在关闭浮层之前需要额外的校验操作的</div></div><div class="clearfix mb20 lh22"><div class="color-9 fl">以下示例：</div><div class="fl">浮层内没有自定义关闭按钮，点击右上角默认关闭按钮时触发beforeClose，根据beforeClose的返回值判断要不要关闭</div></div><div class="mb20"><a href="javascript:;" mx-click="'+l+'open()" class="btn btn-brand mr20">打开浮层</a></div></div><div mxa="_zs_galleryaD:a" class="clearfix"><div mxa="_zs_galleryaD:b" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryaD:a" class="_zs_galleryj">浮层 HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_1"><span mxa="_zs_galleryaD:c" class="_zs_galleryo">'+i(z)+'</span><i mxs="_zs_galleryaD:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(p)+'_text_1">\n&lt;div class="dialog-content" style="height: 200px;"&gt;\n    &lt;div class="dialog-header"&gt;\n        &lt;div class="fontsize-16"&gt;标题&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="dialog-body"&gt;\n        浮层内容\n    &lt;/div&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryaD:d" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryaD:c" class="_zs_galleryj">浮层 JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_2"><span mxa="_zs_galleryaD:e" class="_zs_galleryo">'+i(f)+'</span><i mxs="_zs_galleryaD:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(p)+"_text_2\">\nlet Magix = require('magix');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    init(e) &#123;\n        this.viewOptions = e;\n\n        let dlg = this.viewOptions.dialog;\n        dlg.beforeClose(() =&gt; &#123;\n            // do something\n            // return true 可执行dlg.close()\n            // return false 不关闭浮层\n            return true;\n        &#125;)\n    &#125;,\n    \n    render() &#123;\n        this.updater.digest();\n    &#125;\n&#125;);\n            </pre></div></div></div>"},mixins:[i],render:function(){this.updater.digest()},"open<click>":function(e){this.mxDialog("mx-dialog/__test__/demo2",null,{height:200})}})});