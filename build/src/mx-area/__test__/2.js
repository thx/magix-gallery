define("mx-area/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var a=e("magix"),i=e("__test__/example");e("$");a.applyStyle("_zs_gallerym","._zs_gallerybd,._zs_gallerybe{padding:20px 20px 0;border:1px solid var(--color-border);border-radius:var(--border-radius)}._zs_gallerybd{width:740px}._zs_gallerybe{width:600px}._zs_gallerybf{width:740px;border:1px solid var(--color-border);border-radius:var(--border-radius);padding:20px 0}"),s.exports=i.extend({tmpl:function(e,l,s,a,i,r,d,_){if(s||(s=e),!i){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,c=function(e){return"&"+t[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(n,c)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return x[e]},g=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(g,v)}}if(!_){var m=/[\\'"]/g;_=function(e){return i(e).replace(m,"\\$&")}}d||(d=function(e,l,s,a){for(a=e[o];--a;)if(e[s=o+a]===l)return s;return e[s=o+e[o]++]=l,s});var o="",y="",p=e.viewId,z=e.selected,f=e.text1,u=e.text2;y+='<div mxv mxa="_zs_galleryQ:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryQ:a" class="_zs_galleryj"><div mxs="_zs_galleryQ:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl"><div>只能选择到省份</div><div>宽度由容器宽度决定，自适应</div></div></div><div mxv mxa="_zs_galleryQ:b" class="clearfix mb20"><div mxv mxa="_zs_galleryQ:c" class="_zs_gallerybe fl mr20"><div mxv="selected" id="'+a(p)+'_area" mx-view="mx-area/index?selected='+d(s,z)+'"></div></div><div mxa="_zs_galleryQ:d" class="fl"><div mxs="_zs_galleryQ:a" class="mb10"><a href="javascript:;" class="btn btn-brand" mx-click="'+l+'get()">获取选中值</a></div><div mxa="_zs_galleryQ:e" class="clearfix lh22"><div mxs="_zs_galleryQ:b" class="fl color-9">当前选中值：</div><div mxa="_zs_galleryQ:f" class="fl">';for(var b=0,h=z.length;b<h;b++){y+="<div>"+a(z[b])+"</div>"}return y+='</div></div></div></div></div><div mxa="_zs_galleryQ:g" class="clearfix"><div mxa="_zs_galleryQ:h" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryQ:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_1"><span mxa="_zs_galleryQ:i" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_galleryQ:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(p)+'_text_1">\n&lt;mx-area id="&#123;&#123;=viewId&#125;&#125;_area"\n    selected="&#123;&#123;@selected&#125;&#125;"/&gt;</pre></div><div mxa="_zs_galleryQ:j" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryQ:e" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_2"><span mxa="_zs_galleryQ:k" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_galleryQ:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(p)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            selected: [1]\n        &#125;);\n    &#125;,\n    'get&lt;click&gt;' (event) &#123;\n        let id = this.id + '_area'\n        let selected = Magix.Vframe.get(id).invoke('val');\n        this.updater.digest(&#123;\n            selected: selected\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>"},render:function(){this.updater.digest({viewId:this.id,selected:[1]})},"get<click>":function(e){var l=this.id+"_area",s=a.Vframe.get(l).invoke("val");this.updater.digest({selected:s})}})});