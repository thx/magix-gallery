define("mx-loading/examples/12",["magix","examples/example","$","mx-copy/index","examples/hl"],(a,l,n)=>{a("mx-copy/index"),a("examples/hl");a("magix");var e=a("examples/example");a("$");n.exports=e.extend({tmpl:function(a,l,n,e,i,s,d,t){if(n||(n=a),!i){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,g=function(a){return"&"+r[a]+";"};i=function(a){return""+(null==a?"":a)},e=function(a){return i(a).replace(c,g)}}if(!s){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(a){return p[a]},x=/[!')(*]/g;s=function(a){return encodeURIComponent(i(a)).replace(x,m)}}if(!t){var o=/[\\'"]/g;t=function(a){return i(a).replace(o,"\\$&")}}var _="",v=a.viewId,y=a.text1;return _+='<div mxa="_zs_galleryc;:_" class="_zs_galleryg"><div mxs="_zs_galleryc;:_" class="_zs_galleryj clearfix"><div class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div><div class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div><div class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div><div class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div mxa="_zs_galleryc;:a" class="_zs_galleryk"><div mxs="_zs_galleryc;:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_galleryc;:b" class="_zs_galleryn">'+i(y)+'</span><i mxs="_zs_galleryc;:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+e(v)+'_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="circle-spinner" type="brand" /&gt;\n\n&lt;!-- 自定义尺寸 --&gt;\n&lt;mx-loading.anim mode="circle-spinner" size="40" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-loading.anim mode="circle-spinner" size="40" color="#51a300" /&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});