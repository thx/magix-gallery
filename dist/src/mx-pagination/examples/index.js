define("mx-pagination/examples/index",["magix","examples/example","$","examples/subs","mx-title/second","../index","mx-copy/index","examples/hl","./1","./2","./4","./3","./5","examples/api","examples/event"],(e,a,s)=>{e("examples/subs"),e("mx-title/second"),e("../index"),e("mx-copy/index"),e("examples/hl"),e("./1"),e("./2"),e("./4"),e("./3"),e("./5"),e("examples/api"),e("examples/event");e("magix");var i=e("examples/example");e("$");s.exports=i.extend({tmpl:function(e,a,s,i,n,d,l,t){if(s||(s=e),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},p=/[&<>"'`]/g,x=function(e){return"&"+m[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(p,x)}}if(!d){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return r[e]},_=/[!')(*]/g;d=function(e){return encodeURIComponent(n(e)).replace(_,o)}}if(!t){var c=/[\\'"]/g;t=function(e){return n(e).replace(c,"\\$&")}}l||(l=function(e,a,s,i){for(i=e[g];--i;)if(e[s=g+i]===a)return s;return e[s=g+e[g]++]=a,s});var g="",v="",y=e.viewId,z=e.page,f=e.size,u=e.text1,k=e.text2,b=e.options,h=e.events;return v+='<div mxv mxa="_zs_galleryda:_" class="pr pr120"><div mx-view="examples/subs?list='+l(s,[{name:"使用示例",key:y+"_demo",subs:[{name:"完整示例",key:y+"_demo6"},{name:"禁止修改页数",key:y+"_demo1"},{name:"精简版",key:y+"_demo2"},{name:"顺序翻页",key:y+"_demo3"},{name:"居中显示",key:y+"_demo4"},{name:"offset",key:y+"_demo5"}]},{name:"API",key:y+"_api"},{name:"Event",key:y+"_event"}])+'"></div><div id="'+i(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div class="_zs_galleryg" id="'+i(y)+'_demo6"><div mxa="_zs_galleryda:a" class="_zs_galleryj clearfix"><div mxa="_zs_galleryda:b" class="mb20"><span mxs="_zs_galleryda:_" class="color-9">当前页数：</span><span mxa="_zs_galleryda:c" class="mr20">'+i(z)+'</span><span mxs="_zs_galleryda:a" class="color-9">每页展示：</span><span>'+i(f)+'</span></div><div mx-change="'+a+'change()" mx-view="mx-pagination/index?total=600&sizes='+l(s,[20,40,50])+"&size="+d(f)+"&page="+d(z)+'"></div></div><div mxa="_zs_galleryda:d" class="clearfix"><div mxa="_zs_galleryda:e" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryda:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+d(y)+'_text_1"><span mxa="_zs_galleryda:f" class="_zs_galleryn">'+n(u)+'</span><i mxs="_zs_galleryda:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(y)+'_text_1">\n&lt;mx-pagination\n    total="600" \n    sizes="&#123;&#123;@[20,40,50]&#125;&#125;"\n    size="&#123;&#123;=size&#125;&#125;" \n    page="&#123;&#123;=page&#125;&#125;"\n    mx-change="change()"&gt;\n&lt;/mx-pagination&gt;\n                </pre></div><div mxa="_zs_galleryda:g" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryda:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+d(y)+'_text_2"><span mxa="_zs_galleryda:h" class="_zs_galleryn">'+n(k)+'</span><i mxs="_zs_galleryda:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            page: 1,\n            size: 40\n        &#125;);\n    &#125;,\n    'change&lt;change&gt;' (e) &#123;\n        // e.page 当前第几页\n        // e.size 每页多少条\n        // e.offset 偏移量\n        this.updater.digest(&#123;\n            page: e.page,\n            size: e.size\n        &#125;)\n    &#125;\n&#125;);\n                </pre></div></div></div><div mx-view=\"mx-pagination/examples/1\" id=\""+i(y)+'_demo1"></div><div mxa="_zs_galleryda:i" class="clearfix mb20"><div mxa="_zs_galleryda:j" class="_zs_galleryd"><div mx-view="mx-pagination/examples/2" id="'+i(y)+'_demo2"></div><div mx-view="mx-pagination/examples/4" id="'+i(y)+'_demo4"></div></div><div mxa="_zs_galleryda:k" class="_zs_galleryd"><div mx-view="mx-pagination/examples/3" id="'+i(y)+'_demo3"></div><div mx-view="mx-pagination/examples/5" id="'+i(y)+'_demo5"></div></div></div><div id="'+i(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+l(s,b)+'" class="mb40"></div><div id="'+i(y)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+l(s,h)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"total",desc:"总数",type:"number"},{key:"page",desc:"当前第几页",type:"number",def:1},{key:"offset",desc:"偏移量，优先级 page > offset",type:"number",def:0},{key:"size",desc:"每页多少条",type:"number",def:40},{key:"sizes",desc:"可选分页数",type:"array",def:"[10,20,30,40]"},{key:"jump",desc:"是否有快捷跳转",type:"boolean",def:"true"},{key:"simplify",desc:"只有翻页器，没有汇总数据版本",type:"boolean",def:"false"},{key:"sizes-change",desc:"是否可切换分页数",type:"boolean",def:"true"},{key:"sizes-placement",desc:"分页选择框展示方向，bottom（下方），top（上方）",type:"string",def:"bottom"},{key:"mini",desc:"顺序翻页版本",type:"boolean",def:"false"},{key:"step",desc:"页码过多时，中间显示多少条页码",type:"number",def:"5"}],events:[{type:"change",desc:"切换页码，分页数时均会触发",params:[{key:"page",desc:"当前页码",type:"number"},{key:"size",desc:"每页条数",type:"number"},{key:"offset",desc:"偏移量：offset = (size - 1) * page",type:"number"}]}],page:1,size:40})},"change<change>":function(e){this.updater.digest({page:e.page,size:e.size})}})});