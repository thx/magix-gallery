define("mx-pagination/index",["magix","$","../mx-medusa/util","mx-dropdown/index"],(l,e,a)=>{l("mx-dropdown/index");var s=l("magix"),_=l("$"),r=[10,20,30,40],t=l("../mx-medusa/util");s.applyStyle("_zs_galleryak","._zs_galleryjN{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjO{color:#666}._zs_galleryjO ._zs_galleryjP{float:left;line-height:26px}._zs_galleryjO ._zs_galleryjP ._zs_galleryjQ{min-width:66px}._zs_galleryjO ._zs_galleryjP ._zs_galleryjQ ._zs_galleryed{height:26px;line-height:24px}._zs_galleryjO ._zs_galleryjR{display:inline-block}._zs_galleryjO ._zs_galleryjR ._zs_galleryjS{float:left;line-height:26px}._zs_galleryjO ._zs_galleryjR ._zs_galleryjS ._zs_galleryjT,._zs_galleryjO ._zs_galleryjR ._zs_galleryjS ._zs_galleryjU{display:block;min-width:26px;height:26px;margin:0 2px;font-size:12px;border-radius:4px;text-align:center}._zs_galleryjO ._zs_galleryjR ._zs_galleryjS ._zs_galleryjU{color:#666}._zs_galleryjO ._zs_galleryjR ._zs_galleryjS ._zs_galleryjU:hover{color:#333}._zs_galleryjO ._zs_galleryjR ._zs_galleryjS ._zs_galleryjU._zs_galleryjV{color:#333;background-color:#eee}._zs_galleryjO ._zs_galleryjR ._zs_galleryjS ._zs_galleryjU._zs_galleryjW{background:transparent;cursor:not-allowed}._zs_galleryjO ._zs_galleryjR ._zs_galleryjS ._zs_galleryjT{color:#999;line-height:28px}._zs_galleryjO ._zs_galleryjR ._zs_galleryjS ._zs_galleryjT:hover{color:#666}._zs_galleryjO ._zs_galleryjR ._zs_galleryjS ._zs_galleryjT._zs_galleryjW{color:#eee;background:transparent;cursor:not-allowed}._zs_galleryjO ._zs_galleryjX{float:right;margin-left:15px}._zs_galleryjO ._zs_galleryjX ._zs_galleryjY{width:40px;text-align:center}"),a.exports=s.View.extend({tmpl:function(l,e,a,s,_,r,t,i){if(a||(a=l),!_){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,c=function(l){return"&"+g[l]+";"};_=function(l){return""+(null==l?"":l)},s=function(l){return _(l).replace(n,c)}}if(!r){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},z=function(l){return p[l]},y=/[!')(*]/g;r=function(l){return encodeURIComponent(_(l)).replace(y,z)}}if(!i){var o=/[\\'"]/g;i=function(l){return _(l).replace(o,"\\$&")}}t||(t=function(l,e,a,s){for(s=l[j];--s;)if(l[a=j+s]===e)return a;return l[a=j+l[j]++]=e,a});var j="",m="",u=l.simplify,f=l.mini,x=l.tipOffset,d=l.tipTotal,h=l.tipPer,v=l.sizesChange,S=l.sizesPlacement,O=l.sizes,M=l.size,k=l.tipUnit,b=l.jump,U=l.tipJumpTo,w=l.next,R=l.viewId,T=l.tipJumpUnit,P=l.hideTotal,$=l.page,W=l.pages,H=l.start,I=l.end;if(m+='<div mxv mxa="_zs_gallerycM:_" class="clearfix _zs_galleryjO">',u||f||(m+='<div mxv mxa="_zs_gallerycM:a" class="_zs_galleryjP"><span>'+_(x)+"</span><span>"+_(d)+"，</span><span>"+_(h)+"</span>",m+=v?'<div mxv="sizes,size" class="ml10 mr10 _zs_galleryjQ" mx-change="'+e+'__cj()" mx-view="mx-dropdown/index?placement='+r(S)+"&list="+t(a,O)+"&selected="+t(a,M)+'"></div>':" "+s(M)+" ",m+="<span>"+_(k)+"</span></div>"),m+=" ",b||(m+='<div mxv mxa="_zs_gallerycM:b" class="_zs_galleryjX"><span mxa="_zs_gallerycM:c" class="mr5">'+s(U)+'</span><input class="input input-small _zs_galleryjY mr5" value="'+s(w)+'" id="'+s(R)+'_jump_input" mx-change="'+e+'__l()" mx-focusin="'+e+'__l()" mx-focusout="'+e+'__l()"/><span mxa="_zs_gallerycM:d" class="mr10">'+s(T)+'</span><a mxs="_zs_gallerycM:_" href="javascript:;" class="btn btn-small" mx-click="'+e+'__ck()">跳转</a></div>'),m+='<ul class="clearfix _zs_galleryjR" ',P||(m+=' style="float: right;" '),m+='><li mxa="_zs_gallerycM:e" class="_zs_galleryjS"><a class="mc-iconfont _zs_galleryjT ',1==$&&(m+="_zs_galleryjW"),m+='" href="#" mx-click="'+e+"",m+=$>1?"__ci({page:"+s($-1)+"})":"__H()",m+='">&#xe61e;</a></li>',f)m+='<li mxa="_zs_gallerycM:f" class="_zs_galleryjS">'+s($)+" / "+s(W)+"</li>";else{m+=" ",H>1&&(m+='<li mxs="_zs_gallerycM:a" class="_zs_galleryjS"><a class="_zs_galleryjU" href="#" mx-click="'+e+'__ci({page:1})">1</a></li>'),m+=" ",H>2&&(m+='<li mxs="_zs_gallerycM:b" class="_zs_galleryjS"><a class="_zs_galleryjU _zs_galleryjW" href="#" mx-click="'+e+'__H()">...</a></li>'),m+=" ";for(var J=H;J<=I;J++)m+='<li mxa="_zs_gallerycM:g" class="_zs_galleryjS"><a class="_zs_galleryjU ',J==$&&(m+="_zs_galleryjV"),m+='" href="#" mx-click="'+e+"__ci({page:"+s(J)+'})">'+s(J)+"</a></li>";m+=" ",I+2<=W&&(m+='<li mxs="_zs_gallerycM:b" class="_zs_galleryjS"><a class="_zs_galleryjU _zs_galleryjW" href="#" mx-click="'+e+'__H()">...</a></li>'),m+=" ",I<W&&(m+='<li mxa="_zs_gallerycM:h" class="_zs_galleryjS"><a class="_zs_galleryjU" href="#" mx-click="'+e+"__ci({page:"+s(W)+'})">'+s(W)+"</a></li>"),m+=" "}return m+='<li mxa="_zs_gallerycM:i" class="_zs_galleryjS"><a class="mc-iconfont _zs_galleryjT rotate180 ',$==W&&(m+="_zs_galleryjW"),m+='" href="#" mx-click="'+e+"",m+=$<W?"__ci({page:"+s($+1)+"})":"__H()",m+='">&#xe61e;</a></li>',P||(m+='<li mxa="_zs_gallerycM:j" class="_zs_galleryjS ml10">'+_(d)+"</li>"),m+="</ul></div>"},init:function(l){this.updater.snapshot(),this.assign(l)},assign:function(l){var e=this,a=e.updater.altered(),s=[];try{s=JSON.parse(l.sizes)}catch(e){s=l.sizes}s&&s.length||(s=r);var _=!0;/^false$/i.test(l.sizesChange)&&(_=!1);var t,i=l.size||40;return t=l.page?l.page:l.offset?parseInt(l.offset/i)+1:1,e.updater.set({viewId:e.id,step:l.step||5,simplify:l.simplify+""=="true",mini:l.mini+""=="true",hideTotal:l.hideTotal+""=="true",jump:l.jump+""=="false",total:0|l.total||0,page:t,size:i,sizesChange:_,sizesPlacement:l.sizesPlacement||"bottom",sizes:s}),a||(a=e.updater.altered()),!!a&&(e.updater.snapshot(),!0)},render:function(){var l=this.__ch();this.updater.digest(l)},__ch:function(){var l=this.updater.get(),e=l.total,a=0|l.page,s=Math.ceil((l.total||1)/l.size);a>s&&(a=s);var _,r=0|l.step,i=r/2|0,g=Math.max(1,a-i),n=Math.min(s,g+r-1);(g=Math.max(1,n-r+1))<=2&&n+(_=3-g)<s&&(n+=_),n+2>s&&g-(_=2-(s-n))>1&&(g-=_),3==g&&(g-=1),n+2==s&&(n+=1);var c=(a-1)*l.size+1,p=Math.min(l.total,a*l.size);0==e&&(c=p=0);var z=a+1;return z>s&&(z=s),{pages:s,offsetStart:c,offsetEnd:p,page:a,start:g,end:n,next:z,tipOffset:t["pager.offset"].replace("${min}",""+c).replace("${max}",""+p),tipTotal:t["pager.total"].replace("${total}",""+e),tipPer:t["pager.per.page"],tipUnit:t["pager.unit"],tipJumpTo:t["pager.jump.to"],tipJumpUnit:t["pager.jump.unit"]}},__y:function(){var l=_("#"+this.id),e=this.updater.get(),a=+e.page,s=+e.size,r=(a-1)*s;l.trigger({type:"change",page:a,size:s,offset:r})},"__ci<click>":function(l){l.preventDefault();this.updater.set(l.params),this.render(),this.__y()},"__cj<change>":function(l){l.stopPropagation();this.updater.set({size:l.value}),this.render(),this.__y()},"__l<change,focusin,focusout>":function(l){l.stopPropagation()},"__ck<click>":function(l){l.stopPropagation();var e=+_("#"+this.id+"_jump_input").val();Number.isInteger(e)&&(this.updater.set({page:e}),this.render(),this.__y())},"__H<click>":function(l){l.preventDefault()}})});