define("mx-tabs/base",["magix"],(t,e,i)=>{var s=t("magix");i.exports=s.View.extend({init:function(t){this.updater.snapshot(),this.assign(t)},assign:function(t){var e,i=this.updater.altered(),s=t.textKey||"text",a=t.valueKey||"value";try{e=new Function("return "+t.list)()}catch(i){e=t.list}e=(e=e||[]).map(function(t){return{text:t[s],value:t[a],tag:t.tag,tips:t.tips}});var d=t.selected||(e[0]||{}).value;this.__cV=e,this.__eH=d,this.__eI=t.type||"border";var r=t.mode||"solid",h=t.disabled+""=="true"||$("#"+this.id)[0].hasAttribute("mx-disabled");return this.__a=$("#"+this.id),this.updater.set({viewId:this.id,mode:r,type:this.__eI,disabled:h,list:this.__cV,selected:this.__eH,left:0,width:0,spm:this.__a.attr("data-spm-click")||""}),this.__a.val(this.__eH),i||(i=this.updater.altered()),!!i&&(this.updater.snapshot(),!0)},"__ac<click>":function(t){var e=t.params.item,i=e.value;if(this.__eH!=i){this.updater.set({selected:i,hover:i}).digest();var s=$.Event("change",{item:e,value:i,text:e.text,selected:i});this.__a.val(this.__eH=i).trigger(s)}}})});