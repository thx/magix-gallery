define("mx-pagination/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");l.exports=n.extend({tmpl:function(e,a,l,n,i,s,t,r){if(l||(l=e),!i){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,_=function(e){return"&"+x[e]+";"};i=function(e){return""+(null==e?"":e)},n=function(e){return i(e).replace(d,_)}}if(!s){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return m[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(g,p)}}if(!r){var c=/[\\'"]/g;r=function(e){return i(e).replace(c,"\\$&")}}var o="",v=e.viewId,u=e.text1;return o+='<div mxa="_zs_gallerydw:_" class="_zs_galleryg"><div mxs="_zs_gallerydw:_" class="_zs_galleryj"><div mx-view="mx-pagination/index?total=600&size=40&step=4&sizesChange=false&page=1"></div></div><div mxa="_zs_gallerydw:a" class="_zs_galleryk"><div mxs="_zs_gallerydw:a" class="_zs_galleryi">禁止修改每页展示数 + 页码过多时中间显示4条页码（默认5条）</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_gallerydw:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_gallerydw:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(v)+'_text_1">\n&lt;mx-pagination \n    total="600" \n    size="40" \n    step="4"\n    sizes-change="false"\n    page="1" /&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});