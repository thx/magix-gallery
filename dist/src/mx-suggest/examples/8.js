define("mx-suggest/examples/8",["magix","examples/example","mx-form/index","mx-form/validator","$","../index","mx-copy/index","examples/hl"],(e,i,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var t=e("magix"),l=e("examples/example"),n=e("mx-form/index"),a=e("mx-form/validator"),r=(e("$"),t.Vframe);s.exports=l.extend({tmpl:function(e,i,s,t,l,n,a,r){if(s||(s=e),!l){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,o=function(e){return"&"+d[e]+";"};l=function(e){return""+(null==e?"":e)},t=function(e){return l(e).replace(m,o)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},_=/[!')(*]/g;n=function(e){return encodeURIComponent(l(e)).replace(_,c)}}if(!r){var v=/[\\'"]/g;r=function(e){return l(e).replace(v,"\\$&")}}a||(a=function(e,i,s,t){for(t=e[u];--t;)if(e[s=u+t]===i)return s;return e[s=u+e[u]++]=i,s});var u="",g="",y=e.selected,f=e.viewId,p=e.item,h=e.text1,z=e.text2;return g+='<div mxv mxa="_zs_galleryee:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryee:a" class="_zs_galleryj"><div mxs="_zs_galleryee:_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>动态更新list，初始化list为空，需要复现历史选中值，传入item = {text: \'\', value: \'\'} 完整对象</div><div>回车直接搜索当前关键词</div></div></div><div mxa="_zs_galleryee:b" class="mb10"><span mxs="_zs_galleryee:a" class="color-9">当前选中：</span>'+t(y)+'</div><div mxv mxa="_zs_galleryee:c" class="mb20"><div mxv="selected,item" mxe="'+i+"_0\" mxc=\"[{p:'selected',f:{refresh:true},a:'selected'},{p:'item',a:'item'}]\" class=\"w200\" id=\""+t(f)+'_test" mx-show="'+i+'show()" mx-focusout="'+i+'hide()" mx-view="mx-suggest/index?selected='+a(s,y)+"&item="+a(s,p)+'&dynamicEnter=true"></div></div></div><div mxa="_zs_galleryee:d" class="clearfix"><div mxa="_zs_galleryee:e" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryee:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_1"><span mxa="_zs_galleryee:f" class="_zs_galleryn">'+l(h)+'</span><i mxs="_zs_galleryee:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(f)+'_text_1">\n&lt;mx-suggest class="w200"\n    id="&#123;&#123;=viewId&#125;&#125;_test"\n    selected="&#123;&#123;:selected&#123;refresh:true&#125;&#125;&#125;"\n    item="&#123;&#123;:item&#125;&#125;"\n    dynamic-enter="true"\n    mx-show="show()"\n    mx-focusout="hide()"/&gt;\n            </pre></div><div mxa="_zs_galleryee:g" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryee:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+i+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_2"><span mxa="_zs_galleryee:h" class="_zs_galleryn">'+l(z)+'</span><i mxs="_zs_galleryee:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(f)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../../mx-form/index');\nlet Validator = require('@../../mx-form/validator');\nlet $ = require('$');\nlet Vframe = Magix.Vframe;\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() &#123;\n        this.updater.digest(&#123;\n            selected: ''\n        &#125;);\n    &#125;,\n    /**\n     * 显示下拉框时\n     */\n    'show&lt;show&gt;'(e) &#123;\n        let that = this;\n\n        // 输入框输入关键词时触发show\n        // 当前输入框输入的值\n        let keyword = e.keyword;\n        \n        let instance = Vframe.get(this.id + '_test');\n        instance.invoke('showLoading');\n\n        that['hide&lt;focusout&gt;']();\n        that.delayTimer = setTimeout(that.wrapAsync(() =&gt; &#123;\n            let list = [1, 2, 3].map(v =&gt; &#123;\n                return &#123;\n                    text: '测试' + v,\n                    value: v\n                &#125;;\n            &#125;)\n            instance.invoke('update', [list]);\n            instance.invoke('hideLoading');\n        &#125;), 1000);\n    &#125;,\n    /**\n     * 关闭下拉框时，包括输入框失去焦点时\n     */\n    'hide&lt;focusout&gt;'(e)&#123;\n        if (this.delayTimer) &#123;\n            clearTimeout(this.delayTimer);\n        &#125;\n    &#125;\n&#125;);\n            </pre></div></div></div>"},mixins:[n,a],render:function(){var e={text:"test",value:"test"};this.updater.digest({item:e,selected:e.value})},"show<show>":function(e){e.keyword;var i=r.get(this.id+"_test");i.invoke("showLoading"),this["hide<focusout>"](),this.delayTimer=setTimeout(this.wrapAsync(function(){var e=[1,2,3].map(function(e){return{text:"测试"+e,value:e}});i.invoke("update",[e]),i.invoke("hideLoading")}),1e3)},"hide<focusout>":function(e){this.delayTimer&&clearTimeout(this.delayTimer)}})});