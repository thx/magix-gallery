define("mx-pagination/index",["magix","$","../mx-medusa/util","mx-dropdown/index"],(e,l,a)=>{e("mx-dropdown/index");var i=e("magix"),s=e("$"),_=[10,20,30,40],r=e("../mx-medusa/util");i.applyStyle("_zs_galleryak","._zs_galleryi_{color:#666}._zs_galleryi_ ._zs_galleryia{float:left;line-height:var(--input-small-height)}._zs_galleryi_ ._zs_galleryia ._zs_galleryic{min-width:66px}._zs_galleryi_ ._zs_galleryid{display:inline-block}._zs_galleryi_ ._zs_galleryid ._zs_galleryie{float:left;line-height:var(--input-small-height)}._zs_galleryi_ ._zs_galleryid ._zs_galleryie ._zs_galleryif,._zs_galleryi_ ._zs_galleryid ._zs_galleryie ._zs_galleryig{display:block;min-width:var(--input-small-height);height:var(--input-small-height);margin:0 2px;font-size:var(--font-size);border-radius:var(--border-radius);text-align:center}._zs_galleryi_ ._zs_galleryid ._zs_galleryie ._zs_galleryig{color:#666}._zs_galleryi_ ._zs_galleryid ._zs_galleryie ._zs_galleryig:hover{color:#333}._zs_galleryi_ ._zs_galleryid ._zs_galleryie ._zs_galleryig._zs_galleryih{color:#333;background-color:#eee}._zs_galleryi_ ._zs_galleryid ._zs_galleryie ._zs_galleryig._zs_galleryii{background:transparent;cursor:not-allowed}._zs_galleryi_ ._zs_galleryid ._zs_galleryie ._zs_galleryif{color:#999;line-height:calc(var(--input-small-height) + 2px)}._zs_galleryi_ ._zs_galleryid ._zs_galleryie ._zs_galleryif:hover{color:#666}._zs_galleryi_ ._zs_galleryid ._zs_galleryie ._zs_galleryif._zs_galleryii{color:#eee;background:transparent;cursor:not-allowed}._zs_galleryi_ ._zs_galleryij{float:right;margin-left:15px}._zs_galleryi_ ._zs_galleryij ._zs_galleryik{width:40px;text-align:center}"),a.exports=i.View.extend({tmpl:function(e,l,a,i,s,_,r,t){if(a||(a=e),!s){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,c=function(e){return"&"+g[e]+";"};s=function(e){return""+(null==e?"":e)},i=function(e){return s(e).replace(n,c)}}if(!_){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},z=function(e){return p[e]},o=/[!')(*]/g;_=function(e){return encodeURIComponent(s(e)).replace(o,z)}}if(!t){var y=/[\\'"]/g;t=function(e){return s(e).replace(y,"\\$&")}}r||(r=function(e,l,a,i){for(i=e[m];--i;)if(e[a=m+i]===l)return a;return e[a=m+e[m]++]=l,a});var m="",u="",d=e.simplify,f=e.mini,h=e.tipOffset,x=e.tipTotal,v=e.tipPer,k=e.sizesChange,b=e.sizesPlacement,w=e.sizes,j=e.size,J=e.tipUnit,P=e.jump,T=e.tipJumpTo,$=e.next,A=e.viewId,I=e.tipJumpUnit,M=e.hideTotal,U=e.page,C=e.pages,O=e.start,S=e.end;if(u+='<div mxv mxa="_zs_galleryc/:_" class="clearfix _zs_galleryi_">',d||f||(u+='<div mxv mxa="_zs_galleryc/:a" class="_zs_galleryia"><span>'+s(h)+"</span><span>"+s(x)+"，</span><span>"+s(v)+"</span>",u+=k?'<div mxv="sizes,size" class="ml10 mr10 _zs_galleryic" mx-change="'+l+'__cy()" mx-view="mx-dropdown/index?small=true&placement='+_(b)+"&list="+r(a,w)+"&selected="+r(a,j)+'"></div>':" "+i(j)+" ",u+="<span>"+s(J)+"</span></div>"),u+=" ",P||(u+='<div mxv mxa="_zs_galleryc/:b" class="_zs_galleryij"><span mxa="_zs_galleryc/:c" class="mr5">'+i(T)+'</span><input class="input input-small _zs_galleryik mr5" value="'+i($)+'" id="'+i(A)+'_jump_input" mx-change="'+l+'__m()" mx-focusin="'+l+'__m()" mx-focusout="'+l+'__m()"/><span mxa="_zs_galleryc/:d" class="mr10">'+i(I)+'</span><a mxs="_zs_galleryc/:_" href="javascript:;" class="btn btn-small" mx-click="'+l+'__cz()">跳转</a></div>'),u+='<ul class="clearfix _zs_galleryid" ',M||(u+=' style="float: right;" '),u+='><li mxa="_zs_galleryc/:e" class="_zs_galleryie"><a class="mc-iconfont _zs_galleryif ',1==U&&(u+="_zs_galleryii"),u+='" href="#" mx-click="'+l+"",u+=U>1?"__cx({page:"+i(U-1)+"})":"__J()",u+='">&#xe61e;</a></li>',f)u+='<li mxa="_zs_galleryc/:f" class="_zs_galleryie">'+i(U)+" / "+i(C)+"</li>";else{u+=" ",O>1&&(u+='<li mxs="_zs_galleryc/:a" class="_zs_galleryie"><a class="_zs_galleryig" href="#" mx-click="'+l+'__cx({page:1})">1</a></li>'),u+=" ",O>2&&(u+='<li mxs="_zs_galleryc/:b" class="_zs_galleryie"><a class="_zs_galleryig _zs_galleryii" href="#" mx-click="'+l+'__J()">...</a></li>'),u+=" ";for(var D=O;D<=S;D++)u+='<li mxa="_zs_galleryc/:g" class="_zs_galleryie"><a class="_zs_galleryig ',D==U&&(u+="_zs_galleryih"),u+='" href="#" mx-click="'+l+"__cx({page:"+i(D)+'})">'+i(D)+"</a></li>";u+=" ",S+2<=C&&(u+='<li mxs="_zs_galleryc/:b" class="_zs_galleryie"><a class="_zs_galleryig _zs_galleryii" href="#" mx-click="'+l+'__J()">...</a></li>'),u+=" ",S<C&&(u+='<li mxa="_zs_galleryc/:h" class="_zs_galleryie"><a class="_zs_galleryig" href="#" mx-click="'+l+"__cx({page:"+i(C)+'})">'+i(C)+"</a></li>"),u+=" "}return u+='<li mxa="_zs_galleryc/:i" class="_zs_galleryie"><a class="mc-iconfont _zs_galleryif rotate180 ',U==C&&(u+="_zs_galleryii"),u+='" href="#" mx-click="'+l+"",u+=U<C?"__cx({page:"+i(U+1)+"})":"__J()",u+='">&#xe61e;</a></li>',M||(u+='<li mxa="_zs_galleryc/:j" class="_zs_galleryie ml10">'+s(x)+"</li>"),u+="</ul></div>"},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var l=this,a=l.updater.altered(),i=[];try{i=JSON.parse(e.sizes)}catch(l){i=e.sizes}i&&i.length||(i=_);var s=!0;/^false$/i.test(e.sizesChange)&&(s=!1);var r,t=e.size||40;return r=e.page?e.page:e.offset?parseInt(e.offset/t)+1:1,l.updater.set({viewId:l.id,step:e.step||5,simplify:e.simplify+""=="true",mini:e.mini+""=="true",hideTotal:e.hideTotal+""=="true",jump:e.jump+""=="false",total:0|e.total||0,page:r,size:t,sizesChange:s,sizesPlacement:e.sizesPlacement||"bottom",sizes:i}),a||(a=l.updater.altered()),!!a&&(l.updater.snapshot(),!0)},render:function(){var e=this.__cw();this.updater.digest(e)},__cw:function(){var e=this.updater.get(),l=e.total,a=0|e.page,i=Math.ceil((e.total||1)/e.size);a>i&&(a=i);var s,_=0|e.step,t=_/2|0,g=Math.max(1,a-t),n=Math.min(i,g+_-1);(g=Math.max(1,n-_+1))<=2&&n+(s=3-g)<i&&(n+=s),n+2>i&&g-(s=2-(i-n))>1&&(g-=s),3==g&&(g-=1),n+2==i&&(n+=1);var c=(a-1)*e.size+1,p=Math.min(e.total,a*e.size);0==l&&(c=p=0);var z=a+1;return z>i&&(z=i),{pages:i,offsetStart:c,offsetEnd:p,page:a,start:g,end:n,next:z,tipOffset:r["pager.offset"].replace("${min}",""+c).replace("${max}",""+p),tipTotal:r["pager.total"].replace("${total}",""+l),tipPer:r["pager.per.page"],tipUnit:r["pager.unit"],tipJumpTo:r["pager.jump.to"],tipJumpUnit:r["pager.jump.unit"]}},__A:function(){var e=s("#"+this.id),l=this.updater.get(),a=+l.page,i=+l.size,_=(a-1)*i;e.trigger({type:"change",page:a,size:i,offset:_})},"__cx<click>":function(e){e.preventDefault();this.updater.set(e.params),this.render(),this.__A()},"__cy<change>":function(e){e.stopPropagation();this.updater.set({size:e.value}),this.render(),this.__A()},"__m<change,focusin,focusout>":function(e){e.stopPropagation()},"__cz<click>":function(e){e.stopPropagation();var l=+s("#"+this.id+"_jump_input").val();Number.isInteger(l)&&(this.updater.set({page:l}),this.render(),this.__A())},"__J<click>":function(e){e.preventDefault()}})});