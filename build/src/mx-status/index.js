define("mx-status/index",["magix","mx-status/base"],(l,e,a)=>{var r=l("magix"),s=l("mx-status/base");r.applyStyle("_zs_galleryax",'._zs_gallerylu{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*="mx-status/dropdown"],[mx-view*="mx-status/index"]{display:inline-block}._zs_gallerylv{position:relative}._zs_gallerylv ._zs_gallerylw>*{font-size:20px;line-height:25px}._zs_gallerylv ._zs_gallerylx{position:absolute;top:-10px;left:-10px;z-index:10;background-color:#fff;border-radius:4px;text-align:left;word-wrap:break-word;overflow:hidden;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerylv ._zs_gallerylx ._zs_gallerylw{float:left}._zs_gallerylv ._zs_gallerylx ._zs_galleryly{float:left;margin-left:8px}._zs_gallerylv ._zs_gallerylx ._zs_gallerylz{min-width:140px;height:45px;line-height:25px;padding:10px;cursor:pointer}._zs_gallerylv ._zs_gallerylx ._zs_gallerylz ._zs_gallerylA{display:none;float:right;color:#999;font-weight:700;font-size:20px;line-height:25px}._zs_gallerylv ._zs_gallerylx ._zs_gallerylz:hover{background-color:#fafafa}._zs_gallerylv ._zs_gallerylx ._zs_gallerylz._zs_gallerylB{cursor:default}._zs_gallerylv ._zs_gallerylx ._zs_gallerylz._zs_gallerylB ._zs_gallerylA{display:block}._zs_gallerylv ._zs_gallerylx ._zs_gallerylC{min-width:140px;height:45px;line-height:25px;padding:10px}._zs_gallerylv ._zs_gallerylx ._zs_gallerylD{width:200px;font-size:12px;padding:0 10px 10px;line-height:18px}._zs_gallerylv ._zs_gallerylx._zs_gallerylE{top:0;left:0}._zs_gallerylv ._zs_gallerylF{position:relative;width:36px;height:25px;line-height:25px}._zs_gallerylv ._zs_gallerylF ._zs_gallerylG{position:absolute;top:10.5px;left:31px;width:0;height:0;line-height:0;font-size:0;overflow:hidden;border-color:#999 transparent transparent;border-style:solid;border-width:3px 3px 0}._zs_gallerylv ._zs_gallerylH{position:relative;width:110px}._zs_gallerylv ._zs_gallerylH ._zs_gallerylI{width:100%}._zs_gallerylv ._zs_gallerylH ._zs_gallerylI._zs_gallerylJ,._zs_gallerylv ._zs_gallerylH ._zs_gallerylI._zs_gallerylJ:hover{border-color:#e6e6e6}._zs_gallerylv ._zs_gallerylH ._zs_gallerylG{position:absolute;top:50%;right:0;width:28px;height:28px;margin-top:-14px;line-height:28px;text-align:center;color:#ccc;font-size:20px}._zs_gallerylv ._zs_gallerylK{height:0;border-top:1px solid #e6e6e6}'),a.exports=s.extend({tmpl:function(l,e,a,r,s,_,g,i){if(a||(a=l),!s){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,y=function(l){return"&"+t[l]+";"};s=function(l){return""+(null==l?"":l)},r=function(l){return s(l).replace(o,y)}}if(!_){var z={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},n=function(l){return z[l]},x=/[!')(*]/g;_=function(l){return encodeURIComponent(s(l)).replace(x,n)}}if(!i){var p=/[\\'"]/g;i=function(l){return s(l).replace(p,"\\$&")}}g||(g=function(l,e,a,r){for(r=l[d];--r;)if(l[a=d+r]===e)return a;return l[a=d+l[d]++]=e,a});var d="",c="",f=l.showInfo,h=l.info,v=l.cur,u=l.opers,m=l.show;if(c+='<div mxa="_zs_gallerydN:_" class="_zs_gallerylv" mx-mouseout="'+e+'out()"><div mxa="_zs_gallerydN:a" class="_zs_gallerylF" mx-mouseover="'+e+'over()">',c+=f?'<span class="_zs_gallerylw" style="color: '+r(h.color)+';">'+s(h.icon)+"</span>":'<span class="_zs_gallerylw" style="color: '+r(v.color)+';">'+s(v.icon)+"</span>",c+=" ",u.length>0&&(c+='<i mxs="_zs_gallerydN:_" class="_zs_gallerylG"></i>'),c+="</div>",m){c+='<ul mxa="_zs_gallerydN:b" class="_zs_gallerylx">',f&&(c+='<li mxa="_zs_gallerydN:c" class="_zs_gallerylC"><span class="_zs_gallerylw" style="color: '+r(h.color)+';">'+s(h.icon)+'</span><span mxa="_zs_gallerydN:d" class="_zs_galleryly">'+s(h.text)+"</span></li>",h.tip&&(c+='<li mxa="_zs_gallerydN:e" class="_zs_gallerylD">'+s(h.tip)+"</li>"),c+=" ",u.length>0&&(c+='<li mxs="_zs_gallerydN:a" class="_zs_gallerylK"></li>'),c+=" "),c+=" ";for(var w=0,b=u.length;w<b;w++){var N=u[w];c+='<li class="_zs_gallerylz clearfix ',N.value==v.value&&(c+=" _zs_gallerylB "),c+='" mx-click="'+e+"select({item:'"+g(a,N)+'\'})"><span class="_zs_gallerylw" style="color: '+r(N.color)+';">'+s(N.icon)+'</span><span mxa="_zs_gallerydN:f" class="_zs_galleryly">'+s(N.text)+'</span><i mxs="_zs_gallerydN:b" class="mc-iconfont _zs_gallerylA">&#xe65d;</i></li>'}c+="</ul>"}return c+="</div>"}})});