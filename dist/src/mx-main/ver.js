define("mx-main/ver",["magix","mx-main/steps"],(e,a,i)=>{var l=e("magix"),r=e("mx-main/steps");l.applyStyle("_zs_galleryah",'[mx-view*="mx-main/ver"]{padding:16px;background-color:#e8ebf2}._zs_galleryhZ{position:relative;margin-bottom:20px;padding-left:58px}._zs_galleryhZ:last-child{margin-bottom:0}._zs_galleryhZ ._zs_galleryi_{position:absolute;top:47px;left:21px;z-index:2;width:0;height:100%;margin-left:-1px;border-left:2px solid #fff}._zs_galleryhZ ._zs_galleryia{position:absolute;top:5px;left:0;z-index:3;border-radius:50%;background-color:#fff;transition:all var(--duration);overflow:hidden;cursor:pointer}._zs_galleryhZ ._zs_galleryia,._zs_galleryhZ ._zs_galleryia>*{display:block;width:42px;height:42px;line-height:42px;text-align:center;color:#ccc;font-weight:700;font-size:18px}'),i.exports=r.extend({tmpl:function(e,a,i,l,r,n,t,s){if(i||(i=e),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,p=function(e){return"&"+c[e]+";"};r=function(e){return""+(null==e?"":e)},l=function(e){return r(e).replace(d,p)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},_=/[!')(*]/g;n=function(e){return encodeURIComponent(r(e)).replace(_,x)}}if(!s){var g=/[\\'"]/g;s=function(e){return r(e).replace(g,"\\$&")}}t||(t=function(e,a,i,l){for(l=e[v];--l;)if(e[i=v+l]===a)return i;return e[i=v+e[v]++]=a,i});for(var v="",f="",m=e.stepInfos,y=e.curStepInfo,h=e.viewId,u=0,z=m.length;u<z;u++){var b=m[u];f+='<div mxv mxa="_zs_galleryc`:_" class="clearfix _zs_galleryhZ"><div mxa="_zs_galleryc`:a" class="_zs_galleryia">'+r(b.icon)+"</div>",b.index<m.length&&(f+='<div mxs="_zs_galleryc`:_" class="_zs_galleryi_"></div>'),f+='<div mxv mxa="_zs_galleryc`:b" class="grid"><div mxa="_zs_galleryc`:c" class="clearfix" style="padding: 10px 24px;;"><div mxa="_zs_galleryc`:d" style="float:left; height: 32px; line-height: 32px;"><span mxa="_zs_galleryc`:e" class="grid-title" style="margin-right: 16px;">'+l(b.label)+"</span></div>",b.locked||b.current||(f+='<a class="fr lh32 color-brand" href="javascript:;" mx-click="'+a+"nav({stepIndex:"+l(b.index)+'})">修改</a>'),f+="</div>",b.current&&(f+='<div mxv mxa="_zs_galleryc`:f" class="clearfix bt-e6" style="padding: 16px 24px;"><div mxv="curStepInfo" mx-view="'+l(y.view)+"?info="+t(i,y)+'" id="'+l(h)+'_cur_content"><div mxs="_zs_galleryc`:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div mxa="_zs_galleryc`:g" class="pt20">',y.prevTip&&(f+='<a mxa="_zs_galleryc`:h" href="javascript:;" class="btn min-width-100 mr15" mx-click="'+a+'prev()">'+l(y.prevTip)+"</a>"),f+=" ",y.nextTip&&(f+='<a mxa="_zs_galleryc`:i" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+a+'next()">'+l(y.nextTip)+"</a>"),f+='</div><div id="'+l(h)+'_error"></div></div>'),f+="</div></div>"}return f}})});