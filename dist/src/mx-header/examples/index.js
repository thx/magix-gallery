define("mx-header/examples/index",["magix","$","examples/subs","mx-title/second","./1","./2","examples/api"],(e,i,n)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./2"),e("examples/api");var t=e("magix");e("$");n.exports=t.View.extend({tmpl:function(e,i,n,t,d,a,r,s){if(n||(n=e),!d){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,p=function(e){return"&"+m[e]+";"};d=function(e){return""+(null==e?"":e)},t=function(e){return d(e).replace(o,p)}}if(!a){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return v[e]},l=/[!')(*]/g;a=function(e){return encodeURIComponent(d(e)).replace(l,c)}}if(!s){var x=/[\\'"]/g;s=function(e){return d(e).replace(x,"\\$&")}}r||(r=function(e,i,n,t){for(t=e[u];--t;)if(e[n=u+t]===i)return n;return e[n=u+e[u]++]=i,n});var u="",f="",g=e.viewId,y=e.options;return f+='<div mxv mxa="_zs_gallerycF:_" class="pr pr120"><div mx-view="examples/subs?list='+r(n,[{name:"使用示例",key:g+"_demo",subs:[{name:"全屏",key:g+"_demo1"},{name:"容器内",key:g+"_demo2"}]},{name:"API",key:g+"_api"}])+'"></div><div id="'+t(g)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycF:a" class="clearfix mb20"><div mx-view="mx-header/examples/1" id="'+t(g)+'_demo1"></div><div mx-view="mx-header/examples/2" id="'+t(g)+'_demo2"></div></div><div id="'+t(g)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+r(n,y)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"width",desc:"导航中间区域宽度，默认1200，会根据屏幕宽度进行修正",type:"number",def:1200},{key:"navs",desc:'导航数组<pre>[{\n    text:"展示文案",\n    value:"value值"\n}]</pre>',type:"array",def:""},{key:"cur",desc:"当前哪个导航，对应navs的value，默认不选中任何一个导航",type:"string",def:""},{key:"wrapper",desc:"导航相对定位的容器节点，默认为window",type:"string",def:""},{key:"logo",desc:"项目logo的图片地址",type:"string",def:'<img width="200" src="//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png">'}]})}})});