define("examples/pro/menu",["magix","$","../subs","mx-title/second","./menu-desc","./menu1","./menu3","./menu2","./menu5","./menu4","./menu-custom-desc","./menu-custom1","./menu-custom3","./menu-custom5","./menu-custom2","./menu-custom4"],(e,m,E)=>{e("../subs"),e("mx-title/second"),e("./menu-desc"),e("./menu1"),e("./menu3"),e("./menu2"),e("./menu5"),e("./menu4"),e("./menu-custom-desc"),e("./menu-custom1"),e("./menu-custom3"),e("./menu-custom5"),e("./menu-custom2"),e("./menu-custom4");var n=e("magix");e("$");E.exports=n.View.extend({tmpl:function(e,m,E,n,u,i,s,t){if(E||(E=e),!u){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},A=/[&<>"'`]/g,B=function(e){return"&"+d[e]+";"};u=function(e){return""+(null==e?"":e)},n=function(e){return u(e).replace(A,B)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},a=/[!')(*]/g;i=function(e){return encodeURIComponent(u(e)).replace(a,o)}}if(!t){var v=/[\\'"]/g;t=function(e){return u(e).replace(v,"\\$&")}}s||(s=function(e,m,E,n){for(n=e[r];--n;)if(e[E=r+n]===m)return E;return e[E=r+e[r]++]=m,E});var r="",l="",x=e.viewId;return l+='<div mxa="_zs_galleryI:_" class="pr pr120"><div mx-view="examples/subs?list='+s(E,[{name:"导航可见菜单",key:x+"_menu",subs:[{name:"侧边二级",key:x+"_menu1"},{name:"侧边三级",key:x+"_menu2"},{name:"自定义侧边",key:x+"_menu3"},{name:"无侧边深底",key:x+"_menu4"},{name:"无侧边白底",key:x+"_menu5"}]},{name:"自定义菜单",key:x+"_custom",subs:[{name:"映射三级",key:x+"_custom3"},{name:"一级+自定义侧边",key:x+"_custom5"},{name:"一级+无侧边",key:x+"_custom2"},{name:"自定义容器",key:x+"_custom4"}]}])+'"></div><div id="'+n(x)+'_menu" mx-view="mx-title/second?content=%E5%AF%BC%E8%88%AA%E5%8F%AF%E8%A7%81%E8%8F%9C%E5%8D%95%E9%85%8D%E7%BD%AE&tip=%E5%85%A5%E5%8F%A3%E5%9C%A8%E5%AF%BC%E8%88%AA%E4%B8%8A%E7%9A%84%E9%A1%B5%E9%9D%A2%EF%BC%8C%E5%8F%AF%E4%BB%A5%E4%B8%BA%E5%A4%B4%E9%83%A8%E4%B8%80%E7%BA%A7%EF%BC%8C%E6%88%96%E8%80%85%E4%B8%BA%E4%BE%A7%E8%BE%B9%E4%BA%8C%E7%BA%A7%E6%88%96%E8%80%85%E4%B8%89%E7%BA%A7%EF%BC%8C%E4%B8%BA%E4%BA%86%E5%A4%84%E7%90%86%E6%96%B9%E4%BE%BF%E4%BE%A7%E8%BE%B9%E5%8F%AF%E7%82%B9%E9%83%BD%E6%98%AF%E4%B8%89%E7%BA%A7"></div><div mxs="_zs_galleryI:_" mx-view="examples/pro/menu-desc" class="mb20"></div><div mxa="_zs_galleryI:a" class="clearfix mb20"><div mxa="_zs_galleryI:b" class="_zs_galleryd"><div mx-view="examples/pro/menu1" id="'+n(x)+'_menu1"></div><div mx-view="examples/pro/menu3" id="'+n(x)+'_menu3"></div></div><div mxa="_zs_galleryI:c" class="_zs_galleryd"><div mx-view="examples/pro/menu2" id="'+n(x)+'_menu2"></div><div mx-view="examples/pro/menu5" id="'+n(x)+'_menu5"></div><div mx-view="examples/pro/menu4" id="'+n(x)+'_menu4"></div></div></div><div id="'+n(x)+'_custom" mx-view="mx-title/second?content=%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8F%9C%E5%8D%95%E9%85%8D%E7%BD%AE&tip=%E5%85%A5%E5%8F%A3%E5%9C%A8%E4%B8%8D%E5%9C%A8%E5%AF%BC%E8%88%AA%E4%B8%8A%EF%BC%8C%E4%BB%8E%E5%85%B7%E4%BD%93%E7%9A%84%E6%9F%90%E4%B8%AA%E9%A1%B5%E9%9D%A2%E7%82%B9%E5%87%BB%E8%BF%9B%E5%85%A5%EF%BC%8C%E5%8F%AF%E8%83%BD%E9%9C%80%E8%A6%81%E6%98%A0%E5%B0%84%E5%88%B0%E5%AF%BC%E8%88%AA%E7%9A%84%E6%9F%90%E4%B8%AA%E4%BD%8D%E7%BD%AE%E4%B8%8A"></div><div mxs="_zs_galleryI:a" mx-view="examples/pro/menu-custom-desc" class="mb20"></div><div mx-view="examples/pro/menu-custom1?parentId='+i(x)+'" class="mb20"></div><div mx-view="examples/pro/menu-custom3" id="'+n(x)+'_custom3"></div><div mx-view="examples/pro/menu-custom5" id="'+n(x)+'_custom5"></div><div mx-view="examples/pro/menu-custom2" id="'+n(x)+'_custom2"></div><div mx-view="examples/pro/menu-custom4" id="'+n(x)+'_custom4"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});