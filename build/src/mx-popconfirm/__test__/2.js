define("mx-popconfirm/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var l=e("magix"),n=e("__test__/example");e("$");l.applyStyle("_zs_galleryal","._zs_galleryjL{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjM,._zs_galleryjN{margin-right:20px;padding-top:32px}._zs_galleryjO{position:relative;margin-right:20px}._zs_galleryjO ._zs_galleryjP{margin-bottom:136px}._zs_galleryjO ._zs_galleryjQ{position:absolute;top:50%;left:0;width:100%;height:30px;margin-top:-15px;line-height:30px;text-align:center}"),s.exports=n.extend({tmpl:function(e,t,s,l,n,a,i,c){if(s||(s=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},p=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(p,x)}}if(!a){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return _[e]},o=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(o,m)}}if(!c){var E=/[\\'"]/g;c=function(e){return n(e).replace(E,"\\$&")}}var d="",g=e.cur,v=e.viewId,f=e.text1,y=e.text2;return d+='<div mxa="_zs_galleryc0:_" class="_zs_galleryh"><div mxa="_zs_galleryc0:a" class="_zs_galleryk"><div mxa="_zs_galleryc0:b" class="clearfix mb20"><div mxs="_zs_galleryc0:_" class="fl _zs_galleryjM"><div class="mb20"><span class="btn" mx-popconfirm="'+t+'test({text:\'左上对齐（lt）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=lt">左上对齐（lt）</span></div><div class="mb20"><span class="btn" mx-popconfirm="'+t+'test({text:\'左中对齐（lc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=lc">左中对齐（lc）</span></div><span class="btn" mx-popconfirm="'+t+'test({text:\'左下对齐（lb）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=lb">左下对齐（lb）</span></div><div mxa="_zs_galleryc0:c" class="fl _zs_galleryjO"><div mxs="_zs_galleryc0:a" class="_zs_galleryjP"><span class="btn mr20" mx-popconfirm="'+t+'test({text:\'上左对齐（tl）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=tl">上左对齐（tl）</span><span class="btn mr20" mx-popconfirm="'+t+'test({text:\'上中对齐（tc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=tc">上中对齐（tc）</span><span class="btn" mx-popconfirm="'+t+'test({text:\'上右对齐（tr）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=tr">上右对齐（tr）</span></div>',g&&(d+='<div mxa="_zs_galleryc0:d" class="_zs_galleryjQ">确认操作：'+l(g)+"</div>"),d+='<div mxs="_zs_galleryc0:b"><span class="btn mr20" mx-popconfirm="'+t+'test({text:\'下左对齐（bl）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=bl">下左对齐（bl）</span><span class="btn mr20" mx-popconfirm="'+t+'test({text:\'下中对齐（bc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=bc">下中对齐（bc）</span><span class="btn" mx-popconfirm="'+t+'test({text:\'下右对齐（br）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=br">下右对齐（br）</span></div></div><div mxs="_zs_galleryc0:c" class="fl _zs_galleryjN"><div class="mb20"><span class="btn" mx-popconfirm="'+t+'test({text:\'右上对齐（rt）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=rt">右上对齐（rt）</span></div><div class="mb20"><span class="btn" mx-popconfirm="'+t+'test({text:\'右中对齐（rc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=rc">右中对齐（rc）</span></div><span class="btn" mx-popconfirm="'+t+'test({text:\'右下对齐（rb）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=rb">右下对齐（rb）</span></div></div></div><div mxa="_zs_galleryc0:e" class="clearfix"><div mxa="_zs_galleryc0:f" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryc0:d" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_galleryc0:g" class="_zs_galleryo">'+n(f)+'</span><i mxs="_zs_galleryc0:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-popconfirm class="btn"\n    content="确认操作吗？"\n    place="rc"\n    mx-popconfirm="submit()"&gt;右中对齐（rc）&lt;/mx-popconfirm&gt;</pre></div><div mxa="_zs_galleryc0:h" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryc0:f" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_2"><span mxa="_zs_galleryc0:i" class="_zs_galleryo">'+n(y)+'</span><i mxs="_zs_galleryc0:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'submit&lt;popconfirm&gt;'(e)&#123;\n        // 确认操作之后的回调 \n    &#125;\n&#125;);</pre></div></div></div>"},render:function(){this.updater.digest()},"test<popconfirm>":function(e){var t=e.params.text;this.updater.digest({cur:t})}})});