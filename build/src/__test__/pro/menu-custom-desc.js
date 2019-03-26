define("__test__/pro/menu-custom-desc",["magix","$"],(n,e,t)=>{var r=n("magix");n("$");t.exports=r.View.extend({tmpl:function(n,e,t,r,a,i,u,o){if(t||(t=n),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,m=function(n){return"&"+s[n]+";"};a=function(n){return""+(null==n?"":n)},function(n){return a(n).replace(l,m)}}if(!i){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(n){return p[n]},f=/[!')(*]/g;i=function(n){return encodeURIComponent(a(n)).replace(f,c)}}if(!o){var d=/[\\'"]/g;o=function(n){return a(n).replace(d,"\\$&")}}return"<pre mxs=\"_zs_galleryv:_\" class=\"tip-content mr20\">// 关于如何配置menu.js中CustomPath字段\n// 不在导航上显示的自定义可访问路径\nlet CustomPath = [{\n    // 权限处理，必填，不需控制权限给true即可\n    has: true,  \n\n    // 页面标题，必填\n    name: '映射到innav',\n    \n    // 页面访问路径，必填\n    path: '/develop/outnav', \n\n    // 是否需要映射到某一个三级菜单\n    // 1. 用户配置了leftView的时候，只映射该三级菜单对应的主导航，侧边加载leftView；\n    // 2. 用户未配置leftView的时候，左侧显示映射导航\n    mapThirdPath: '/develop/innav', \n\n    // 该导航侧边栏对应的是一个自定义的view，暂时与mapThirdPath互斥\n    leftView: '/develop/custom-side', \n\n    // 不需要左侧导航区域，默认为false,\n    ignoreLeft: true \n\n    // 自定义页面结构，padding为0，深底色背景，需要的时候配置custom: true即可\n    custom: true\n}]\n</pre>","<pre mxs=\"_zs_galleryv:_\" class=\"tip-content mr20\">// 关于如何配置menu.js中CustomPath字段\n// 不在导航上显示的自定义可访问路径\nlet CustomPath = [{\n    // 权限处理，必填，不需控制权限给true即可\n    has: true,  \n\n    // 页面标题，必填\n    name: '映射到innav',\n    \n    // 页面访问路径，必填\n    path: '/develop/outnav', \n\n    // 是否需要映射到某一个三级菜单\n    // 1. 用户配置了leftView的时候，只映射该三级菜单对应的主导航，侧边加载leftView；\n    // 2. 用户未配置leftView的时候，左侧显示映射导航\n    mapThirdPath: '/develop/innav', \n\n    // 该导航侧边栏对应的是一个自定义的view，暂时与mapThirdPath互斥\n    leftView: '/develop/custom-side', \n\n    // 不需要左侧导航区域，默认为false,\n    ignoreLeft: true \n\n    // 自定义页面结构，padding为0，深底色背景，需要的时候配置custom: true即可\n    custom: true\n}]\n</pre>"},render:function(){this.updater.digest()}})});