define("mx-style/examples/2",["magix","examples/example","$","mx-copy/index","examples/hl"],(l,e,a)=>{l("mx-copy/index"),l("examples/hl");l("magix");var s=l("examples/example");l("$");a.exports=s.extend({tmpl:function(l,e,a,s,n,t,i,r){if(a||(a=l),!n){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(l){return"&"+p[l]+";"};n=function(l){return""+(null==l?"":l)},s=function(l){return n(l).replace(d,x)}}if(!t){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(l){return c[l]},_=/[!')(*]/g;t=function(l){return encodeURIComponent(n(l)).replace(_,m)}}if(!r){var u=/[\\'"]/g;r=function(l){return n(l).replace(u,"\\$&")}}var g="",v=l.viewId,o=l.text1;return g+='<div mxv mxa="_zs_galleryd+:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryd+:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryd+:b" class="mb20"><input mxs="_zs_galleryd+:_" placeholder="正常尺寸input"/></div><div mxv mxa="_zs_galleryd+:c" class="mb20"><input mxs="_zs_galleryd+:a" class="input-small" placeholder="小号input"/></div><div mxs="_zs_galleryd+:b" class="mb20 clearfix"><span class="color-9 fl lh32">只使用input样式：</span><span class="input w200 fl"></span></div></div><div mxa="_zs_galleryd+:d" class="_zs_galleryk"><div mxs="_zs_galleryd+:c" class="_zs_galleryi">Input</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_galleryd+:e" class="_zs_galleryn">'+n(o)+'</span><i mxs="_zs_galleryd+:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(v)+'_text_1">\n&lt;input type="text" placeholder="正常尺寸input"/&gt;\n\n&lt;input type="text" class="input-small" placeholder="小号input"/&gt;\n\n&lt;span class="input w200 fl"&gt;&lt;/span&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});