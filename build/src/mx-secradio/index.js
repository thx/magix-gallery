define("mx-secradio/index",["magix","../mx-medusa/util"],(e,a,l)=>{var t=e("magix"),r=e("../mx-medusa/util");t.applyStyle("_zs_galleryat","._zs_gallerykY{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykZ{position:relative;height:32px;line-height:32px;transition:height .2s;overflow:hidden}._zs_gallerykZ ._zs_galleryl_{width:20px;cursor:pointer;font-size:14px;color:#ccc;transition:color .2s}._zs_gallerykZ ._zs_galleryl_:hover{color:#666}._zs_galleryla{cursor:pointer;color:#999}._zs_gallerylb{padding-left:20px}._zs_gallerylb._zs_gallerylc{height:0}"),l.exports=t.View.extend({tmpl:function(e,a,l,t,r,s,i,n){if(l||(l=e),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,u=function(e){return"&"+c[e]+";"};r=function(e){return""+(null==e?"":e)},t=function(e){return r(e).replace(o,u)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return d[e]},_=/[!')(*]/g;s=function(e){return encodeURIComponent(r(e)).replace(_,p)}}if(!n){var x=/[\\'"]/g;n=function(e){return r(e).replace(x,"\\$&")}}var g="",v=e.needExpand,f=e.close,h=e.text,m=e.prefix,y=e.maxHeight,z=e.list,b=e.parentPrefix,k=e.viewId,$=e.selected;v&&(g+='<div mxa="_zs_galleryc\\:_" class="_zs_gallerykZ _zs_galleryla" mx-click="'+a+'__cT()">',g+=t(f?h.expand:h.collapse),m&&(g+=t(m)),g+="</div>"),g+='<div mxv class="scroll-y" ',y&&(g+=' style="max-height: '+t(y)+'px;" '),g+=">";for(var V=0,w=z.length;V<w;V++){var E=z[V];g+='<div mxa="_zs_galleryc\\:a" class="_zs_gallerykZ"><label mx-click="'+a+"__cU({index:"+t(V)+'})">',v&&(g+='<i mxa="_zs_galleryc\\:b" class="mc-iconfont _zs_galleryl_">',E.close?g+="&#xe65b;":g+="&#xe65a;",g+="</i>"),g+=" ",b&&(g+=" "+t(b)+"： "),g+=" "+t(E.text)+"</label></div>";for(var Z=0,K=E.subs,H=K.length;Z<H;Z++){var I=K[Z];g+='<div mxv class="_zs_gallerykZ _zs_gallerylb ',E.close&&(g+=" _zs_gallerylc "),g+='"><label mxv><input class="radio" type="radio" value="'+t(I.value)+'" name="'+t(k)+'_radio" ',$==I.value&&(g+=' checked="true" '),g+=' mx-change="'+a+"__ca({value:"+t(I.value)+'})"/>',m&&(g+=" "+t(m)+"： "),g+=" "+t(I.text)+"</label></div>"}g+=" "}return g+="</div>"},init:function(e){this.updater.snapshot(),this.$map={},this.assign(e)},assign:function(e){var a=this,l=a.updater.altered(),t=e.needExpand+""!="false",s=e.close+""=="true";t||(s=!1);var i=e.parentTextKey||"text",n=e.textKey||"text",c=e.valueKey||"value",o=e.subKey||"subs",u=[];(e.list||[]).forEach(function(e){var l={text:e[i],subs:e[o].map(function(e){return{text:e[n],value:e[c]}})};l.pValue=a.__cS(l),l.close=a.$map[l.pValue]||s,u.push(l)});var d=e.selected||"",p=e.parentPrefix||"",_=e.prefix||"",x=e.maxHeight||"";return a.updater.set({viewId:a.id,needExpand:t,close:s,parentPrefix:p,prefix:_,maxHeight:x,list:u,selected:d,text:{expand:r["secradio.expand"],collapse:r["secradio.collapse"]}}),l||(l=a.updater.altered()),!!l&&(a.updater.snapshot(),!0)},render:function(){this.updater.digest();var e=this.updater.get("selected");$("#"+this.id).val(e)},__cS:function(e){return e.subs.map(function(e){return e.value+""}).sort().join("_")},"__cT<click>":function(e){var a=this,l=!this.updater.get("close"),t=this.updater.get("list");t.forEach(function(e){e.close=l,l?a.$map[e.pValue]=!0:delete a.$map[e.pValue]}),a.updater.digest({close:l,list:t})},"__cU<click>":function(e){var a=this,l=e.params.index,t=!0,r=this.updater.get("list");r.forEach(function(e,r){l==r&&(e.close=!e.close,e.close?a.$map[e.pValue]=!0:delete a.$map[e.pValue]),t=t&&e.close}),a.updater.digest({close:t,list:r})},"__ca<change>":function(e){var a=e.params.value;this.updater.digest({selected:a}),$("#"+this.id).val(a)}})});