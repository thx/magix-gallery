define("mx-table/examples/15",["magix","examples/example","mx-checkbox/storestate","mx-checkbox/linkage","$","../index","mx-pagination/index","mx-copy/index","examples/hl"],(e,t,l)=>{e("../index"),e("mx-pagination/index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example"),n=e("mx-checkbox/storestate"),s=e("mx-checkbox/linkage");e("$");l.exports=a.extend({tmpl:function(e,t,l,a,n,s,i,g){if(l||(l=e),!n){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,d=function(e){return"&"+c[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(r,d)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},p=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(p,m)}}if(!g){var o=/[\\'"]/g;g=function(e){return n(e).replace(o,"\\$&")}}var h="",_=e.selected,u=e.list,v=e.total,y=e.size,z=e.page,b=e.viewId,k=e.text1,f=e.text2;h+='<div mxv mxa="_zs_galleryeu:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryeu:a" class="_zs_galleryj"><div mxs="_zs_galleryeu:_" class="mb20"><span class="color-9">以下示例：</span>实时反馈当前选中项</div><div mxa="_zs_galleryeu:b" class="mb20"><a mxs="_zs_galleryeu:a" href="javascript:;" mx-click="'+t+'clear()" class="btn btn-brand mr20">清空所有选中</a><span mxs="_zs_galleryeu:b" class="color-9">当前选中：</span>'+a(_)+'</div><div mxv mxa="_zs_galleryeu:c" mx-view="mx-table/index?sticky=true"><div mxv><table mxv mxa="_zs_galleryeu:d" class="table"><thead mxv><tr mxv><th mxv mxa="_zs_galleryeu:e" width="50"><input mxs="_zs_galleryeu:c" type="checkbox" class="checkbox" linkage="example" mx-change="'+t+'get()"/></th><th mxs="_zs_galleryeu:d" width="200">列1</th><th mxs="_zs_galleryeu:e" width="200">列2</th><th mxs="_zs_galleryeu:f" width="200">列3</th></tr></thead><tbody mxv>';for(var w=0,L=u.length;w<L;w++){var S=u[w];h+='<tr mxv><td mxv><input type="checkbox" class="checkbox" linkage-parent="example" value="'+a(S.id)+'" mx-change="'+t+'get()"/></td><td>'+a(S.content1)+"</td><td>"+a(S.content2)+"</td><td>"+a(S.content3)+"</td></tr>"}return h+='</tbody></table></div></div><div class="table-pager-wrapper" mx-change="'+t+'changePager()" mx-view="mx-pagination/index?total='+s(v)+"&size="+s(y)+"&page="+s(z)+'"></div></div><div mxa="_zs_galleryeu:f" class="clearfix"><div mxa="_zs_galleryeu:g" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryeu:g" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(b)+'_text_1"><span mxa="_zs_galleryeu:h" class="_zs_galleryn">'+n(k)+'</span><i mxs="_zs_galleryeu:h" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(b)+'_text_1">\n&lt;div class="mb20"&gt;\n    &lt;a href="javascript:;" class="btn btn-brand mr20"\n        mx-click="clear()"&gt;清空所有选中&lt;/a&gt;\n\n    &lt;span class="color-9"&gt;当前选中：&lt;/span&gt;&#123;&#123;=selected&#125;&#125;\n&lt;/div&gt;\n&lt;mx-table sticky="true"&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th width="50"&gt;\n                    &lt;input type="checkbox" class="checkbox" linkage="example" mx-change="get()"/&gt;\n                &lt;/th&gt;\n                &lt;th width="200"&gt;列1&lt;/th&gt;\n                &lt;th width="200"&gt;列2&lt;/th&gt;\n                &lt;th width="200"&gt;列3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n            &lt;tr&gt;\n                &lt;td&gt;\n                    &lt;input type="checkbox" class="checkbox" \n                        linkage-parent="example" \n                        value="&#123;&#123;=item.id&#125;&#125;" mx-change="get()"/&gt;\n                &lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content1&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content2&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content3&#125;&#125;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n&lt;mx-pagination class="table-pager-wrapper"\n    total="&#123;&#123;=total&#125;&#125;" \n    size="&#123;&#123;=size&#125;&#125;" \n    page="&#123;&#123;=page&#125;&#125;"\n    mx-change="changePager()"/&gt;</pre></div><div mxa="_zs_galleryeu:i" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryeu:i" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(b)+'_text_2"><span mxa="_zs_galleryeu:j" class="_zs_galleryn">'+n(f)+'</span><i mxs="_zs_galleryeu:h" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(b)+"_text_2\">\nlet Magix = require('magix');\nlet StoreState = require('@../../mx-checkbox/storestate');\nlet Linkage = require('@../../mx-checkbox/linkage');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [StoreState, Linkage],\n    render() &#123;\n        let that = this;\n        let allList = [];\n        for (var i = 0; i &lt; 20; i++) &#123;\n            allList.push(&#123;\n                id: i,\n                content1: i + '_列1',\n                content2: i + '_列2',\n                content3: i + '_列3'\n            &#125;)\n        &#125;\n        let size = 5,\n            total = allList.length,\n            page = 1;\n        let list = allList.slice(0, 5);\n        that.updater.digest(&#123;\n            allList,\n            list,\n            size,\n            page,\n            total,\n            selected: []\n        &#125;);\n    &#125;,\n\n    'changePager&lt;change&gt;' (e) &#123;\n        // e.page 当前第几页\n        // e.size 每页多少条\n        let that = this;\n        let page = +e.page;\n        let allList = that.updater.get('allList');\n        let list = allList.slice((page - 1) * 5, page * 5);\n        that.updater.digest(&#123;\n            list,\n            page\n        &#125;)\n    &#125;,\n\n    'get&lt;change&gt;' (e) &#123;\n        let selected = this.getStoreState('example');\n        this.updater.digest(&#123;\n            selected: selected\n        &#125;)\n    &#125;,\n\n    'clear&lt;click&gt;' (e) &#123;\n        this.clearStoreState('example');\n        this.updater.digest(&#123;\n            selected: ''\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>"},mixins:[n,s],render:function(){for(var e=[],t=0;t<20;t++)e.push({id:t,content1:t+"_列1",content2:t+"_列2",content3:t+"_列3"});var l=e.length,a=e.slice(0,5);this.updater.digest({allList:e,list:a,size:5,page:1,total:l,selected:[]})},"changePager<change>":function(e){var t=+e.page,l=this.updater.get("allList").slice(5*(t-1),5*t);this.updater.digest({list:l,page:t})},"get<change>":function(e){var t=this.getStoreState("example");this.updater.digest({selected:t})},"clear<click>":function(e){this.clearStoreState("example"),this.updater.digest({selected:""})}})});