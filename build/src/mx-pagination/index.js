define("mx-pagination/index",["magix","$","../mx-medusa/util","mx-dropdown/index"],(l,e,a)=>{l("mx-dropdown/index");var s=l("magix"),r=l("$"),_=[10,20,30,40],t=l("../mx-medusa/util");s.applyStyle("_zs_galleryah","._zs_galleryhJ{color:#666}._zs_galleryhJ ._zs_galleryhK{float:left;line-height:var(--input-small-height)}._zs_galleryhJ ._zs_galleryhK ._zs_galleryhL{min-width:66px}._zs_galleryhJ ._zs_galleryhM{display:inline-block}._zs_galleryhJ ._zs_galleryhM ._zs_galleryhN{float:left;line-height:var(--input-small-height)}._zs_galleryhJ ._zs_galleryhM ._zs_galleryhN ._zs_galleryhO,._zs_galleryhJ ._zs_galleryhM ._zs_galleryhN ._zs_galleryhP{display:block;min-width:var(--input-small-height);height:var(--input-small-height);margin:0 2px;font-size:var(--font-size);border-radius:var(--border-radius);text-align:center}._zs_galleryhJ ._zs_galleryhM ._zs_galleryhN ._zs_galleryhP{color:#666}._zs_galleryhJ ._zs_galleryhM ._zs_galleryhN ._zs_galleryhP:hover{color:#333}._zs_galleryhJ ._zs_galleryhM ._zs_galleryhN ._zs_galleryhP._zs_galleryhQ{color:#333;background-color:#eee}._zs_galleryhJ ._zs_galleryhM ._zs_galleryhN ._zs_galleryhP._zs_galleryhR{background:transparent;cursor:not-allowed}._zs_galleryhJ ._zs_galleryhM ._zs_galleryhN ._zs_galleryhO{color:#999;line-height:calc(var(--input-small-height) + 2px)}._zs_galleryhJ ._zs_galleryhM ._zs_galleryhN ._zs_galleryhO:hover{color:#666}._zs_galleryhJ ._zs_galleryhM ._zs_galleryhN ._zs_galleryhO._zs_galleryhR{color:#eee;background:transparent;cursor:not-allowed}._zs_galleryhJ ._zs_galleryhS{float:right;margin-left:15px}._zs_galleryhJ ._zs_galleryhS ._zs_galleryhT{width:40px;text-align:center}"),a.exports=s.View.extend({tmpl:function(l,e,a,s,r,_,t,i){if(a||(a=l),!r){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,h=function(l){return"&"+g[l]+";"};r=function(l){return""+(null==l?"":l)},s=function(l){return r(l).replace(n,h)}}if(!_){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(l){return c[l]},z=/[!')(*]/g;_=function(l){return encodeURIComponent(r(l)).replace(z,p)}}if(!i){var o=/[\\'"]/g;i=function(l){return r(l).replace(o,"\\$&")}}t||(t=function(l,e,a,s){for(s=l[y];--s;)if(l[a=y+s]===e)return a;return l[a=y+l[y]++]=e,a});var y="",m="",u=l.simplify,f=l.mini,d=l.tipOffset,x=l.tipTotal,v=l.tipPer,J=l.sizesChange,N=l.sizesPlacement,w=l.sizes,P=l.size,M=l.tipUnit,k=l.jump,b=l.tipJumpTo,j=l.next,O=l.viewId,T=l.tipJumpUnit,R=l.hideTotal,$=l.page,S=l.pages,A=l.start,I=l.end;if(m+='<div mxv mxa="_zs_galleryc9:_" class="clearfix _zs_galleryhJ">',u||f||(m+='<div mxv mxa="_zs_galleryc9:a" class="_zs_galleryhK"><span>'+r(d)+"</span><span>"+r(x)+"，</span><span>"+r(v)+"</span>",m+=J?'<div mxv="sizes,size" class="ml10 mr10 _zs_galleryhL" mx-change="'+e+'__cx()" mx-view="mx-dropdown/index?small=true&placement='+_(N)+"&list="+t(a,w)+"&selected="+t(a,P)+'"></div>':" "+s(P)+" ",m+="<span>"+r(M)+"</span></div>"),m+=" ",k||(m+='<div mxv mxa="_zs_galleryc9:b" class="_zs_galleryhS"><span mxa="_zs_galleryc9:c" class="mr5">'+s(b)+'</span><input class="input input-small _zs_galleryhT mr5" value="'+s(j)+'" id="'+s(O)+'_jump_input" mx-change="'+e+'__m()" mx-focusin="'+e+'__m()" mx-focusout="'+e+'__m()"/><span mxa="_zs_galleryc9:d" class="mr10">'+s(T)+'</span><a mxs="_zs_galleryc9:_" href="javascript:;" class="btn btn-small" mx-click="'+e+'__cy()">跳转</a></div>'),m+='<ul class="clearfix _zs_galleryhM" ',R||(m+=' style="float: right;" '),m+='><li mxa="_zs_galleryc9:e" class="_zs_galleryhN"><a class="mc-iconfont _zs_galleryhO ',1==$&&(m+="_zs_galleryhR"),m+='" href="#" mx-click="'+e+"",m+=$>1?"__cw({page:"+s($-1)+"})":"__J()",m+='">&#xe61e;</a></li>',f)m+='<li mxa="_zs_galleryc9:f" class="_zs_galleryhN">'+s($)+" / "+s(S)+"</li>";else{m+=" ",A>1&&(m+='<li mxs="_zs_galleryc9:a" class="_zs_galleryhN"><a class="_zs_galleryhP" href="#" mx-click="'+e+'__cw({page:1})">1</a></li>'),m+=" ",A>2&&(m+='<li mxs="_zs_galleryc9:b" class="_zs_galleryhN"><a class="_zs_galleryhP _zs_galleryhR" href="#" mx-click="'+e+'__J()">...</a></li>'),m+=" ";for(var U=A;U<=I;U++)m+='<li mxa="_zs_galleryc9:g" class="_zs_galleryhN"><a class="_zs_galleryhP ',U==$&&(m+="_zs_galleryhQ"),m+='" href="#" mx-click="'+e+"__cw({page:"+s(U)+'})">'+s(U)+"</a></li>";m+=" ",I+2<=S&&(m+='<li mxs="_zs_galleryc9:b" class="_zs_galleryhN"><a class="_zs_galleryhP _zs_galleryhR" href="#" mx-click="'+e+'__J()">...</a></li>'),m+=" ",I<S&&(m+='<li mxa="_zs_galleryc9:h" class="_zs_galleryhN"><a class="_zs_galleryhP" href="#" mx-click="'+e+"__cw({page:"+s(S)+'})">'+s(S)+"</a></li>"),m+=" "}return m+='<li mxa="_zs_galleryc9:i" class="_zs_galleryhN"><a class="mc-iconfont _zs_galleryhO rotate180 ',$==S&&(m+="_zs_galleryhR"),m+='" href="#" mx-click="'+e+"",m+=$<S?"__cw({page:"+s($+1)+"})":"__J()",m+='">&#xe61e;</a></li>',R||(m+='<li mxa="_zs_galleryc9:j" class="_zs_galleryhN ml10">'+r(x)+"</li>"),m+="</ul></div>"},init:function(l){this.updater.snapshot(),this.assign(l)},assign:function(l){var e=this,a=e.updater.altered(),s=[];try{s=JSON.parse(l.sizes)}catch(e){s=l.sizes}s&&s.length||(s=_);var r=!0;/^false$/i.test(l.sizesChange)&&(r=!1);var t,i=l.size||40;return t=l.page?l.page:l.offset?parseInt(l.offset/i)+1:1,e.updater.set({viewId:e.id,step:l.step||5,simplify:l.simplify+""=="true",mini:l.mini+""=="true",hideTotal:l.hideTotal+""=="true",jump:l.jump+""=="false",total:0|l.total||0,page:t,size:i,sizesChange:r,sizesPlacement:l.sizesPlacement||"bottom",sizes:s}),a||(a=e.updater.altered()),!!a&&(e.updater.snapshot(),!0)},render:function(){var l=this.__cv();this.updater.digest(l)},__cv:function(){var l=this.updater.get(),e=l.total,a=0|l.page,s=Math.ceil((l.total||1)/l.size);a>s&&(a=s);var r,_=0|l.step,i=_/2|0,g=Math.max(1,a-i),n=Math.min(s,g+_-1);(g=Math.max(1,n-_+1))<=2&&n+(r=3-g)<s&&(n+=r),n+2>s&&g-(r=2-(s-n))>1&&(g-=r),3==g&&(g-=1),n+2==s&&(n+=1);var h=(a-1)*l.size+1,c=Math.min(l.total,a*l.size);0==e&&(h=c=0);var p=a+1;return p>s&&(p=s),{pages:s,offsetStart:h,offsetEnd:c,page:a,start:g,end:n,next:p,tipOffset:t["pager.offset"].replace("${min}",""+h).replace("${max}",""+c),tipTotal:t["pager.total"].replace("${total}",""+e),tipPer:t["pager.per.page"],tipUnit:t["pager.unit"],tipJumpTo:t["pager.jump.to"],tipJumpUnit:t["pager.jump.unit"]}},__A:function(){var l=r("#"+this.id),e=this.updater.get(),a=+e.page,s=+e.size,_=(a-1)*s;l.trigger({type:"change",page:a,size:s,offset:_})},"__cw<click>":function(l){l.preventDefault();this.updater.set(l.params),this.render(),this.__A()},"__cx<change>":function(l){l.stopPropagation();this.updater.set({size:l.value}),this.render(),this.__A()},"__m<change,focusin,focusout>":function(l){l.stopPropagation()},"__cy<click>":function(l){l.stopPropagation();var e=+r("#"+this.id+"_jump_input").val();Number.isInteger(e)&&(this.updater.set({page:e}),this.render(),this.__A())},"__J<click>":function(l){l.preventDefault()}})});