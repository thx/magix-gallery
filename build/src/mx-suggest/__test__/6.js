define("mx-suggest/__test__/6",["magix","__test__/example","mx-form/index","mx-form/validator","$","../index","mx-copy/index","__test__/hl"],(e,s,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var a=e("magix"),t=e("__test__/example"),n=e("mx-form/index"),i=e("mx-form/validator"),r=(e("$"),a.Vframe);l.exports=t.extend({tmpl:function(e,s,l,a,t,n,i,r){if(l||(l=e),!t){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};t=function(e){return""+(null==e?"":e)},a=function(e){return t(e).replace(_,c)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return m[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(t(e)).replace(x,o)}}if(!r){var g=/[\\'"]/g;r=function(e){return t(e).replace(g,"\\$&")}}i||(i=function(e,s,l,a){for(a=e[v];--a;)if(e[l=v+a]===s)return l;return e[l=v+e[v]++]=s,l});var v="",u="",p=e.selected,y=e.viewId,f=e.msg,z=e.text1,h=e.text2;return u+='<div mxv mxa="_zs_galleryd0:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryd0:a" class="_zs_galleryk"><div mxs="_zs_galleryd0:_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><span class="color-brand">支持双向绑定</span>；动态更新提示数据；请求数据有延时，加loading</div></div><div mxa="_zs_galleryd0:b" class="mb10"><span mxs="_zs_galleryd0:a" class="color-9">当前选中：</span>'+a(p)+'</div><div mxv mxa="_zs_galleryd0:c" class="mb20"><div mxv="selected" mxe="'+s+"_0\" mxc=\"[{p:'selected',f:{required:true,refresh:true},a:'selected'}]\" id=\""+a(y)+'_test" mx-show="'+s+'update()" mx-view="mx-suggest/index?selected='+i(l,p)+'"></div><a mxs="_zs_galleryd0:b" href="javascript:;" class="btn ml10" mx-click="'+s+'check()">校验选择项</a>',f&&(u+='<span mxa="_zs_galleryd0:d" class="ml10">'+t(f)+"</span>"),u+='</div></div><div mxa="_zs_galleryd0:e" class="clearfix"><div mxa="_zs_galleryd0:f" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryd0:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(y)+'_text_1"><span mxa="_zs_galleryd0:g" class="_zs_galleryo">'+t(z)+'</span><i mxs="_zs_galleryd0:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(y)+'_text_1">\n&lt;mx-suggest \n    id="&#123;&#123;=viewId&#125;&#125;_test"\n    selected="&#123;&#123;:selected&#123;required:true&#125;&#125;&#125;"\n    mx-show="update()"/&gt;\n                </pre></div><div mxa="_zs_galleryd0:h" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryd0:e" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(y)+'_text_2"><span mxa="_zs_galleryd0:i" class="_zs_galleryo">'+t(h)+'</span><i mxs="_zs_galleryd0:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(y)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../../mx-form/index');\nlet Validator = require('@../../mx-form/validator');\nlet $ = require('$');\nlet Vframe = Magix.Vframe;\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() &#123;\n        this.updater.digest(&#123;\n            selected: ''\n        &#125;);\n    &#125;,\n    'update&lt;show&gt;'(e) &#123;\n        // 当前输入框输入的值\n        let keyword = e.keyword;\n\n        let instance = Vframe.get(this.id + '_test');\n        instance.invoke('showLoading');\n        setTimeout(() =&gt; &#123;\n            let list = [1, 2, 3].map(v =&gt; &#123;\n                return &#123;\n                    text: '测试' + v,\n                    value: v\n                &#125;;\n            &#125;)\n            instance.invoke('update', [list]);\n            instance.invoke('hideLoading');\n        &#125;, 1000);\n    &#125;,\n    'check&lt;click&gt;'(e)&#123;\n        let valid = this.isValid();\n        this.updater.digest(&#123;\n            msg: valid ? '&lt;span class=\"color-green\"&gt;校验通过&lt;/span&gt;' : '&lt;span class=\"color-red\"&gt;校验失败&lt;/span&gt;'\n        &#125;)\n    &#125;\n&#125;);\n                </pre></div></div></div>"},mixins:[n,i],render:function(){this.updater.digest({selected:""})},"update<show>":function(e){e.keyword;var s=r.get(this.id+"_test");s.invoke("showLoading"),setTimeout(function(){var e=[1,2,3].map(function(e){return{text:"测试"+e,value:e}});s.invoke("update",[e]),s.invoke("hideLoading")},1e3)},"check<click>":function(e){var s=this.isValid();this.updater.digest({msg:s?'<span class="color-green">校验通过</span>':'<span class="color-red">校验失败</span>'})}})});