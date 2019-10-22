define("mx-main/examples/steps",["magix","$","mx-title/second","examples/api"],(e,n,i)=>{e("mx-title/second"),e("examples/api");var t=e("magix");e("$");i.exports=t.View.extend({tmpl:function(e,n,i,t,s,r,a,d){if(i||(i=e),!s){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,l=function(e){return"&"+p[e]+";"};s=function(e){return""+(null==e?"":e)},t=function(e){return s(e).replace(c,l)}}if(!r){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return o[e]},v=/[!')(*]/g;r=function(e){return encodeURIComponent(s(e)).replace(v,m)}}if(!d){var x=/[\\'"]/g;d=function(e){return s(e).replace(x,"\\$&")}}a||(a=function(e,n,i,t){for(t=e[u];--t;)if(e[i=u+t]===n)return i;return e[i=u+e[u]++]=n,i});var u="",f="",_=e.viewId,g=e.options;return f+='<div id="'+t(_)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+a(i,g)+'" class="mb40"></div><div mxa="_zs_gallerydj:_" class="pr20"><div id="'+t(_)+'_step" mx-view="mx-title/second?content=step-infos%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E"></div><div mxa="_zs_gallerydj:a" class="mb40"><div class="mb10" id="'+t(_)+"_step1\">1. step-infos数组所有可配参数说明</div><div mxs=\"_zs_gallerydj:_\" class=\"pl15 mb20\"><pre class=\"tip-content\">\n[{\n    label: '必填，标题文案',\n    view: '必填，该步骤对应的view，该view必须实现check方法',\n    icon: '可选，自定义icon，默认为index，从1开始',\n    prevTip: '可选，自定义返回上一步文案，默认返回上一步'\n    nextTip: '可选，自定义下一步文案，默认返回下一步',\n    nextFn: (remains, next) => {\n        // remains 当前所有子步骤保留的信息交集，便于提交接口处理等\n        // next(remainParams:object) 保存在路由上的参数\n        next({\n            example: 1\n        })\n    }\n}]\n            </pre></div><div class=\"mb10\" id=\""+t(_)+'_step2">2. 子view必须实现的check方法说明，返回一个Promise</div><div mxs="_zs_gallerydj:a" class="pl15"><pre class="tip-content">\ncheck() {\n    let ok = true,\n        remain = {};\n    \n    return new Promise((resolve) => {\n        // 此处返回promise，防止有接口提交校验等\n        resolve({\n            ok,  // 是否校验通过，false的时候不提交\n            msg: \'错误信息提示\',\n            remain: {} // 当前步骤保留的参数，所有子view交集\n        })\n    })\n}\n            </pre></div></div></div>'},render:function(){var e=this.id,n=[{key:"step-infos",desc:'步骤信息，<a href="javascript:;" mx-click="to({id:\''+e+'_step\'})" class="color-brand">查看详细说明</a>',type:"array",def:"[]"},{key:"already-step",desc:"当前已经到达第几步，从1开始",type:"number",def:"取路由地址上stepIndex，1 和 alreadyStep的最大值"}];this.updater.digest({options:n,viewId:e})}})});