define("mx-suggest/__test__/7",["magix","__test__/example","mx-form/index","mx-form/validator","$","../index","mx-copy/index","__test__/hl"],(e,s,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var l=e("magix"),a=e("__test__/example"),i=e("mx-form/index"),n=e("mx-form/validator"),r=(e("$"),l.Vframe);t.exports=a.extend({tmpl:function(e,s,t,l,a,i,n,r){if(t||(t=e),!a){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};a=function(e){return""+(null==e?"":e)},l=function(e){return a(e).replace(_,m)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return c[e]},o=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(o,x)}}if(!r){var g=/[\\'"]/g;r=function(e){return a(e).replace(g,"\\$&")}}n||(n=function(e,s,t,l){for(l=e[v];--l;)if(e[t=v+l]===s)return t;return e[t=v+e[v]++]=s,t});var v="",u="",p=e.selected,y=e.viewId,f=e.item,z=e.msg,h=e.text1,w=e.text2;return u+='<div mxv mxa="_zs_galleryd%:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryd%:a" class="_zs_galleryk"><div mxs="_zs_galleryd%:_" class="mb20 clearfix"><span class="color-9">以下示例：</span>动态更新list，初始化list为空，需要复现历史选中值，传入item = {text: \'\', value: \'\'} 完整对象</div><div mxa="_zs_galleryd%:b" class="mb10"><span mxs="_zs_galleryd%:a" class="color-9">当前选中：</span>'+l(p)+'</div><div mxv mxa="_zs_galleryd%:c" class="mb20"><div mxv="selected,item" mxe="'+s+"_0\" mxc=\"[{p:'selected',f:{required:true,refresh:true},a:'selected'}]\" id=\""+l(y)+'_test" mx-show="'+s+'update()" mx-view="mx-suggest/index?selected='+n(t,p)+"&item="+n(t,f)+'"></div><a mxs="_zs_galleryd%:b" href="javascript:;" class="btn ml10" mx-click="'+s+'check()">校验选择项</a>',z&&(u+='<span mxa="_zs_galleryd%:d" class="ml10">'+a(z)+"</span>"),u+='</div></div><div mxa="_zs_galleryd%:e" class="clearfix"><div mxa="_zs_galleryd%:f" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryd%:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_1"><span mxa="_zs_galleryd%:g" class="_zs_galleryo">'+a(h)+'</span><i mxs="_zs_galleryd%:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(y)+'_text_1">\n&lt;mx-suggest \n    id="&#123;&#123;=viewId&#125;&#125;_test"\n    selected="&#123;&#123;:selected&#123;required:true&#125;&#125;&#125;"\n    item="&#123;&#123;@item&#125;&#125;"\n    mx-show="update()"/&gt;\n            </pre></div><div mxa="_zs_galleryd%:h" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryd%:e" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_2"><span mxa="_zs_galleryd%:i" class="_zs_galleryo">'+a(w)+'</span><i mxs="_zs_galleryd%:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(y)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../../mx-form/index');\nlet Validator = require('@../../mx-form/validator');\nlet $ = require('$');\nlet Vframe = Magix.Vframe;\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() &#123;\n        let item = &#123;\n            text: '测试1',\n            value: 1\n        &#125;\n        this.updater.digest(&#123;\n            item,\n            selected: item.value\n        &#125;);\n    &#125;,\n    'update&lt;show&gt;'(e) &#123;\n        // 当前输入框输入的值\n        let keyword = e.keyword;\n\n        let instance = Vframe.get(this.id + '_test');\n        instance.invoke('showLoading');\n        setTimeout(() =&gt; &#123;\n            let list = [1, 2, 3].map(v =&gt; &#123;\n                return &#123;\n                    text: '测试' + v,\n                    value: v\n                &#125;;\n            &#125;)\n            instance.invoke('update', [list]);\n            instance.invoke('hideLoading');\n        &#125;, 1000);\n    &#125;,\n    'check&lt;click&gt;'(e)&#123;\n        let valid = this.isValid();\n        this.updater.digest(&#123;\n            msg: valid ? '&lt;span class=\"color-green\"&gt;校验通过&lt;/span&gt;' : '&lt;span class=\"color-red\"&gt;校验失败&lt;/span&gt;'\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>"},mixins:[i,n],render:function(){var e={text:"测试1",value:1};this.updater.digest({item:e,selected:e.value})},"update<show>":function(e){e.keyword;var s=r.get(this.id+"_test");s.invoke("showLoading"),setTimeout(function(){var e=[1,2,3].map(function(e){return{text:"测试"+e,value:e}});s.invoke("update",[e]),s.invoke("hideLoading")},1e3)},"check<click>":function(e){var s=this.isValid();this.updater.digest({msg:s?'<span class="color-green">校验通过</span>':'<span class="color-red">校验失败</span>'})}})});