define("mx-table/__test__/6",["magix","__test__/example","$","../index","mx-pagination/index","mx-copy/index","__test__/hl"],(t,e,n)=>{t("../index"),t("mx-pagination/index"),t("mx-copy/index"),t("__test__/hl");var l=t("magix"),a=t("__test__/example");t("$");n.exports=a.extend({tmpl:function(t,e,n,l,a,s,i,d){if(n||(n=t),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,c=function(t){return"&"+r[t]+";"};a=function(t){return""+(null==t?"":t)},l=function(t){return a(t).replace(g,c)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(t){return o[t]},h=/[!')(*]/g;s=function(t){return encodeURIComponent(a(t)).replace(h,x)}}if(!d){var p=/[\\'"]/g;d=function(t){return a(t).replace(p,"\\$&")}}i||(i=function(t,e,n,l){for(l=t[m];--l;)if(t[n=m+l]===e)return n;return t[n=m+t[m]++]=e,n});var m="",f="",u=t.list,_=t.groups,v=t.len,b=t.viewId,y=t.text1,k=t.text2;if(f+='<div mxv mxa="_zs_gallerydU:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerydU:a" class="_zs_galleryk"><div mxs="_zs_gallerydU:_" class="mb20 clearfix lh22"><div class="color-9 fl">该示例：</div><div class="fl"><div>删除完之后有空状态</div><div>表头二级分组 + 分栏 + 吸顶 + 宽度配置在th上</div><div>渲染表格涉及的数据都绑定到组件上 &lt;mx-table sticky="true" list="&#123;&#123;@list&#125;&#125;" groups="&#123;&#123;@groups&#125;&#125;"&gt;&lt;/mx-table&gt;</div></div></div><div mxv mxa="_zs_gallerydU:b" class="mb20">',u.length>0){f+='<div mxv="list,groups" mx-view="mx-table/index?sticky=true&list='+i(n,u)+"&groups="+i(n,_)+'"><div><table mxa="_zs_gallerydU:c" class="table" left="true" width="500"><thead mxs="_zs_gallerydU:a"><tr><th></th><th>固定1</th><th>固定2</th><th>固定3</th></tr></thead><tbody>';for(var z=0,U=u.length;z<U;z++){var w=u[z];if(f+='<tr><td><a href="javascript:;" mx-click="'+e+"toggle({index:"+l(z)+'})" class="link-brand">',w.expand?f+="收起":f+="展开",f+="</a></td><td>"+l(w.fixed1)+"</td><td>"+l(w.fixed2)+"</td><td>"+l(w.fixed3)+'</td></tr><tr mxa="_zs_gallerydU:d" class="operation-tr"><td mxa="_zs_gallerydU:e" colspan="4"><a href="javascript:;" class="btn btn-white btn-small mr10" mx-click="'+e+"change({index:"+l(z)+'})">修改固定1数据</a><a href="javascript:;" class="btn btn-white btn-small" mx-click="'+e+"delete({index:"+l(z)+'})">移除</a></td></tr>',w.expand){f+='<tr mxs="_zs_gallerydU:b" class="thead"><td class="sub-mask"></td><td>子表格固定1</td><td>子表格固定2</td><td>子表格固定3</td></tr>';for(var j=0,I=w.subs,$=I.length;j<$;j++){var M=I[j];f+='<tr><td class="sub-mask ',w.subs.length==j+1&&(f+=" sub-mask-last "),f+='"></td><td>'+l(M.fixed1)+"</td><td>"+l(M.fixed2)+"</td><td>"+l(M.fixed3)+'</td></tr><tr mxa="_zs_gallerydU:f" class="operation-tr"><td class="sub-mask ',w.subs.length==j+1&&(f+=" sub-mask-last "),f+='"></td><td mxs="_zs_gallerydU:c" colspan="3"><a href="javascript:;" class="btn btn-white btn-small">操作</a></td></tr>'}f+=" "}f+=" "}f+='</tbody></table></div><div><table mxa="_zs_gallerydU:g" class="table" center="true" width="1200"><thead><tr>';for(var q=0,C=_.length;q<C;q++){f+='<th class="field-group" colspan="'+l((Z=_[q]).fields.length)+'"><div mxa="_zs_gallerydU:h" class="group-name">'+l(Z.name)+"</div></th>"}f+="</tr><tr>";for(var F=0,E=_.length;F<E;F++){f+=" ";for(var N=0,A=(Z=_[F]).fields,H=A.length;N<H;N++){f+='<th mxa="_zs_gallerydU:i" class="field-item">滚动'+l(A[N])+"</th>"}f+=" "}f+="</tr></thead><tbody>";z=0;for(var J=u.length;z<J;z++){w=u[z];f+="<tr>";for(var L=0,R=_.length;L<R;L++){f+=" ";for(var S=0,T=(Z=_[L]).fields,V=T.length;S<V;S++){f+="<td>"+l(w["content"+T[S]])+"</td>"}f+=" "}if(f+='</tr><tr mxa="_zs_gallerydU:j" class="operation-tr"><td colspan="'+l(v)+'"></td></tr>',w.expand){f+='<tr mxa="_zs_gallerydU:k" class="thead">';for(var B=0,D=_.length;B<D;B++){f+=" ";for(var G=0,K=(Z=_[B]).fields,O=K.length;G<O;G++){f+="<td>子表头滚动"+l(K[G])+"</td>"}f+=" "}f+="</tr>";for(var P=0,Q=w.subs,W=Q.length;P<W;P++){M=Q[P];f+="<tr>";for(var X=0,Y=_.length;X<Y;X++){var Z;f+=" ";for(var tt=0,et=(Z=_[X]).fields,nt=et.length;tt<nt;tt++){f+="<td>"+l(M["content"+et[tt]])+"</td>"}f+=" "}f+='</tr><tr mxa="_zs_gallerydU:l" class="operation-tr"><td colspan="'+l(v)+'"></td></tr>'}f+=" "}f+=" "}f+="</tbody></table></div></div>"}else f+='<div mxs="_zs_gallerydU:d" class="empty-area"><i class="mc-iconfont no-data">&#xe685;</i><p class="mt10">您还没有相关记录</p></div>';return f+='<div mxa="_zs_gallerydU:m" class="table-pager-wrapper"><div mx-view="mx-pagination/index?total='+s(u.length)+'&size=40&page=1"></div></div></div></div><div mxa="_zs_gallerydU:n" class="_zs_galleryl"><div mxs="_zs_gallerydU:e" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(b)+'_text_1"><span mxa="_zs_gallerydU:o" class="_zs_galleryo">'+a(y)+'</span><i mxs="_zs_gallerydU:f" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(b)+'_text_1">\n&#123;&#123;if(list.length &gt; 0)&#125;&#125;\n&lt;!-- 渲染表格涉及的数据请都挂在到mx-table上 --&gt;\n&lt;mx-table sticky="true" list="&#123;&#123;@list&#125;&#125;" groups="&#123;&#123;@groups&#125;&#125;"&gt;\n    &lt;!-- 固定的表格 --&gt;\n    &lt;table class="table" left="true" width="500"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;/th&gt;\n                &lt;th&gt;固定1&lt;/th&gt;\n                &lt;th&gt;固定2&lt;/th&gt;\n                &lt;th&gt;固定3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr&gt;\n                    &lt;td&gt;  \n                        &lt;a href="javascript:;" class="link-brand"\n                            mx-click="toggle(&#123;index:&#123;&#123;=index&#125;&#125;&#125;)"&gt;\n                            &#123;&#123;if item.expand&#125;&#125;收起&#123;&#123;else&#125;&#125;展开&#123;&#123;/if&#125;&#125;\n                        &lt;/a&gt;\n                    &lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed1&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed2&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed3&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr class="operation-tr"&gt;\n                    &lt;td colspan="4"&gt;\n                        &lt;a href="javascript:;" class="btn btn-white btn-small mr10" \n                            mx-click="change(&#123;index:&#123;&#123;=index&#125;&#125;&#125;)"&gt;修改固定1数据&lt;/a&gt;\n                        &lt;a href="javascript:;" class="btn btn-white btn-small" \n                            mx-click="delete(&#123;index:&#123;&#123;=index&#125;&#125;&#125;)"&gt;移除&lt;/a&gt;\n                    &lt;/td&gt;\n                &lt;/tr&gt;\n                &#123;&#123;if item.expand&#125;&#125;\n                    &lt;tr class="thead"&gt;\n                        &lt;!-- td个数保持一致，占位符加class="sub-mask" --&gt;\n                        &lt;td class="sub-mask"&gt;&lt;/td&gt;\n                        &lt;td&gt;子表格固定1&lt;/td&gt;\n                        &lt;td&gt;子表格固定2&lt;/td&gt;\n                        &lt;td&gt;子表格固定3&lt;/td&gt;\n                    &lt;/tr&gt;\n                    &#123;&#123;each item.subs as sub subIndex&#125;&#125;\n                    &lt;tr&gt;\n                        &lt;td class="sub-mask &#123;&#123;if item.subs.length==subIndex+1&#125;&#125; sub-mask-last &#123;&#123;/if&#125;&#125;"&gt;&lt;/td&gt;\n                        &lt;td&gt;&#123;&#123;=sub.fixed1&#125;&#125;&lt;/td&gt;\n                        &lt;td&gt;&#123;&#123;=sub.fixed2&#125;&#125;&lt;/td&gt;\n                        &lt;td&gt;&#123;&#123;=sub.fixed3&#125;&#125;&lt;/td&gt;\n                    &lt;/tr&gt;\n                    &lt;tr class="operation-tr"&gt;\n                        &lt;td class="sub-mask &#123;&#123;if item.subs.length==subIndex+1&#125;&#125; sub-mask-last &#123;&#123;/if&#125;&#125;"&gt;&lt;/td&gt;\n                        &lt;td colspan="3"&gt;\n                            &lt;a href="javascript:;" class="btn btn-white btn-small"&gt;操作&lt;/a&gt;\n                        &lt;/td&gt;\n                    &lt;/tr&gt;\n                    &#123;&#123;/each&#125;&#125;\n                &#123;&#123;/if&#125;&#125;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;!-- 滚动列 --&gt;\n    &lt;table class="table" center="true" width="1200"&gt;\n        &lt;thead&gt;\n            &lt;!-- 二级结构的表头 --&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                &lt;th class="field-group" colspan="&#123;&#123;=group.fields.length&#125;&#125;"&gt;\n                    &lt;div class="group-name"&gt;&#123;&#123;=group.name&#125;&#125;&lt;/div&gt;\n                &lt;/th&gt;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &#123;&#123;each group.fields as field&#125;&#125;\n                    &lt;th class="field-item"&gt;滚动&#123;&#123;=field&#125;&#125;&lt;/th&gt;\n                    &#123;&#123;/each&#125;&#125;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr&gt;\n                    &#123;&#123;each groups as group&#125;&#125;\n                        &#123;&#123;each group.fields as field&#125;&#125;\n                        &lt;td&gt;&#123;&#123;=item[\'content\' + field]&#125;&#125;&lt;/td&gt;\n                        &#123;&#123;/each&#125;&#125;\n                    &#123;&#123;/each&#125;&#125;\n                &lt;/tr&gt;\n                &lt;!-- 有操作项该行不可少 --&gt;\n                &lt;tr class="operation-tr"&gt;\n                    &lt;td colspan="&#123;&#123;=len&#125;&#125;"&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n                &#123;&#123;if item.expand&#125;&#125;\n                    &lt;tr class="thead"&gt;\n                        &#123;&#123;each groups as group&#125;&#125;\n                            &#123;&#123;each group.fields as field&#125;&#125;\n                            &lt;td&gt;子表头滚动&#123;&#123;=field&#125;&#125;&lt;/td&gt;\n                            &#123;&#123;/each&#125;&#125;\n                        &#123;&#123;/each&#125;&#125;\n                    &lt;/tr&gt;\n                    &#123;&#123;each item.subs as sub&#125;&#125;\n                    &lt;tr&gt;\n                        &#123;&#123;each groups as group&#125;&#125;\n                            &#123;&#123;each group.fields as field&#125;&#125;\n                            &lt;td&gt;&#123;&#123;=sub[\'content\' + field]&#125;&#125;&lt;/td&gt;\n                            &#123;&#123;/each&#125;&#125;\n                        &#123;&#123;/each&#125;&#125;\n                    &lt;/tr&gt;\n                    &lt;tr class="operation-tr"&gt;\n                        &lt;td colspan="&#123;&#123;=len&#125;&#125;"&gt;&lt;/td&gt;\n                    &lt;/tr&gt;\n                    &#123;&#123;/each&#125;&#125;\n                &#123;&#123;/if&#125;&#125;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n&#123;&#123;else&#125;&#125;\n&lt;mx-effects.empty content="您还没有相关记录"/&gt;\n&#123;&#123;/if&#125;&#125;\n&lt;div class="table-pager-wrapper"&gt;\n    &lt;mx-pagination \n        total="&#123;&#123;=list.length&#125;&#125;" \n        size="40" \n        page="1"/&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallerydU:p" class="_zs_galleryl"><div mxs="_zs_gallerydU:g" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+e+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(b)+'_text_2"><span mxa="_zs_gallerydU:q" class="_zs_galleryo">'+a(k)+'</span><i mxs="_zs_gallerydU:f" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(b)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let that = this;\n        let list = [];\n\n        let itemFn = (key) =&gt; &#123;\n            return &#123;\n                expand: false,\n                fixed1: 'fixed1-' + key,\n                fixed2: 'fixed2-' + key,\n                fixed3: 'fixed3-' + key,\n                content1: 'content1-' + key,\n                content2: 'content2-' + key,\n                content3: 'content3-' + key,\n                content4: 'content4-' + key,\n                content5: 'content5-' + key,\n                content6: 'content6-' + key,\n                content7: 'content7-' + key,\n                content8: 'content8-' + key,\n                content9: 'content9-' + key,\n            &#125;\n        &#125;\n        for (var i = 1; i &lt; 4; i++) &#123;\n            let item = itemFn(i);\n            item.subs = [];\n            for (let j = 1; j &lt; 3; j++) &#123;\n                item.subs.push(itemFn(i + '-' + j));\n            &#125;\n            list.push(item);\n        &#125;\n        // 默认展开第一个\n        list[0].expand = true;\n\n        let groups = [&#123;\n            name: '组1',\n            fields: [1, 2]\n        &#125;, &#123;\n            name: '组2',\n            fields: [3, 4, 5, 6]\n        &#125;, &#123;\n            name: '组3',\n            fields: [7, 8, 9]\n        &#125;]\n\n        // 计算colspan\n        let len = 0;\n        groups.forEach(group =&gt; &#123;\n            len += group.fields.length;\n        &#125;)\n\n        that.updater.digest(&#123;\n            groups,\n            len,\n            list\n        &#125;);\n    &#125;,\n\n    /**\n    * 展开收起\n    */\n    'toggle&lt;click&gt;' (e) &#123;\n        let that = this;\n        let index = e.params.index,\n            list = that.updater.get('list');\n        list[index].expand = !list[index].expand;\n        that.updater.digest(&#123;\n            list\n        &#125;)\n    &#125;,\n\n    /**\n    * 修改数据\n    */\n    'change&lt;click&gt;' (e) &#123;\n        let that = this;\n        let index = e.params.index,\n            list = that.updater.get('list');\n        list[index].fixed1 = Magix.guid();\n        that.updater.digest(&#123;\n            list\n        &#125;)\n    &#125;,\n\n    'delete&lt;click&gt;' (e) &#123;\n        let that = this;\n        let index = e.params.index,\n            list = that.updater.get('list');\n        list.splice(index, 1);\n        that.updater.digest(&#123;\n            list\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){for(var t=[],e=function(t){return{expand:!1,fixed1:"fixed1-"+t,fixed2:"fixed2-"+t,fixed3:"fixed3-"+t,content1:"content1-"+t,content2:"content2-"+t,content3:"content3-"+t,content4:"content4-"+t,content5:"content5-"+t,content6:"content6-"+t,content7:"content7-"+t,content8:"content8-"+t,content9:"content9-"+t}},n=1;n<4;n++){var l=e(n);l.subs=[];for(var a=1;a<3;a++)l.subs.push(e(n+"-"+a));t.push(l)}t[0].expand=!0;var s=[{name:"组1",fields:[1,2]},{name:"组2",fields:[3,4,5,6]},{name:"组3",fields:[7,8,9]}],i=0;s.forEach(function(t){i+=t.fields.length}),this.updater.digest({groups:s,len:i,list:t})},"toggle<click>":function(t){var e=t.params.index,n=this.updater.get("list");n[e].expand=!n[e].expand,this.updater.digest({list:n})},"change<click>":function(t){var e=t.params.index,n=this.updater.get("list");n[e].fixed1=l.guid(),this.updater.digest({list:n})},"delete<click>":function(t){var e=t.params.index,n=this.updater.get("list");n.splice(e,1),this.updater.digest({list:n})}})});