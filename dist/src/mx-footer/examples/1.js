define("mx-footer/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var r=e("examples/example");e("$");a.exports=r.extend({tmpl:function(e,l,a,r,t,n,s,i){if(a||(a=e),!t){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};t=function(e){return""+(null==e?"":e)},r=function(e){return t(e).replace(c,m)}}if(!n){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return v[e]},d=/[!')(*]/g;n=function(e){return encodeURIComponent(t(e)).replace(d,_)}}if(!i){var g=/[\\'"]/g;i=function(e){return t(e).replace(g,"\\$&")}}var u="",o=e.list,p=e.current,y=e.viewId,f=e.text1;u+='<div mxv mxa="_zs_galleryb~:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryb~:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryb~:b" class="mb40"><span mxs="_zs_galleryb~:_" class="color-9 mr10">对齐方式：</span>';for(var z=0,b=o.length;z<b;z++){var h=o[z];u+='<label mxv mxa="_zs_galleryb~:c" class="mr20"><input type="radio" value="'+r(h.value)+'" name="align" ',h.value==p&&(u+='checked="true" '),u+=' mx-change="'+l+"change({value:'"+r(i(h.value))+"'})\"/>"+r(h.text)+"</label>"}return u+='</div><div mx-view="mx-footer/index?textAlign='+n(p)+'"></div></div><div mxa="_zs_galleryb~:d" class="_zs_galleryk"><div mxs="_zs_galleryb~:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(y)+'_text_1"><span mxa="_zs_galleryb~:e" class="_zs_galleryn">'+t(f)+'</span><i mxs="_zs_galleryb~:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(y)+'_text_1">\n&lt;mx-footer text-align="'+r(p)+'"/&gt;</pre></div></div>'},render:function(){this.updater.digest({list:[{text:"居中对齐（默认）",value:"center"},{text:"左对齐",value:"left"},{text:"右对齐",value:"right"}],current:"center"})},"change<change>":function(e){this.updater.digest({current:e.params.value})}})});