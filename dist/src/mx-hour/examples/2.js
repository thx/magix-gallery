define("mx-hour/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var a=e("magix"),i=a.Vframe,r=e("examples/example");e("$");a.applyStyle("_zs_gallerya_","._zs_gallerygX{padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border)}._zs_gallerygY{width:760px}._zs_gallerygZ{width:800px}"),s.exports=r.extend({tmpl:function(e,l,s,a,i,r,d,n){if(s||(s=e),!i){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,_=function(e){return"&"+t[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(c,_)}}if(!r){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},v=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(v,x)}}if(!n){var g=/[\\'"]/g;n=function(e){return i(e).replace(g,"\\$&")}}d||(d=function(e,l,s,a){for(a=e[o];--a;)if(e[s=o+a]===l)return s;return e[s=o+e[o]++]=l,s});var o="",p="",u=e.selected,y=e.viewId,f=e.text1;p+='<div mxv mxa="_zs_galleryc4:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryc4:a" class="_zs_galleryj"><div mxs="_zs_galleryc4:_" class="clearfix lh22 mb15"><div class="fl color-9">以下示例：</div><div class="fl"><div>每日单独选择</div><div>提供快捷操作</div></div></div><div mxa="_zs_galleryc4:b" class="mb20 clearfix"><div mxs="_zs_galleryc4:a" class="fl mr10"><a href="javascript:;" class="btn btn-brand" mx-click="'+l+'get()">获取选中值</a></div><div mxa="_zs_galleryc4:c" class="fl">';for(var z=0,h=u.length;z<h;z++){var w=u[z];p+="<div>"+a(w.name)+"："+a(w.times)+"</div>"}return p+='</div></div><div mxv="selected" class="_zs_gallerygX _zs_gallerygZ" id="'+a(y)+'_hour" mx-view="mx-hour/index?simple=false&selected='+d(s,u)+'"></div></div><div mxa="_zs_galleryc4:d" class="_zs_galleryk"><div mxs="_zs_galleryc4:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(y)+'_text_1"><span mxa="_zs_galleryc4:e" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_galleryc4:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(y)+'_text_1">\n&lt;mx-hour style="width: 760px;"\n    simple="false"\n    selected="&#123;&#123;@[&#123;\n        week: 1,\n        times: [2,3,4,21,22,23]\n    &#125;, &#123;\n        week: 3,\n        times: [0,1,2,3,4,10,11,12]\n    &#125;]&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest({viewId:this.id,selected:[{week:1,name:"周一",times:[2,3,4,21,22,23]},{week:3,name:"周三",times:[0,1,2,3,4,10,11,12]}]})},"get<click>":function(){var e=i.get(this.id+"_hour").invoke("val");this.updater.digest({selected:e})}})});