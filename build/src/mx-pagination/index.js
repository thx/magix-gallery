define("mx-pagination/index",["magix","$","../mx-medusa/util","mx-dropdown/index"],(l,e,a)=>{l("mx-dropdown/index");var s=l("magix"),_=l("$"),r=[10,20,30,40],t=l("../mx-medusa/util");s.applyStyle("_zs_galleryah","._zs_galleryjA{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjB{color:#666}._zs_galleryjB ._zs_galleryjC{float:left;line-height:26px}._zs_galleryjB ._zs_galleryjC ._zs_galleryjD{min-width:66px}._zs_galleryjB ._zs_galleryjC ._zs_galleryjD ._zs_gallerydQ{height:26px;line-height:24px}._zs_galleryjB ._zs_galleryjE{display:inline-block}._zs_galleryjB ._zs_galleryjE ._zs_galleryjF{float:left;line-height:26px}._zs_galleryjB ._zs_galleryjE ._zs_galleryjF ._zs_galleryjG,._zs_galleryjB ._zs_galleryjE ._zs_galleryjF ._zs_galleryjH{display:block;min-width:26px;height:26px;margin:0 2px;font-size:12px;border-radius:4px;text-align:center}._zs_galleryjB ._zs_galleryjE ._zs_galleryjF ._zs_galleryjH{color:#666}._zs_galleryjB ._zs_galleryjE ._zs_galleryjF ._zs_galleryjH:hover{color:#333}._zs_galleryjB ._zs_galleryjE ._zs_galleryjF ._zs_galleryjH._zs_galleryjI{color:#333;background-color:#eee}._zs_galleryjB ._zs_galleryjE ._zs_galleryjF ._zs_galleryjH._zs_galleryjJ{background:transparent;cursor:not-allowed}._zs_galleryjB ._zs_galleryjE ._zs_galleryjF ._zs_galleryjG{color:#999;line-height:28px}._zs_galleryjB ._zs_galleryjE ._zs_galleryjF ._zs_galleryjG:hover{color:#666}._zs_galleryjB ._zs_galleryjE ._zs_galleryjF ._zs_galleryjG._zs_galleryjJ{color:#eee;background:transparent;cursor:not-allowed}._zs_galleryjB ._zs_galleryjK{float:right;margin-left:15px}._zs_galleryjB ._zs_galleryjK ._zs_galleryjL{width:40px;text-align:center}"),a.exports=s.View.extend({tmpl:function(l,e,a,s,_,r,t,i){if(a||(a=l),!_){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,c=function(l){return"&"+g[l]+";"};_=function(l){return""+(null==l?"":l)},s=function(l){return _(l).replace(n,c)}}if(!r){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},z=function(l){return p[l]},y=/[!')(*]/g;r=function(l){return encodeURIComponent(_(l)).replace(y,z)}}if(!i){var o=/[\\'"]/g;i=function(l){return _(l).replace(o,"\\$&")}}t||(t=function(l,e,a,s){for(s=l[j];--s;)if(l[a=j+s]===e)return a;return l[a=j+l[j]++]=e,a});var j="",m="",u=l.simplify,f=l.mini,x=l.tipOffset,d=l.tipTotal,h=l.tipPer,v=l.sizesChange,w=l.sizesPlacement,F=l.sizes,k=l.size,B=l.tipUnit,b=l.jump,H=l.tipJumpTo,E=l.next,J=l.viewId,C=l.tipJumpUnit,P=l.hideTotal,I=l.page,T=l.pages,$=l.start,G=l.end;if(m+='<div mxv mxa="_zs_gallerycw:_" class="clearfix _zs_galleryjB">',u||f||(m+='<div mxv mxa="_zs_gallerycw:a" class="_zs_galleryjC"><span>'+_(x)+"</span><span>"+_(d)+"，</span><span>"+_(h)+"</span>",m+=v?'<div mxv="sizes,size" class="ml10 mr10 _zs_galleryjD" mx-change="'+e+'__cj()" mx-view="mx-dropdown/index?placement='+r(w)+"&list="+t(a,F)+"&selected="+t(a,k)+'"></div>':" "+s(k)+" ",m+="<span>"+_(B)+"</span></div>"),m+=" ",b||(m+='<div mxv mxa="_zs_gallerycw:b" class="_zs_galleryjK"><span mxa="_zs_gallerycw:c" class="mr5">'+s(H)+'</span><input class="input input-small _zs_galleryjL mr5" value="'+s(E)+'" id="'+s(J)+'_jump_input" mx-change="'+e+'__l()" mx-focusin="'+e+'__l()" mx-focusout="'+e+'__l()"/><span mxa="_zs_gallerycw:d" class="mr10">'+s(C)+'</span><a mxs="_zs_gallerycw:_" href="javascript:;" class="btn btn-small" mx-click="'+e+'__ck()">跳转</a></div>'),m+='<ul class="clearfix _zs_galleryjE" ',P||(m+=' style="float: right;" '),m+='><li mxa="_zs_gallerycw:e" class="_zs_galleryjF"><a class="mc-iconfont _zs_galleryjG ',1==I&&(m+="_zs_galleryjJ"),m+='" href="#" mx-click="'+e+"",m+=I>1?"__ci({page:"+s(I-1)+"})":"__H()",m+='">&#xe61e;</a></li>',f)m+='<li mxa="_zs_gallerycw:f" class="_zs_galleryjF">'+s(I)+" / "+s(T)+"</li>";else{m+=" ",$>1&&(m+='<li mxs="_zs_gallerycw:a" class="_zs_galleryjF"><a class="_zs_galleryjH" href="#" mx-click="'+e+'__ci({page:1})">1</a></li>'),m+=" ",$>2&&(m+='<li mxs="_zs_gallerycw:b" class="_zs_galleryjF"><a class="_zs_galleryjH _zs_galleryjJ" href="#" mx-click="'+e+'__H()">...</a></li>'),m+=" ";for(var D=$;D<=G;D++)m+='<li mxa="_zs_gallerycw:g" class="_zs_galleryjF"><a class="_zs_galleryjH ',D==I&&(m+="_zs_galleryjI"),m+='" href="#" mx-click="'+e+"__ci({page:"+s(D)+'})">'+s(D)+"</a></li>";m+=" ",G+2<=T&&(m+='<li mxs="_zs_gallerycw:b" class="_zs_galleryjF"><a class="_zs_galleryjH _zs_galleryjJ" href="#" mx-click="'+e+'__H()">...</a></li>'),m+=" ",G<T&&(m+='<li mxa="_zs_gallerycw:h" class="_zs_galleryjF"><a class="_zs_galleryjH" href="#" mx-click="'+e+"__ci({page:"+s(T)+'})">'+s(T)+"</a></li>"),m+=" "}return m+='<li mxa="_zs_gallerycw:i" class="_zs_galleryjF"><a class="mc-iconfont _zs_galleryjG rotate180 ',I==T&&(m+="_zs_galleryjJ"),m+='" href="#" mx-click="'+e+"",m+=I<T?"__ci({page:"+s(I+1)+"})":"__H()",m+='">&#xe61e;</a></li>',P||(m+='<li mxa="_zs_gallerycw:j" class="_zs_galleryjF ml10">'+_(d)+"</li>"),m+="</ul></div>"},init:function(l){this.updater.snapshot(),this.assign(l)},assign:function(l){var e=this,a=e.updater.altered(),s=[];try{s=JSON.parse(l.sizes)}catch(e){s=l.sizes}s&&s.length||(s=r);var _=!0;/^false$/i.test(l.sizesChange)&&(_=!1);var t,i=l.size||40;return t=l.page?l.page:l.offset?parseInt(l.offset/i)+1:1,e.updater.set({viewId:e.id,step:l.step||5,simplify:l.simplify+""=="true",mini:l.mini+""=="true",hideTotal:l.hideTotal+""=="true",jump:l.jump+""=="false",total:0|l.total||0,page:t,size:i,sizesChange:_,sizesPlacement:l.sizesPlacement||"bottom",sizes:s}),a||(a=e.updater.altered()),!!a&&(e.updater.snapshot(),!0)},render:function(){var l=this.__ch();this.updater.digest(l)},__ch:function(){var l=this.updater.get(),e=l.total,a=0|l.page,s=Math.ceil((l.total||1)/l.size);a>s&&(a=s);var _,r=0|l.step,i=r/2|0,g=Math.max(1,a-i),n=Math.min(s,g+r-1);(g=Math.max(1,n-r+1))<=2&&n+(_=3-g)<s&&(n+=_),n+2>s&&g-(_=2-(s-n))>1&&(g-=_),3==g&&(g-=1),n+2==s&&(n+=1);var c=(a-1)*l.size+1,p=Math.min(l.total,a*l.size);0==e&&(c=p=0);var z=a+1;return z>s&&(z=s),{pages:s,offsetStart:c,offsetEnd:p,page:a,start:g,end:n,next:z,tipOffset:t["pager.offset"].replace("${min}",""+c).replace("${max}",""+p),tipTotal:t["pager.total"].replace("${total}",""+e),tipPer:t["pager.per.page"],tipUnit:t["pager.unit"],tipJumpTo:t["pager.jump.to"],tipJumpUnit:t["pager.jump.unit"]}},__y:function(){var l=_("#"+this.id),e=this.updater.get(),a=+e.page,s=+e.size,r=(a-1)*s;l.trigger({type:"change",page:a,size:s,offset:r})},"__ci<click>":function(l){l.preventDefault();this.updater.set(l.params),this.render(),this.__y()},"__cj<change>":function(l){l.stopPropagation();this.updater.set({size:l.value}),this.render(),this.__y()},"__l<change,focusin,focusout>":function(l){l.stopPropagation()},"__ck<click>":function(l){l.stopPropagation();var e=+_("#"+this.id+"_jump_input").val();Number.isInteger(e)&&(this.updater.set({page:e}),this.render(),this.__y())},"__H<click>":function(l){l.preventDefault()}})});