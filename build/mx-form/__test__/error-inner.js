define("mx-form/__test__/error-inner",["magix","$","mx-form/index","mx-form/validator"],(r,e,t)=>{var a=r("magix"),i=(r("$"),r("mx-form/index")),n=r("mx-form/validator");t.exports=a.View.extend({tmpl:function(r,e,t,a,i,n,o,l){if(t||(t=r),!i){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},f=/[&<>"'`]/g,u=function(r){return"&"+m[r]+";"};i=function(r){return""+(null==r?"":r)},a=function(r){return i(r).replace(f,u)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(r){return c[r]},_=/[!')(*]/g;n=function(r){return encodeURIComponent(i(r)).replace(_,v)}}if(!l){var x=/[\\'"]/g;l=function(r){return i(r).replace(x,"\\$&")}}var s,d,p,$="",g=r.list,h=r.viewId;r.info;try{p=1,d="each list as item",s="<%for (var $art_irfoaypa$art_i = 0, $art_civzckekwh$art_c = list.length; $art_irfoaypa$art_i < $art_civzckekwh$art_c; $art_irfoaypa$art_i++) {    var item = list[$art_irfoaypa$art_i]%>";for(var w=0,y=g.length;w<y;w++){var I=g[w];$+='<label mxv mxa="_zs_gallerych:_" class="mr30"><input mxe="'+e+'_0" mxc="[',p=6,d=":info.age{required:[true,'必选']}",$+='{p:\'info.age\',f:{required:[true,\'必选\']}}]" type="radio" class="radio" name="',p=4,d="=viewId",$+=(s="<%=viewId%>",a(h)+'_radio" value="'),p=5,d="=item.value",$+=(s="<%=item.value%>",a(I.value)+'"/>'),p=7,d="=item.text",$+=(s="<%=item.text%>",a(I.text)+"</label>"),p=9,d="/each",s="<%}%>"}}catch(r){var k="render view error:"+(r.message||r);throw d&&(k+="\r\n\tsrc art:{{"+d+"}}\r\n\tat line:"+p),k+="\r\n\t"+(d?"translate to:":"expr:"),k+=s+"\r\n\tat file:mx-form/__test__/error-inner.html"}return $},mixins:[i,n],render:function(){this.updater.digest({viewId:this.id,list:[{text:"10~20岁",value:1},{text:"20~30岁",value:2},{text:"30~40岁",value:3}],info:{age:2}})}})});