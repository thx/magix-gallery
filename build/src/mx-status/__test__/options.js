define("mx-status/__test__/options",["magix","$","mx-title/second","__test__/api"],(t,e,n)=>{t("mx-title/second"),t("__test__/api");var i=t("magix");t("$");n.exports=i.View.extend({tmpl:function(t,e,n,i,o,r,c,s){if(n||(n=t),!o){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},f=/[&<>"'`]/g,a=function(t){return"&"+p[t]+";"};o=function(t){return""+(null==t?"":t)},function(t){return o(t).replace(f,a)}}if(!r){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(t){return l[t]},d=/[!')(*]/g;r=function(t){return encodeURIComponent(o(t)).replace(d,u)}}if(!s){var _=/[\\'"]/g;s=function(t){return o(t).replace(_,"\\$&")}}c||(c=function(t,e,n,i){for(i=t[x];--i;)if(t[n=x+i]===e)return n;return t[n=x+t[x]++]=e,n});var x="",m="";return m+='<div mxs="_zs_galleryd8:_" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+c(n,t.options)+'"></div>'},render:function(){this.updater.digest({options:[{key:"opers",desc:"<pre>可选操作项列表：\n[{\n    value: '状态值',\n    text: '状态文案',\n    icon: 'iconfont图标，如&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe67f;&lt;/i&gt;',\n    color: '图标显示颜色'\n}]\n</pre>",type:"array",def:"[]"},{key:"selected",desc:"当前操作项选中值",type:"string",def:"opers[0].value"},{key:"info",desc:"<pre>额外的提示信息：\n{\n    value: '状态值',\n    text: '状态文案',\n    icon: 'iconfont图标，如&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe67f;&lt;/i&gt;',\n    color: '图标显示颜色',\n    tip: '提示信息内容'\n}\n</pre>",type:"object",def:"{}"}]})}})});