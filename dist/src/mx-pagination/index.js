define("mx-pagination/index",["magix","$","../mx-medusa/util","mx-dropdown/index"],(l,e,a)=>{l("mx-dropdown/index");var i=l("magix"),s=l("$"),r=[10,20,30,40],_=l("../mx-medusa/util");i.applyStyle("_zs_galleryaj","._zs_galleryiA{color:#666}._zs_galleryiA ._zs_galleryiB{float:left;line-height:var(--input-small-height)}._zs_galleryiA ._zs_galleryiB ._zs_galleryiC{min-width:66px}._zs_galleryiA ._zs_galleryiD{display:inline-block}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE{float:left;line-height:var(--input-small-height)}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiF,._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiG{display:block;min-width:var(--input-small-height);height:var(--input-small-height);margin:0 2px;font-size:var(--font-size);border-radius:var(--border-radius);text-align:center}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiG{color:#666}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiG:hover{color:#333}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiG._zs_galleryiH{color:#333;background-color:#eee}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiG._zs_galleryiI{background:transparent;cursor:not-allowed}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiF{color:#999;line-height:calc(var(--input-small-height) + 2px)}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiF:hover{color:#666}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiF._zs_galleryiI{color:#eee;background:transparent;cursor:not-allowed}._zs_galleryiA ._zs_galleryiJ{float:right;margin-left:15px}._zs_galleryiA ._zs_galleryiJ ._zs_galleryiK{width:40px;text-align:center}"),a.exports=i.View.extend({tmpl:function(l,e,a,i,s,r,_,t){if(a||(a=l),!s){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,c=function(l){return"&"+g[l]+";"};s=function(l){return""+(null==l?"":l)},i=function(l){return s(l).replace(n,c)}}if(!r){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},z=function(l){return p[l]},o=/[!')(*]/g;r=function(l){return encodeURIComponent(s(l)).replace(o,z)}}if(!t){var y=/[\\'"]/g;t=function(l){return s(l).replace(y,"\\$&")}}_||(_=function(l,e,a,i){for(i=l[m];--i;)if(l[a=m+i]===e)return a;return l[a=m+l[m]++]=e,a});var m="",u="",d=l.simplify,f=l.mini,h=l.tipOffset,x=l.tipTotal,v=l.tipPer,A=l.sizesChange,E=l.sizesPlacement,k=l.sizes,b=l.size,w=l.tipUnit,D=l.jump,J=l.tipJumpTo,I=l.next,j=l.viewId,G=l.tipJumpUnit,P=l.hideTotal,T=l.page,$=l.pages,C=l.start,F=l.end;if(u+='<div mxv mxa="_zs_gallerydg:_" class="clearfix _zs_galleryiA">',d||f||(u+='<div mxv mxa="_zs_gallerydg:a" class="_zs_galleryiB"><span>'+s(h)+"</span><span>"+s(x)+"，</span><span>"+s(v)+"</span>",u+=A?'<div mxv="sizes,size" class="ml10 mr10 _zs_galleryiC" mx-change="'+e+'__cy()" mx-view="mx-dropdown/index?small=true&placement='+r(E)+"&list="+_(a,k)+"&selected="+_(a,b)+'"></div>':" "+i(b)+" ",u+="<span>"+s(w)+"</span></div>"),u+=" ",D||(u+='<div mxv mxa="_zs_gallerydg:b" class="_zs_galleryiJ"><span mxa="_zs_gallerydg:c" class="mr5">'+i(J)+'</span><input class="input input-small _zs_galleryiK mr5" value="'+i(I)+'" id="'+i(j)+'_jump_input" mx-change="'+e+'__m()" mx-focusin="'+e+'__m()" mx-focusout="'+e+'__m()"/><span mxa="_zs_gallerydg:d" class="mr10">'+i(G)+'</span><a mxs="_zs_gallerydg:_" href="javascript:;" class="btn btn-small" mx-click="'+e+'__cz()">跳转</a></div>'),u+='<ul class="clearfix _zs_galleryiD" ',P||(u+=' style="float: right;" '),u+='><li mxa="_zs_gallerydg:e" class="_zs_galleryiE"><a class="mc-iconfont _zs_galleryiF ',1==T&&(u+="_zs_galleryiI"),u+='" href="#" mx-click="'+e+"",u+=T>1?"__cx({page:"+i(T-1)+"})":"__J()",u+='">&#xe61e;</a></li>',f)u+='<li mxa="_zs_gallerydg:f" class="_zs_galleryiE">'+i(T)+" / "+i($)+"</li>";else{u+=" ",C>1&&(u+='<li mxs="_zs_gallerydg:a" class="_zs_galleryiE"><a class="_zs_galleryiG" href="#" mx-click="'+e+'__cx({page:1})">1</a></li>'),u+=" ",C>2&&(u+='<li mxs="_zs_gallerydg:b" class="_zs_galleryiE"><a class="_zs_galleryiG _zs_galleryiI" href="#" mx-click="'+e+'__J()">...</a></li>'),u+=" ";for(var M=C;M<=F;M++)u+='<li mxa="_zs_gallerydg:g" class="_zs_galleryiE"><a class="_zs_galleryiG ',M==T&&(u+="_zs_galleryiH"),u+='" href="#" mx-click="'+e+"__cx({page:"+i(M)+'})">'+i(M)+"</a></li>";u+=" ",F+2<=$&&(u+='<li mxs="_zs_gallerydg:b" class="_zs_galleryiE"><a class="_zs_galleryiG _zs_galleryiI" href="#" mx-click="'+e+'__J()">...</a></li>'),u+=" ",F<$&&(u+='<li mxa="_zs_gallerydg:h" class="_zs_galleryiE"><a class="_zs_galleryiG" href="#" mx-click="'+e+"__cx({page:"+i($)+'})">'+i($)+"</a></li>"),u+=" "}return u+='<li mxa="_zs_gallerydg:i" class="_zs_galleryiE"><a class="mc-iconfont _zs_galleryiF rotate180 ',T==$&&(u+="_zs_galleryiI"),u+='" href="#" mx-click="'+e+"",u+=T<$?"__cx({page:"+i(T+1)+"})":"__J()",u+='">&#xe61e;</a></li>',P||(u+='<li mxa="_zs_gallerydg:j" class="_zs_galleryiE ml10">'+s(x)+"</li>"),u+="</ul></div>"},init:function(l){this.updater.snapshot(),this.assign(l)},assign:function(l){var e=this,a=e.updater.altered(),i=[];try{i=JSON.parse(l.sizes)}catch(e){i=l.sizes}i&&i.length||(i=r);var s=!0;/^false$/i.test(l.sizesChange)&&(s=!1);var _,t=l.size||40;return _=l.page?l.page:l.offset?parseInt(l.offset/t)+1:1,e.updater.set({viewId:e.id,step:l.step||5,simplify:l.simplify+""=="true",mini:l.mini+""=="true",hideTotal:l.hideTotal+""=="true",jump:l.jump+""=="false",total:0|l.total||0,page:_,size:t,sizesChange:s,sizesPlacement:l.sizesPlacement||"bottom",sizes:i}),a||(a=e.updater.altered()),!!a&&(e.updater.snapshot(),!0)},render:function(){var l=this.__cw();this.updater.digest(l)},__cw:function(){var l=this.updater.get(),e=l.total,a=0|l.page,i=Math.ceil((l.total||1)/l.size);a>i&&(a=i);var s,r=0|l.step,t=r/2|0,g=Math.max(1,a-t),n=Math.min(i,g+r-1);(g=Math.max(1,n-r+1))<=2&&n+(s=3-g)<i&&(n+=s),n+2>i&&g-(s=2-(i-n))>1&&(g-=s),3==g&&(g-=1),n+2==i&&(n+=1);var c=(a-1)*l.size+1,p=Math.min(l.total,a*l.size);0==e&&(c=p=0);var z=a+1;return z>i&&(z=i),{pages:i,offsetStart:c,offsetEnd:p,page:a,start:g,end:n,next:z,tipOffset:_["pager.offset"].replace("${min}",""+c).replace("${max}",""+p),tipTotal:_["pager.total"].replace("${total}",""+e),tipPer:_["pager.per.page"],tipUnit:_["pager.unit"],tipJumpTo:_["pager.jump.to"],tipJumpUnit:_["pager.jump.unit"]}},__A:function(){var l=s("#"+this.id),e=this.updater.get(),a=+e.page,i=+e.size,r=(a-1)*i;l.trigger({type:"change",page:a,size:i,offset:r})},"__cx<click>":function(l){l.preventDefault();this.updater.set(l.params),this.render(),this.__A()},"__cy<change>":function(l){l.stopPropagation();this.updater.set({size:l.value}),this.render(),this.__A()},"__m<change,focusin,focusout>":function(l){l.stopPropagation()},"__cz<click>":function(l){l.stopPropagation();var e=+s("#"+this.id+"_jump_input").val();Number.isInteger(e)&&(this.updater.set({page:e}),this.render(),this.__A())},"__J<click>":function(l){l.preventDefault()}})});