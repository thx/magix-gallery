define("mx-uploader/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,a,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var r=e("__test__/example");e("$");s.exports=r.extend({tmpl:function(e,a,s,r,n,l,t,i){if(s||(s=e),!n){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+c[e]+";"};n=function(e){return""+(null==e?"":e)},r=function(e){return n(e).replace(d,m)}}if(!l){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return o[e]},_=/[!')(*]/g;l=function(e){return encodeURIComponent(n(e)).replace(_,g)}}if(!i){var p=/[\\'"]/g;i=function(e){return n(e).replace(p,"\\$&")}}var u="",x=e.viewId,v=e.text1,y=e.text2;return u+='<div mxa="_zs_gallerye@:_" class="_zs_galleryg"><div mxs="_zs_gallerye@:_" class="_zs_galleryj"><div class="btn btn-brand mr10" mx-error="'+a+'uploadError()" mx-success="'+a+'uploadSuccess()" mx-view="mx-uploader/index?action=%2Fcreative%2Fupload.action&method=POST&name=images&multiple=true&accept=image%2Fjpeg%2Cimage%2Fpng%2Cimage%2Fjpg">多个上传</div><div class="btn btn-brand mr10" mx-error="'+a+'uploadError()" mx-success="'+a+'uploadSuccess()" mx-view="mx-uploader/index?action=%2Fcreative%2FuploadImages.action&method=POST&name=images&accept=image%2Fjpeg%2Cimage%2Fpng%2Cimage%2Fjpg">单个上传</div><div class="btn btn-disabled" mx-error="'+a+'uploadError()" mx-success="'+a+'uploadSuccess()" mx-view="mx-uploader/index?action=%2Fcreative%2FuploadImages.action&method=POST&name=images&disabled=true&accept=image%2Fjpeg%2Cimage%2Fpng%2Cimage%2Fjpg">禁用上传</div></div><div mxa="_zs_gallerye@:a" class="clearfix"><div mxa="_zs_gallerye@:b" class="_zs_galleryk _zs_galleryd _zs_galleryf"><div mxs="_zs_gallerye@:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(x)+'_text_1"><span mxa="_zs_gallerye@:c" class="_zs_galleryn">'+n(v)+'</span><i mxs="_zs_gallerye@:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(x)+'_text_1">\n&lt;mx-uploader class="btn btn-brand mr10"\n    action="/creative/upload.action" \n    method="POST"\n    name="images"\n    multiple="true"\n    accept="image/jpeg,image/png,image/jpg"\n    mx-error="uploadError()"\n    mx-success="uploadSuccess()"&gt;\n    多个上传&lt;/mx-uploader&gt;\n\n&lt;mx-uploader class="btn btn-brand mr10"\n    action="/creative/uploadImages.action" \n    method="POST"\n    name="images"\n    accept="image/jpeg,image/png,image/jpg"\n    mx-error="uploadError()"\n    mx-success="uploadSuccess()"&gt;\n    单个上传&lt;/mx-uploader&gt;\n\n&lt;mx-uploader class="btn btn-disabled"\n    action="/creative/uploadImages.action" \n    method="POST"\n    name="images"\n    disabled="true"\n    accept="image/jpeg,image/png,image/jpg"\n    mx-error="uploadError()"\n    mx-success="uploadSuccess()"&gt;\n    禁用上传&lt;/mx-uploader&gt;</pre></div><div mxa="_zs_gallerye@:d" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerye@:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+l(x)+'_text_2"><span mxa="_zs_gallerye@:e" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_gallerye@:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(x)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'uploadSuccess&lt;success&gt;'(e) &#123;\n        // e.response\n    &#125;,\n    'uploadError&lt;error&gt;'(e) &#123;\n        // e.error\n    &#125;\n&#125;);</pre></div></div></div>"},render:function(){this.updater.digest({text:"123132"})},"uploadSuccess<success>":function(e){},"uploadError<error>":function(e){},"test<click>":function(e){this.updater.digest({text:"123"})}})});