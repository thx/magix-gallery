define("mx-tree/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");l.exports=a.extend({tmpl:function(e,t,l,a,u,r,n,_){if(l||(l=e),!u){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,s=function(e){return"&"+i[e]+";"};u=function(e){return""+(null==e?"":e)},a=function(e){return u(e).replace(x,s)}}if(!r){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return v[e]},p=/[!')(*]/g;r=function(e){return encodeURIComponent(u(e)).replace(p,d)}}if(!_){var c=/[\\'"]/g;_=function(e){return u(e).replace(c,"\\$&")}}n||(n=function(e,t,l,a){for(a=e[m];--a;)if(e[l=m+a]===t)return l;return e[l=m+e[m]++]=t,l});var m="",o="",g=e.viewId,y=e.list,V=e.text1;return o+='<div mxv mxa="_zs_galleryeN:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryeN:a" class="_zs_galleryk"><div mxv="list" id="'+a(g)+'_tree" mx-view="mx-tree/index?needExpand=true&readOnly=true&hasLine=true&list='+n(l,y)+'"></div></div><div mxa="_zs_galleryeN:b" class="_zs_galleryl"><div mxs="_zs_galleryeN:_" class="_zs_galleryj">只读 + 可展开收起 + 默认展开 + 有连接线</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(g)+'_text_1"><span mxa="_zs_galleryeN:c" class="_zs_galleryo">'+u(V)+'</span><i mxs="_zs_galleryeN:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(g)+'_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    need-expand="true"\n    read-only="true"\n    has-line="true"\n    list="&#123;&#123;@list&#125;&#125;"&gt;&lt;/mx-tree&gt;</pre></div></div>'},render:function(){this.updater.digest({list:[{value:1,pValue:"",text:"1"},{value:2,pValue:"",text:"2"},{value:3,pValue:"",text:"3"},{value:11,pValue:1,text:"1-1"},{value:111,pValue:11,text:"1-1-1"},{value:1111,pValue:111,text:"1-1-1-1"},{value:1112,pValue:111,text:"1-1-1-2"},{value:112,pValue:11,text:"1-1-2"},{value:1121,pValue:112,text:"1-1-2-1"},{value:1122,pValue:112,text:"1-1-2-2"},{value:12,pValue:1,text:"1-2"},{value:21,pValue:2,text:"2-1"},{value:211,pValue:21,text:"2-1-1"},{value:212,pValue:21,text:"2-1-2"},{value:22,pValue:2,text:"2-2"},{value:23,pValue:2,text:"2-3"},{value:231,pValue:23,text:"2-3-1"},{value:232,pValue:23,text:"2-3-2"}]})}})});