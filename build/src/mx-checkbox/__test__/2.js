define("mx-checkbox/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");l.exports=a.extend({tmpl:function(e,n,l,a,s,t,c,u){if(l||(l=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,i=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(g,i)}}if(!t){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},_=/[!')(*]/g;t=function(e){return encodeURIComponent(s(e)).replace(_,x)}}if(!u){var o=/[\\'"]/g;u=function(e){return s(e).replace(o,"\\$&")}}var v="",p=e.list,m=e.viewId,h=e.text1,b=e.text2;v+='<div mxa="_zs_galleryac:_" class="_zs_galleryh"><div mxa="_zs_galleryac:a" class="_zs_galleryk">';for(var y=0,f=p.length;y<f;y++){var k=p[y];v+='<div><label mxa="_zs_galleryac:b" class="mr20 mb20"><span mx-change="'+n+"toggle({groupIndex:"+a(y)+",subIndex:'all'})\" mx-view=\"mx-checkbox/index?value="+t(k.value)+"&checked="+t(3==k.type)+"&indeterminate="+t(2==k.type)+'"></span>组'+a(k.value)+"</label></div><div>";for(var z=0,I=k.subs,w=I.length;z<w;z++){var $=I[z];v+='<label mxa="_zs_galleryac:c" class="mr20 mb20"><span mx-change="'+n+"toggle({groupIndex:"+a(y)+",subIndex:"+a(z)+'})" mx-view="mx-checkbox/index?value='+t($.value)+"&checked="+t($.checked)+'"></span>'+a($.value)+"</label>"}v+="</div>"}return v+='</div><div mxa="_zs_galleryac:d" class="_zs_galleryl"><div mxs="_zs_galleryac:_" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(m)+'_text_1"><span mxa="_zs_galleryac:e" class="_zs_galleryo">'+s(h)+'</span><i mxs="_zs_galleryac:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(m)+'_text_1">\n&#123;&#123;each list as group groupIndex&#125;&#125;\n&lt;div&gt;\n    &lt;label class="mr20 mb20"&gt;\n        &lt;mx-checkbox value="&#123;&#123;=group.value&#125;&#125;"\n            checked="&#123;&#123;=(group.type==3)&#125;&#125;" \n            indeterminate="&#123;&#123;=(group.type==2)&#125;&#125;" \n            mx-change="toggle(&#123;groupIndex:&#123;&#123;=groupIndex&#125;&#125;,subIndex:\'all\'&#125;)"/&gt;组&#123;&#123;=group.value&#125;&#125;\n    &lt;/label&gt;\n&lt;/div&gt;\n&lt;div&gt;\n    &#123;&#123;each group.subs as sub subIndex&#125;&#125;\n    &lt;label class="mr20 mb20"&gt;\n        &lt;mx-checkbox value="&#123;&#123;=sub.value&#125;&#125;"\n            checked="&#123;&#123;=sub.checked&#125;&#125;" \n            mx-change="toggle(&#123;groupIndex:&#123;&#123;=groupIndex&#125;&#125;,subIndex:&#123;&#123;=subIndex&#125;&#125;&#125;)"/&gt;&#123;&#123;=sub.value&#125;&#125;\n    &lt;/label&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/div&gt;\n&#123;&#123;/each&#125;&#125;\n        </pre></div><div mxa="_zs_galleryac:f" class="_zs_galleryl"><div mxs="_zs_galleryac:b" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(m)+'_text_2"><span mxa="_zs_galleryac:g" class="_zs_galleryo">'+s(b)+'</span><i mxs="_zs_galleryac:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(m)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            subs: [&#123;\n                value: 11\n            &#125;,&#123;\n                value: 12\n            &#125;,&#123;\n                value: 13\n            &#125;]\n        &#125;,&#123;\n            value: 2,\n            subs: [&#123;\n                value: 21\n            &#125;,&#123;\n                value: 22\n            &#125;,&#123;\n                value: 23\n            &#125;]\n        &#125;]\n        this.updater.digest(&#123;\n            list\n        &#125;);\n    &#125;,\n    'toggle&lt;change&gt;'(e) &#123;\n        let checked = e.target.checked;\n        let groupIndex = e.params.groupIndex,\n            subIndex = e.params.subIndex;\n\n        let list = this.updater.get('list');\n        list.forEach((group, gi) =&gt; &#123;\n            let checkes = [];\n            group.subs.forEach((sub, si) =&gt; &#123;\n                if((groupIndex == gi) && \n                    (subIndex == 'all' || subIndex == si))&#123;\n                    sub.checked = checked;\n                &#125;\n\n                if(sub.checked)&#123;\n                    checkes.push(sub.value);\n                &#125;\n            &#125;)\n\n            // 1：全不选\n            // 2：部分选\n            // 3：全选\n            group.type = (checkes.length &gt; 0) ? ((checkes.length == group.subs.length) ? 3 : 2) : 1;\n        &#125;)\n\n        this.updater.digest(&#123;\n            list\n        &#125;)\n    &#125;\n&#125;);\n        </pre></div></div>"},render:function(){this.updater.digest({list:[{value:1,subs:[{value:11},{value:12},{value:13}]},{value:2,subs:[{value:21},{value:22},{value:23}]}]})},"toggle<change>":function(e){var n=e.target.checked,l=e.params.groupIndex,a=e.params.subIndex,s=this.updater.get("list");s.forEach(function(e,s){var t=[];e.subs.forEach(function(e,c){l!=s||"all"!=a&&a!=c||(e.checked=n),e.checked&&t.push(e.value)}),e.type=t.length>0?t.length==e.subs.length?3:2:1}),this.updater.digest({list:s})}})});