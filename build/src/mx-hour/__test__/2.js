define("mx-hour/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var i=e("magix"),r=i.Vframe,a=e("__test__/example");e("$");i.applyStyle("_zs_galleryZ","._zs_gallerygu{padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border)}._zs_gallerygv{width:760px}._zs_gallerygw{width:800px}"),s.exports=a.extend({tmpl:function(e,l,s,i,r,a,_,t){if(s||(s=e),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};r=function(e){return""+(null==e?"":e)},i=function(e){return r(e).replace(n,c)}}if(!a){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return v[e]},x=/[!')(*]/g;a=function(e){return encodeURIComponent(r(e)).replace(x,m)}}if(!t){var g=/[\\'"]/g;t=function(e){return r(e).replace(g,"\\$&")}}_||(_=function(e,l,s,i){for(i=e[u];--i;)if(e[s=u+i]===l)return s;return e[s=u+e[u]++]=l,s});var u="",o="",p=e.selected,y=e.viewId,f=e.text1;o+='<div mxv mxa="_zs_gallerycu:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerycu:a" class="_zs_galleryj"><div mxs="_zs_gallerycu:_" class="clearfix lh22 mb15"><div class="fl color-9">以下示例：</div><div class="fl"><div>每日单独选择</div><div>提供快捷操作</div></div></div><div mxa="_zs_gallerycu:b" class="mb20 clearfix"><div mxs="_zs_gallerycu:a" class="fl mr10"><a href="javascript:;" class="btn btn-brand" mx-click="'+l+'get()">获取选中值</a></div><div mxa="_zs_gallerycu:c" class="fl">';for(var z=0,h=p.length;z<h;z++){var w=p[z];o+="<div>"+i(w.name)+"："+i(w.times)+"</div>"}return o+='</div></div><div mxv="selected" class="_zs_gallerygu _zs_gallerygw" id="'+i(y)+'_hour" mx-view="mx-hour/index?simple=false&selected='+_(s,p)+'"></div></div><div mxa="_zs_gallerycu:d" class="_zs_galleryk"><div mxs="_zs_gallerycu:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_1"><span mxa="_zs_gallerycu:e" class="_zs_galleryn">'+r(f)+'</span><i mxs="_zs_gallerycu:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(y)+'_text_1">\n&lt;mx-hour style="width: 760px;"\n    simple="false"\n    selected="&#123;&#123;@[&#123;\n        week: 1,\n        times: [2,3,4,21,22,23]\n    &#125;, &#123;\n        week: 3,\n        times: [0,1,2,3,4,10,11,12]\n    &#125;]&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest({viewId:this.id,selected:[{week:1,name:"周一",times:[2,3,4,21,22,23]},{week:3,name:"周三",times:[0,1,2,3,4,10,11,12]}]})},"get<click>":function(){var e=r.get(this.id+"_hour").invoke("val");this.updater.digest({selected:e})}})});