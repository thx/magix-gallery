define("mx-form/examples/valid",["magix","mx-title/second"],(e,t,n)=>{e("mx-title/second");var i=e("magix");n.exports=i.View.extend({tmpl:function(e,t,n,i,r,d,l,a){if(n||(n=e),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,s=function(e){return"&"+c[e]+";"};r=function(e){return""+(null==e?"":e)},i=function(e){return r(e).replace(o,s)}}if(!d){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return u[e]},h=/[!')(*]/g;d=function(e){return encodeURIComponent(r(e)).replace(h,m)}}if(!a){var v=/[\\'"]/g;a=function(e){return r(e).replace(v,"\\$&")}}var f="";return f+='<div id="'+i(e.viewId)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerycC:_" class="pr20 mb40"><table class="table _zs_galleryq"><thead><tr><th width="100">方法名</th><th width="200">说明</th></tr></thead><tbody><tr><td>isValid(configs: object)</td><td><pre>\nthis.isValid(&#123;\n        // 单独校验某个节点，可以传入dom节点，或者#id，.class，直接传入字符串默认为id\n        // 1. 默认null，整个view校验\n        // 2. 传入element的时候\n        //    2.1 如果element本身有校验，则只校验该节点\n        //    2.2 如果element本身无校验，则找该节点下所有的校验项去校验\n        element: null,\n    \n        // 校验有错误的情况下是否要滚动到错误节点，默认true\n        scrollIntoView: true, \n    \n        //是否调用子view校验，children.isValid，默认true\n        checkSubs: true \n&#125;)\n                        </pre></td></tr></tbody></table></div>'},render:function(){this.updater.digest({viewId:this.id})}})});