define("mx-suggest/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,s,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var t=e("magix"),i=e("__test__/example"),n=(e("$"),t.Vframe);l.exports=i.extend({tmpl:function(e,s,l,t,i,n,_,a){if(l||(l=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},t=function(e){return i(e).replace(r,x)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return m[e]},c=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(c,g)}}if(!a){var o=/[\\'"]/g;a=function(e){return i(e).replace(o,"\\$&")}}var u="",v=e.viewId,y=e.text1,p=e.text2;return u+='<div mxa="_zs_gallerydV:_" class="_zs_galleryh"><div mxa="_zs_gallerydV:a" class="_zs_galleryk"><div mxs="_zs_gallerydV:_" class="mb20"><span class="color-9">以下示例：</span>直接更新提示数据</div><div id="'+t(v)+'_test" mx-show="'+s+'update()" mx-view="mx-suggest/index"></div></div><div mxa="_zs_gallerydV:b" class="clearfix"><div mxa="_zs_gallerydV:c" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_gallerydV:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_gallerydV:d" class="_zs_galleryo">'+i(y)+'</span><i mxs="_zs_gallerydV:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(v)+'_text_1">\n&lt;mx-suggest \n    id="&#123;&#123;=viewId&#125;&#125;_test"\n    mx-show="update()"/&gt;\n            </pre></div><div mxa="_zs_gallerydV:e" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_gallerydV:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_2"><span mxa="_zs_gallerydV:f" class="_zs_galleryo">'+i(p)+'</span><i mxs="_zs_gallerydV:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(v)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\nlet Vframe = Magix.Vframe;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id\n        &#125;);\n    &#125;,\n    'update&lt;show&gt;'(e) &#123;\n        let id = this.id + '_test';\n\n        // 当前输入框输入的值\n        let keyword = e.keyword;\n\n        // 传入的list格式请保持和初始化格式保持一致\n        // 即假设原来传入[&#123;id:'',name:''&#125;]\n        // 此处传入格式依然为[&#123;id:'',name:''&#125;]\n        let list = [1, 2, 3].map(text => &#123;\n            return Magix.guid('dynamic_');\n        &#125;)\n\n        Vframe.get(id).invoke('update', [list]);\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){this.updater.digest()},"update<show>":function(e){var s=this.id+"_test",l=(e.keyword,[1,2,3].map(function(e){return t.guid("dynamic_")}));n.get(s).invoke("update",[l])}})});