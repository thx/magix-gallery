define("mx-table/examples/20",["magix","examples/example","mx-checkbox/storestate","mx-checkbox/linkage","$","../index","mx-pagination/index","mx-copy/index","examples/hl"],(e,a,l)=>{e("../index"),e("mx-pagination/index"),e("mx-copy/index"),e("examples/hl");e("magix");var t=e("examples/example"),s=e("mx-checkbox/storestate"),i=e("mx-checkbox/linkage");e("$");l.exports=t.extend({tmpl:function(e,a,l,t,s,i,r,n){if(l||(l=e),!s){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+x[e]+";"};s=function(e){return""+(null==e?"":e)},t=function(e){return s(e).replace(c,d)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return _[e]},g=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(g,m)}}if(!n){var o=/[\\'"]/g;n=function(e){return s(e).replace(o,"\\$&")}}var p="",v=e.selected,y=e.list,h=e.total,z=e.size,u=e.page,b=e.viewId,f=e.text1,k=e.text2;p+='<div mxv mxa="_zs_gallerye3:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerye3:a" class="_zs_galleryj"><div mxa="_zs_gallerye3:b" class="mb20"><a mxs="_zs_gallerye3:_" href="javascript:;" mx-click="'+a+'clear()" class="btn btn-brand mr20">清空所有选中</a><a mxs="_zs_gallerye3:a" href="javascript:;" mx-click="'+a+'get()" class="btn btn-brand mr20">获取选中值</a><span mxs="_zs_gallerye3:b" class="color-9">当前选中：</span>'+t(v)+'</div><div mxv mxa="_zs_gallerye3:c" mx-view="mx-table/index?sticky=true"><div mxv><table mxv mxa="_zs_gallerye3:d" class="table"><thead mxv><tr mxv><th mxv mxa="_zs_gallerye3:e" width="50"><input mxs="_zs_gallerye3:c" type="checkbox" class="checkbox" linkage="example"/></th><th mxs="_zs_gallerye3:d" width="200">列1</th><th mxs="_zs_gallerye3:e" width="200">列2</th><th mxs="_zs_gallerye3:f" width="200">列3</th></tr></thead><tbody mxv>';for(var w=0,S=y.length;w<S;w++){var j=y[w];p+='<tr mxv><td mxv><input type="checkbox" class="checkbox" linkage-parent="example" value="'+t(j.id)+'" ',j.disabled&&(p+=' disabled="true" '),p+="/></td><td>"+t(j.content1)+"</td><td>"+t(j.content2)+"</td><td>"+t(j.content3)+"</td></tr>"}return p+='</tbody></table></div></div><div class="table-pager-wrapper" mx-change="'+a+'changePager()" mx-view="mx-pagination/index?total='+i(h)+"&size="+i(z)+"&page="+i(u)+'"></div></div><div mxa="_zs_gallerye3:f" class="clearfix"><div mxa="_zs_gallerye3:g" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerye3:g" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(b)+'_text_1"><span mxa="_zs_gallerye3:h" class="_zs_galleryn">'+s(f)+'</span><i mxs="_zs_gallerye3:h" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(b)+'_text_1">\n                123\n            </pre></div><div mxa="_zs_gallerye3:i" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_gallerye3:i" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(b)+'_text_2"><span mxa="_zs_gallerye3:j" class="_zs_galleryn">'+s(k)+'</span><i mxs="_zs_gallerye3:h" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(b)+'_text_2">\n                123\n            </pre></div></div></div>'},mixins:[s,i],render:function(){for(var e=[],a=0;a<20;a++)e.push({id:a,disabled:a%2==0,content1:a+"_列1",content2:a+"_列2",content3:a+"_列3"});var l=e.length;e.slice(0,5);this.updater.digest({allList:e,list:[],size:5,page:1,total:l,selected:[]})},"changePager<change>":function(e){var a=+e.page,l=this.updater.get("allList").slice(5*(a-1),5*a);this.updater.digest({list:l,page:a})},"get<click>":function(e){var a=this.getStoreState("example");this.updater.digest({selected:a})},"clear<click>":function(e){this.clearStoreState("example"),this.updater.digest({selected:""})}})});