define("mx-secradio/index",["magix","../mx-medusa/util"],(e,t,a)=>{var l=e("magix"),r=e("../mx-medusa/util");l.applyStyle("_zs_galleryau",":root{--mx-secradio-oper-size:calc(var(--font-size) + 2px)}._zs_galleryjl{position:relative;height:32px;line-height:32px;transition:height .2s;overflow:hidden}._zs_galleryjl ._zs_galleryjm{width:var(--mx-tree-oper-size);height:var(--mx-tree-oper-size);margin-right:5px;line-height:var(--mx-tree-oper-size);font-size:var(--mx-tree-oper-size);transition:color .2s;cursor:pointer;color:#ccc;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._zs_galleryjl ._zs_galleryjm:hover{color:#666}._zs_galleryjn{cursor:pointer;color:#999}._zs_galleryjo{padding-left:calc(var(--mx-secradio-oper-size) + 5px)}._zs_galleryjo._zs_galleryjp{height:0}"),a.exports=l.View.extend({tmpl:function(e,t,a,l,r,s,i,n){if(a||(a=e),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,u=function(e){return"&"+c[e]+";"};r=function(e){return""+(null==e?"":e)},l=function(e){return r(e).replace(o,u)}}if(!s){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return p[e]},x=/[!')(*]/g;s=function(e){return encodeURIComponent(r(e)).replace(x,d)}}if(!n){var _=/[\\'"]/g;n=function(e){return r(e).replace(_,"\\$&")}}var g="",v=e.needExpand,m=e.close,h=e.text,f=e.prefix,y=e.maxHeight,z=e.list,j=e.parentPrefix,b=e.viewId,$=e.selected;v&&(g+='<div mxa="_zs_galleryd5:_" class="_zs_galleryjl _zs_galleryjn" mx-click="'+t+'__cY()">',g+=l(m?h.expand:h.collapse),f&&(g+=l(f)),g+="</div>"),g+='<div mxv class="scroll-y" ',y&&(g+=' style="max-height: '+l(y)+'px;" '),g+=">";for(var V=0,k=z.length;V<k;V++){var w=z[V];g+='<div mxa="_zs_galleryd5:a" class="_zs_galleryjl"><label mx-click="'+t+"__cZ({index:"+l(V)+'})">',v&&(g+='<i mxa="_zs_galleryd5:b" class="mc-iconfont _zs_galleryjm">',w.close?g+="&#xe65b;":g+="&#xe65a;",g+="</i>"),g+=" ",j&&(g+=l(j)+"："),g+=l(w.text)+"</label></div>";for(var E=0,K=w.subs,Y=K.length;E<Y;E++){var H=K[E];g+='<div mxv class="_zs_galleryjl _zs_galleryjo ',w.close&&(g+=" _zs_galleryjp "),g+='"><label mxv><input class="radio" type="radio" value="'+l(H.value)+'" name="'+l(b)+'_radio" ',$==H.value&&(g+=' checked="true" '),g+=' mx-change="'+t+"__bY({value:"+l(H.value)+'})"/>',f&&(g+=l(f)+"："),g+=l(H.text)+"</label></div>"}g+=" "}return g+="</div>"},init:function(e){this.updater.snapshot(),this.$map={},this.assign(e)},assign:function(e){var t=this,a=t.updater.altered(),l=e.needExpand+""!="false",s=e.close+""=="true";l||(s=!1);var i=e.parentTextKey||"text",n=e.textKey||"text",c=e.valueKey||"value",o=e.subKey||"subs",u=[];(e.list||[]).forEach(function(e){var a={text:e[i],subs:e[o].map(function(e){return{text:e[n],value:e[c]}})};a.pValue=t.__cX(a),a.close=t.$map[a.pValue]||s,u.push(a)});var p=e.selected||"",d=e.parentPrefix||"",x=e.prefix||"",_=e.maxHeight||"";return t.updater.set({viewId:t.id,needExpand:l,close:s,parentPrefix:d,prefix:x,maxHeight:_,list:u,selected:p,text:{expand:r["secradio.expand"],collapse:r["secradio.collapse"]}}),a||(a=t.updater.altered()),!!a&&(t.updater.snapshot(),!0)},render:function(){this.updater.digest();var e=this.updater.get("selected");$("#"+this.id).val(e)},__cX:function(e){return e.subs.map(function(e){return e.value+""}).sort().join("_")},"__cY<click>":function(e){var t=this,a=!this.updater.get("close"),l=this.updater.get("list");l.forEach(function(e){e.close=a,a?t.$map[e.pValue]=!0:delete t.$map[e.pValue]}),t.updater.digest({close:a,list:l})},"__cZ<click>":function(e){var t=this,a=e.params.index,l=!0,r=this.updater.get("list");r.forEach(function(e,r){a==r&&(e.close=!e.close,e.close?t.$map[e.pValue]=!0:delete t.$map[e.pValue]),l=l&&e.close}),t.updater.digest({close:l,list:r})},"__bY<change>":function(e){var t=e.params.value;this.updater.digest({selected:t}),$("#"+this.id).val(t)}})});