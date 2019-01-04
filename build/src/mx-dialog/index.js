/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/index",["magix","$","../mx-medusa/util"],(require,exports,module)=>{
/*Magix,$,I18n*/

var Magix = require("magix");
var $ = require("$");
var Vframe = Magix.Vframe;
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_galleryA","._zs_gallerydr{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryds,._zs_gallerydt{position:fixed;left:0;width:100%;height:100%;transition:all .25s}._zs_galleryds{opacity:0;top:0;background-color:rgba(0,0,0,.4)}._zs_galleryds._zs_gallerydu{opacity:1}._zs_gallerydv{position:absolute;border-radius:4px;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerydv ._zs_gallerydw{position:relative;word-break:break-all}._zs_gallerydv ._zs_gallerydx{position:absolute;top:16px;right:24px;width:26px;height:26px;z-index:20;border-radius:50%;background:transparent;color:#ccc;text-align:center}._zs_gallerydv ._zs_gallerydx ._zs_gallerydy{font-size:18px;font-weight:700;line-height:26px}._zs_gallerydv ._zs_gallerydx:focus,._zs_gallerydv ._zs_gallerydx:hover{background-color:#999;color:#fff}._zs_gallerydz{position:relative}._zs_gallerydz ._zs_gallerydA{opacity:1;position:relative;z-index:1}._zs_gallerydz ._zs_gallerydB{display:none;position:absolute;top:50%;left:50%;z-index:2;margin-top:-2px;margin-left:-2px}._zs_gallerydz._zs_gallerydC ._zs_gallerydA{opacity:0}._zs_gallerydz._zs_gallerydC ._zs_gallerydB{display:inline}");
var DialogZIndex = 500;
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
} ; var $g = '', $_temp, $p = '', closable = $$.closable, cntId = $$.cntId, full = $$.full, fullHeader = $$.fullHeader, fullFooter = $$.fullFooter; if (closable) {
    ;
    $p += '<a mxs="_zs_galleryax:_" href="javascript:;" mx-click="' + $viewId + '__ap()" class="_zs_gallerydx"><i class="mc-iconfont _zs_gallerydy">&#xe603;</i></a>';
} ; $p += '<div class="_zs_gallerydw" id="' + $e(cntId) + '_content">'; if (full) {
    ;
    $p += ' ';
    if (fullHeader.title) {
        ;
        $p += '<div class="dialog-header" id="' + $e(cntId) + '_header"><span mxa="_zs_galleryax:_" class="header-name">' + $n(fullHeader.title) + '</span>';
        if (fullHeader.tip) {
            ;
            $p += '<span mxa="_zs_galleryax:a" class="color-9 ml10">' + $n(fullHeader.tip) + '</span>';
        }
        ;
        $p += '</div>';
    }
    ;
    $p += '<div id="' + $e(cntId) + '"><div mxs="_zs_galleryax:a" class="loading" style="padding: 80 0;"><span class="loading-anim"></span></div></div>';
    if (fullFooter.enter || fullFooter.cancel) {
        ;
        $p += '<div class="dialog-footer clearfix" id="' + $e(cntId) + '_footer">';
        if (fullFooter.enter) {
            ;
            $p += '<a mxa="_zs_galleryax:b" href="javascript:;" class="fl btn btn-brand min-width-60 mr16 _zs_gallerydz" mx-click="' + $viewId + '__aq()"><span mxa="_zs_galleryax:c" class="_zs_gallerydA">' + $e(fullFooter.enterText) + '</span></a>';
        }
        ;
        $p += ' ';
        if (fullFooter.cancel) {
            ;
            $p += '<a mxa="_zs_galleryax:d" href="javascript:;" class="fl btn min-width-60 mr16" mx-click="' + $viewId + '__ap()">' + $e(fullFooter.cancelText) + '</a>';
        }
        ;
        $p += ' ';
        if (fullFooter.enter) {
            ;
            $p += '<span id="' + $e(cntId) + '_footer_error" class="fl lh32 color-red"></span>';
        }
        ;
        $p += '</div>';
    }
    ;
    $p += ' ';
}
else {
    ;
    $p += '<div id="' + $e(cntId) + '"><div mxs="_zs_galleryax:a" class="loading" style="padding: 80 0;"><span class="loading-anim"></span></div></div>';
} ; $p += '</div>'; return $p; },
    init: function (extra) {
        var me = this;
        me.on('destroy', function () {
            RemoveCache(me);
            // 2 dialog + mask
            DialogZIndex -= 2;
            // 存在非手动关闭浮层的情况，比如浮层中有一个按钮从本页面跳走
            // 这时候需要关闭浮层
            $('#' + me.id).trigger('dlg_close');
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
            var cntId = data.cntId;
            if (data.full) {
                var h = window.innerHeight;
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
            }
            var mask = $('#mask_' + me.id);
            if (mask.length > 0) {
                mask.addClass('_zs_gallerydu');
            }
            else {
                // 没有mask的时候，点击空白处关闭浮层
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
    '__ao': function (e) {
        var vf = Vframe.get('cnt_' + this.id);
        vf && vf.invoke('fire', ['unload', e]);
    },
    /**
     * 全屏右出浮层提交按钮
     */
    '__aq<click>': function (e) {
        var node = $(e.eventTarget);
        var cc = '_zs_gallerydC';
        if (node.hasClass(cc)) {
            // 防止重复提交
            return;
        }
        node.addClass(cc);
        node.append('<span class="mx-anim-loading _zs_gallerydB"></span>');
        var me = this;
        var data = me.updater.get();
        var cntId = data.cntId;
        var vf = Vframe.get(cntId);
        vf.invoke('check').then(function (result) {
            node.find('._zs_gallerydB').remove();
            node.removeClass(cc);
            var errorNode = $('#' + cntId + '_footer_error');
            if (result.ok) {
                errorNode.html('');
                me['__ap<click>']();
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
    '__ap<click>': function () {
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
    }
}, {
    '__ar': function (view, options) {
        var id = Magix.guid('dlg_');
        if (options.mask) {
            var mask = $('<div class="_zs_galleryds" id="mask_' + id + '" />');
            mask.css({
                zIndex: DialogZIndex - 1
            });
            $(document.body).append(mask);
        }
        var wrapperId = 'wrapper_' + id, wrapperZIndex = DialogZIndex, width = options.width, left = options.left, top = options.top;
        var wrapper = $("<div class=\"_zs_gallerydt\" id=\"" + wrapperId + "\"\n        style=\"z-index:" + wrapperZIndex + "\">\n        <div class=\"_zs_gallerydv\" id=\"" + id + "\"\n            style=\"top:" + top + "px; left:" + left + "px; width:" + width + "px;\"></div>\n    </div>");
        wrapper.css(options.posFrom);
        $(document.body).append(wrapper);
        // 禁止body滚动
        // 有滚动条的时候，加上右padding，防止页面抖动
        if (window.innerWidth - document.body.clientWidth > 0) {
            document.body.style.paddingRight = (window.innerWidth - document.body.clientWidth) + 'px';
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
                            $('#mask_' + id).removeClass('_zs_gallerydu');
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
                        vf.invoke('__ao', [e_1]);
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
            closable: false,
            mask: false
        }, (dialogOptions || {})));
    },
    /**
     * 分组
     * this.mxDialogGroup(viewOptions, dialogOptions)：
     *    viewOptions: {
     *        list:'传入的对象数组，如[{text:"测试",content:"内容"}]',
     *        contentView:'中间区域自定义view，会把当前选中对象完整传入',
     *        textKey: '右侧文案字段，默认text'
     *    },
     *    dialogOptions: { //浮层样式覆盖
     *        width:'宽度',
     *        height:'高度',
     *        modal: 'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false',
     *        mask: 'true or false，是否有遮罩，默认true',
     *        closable: 'true or false，是否有右上角关闭按钮，默认true',
     *        left: '最终定位相对于屏幕左侧，默认居中',
     *        top: '最终定位相对于屏幕高侧，默认居中'
     *    }
     */
    mxDialogGroup: function (viewOptions, dialogOptions) {
        viewOptions.height = dialogOptions.height || 500;
        return this.mxDialog('mx-dialog/group', viewOptions, Magix.mix({
            width: 800,
            closable: true,
            mask: true
        }, (dialogOptions || {})));
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
        dialogOptions.width = dialogOptions.width || 600;
        var fullHeader = Magix.mix({
            title: '',
            tip: ''
        }, dialogOptions.header || {});
        var fullFooter = Magix.mix({
            enter: true,
            enterText: I18n['dialog.submit'],
            cancel: true,
            cancelText: I18n['dialog.cancel']
        }, dialogOptions.footer || {});
        var winWidth = window.innerWidth, winHeight = window.innerHeight;
        var left = Math.max(winWidth - dialogOptions.width, 0), top = 0;
        Magix.mix(dialogOptions, {
            full: true,
            fullHeader: fullHeader,
            fullFooter: fullFooter,
            modal: false,
            height: winHeight,
            left: left,
            top: top,
            posFrom: {
                opacity: 0,
                top: top,
                left: winWidth
            },
            posTo: {
                opacity: 1,
                top: top,
                left: 0
            },
            card: (dialogOptions.card + '' !== 'false')
        });
        return this.mxDialog(view, viewOptions, Magix.mix({
            closable: true,
            mask: true
        }, dialogOptions));
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
     *        top: '最终定位相对于屏幕高侧，默认居中'
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
            // 优先级：外部传入的 > view本身配置的 > 默认
            // 浮层内部的配置
            Magix.mix(dOptions, V.dialogOptions || {});
            // 调用时候的配置，浮层展示位置
            dialogOptions = dialogOptions || {};
            var width = dialogOptions.width || dOptions.width || 400, height = dialogOptions.height || dOptions.height || 260;
            Magix.mix(dOptions, Magix.mix({
                mask: true,
                modal: false,
                width: width,
                closable: true,
                left: (window.innerWidth - width) / 2,
                top: Math.max((window.innerHeight - height) / 2, 0),
                posFrom: {
                    opacity: 0,
                    top: '-50px'
                },
                posTo: {
                    opacity: 1,
                    top: 0
                }
            }, dialogOptions));
            // 数据
            Magix.mix(dOptions, viewOptions);
            dOptions.dialog = output;
            dlg = me['__ar'](me, dOptions);
            dlg.on('beforeClose', function (event) {
                if (!beforeCloseCallback || (beforeCloseCallback && beforeCloseCallback())) {
                    event.closeFn();
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