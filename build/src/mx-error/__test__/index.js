define("mx-error/__test__/index",["magix","__test__/example","$","mx-title/second","../index","mx-copy/index","__test__/hl","__test__/api"],(s,e,_)=>{s("mx-title/second"),s("../index"),s("mx-copy/index"),s("__test__/hl"),s("__test__/api");s("magix");var l=s("__test__/example");s("$");_.exports=l.extend({tmpl:function(s,e,_,l,i,a,r,t){if(_||(_=s),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,n=function(s){return"&"+d[s]+";"};i=function(s){return""+(null==s?"":s)},l=function(s){return i(s).replace(x,n)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(s){return c[s]},m=/[!')(*]/g;a=function(s){return encodeURIComponent(i(s)).replace(m,v)}}if(!t){var y=/[\\'"]/g;t=function(s){return i(s).replace(y,"\\$&")}}r||(r=function(s,e,_,l){for(l=s[g];--l;)if(s[_=g+l]===e)return _;return s[_=g+s[g]++]=e,_});var g="",o="",z=s.viewId,p=s.text1,b=s.text3,f=s.text2,u=s.text5,w=s.text4,E=s.options;return o+='<div mxs="_zs_gallerybs:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybs:_" class="clearfix"><div mxa="_zs_gallerybs:a" class="_zs_gallerye"><div mxa="_zs_gallerybs:b" class="_zs_galleryh"><div mxs="_zs_gallerybs:a" class="_zs_galleryk"><div mx-view="mx-error/index"></div></div><div mxa="_zs_gallerybs:c" class="_zs_galleryl"><div mxs="_zs_gallerybs:b" class="_zs_galleryj">默认404</div><div class="_zs_gallerym" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_1"><span mxa="_zs_gallerybs:d" class="_zs_galleryo">'+i(p)+'</span><i mxs="_zs_gallerybs:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+'_text_1">\n&lt;mx-error/&gt;</pre></div></div><div mxa="_zs_gallerybs:e" class="_zs_galleryh"><div mxs="_zs_gallerybs:d" class="_zs_galleryk"><div mx-view="mx-error/index?tip=%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF"></div></div><div mxa="_zs_gallerybs:f" class="_zs_galleryl"><div mxs="_zs_gallerybs:e" class="_zs_galleryj">404自定义提示</div><div class="_zs_gallerym" mx-success="'+e+'done({id:3})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_3"><span mxa="_zs_gallerybs:g" class="_zs_galleryo">'+i(b)+'</span><i mxs="_zs_gallerybs:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+'_text_3">\n&lt;mx-error tip="自定义提示信息"/&gt;</pre></div></div></div><div mxa="_zs_gallerybs:h" class="_zs_gallerye"><div mxa="_zs_gallerybs:i" class="_zs_galleryh"><div mxs="_zs_gallerybs:f" class="_zs_galleryk"><div mx-view="mx-error/index?type=502"></div></div><div mxa="_zs_gallerybs:j" class="_zs_galleryl"><div mxs="_zs_gallerybs:g" class="_zs_galleryj">502提示</div><div class="_zs_gallerym" mx-success="'+e+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_2"><span mxa="_zs_gallerybs:k" class="_zs_galleryo">'+i(f)+'</span><i mxs="_zs_gallerybs:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+'_text_2">\n&lt;mx-error type="502"/&gt;</pre></div></div><div mxa="_zs_gallerybs:l" class="_zs_galleryh"><div mxs="_zs_gallerybs:h" class="_zs_galleryk"><div mx-view="mx-error/index?type=500"></div></div><div mxa="_zs_gallerybs:m" class="_zs_galleryl"><div mxs="_zs_gallerybs:i" class="_zs_galleryj">500提示</div><div class="_zs_gallerym" mx-success="'+e+'done({id:5})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_5"><span mxa="_zs_gallerybs:n" class="_zs_galleryo">'+i(u)+'</span><i mxs="_zs_gallerybs:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+'_text_5">\n&lt;mx-error type="500"/&gt;</pre></div></div><div mxa="_zs_gallerybs:o" class="_zs_galleryh"><div mxs="_zs_gallerybs:j" class="_zs_galleryk"><div mx-view="mx-error/index?type=502&tip=%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%90%E7%A4%BA&btns=false"></div></div><div mxa="_zs_gallerybs:p" class="_zs_galleryl"><div mxs="_zs_gallerybs:k" class="_zs_galleryj">502自定义提示 + 不要按钮</div><div class="_zs_gallerym" mx-success="'+e+'done({id:4})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_4"><span mxa="_zs_gallerybs:q" class="_zs_galleryo">'+i(w)+'</span><i mxs="_zs_gallerybs:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+'_text_4">\n&lt;mx-error type="502" tip="自定义提示" btns="false"/&gt;</pre></div></div></div></div><div id="'+l(z)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+r(_,E)+'"></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"type",desc:"异常类型，可选404，500，502",type:"string",def:"404"},{key:"tip",desc:"自定义提示信息",type:"string",def:"404：抱歉，您查看的页面不存在或无权限查看当前页面<br/>500：Internal Server Error<br/>502：Bad Gateway"},{key:"btns",desc:"是否需要返回首页 + 返回上一页按钮",type:"boolean",def:"true"}]})}})});