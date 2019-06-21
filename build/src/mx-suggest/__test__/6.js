define("mx-suggest/__test__/6",["magix","__test__/example","mx-form/index","mx-form/validator","$","../index","mx-copy/index","__test__/hl"],(e,s,i)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var t=e("magix"),n=e("__test__/example"),l=e("mx-form/index"),a=e("mx-form/validator"),d=(e("$"),t.Vframe);i.exports=n.extend({tmpl:function(e,s,i,t,n,l,a,d){if(i||(i=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,o=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(_,o)}}if(!l){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},x=/[!')(*]/g;l=function(e){return encodeURIComponent(n(e)).replace(x,c)}}if(!d){var v=/[\\'"]/g;d=function(e){return n(e).replace(v,"\\$&")}}a||(a=function(e,s,i,t){for(t=e[g];--t;)if(e[i=g+t]===s)return i;return e[i=g+e[g]++]=s,i});var g="",u="",y=e.selected,f=e.viewId,h=e.text1,p=e.text2;return u+='<div mxv mxa="_zs_galleryd::_" class="_zs_galleryg"><div mxv mxa="_zs_galleryd::a" class="_zs_galleryj"><div mxs="_zs_galleryd::_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div class="color-brand">支持双向绑定</div><div>输入关键词动态获取提示数据；请求数据有延时，加loading</div><div>回车默认选中第一个</div></div></div><div mxa="_zs_galleryd::b" class="mb10"><span mxs="_zs_galleryd::a" class="color-9">当前选中：</span>'+t(y)+'</div><div mxv mxa="_zs_galleryd::c" class="mb20"><div mxv="selected" mxe="'+s+'_0" mxc="[{p:\'selected\',f:{refresh:true},a:\'selected\'}]" class="w200" id="'+t(f)+'_test" mx-show="'+s+'show()" mx-focusout="'+s+'hide()" mx-view="mx-suggest/index?selected='+a(i,y)+'"></div></div></div><div mxa="_zs_galleryd::d" class="clearfix"><div mxa="_zs_galleryd::e" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryd::b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(f)+'_text_1"><span mxa="_zs_galleryd::f" class="_zs_galleryn">'+n(h)+'</span><i mxs="_zs_galleryd::c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(f)+'_text_1">\n&lt;mx-suggest class="w200"\n    id="&#123;&#123;=viewId&#125;&#125;_test"\n    selected="&#123;&#123;:selected&#123;refresh:true&#125;&#125;&#125;"\n    mx-show="show()"\n    mx-focusout="hide()"/&gt;\n                </pre></div><div mxa="_zs_galleryd::g" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryd::d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+l(f)+'_text_2"><span mxa="_zs_galleryd::h" class="_zs_galleryn">'+n(p)+'</span><i mxs="_zs_galleryd::c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(f)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../../mx-form/index');\nlet Validator = require('@../../mx-form/validator');\nlet $ = require('$');\nlet Vframe = Magix.Vframe;\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() &#123;\n        this.updater.digest(&#123;\n            selected: ''\n        &#125;);\n    &#125;,\n    /**\n     * 显示下拉框时\n     */\n    'show&lt;show&gt;'(e) &#123;\n        let that = this;\n\n        // 输入框输入关键词时触发show\n        // 当前输入框输入的值\n        let keyword = e.keyword;\n        \n        let instance = Vframe.get(this.id + '_test');\n        instance.invoke('showLoading');\n\n        that['hide&lt;focusout&gt;']();\n        that.delayTimer = setTimeout(that.wrapAsync(() =&gt; &#123;\n            let list = [1, 2, 3].map(v =&gt; &#123;\n                return &#123;\n                    text: '测试' + v,\n                    value: v\n                &#125;;\n            &#125;)\n            instance.invoke('update', [list]);\n            instance.invoke('hideLoading');\n        &#125;), 1000);\n    &#125;,\n    /**\n     * 关闭下拉框时，包括输入框失去焦点时\n     */\n    'hide&lt;focusout&gt;'(e)&#123;\n        if (this.delayTimer) &#123;\n            clearTimeout(this.delayTimer);\n        &#125;\n    &#125;\n&#125;);\n                </pre></div></div></div>"},mixins:[l,a],render:function(){this.updater.digest({selected:""})},"show<show>":function(e){e.keyword;var s=d.get(this.id+"_test");s.invoke("showLoading"),this["hide<focusout>"](),this.delayTimer=setTimeout(this.wrapAsync(function(){var e=[1,2,3].map(function(e){return{text:"测试"+e,value:e}});s.invoke("update",[e]),s.invoke("hideLoading")}),1e3)},"hide<focusout>":function(e){this.delayTimer&&clearTimeout(this.delayTimer)}})});