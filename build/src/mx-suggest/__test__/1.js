define("mx-suggest/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,s,i)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var l=e("magix"),t=e("__test__/example"),n=(e("$"),l.Vframe);i.exports=t.extend({tmpl:function(e,s,i,l,t,n,_,a){if(i||(i=e),!t){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};t=function(e){return""+(null==e?"":e)},l=function(e){return t(e).replace(r,x)}}if(!n){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return g[e]},c=/[!')(*]/g;n=function(e){return encodeURIComponent(t(e)).replace(c,m)}}if(!a){var o=/[\\'"]/g;a=function(e){return t(e).replace(o,"\\$&")}}var u="",v=e.viewId,y=e.text1,p=e.text2;return u+='<div mxa="_zs_galleryd?:_" class="_zs_galleryg"><div mxa="_zs_galleryd?:a" class="_zs_galleryj"><div mxs="_zs_galleryd?:_" class="mb20"><span class="color-9">以下示例：</span>无loading直接更新提示数据</div><div id="'+l(v)+'_test" mx-show="'+s+'update()" mx-view="mx-suggest/index"></div></div><div mxa="_zs_galleryd?:b" class="clearfix"><div mxa="_zs_galleryd?:c" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryd?:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_galleryd?:d" class="_zs_galleryn">'+t(y)+'</span><i mxs="_zs_galleryd?:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-suggest \n    id="&#123;&#123;=viewId&#125;&#125;_test"\n    mx-show="update()"/&gt;\n            </pre></div><div mxa="_zs_galleryd?:e" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryd?:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_2"><span mxa="_zs_galleryd?:f" class="_zs_galleryn">'+t(p)+'</span><i mxs="_zs_galleryd?:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\nlet Vframe = Magix.Vframe;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id\n        &#125;);\n    &#125;,\n    'update&lt;show&gt;'(e) &#123;\n        let id = this.id + '_test';\n\n        // 当前输入框输入的值\n        let keyword = e.keyword;\n\n        // 传入的list格式请保持和初始化格式保持一致\n        // 即假设原来传入[&#123;id:'',name:''&#125;]\n        // 此处传入格式依然为[&#123;id:'',name:''&#125;]\n        let list = [1, 2, 3].map(text => &#123;\n            return Magix.guid('dynamic_');\n        &#125;)\n\n        Vframe.get(id).invoke('update', [list]);\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){this.updater.digest()},"update<show>":function(e){var s=this.id+"_test",i=(e.keyword,[1,2,3].map(function(e){return l.guid("dynamic_")}));n.get(s).invoke("update",[i])}})});