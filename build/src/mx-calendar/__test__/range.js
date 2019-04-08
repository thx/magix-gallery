define("mx-calendar/__test__/range",["magix","$","mx-medusa/util","__test__/subs","mx-title/second","./6","./12","./20","./7","./8","./9","./11","./15","./13","./10","./18","__test__/api","__test__/event","./implement"],(e,t,a)=>{e("__test__/subs"),e("mx-title/second"),e("./6"),e("./12"),e("./20"),e("./7"),e("./8"),e("./9"),e("./11"),e("./15"),e("./13"),e("./10"),e("./18"),e("__test__/api"),e("__test__/event"),e("./implement");var d=e("magix"),n=(e("$"),e("mx-medusa/util"));a.exports=d.View.extend({tmpl:function(e,t,a,d,n,s,i,r){if(a||(a=e),!n){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,y=function(e){return"&"+l[e]+";"};n=function(e){return""+(null==e?"":e)},d=function(e){return n(e).replace(m,y)}}if(!s){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},o=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(o,c)}}if(!r){var p=/[\\'"]/g;r=function(e){return n(e).replace(p,"\\$&")}}i||(i=function(e,t,a,d){for(d=e[v];--d;)if(e[a=v+d]===t)return a;return e[a=v+e[v]++]=t,a});var v="",k="",x=e.viewId,u=e.options,h=e.events,f=e.supportQuickDates;k+='<div mxv mxa="_zs_gallery}:_" class="pr pr120"><div mx-view="__test__/subs?list='+i(a,[{name:"使用示例",key:x+"_demo",subs:[{name:"对比+时间段",key:x+"_demo6"},{name:"对比+单天",key:x+"_demo7"},{name:"选择时分秒",key:x+"_demo8"},{name:"自定义trigger",key:x+"_demo12"},{name:"动态快捷日期",key:x+"_demo9"},{name:"禁选开始或结束",key:x+"_demo11"},{name:"部分不可选",key:x+"_demo15"},{name:"历史选中修正",key:x+"_demo13"},{name:"范围修正",key:x+"_demo10"},{name:"自定义formatter",key:x+"_demo18"},{name:"禁选",key:x+"_demo20"}]},{name:"API",key:x+"_api"},{name:"Event",key:x+"_event"},{name:"快捷日期备选项",key:x+"_quick"},{name:"关于实现方案",key:x+"_implement"}])+'"></div><div id="'+d(x)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallery}:a" class="clearfix mb20"><div mxa="_zs_gallery}:b" class="_zs_gallerye"><div mx-view="mx-calendar/__test__/6" id="'+d(x)+'_demo6"></div><div mx-view="mx-calendar/__test__/12" id="'+d(x)+'_demo12"></div><div mx-view="mx-calendar/__test__/20" id="'+d(x)+'_demo20"></div></div><div mxa="_zs_gallery}:c" class="_zs_gallerye"><div mx-view="mx-calendar/__test__/7" id="'+d(x)+'_demo7"></div><div mx-view="mx-calendar/__test__/8" id="'+d(x)+'_demo8"></div><div mx-view="mx-calendar/__test__/9" id="'+d(x)+'_demo9"></div><div mx-view="mx-calendar/__test__/11" id="'+d(x)+'_demo11"></div><div mx-view="mx-calendar/__test__/15" id="'+d(x)+'_demo15"></div><div mx-view="mx-calendar/__test__/13" id="'+d(x)+'_demo13"></div><div mx-view="mx-calendar/__test__/10" id="'+d(x)+'_demo10"></div><div mx-view="mx-calendar/__test__/18" id="'+d(x)+'_demo18"></div></div></div><div id="'+d(x)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+i(a,u)+'" class="mb40"></div><div id="'+d(x)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+i(a,h)+'" class="mb40"></div><div id="'+d(x)+'_quick" mx-view="mx-title/second?content=%E5%BF%AB%E6%8D%B7%E6%97%A5%E6%9C%9F%E5%A4%87%E9%80%89%E9%A1%B9"></div><div mxa="_zs_gallery}:d" class="pr20 mb40"><table mxa="_zs_gallery}:e" class="table _zs_galleryr"><thead mxs="_zs_gallery}:_"><tr><th width="100">配置key值</th><th width="100">显示文案</th><th width="200">描述</th></tr></thead><tbody>';for(var g=0,b=f.length;g<b;g++){var w=f[g];k+="<tr><td>"+d(w.key)+"</td><td>"+d(w.text)+"</td><td>"+d(w.tip)+"</td></tr>"}return k+='</tbody></table></div><div mx-view="mx-calendar/__test__/implement" id="'+d(x)+'_implement"></div></div>'},render:function(){var e=this.id,t=[{key:"start",desc:"默认选中开始日期",type:"string",def:"根据max和min进行修正"},{key:"end",desc:"默认选中结束日期，不限的情况下end=不限即可",type:"string",def:"根据max和min进行修正"},{key:"start-disabled",desc:"是否禁止选择开始日期<br>开始日期禁止使用的时候，只允许使用动态计算的快捷日期<br>动态计算的都是依据开始日期计算的",type:"string",def:"false"},{key:"end-disabled",desc:"是否禁止选中结束日期<br>结束日期禁止使用的时候，禁止快捷操作，开始日期最大可选为结束日期",type:"string",def:"false"},{key:"vsenable",desc:"是否可对比",type:"boolean",def:"false"},{key:"vs",desc:"对比初始值",type:"boolean",def:"false"},{key:"single",desc:"vsenable=true时可生效，关闭对比的时候选择单天还是连续的时间段",type:"boolean",def:"false"},{key:"shortcuts",desc:"是否有快捷方式",type:"boolean",def:"true"},{key:"shortkeys",desc:'自定义快捷方式key值，<a href="javascript:;" mx-click="to({id:\''+e+'_quick\'})" class="color-brand">查看备选值</a>',type:"array",def:'shortcuts=true时，默认为["today","yesterday","passed7","preWeekMon","passed15","lastestThisMonth","passed30","preMonth"]'},{key:"max",desc:"最大可选的日期",type:"string"},{key:"min",desc:"最小可选的日期",type:"string"},{key:"date-type",desc:'<pre>\n年月日选择类型：\n可选择"year,month,day"中的一个或者多个\n此外"all" = "year,month,day" = ""，不设置的时候默认年月日都显示\n</pre>',type:"string",def:""},{key:"time-type",desc:'<pre>\n时分秒选择类型：\n1.设置该值后会出现时间选择组件\n  可选择"hour,minute,second"中的一个或者多个\n  此外提供快捷的配置"all" = "hour,minute,second"\n2.不设置无时分秒选择            \n            </pre>',type:"string",def:""},{key:"formatter",desc:"date格式",type:"string",def:"YYYY-MM-dd"},{key:"align",desc:"日历与目标的对齐方式，left，right",type:"string",def:"left"},{key:"disabled-weeks",desc:"限制周几不可选，[0, 1, 2, 3, 4, 5, 6]的子集",type:"array",def:"[]"},{key:"week-start",desc:"从周几开，0-6，0表示周日",type:"number",def:"0"},{key:"inlay",desc:"是否需要边框，自定义trigger显示时可配置",type:"boolean",def:"false"},{key:"mx-disabled",desc:"是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-calendar.rangepicker mx-disabled /&gt;",type:"",def:""}],a=[{key:"today",text:n["calendar.today"],tip:n["calendar.today"]},{key:"yesterday",text:n["calendar.yesterday"],tip:n["calendar.yesterday"]},{key:"beforeYesterday",text:n["calendar.before.yesterday"],tip:n["calendar.before.yesterday"]},{key:"preMonth",text:n["calendar.last.month"],tip:n["calendar.last.month"]},{key:"preWeekSun",text:n["calendar.last.week"],tip:n["calendar.last.week.sunday"]},{key:"preWeekMon",text:n["calendar.last.week"],tip:n["calendar.last.week.monday"]},{key:"lastestWeekSun",text:n["calendar.this.week"],tip:n["calendar.this.week.sunday"]},{key:"lastestWeekMon",text:n["calendar.this.week"],tip:n["calendar.this.week.monday"]},{key:"passedThisMonth",text:n["calendar.this.month"],tip:n["calendar.this.month.yestarday"]},{key:"lastestThisMonth",text:n["calendar.this.month"],tip:n["calendar.this.month.today"]},{key:"passed{n}",text:n["calendar.passed"]+" n "+n["calendar.unit"],tip:n["calendar.passed"]+" n "+n["calendar.unit.yesterday"]+"，"+n["calendar.n.arbitrary"]+"，passed1，passed15..."},{key:"lastest{n}",text:n["calendar.lastest"]+" n "+n["calendar.unit"],tip:n["calendar.lastest"]+" n "+n["calendar.unit.today"]+"，"+n["calendar.n.arbitrary"]+"，lastest1，lastest15..."},{key:"dynamicStart{n}",text:n["calendar.dynamic.end"].replace("${day}","n"),tip:n["calendar.dynamic.end.tip"].replace("${day}","n")+"，"+n["calendar.n.arbitrary"]+"，dynamicStart1，dynamicStart15..."},{key:"dynamicEndThisMonth",text:n["calendar.natural.month"],tip:n["calendar.natural.month.tip"]},{key:"dynamicEndNextMonth",text:n["calendar.next.month"],tip:n["calendar.next.month.tip"]},{key:"forever",text:n["calendar.forever"],tip:n["calendar.forever.tip"]}];this.updater.digest({viewId:e,options:t,events:[{type:"change",desc:"切换日期，切换对比时会触发",params:[{key:"start",desc:"开始时间，包含时分秒",type:"string"},{key:"end",desc:"结束时间，包含时分秒",type:"string"},{key:"vs",desc:"是否对比",type:"boolean"},{key:"dates",desc:"<pre>当前状态完整对象\n{\n    start: 'Date，开始时间',\n    startStr: 'string，dates.startStr == start',\n    end: 'Date，结束时间',\n    endStr: 'string，dates.endStr == end',\n    quickDateKey: 'string，当前匹配的快捷日期key',\n    quickDateText: 'string，当前匹配的快捷日期文案'\n}\n</pre>",type:"object"}]}],supportQuickDates:a})}})});