define("mx-form/__test__/error-inner",["magix","$","mx-form/index","mx-form/validator"],(e,r,t)=>{var n=e("magix"),i=(e("$"),e("mx-form/index")),a=e("mx-form/validator");t.exports=n.View.extend({tmpl:function(e,r,t,n,i,a,o,l){if(t||(t=e),!i){var u={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},f=/[&<>"'`]/g,m=function(e){return"&"+u[e]+";"};i=function(e){return""+(null==e?"":e)},n=function(e){return i(e).replace(f,m)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return x[e]},v=/[!')(*]/g;a=function(e){return encodeURIComponent(i(e)).replace(v,d)}}if(!l){var c=/[\\'"]/g;l=function(e){return i(e).replace(c,"\\$&")}}for(var s="",g=e.list,p=e.viewId,_=(e.info,0),b=g.length;_<b;_++){var h=g[_];s+='<label mxv mxa="_zs_galleryb&:_" class="mr30"><input mxe="'+r+'_0" mxc="[{p:\'info.age\',f:{required:[true,\'必选\']}}]" type="radio" class="radio" name="'+n(p)+'_radio" value="'+n(h.value)+'"/>'+n(h.text)+"</label>"}return s},mixins:[i,a],render:function(){this.updater.digest({viewId:this.id,list:[{text:"10~20岁",value:1},{text:"20~30岁",value:2},{text:"30~40岁",value:3}],info:{age:2}})}})});