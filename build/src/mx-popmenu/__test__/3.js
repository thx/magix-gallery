define("mx-popmenu/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var n=e("magix"),t=e("__test__/example");e("$");n.applyStyle("_zs_galleryal","._zs_galleryis{width:24px;height:24px;border-radius:4px;text-align:center;line-height:22px;cursor:pointer;color:#ccc;border:1px solid var(--color-border)}"),s.exports=t.extend({tmpl:function(e,l,s,n,t,a,_,r){if(s||(s=e),!t){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,x=function(e){return"&"+c[e]+";"};t=function(e){return""+(null==e?"":e)},n=function(e){return t(e).replace(i,x)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return o[e]},p=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(p,d)}}if(!r){var m=/[\\'"]/g;r=function(e){return t(e).replace(m,"\\$&")}}_||(_=function(e,l,s,n){for(n=e[g];--n;)if(e[s=g+n]===l)return s;return e[s=g+e[g]++]=l,s});var g="",u="",v=e.selected,y=e.viewId,z=e.text1,f=e.text2;return u+='<div mxa="_zs_galleryc(:_" class="_zs_galleryg"><div mxa="_zs_galleryc(:a" class="_zs_galleryj"><div mxa="_zs_galleryc(:b" class="mb20"><span mxs="_zs_galleryc(:_" class="color-9">trigger：</span><span class="_zs_galleryis mc-iconfont" mx-change="'+l+'select()" mx-view="mx-popmenu/index?menus='+_(s,[{value:1,text:"操作1"},{value:2,text:"操作2"},{value:3,text:"操作3"}])+'">&#xe7be;</span><span mxs="_zs_galleryc(:a" class="color-9 ml40">当前选中：</span><span>',v&&(u+="操作"+n(v)),u+='</span></div></div><div mxa="_zs_galleryc(:c" class="_zs_galleryk"><div mxs="_zs_galleryc(:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_1"><span mxa="_zs_galleryc(:d" class="_zs_galleryn">'+t(z)+'</span><i mxs="_zs_galleryc(:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(y)+'_text_1">\n&lt;mx-popmenu \n    class="icon mc-iconfont"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"&gt;&#38;&#35;xe7be;&lt;/mx-popmenu&gt;\n        </pre></div><div mxa="_zs_galleryc(:e" class="_zs_galleryk"><div mxs="_zs_galleryc(:d" class="_zs_galleryi">CSS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_2"><span mxa="_zs_galleryc(:f" class="_zs_galleryn">'+t(f)+'</span><i mxs="_zs_galleryc(:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(y)+'_text_2">\n.icon&#123;\n    width: 24px;\n    height: 24px;\n    border-radius: 4px;\n    text-align: center;\n    line-height: 22px;\n    cursor: pointer;\n    color: #ccc;\n    border: 1px solid #e6e6e6;\n&#125;\n        </pre></div></div>'},render:function(){this.updater.digest()},"select<change>":function(e){var l=e.selected;this.updater.digest({selected:l})}})});