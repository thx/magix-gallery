define("mx-editor/__test__/3",["magix","__test__/example","$","mx-table/index","../index","mx-copy/index","__test__/hl"],(t,e,l)=>{t("mx-table/index"),t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var n=t("__test__/example");t("$");l.exports=n.extend({tmpl:function(t,e,l,n,d,i,a,r){if(l||(l=t),!d){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,g=function(t){return"&"+s[t]+";"};d=function(t){return""+(null==t?"":t)},n=function(t){return d(t).replace(_,g)}}if(!i){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(t){return x[t]},b=/[!')(*]/g;i=function(t){return encodeURIComponent(d(t)).replace(b,m)}}if(!r){var c=/[\\'"]/g;r=function(t){return d(t).replace(c,"\\$&")}}a||(a=function(t,e,l,n){for(n=t[o];--n;)if(t[l=o+n]===e)return l;return t[l=o+t[o]++]=e,l});var o="",v="",u=t.viewId,y=t.text1;return v+='<div mxa="_zs_gallerybb:_" class="_zs_galleryh"><div mxa="_zs_gallerybb:a" class="_zs_galleryk"><div mxs="_zs_gallerybb:_" class="mb10 color-9">在表格中使用：</div><div mxs="_zs_gallerybb:a" class="mb20">表格的规范是选中行的操作按钮才会显示</div><div mxa="_zs_gallerybb:b" mx-view="mx-table/index" class="mb20"><div><table mxa="_zs_gallerybb:c" class="table"><thead mxs="_zs_gallerybb:b"><tr><th width="200">序号</th><th width="200">组件</th></tr></thead><tbody><tr mxs="_zs_gallerybb:c"><td>1、无校验规则</td><td><div mx-view="mx-editor/index?width=80&content=300&small=true"></div></td></tr><tr><td mxs="_zs_gallerybb:d">2、不能小于200</td><td><div mx-view="mx-editor/index?width=80&content=300&rules='+a(l,{min:[200,"不能小于200"]})+'&small=true"></div></td></tr></tbody></table></div></div></div><div mxa="_zs_gallerybb:d" class="_zs_galleryl"><div mxs="_zs_gallerybb:e" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_gallerybb:e" class="_zs_galleryo">'+d(y)+'</span><i mxs="_zs_gallerybb:f" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(u)+'_text_1">\n&lt;mx-table class="mb20"&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th width="200"&gt;序号&lt;/th&gt;\n                &lt;th width="200"&gt;组件&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1、无校验规则&lt;/td&gt;\n                &lt;td&gt;\n                    &lt;mx-editor \n                        width="80"\n                        content="300"\n                        small="true"/&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;2、不能小于200&lt;/td&gt;\n                &lt;td&gt;\n                    &lt;mx-editor \n                        width="80"\n                        content="300"\n                        rules="&#123;&#123;@&#123;min:[200,\'不能小于200\']&#125;&#125;&#125;"\n                        small="true"/&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div></div>'},render:function(){this.updater.digest({content:2e3})},"change<edit>":function(t){this.updater.digest({content:t.editText})}})});