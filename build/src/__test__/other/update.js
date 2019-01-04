/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/other/update",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_galleryc","._zs_galleryV{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryW{position:relative}._zs_galleryW:before{content:\"\";position:absolute;top:12px;left:0;width:0;height:100%;border-left:2px solid #e6e6e6}._zs_galleryW:last-child:before{display:none}._zs_galleryX,._zs_galleryY{display:inline-block;padding:0 10px;height:20px;line-height:18px;background-color:#f3f4f5;border:1px solid #eee;text-align:center;border-radius:2px;overflow:hidden;vertical-align:middle}._zs_galleryX{margin:0 3px}._zs_galleryZ{position:relative}._zs_galleryZ:before{content:\"\";position:absolute;top:50%;left:-4px;width:10px;height:10px;margin-top:-5px;border:2px solid #e6e6e6;background-color:#fff;border-radius:50%}._zs_galleryZ ._zs_gallerya_{display:inline-block;font-size:18px;overflow:hidden;vertical-align:middle}._zs_galleryZ ._zs_galleryY{margin:0 10px}._zs_galleryaa{position:relative;padding-left:10px}._zs_galleryaa:before{content:\"\";position:absolute;top:50%;left:0;width:4px;height:4px;margin-top:-2px;border:1px solid #ccc;border-radius:50%}._zs_galleryab{line-height:28px}._zs_galleryac{position:relative;top:2px;margin-right:5px;font-size:18px}");
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
} ; var $g = '', $_temp, $p = '', list = $$.list; for (var $art_igzhguzqhn$art_i = 0, $art_cfoncnwt$art_c = list.length; $art_igzhguzqhn$art_i < $art_cfoncnwt$art_c; $art_igzhguzqhn$art_i++) {
    var item = list[$art_igzhguzqhn$art_i];
    $p += '<div mxa="_zs_galleryg:_" class="_zs_galleryW"><div mxa="_zs_galleryg:a" class="_zs_galleryZ pl20"><span mxa="_zs_galleryg:b" class="_zs_gallerya_">' + $e(item.ver) + '</span><span mxa="_zs_galleryg:c" class="_zs_galleryY">' + $e(item.time) + '</span></div><div mxa="_zs_galleryg:d" class="pt10 pb30">';
    for (var $art_iymqziq$art_i = 0, $art_objcrgeceyvy$art_obj = item.subs, $art_ceggztre$art_c = $art_objcrgeceyvy$art_obj.length; $art_iymqziq$art_i < $art_ceggztre$art_c; $art_iymqziq$art_i++) {
        var s = $art_objcrgeceyvy$art_obj[$art_iymqziq$art_i];
        $p += '<div mxa="_zs_galleryg:e" class="pl20">';
        if (s.type == 'notice') {
            ;
            $p += '<div mxa="_zs_galleryg:f" class="_zs_galleryab"><i mxs="_zs_galleryg:_" class="mc-iconfont _zs_galleryac color-warn">&#xe66f;</i><span mxa="_zs_galleryg:g" class="fontsize-14">' + $e((s.title ? s.title : '重要通知')) + '</span></div>';
        }
        ;
        $p += ' ';
        if (s.type == 'bug') {
            ;
            $p += '<div mxa="_zs_galleryg:h" class="_zs_galleryab"><i mxs="_zs_galleryg:a" class="mc-iconfont _zs_galleryac color-red">&#xe63d;</i><span mxa="_zs_galleryg:i" class="fontsize-14">' + $e((s.title ? s.title : 'bug修复')) + '</span></div>';
        }
        ;
        $p += ' ';
        if (s.type == 'add') {
            ;
            $p += '<div mxa="_zs_galleryg:j" class="_zs_galleryab"><i mxs="_zs_galleryg:b" class="mc-iconfont _zs_galleryac color-green">&#xe616;</i><span mxa="_zs_galleryg:k" class="fontsize-14">' + $e((s.title ? s.title : '功能上新')) + '</span></div>';
        }
        ;
        $p += ' ';
        for (var $art_idhivuwbq$art_i = 0, $art_objzmabdegmc$art_obj = s.subs, $art_cezrqaapf$art_c = $art_objzmabdegmc$art_obj.length; $art_idhivuwbq$art_i < $art_cezrqaapf$art_c; $art_idhivuwbq$art_i++) {
            var ss = $art_objzmabdegmc$art_obj[$art_idhivuwbq$art_i];
            $p += '<div mxa="_zs_galleryg:l" class="pl20"><div mxa="_zs_galleryg:m" class="_zs_galleryab _zs_galleryaa">' + $n(ss.title) + '</div>';
            if (ss.content) {
                ;
                $p += ' ' + $n(ss.content) + ' ';
            }
            ;
            $p += ' ';
            if (ss.subs && (ss.subs.length > 0)) {
                ;
                $p += '<div mxa="_zs_galleryg:n" class="pl20">';
                for (var $art_ijwaizdgsl$art_i = 0, $art_objmmwckfli$art_obj = ss.subs, $art_cdfbfqbkl$art_c = $art_objmmwckfli$art_obj.length; $art_ijwaizdgsl$art_i < $art_cdfbfqbkl$art_c; $art_ijwaizdgsl$art_i++) {
                    var sss = $art_objmmwckfli$art_obj[$art_ijwaizdgsl$art_i];
                    $p += '<div mxa="_zs_galleryg:o" class="_zs_galleryab _zs_galleryaa">' + $n(sss) + '</div>';
                }
                ;
                $p += '</div>';
            }
            ;
            $p += '</div>';
        }
        ;
        $p += '</div>';
    }
    ;
    $p += '</div></div>';
} ; $p += '<div mxs="_zs_galleryg:c" class="_zs_galleryW"><div class="_zs_galleryZ pl20"><span class="_zs_gallerya_">历史版本</span><span class="_zs_galleryY">···</span></div></div>'; return $p; },
    render: function () {
        var list = [{
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