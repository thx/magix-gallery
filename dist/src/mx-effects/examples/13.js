define("mx-effects/examples/13",["magix","examples/example","$","../star","mx-copy/index","examples/hl"],(e,l,s)=>{e("../star"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");s.exports=i.extend({tmpl:function(e,l,s,i,a,c,n,t){if(s||(s=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(m,x)}}if(!c){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return o[e]},f=/[!')(*]/g;c=function(e){return encodeURIComponent(a(e)).replace(f,_)}}if(!t){var d=/[\\'"]/g;t=function(e){return a(e).replace(d,"\\$&")}}var g="",v=e.viewId,y=e.text1;return g+='<div mxa="_zs_galleryby:_" class="_zs_galleryg"><div mxa="_zs_galleryby:a" class="_zs_galleryj"><div mxa="_zs_galleryby:b" class="mb10"><div mx-view="mx-effects/star?num=2.5&icon='+c('<i class="mc-iconfont">&#xe635;</i>')+'&color=%23fc2a2a"></div></div><div mxa="_zs_galleryby:c" class="mb10"><div mx-view="mx-effects/star?num=4&icon='+c('<i class="mc-iconfont">&#xe60c;</i>')+'&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div mxa="_zs_galleryby:d" class="_zs_galleryk"><div mxs="_zs_galleryby:_" class="_zs_galleryi">自定义icon + 颜色</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+c(v)+'_text_1"><span mxa="_zs_galleryby:e" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_galleryby:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(v)+'_text_1">\n&lt;mx-effects.star num="2.5"\n    icon="&#123;&#123;=\'&lt;i class=\\"mc-iconfont\\"&gt;&#38;&#35;xe635;&lt;/i&gt;\'&#125;&#125;"\n    color="#fc2a2a"&gt;&lt;/mx-effects.star&gt;\n\n&lt;mx-effects.star num="4"\n    icon="&#123;&#123;=\'&lt;i class=\\"mc-iconfont\\"&gt;&#38;&#35;xe60c;&lt;/i&gt;\'&#125;&#125;"\n    color="rgb(81, 163, 0)"&gt;&lt;/mx-effects.star&gt;\n        </pre></div></div>'},render:function(){this.updater.digest({icon1:'<i class="mc-iconfont">&#xe635;</i>',icon2:'<i class="mc-iconfont">&#xe60c;</i>'})}})});