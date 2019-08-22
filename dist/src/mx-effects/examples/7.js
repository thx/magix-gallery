define("mx-effects/examples/7",["magix","examples/example","$","../notice","mx-copy/index","examples/hl"],(e,t,n)=>{e("../notice"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");n.exports=i.extend({tmpl:function(e,t,n,i,l,c,E,s){if(n||(n=e),!l){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,o=function(e){return"&"+a[e]+";"};l=function(e){return""+(null==e?"":e)},i=function(e){return l(e).replace(r,o)}}if(!c){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return g[e]},x=/[!')(*]/g;c=function(e){return encodeURIComponent(l(e)).replace(x,m)}}if(!s){var f=/[\\'"]/g;s=function(e){return l(e).replace(f,"\\$&")}}var h="",A=e.viewId,d=e.text1;return h+='<div mxa="_zs_gallerybY:_" class="_zs_galleryg"><div mxs="_zs_gallerybY:_" class="_zs_galleryj"><div class="mb20" mx-view="mx-effects/notice?type=highlight&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight"><span>品牌色重要信息提示（innerHTML）</span><a class="color-brand" href="https://www.taobao.com/" rel="noopener noreferrer" target="_blank">查看链接</a></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&icon=false&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E6%97%A0icon%EF%BC%89"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&radius=true&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E5%B8%A6%E5%9C%86%E8%A7%92%EF%BC%89"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&textAlign=center&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E6%96%87%E6%A1%88%E5%B1%85%E4%B8%AD%EF%BC%89"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&border=true&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E5%B8%A6%E8%BE%B9%E6%A1%86%EF%BC%8C%E9%BB%98%E8%AE%A4%E5%B8%A6%E8%BE%B9%E6%A1%86%E9%83%BD%E5%B8%A6%E5%9C%86%E8%A7%92%EF%BC%89"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&border=true&icon=false&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E5%B8%A6%E8%BE%B9%E6%A1%86%E6%97%A0icon%EF%BC%89"></div></div><div mxa="_zs_gallerybY:a" class="_zs_galleryk"><div mxs="_zs_gallerybY:a" class="_zs_galleryi">HTML Code（icon品牌色）</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+c(A)+'_text_1"><span mxa="_zs_gallerybY:b" class="_zs_galleryn">'+l(d)+'</span><i mxs="_zs_gallerybY:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(A)+'_text_1">\n&lt;mx-effects.notice \n    type="highlight" \n    content="品牌色重要信息提示"/&gt;\n\n&lt;!-- innerHTML --&gt;\n&lt;mx-effects.notice \n    type="highlight"&gt;\n    &lt;span&gt;品牌色重要信息提示（innerHTML）&lt;/span&gt;\n    &lt;a class="color-brand" href="https://www.taobao.com/" rel="noopener noreferrer" target="_blank"&gt;查看链接&lt;/a&gt;\n&lt;/mx-effects.notice&gt;\n\n&lt;!-- 无icon --&gt;\n&lt;mx-effects.notice \n    type="highlight" \n    icon="false"\n    content="品牌色重要信息提示（无icon）"/&gt;\n\n&lt;!-- 带圆角 --&gt;\n&lt;mx-effects.notice \n    type="highlight" \n    radius="true"\n    content="品牌色重要信息提示（带圆角）"/&gt;\n\n&lt;!-- 文案居中 --&gt;\n&lt;mx-effects.notice \n    type="highlight" \n    text-align="center" \n    content="品牌色重要信息提示（文案居中）"class="mb20"/&gt;\n\n&lt;mx-effects.notice \n    type="highlight" \n    border="true" \n    content="品牌色重要信息提示（带边框，默认带边框都带圆角）"/&gt;\n\n&lt;mx-effects.notice \n    type="highlight" \n    border="true" \n    icon="false"\n    content="品牌色重要信息提示（带边框无icon）"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});