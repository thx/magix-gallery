define("mx-table/examples/index7",["magix","$","examples/subs","mx-title/second","./15","./14"],(e,t,i)=>{e("examples/subs"),e("mx-title/second"),e("./15"),e("./14");var d=e("magix");e("$");i.exports=d.View.extend({tmpl:function(e,t,i,d,n,a,r,l){if(i||(i=e),!n){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,m=function(e){return"&"+v[e]+";"};n=function(e){return""+(null==e?"":e)},d=function(e){return n(e).replace(s,m)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return o[e]},p=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(p,u)}}if(!l){var c=/[\\'"]/g;l=function(e){return n(e).replace(c,"\\$&")}}r||(r=function(e,t,i,d){for(d=e[x];--d;)if(e[i=x+d]===t)return i;return e[i=x+e[x]++]=t,i});var x="",h="",_=e.viewId;return h+='<div mxa="_zs_gallerye{:_" class="pr pr120"><div mx-view="examples/subs?list='+r(i,[{name:"使用示例",key:_+"_demo",subs:[{name:"实时获取",key:_+"_demo15"},{name:"一次性获取",key:_+"_demo14"}]},{name:"Methods",key:_+"_method",subs:[{name:"getStoreState",key:_+"_method"},{name:"clearStoreState",key:_+"_method"}]}])+'"></div><div id="'+d(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerye{:a" class="clearfix mb20"><div mx-view="mx-table/examples/15" id="'+d(_)+'_demo15"></div><div mx-view="mx-table/examples/14" id="'+d(_)+'_demo14"></div></div><div id="'+d(_)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerye{:_" class="pr20"><table class="table _zs_galleryq"><thead><tr><th width="100">方法名</th><th width="200">说明</th></tr></thead><tbody><tr><td>this.getStoreState([parent:string])</td><td><div>parent：父节点input.attr(\'linkage\')</div><div>有：获取父节点为该值的所有选中项</div><div>无：获取已配置的所有input的选中项</div></td></tr><tr><td>this.clearStoreState([parent:string, [child:string]])</td><td><div>parent：父节点input.attr(\'linkage\')</div><div>有：清空父节点为该值的所有选中项</div><div>无：清空已配置的所有input的选中项</div><br/><div>child：子节点input.attr(\'value\')</div><div>有：清楚选项input.attr(\'value\') == child && input.attr(\'linkage-parent\') == parent</div></td></tr></tbody></table></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});