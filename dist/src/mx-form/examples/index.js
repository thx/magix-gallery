define("mx-form/examples/index",["magix","examples/subs","mx-title/second","./17"],(i,d,e)=>{i("examples/subs"),i("mx-title/second"),i("./17");var v=i("magix");e.exports=v.View.extend({tmpl:function(i,d,e,v,t,n,r,m){if(e||(e=i),!t){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,x=function(i){return"&"+s[i]+";"};t=function(i){return""+(null==i?"":i)},v=function(i){return t(i).replace(a,x)}}if(!n){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(i){return l[i]},o=/[!')(*]/g;n=function(i){return encodeURIComponent(t(i)).replace(o,c)}}if(!m){var u=/[\\'"]/g;m=function(i){return t(i).replace(u,"\\$&")}}r||(r=function(i,d,e,v){for(v=i[p];--v;)if(i[e=p+v]===d)return e;return i[e=p+i[p]++]=d,e});var p="",E="",f=i.viewId;return E+='<div mxa="_zs_gallerycw:_" class="pr pr120"><div mx-view="examples/subs?list='+r(e,[{name:"使用示例",key:f+"_demo"},{name:"支持双向绑定的组件",key:f+"_api"}])+'"></div><div id="'+v(f)+'_demo" mx-view="mx-title/second?content=%E5%AE%8C%E6%95%B4%E8%A1%A8%E5%8D%95%E5%BA%94%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerycw:_" class="clearfix mb20"><div mx-view="mx-form/examples/17"></div></div><div id="'+v(f)+'_api" mx-view="mx-title/second?content=%E6%94%AF%E6%8C%81%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E7%9A%84%E7%BB%84%E4%BB%B6"></div><div mxs="_zs_gallerycw:a" class="lh22 mb40"><div>1. dropdown</div><div class="pl15"><div>1.1 单选</div><div>1.2 多选（传入数组即为数组，传入逗号分隔即为逗号分隔，默认逗号分隔）</div></div><div>2. 日历</div><div class="pl15"><div>1.1 单日</div><div>1.2 时间段（开始时间，结束时间，是否对比）</div></div><div>3. 开关</div><div>4. mx-taginput：标签选择</div><div>5. mx-cascade：级联选择</div><div>6. mx-time：时分秒选择</div><div>7. mx-suggest：可选项提示</div><div>8. mx-color：颜色选择</div><div>9. mx-tree：树状结构</div><div>10. mx-tabs：底边线tab切换</div><div>11. mx-tabs.box：盒状分组</div><div>11. mx-edit：可编辑内容</div></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});