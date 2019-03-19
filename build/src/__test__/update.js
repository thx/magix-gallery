/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/update",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___update_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n._zs_gallery___test___update_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery___test___update_-update {\n  position: relative;\n}\n._zs_gallery___test___update_-update::before {\n  content: '';\n  position: absolute;\n  top: 12px;\n  left: 0;\n  width: 0;\n  height: 100%;\n  border-left: 2px solid #e6e6e6;\n}\n._zs_gallery___test___update_-update:last-child::before {\n  display: none;\n}\n._zs_gallery___test___update_-tag,\n._zs_gallery___test___update_-vi {\n  display: inline-block;\n  padding: 0 10px;\n  height: 20px;\n  line-height: 18px;\n  background-color: #f3f4f5;\n  border: 1px solid #eee;\n  text-align: center;\n  border-radius: 2px;\n  overflow: hidden;\n  vertical-align: middle;\n}\n._zs_gallery___test___update_-tag {\n  margin: 0 3px;\n}\n._zs_gallery___test___update_-ver {\n  position: relative;\n}\n._zs_gallery___test___update_-ver::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: -4px;\n  width: 10px;\n  height: 10px;\n  margin-top: -5px;\n  border: 2px solid #e6e6e6;\n  background-color: #fff;\n  border-radius: 50%;\n}\n._zs_gallery___test___update_-ver ._zs_gallery___test___update_-vt {\n  display: inline-block;\n  font-size: 18px;\n  overflow: hidden;\n  vertical-align: middle;\n}\n._zs_gallery___test___update_-ver ._zs_gallery___test___update_-vi {\n  margin: 0 10px;\n}\n._zs_gallery___test___update_-dot {\n  position: relative;\n  padding-left: 10px;\n}\n._zs_gallery___test___update_-dot::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 4px;\n  height: 4px;\n  margin-top: -2px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n}\n._zs_gallery___test___update_-line {\n  line-height: 28px;\n}\n._zs_gallery___test___update_-line-icon {\n  position: relative;\n  top: 2px;\n  margin-right: 5px;\n  font-size: 18px;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', list = $$.list; var $expr, $art, $line; try {
    $line = 1;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_iqllqa$art_i = 0, $art_cjrkgkvkze$art_c = list.length; $art_iqllqa$art_i < $art_cjrkgkvkze$art_c; $art_iqllqa$art_i++) {    var item = list[$art_iqllqa$art_i]%>';
    for (var $art_iqllqa$art_i = 0, $art_cjrkgkvkze$art_c = list.length; $art_iqllqa$art_i < $art_cjrkgkvkze$art_c; $art_iqllqa$art_i++) {
        var item = list[$art_iqllqa$art_i];
        $p += '<div mxa="_zs_galleryQ:_" class="_zs_gallery___test___update_-update"><div mxa="_zs_galleryQ:a" class="_zs_gallery___test___update_-ver pl20"><span mxa="_zs_galleryQ:b" class="_zs_gallery___test___update_-vt">';
        $line = 4;
        $art = '=item.ver';
        ;
        $p += ($expr = '<%=item.ver%>', $e(item.ver)) + '</span><span mxa="_zs_galleryQ:c" class="_zs_gallery___test___update_-vi">';
        $line = 5;
        $art = '=item.time';
        ;
        $p += ($expr = '<%=item.time%>', $e(item.time)) + '</span></div><div mxa="_zs_galleryQ:d" class="pt10 pb30">';
        $line = 8;
        $art = 'each item.subs as s';
        ;
        $expr = '<%for (var $art_ikxcevxzjl$art_i = 0, $art_objevpxju$art_obj = item.subs, $art_clakafb$art_c = $art_objevpxju$art_obj.length; $art_ikxcevxzjl$art_i < $art_clakafb$art_c; $art_ikxcevxzjl$art_i++) {        var s = $art_objevpxju$art_obj[$art_ikxcevxzjl$art_i]%>';
        for (var $art_ikxcevxzjl$art_i = 0, $art_objevpxju$art_obj = item.subs, $art_clakafb$art_c = $art_objevpxju$art_obj.length; $art_ikxcevxzjl$art_i < $art_clakafb$art_c; $art_ikxcevxzjl$art_i++) {
            var s = $art_objevpxju$art_obj[$art_ikxcevxzjl$art_i];
            $p += '<div mxa="_zs_galleryQ:e" class="pl20">';
            $line = 10;
            $art = 'if s.type == \'notice\'';
            ;
            $expr = '<%if (s.type == \'notice\') {%>';
            if (s.type == 'notice') {
                ;
                $p += '<div mxa="_zs_galleryQ:f" class="_zs_gallery___test___update_-line"><i mxs="_zs_galleryQ:_" class="mc-iconfont _zs_gallery___test___update_-line-icon color-warn">&#xe66f;</i><span mxa="_zs_galleryQ:g" class="fontsize-14">';
                $line = 13;
                $art = '=(s.title ? s.title : \'重要通知\')';
                ;
                $p += ($expr = '<%=(s.title ? s.title : \'重要通知\')%>', $e((s.title ? s.title : '重要通知'))) + '</span></div>';
                $line = 15;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 17;
            $art = 'if s.type == \'bug\'';
            ;
            $expr = '<%if (s.type == \'bug\') {%>';
            if (s.type == 'bug') {
                ;
                $p += '<div mxa="_zs_galleryQ:h" class="_zs_gallery___test___update_-line"><i mxs="_zs_galleryQ:a" class="mc-iconfont _zs_gallery___test___update_-line-icon color-red">&#xe63d;</i><span mxa="_zs_galleryQ:i" class="fontsize-14">';
                $line = 20;
                $art = '=(s.title ? s.title : \'bug修复\')';
                ;
                $p += ($expr = '<%=(s.title ? s.title : \'bug修复\')%>', $e((s.title ? s.title : 'bug修复'))) + '</span></div>';
                $line = 22;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 24;
            $art = 'if s.type == \'add\'';
            ;
            $expr = '<%if (s.type == \'add\') {%>';
            if (s.type == 'add') {
                ;
                $p += '<div mxa="_zs_galleryQ:j" class="_zs_gallery___test___update_-line"><i mxs="_zs_galleryQ:b" class="mc-iconfont _zs_gallery___test___update_-line-icon color-green">&#xe616;</i><span mxa="_zs_galleryQ:k" class="fontsize-14">';
                $line = 27;
                $art = '=(s.title ? s.title : \'功能上新\')';
                ;
                $p += ($expr = '<%=(s.title ? s.title : \'功能上新\')%>', $e((s.title ? s.title : '功能上新'))) + '</span></div>';
                $line = 29;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 31;
            $art = 'each s.subs as ss';
            ;
            $expr = '<%for (var $art_iaqqvziod$art_i = 0, $art_objgggidfg$art_obj = s.subs, $art_czftknmmph$art_c = $art_objgggidfg$art_obj.length; $art_iaqqvziod$art_i < $art_czftknmmph$art_c; $art_iaqqvziod$art_i++) {            var ss = $art_objgggidfg$art_obj[$art_iaqqvziod$art_i]%>';
            for (var $art_iaqqvziod$art_i = 0, $art_objgggidfg$art_obj = s.subs, $art_czftknmmph$art_c = $art_objgggidfg$art_obj.length; $art_iaqqvziod$art_i < $art_czftknmmph$art_c; $art_iaqqvziod$art_i++) {
                var ss = $art_objgggidfg$art_obj[$art_iaqqvziod$art_i];
                $p += '<div mxa="_zs_galleryQ:l" class="pl20"><div mxa="_zs_galleryQ:m" class="_zs_gallery___test___update_-line _zs_gallery___test___update_-dot">';
                $line = 33;
                $art = '!ss.title';
                ;
                $p += ($expr = '<%!ss.title%>', $n(ss.title)) + '</div>';
                $line = 34;
                $art = 'if ss.content';
                ;
                $expr = '<%if (ss.content) {%>';
                if (ss.content) {
                    ;
                    $p += ' ';
                    $line = 35;
                    $art = '!ss.content';
                    ;
                    $p += ($expr = '<%!ss.content%>', $n(ss.content)) + ' ';
                    $line = 36;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 38;
                $art = 'if ss.subs && (ss.subs.length > 0)';
                ;
                $expr = '<%if (ss.subs && (ss.subs.length > 0)) {%>';
                if (ss.subs && (ss.subs.length > 0)) {
                    ;
                    $p += '<div mxa="_zs_galleryQ:n" class="pl20">';
                    $line = 40;
                    $art = 'each ss.subs as sss';
                    ;
                    $expr = '<%for (var $art_ixdshxer$art_i = 0, $art_objdkxvjmc$art_obj = ss.subs, $art_cfmvzxdtj$art_c = $art_objdkxvjmc$art_obj.length; $art_ixdshxer$art_i < $art_cfmvzxdtj$art_c; $art_ixdshxer$art_i++) {                    var sss = $art_objdkxvjmc$art_obj[$art_ixdshxer$art_i]%>';
                    for (var $art_ixdshxer$art_i = 0, $art_objdkxvjmc$art_obj = ss.subs, $art_cfmvzxdtj$art_c = $art_objdkxvjmc$art_obj.length; $art_ixdshxer$art_i < $art_cfmvzxdtj$art_c; $art_ixdshxer$art_i++) {
                        var sss = $art_objdkxvjmc$art_obj[$art_ixdshxer$art_i];
                        $p += '<div mxa="_zs_galleryQ:o" class="_zs_gallery___test___update_-line _zs_gallery___test___update_-dot">';
                        $line = 41;
                        $art = '!sss';
                        ;
                        $p += ($expr = '<%!sss%>', $n(sss)) + '</div>';
                        $line = 42;
                        $art = '/each';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '</div>';
                    $line = 44;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '</div>';
                $line = 46;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 48;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 51;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxs="_zs_galleryQ:c" class="_zs_gallery___test___update_-update"><div class="_zs_gallery___test___update_-ver pl20"><span class="_zs_gallery___test___update_-vt">历史版本</span><span class="_zs_gallery___test___update_-vi">···</span></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/update.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [{
                ver: '1.2.21',
                time: '2019-03-13',
                subs: [{
                        type: 'notice',
                        title: '规范调整',
                        subs: [{
                                title: 'mx-header：阿里妈妈logo替换'
                            }, {
                                title: 'mx-footer：版权所有结束时间更新为“现在”，同淘宝'
                            }]
                    }]
            }, {
                ver: '1.2.20',
                time: '2019-03-05',
                subs: [{
                        type: 'add',
                        subs: [{
                                title: 'mx-color：新增颜色选择器组件，支持双向绑定，<a href="#!/color/index" class="color-brand">点击查看</a>'
                            }, {
                                title: 'mx-preview：支持自定义预览位置placement，<a href="#!/preview/index" class="color-brand">点击查看</a>'
                            }, {
                                title: 'mx-indics：指标排序组件支持自定义line-number指定每行展现指标个数，<a href="#!/indics/index" class="color-brand">点击查看</a>'
                            }, {
                                title: 'mx-dropdown.bd：追加到body版本dropdown，支持单选，多选，部分选项禁用等，<a href="#!/dropdown/bd" class="color-brand">点击查看</a>'
                            }]
                    }, {
                        type: 'bug',
                        subs: [{
                                title: 'mx-calendar：<a href="https://aone.alibaba-inc.com/issue/19090997?spm=a2o8d.corp_prod_issue_list.0.0.49307ce8ioMKob&stat=1.5.0&toPage=1&versionId=1685172" target="_blank" class="color-brand">#19090997</a>'
                            }]
                    }, {
                        type: 'notice',
                        title: '实现方案调整',
                        subs: [{
                                title: 'mx-loading.anim：改成代码片段（_config）方式实现'
                            }]
                    }]
            }, {
                ver: '1.2.19',
                time: '2019-02-22',
                subs: [{
                        type: 'add',
                        subs: [{
                                title: 'mx-dragsort：新增拖动排序组件，支持水平拖动，垂直拖动，自定义拖动节点，<a href="#!/dragsort/index" class="color-brand">点击查看</a>'
                            }]
                    }, {
                        type: 'bug',
                        subs: [{
                                title: 'mx-calendar：<a href="https://aone.alibaba-inc.com/issue/18888588?spm=a2o8d.corp_prod_issue_list.0.0.65ce7ce8266d82&stat=1.5.3&toPage=1&versionId=1685172" target="_blank" class="color-brand">#18888588</a>'
                            }, {
                                title: 'mx-medusa：<a href="https://aone.alibaba-inc.com/issue/19061265" target="_blank" class="color-brand">#19061265</a>'
                            }]
                    }]
            }, {
                ver: '1.2.18',
                time: '2019-02-21',
                subs: [{
                        type: 'add',
                        subs: [{
                                title: 'mx-collapse：新增折叠面板组件，<a href="#!/collapse/index" class="color-brand">点击查看</a>'
                            }]
                    }, {
                        type: 'bug',
                        subs: [{
                                title: 'mx-table.sort：本地排序方法sort支持传入自定义排序字段'
                            }]
                    }, {
                        type: 'notice',
                        title: 'UI迭代',
                        subs: [{
                                title: '更新脚手架为卡片式风格，<a href="#!/all/pro/init" class="color-brand">点击查看</a>'
                            }]
                    }]
            }, {
                ver: '1.2.17',
                time: '2019-02-14',
                subs: [{
                        type: 'bug',
                        subs: [{
                                title: 'mx-form：特殊场景下异常情况兼容，点击查看<a href="#!/form/error" class="color-brand">详细说明</a>'
                            }]
                    }, {
                        type: 'notice',
                        title: '实现优化',
                        subs: [{
                                title: 'mx-preview：图片类型未配置预览宽高时，按照图片的实际尺寸修正到可视范围之内'
                            }]
                    }]
            }, {
                ver: '1.2.16',
                time: '2019-02-01',
                subs: [{
                        type: 'bug',
                        subs: [{
                                title: 'mx-calendar：日历默认格式YYYY-MM-dd，safari不支持YYYY-MM-dd，支持自定义formatter。'
                            }]
                    }]
            }, {
                ver: '1.2.15',
                time: '2019-01-29',
                subs: [{
                        type: 'bug',
                        subs: [{
                                title: 'mx-table：表头单元格包含rowspan+colspan时，实际位置计算方式更新。<a href="#!/table/index2" class="color-brand">查看详情</a>'
                            }, {
                                title: 'mx-calendar：修复结束时间不限时，开始时间不可修改。'
                            }]
                    }]
            }, {
                ver: '1.2.14',
                time: '2019-01-26',
                subs: [{
                        type: 'bug',
                        subs: [{
                                title: 'mx-table：表头多行分组时宽度计算错误'
                            }]
                    }]
            }, {
                ver: '1.2.13',
                time: '2019-01-17',
                subs: [{
                        type: 'add',
                        subs: [{
                                title: 'mx-dialog：mxModal表头header支持配置tip（直接展示提示）+ iconTip（icon展示提示）'
                            }]
                    }, {
                        type: 'bug',
                        subs: [{
                                title: 'mx-dropdown.multiple：selected单值传入非string类型兼容'
                            }]
                    }]
            }, {
                ver: '1.2.12',
                time: '2019-01-11',
                subs: [{
                        type: 'add',
                        subs: [{
                                title: 'mx-preview：支持配置只缩略图无预览（preview=false）'
                            }, {
                                title: 'mx-dropdown.multiple：支持配置选择下限（min）；支持配置连续选择（continuous）'
                            }]
                    }, {
                        type: 'bug',
                        subs: [{
                                title: 'mx-suggest：fix双向绑定bug + 动态刷新list时配置item复现历史选中'
                            }]
                    }]
            }, {
                ver: '1.2.11',
                time: '2019-01-10',
                subs: [{
                        type: 'add',
                        subs: [{
                                title: 'mx-pagination：支持入参offset，优先级page > offset'
                            }, {
                                title: 'mx-time：时分秒选择组件。<a href="#!/time/index" class="color-brand">查看详情</a>'
                            }]
                    }]
            }, {
                ver: '1.2.10',
                time: '2019-01-07',
                subs: [{
                        type: 'add',
                        subs: [{
                                title: 'mx-pagination：返回增加offset偏移量 offset =（size-1）* page'
                            }, {
                                title: 'mx-dialog：mxModal全屏右出浮层支持浮层内配置dialogOptions，展示优先级：外部自定义属性 > 浮层内属性 > 默认属性'
                            }]
                    }, {
                        type: 'bug',
                        subs: [{
                                title: 'input，textarea禁用状态样式修正，与其他组件保持一致'
                            }]
                    }]
            }, {
                ver: '1.2.9',
                time: '2019-01-04',
                subs: [{
                        type: 'add',
                        subs: [{
                                title: 'mx-indics：支持指标分组。<a href="#!/indics/index" class="color-brand">查看详情</a>'
                            }, {
                                title: 'mx-gtip：全局提示组件。<a href="#!/gtip/index" class="color-brand">查看详情</a>'
                            }]
                    }]
            }, {
                ver: '1.2.8',
                time: '2018-12-28',
                subs: [{
                        type: 'notice',
                        title: '实现调整',
                        subs: [{
                                title: 'mx-grid.title：调整 ${content} 位置，自行控制内容的浮动'
                            }, {
                                title: 'mx-dialog（mxModal）：全屏右出浮层卡片式'
                            }]
                    }, {
                        type: 'add',
                        subs: [{
                                title: 'mx-dropdown：选项可配置tip提示信息'
                            }]
                    }]
            }, {
                ver: '1.2.7',
                time: '2018-12-27',
                subs: [{
                        type: 'bug',
                        subs: [{
                                title: 'mx-switch：修正 mode=text 样式'
                            }, {
                                title: 'mx-tabs.box：修正 mode=hollow 样式'
                            }]
                    }]
            }, {
                ver: '1.2.6',
                time: '2018-12-27',
                subs: [{
                        type: 'add',
                        subs: [{
                                title: 'mx-form支持email校验，包括指定邮箱的校验'
                            }, {
                                title: 'mx-loading支持自定义padding，example：&lt;mx-loading padding="40px" /&gt;'
                            }]
                    }, {
                        type: 'bug',
                        subs: [{
                                title: 'mx-dialog：修复存在滚动条的情况下，打开浮层页面抖动问题'
                            }, {
                                title: 'mx-popover',
                                subs: [
                                    '异常情况说明：tag="a"时，a标签的原生属性type与组件定义的type冲突，此时若设置type="dark"失效',
                                    '如何解决：请使用 <span class="color-brand">view-type</span> 与原生属性type区分来解决该问题'
                                ]
                            }]
                    }, {
                        type: 'notice',
                        title: '实现调整',
                        subs: [{
                                title: '去掉magix combine里的mxMap配置，打散到组件的_config中'
                            }, {
                                title: 'mx-checkbox，包装indeterminate状态调整为只负责对样式进行控制，不修改属性；组件内取消dom操作，避免状态不一致。<a href="#!/checkbox/index" class="color-brand">查看详情</a>'
                            }, {
                                title: 'mx-dropdown.multiple中分组批量选择checkbox调整为mx-checkbox，保留中间态，优化交互'
                            }]
                    }]
            }, {
                ver: '1.2.5',
                time: '2018-12-24',
                subs: [{
                        type: 'bug',
                        title: 'mx-grid',
                        subs: [{
                                title: '修复gutter在动态渲染mx-grid.col时不生效的问题，使用css3变量保留gutter'
                            }]
                    }]
            }, {
                ver: '1.2.4',
                time: '2018-12-24',
                subs: [{
                        type: 'bug',
                        title: 'btn/btn-brand',
                        subs: [{
                                title: '取消渐变按钮的border，避免出现如下情况：',
                                content: '<div class="pl10"><img width="108" src="https://img.alicdn.com/tfs/TB1dtx6xYrpK1RjSZTEXXcWAVXa-500-158.png" /></div>'
                            }]
                    }]
            }, {
                ver: '1.2.3',
                time: '2018-12-24',
                subs: [{
                        type: 'notice',
                        title: '样式细节调整',
                        subs: [{
                                title: '统一所有下拉选项样式，默认态，hover态，选中态，禁选态'
                            }, {
                                title: 'mx-grid细节调整：mx-grid.title字体，间距调整；mx-grid.body默认加clearfix；'
                            }, {
                                title: '统一规范的表单样式，<a href="#!/form/style" class="color-brand">查看详情</a>'
                            }]
                    }]
            }, {
                ver: '1.2.2',
                time: '2018-12-21',
                subs: [{
                        type: 'add',
                        subs: [{
                                title: '全屏右出浮层，<a href="#!/dialog/modal" class="color-brand">查看详情</a>'
                            }, {
                                title: '布局组件，<a href="#!/grid/index" class="color-brand">查看详情</a>'
                            }, {
                                title: 'mx-taginput增加配置max，可限制选择个数上限'
                            }]
                    }, {
                        type: 'notice',
                        title: '全新视觉规范，组件相关调整平滑升级',
                        subs: [{
                                title: '默认按钮样式提取为变量，可在项目中覆盖配置 @btn-text，@btn-text-hover，@btn-border，@btn-border-hover，@btn-bg，@btn-bg-hover'
                            }, {
                                title: '指标默认配置及选择排序（mx-indics）浮层改成全屏右出，<a href="#!/indics/index" class="color-brand">查看详情</a>'
                            }, {
                                title: '开关（mx-switch）增加文字显示版，<a href="#!/switch/index" class="color-brand">查看详情</a>'
                            }, {
                                title: '盒状分组（mx-tabs.box）增加空心显示显示版，<a href="#!/tabs/box" class="color-brand">查看详情</a>'
                            }]
                    }]
            }, {
                ver: '1.2.1',
                time: '2018-12-06',
                subs: [{
                        type: 'add',
                        title: '功能全概览',
                        subs: [{
                                title: '表单',
                                subs: [
                                    '双向绑定',
                                    '丰富的校验类型：必填，checkbox，radio，dropdown必选，refresh，动态添加，正则，字个数，字符个数，数字，数字范围，节点不重复，节点一致等等',
                                    '支持警告类提示场景'
                                ]
                            }, {
                                title: '表格',
                                subs: [
                                    '支持左右分栏，操作项分行，大数据量下依然保持页面简介明了',
                                    '表头可相对任意容器吸顶',
                                    '覆盖了常见的批量选中操作行，排序功能',
                                    '支持普通翻页查看大量数据'
                                ]
                            }, {
                                title: 'dropdown：单选多选自由切换，多选可限制选择上限'
                            }, {
                                title: '日历',
                                subs: [
                                    '单日，单日对比，可细节到时分秒',
                                    '时间段，可细节到时分秒'
                                ]
                            }, {
                                title: '分页：快捷切换分页数，页面；可限制为顺序翻页'
                            }, {
                                title: '分组',
                                subs: [
                                    '盒状分组，常适用于页面筛选',
                                    '底边线分组，常适用于一级分组标题'
                                ]
                            }, {
                                title: '内容区域可编辑：支持自定义模板，各种检验轻松加'
                            }, {
                                title: '快捷搜索',
                                subs: [
                                    '单类型搜索，多类型搜索均支持',
                                    '单选，多选自由选中',
                                    '动态加载可搜索内容'
                                ]
                            }, {
                                title: '开关'
                            }, {
                                title: '树形结构',
                                subs: [
                                    '支持级联显示再单选',
                                    '平铺单选多选任意挑',
                                    '内容过长时可展开收起',
                                    '只读'
                                ]
                            }, {
                                title: '标签选择'
                            }, {
                                title: '更多菜单：hover展示，点击展示，右键显示任意选'
                            }, {
                                title: '滑块选择：单值或者范围'
                            }, {
                                title: '指标默认配置及选择排序'
                            }, {
                                title: '状态切换与显示：支持icon或者dropdown两种形式'
                            }, {
                                title: '多样提示反馈：二次确认，hover小提示框，loading；对接集团钉钉，旺旺，万象等等'
                            }, {
                                title: '缩略图和预览：支持图片，视频，html，文件等多种形式，实现懒加载，优化性能'
                            }, {
                                title: '分步流程：侧边导航，顶部导航，将复杂流程简单化'
                            }, {
                                title: '常用样式：打标，提示公告，评分，空状态，进度比例，各种动效等等'
                            }, {
                                title: '业务组件：',
                                subs: [
                                    '阿里妈妈通用吊顶，吊底',
                                    '地域选择',
                                    '时段选择'
                                ]
                            }]
                    }]
            }];
        this.updater.digest({
            list: list
        });
    }
});

});