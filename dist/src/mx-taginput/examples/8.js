define("mx-taginput/examples/8",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");s.exports=i.extend({tmpl:function(e,l,s,i,a,n,t,d){if(s||(s=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(x,c)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return m[e]},g=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(g,_)}}if(!d){var v=/[\\'"]/g;d=function(e){return a(e).replace(v,"\\$&")}}t||(t=function(e,l,s,i){for(i=e[p];--i;)if(e[s=p+i]===l)return s;return e[s=p+e[p]++]=l,s});var p="",z="",o=e.items,f=e.max,u=e.list,y=e.viewId,h=e.text1,w=e.text2;return z+='<div mxv mxa="_zs_galleryfz:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryfz:a" class="_zs_galleryj"><div mxs="_zs_galleryfz:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22">限制选择上限</div></div><div mxa="_zs_galleryfz:b" class="mb20"><span mxs="_zs_galleryfz:a" class="color-9">当前已选中：</span><span>'+i(o.length)+" / "+i(f)+'</span></div><div mxv mxa="_zs_galleryfz:c" class="mb20"><div mxv="list" class="w280" mx-change="'+l+'select()" mx-view="mx-taginput/index?list='+t(s,u)+"&max="+n(f)+'"></div></div></div><div mxa="_zs_galleryfz:d" class="_zs_galleryk"><div mxs="_zs_galleryfz:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(y)+'_text_1"><span mxa="_zs_galleryfz:e" class="_zs_galleryn">'+a(h)+'</span><i mxs="_zs_galleryfz:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(y)+'_text_1">\n    &lt;mx-taginput class="w280"\n        id="&#123;&#123;=viewId&#125;&#125;_taginput"\n        list="&#123;&#123;@list&#125;&#125;"\n        mx-change="select()"/&gt;</pre></div><div mxa="_zs_galleryfz:f" class="_zs_galleryk"><div mxs="_zs_galleryfz:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(y)+'_text_2"><span mxa="_zs_galleryfz:g" class="_zs_galleryn">'+a(w)+'</span><i mxs="_zs_galleryfz:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(y)+"_text_2\">\n    let Magix = require('magix');\n    let $ = require('$');\n    \n    module.exports = Magix.View.extend(&#123;\n        tmpl: '@index.html',\n        render() &#123;\n            let list = [];\n            for (let index = 0; index &lt; 5; index++) &#123;\n                list.push(&#123;\n                    text: 'test' + index,\n                    value: index\n                &#125;)\n            &#125;\n            this.updater.digest(&#123;\n                viewId: this.id,\n                list\n            &#125;);\n        &#125;,\n        'select&lt;change&gt;'(e) &#123;\n            // e.selected：string，逗号分隔，选中value\n            // e.items：array，选中完成对象\n            this.updater.digest(&#123;\n                selected: e.selected\n            &#125;);\n        &#125;\n    &#125;);</pre></div></div>"},render:function(){for(var e=[],l=0;l<5;l++)e.push({text:"test"+l,value:l});this.updater.digest({viewId:this.id,list:e,max:3,items:[]})},"select<change>":function(e){this.updater.digest({selected:e.selected,items:e.items})}})});