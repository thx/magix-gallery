/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/index",["magix","$","../mx-medusa/util","mx-popover/index"],(require,exports,module)=>{
/*Magix,$,I18n*/
require("mx-popover/index");
var Magix = require("magix");
var $ = require("$");
var Vframe = Magix.Vframe;
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_gallery_mx-dialog_index_","._zs_gallery_mx-dialog_index_-dialog-backdrop,\n._zs_gallery_mx-dialog_index_-dialog-wrapper {\n  position: fixed;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-dialog_index_-dialog-backdrop {\n  opacity: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n._zs_gallery_mx-dialog_index_-dialog-backdrop._zs_gallery_mx-dialog_index_-backdrop-out {\n  opacity: 1;\n}\n._zs_gallery_mx-dialog_index_-dialog {\n  position: absolute;\n  border-radius: var(--border-radius);\n  background-color: #fff;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-content {\n  position: relative;\n  word-break: break-all;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-close {\n  position: absolute;\n  top: 16px;\n  right: 24px;\n  width: 26px;\n  height: 26px;\n  z-index: 101;\n  border-radius: 50%;\n  background: transparent;\n  color: #ccc;\n  text-align: center;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-close ._zs_gallery_mx-dialog_index_-iconfont-ext {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 26px;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-close:hover,\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-close:focus {\n  background-color: #999;\n  color: #fff;\n}\n._zs_gallery_mx-dialog_index_-dialog._zs_gallery_mx-dialog_index_-full {\n  border-radius: 0;\n}\n._zs_gallery_mx-dialog_index_-btn-submit {\n  position: relative;\n}\n._zs_gallery_mx-dialog_index_-btn-submit ._zs_gallery_mx-dialog_index_-submit-text {\n  opacity: 1;\n  position: relative;\n  z-index: 1;\n}\n._zs_gallery_mx-dialog_index_-btn-submit ._zs_gallery_mx-dialog_index_-submit-loading {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n}\n._zs_gallery_mx-dialog_index_-btn-submit._zs_gallery_mx-dialog_index_-btn-submit-loading ._zs_gallery_mx-dialog_index_-submit-text {\n  opacity: 0;\n}\n._zs_gallery_mx-dialog_index_-btn-submit._zs_gallery_mx-dialog_index_-btn-submit-loading ._zs_gallery_mx-dialog_index_-submit-loading {\n  display: inline;\n}\n._zs_gallery_mx-dialog_index_-load {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -30px;\n}\n");
var DialogZIndex = 99999;
var Duration = 250;
var CacheList = [];
var RemoveCache = function (view) {
    for (var i = CacheList.length - 1, one = void 0; i >= 0; i--) {
        one = CacheList[i];
        if (one.id == view.id) {
            CacheList.splice(i, 1);
            break;
        }
    }
};
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
} ; var $g = '', $_temp, $p = '', closable = $$.closable, cntId = $$.cntId, full = $$.full, fullHeader = $$.fullHeader, fullFooter = $$.fullFooter; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if closable';
    ;
    $expr = '<%if (closable) {%>';
    if (closable) {
        ;
        $p += '<a mxs="_zs_gallerya9:_" href="javascript:;" mx-click="' + $viewId + '@{close}()" class="_zs_gallery_mx-dialog_index_-dialog-close"><i class="mc-iconfont _zs_gallery_mx-dialog_index_-iconfont-ext">&#xe603;</i></a>';
        $line = 5;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<div class="_zs_gallery_mx-dialog_index_-dialog-content" id="';
    $line = 6;
    $art = '=cntId';
    ;
    $p += ($expr = '<%=cntId%>', $e(cntId)) + '_content">';
    $line = 7;
    $art = 'if full';
    ;
    $expr = '<%if (full) {%>';
    if (full) {
        ;
        $p += ' ';
        $line = 10;
        $art = 'if fullHeader.title';
        ;
        $expr = '<%if (fullHeader.title) {%>';
        if (fullHeader.title) {
            ;
            $p += '<div class="dialog-header" id="';
            $line = 11;
            $art = '=cntId';
            ;
            $p += ($expr = '<%=cntId%>', $e(cntId)) + '_header"><span mxa="_zs_gallerya9:_" class="header-name">';
            $line = 12;
            $art = '!fullHeader.title';
            ;
            $p += ($expr = '<%!fullHeader.title%>', $n(fullHeader.title)) + '</span>';
            $line = 13;
            $art = 'if fullHeader.iconTip';
            ;
            $expr = '<%if (fullHeader.iconTip) {%>';
            if (fullHeader.iconTip) {
                ;
                $p += '<i class="mc-iconfont color-c displacement-2" mx-view="mx-popover/index?content=';
                $line = 17;
                $art = '=fullHeader.iconTip';
                ;
                $p += ($expr = '<%!$eu(fullHeader.iconTip)%>', $eu(fullHeader.iconTip)) + '">&#xe7aa;</i>';
                $line = 18;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 20;
            $art = 'if fullHeader.tip';
            ;
            $expr = '<%if (fullHeader.tip) {%>';
            if (fullHeader.tip) {
                ;
                $p += '<span mxa="_zs_gallerya9:a" class="color-9 ml10">';
                $line = 21;
                $art = '!fullHeader.tip';
                ;
                $p += ($expr = '<%!fullHeader.tip%>', $n(fullHeader.tip)) + '</span>';
                $line = 22;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 24;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<div id="';
        $line = 26;
        $art = '=cntId';
        ;
        $p += ($expr = '<%=cntId%>', $e(cntId)) + '"><div mxs="_zs_gallerya9:a" class="pr _zs_gallery_mx-dialog_index_-load"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-three-bounce mx-loading-three-bounce1" style="background-color:#ffffff"></div><div class="mx-loading-three-bounce mx-loading-three-bounce2" style="background-color:#ffffff"></div><div class="mx-loading-three-bounce" style="background-color:#ffffff"></div></div></div></div>';
        $line = 32;
        $art = 'if (fullFooter.enter || fullFooter.cancel)';
        ;
        $expr = '<%if (fullFooter.enter || fullFooter.cancel) {%>';
        if (fullFooter.enter || fullFooter.cancel) {
            ;
            $p += '<div class="dialog-footer clearfix" id="';
            $line = 33;
            $art = '=cntId';
            ;
            $p += ($expr = '<%=cntId%>', $e(cntId)) + '_footer">';
            $line = 34;
            $art = 'if fullFooter.enter';
            ;
            $expr = '<%if (fullFooter.enter) {%>';
            if (fullFooter.enter) {
                ;
                $p += '<a mxa="_zs_gallerya9:b" href="javascript:;" class="fl btn btn-brand min-width-60 mr10 _zs_gallery_mx-dialog_index_-btn-submit" mx-click="' + $viewId + '@{submit}()"><span mxa="_zs_gallerya9:c" class="_zs_gallery_mx-dialog_index_-submit-text">';
                $line = 36;
                $art = '!fullFooter.enterText';
                ;
                $p += ($expr = '<%!fullFooter.enterText%>', $n(fullFooter.enterText)) + '</span></a>';
                $line = 38;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 40;
            $art = 'if fullFooter.cancel';
            ;
            $expr = '<%if (fullFooter.cancel) {%>';
            if (fullFooter.cancel) {
                ;
                $p += '<a mxa="_zs_gallerya9:d" href="javascript:;" class="fl btn min-width-60 mr10" mx-click="' + $viewId + '@{close}()">';
                $line = 41;
                $art = '!fullFooter.cancelText';
                ;
                $p += ($expr = '<%!fullFooter.cancelText%>', $n(fullFooter.cancelText)) + '</a>';
                $line = 42;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 44;
            $art = 'if fullFooter.enter';
            ;
            $expr = '<%if (fullFooter.enter) {%>';
            if (fullFooter.enter) {
                ;
                $p += '<span id="';
                $line = 45;
                $art = '=cntId';
                ;
                $p += ($expr = '<%=cntId%>', $e(cntId)) + '_footer_error" class="fl lh32 color-red"></span>';
                $line = 46;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 48;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 49;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<div id="';
        $line = 51;
        $art = '=cntId';
        ;
        $p += ($expr = '<%=cntId%>', $e(cntId)) + '"><div mxs="_zs_gallerya9:b" class="pr pt80 pb80"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-three-bounce mx-loading-three-bounce1 mx-loading-bg-grey"></div><div class="mx-loading-three-bounce mx-loading-three-bounce2 mx-loading-bg-grey"></div><div class="mx-loading-three-bounce mx-loading-bg-grey"></div></div></div></div>';
        $line = 54;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me.on('destroy', function () {
            RemoveCache(me);
            // 2 dialog + mask
            DialogZIndex -= 2;
            // 存在非手动关闭浮层的情况，比如浮层中有一个按钮从本页面跳走
            // 这时候需要关闭浮层
            $('#' + me.id).trigger('dlg_close');
            if (me['@{resize.timer}']) {
                clearTimeout(me['@{resize.timer}']);
            }
        });
        DialogZIndex += 2;
        CacheList.push(me);
        if (!Magix.has(extra, 'closable')) {
            extra.closable = true;
        }
        me.updater.set(Magix.mix({
            cntId: 'cnt_' + me.id
        }, extra));
    },
    render: function () {
        var me = this;
        var updater = me.updater;
        var data = updater.get();
        updater.digest();
        setTimeout(me.wrapAsync(function () {
            var wrapper = $('#wrapper_' + me.id);
            wrapper.css(data.posTo);
            // 全屏样式
            me['@{sync.style}']();
            var cntId = data.cntId;
            var mask = $('#mask_' + me.id);
            if (mask.length > 0) {
                mask.addClass('_zs_gallery_mx-dialog_index_-backdrop-out');
            }
            // emptyClosable 明确指定可关闭
            if (data.closable || data.emptyClosable) {
                // 浮层可关闭时
                // 点击空白处关闭浮层
                wrapper.on('click', function (e) {
                    if (!Magix.inside(e.target, cntId + '_content')) {
                        $('#' + me.id).trigger('dlg_close');
                    }
                });
            }
            me.owner.mountVframe(cntId, data.view, data);
            wrapper.on('scroll', function () {
                // popover追加到body，滚动时通知节点改动定位
                $(document).trigger('dialogScolll');
            });
        }), Duration);
    },
    '@{sync.style}': function () {
        var data = this.updater.get();
        var cntId = data.cntId;
        var dlg = $("#" + data.vId);
        var clientWidth = document.documentElement.clientWidth, clientHeight = document.documentElement.clientHeight;
        if (data.full) {
            var h = clientHeight;
            var fh = $('#' + cntId + '_header'), ff = $('#' + cntId + '_footer');
            if (fh && fh.length) {
                h -= fh.outerHeight();
            }
            if (ff && ff.length) {
                h -= ff.outerHeight();
            }
            // 全屏右出浮层
            var fcss = {
                height: h - 2,
                overflowY: 'auto'
            };
            if (data.card) {
                fcss.backgroundColor = '#e8ebf2';
                fcss.padding = '16px 24px';
            }
            $('#' + cntId).css(fcss);
            // 是否需要更新宽度位置 + 左距离
            var w = Math.min(clientWidth, data.width);
            dlg.css({
                width: w,
                left: Math.max(0, clientWidth - w)
            });
        }
    },
    '@{notify.main.view.unload}': function (e) {
        var vf = Vframe.get('cnt_' + this.id);
        vf && vf.invoke('fire', ['unload', e]);
    },
    /**
     * 全屏右出浮层提交按钮
     */
    '@{submit}<click>': function (e) {
        var node = $(e.eventTarget);
        var cc = '_zs_gallery_mx-dialog_index_-btn-submit-loading';
        if (node.hasClass(cc)) {
            // 防止重复提交
            return;
        }
        node.addClass(cc);
        node.append("<span class=\"_zs_gallery_mx-dialog_index_-submit-loading\">\n            <span class=\"mx-btn-loading-dot\"></span>\n        </span>");
        var me = this;
        var data = me.updater.get();
        var cntId = data.cntId;
        var vf = Vframe.get(cntId);
        vf.invoke('check').then(function (result) {
            node.find('._zs_gallery_mx-dialog_index_-submit-loading').remove();
            node.removeClass(cc);
            var errorNode = $('#' + cntId + '_footer_error');
            if (result.ok) {
                errorNode.html('');
                me['@{close}<click>']();
                if (data.callback) {
                    data.callback(result.data || {});
                }
            }
            else {
                if (result.msg) {
                    errorNode.html("<i class=\"mc-iconfont displacement-2\">&#xe6ad;</i>" + result.msg);
                }
                else {
                    errorNode.html('');
                }
            }
        });
    },
    '@{close}<click>': function () {
        $('#' + this.id).trigger('dlg_close');
    },
    '$doc<keyup>': function (e) {
        if (e.keyCode == 27) {
            var dlg = CacheList[CacheList.length - 1];
            if (dlg == this && dlg.updater.get('closable')) {
                var node = $('#' + dlg.id);
                node.trigger('dlg_close');
            }
        }
    },
    '$win<resize>': function (e) {
        var me = this;
        if (me['@{resize.timer}']) {
            clearTimeout(me['@{resize.timer}']);
        }
        me['@{resize.timer}'] = setTimeout(me.wrapAsync(function () {
            me['@{sync.style}']();
        }), 200);
    }
}, {
    '@{dialog.show}': function (view, options) {
        var id = Magix.guid('dlg_');
        if (options.mask) {
            var mask = $('<div class="_zs_gallery_mx-dialog_index_-dialog-backdrop" id="mask_' + id + '" />');
            mask.css({
                zIndex: DialogZIndex - 1
            });
            $(document.body).append(mask);
        }
        var wrapperId = 'wrapper_' + id, wrapperZIndex = DialogZIndex, width = options.width, left = options.left, top = options.top;
        // 全屏右出浮层不需要圆角
        var wrapper = $("<div class=\"_zs_gallery_mx-dialog_index_-dialog-wrapper\" \n                id=\"" + wrapperId + "\" style=\"z-index:" + wrapperZIndex + "\">\n                <div class=\"_zs_gallery_mx-dialog_index_-dialog " + (options.full ? '_zs_gallery_mx-dialog_index_-full' : '') + "\" id=\"" + id + "\" \n                    style=\"top:" + top + "px; left:" + left + "px; width:" + width + "px;\"></div>\n            </div>");
        wrapper.css(options.posFrom);
        $(document.body).append(wrapper);
        // 禁止body滚动
        // 有滚动条的时候，加上右padding，防止页面抖动
        var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = scrollbarWidth + "px";
        }
        document.body.style.overflowY = 'hidden';
        wrapper.css({
            overflowY: options.modal ? 'hidden' : 'auto'
        });
        var vf = view.owner.mountVframe(id, 'mx-dialog/index', options);
        var node = $('#' + id);
        var suspend;
        return node.on('dlg_close', function () {
            if (node.data('closed')) {
                return;
            }
            node.trigger({
                type: 'beforeClose',
                closeFn: function () {
                    if (!node.data('closing') && !suspend) {
                        var resume_1 = function () {
                            node.data('closing', 1);
                            $('#wrapper_' + id).css(options.posFrom);
                            $('#mask_' + id).removeClass('_zs_gallery_mx-dialog_index_-backdrop-out');
                            setTimeout(function () {
                                node.trigger('close');
                                // 不重复关闭
                                node.data('closed', 1);
                                if (view.owner) {
                                    view.owner.unmountVframe(id);
                                }
                                $('#wrapper_' + id).remove();
                                $('#mask_' + id).remove();
                                // 有浮层展开的情况下，body都不可滚动
                                if (CacheList.length == 0) {
                                    document.body.style.paddingRight = '';
                                    document.body.style.overflowY = '';
                                }
                            }, Duration);
                        };
                        var e_1 = {
                            prevent: function () {
                                suspend = 1;
                            },
                            resolve: function () {
                                e_1.p = 1;
                                suspend = 0;
                                resume_1();
                            },
                            reject: function () {
                                e_1.p = 1;
                                suspend = 0;
                            }
                        };
                        vf.invoke('@{notify.main.view.unload}', [e_1]);
                        if (!suspend && !e_1.p) {
                            resume_1();
                        }
                    }
                }
            });
        });
    },
    /**
     * 系统提示
     * this.alert(title, content, enterCallback, dialogOptions)
     *    title: '标题',
     *    content: '内容',
     *    enterCallback: '点击确认按钮的回调',
     *    dialogOptions: { //浮层样式覆盖
     *       width:'宽度，默认320',
     *       height:'高度',
     *       btns: 'true or false，是否有按钮，默认true',
     *       modal: 'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false',
     *       mask: 'true or false，是否有遮罩，默认false',
     *       closable: 'true or false，是否有右上角关闭按钮，默认false',
     *       left: '最终定位相对于屏幕左侧，默认居中',
     *       top: '最终定位相对于屏幕高侧，默认居中'
     *    }
     */
    alert: function (title, content, enterCallback, dialogOptions) {
        dialogOptions = dialogOptions || {};
        var hasBtns = ((dialogOptions.btns + '') !== 'false');
        return this.mxDialog('mx-dialog/alert', {
            title: title,
            content: content,
            enterCallback: enterCallback,
            hasBtns: hasBtns
        }, Magix.mix({
            width: 320,
            emptyClosable: true,
            closable: false,
            mask: false
        }, dialogOptions));
    },
    /**
     * this.confirm(viewOptions, dialogOptions);
     *    viewOptions: {
     *       title: '标题',
     *       content: '内容',
     *       enterText: '自定义确定按钮文案，默认确定',
     *       cancelText: '自定义取消按钮文案，默认取消',
     *       enterCallback: '确定按钮响应事件',
     *       cancelCallback: '取消按钮响应事件'
     *    }
     *    dialogOptions: { //浮层样式覆盖
     *       width:'宽度',
     *       height:'高度',
     *       modal: 'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false',
     *       mask: 'true or false，是否有遮罩，默认false',
     *       closable: 'true or false，是否有右上角关闭按钮，默认false',
     *       left: '最终定位相对于屏幕左侧',
     *       top: '最终定位相对于屏幕高侧'
     *    }
     */
    confirm: function (viewOptions, dialogOptions) {
        return this.mxDialog('mx-dialog/confirm', viewOptions, Magix.mix({
            width: 320,
            emptyClosable: true,
            closable: false,
            mask: false
        }, (dialogOptions || {})));
    },
    /**
     * 弹出登录框，规范登录框的弹出样式
     * 宽度350，高度368（淘宝登录框312，要求至少340，对称368）
     * 登陆框点击空白处不可关闭，所有closable: false，自定义一个关闭按钮
     */
    mxLoginView: function (viewPath, viewOptions) {
        return this.mxDialog('mx-dialog/login', {
            loginViewPath: viewPath,
            loginViewData: viewOptions = viewOptions || {}
        }, {
            width: 350,
            height: 368,
            closable: false
        });
    },
    /**
     * 全屏右出浮层
     * this.mxModal(viewPath[string], viewOptions[object], dialogOptions[object])
     *      viewPath: 'dialog view路径'
     *      viewOptions: {
     *          传入dialog的数据，挂载当前dialog实体
     *      }
     *      dialogOptions: { 浮层样式覆盖
     *          width:'宽度，默认600',
     *          mask: 'true or false，是否有遮罩',
     *          closable: 'true or false，是否有右上角关闭按钮'
     *          header: {
     *              title: '标题',
     *              tip: '提示信息'
     *          },
     *          footer: {
     *              enter: 'true or false，是否需要确定按钮',
     *              enterText: '确定按钮文案',
     *              cancel: 'true or false，是否需要取消按钮',
     *              cancelText: '取消按钮文案'
     *          }
     *
     *          ==========================================
     *          无效参数：
     *          height:'高度固定全屏',
     *          left: '固定为doc.width - width',
     *          top: '固定为0',
     *          modal: '固定为false，禁止滚动',
     *      }
     */
    mxModal: function (view, viewOptions, dialogOptions) {
        dialogOptions = dialogOptions || {};
        return this.mxDialog(view, viewOptions, Magix.mix({
            closable: true,
            mask: true
        }, Magix.mix(dialogOptions, {
            full: true,
            fullHeader: Magix.mix({
                title: '',
                tip: '',
                iconTip: ''
            }, dialogOptions.header || {}),
            fullFooter: Magix.mix({
                enter: true,
                enterText: I18n['dialog.submit'],
                cancel: true,
                cancelText: I18n['dialog.cancel']
            }, dialogOptions.footer || {}),
            modal: false,
            height: window.innerHeight,
            placement: 'right',
            card: (dialogOptions.card + '' !== 'false')
        })));
    },
    /**
     * this.mxDialog(viewPath[string], viewOptions[object], dialogOptions[object])
     *    viewPath: 'dialog view路径'
     *    viewOptions: {
     *        传入dialog的数据，挂载当前dialog实体
     *    },
     *    dialogOptions: { //浮层样式覆盖
     *        width:'宽度',
     *        height:'高度',
     *        modal: 'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false',
     *        mask: 'true or false，是否有遮罩，默认true',
     *        closable: 'true or false，是否有右上角关闭按钮，默认true',
     *        left: '最终定位相对于屏幕左侧，默认居中',
     *        top: '最终定位相对于屏幕高侧，默认居中',
     *        target: 指定节点，相对该节点下中对齐
     *        offset: 指定节点时微量偏移
     *    }
     */
    mxDialog: function (view, viewOptions, dialogOptions) {
        var me = this;
        var dlg;
        var beforeCloseCallback, afterCloseCallback;
        var output = {
            beforeClose: function (fn) {
                // 关闭浮层前调用
                // return true 关闭
                // return false 不关闭浮层
                beforeCloseCallback = fn;
            },
            close: function () {
                if (dlg) {
                    dlg.trigger('dlg_close');
                }
            },
            afterClose: function (fn) {
                // 关闭浮层后调用
                afterCloseCallback = fn;
            }
        };
        var dOptions = {
            view: view
        };
        seajs.use(view, me.wrapAsync(function (V) {
            var key = '$dlg_' + view;
            if (me[key]) {
                return;
            }
            me[key] = 1;
            // 优先级：
            // 外部传入的（dialogOptions） > view本身配置的（vDialogOptions） > 默认（dOptions）
            // view本身配置的
            var vDialogOptions = V.dialogOptions || {};
            // 外部传入的
            dialogOptions = dialogOptions || {};
            // 浮层出现动画位置：
            //     center：居中（从上到下）
            //     right：右侧（从右到左）
            var placement = dialogOptions.placement || vDialogOptions.placement || 'center';
            var width = dialogOptions.width || vDialogOptions.width || 400, height = dialogOptions.height || vDialogOptions.height || 260;
            var left, top, posFrom, posTo;
            var clientWidth = document.documentElement.clientWidth, clientHeight = document.documentElement.clientHeight;
            var target = dialogOptions.target || vDialogOptions.target;
            if (!target) {
                switch (placement) {
                    case 'center':
                        left = (clientWidth - width) / 2;
                        top = Math.max((clientHeight - height) / 2, 0);
                        posFrom = {
                            opacity: 0,
                            top: '-50px'
                        };
                        posTo = {
                            opacity: 1,
                            top: 0
                        };
                        break;
                    case 'right':
                        left = clientWidth - width;
                        top = 0;
                        posFrom = {
                            opacity: 0,
                            top: 0,
                            left: clientWidth
                        };
                        posTo = {
                            opacity: 1,
                            top: 0,
                            left: 0
                        };
                        break;
                }
            }
            else {
                // 指定节点
                var node = void 0;
                if ((typeof target == 'string') && !(/^#/.test(target)) && !(/^\./.test(target))) {
                    node = $('#' + target);
                }
                else {
                    node = $(target);
                }
                var customOffset = dialogOptions.offset || vDialogOptions.offset || {};
                customOffset.top = +customOffset.top || 0;
                customOffset.left = +customOffset.left || 0;
                var offset = node.offset();
                top = offset.top + node.outerHeight() + 10 - $(window).scrollTop() + customOffset.top;
                left = offset.left - (width - node.outerWidth()) / 2 + customOffset.left;
                posFrom = {
                    opacity: 0,
                    top: '-50px'
                };
                posTo = {
                    opacity: 1,
                    top: 0
                };
            }
            Magix.mix(dOptions, {
                mask: true,
                modal: false,
                width: width,
                closable: true,
                left: left,
                top: top,
                posFrom: posFrom,
                posTo: posTo
            }, vDialogOptions, dialogOptions);
            // 数据
            Magix.mix(dOptions, viewOptions);
            dOptions.dialog = output;
            dlg = me['@{dialog.show}'](me, dOptions);
            dlg.on('beforeClose', function (event) {
                if (!beforeCloseCallback) {
                    event.closeFn();
                }
                else {
                    beforeCloseCallback().then(function () {
                        event.closeFn();
                    });
                }
            });
            dlg.on('close', function () {
                delete me[key];
                if (afterCloseCallback) {
                    afterCloseCallback();
                }
            });
        }));
        return output;
    },
    mxCloseAllDialogs: function () {
        CacheList.forEach(function (view) {
            var dlg = $('#' + view.id);
            if (dlg) {
                dlg.trigger('dlg_close');
            }
        });
    }
});

});