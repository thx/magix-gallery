define("mx-table/__test__/12",["magix","__test__/example","$","mx-table/sub","../index","mx-pagination/index","mx-copy/index","__test__/hl"],(t,e,l)=>{t("../index"),t("mx-pagination/index"),t("mx-copy/index"),t("__test__/hl");var a=t("magix"),s=t("__test__/example"),n=(t("$"),t("mx-table/sub"));l.exports=s.extend({tmpl:function(t,e,l,a,s,n,i,d){if(l||(l=t),!s){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,m=function(t){return"&"+g[t]+";"};s=function(t){return""+(null==t?"":t)},a=function(t){return s(t).replace(r,m)}}if(!n){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(t){return u[t]},c=/[!')(*]/g;n=function(t){return encodeURIComponent(s(t)).replace(c,_)}}if(!d){var p=/[\\'"]/g;d=function(t){return s(t).replace(p,"\\$&")}}var b="",x=t.list,h=t.count,o=t.page,v=t.viewId,y=t.text1,z=t.text2;b+='<div mxa="_zs_gallerydN:_" class="_zs_galleryh"><div mxa="_zs_gallerydN:a" class="_zs_galleryk"><div mxs="_zs_gallerydN:_" class="mb20 clearfix lh22"><div class="fl color-9">以下示例：</div><div class="fl"><div>trigger上配置sub-toggle，<span class="color-brand">以sub-toggle作为主键，请保证sub-toggle唯一（包括翻页的情况下）</span></div><div>被展开项配置sub-toggle-parent指向对应的sub-toggle</div><div>数组操作（改值或翻页等）digest数据之后，保持原先的展开逻辑</div><div>翻页和数据改动，保留原先的展开逻辑</div><div>需要默认展开某一行配置data-expand="true"，示例中默认展开name2</div></div></div><div mxa="_zs_gallerydN:b" class="mb20"><div mxa="_zs_gallerydN:c" mx-view="mx-table/index"><div><table mxa="_zs_gallerydN:d" class="table"><thead mxs="_zs_gallerydN:a"><tr><th width="40"></th><th width="200">name</th><th width="200">link</th><th width="200">value</th><th width="200">test</th></tr></thead><tbody>';for(var f=0,k=x.length;f<k;f++){var N=x[f];b+='<tr><td><span sub-toggle="toggle_'+a(N.id)+'" data-expand="'+a(N.expand)+'"></span></td><td>'+a(N.name)+"</td><td>"+a(N.link)+"</td><td>"+a(N.value)+"</td><td>"+a(N.test)+'</td></tr><tr mxa="_zs_gallerydN:e" class="operation-tr"><td mxa="_zs_gallerydN:f" colspan="5"><a href="javascript:;" class="btn btn-white btn-small mr10" mx-click="'+e+"change({id:"+a(N.id)+'})">改变数据后digest</a></td></tr>';for(var w=0,L=N.subs,j=L.length;w<j;w++){var I=L[w];b+='<tr class="hide" sub-toggle-parent="toggle_'+a(N.id)+'"><td class="sub-mask ',N.subs.length==w+1&&(b+=" sub-mask-last "),b+='"></td><td>'+a(I.name)+"</td><td>"+a(I.link)+"</td><td>"+a(I.value)+"</td><td>"+a(I.test)+'</td></tr><tr class="hide operation-tr" sub-toggle-parent="toggle_'+a(N.id)+'"><td class="sub-mask ',N.subs.length==w+1&&(b+=" sub-mask-last "),b+='"></td><td mxs="_zs_gallerydN:b" colspan="4"><a href="javascript:;" class="btn btn-white btn-small mr10">操作</a></td></tr>'}b+=" "}return b+='</tbody></table></div></div><div mxa="_zs_gallerydN:g" class="table-pager-wrapper mb20"><div mx-change="'+e+'changePager()" mx-view="mx-pagination/index?total='+n(h)+"&size=5&page="+n(o)+'"></div></div></div></div><div mxa="_zs_gallerydN:h" class="_zs_galleryl"><div mxs="_zs_gallerydN:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_gallerydN:i" class="_zs_galleryo">'+s(y)+'</span><i mxs="_zs_gallerydN:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><div id="'+a(v)+'_text_1"><pre mxs="_zs_gallerydN:e">\n&lt;mx-table&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th width="40"&gt;&lt;/th&gt;\n                &lt;th width="200"&gt;name&lt;/th&gt;\n                &lt;th width="200"&gt;link&lt;/th&gt;\n                &lt;th width="200"&gt;value&lt;/th&gt;\n                &lt;th width="200"&gt;test&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item&#125;&#125;\n                &lt;tr&gt;\n                    &lt;td&gt;\n                        &lt;!-- data-expand="是否需要默认展开" sub-toggle="展开icon的id" --&gt;</pre><pre mxs="_zs_gallerydN:f" class="color-brand">\n                        &lt;span sub-toggle="toggle_&#123;&#123;=item.id&#125;&#125;" data-expand="&#123;&#123;=item.expand&#125;&#125;"&gt;&lt;/span&gt; </pre><pre mxs="_zs_gallerydN:g">\n                    &lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.name&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.link&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.value&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.test&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr class="operation-tr"&gt;  \n                    &lt;td colspan="5"&gt;\n                        &lt;a href="javascript:;" class="btn btn-white btn-small mr10" mx-click="change(&#123;id:&#123;&#123;=item.id&#125;&#125;&#125;)"&gt;改变数据后digest&lt;/a&gt;\n                    &lt;/td&gt;\n                &lt;/tr&gt;\n                &#123;&#123;each item.subs as sub subIndex&#125;&#125;\n                &lt;!-- sub-toggle-parent="指向控制的sub-toggle" --&gt;</pre><pre mxs="_zs_gallerydN:h" class="color-brand">\n                &lt;tr class="hide" sub-toggle-parent="toggle_&#123;&#123;=item.id&#125;&#125;"&gt;</pre><pre mxs="_zs_gallerydN:i">\n                    &lt;!-- td个数保持一致，占位符+className sub-mask --&gt;\n                    &lt;td class="sub-mask &#123;&#123;if item.subs.length==subIndex+1&#125;&#125; sub-mask-last &#123;&#123;/if&#125;&#125; "&gt;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=sub.name&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=sub.link&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=sub.value&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=sub.test&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr class="hide operation-tr"\n                    sub-toggle-parent="toggle_&#123;&#123;=item.id&#125;&#125;"&gt;\n                    &lt;!-- td个数保持一致，占位符+className sub-mask --&gt;\n                    &lt;td class="sub-mask &#123;&#123;if item.subs.length==subIndex+1&#125;&#125; sub-mask-last &#123;&#123;/if&#125;&#125; "&gt;&lt;/td&gt;\n                    &lt;td colspan="4"&gt;\n                        &lt;a href="javascript:;" class="btn btn-white btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;/td&gt;\n                &lt;/tr&gt;\n                &#123;&#123;/each&#125;&#125;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n&lt;div class="table-pager-wrapper"&gt;\n    &lt;mx-pagination \n        total="&#123;&#123;=count&#125;&#125;" \n        size="5" \n        page="&#123;&#123;=page&#125;&#125;"\n        mx-change="changePager()"/&gt;\n&lt;/div&gt;</pre></div></div><div mxa="_zs_gallerydN:j" class="_zs_galleryl"><div mxs="_zs_gallerydN:j" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+e+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_2"><span mxa="_zs_gallerydN:k" class="_zs_galleryo">'+s(z)+'</span><i mxs="_zs_gallerydN:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(v)+"_text_2\">\nlet Magix = require('magix');\nlet Base = require('__test__/example');\nlet $ = require('$');\nlet Sub = require('@../gallery/mx-table/sub');\n\nmodule.exports = Base.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Sub],\n    render() &#123;\n        let that = this;\n        let allList = [];\n        for (var i = 0; i &lt; 15; i++) &#123;\n            allList.push(&#123;\n                id: i,\n                expand: (i == 2),\n                name: 'name' + i,\n                link: 'link' + i,\n                value: 'value' + i,\n                test: 'test' + i,\n                subs: [&#123;\n                    name: 'subname1',\n                    link: 'sublink1',\n                    value: 'subvalue1',\n                    test: 'subtest1',\n                &#125;, &#123;\n                    name: 'subname2',\n                    link: 'sublink2',\n                    value: 'subvalue2',\n                    test: 'subtest2',\n                &#125;]\n            &#125;)\n        &#125;\n\n        that.updater.digest(&#123;\n            count: allList.length,\n            page: 1,\n            allList,\n            list: allList.slice(0, 5)\n        &#125;);\n    &#125;,\n    'change&lt;click&gt;' (e) &#123;\n        let id = e.params.id;\n        let list = this.updater.get('list');\n        for (let index = 0; index &lt; list.length; index++) &#123;\n            if(list[index].id == id)&#123;\n                list[index].name = Magix.guid('测试数据变化');\n                break;\n            &#125;\n        &#125;\n        \n        this.updater.digest(&#123;\n            list\n        &#125;)\n    &#125;,\n    'changePager&lt;change&gt;' (e) &#123;\n        // e.page 当前第几页\n        // e.size 每页多少条\n        let that = this;\n        let page = e.page;\n        let allList = that.updater.get('allList');\n        let list = allList.slice((page - 1) * 5, page * 5);\n        that.updater.digest(&#123;\n            list,\n            page\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},mixins:[n],render:function(){for(var t=[],e=0;e<15;e++)t.push({id:e,expand:2==e,name:"name"+e,link:"link"+e,value:"value"+e,test:"test"+e,subs:[{name:"subname1",link:"sublink1",value:"subvalue1",test:"subtest1"},{name:"subname2",link:"sublink2",value:"subvalue2",test:"subtest2"}]});this.updater.digest({count:t.length,page:1,allList:t,list:t.slice(0,5)})},"change<click>":function(t){for(var e=t.params.id,l=this.updater.get("list"),s=0;s<l.length;s++)if(l[s].id==e){l[s].name=a.guid("测试数据变化");break}this.updater.digest({list:l})},"changePager<change>":function(t){var e=t.page,l=this.updater.get("allList").slice(5*(e-1),5*e);this.updater.digest({list:l,page:e})}})});