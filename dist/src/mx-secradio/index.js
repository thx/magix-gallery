define("mx-secradio/index",["magix","../mx-medusa/util"],(e,t,a)=>{var r=e("magix"),l=e("../mx-medusa/util");r.applyStyle("_zs_galleryat",":root{--mx-secradio-oper-size:calc(var(--font-size) + 2px)}._zs_galleryjs{position:relative;height:32px;line-height:32px;transition:height .2s;overflow:hidden}._zs_galleryjs ._zs_galleryjt{width:var(--mx-tree-oper-size);height:var(--mx-tree-oper-size);margin-right:5px;line-height:var(--mx-tree-oper-size);font-size:var(--mx-tree-oper-size);transition:color .2s;cursor:pointer;color:#ccc;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._zs_galleryjs ._zs_galleryjt:hover{color:#666}._zs_galleryju{cursor:pointer;color:#999}._zs_galleryjv{padding-left:calc(var(--mx-secradio-oper-size) + 5px)}._zs_galleryjv._zs_galleryjw{height:0}"),a.exports=r.View.extend({tmpl:function(e,t,a,r,l,s,i,n){if(a||(a=e),!l){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,u=function(e){return"&"+c[e]+";"};l=function(e){return""+(null==e?"":e)},r=function(e){return l(e).replace(o,u)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return d[e]},_=/[!')(*]/g;s=function(e){return encodeURIComponent(l(e)).replace(_,p)}}if(!n){var x=/[\\'"]/g;n=function(e){return l(e).replace(x,"\\$&")}}var v="",g=e.needExpand,h=e.close,m=e.text,f=e.prefix,y=e.maxHeight,z=e.list,j=e.parentPrefix,b=e.viewId,$=e.selected;g&&(v+='<div mxa="_zs_galleryd;:_" class="_zs_galleryjs _zs_galleryju" mx-click="'+t+'__db()">',v+=r(h?m.expand:m.collapse),f&&(v+=l(f)),v+="</div>"),v+='<div mxv class="scroll-y" ',y&&(v+=' style="max-height: '+r(y)+'px;" '),v+=">";for(var w=0,V=z.length;w<V;w++){var k=z[w];v+='<div mxa="_zs_galleryd;:a" class="_zs_galleryjs"><label mx-click="'+t+"__dc({index:"+r(w)+'})">',g&&(v+='<i mxa="_zs_galleryd;:b" class="mc-iconfont _zs_galleryjt">',k.close?v+="&#xe65b;":v+="&#xe65a;",v+="</i>"),v+=" ",j&&(v+=r(j)+"："),v+=r(k.text)+"</label></div>";for(var E=0,K=k.subs,H=K.length;E<H;E++){var I=K[E];v+='<div mxv class="_zs_galleryjs _zs_galleryjv ',k.close&&(v+=" _zs_galleryjw "),v+='"><label mxv><input class="radio" type="radio" value="'+r(I.value)+'" name="'+r(b)+'_radio" ',$==I.value&&(v+=' checked="true" '),v+=' mx-change="'+t+"__c_({value:"+r(I.value)+'})"/>',f&&(v+=l(f)+"："),v+=r(I.text)+"</label></div>"}v+=" "}return v+="</div>"},init:function(e){this.updater.snapshot(),this.$map={},this.assign(e)},assign:function(e){var t=this,a=t.updater.altered(),r=e.needExpand+""!="false",s=e.close+""=="true";r||(s=!1);var i=e.parentTextKey||"text",n=e.textKey||"text",c=e.valueKey||"value",o=e.subKey||"subs",u=[];(e.list||[]).forEach(function(e){var a={text:e[i],subs:e[o].map(function(e){return{text:e[n],value:e[c]}})};a.pValue=t.__da(a),a.close=t.$map[a.pValue]||s,u.push(a)});var d=e.selected||"",p=e.parentPrefix||"",_=e.prefix||"",x=e.maxHeight||"";return t.updater.set({viewId:t.id,needExpand:r,close:s,parentPrefix:p,prefix:_,maxHeight:x,list:u,selected:d,text:{expand:l["secradio.expand"],collapse:l["secradio.collapse"]}}),a||(a=t.updater.altered()),!!a&&(t.updater.snapshot(),!0)},render:function(){this.updater.digest();var e=this.updater.get("selected");$("#"+this.id).val(e)},__da:function(e){return e.subs.map(function(e){return e.value+""}).sort().join("_")},"__db<click>":function(e){var t=this,a=!this.updater.get("close"),r=this.updater.get("list");r.forEach(function(e){e.close=a,a?t.$map[e.pValue]=!0:delete t.$map[e.pValue]}),t.updater.digest({close:a,list:r})},"__dc<click>":function(e){var t=this,a=e.params.index,r=!0,l=this.updater.get("list");l.forEach(function(e,l){a==l&&(e.close=!e.close,e.close?t.$map[e.pValue]=!0:delete t.$map[e.pValue]),r=r&&e.close}),t.updater.digest({close:r,list:l})},"__c_<change>":function(e){var t=e.params.value;this.updater.digest({selected:t}),$("#"+this.id).val(t)}})});