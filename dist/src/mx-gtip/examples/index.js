define("mx-gtip/examples/index",["magix","$","examples/subs","mx-title/second","./1","./2","./3"],(e,i,t)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./3");var d=e("magix");e("$");t.exports=d.View.extend({tmpl:function(e,i,t,d,n,r,s,m){if(t||(t=e),!n){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,l=function(e){return"&"+o[e]+";"};n=function(e){return""+(null==e?"":e)},d=function(e){return n(e).replace(a,l)}}if(!r){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return v[e]},c=/[!')(*]/g;r=function(e){return encodeURIComponent(n(e)).replace(c,p)}}if(!m){var x=/[\\'"]/g;m=function(e){return n(e).replace(x,"\\$&")}}s||(s=function(e,i,t,d){for(d=e[g];--d;)if(e[t=g+d]===i)return t;return e[t=g+e[g]++]=i,t});var g="",u="",_=e.viewId;return u+='<div mxa="_zs_gallerycV:_" class="pr pr120"><div mx-view="examples/subs?list='+s(t,[{name:"使用示例",key:_+"_demo",subs:[{name:"单实例",key:_+"_demo1"},{name:"多实例",key:_+"_demo2"},{name:"快捷使用",key:_+"_demo3"}]},{name:"Methods",key:_+"_method"}])+'"></div><div id="'+d(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycV:a" class="clearfix mb20"><div mx-view="mx-gtip/examples/1" id="'+d(_)+'_demo1"></div><div mx-view="mx-gtip/examples/2" id="'+d(_)+'_demo2"></div><div mx-view="mx-gtip/examples/3" id="'+d(_)+'_demo3"></div></div><div id="'+d(_)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerycV:_" class="pr20 mb40"><table class="table _zs_galleryq"><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>gtip(msg [, options])</td><td class="lh22"><div>1. msg（String）：提示信息内容</div><div>2. options（PlainObject），可配参数如下：</div><div class="pl10"><div>a. timeout（Number or String）：延时自动关闭，设置的时候timeout后自动关闭，不设置的时候显示关闭按钮手动关闭</div><div>b. type（String）：error：红色错误类型提示；warn：黄色警告类型提示；pass：绿色通过类型提示；highlight：品牌色图标强调提示；common：默认黑底透明度提示</div><div>c. singleton（Boolean）：是否为单实例，默认true，singleton=false的可与其他gtip共存，否则当前view只有一个gtip</div><div>d. styles（PlainObject）：驼峰，直接覆盖样式，默认内容如下：</div><pre>\n    styles: { \n        position: \'fixed\',\n        top: \'0px\',\n        left: \'0px\',\n        width: \'100%\'  \n    }\n                            </pre></div></td></tr><tr><td>gtip(msg [, timeout])</td><td class="lh22"><div>1. msg（String）：提示信息内容</div><div>2. timeout（Number or String）：延时自动关闭，设置的时候timeout后自动关闭，不设置的时候显示关闭按钮手动关闭</div></td></tr></tbody></table></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});