define("mx-table/examples/18",["magix","examples/example","mx-table/sort","$","../index","mx-copy/index","examples/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var r=e("magix"),d=e("examples/example"),s=e("mx-table/sort"),i=e("$"),n=r.Router;l.exports=d.extend({tmpl:function(e,t,l,r,d,s,i,n){if(l||(l=e),!d){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,g=function(e){return"&"+a[e]+";"};d=function(e){return""+(null==e?"":e)},r=function(e){return d(e).replace(o,g)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},f=/[!')(*]/g;s=function(e){return encodeURIComponent(d(e)).replace(f,m)}}if(!n){var y=/[\\'"]/g;n=function(e){return d(e).replace(y,"\\$&")}}var x="",u=e.list,h=e.groups,p=e.sortField,_=e.sortBy,v=e.orderFieldKey,b=e.orderByKey,z=e.format,B=e.viewId,F=e.text1,O=e.text2;x+='<div mxa="_zs_gallerye0:_" class="_zs_galleryg"><div mxa="_zs_gallerye0:a" class="_zs_galleryj"><div mxs="_zs_gallerye0:_" class="mb20"><div class="mb5">1. 默认使用 “指标field1” + “升序” 进行排序：sort-field（当前排序字段）；sort-orderby（当前排序方式）</div><div class="mb5 pl15"><pre class="tip-content">\n&lt;th class="field-item"&gt;\n    指标&#123;&#123;=field&#125;&#125;\n    &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"\n        sort-field="&#123;&#123;=sortField&#125;&#125;"\n        sort-orderby="&#123;&#123;=sortBy&#125;&#125;"&gt;&lt;/span&gt;\n&lt;/th&gt;\n                </pre></div><div class="mb5">2. 自定义路由参数：当前页面有两个表格，都需要排序，如果都用默认的路由参数（orderField 和 orderBy）会存在冲突，需要自定义路由参数</div><div class="mb5 pl15"><pre class="tip-content mb5">\n&lt;th class="field-item"&gt;\n    指标&#123;&#123;=field&#125;&#125;\n    &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"\n        order-field-key="&#123;&#123;=orderFieldKey&#125;&#125;"\n        order-by-key="&#123;&#123;=orderByKey&#125;&#125;"&gt;&lt;/span&gt;\n&lt;/th&gt;\n                </pre><div class="mb5">最终路由上显示为：</div><pre class="tip-content">\n{\n    [order-field-key]: sort-trigger,\n    [order-by-key]: desc or asc\n}\n                </pre></div></div><div mxa="_zs_gallerye0:b" mx-view="mx-table/index?sticky=true" class="mb40"><div><table mxa="_zs_gallerye0:c" class="table" left="true" width="400"><thead mxs="_zs_gallerye0:a"><tr><th>固定1</th><th>固定2</th><th>固定3</th></tr></thead><tbody>';for(var K=0,k=u.length;K<k;K++){x+="<tr><td>"+r((P=u[K]).fixed1)+"</td><td>"+r(P.fixed2)+"</td><td>"+r(P.fixed3)+"</td></tr>"}x+='</tbody></table></div><div><table mxa="_zs_gallerye0:d" class="table" center="true" width="1200"><thead><tr>';for(var w=0,L=h.length;w<L;w++){x+='<th class="field-group" colspan="'+r((E=h[w]).fields.length)+'"><div mxa="_zs_gallerye0:e" class="group-name">'+r(E.name)+"</div></th>"}x+="</tr><tr>";for(var R=0,$=h.length;R<$;R++){x+=" ";for(var M=0,q=(E=h[R]).fields,C=q.length;M<C;M++){x+='<th mxa="_zs_gallerye0:f" class="field-item">指标'+r(J=q[M])+'<span sort-trigger="'+r(J)+'" sort-field="'+r(p)+'" sort-orderby="'+r(_)+'" order-field-key="'+r(v)+'" order-by-key="'+r(b)+'"></span></th>'}x+=" "}x+="</tr></thead><tbody>";K=0;for(var I=u.length;K<I;K++){var P=u[K];x+="<tr>";for(var S=0,j=h.length;S<j;S++){var E;x+=" ";for(var N=0,A=(E=h[S]).fields,H=A.length;N<H;N++){var J;x+="<td>"+r(z(P[J=A[N]]))+"</td>"}x+=" "}x+="</tr>"}return x+='</tbody></table></div></div></div><div mxa="_zs_gallerye0:g" class="clearfix"><div mxa="_zs_gallerye0:h" class="_zs_galleryk _zs_galleryd _zs_galleryf"><div mxs="_zs_gallerye0:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(B)+'_text_1"><span mxa="_zs_gallerye0:i" class="_zs_galleryn">'+d(F)+'</span><i mxs="_zs_gallerye0:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(B)+'_text_1">\n&lt;mx-table sticky="true" class="mb40"&gt;\n    &lt;table class="table" left="true" width="400"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;固定1&lt;/th&gt;\n                &lt;th&gt;固定2&lt;/th&gt;\n                &lt;th&gt;固定3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed1&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed2&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed3&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;table class="table" center="true" width="1200"&gt; \n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &lt;th class="field-group" colspan="&#123;&#123;=group.fields.length&#125;&#125;"&gt;\n                        &lt;div class="group-name"&gt;&#123;&#123;=group.name&#125;&#125;&lt;/div&gt;\n                    &lt;/th&gt;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &#123;&#123;each group.fields as field&#125;&#125;\n                    &lt;th class="field-item"&gt;\n                        指标&#123;&#123;=field&#125;&#125;\n                        &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"\n                            sort-field="&#123;&#123;=sortField&#125;&#125;"\n                            sort-orderby="&#123;&#123;=sortBy&#125;&#125;"\n                            order-field-key="&#123;&#123;=orderFieldKey&#125;&#125;"\n                            order-by-key="&#123;&#123;=orderByKey&#125;&#125;"&gt;&lt;/span&gt;\n                    &lt;/th&gt;\n                    &#123;&#123;/each&#125;&#125;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr&gt;\n                    &#123;&#123;each groups as group&#125;&#125;\n                        &#123;&#123;each group.fields as field&#125;&#125;\n                        &lt;td&gt;&#123;&#123;=format(item[field])&#125;&#125;&lt;/td&gt;\n                        &#123;&#123;/each&#125;&#125;\n                    &#123;&#123;/each&#125;&#125;\n                &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n            </pre></div><div mxa="_zs_gallerye0:j" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerye0:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(B)+'_text_2"><span mxa="_zs_gallerye0:k" class="_zs_galleryn">'+d(O)+'</span><i mxs="_zs_gallerye0:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(B)+"_text_2\">\nlet Magix = require('magix');\nlet Sort = require('@../gallery/mx-table/sort');\nlet $ = require('$');\nlet Router = Magix.Router;\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Sort],\n    init() &#123;\n        this.observeLocation(['customOrderField', 'customOrderBy']);\n    &#125;,\n    render() &#123;\n        let that = this;\n\n        let groups = [&#123;\n            name: '组1',\n            fields: ['field1', 'field2']\n        &#125;, &#123;\n            name: '组2',\n            fields: ['field3', 'field4', 'field5', 'field6']\n        &#125;, &#123;\n            name: '组3',\n            fields: ['field7', 'field8', 'field9']\n        &#125;]\n        let len = 0;\n        groups.forEach(group =&gt; &#123;\n            len += group.fields.length;\n        &#125;)\n\n        let locParams = Router.parse().params;\n        let orderFieldKey = 'customOrderField',\n            orderByKey = 'customOrderBy';\n\n        that.updater.digest(&#123;\n            list: that.getList(),\n            orderFieldKey,\n            orderByKey,\n            sortField: locParams[orderFieldKey] || 'field1',\n            sortBy: locParams[orderByKey] || 'asc',\n            groups,\n            len,\n            format: (val) =&gt; &#123;\n                if (!val) &#123;\n                    return '-';\n                &#125;\n                return val;\n            &#125;\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>"},mixins:[s],init:function(){this.updater.set({viewId:this.id,text1:"复制代码",text2:"复制代码"}),this.observeLocation(["customOrderField","customOrderBy","customOrderField2","customOrderBy2"])},render:function(){var e=[{name:"组1",fields:["field1","field2"]},{name:"组2",fields:["field3","field4","field5","field6"]},{name:"组3",fields:["field7","field8","field9"]}],t=0;e.forEach(function(e){t+=e.fields.length});var l=n.parse().params,r=this.getList(),d=this.getList();this.updater.digest({list:this.sort(r,"customOrderField","customOrderBy"),orderFieldKey:"customOrderField",orderByKey:"customOrderBy",sortField:l.customOrderField||"field1",sortBy:l.customOrderBy||"asc",list2:this.sort(d,"customOrderField2","customOrderBy2"),orderFieldKey2:"customOrderField2",orderByKey2:"customOrderBy2",sortField2:l.customOrderField2||"field1",sortBy2:l.customOrderBy2||"asc",groups:e,len:t,format:function(e){return e||"-"}})},getList:function(){for(var e=[],t=0;t<5;t++){var l=2==t||4==t,r={fixed1:t+"_1",fixed2:t+"_2",fixed3:t+"_3",field1:l?0:t+9e3,field2:l?0:t+3e3,field3:l?0:t+1e3,field4:t+412,field5:t+512,field6:t+612,field7:t+7,field8:t+8,field9:t+2},d=i.extend(!0,{},r);e.push(d)}return e}})});