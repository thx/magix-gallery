define("mx-taginput/__test__/8",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,s,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");l.exports=t.extend({tmpl:function(e,s,l,t,i,n,a,_){if(l||(l=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},t=function(e){return i(e).replace(r,x)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},g=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(g,m)}}if(!_){var v=/[\\'"]/g;_=function(e){return i(e).replace(v,"\\$&")}}a||(a=function(e,s,l,t){for(t=e[o];--t;)if(e[l=o+t]===s)return l;return e[l=o+e[o]++]=s,l});var o="",p="",u=e.items,y=e.max,z=e.list,f=e.viewId,h=e.text1,N=e.text2;return p+='<div mxv mxa="_zs_galleryeN:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryeN:a" class="_zs_galleryj"><div mxs="_zs_galleryeN:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22">限制选择上限</div></div><div mxa="_zs_galleryeN:b" class="mb20"><span mxs="_zs_galleryeN:a" class="color-9">当前已选中：</span><span>'+t(u.length)+" / "+t(y)+'</span></div><div mxv mxa="_zs_galleryeN:c" class="mb20"><div mxv="list" class="w280" mx-change="'+s+'select()" mx-view="mx-taginput/index?list='+a(l,z)+"&max="+n(y)+'"></div></div></div><div mxa="_zs_galleryeN:d" class="_zs_galleryk"><div mxs="_zs_galleryeN:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_1"><span mxa="_zs_galleryeN:e" class="_zs_galleryn">'+i(h)+'</span><i mxs="_zs_galleryeN:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(f)+'_text_1">\n    &lt;mx-taginput class="w280"\n        id="&#123;&#123;=viewId&#125;&#125;_taginput"\n        list="&#123;&#123;@list&#125;&#125;"\n        mx-change="select()"/&gt;</pre></div><div mxa="_zs_galleryeN:f" class="_zs_galleryk"><div mxs="_zs_galleryeN:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_2"><span mxa="_zs_galleryeN:g" class="_zs_galleryn">'+i(N)+'</span><i mxs="_zs_galleryeN:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(f)+"_text_2\">\n    let Magix = require('magix');\n    let $ = require('$');\n    \n    module.exports = Magix.View.extend(&#123;\n        tmpl: '@index.html',\n        render() &#123;\n            let list = [];\n            for (let index = 0; index &lt; 5; index++) &#123;\n                list.push(&#123;\n                    text: 'test' + index,\n                    value: index\n                &#125;)\n            &#125;\n            this.updater.digest(&#123;\n                viewId: this.id,\n                list\n            &#125;);\n        &#125;,\n        'select&lt;change&gt;'(e) &#123;\n            // e.selected：string，逗号分隔，选中value\n            // e.items：array，选中完成对象\n            this.updater.digest(&#123;\n                selected: e.selected\n            &#125;);\n        &#125;\n    &#125;);</pre></div></div>"},render:function(){for(var e=[],s=0;s<5;s++)e.push({text:"test"+s,value:s});this.updater.digest({viewId:this.id,list:e,max:3,items:[]})},"select<change>":function(e){this.updater.digest({selected:e.selected,items:e.items})}})});