define("mx-slider/examples/range",["magix","$","examples/subs","mx-title/second","./8","./7","./6","./11","./9","examples/api","examples/event"],(e,d,i)=>{e("examples/subs"),e("mx-title/second"),e("./8"),e("./7"),e("./6"),e("./11"),e("./9"),e("examples/api"),e("examples/event");var t=e("magix");e("$");i.exports=t.View.extend({tmpl:function(e,d,i,t,s,n,m,a){if(i||(i=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,l=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},t=function(e){return s(e).replace(v,l)}}if(!n){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return p[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(x,o)}}if(!a){var c=/[\\'"]/g;a=function(e){return s(e).replace(c,"\\$&")}}m||(m=function(e,d,i,t){for(t=e[y];--t;)if(e[i=y+t]===d)return i;return e[i=y+e[y]++]=d,i});var y="",u="",f=e.viewId,_=e.options,k=e.events;return u+='<div mxv mxa="_zs_galleryee:_" class="pr pr120"><div mx-view="examples/subs?list='+m(i,[{name:"使用示例",key:f+"_demo",subs:[{name:"事件处理",key:f+"_demo8"},{name:"刻度(保留位数)",key:f+"_demo6"},{name:"显示刻度点",key:f+"_demo11"},{name:"禁用",key:f+"_demo7"},{name:"垂直方向",key:f+"_demo9"}]},{name:"API",key:f+"_api"},{name:"Event",key:f+"_event"}])+'"></div><div id="'+t(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryee:a" class="clearfix mb20"><div mxa="_zs_galleryee:b" class="_zs_galleryd"><div mx-view="mx-slider/examples/8" id="'+t(f)+'_demo8"></div><div mx-view="mx-slider/examples/7" id="'+t(f)+'_demo7"></div></div><div mxa="_zs_galleryee:c" class="_zs_galleryd"><div mx-view="mx-slider/examples/6" id="'+t(f)+'_demo6"></div><div mx-view="mx-slider/examples/11" id="'+t(f)+'_demo11"></div><div mx-view="mx-slider/examples/9" id="'+t(f)+'_demo9"></div></div></div><div id="'+t(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+m(i,_)+'"></div><div id="'+t(f)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+m(i,k)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"min",desc:"区间最小值，保留小数位同step",type:"number",def:0},{key:"max",desc:"区间最大值，保留小数位同step",type:"number",def:100},{key:"step",desc:"步长，滑动时变化的刻度",type:"number",def:1},{key:"value",desc:"逗号分隔最小值和最大值",type:"string",def:"取0,50%"},{key:"need-input",desc:"是否需要输入框，横向时才有，width不包含输入框宽度",type:"boolean",def:"false"},{key:"width",desc:"滑块宽度",type:"number",def:280},{key:"vertical",desc:"是否垂直",type:"boolean",def:"border"},{key:"height",desc:"滑块高度，vertical=true时可设置",type:"number",def:280},{key:"disabled",desc:"是否禁用",type:"",def:"false"},{key:"show-dot",desc:"是否显示刻度点",type:"boolean",def:"false"}],events:[{type:"change",desc:"刻度变化（输入框调整或者拖动滑轴）时触发",params:[{key:"start",desc:"开始刻度",type:"number"},{key:"end",desc:"结束刻度",type:"number"},{key:"value",desc:"[start, end]",type:"array"}]}]})}})});