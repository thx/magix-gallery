define("mx-table/examples/index9",["magix","$","mx-table/sub","mx-title/second","../index"],(t,d,s)=>{t("mx-title/second"),t("../index");var l=t("magix"),e=(t("$"),t("mx-table/sub"));s.exports=l.View.extend({tmpl:function(t,d,s,l,e,a,i,r){if(s||(s=t),!e){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,o=function(t){return"&"+c[t]+";"};e=function(t){return""+(null==t?"":t)},function(t){return e(t).replace(n,o)}}if(!a){var h={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(t){return h[t]},g=/[!')(*]/g;a=function(t){return encodeURIComponent(e(t)).replace(g,p)}}if(!r){var u=/[\\'"]/g;r=function(t){return e(t).replace(u,"\\$&")}}return'<div mxs="_zs_gallerye*:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerye*:a" class="_zs_galleryg"><div class="_zs_galleryj"><div class="mb20"><span class="color-9">该示例：</span>吸顶 + 表头分组 + 任意colspan</div><div mx-view="mx-table/index?sticky=true"><div><table class="table" left="true" width="400"><thead><tr><th></th><th>固定1</th><th>固定2</th><th>固定3</th><th>固定4</th></tr></thead><tbody><tr><td><span sub-toggle="toggle_1"></span></td><td>一格</td><td>一格</td><td colspan="2">跨两格</td></tr><tr class="hide" sub-toggle-parent="toggle_1"><td class="sub-mask sub-mask-first"></td><td>一格</td><td>一格</td><td>一格</td><td>一格</td></tr><tr class="hide" sub-toggle-parent="toggle_1"><td class="sub-mask"></td><td colspan="2">跨两格</td><td>一格</td><td>一格</td></tr><tr><td></td><td>一格</td><td colspan="2">跨两格</td><td>一格</td></tr><tr><td></td><td colspan="4">跨四格</td></tr><tr><td></td><td colspan="3">跨三格</td><td>一格</td></tr></tbody></table></div><div><table class="table" center="true" width="1100"><thead><tr><th class="field-group" colspan="2"><div class="group-name">组1</div></th><th class="field-group" colspan="2"><div class="group-name">组2</div></th><th class="field-group" colspan="2"><div class="group-name">组3</div></th><th class="field-group" colspan="2"><div class="group-name">组4</div></th></tr><tr><th class="field-item">固定5</th><th class="field-item">固定6</th><th class="field-item">固定7</th><th class="field-item">固定8</th><th class="field-item">固定9</th><th class="field-item">固定10</th><th class="field-item">固定11</th><th class="field-item">固定12</th></tr></thead><tbody><tr><td>一格</td><td>一格</td><td colspan="3">跨三格</td><td>一格</td><td>一格</td><td>一格</td></tr><tr class="hide" sub-toggle-parent="toggle_1"><td>一格</td><td colspan="3">跨三格</td><td colspan="3">跨三格</td><td>一格</td></tr><tr class="hide" sub-toggle-parent="toggle_1"><td colspan="3">跨三格</td><td colspan="3">跨三格</td><td>一格</td><td>一格</td></tr><tr><td>一格</td><td colspan="2">跨两格</td><td>一格</td><td colspan="3">跨三格</td><td>一格</td></tr><tr><td colspan="3">跨三格</td><td colspan="3">跨三格</td><td>一格</td><td>一格</td></tr><tr><td colspan="2">跨两格</td><td colspan="2">跨两格</td><td colspan="2">跨两格</td><td colspan="2">跨两格</td></tr></tbody></table></div></div></div></div>','<div mxs="_zs_gallerye*:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerye*:a" class="_zs_galleryg"><div class="_zs_galleryj"><div class="mb20"><span class="color-9">该示例：</span>吸顶 + 表头分组 + 任意colspan</div><div mx-view="mx-table/index?sticky=true"><div><table class="table" left="true" width="400"><thead><tr><th></th><th>固定1</th><th>固定2</th><th>固定3</th><th>固定4</th></tr></thead><tbody><tr><td><span sub-toggle="toggle_1"></span></td><td>一格</td><td>一格</td><td colspan="2">跨两格</td></tr><tr class="hide" sub-toggle-parent="toggle_1"><td class="sub-mask sub-mask-first"></td><td>一格</td><td>一格</td><td>一格</td><td>一格</td></tr><tr class="hide" sub-toggle-parent="toggle_1"><td class="sub-mask"></td><td colspan="2">跨两格</td><td>一格</td><td>一格</td></tr><tr><td></td><td>一格</td><td colspan="2">跨两格</td><td>一格</td></tr><tr><td></td><td colspan="4">跨四格</td></tr><tr><td></td><td colspan="3">跨三格</td><td>一格</td></tr></tbody></table></div><div><table class="table" center="true" width="1100"><thead><tr><th class="field-group" colspan="2"><div class="group-name">组1</div></th><th class="field-group" colspan="2"><div class="group-name">组2</div></th><th class="field-group" colspan="2"><div class="group-name">组3</div></th><th class="field-group" colspan="2"><div class="group-name">组4</div></th></tr><tr><th class="field-item">固定5</th><th class="field-item">固定6</th><th class="field-item">固定7</th><th class="field-item">固定8</th><th class="field-item">固定9</th><th class="field-item">固定10</th><th class="field-item">固定11</th><th class="field-item">固定12</th></tr></thead><tbody><tr><td>一格</td><td>一格</td><td colspan="3">跨三格</td><td>一格</td><td>一格</td><td>一格</td></tr><tr class="hide" sub-toggle-parent="toggle_1"><td>一格</td><td colspan="3">跨三格</td><td colspan="3">跨三格</td><td>一格</td></tr><tr class="hide" sub-toggle-parent="toggle_1"><td colspan="3">跨三格</td><td colspan="3">跨三格</td><td>一格</td><td>一格</td></tr><tr><td>一格</td><td colspan="2">跨两格</td><td>一格</td><td colspan="3">跨三格</td><td>一格</td></tr><tr><td colspan="3">跨三格</td><td colspan="3">跨三格</td><td>一格</td><td>一格</td></tr><tr><td colspan="2">跨两格</td><td colspan="2">跨两格</td><td colspan="2">跨两格</td><td colspan="2">跨两格</td></tr></tbody></table></div></div></div></div>'},mixins:[e],render:function(){this.updater.digest()}})});