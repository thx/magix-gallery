define("mx-table/examples/index7",["magix","$","examples/subs","mx-title/second","./15","./14"],(t,e,i)=>{t("examples/subs"),t("mx-title/second"),t("./15"),t("./14");var d=t("magix");t("$");i.exports=d.View.extend({tmpl:function(t,e,i,d,n,a,r,l){if(i||(i=t),!n){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,m=function(t){return"&"+v[t]+";"};n=function(t){return""+(null==t?"":t)},d=function(t){return n(t).replace(s,m)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(t){return o[t]},p=/[!')(*]/g;a=function(t){return encodeURIComponent(n(t)).replace(p,u)}}if(!l){var c=/[\\'"]/g;l=function(t){return n(t).replace(c,"\\$&")}}r||(r=function(t,e,i,d){for(d=t[x];--d;)if(t[i=x+d]===e)return i;return t[i=x+t[x]++]=e,i});var x="",_="",h=t.viewId;return _+='<div mxa="_zs_galleryf_:_" class="pr pr120"><div mx-view="examples/subs?list='+r(i,[{name:"使用示例",key:h+"_demo",subs:[{name:"实时获取",key:h+"_demo15"},{name:"一次性获取",key:h+"_demo14"}]},{name:"Methods",key:h+"_method",subs:[{name:"getStoreState",key:h+"_method"},{name:"clearStoreState",key:h+"_method"}]}])+'"></div><div id="'+d(h)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryf_:a" class="clearfix mb20"><div mx-view="mx-table/examples/15" id="'+d(h)+'_demo15"></div><div mx-view="mx-table/examples/14" id="'+d(h)+'_demo14"></div></div><div id="'+d(h)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryf_:_" class="pr20"><table class="table _zs_galleryq"><thead><tr><th width="100">方法名</th><th width="200">说明</th></tr></thead><tbody><tr><td>this.getStoreState([parent:string])</td><td><div>parent：父节点input.attr(\'linkage\')</div><div>有：获取父节点为该值的所有选中项</div><div>无：获取已配置的所有input的选中项</div></td></tr><tr><td>this.clearStoreState([parent:string, [child:string]])</td><td><div>parent：父节点input.attr(\'linkage\')</div><div>有：清空父节点为该值的所有选中项</div><div>无：清空已配置的所有input的选中项</div><br/><div>child：子节点input.attr(\'value\')</div><div>有：清楚选项input.attr(\'value\') == child && input.attr(\'linkage-parent\') == parent</div></td></tr></tbody></table></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});