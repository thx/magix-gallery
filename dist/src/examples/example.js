define("examples/example",["magix","$"],(t,e,i)=>{var x=t("magix");t("$");i.exports=x.View.extend({init:function(){this.updater.set({viewId:this.id,text1:"复制代码",text2:"复制代码",text3:"复制代码",text4:"复制代码",text5:"复制代码",text6:"复制代码",text7:"复制代码",text8:"复制代码",text9:"复制代码",text10:"复制代码",text11:"复制代码"})},"done<success>":function(t){var e=this,i=t.params.id,x={};x["text"+i]='<i class="mc-iconfont _zs_galleryo">&#xe630;</i>复制成功',e.updater.digest(x),setTimeout(function(){x["text"+i]="复制代码",e.updater.digest(x)},1e3)}})});