define("mx-dropdown/examples/25",["magix","examples/example","$","../bd","mx-copy/index","examples/hl"],(e,l,r)=>{e("../bd"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");r.exports=s.extend({tmpl:function(e,l,r,s,n,a,i,d){if(r||(r=e),!n){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,_=function(e){return"&"+t[e]+";"};n=function(e){return""+(null==e?"":e)},s=function(e){return n(e).replace(o,_)}}if(!a){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},p=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(p,x)}}if(!d){var c=/[\\'"]/g;d=function(e){return n(e).replace(c,"\\$&")}}i||(i=function(e,l,r,s){for(s=e[g];--s;)if(e[r=g+s]===l)return r;return e[r=g+e[g]++]=l,r});var g="",v="",u=e.viewId,y=e.text1;return v+='<div mxa="_zs_galleryb_:_" class="_zs_galleryg"><div mxa="_zs_galleryb_:a" class="_zs_galleryj"><div mxs="_zs_galleryb_:_" class="mb20"><span class="color-9">以下示例：</span>单选/多选 hover 展开选项列表</div><div mxa="_zs_galleryb_:b" class="mb10"><div class="w200" mx-view="mx-dropdown/bd?triggerType=hover&list='+i(r,[1,2,3])+'"></div></div><div class="w200" mx-view="mx-dropdown/bd?multiple=true&triggerType=hover&list='+i(r,[1,2,3])+'"></div></div><div mxa="_zs_galleryb_:c" class="_zs_galleryk"><div mxs="_zs_galleryb_:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(u)+'_text_1"><span mxa="_zs_galleryb_:d" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_galleryb_:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(u)+'_text_1">\n&lt;mx-dropdown.bd class="w200" \n    trigger-type="hover"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n&lt;/mx-dropdown.bd&gt;\n\n&lt;mx-dropdown.bd class="w200"\n    multiple="true"\n    trigger-type="hover"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n&lt;/mx-dropdown.bd&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});