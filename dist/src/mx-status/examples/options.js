define("mx-status/examples/options",["magix","$","mx-title/second","examples/api"],(e,n,t)=>{e("mx-title/second"),e("examples/api");var i=e("magix");e("$");t.exports=i.View.extend({tmpl:function(e,n,t,i,o,r,c,p){if(t||(t=e),!o){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,l=function(e){return"&"+s[e]+";"};o=function(e){return""+(null==e?"":e)},function(e){return o(e).replace(a,l)}}if(!r){var f={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return f[e]},d=/[!')(*]/g;r=function(e){return encodeURIComponent(o(e)).replace(d,u)}}if(!p){var x=/[\\'"]/g;p=function(e){return o(e).replace(x,"\\$&")}}c||(c=function(e,n,t,i){for(i=e[m];--i;)if(e[t=m+i]===n)return t;return e[t=m+e[m]++]=n,t});var m="",v="";return v+='<div mxs="_zs_galleryd?:_" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+c(t,e.options)+'"></div>'},render:function(){this.updater.digest({options:[{key:"opers",desc:"<pre>可选操作项列表：\n[{\n    value: '状态值',\n    text: '状态文案',\n    icon: 'iconfont图标，如&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe67f;&lt;/i&gt;',\n    color: '图标显示颜色'\n}]\n</pre>",type:"array",def:"[]"},{key:"selected",desc:"当前操作项选中值",type:"string",def:"opers[0].value"},{key:"info",desc:"<pre>额外的提示信息：\n{\n    value: '状态值',\n    text: '状态文案',\n    icon: 'iconfont图标，如&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe67f;&lt;/i&gt;',\n    color: '图标显示颜色',\n    tip: '提示信息内容'\n}\n</pre>",type:"object",def:"{}"}]})}})});