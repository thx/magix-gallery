define("mx-form/examples/1",["magix","mx-form/index","mx-form/validator","examples/example","$","mx-copy/index","examples/hl"],(t,l,e)=>{t("mx-copy/index"),t("examples/hl");var a=t("magix"),n=t("mx-form/index"),i=t("mx-form/validator"),s=t("examples/example");t("$");a.applyStyle("_zs_galleryU","._zs_galleryfT{margin-bottom:20px;border:1px solid var(--color-border)}._zs_galleryfU tr._zs_galleryfV th{height:68px;background-color:#fff;border-bottom:1px solid var(--color-border)}._zs_galleryfU tr._zs_galleryfV th ._zs_galleryfW{position:relative}._zs_galleryfU tr._zs_galleryfV th ._zs_galleryfW ._zs_galleryfX{position:absolute;top:0;left:-80px;width:70px;height:28px;line-height:28px;text-align:right}"),e.exports=s.extend({tmpl:function(t,l,e,a,n,i,s,r){if(e||(e=t),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,_=function(t){return"&"+d[t]+";"};n=function(t){return""+(null==t?"":t)},a=function(t){return n(t).replace(c,_)}}if(!i){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(t){return g[t]},x=/[!')(*]/g;i=function(t){return encodeURIComponent(n(t)).replace(x,m)}}if(!r){var o=/[\\'"]/g;r=function(t){return n(t).replace(o,"\\$&")}}s||(s=function(t,l,e,a){for(a=t[h];--a;)if(t[e=h+a]===l)return e;return t[e=h+t[h]++]=l,e});var h="",u="",p=t.viewId,v=t.batchDiscount,b=t.batRules,y=t.list,f=t.rules,z=t.text1,w=t.text3,k=t.text2;u+='<div mxv mxa="_zs_galleryb]:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryb]:a" class="_zs_galleryj"><div mxs="_zs_galleryb]:_" class="clearfix mb20 lh22"><div class="fl color-9">以下示例：</div><div class="fl"><div>填写1-300的整数，小于50给警告提示</div><div>双向绑定可以用&传递完整对象&#123;&#123;:value&rules&#125;&#125;，rules：object</div></div></div><div mxv mxa="_zs_galleryb]:b" class="_zs_galleryfT"><table mxv mxa="_zs_galleryb]:c" class="table"><thead mxv mxa="_zs_galleryb]:d" class="_zs_galleryfU"><tr mxs="_zs_galleryb]:a"><th>name</th><th width="200">出价</th><th width="200">link</th><th width="200">value</th></tr><tr mxv mxa="_zs_galleryb]:e" class="_zs_galleryfV"><th mxs="_zs_galleryb]:b"></th><th mxv mxa="_zs_galleryb]:f" colspan="4"><div mxv mxa="_zs_galleryb]:g" class="_zs_galleryfW"><span mxs="_zs_galleryb]:c" class="_zs_galleryfX">批量出价</span><input mxe="'+l+"_0\" mxc=\"[{p:'batchDiscount',f:'"+s(e,b)+'\'}]" class="input input-small w80" id="'+a(p)+'_batch_input" value="'+a(v)+'" mx-focusout="'+l+'batch()"/><a mxs="_zs_galleryb]:d" href="javascript:;" class="btn btn-small ml10" mx-click="'+l+'batch()">应用</a></div></th></tr></thead><tbody mxv>';for(var V=0,D=y.length;V<D;V++){var M=y[V];u+="<tr mxv><td>"+a(M.name)+'</td><td mxv><input mxe="'+l+"_1_"+a(V)+'" mxc="[{p:\'list.'+a(V)+".discount',f:'"+s(e,f)+'\'}]" class="input input-small w80" value="'+a(M.discount)+'"/></td><td>'+a(M.link)+"</td><td>"+a(M.value)+"</td></tr>"}return u+='</tbody></table></div></div><div mxa="_zs_galleryb]:h" class="clearfix"><div mxa="_zs_galleryb]:i" class="_zs_galleryd"><div mxa="_zs_galleryb]:j" class="_zs_galleryk"><div mxs="_zs_galleryb]:e" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(p)+'_text_1"><span mxa="_zs_galleryb]:k" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_galleryb]:f" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(p)+'_text_1">\n&lt;table class="table"&gt;\n    &lt;thead class="fixed-head"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;name&lt;/th&gt;\n            &lt;th width="200"&gt;出价&lt;/th&gt;\n            &lt;th width="200"&gt;link&lt;/th&gt;\n            &lt;th width="200"&gt;value&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr class="batch-oper"&gt;\n            &lt;th&gt;&lt;/th&gt;\n            &lt;th colspan="4"&gt;\n                &lt;div class="batch-input"&gt;\n                    &lt;span class="batch-input-text"&gt;批量出价&lt;/span&gt;\n                    &lt;input type="text" class="input input-small w80"\n                        id="&#123;&#123;=viewId&#125;&#125;_batch_input" \n                        value="&#123;&#123;:batchDiscount&batRules&#125;&#125;"\n                        mx-focusout="batch()"/&gt;\n                    &lt;a href="javascript:;" class="btn btn-small ml10" mx-click="batch()"&gt;应用&lt;/a&gt;\n                &lt;/div&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &#123;&#123;each list as item index&#125;&#125;\n            &lt;tr&gt;\n                &lt;td&gt;&#123;&#123;=item.name&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;\n                    &lt;input type="text" class="input input-small w80"\n                        value="&#123;&#123;:item.discount&rules&#125;&#125;"/&gt;\n                &lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.link&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.value&#125;&#125;&lt;/td&gt;\n            &lt;/tr&gt;\n        &#123;&#123;/each&#125;&#125;\n    &lt;/tbody&gt;\n&lt;/table&gt;</pre></div><div mxa="_zs_galleryb]:l" class="_zs_galleryk"><div mxs="_zs_galleryb]:g" class="_zs_galleryi">CSS</div><div class="_zs_galleryl" mx-success="'+l+'done({id:3})" mx-view="mx-copy/index?copyNode='+i(p)+'_text_3"><span mxa="_zs_galleryb]:m" class="_zs_galleryn">'+n(w)+'</span><i mxs="_zs_galleryb]:f" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(p)+'_text_3">\n.fixed-head &#123;\n    tr.batch-oper &#123;\n        th &#123;\n            height: 68px;\n            background-color: #fff;\n            border-bottom: 1px solid #e6e6e6;\n\n            .batch-input &#123;\n                position: relative;\n\n                .batch-input-text &#123;\n                    position: absolute;\n                    top: 0;\n                    left: -80px;\n                    width: 70px;\n                    height: 28px;\n                    line-height: 28px;\n                    text-align: right;\n                &#125;\n            &#125;\n        &#125;\n    &#125;\n&#125;</pre></div></div><div mxa="_zs_galleryb]:n" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryb]:h" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(p)+'_text_2"><span mxa="_zs_galleryb]:o" class="_zs_galleryn">'+n(k)+'</span><i mxs="_zs_galleryb]:f" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(p)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\nMagix.applyStyle('@index.less');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() &#123;\n        let that = this;\n        let list = [];\n        for (var i = 0; i &lt; 3; i++) &#123;\n            list.push(&#123;\n                name: Magix.guid('name-'),\n                link: Magix.guid('link-'),\n                value: Magix.guid('value-')\n            &#125;)\n        &#125;\n\n        let tip = '请填写1-300之间的整数';\n        that.updater.digest(&#123;\n            viewId: that.id,\n            list,\n            batRules: &#123;\n                posint: true,\n                min: [1, tip],\n                max: [300, tip]\n            &#125;,\n            rules: &#123;\n                warn: &#123;\n                    min: [50, '低于50可能影响效果，建议提高']\n                &#125;,\n                required: [true, tip],\n                posint: true,\n                min: [1, tip],\n                max: [300, tip]\n            &#125;\n        &#125;);\n    &#125;,\n    'batch&lt;focusout,click&gt;'(e) &#123;\n        let that = this;\n\n        // 校验批量的按钮是否符合规则\n        // 符合规则再往下走\n        let check = that.isValid(&#123;\n            element: '#' + that.id + '_batch_input'\n        &#125;)\n\n        if (!check) &#123;\n            return;\n        &#125;\n\n        let data = that.updater.get();\n        let remain = that.fromKeys(data, 'batchDiscount');\n        let batchDiscount = remain.batchDiscount;\n        if (!batchDiscount) &#123;\n            return;\n        &#125;\n\n        let list = that.updater.get('list');\n        list.forEach(item =&gt; &#123;\n            item.discount = batchDiscount;\n        &#125;)\n        that.updater.digest(&#123;\n            list\n        &#125;)\n\n        // 可能批量校验的规则和单个的不一致\n        // 此处调用isValid校验整个view\n        that.isValid();\n    &#125;\n&#125;);</pre></div></div></div>"},mixins:[n,i],render:function(){for(var t=[],l=0;l<3;l++)t.push({name:a.guid("name-"),link:a.guid("link-"),value:a.guid("value-")});var e="请填写1-300之间的整数";this.updater.digest({viewId:this.id,list:t,batRules:{posint:!0,min:[1,e],max:[300,e]},rules:{warn:{min:[50,"低于50可能影响效果，建议提高"]},required:[!0,e],posint:!0,min:[1,e],max:[300,e]}})},"batch<focusout,click>":function(t){if(this.isValid({element:"#"+this.id+"_batch_input"})){var l=this.updater.get(),e=this.fromKeys(l,"batchDiscount").batchDiscount;if(e){var a=this.updater.get("list");a.forEach(function(t){t.discount=e}),this.updater.digest({list:a}),this.isValid()}}}})});