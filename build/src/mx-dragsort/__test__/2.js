define("mx-dragsort/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(a,e,l)=>{a("../index"),a("mx-copy/index"),a("__test__/hl");var s=a("magix"),r=a("__test__/example"),i=a("$");s.applyStyle("_zs_galleryG","._zs_galleryep{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryeq{width:120px;padding:10px;margin-bottom:10px;margin-right:10px;border:1px solid #e6e6e6;border-radius:4px;cursor:pointer}"),l.exports=r.extend({tmpl:function(a,e,l,s,r,i,t,_){if(l||(l=a),!r){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(a){return"&"+n[a]+";"};r=function(a){return""+(null==a?"":a)},s=function(a){return r(a).replace(d,x)}}if(!i){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(a){return g[a]},m=/[!')(*]/g;i=function(a){return encodeURIComponent(r(a)).replace(m,c)}}if(!_){var o=/[\\'"]/g;_=function(a){return r(a).replace(o,"\\$&")}}var p="",v=a.items,u=a.viewId,f=a.text1;p+='<div mxa="_zs_galleryaT:_" class="_zs_galleryh"><div mxa="_zs_galleryaT:a" class="_zs_galleryk"><div mxs="_zs_galleryaT:_" class="mb20"><span class="color-9">以下示例：</span>支持水平方向的排序</div><div mxa="_zs_galleryaT:b" class="clearfix"><div mxa="_zs_galleryaT:c" class="mb20"><span mxs="_zs_galleryaT:a" class="color-9 mr10">当前顺序：</span>'+s(v)+'</div><ul mxa="_zs_galleryaT:d" class="clearfix" mx-view="mx-dragsort/index?horizonal=true&vertical=false" mx-dragfinish="'+e+'drag()">';for(var y=0,z=v.length;y<z;y++){var h=v[y];p+='<li class="_zs_galleryeq fl" data-value="'+s(h)+'">'+s(h)+"</li>"}return p+='</ul></div></div><div mxa="_zs_galleryaT:e" class="_zs_galleryl"><div mxs="_zs_galleryaT:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_galleryaT:f" class="_zs_galleryo">'+r(f)+'</span><i mxs="_zs_galleryaT:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(u)+'_text_1">\n&lt;ul class="clearfix"\n    mx-view="@../../mx-dragsort/index" \n    view-horizonal="true"\n    view-vertical="false"\n    mx-dragfinish="drag()"&gt;\n    &#123;&#123;each items as item&#125;&#125;\n    &lt;li class="item fl" data-value="&#123;&#123;=item&#125;&#125;"&gt;&#123;&#123;=item&#125;&#125;&lt;/li&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/ul&gt;\n        </pre></div></div>'},render:function(){this.updater.digest({items:[1,2,3,4,5]})},"drag<dragfinish>":function(a){for(var e=[],l=i("#"+this.id+" ._zs_galleryeq"),s=0,r=l.length;s<r;s++){var t=i(l[s]);e.push(t.data("value"))}this.updater.digest({items:e})}})});