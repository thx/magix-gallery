define("examples/pro/init",["magix","$","mx-effects/notice","../subs","mx-title/second","./init-steps","./init-dir"],(e,i,a)=>{e("mx-effects/notice"),e("../subs"),e("mx-title/second"),e("./init-steps"),e("./init-dir");var r=e("magix");e("$");r.applyStyle("_zs_galleryg","._zs_galleryay{font-size:14px}._zs_galleryaz,._zs_galleryay{line-height:32px}._zs_galleryaz{position:relative;padding-left:20px}._zs_galleryaz ._zs_galleryaA{position:absolute;top:0;left:0;width:20px}._zs_galleryaB{box-shadow:-2px 0 4px rgba(51,51,51,.08),0 -2px 4px rgba(51,51,51,.08),0 2px 4px rgba(51,51,51,.08),2px 0 4px rgba(51,51,51,.08)}"),a.exports=r.View.extend({tmpl:function(e,i,a,r,t,n,l,o){if(a||(a=e),!t){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,p=function(e){return"&"+s[e]+";"};t=function(e){return""+(null==e?"":e)},r=function(e){return t(e).replace(c,p)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return d[e]},E=/[!')(*]/g;n=function(e){return encodeURIComponent(t(e)).replace(E,m)}}if(!o){var g=/[\\'"]/g;o=function(e){return t(e).replace(g,"\\$&")}}l||(l=function(e,i,a,r){for(r=e[x];--r;)if(e[a=x+r]===i)return a;return e[a=x+e[x]++]=i,a});var x="",f="",b=e.viewId;return f+='<div mxs="_zs_galleryu:_" class="mb20 mr20" mx-view="mx-effects/notice?border=true&icon=false&type=highlight&content=%E4%BE%9D%E8%B5%96%20%3Ca%20class%3D%27link-brand%27%20href%3D%27https%3A%2F%2Fthx.github.io%2Fmagix-cli-book%2F%23%2F%27%20target%3D%27_blank%27%20rel%3D%27noopener%20noreferrer%27%3Emagix-cli%3C%2Fa%3E%20%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7%E5%BF%AB%E9%80%9F%E5%88%9B%E5%BB%BAmagix%E9%A1%B9%E7%9B%AE%EF%BC%8C%E6%8E%A5%E5%8F%A3%E4%BA%BA%3Ca%20href%3D%27dingtalk%3A%2F%2Fdingtalkclient%2Faction%2Fsendmsg%3Fdingtalk_id%3Dvuop5vn%27%20class%3D%27ml5%27%3E%3Ci%20class%3D%27mc-iconfont%20color-brand%20fontsize-18%20displacement-2%27%3E%EE%99%B7%3C%2Fi%3E%E5%B4%87%E5%BF%97%3C%2Fa%3E"></div><div mxa="_zs_galleryu:_" class="pr pr120"><div mx-view="examples/subs?list='+l(a,[{name:"效果预览",key:b+"_preview"},{name:"创建步骤",key:b+"_steps"},{name:"目录结构说明",key:b+"_dir"}])+'"></div><div id="'+r(b)+'_preview" mx-view="mx-title/second?content=%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88&tip=%E4%BB%A5%E4%B8%8B%E7%A4%BA%E4%BE%8Biframe%E5%B5%8C%E5%85%A5%EF%BC%8C%E5%AE%8C%E6%95%B4%E5%8F%AF%E6%93%8D%E4%BD%9C"></div><div mxs="_zs_galleryu:a" class="pr20 mb40"><div class="mb10">脚手架git仓库：<a class="link-brand" href="http://gitlab.alibaba-inc.com/mm/zs_scaffold" target="_blank" rel="noopener noreferrer">http://gitlab.alibaba-inc.com/mm/zs_scaffold</a></div><div class="mb10">iconfont库：<a class="link-brand" href="https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.11&manage_type=myprojects&projectId=826439" target="_blank" rel="noopener noreferrer">https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=826439</a></div><div class="mb20">图表库：<a class="link-brand" href="https://chartpark.alibaba-inc.com/#!/manage/index?projectId=13" target="_blank" rel="noopener noreferrer">https://chartpark.alibaba-inc.com/#!/manage/index?projectId=13</a></div><iframe sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts" src="https://mo.m.taobao.com/page_201902152003028" class="_zs_galleryaB" width="100%" height="770" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" border="0"></iframe></div><div id="'+r(b)+'_steps" mx-view="mx-title/second?content=%E5%88%9B%E5%BB%BA%E6%AD%A5%E9%AA%A4&tip=magix-cli%E5%B7%A5%E5%85%B7%3Ca%20rel%3D%27noopener%20noreferrer%27%20href%3D%27https%3A%2F%2Fthx.github.io%2Fmagix-cli-book%2F%23%2F%27%20target%3D%27_blank%27%20class%3D%27color-brand%27%3Ehttps%3A%2F%2Fthx.github.io%2Fmagix-cli-book%2F%23%2F%3C%2Fa%3E"></div><div mxs="_zs_galleryu:b" mx-view="examples/pro/init-steps" class="pr20 mb40"></div><div id="'+r(b)+'_dir" mx-view="mx-title/second?content=%E8%84%9A%E6%89%8B%E6%9E%B6%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E8%AF%B4%E6%98%8E&tip=%E4%BA%91%E9%9B%80%E6%96%87%E6%A1%A3%E5%9C%B0%E5%9D%80%3Ca%20rel%3D%27noopener%20noreferrer%27%20href%3D%27https%3A%2F%2Flark.alipay.com%2Fchongzhi.ldq%2Fez0zq4%2Fluqazk%27%20target%3D%27_blank%27%20class%3D%27color-brand%27%3Ehttps%3A%2F%2Flark.alipay.com%2Fchongzhi.ldq%2Fez0zq4%2Fluqazk%3C%2Fa%3E"></div><div mxs="_zs_galleryu:c" mx-view="examples/pro/init-dir"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});