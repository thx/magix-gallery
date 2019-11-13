define("mx-pagination/index",["magix","$","../mx-util/view","../mx-medusa/util","mx-dropdown/index"],(l,a,e)=>{l("mx-dropdown/index"),a.__esModule=!0;var i=l("magix"),s=l("$"),r=l("../mx-util/view"),_=l("../mx-medusa/util"),t=[10,20,30,40];i.default.applyStyle("_zs_galleryai","._zs_galleryiA{line-height:0;color:#666}._zs_galleryiA ._zs_galleryiB{float:left;line-height:var(--input-small-height)}._zs_galleryiA ._zs_galleryiB ._zs_galleryiC{min-width:66px}._zs_galleryiA ._zs_galleryiD{display:inline-block}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE{float:left;line-height:var(--input-small-height)}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiF,._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiG{display:block;min-width:var(--input-small-height);height:var(--input-small-height);margin:0 2px;font-size:var(--font-size);border-radius:var(--border-radius);text-align:center}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiG{color:#666}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiG:hover{color:#333}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiG._zs_galleryiH{color:#333;background-color:#eee}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiG._zs_galleryiI{background:transparent;cursor:not-allowed}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiF{color:#999;line-height:calc(var(--input-small-height) + 2px)}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiF:hover{color:#666}._zs_galleryiA ._zs_galleryiD ._zs_galleryiE ._zs_galleryiF._zs_galleryiI{color:#eee;background:transparent;cursor:not-allowed}._zs_galleryiA ._zs_galleryiJ{float:right;margin-left:15px}._zs_galleryiA ._zs_galleryiJ ._zs_galleryiK{width:40px;text-align:center}"),a.default=r.extend({tmpl:function(l,a,e,i,s,r,_,t){if(e||(e=l),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,c=function(l){return"&"+n[l]+";"};s=function(l){return""+(null==l?"":l)},i=function(l){return s(l).replace(g,c)}}if(!r){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},z=function(l){return p[l]},o=/[!')(*]/g;r=function(l){return encodeURIComponent(s(l)).replace(o,z)}}if(!t){var y=/[\\'"]/g;t=function(l){return s(l).replace(y,"\\$&")}}_||(_=function(l,a,e,i){for(i=l[m];--i;)if(l[e=m+i]===a)return e;return l[e=m+l[m]++]=a,e});var m="",u="",d=l.simplify,f=l.mini,h=l.tipOffset,x=l.tipTotal,v=l.tipPer,k=l.sizesChange,A=l.sizesPlacement,C=l.sizes,E=l.size,D=l.spm,b=l.tipUnit,w=l.jump,j=l.tipJumpTo,M=l.next,G=l.viewId,I=l.tipJumpUnit,J=l.hideTotal,P=l.page,T=l.pages,F=l.start,B=l.end;if(u+='<div mxv mxa="_zs_gallerydC:_" class="clearfix _zs_galleryiA">',d||f||(u+='<div mxv mxa="_zs_gallerydC:a" class="_zs_galleryiB"><span>'+s(h)+"</span><span>"+s(x)+"，</span><span>"+s(v)+"</span>",k?(u+='<div mxv="sizes,size" class="ml10 mr10 _zs_galleryiC" mx-change="'+a+'__cB()" ',D&&(u+=' data-spm-click="'+i(D)+'dpd" '),u+=' mx-view="mx-dropdown/index?small=true&placement='+r(A)+"&list="+_(e,C)+"&selected="+_(e,E)+'"></div>'):u+=" "+i(E)+" ",u+="<span>"+s(b)+"</span></div>"),u+=" ",w||(u+='<div mxv mxa="_zs_gallerydC:b" class="_zs_galleryiJ"><span mxa="_zs_gallerydC:c" class="mr5">'+i(j)+'</span><input class="input input-small _zs_galleryiK mr5" value="'+i(M)+'" id="'+i(G)+'_jump_input" mx-change="'+a+'__p()" mx-focusin="'+a+'__p()" mx-focusout="'+a+'__p()" ',D&&(u+=' data-spm-click="'+i(D)+'ji" '),u+='/><span mxa="_zs_gallerydC:d" class="mr10">'+i(I)+'</span><a href="javascript:;" class="btn btn-small" mx-click="'+a+'__cC()" ',D&&(u+=' data-spm-click="'+i(D)+'jt" '),u+=">跳转</a></div>"),u+='<ul class="clearfix _zs_galleryiD ',J||(u+=" fr "),u+='"><li mxa="_zs_gallerydC:e" class="_zs_galleryiE"><a class="mc-iconfont _zs_galleryiF ',1==P&&(u+=" _zs_galleryiI "),u+='" href="#" mx-click="'+a+"",u+=P>1?"__cA({page:'"+i(P-1)+"'})":"__M()",u+='" ',D&&(u+=' data-spm-click="'+i(D)+'prev" '),u+=">&#xe61e;</a></li>",f)u+='<li mxa="_zs_gallerydC:f" class="_zs_galleryiE">'+i(P)+" / "+i(T)+"</li>";else{u+=" ",F>1&&(u+='<li mxa="_zs_gallerydC:g" class="_zs_galleryiE"><a class="_zs_galleryiG" href="#" mx-click="'+a+'__cA({page:1})" ',D&&(u+=' data-spm-click="'+i(D)+'n1" '),u+=">1</a></li>"),u+=" ",F>2&&(u+='<li mxs="_zs_gallerydC:_" class="_zs_galleryiE"><a class="_zs_galleryiG _zs_galleryiI" href="#" mx-click="'+a+'__M()">...</a></li>'),u+=" ";for(var U=F;U<=B;U++)u+='<li mxa="_zs_gallerydC:h" class="_zs_galleryiE"><a class="_zs_galleryiG ',U==P&&(u+=" _zs_galleryiH "),u+='" href="#" mx-click="'+a+"__cA({page:'"+i(t(U))+"'})\" ",D&&(u+=' data-spm-click="'+i(D)+"n"+i(U)+'" '),u+=">"+i(U)+"</a></li>";u+=" ",B+2<=T&&(u+='<li mxs="_zs_gallerydC:_" class="_zs_galleryiE"><a class="_zs_galleryiG _zs_galleryiI" href="#" mx-click="'+a+'__M()">...</a></li>'),u+=" ",B<T&&(u+='<li mxa="_zs_gallerydC:i" class="_zs_galleryiE"><a class="_zs_galleryiG" href="#" mx-click="'+a+"__cA({page:'"+i(t(T))+"'})\" ",D&&(u+=' data-spm-click="'+i(D)+'ne" '),u+=">"+i(T)+"</a></li>"),u+=" "}return u+='<li mxa="_zs_gallerydC:j" class="_zs_galleryiE"><a class="mc-iconfont _zs_galleryiF rotate180 ',P==T&&(u+=" _zs_galleryiI "),u+='" href="#" mx-click="'+a+"",u+=P<T?"__cA({page:'"+i(P+1)+"'})":"__M()",u+='" ',D&&(u+=' data-spm-click="'+i(D)+'next" '),u+=">&#xe61e;</a></li>",J||(u+='<li mxa="_zs_gallerydC:k" class="_zs_galleryiE ml10">'+s(x)+"</li>"),u+="</ul></div>"},init:function(l){this.updater.snapshot(),this.assign(l)},assign:function(l){var a=this.updater.altered(),e=[];try{e=JSON.parse(l.sizes)}catch(a){e=l.sizes}e&&e.length||(e=t);var i=!0;/^false$/i.test(l.sizesChange)&&(i=!1);var s,r=l.size||40;return s=l.page?l.page:l.offset?parseInt(l.offset/r)+1:1,this.updater.set({step:l.step||5,simplify:l.simplify+""=="true",mini:l.mini+""=="true",hideTotal:l.hideTotal+""=="true",jump:l.jump+""=="false",total:0|l.total||0,page:s,size:r,sizesChange:i,sizesPlacement:l.sizesPlacement||"bottom",sizes:e}),a||(a=this.updater.altered()),!!a&&(this.updater.snapshot(),!0)},render:function(){var l=this.__cz();this.updater.digest(l)},__cz:function(){var l=this.updater.get(),a=l.total,e=0|l.page,i=Math.ceil((l.total||1)/l.size);e>i&&(e=i);var s,r=0|l.step,t=r/2|0,n=Math.max(1,e-t),g=Math.min(i,n+r-1);(n=Math.max(1,g-r+1))<=2&&g+(s=3-n)<i&&(g+=s),g+2>i&&n-(s=2-(i-g))>1&&(n-=s),3==n&&(n-=1),g+2==i&&(g+=1);var c=(e-1)*l.size+1,p=Math.min(l.total,e*l.size);0==a&&(c=p=0);var z=e+1;return z>i&&(z=i),{pages:i,offsetStart:c,offsetEnd:p,page:e,start:n,end:g,next:z,tipOffset:_["pager.offset"].replace("{min}",""+c).replace("{max}",""+p),tipTotal:_["pager.total"].replace("{total}",""+a),tipPer:_["pager.per.page"],tipUnit:_["pager.unit"],tipJumpTo:_["pager.jump.to"],tipJumpUnit:_["pager.jump.unit"]}},__D:function(){var l=s("#"+this.id),a=this.updater.get(),e=+a.page,i=+a.size,r=(e-1)*i;l.trigger({type:"change",page:e,size:i,offset:r})},"__cA<click>":function(l){l.preventDefault(),this.updater.set(l.params),this.render(),this.__D()},"__cB<change>":function(l){l.stopPropagation(),this.updater.set({size:l.value}),this.render(),this.__D()},"__p<change,focusin,focusout>":function(l){l.stopPropagation()},"__cC<click>":function(l){l.stopPropagation();var a=+s("#"+this.id+"_jump_input").val();Number.isInteger(a)&&(this.updater.set({page:a}),this.render(),this.__D())},"__M<click>":function(l){l.preventDefault()}})});