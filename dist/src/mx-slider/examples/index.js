define("mx-slider/examples/index",["magix","$","examples/subs","mx-title/second","./1","./5","./2","./3","./4","examples/api","examples/event"],(e,i,d)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./5"),e("./2"),e("./3"),e("./4"),e("examples/api"),e("examples/event");var s=e("magix");e("$");d.exports=s.View.extend({tmpl:function(e,i,d,s,t,n,m,a){if(d||(d=e),!t){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,r=function(e){return"&"+v[e]+";"};t=function(e){return""+(null==e?"":e)},s=function(e){return t(e).replace(l,r)}}if(!n){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return p[e]},o=/[!')(*]/g;n=function(e){return encodeURIComponent(t(e)).replace(o,x)}}if(!a){var c=/[\\'"]/g;a=function(e){return t(e).replace(c,"\\$&")}}m||(m=function(e,i,d,s){for(s=e[y];--s;)if(e[d=y+s]===i)return d;return e[d=y+e[y]++]=i,d});var y="",u="",f=e.viewId,_=e.options,k=e.events;return u+='<div mxv mxa="_zs_galleryd^:_" class="pr pr120"><div mx-view="examples/subs?list='+m(d,[{name:"使用示例",key:f+"_demo",subs:[{name:"输入框+单位",key:f+"_demo1"},{name:"刻度",key:f+"_demo2"},{name:"禁用",key:f+"_demo3"},{name:"垂直",key:f+"_demo4"},{name:"范围修正",key:f+"_demo5"}]},{name:"API",key:f+"_api"},{name:"Event",key:f+"_event"}])+'"></div><div id="'+s(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryd^:a" class="clearfix mb20"><div mxa="_zs_galleryd^:b" class="_zs_galleryd"><div mx-view="mx-slider/examples/1" id="'+s(f)+'_demo1"></div><div mx-view="mx-slider/examples/5" id="'+s(f)+'_demo5"></div></div><div mxa="_zs_galleryd^:c" class="_zs_galleryd"><div mx-view="mx-slider/examples/2" id="'+s(f)+'_demo2"></div><div mx-view="mx-slider/examples/3" id="'+s(f)+'_demo3"></div><div mx-view="mx-slider/examples/4" id="'+s(f)+'_demo4"></div></div></div><div id="'+s(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+m(d,_)+'" class="mb40"></div><div id="'+s(f)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+m(d,k)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"min",desc:"区间最小值，保留小数位同step",type:"number",def:0},{key:"max",desc:"区间最大值，保留小数位同step",type:"number",def:100},{key:"step",desc:"步长，滑动时变化的刻度",type:"number",def:1},{key:"value",desc:"滑块当前值，超过可选范围会根据可选范围进行修正",type:"string",def:"默认取中间值"},{key:"need-input",desc:"是否需要输入框，横向时才有，width不包含输入框宽度",type:"boolean",def:"false"},{key:"width",desc:"滑块宽度，横向时可设置",type:"number",def:280},{key:"vertical",desc:"是否垂直",type:"boolean",def:"false"},{key:"height",desc:"滑块高度，纵向时（vertical=true）可设置",type:"number",def:280},{key:"disabled",desc:"是否禁用",type:"",def:"false"},{key:"tip",desc:"提示文案",type:"",def:""}],events:[{type:"change",desc:"刻度变化（输入框调整或者拖动滑轴）时触发",params:[{key:"value",desc:"当前刻度值",type:"number"}]}]})}})});