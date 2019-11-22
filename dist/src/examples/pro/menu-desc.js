define("examples/pro/menu-desc",["magix","$"],(n,e,t)=>{var i=n("magix");n("$");t.exports=i.View.extend({tmpl:function(n,e,t,i,u,r,a,s){if(t||(t=n),!u){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(n){return"&"+o[n]+";"};u=function(n){return""+(null==n?"":n)},function(n){return u(n).replace(c,d)}}if(!r){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(n){return p[n]},m=/[!')(*]/g;r=function(n){return encodeURIComponent(u(n)).replace(m,l)}}if(!s){var f=/[\\'"]/g;s=function(n){return u(n).replace(f,"\\$&")}}return"<pre mxs=\"_zs_galleryH:_\" class=\"tip-content mr20\">// 关于如何配置menu.js中Menus字段\n// 导航上可见的菜单配置\nlet Menus = [{\n    has: true,  // 头部菜单权限，必填，不需控制权限给true即可\n    id: 'basic', // 唯一标识，如果有定制的打标需求等，可自定义，默认为Magix.guid()\n    name: '一级标题',  // 头部菜单文案，必填\n    path: '/develop/innav',  // 点击头部菜单的访问路径，必填\n    custom: true, // 自定义页面结构，padding为0，深底色背景，需要的时候配置custom: true即可\n    subs: [{  // 二三级菜单分组，可选\n        name: '二级标题',  // 二级分组标题，没有可不配置，可选\n        icon: '&#38;&#35;xe786;' // 二级菜单iconfont值，没有可不配置\n        thirds: [{\n            has: true,  // 三级菜单权限，权限由三级往上汇总，无权限的剔除，必填，不需控制权限给true即可\n            id: 'innav', // 三级菜单唯一标识，如果有定制的打标需求等，可自定义，默认为Magix.guid()\n            name: '三级标题', // 三级菜单标题，必填\n            path: '/develop/innav',  // 三级菜单访问路径，必填\n            icon: '&#38;&#35;xe786;' // 三级菜单iconfont值，没有可不配置\n        }]\n    }],\n    leftView: '/develop/custom-side' // 该导航侧边栏对应的是一个自定义的view，暂时subs与leftView互斥\n}]</pre>","<pre mxs=\"_zs_galleryH:_\" class=\"tip-content mr20\">// 关于如何配置menu.js中Menus字段\n// 导航上可见的菜单配置\nlet Menus = [{\n    has: true,  // 头部菜单权限，必填，不需控制权限给true即可\n    id: 'basic', // 唯一标识，如果有定制的打标需求等，可自定义，默认为Magix.guid()\n    name: '一级标题',  // 头部菜单文案，必填\n    path: '/develop/innav',  // 点击头部菜单的访问路径，必填\n    custom: true, // 自定义页面结构，padding为0，深底色背景，需要的时候配置custom: true即可\n    subs: [{  // 二三级菜单分组，可选\n        name: '二级标题',  // 二级分组标题，没有可不配置，可选\n        icon: '&#38;&#35;xe786;' // 二级菜单iconfont值，没有可不配置\n        thirds: [{\n            has: true,  // 三级菜单权限，权限由三级往上汇总，无权限的剔除，必填，不需控制权限给true即可\n            id: 'innav', // 三级菜单唯一标识，如果有定制的打标需求等，可自定义，默认为Magix.guid()\n            name: '三级标题', // 三级菜单标题，必填\n            path: '/develop/innav',  // 三级菜单访问路径，必填\n            icon: '&#38;&#35;xe786;' // 三级菜单iconfont值，没有可不配置\n        }]\n    }],\n    leftView: '/develop/custom-side' // 该导航侧边栏对应的是一个自定义的view，暂时subs与leftView互斥\n}]</pre>"},render:function(){this.updater.digest({})}})});