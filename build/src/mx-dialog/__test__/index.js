define("mx-dialog/__test__/index",["magix","$","__test__/subs","mx-title/second","./3","./12","./5","./2","./1","./6","./7","./8","./4","./options"],(t,e,i)=>{t("__test__/subs"),t("mx-title/second"),t("./3"),t("./12"),t("./5"),t("./2"),t("./1"),t("./6"),t("./7"),t("./8"),t("./4"),t("./options");var d=t("magix");t("$");i.exports=d.View.extend({tmpl:function(t,e,i,d,o,_,m,a){if(i||(i=t),!o){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,l=function(t){return"&"+n[t]+";"};o=function(t){return""+(null==t?"":t)},d=function(t){return o(t).replace(s,l)}}if(!_){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(t){return r[t]},x=/[!')(*]/g;_=function(t){return encodeURIComponent(o(t)).replace(x,v)}}if(!a){var g=/[\\'"]/g;a=function(t){return o(t).replace(g,"\\$&")}}m||(m=function(t,e,i,d){for(d=t[c];--d;)if(t[i=c+d]===e)return i;return t[i=c+t[c]++]=e,i});var c="",p="",w=t.viewId;return p+='<div mxa="_zs_galleryaJ:_" class="pr pr120"><div mx-view="__test__/subs?list='+m(i,[{name:"使用示例",key:w+"_demo",subs:[{name:"mxDialog",key:w+"_demo3"},{name:"指定target+offset",key:w+"_demo12"},{name:"获取dialog实例",key:w+"_demo5"},{name:"alert警告",key:w+"_demo1"},{name:"confirm二次确认",key:w+"_demo2"},{name:"dialog内配置属性",key:w+"_demo6"},{name:"afterClose",key:w+"_demo7"},{name:"beforeClose",key:w+"_demo8"},{name:"内容分组",key:w+"_demo4"}]},{name:"View Methods",key:w+"_method"},{name:"dialogOptions",key:w+"_options"}])+'"></div><div id="'+d(w)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryaJ:a" class="clearfix mb20"><div mx-view="mx-dialog/__test__/3" id="'+d(w)+'_demo3"></div><div mx-view="mx-dialog/__test__/12" id="'+d(w)+'_demo12"></div><div mx-view="mx-dialog/__test__/5" id="'+d(w)+'_demo5"></div><div mx-view="mx-dialog/__test__/2" id="'+d(w)+'_demo2"></div><div mx-view="mx-dialog/__test__/1" id="'+d(w)+'_demo1"></div><div mx-view="mx-dialog/__test__/6" id="'+d(w)+'_demo6"></div><div mx-view="mx-dialog/__test__/7" id="'+d(w)+'_demo7"></div><div mx-view="mx-dialog/__test__/8" id="'+d(w)+'_demo8"></div><div mx-view="mx-dialog/__test__/4" id="'+d(w)+'_demo4"></div></div><div id="'+d(w)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryaJ:_" class="pr20 mb40"><table class="table _zs_galleryr"><thead><tr><th width="200">方法名</th><th width="200">说明</th><th width="300">预览</th></tr></thead><tbody><tr><td>mxDialog(viewPath, [viewOptions], [dialogOptions])</td><td>自定义浮层</td><td></td></tr><tr><td>alert(title, content, [enterCallback], [dialogOptions])</td><td>警告小浮层</td><td></td></tr><tr><td>confirm(viewOptions, [dialogOptions])</td><td>二次确认浮层</td><td></td></tr><tr><td>mxDialogGroup(viewOptions, [dialogOptions])</td><td>内容分组浮层</td><td><img class="w360" src="https://img.alicdn.com/tfs/TB1vxEOgAvoK1RjSZFwXXciCFXa-631-423.gif"/></td></tr><tr><td>mxCloseAllDialogs()</td><td>关闭当前所有展开的浮层</td><td></td></tr></tbody></table></div><div id="'+d(w)+'_options" mx-view="mx-title/second?content=dialogOptions%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0"></div><div mxs="_zs_galleryaJ:a" class="mb40" mx-view="mx-dialog/__test__/options"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});