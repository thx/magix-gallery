define("mx-popmenu/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var n=e("magix"),a=e("__test__/example");e("$");n.applyStyle("_zs_galleryal","._zs_gallerykp{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykq{width:24px;height:24px;border-radius:4px;text-align:center;line-height:22px;cursor:pointer;color:#ccc;border:1px solid #e6e6e6}"),s.exports=a.extend({tmpl:function(e,l,s,n,a,t,_,r){if(s||(s=e),!a){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,x=function(e){return"&"+c[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(i,x)}}if(!t){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return o[e]},p=/[!')(*]/g;t=function(e){return encodeURIComponent(a(e)).replace(p,d)}}if(!r){var g=/[\\'"]/g;r=function(e){return a(e).replace(g,"\\$&")}}_||(_=function(e,l,s,n){for(n=e[m];--n;)if(e[s=m+n]===l)return s;return e[s=m+e[m]++]=l,s});var m="",u="",y=e.selected,v=e.viewId,z=e.text1,f=e.text2;return u+='<div mxa="_zs_gallerycF:_" class="_zs_galleryh"><div mxa="_zs_gallerycF:a" class="_zs_galleryk"><div mxa="_zs_gallerycF:b" class="mb20"><span mxs="_zs_gallerycF:_" class="color-9">trigger：</span><span class="_zs_gallerykq mc-iconfont" mx-change="'+l+'select()" mx-view="mx-popmenu/index?menus='+_(s,[{value:1,text:"操作1"},{value:2,text:"操作2"},{value:3,text:"操作3"}])+'">&#xe7be;</span><span mxs="_zs_gallerycF:a" class="color-9 ml40">当前选中：</span><span>',y&&(u+="操作"+n(y)),u+='</span></div></div><div mxa="_zs_gallerycF:c" class="_zs_galleryl"><div mxs="_zs_gallerycF:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_gallerycF:d" class="_zs_galleryo">'+a(z)+'</span><i mxs="_zs_gallerycF:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(v)+'_text_1">\n&lt;mx-popmenu \n    class="icon mc-iconfont"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"&gt;&#38;&#35;xe7be;&lt;/mx-popmenu&gt;\n        </pre></div><div mxa="_zs_gallerycF:e" class="_zs_galleryl"><div mxs="_zs_gallerycF:d" class="_zs_galleryj">CSS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_2"><span mxa="_zs_gallerycF:f" class="_zs_galleryo">'+a(f)+'</span><i mxs="_zs_gallerycF:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(v)+'_text_2">\n.icon&#123;\n    width: 24px;\n    height: 24px;\n    border-radius: 4px;\n    text-align: center;\n    line-height: 22px;\n    cursor: pointer;\n    color: #ccc;\n    border: 1px solid #e6e6e6;\n&#125;\n        </pre></div></div>'},render:function(){this.updater.digest()},"select<change>":function(e){var l=e.selected;this.updater.digest({selected:l})}})});