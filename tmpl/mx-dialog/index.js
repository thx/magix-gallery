let Magix = require('magix');
let $ = require('$');
let Vframe = Magix.Vframe;
let I18n = require('../mx-medusa/util');
Magix.applyStyle('@index.less');
let DialogZIndex = 99999;
let Duration = 200;

let CacheList = [];
let CalCache = (view, type) => {
    let dialogZIndex = 99999;
    if (type == 'add') {
        CacheList.push(view);
    }
    for (let i = CacheList.length - 1, cacheItem; i >= 0; i--) {
        cacheItem = CacheList[i];
        if (type == 'remove' && (cacheItem.id == view.id)) {
            CacheList.splice(i, 1);
        } else {
            // 取最大的z-index
            let dzi = +$('#' + cacheItem.id).parent().css('z-index');
            if (dzi > dialogZIndex) {
                dialogZIndex = dzi;
            }
        }
    };

    // 计算下一个浮层的z-index
    DialogZIndex = dialogZIndex + 2;
};

const GetCssVar = (key, def) => {
    let root = window.getComputedStyle(document.documentElement);
    let v = document.body.style.getPropertyValue(key) || root.getPropertyValue(key);
    if (!v) {
        return def || '';
    } else {
        return v.trim();
    }
};

module.exports = Magix.View.extend({
    tmpl: '@index.html:updateby[]',
    init(extra) {
        let me = this;
        me.on('destroy', () => {
            // 2 dialog + mask
            // DialogZIndex -= 2;
            CalCache(me, 'remove');

            // 存在非手动关闭浮层的情况，比如浮层中有一个按钮从本页面跳走
            // 这时候需要关闭浮层
            $('#' + me.id).trigger('dlg_close');

            if (me['@{resize.timer}']) {
                clearTimeout(me['@{resize.timer}']);
            }
        });

        // DialogZIndex += 2;
        // CacheList.push(me);
        CalCache(me, 'add');

        me.updater.set({
            extraOptions: {  // 配置数据独立维护，方式被污染
                ...extra,
                closable: extra.closable + '' !== 'false', // closable默认true
                spm: extra.spm || ('gostr=/alimama_bp.4.1;locaid=d' + extra.view.replace(/\//g, '_')), // 埋点处理 位置_path，不支持/处理成下划线
                cntId: 'cnt_' + me.id
            },
        });
    },
    render() {
        let me = this;
        me.updater.digest();

        // 浮层打开关闭加延迟
        setTimeout(me.wrapAsync(() => {
            let data = me.updater.get('extraOptions');
            let wrapper = $('#wrapper_' + me.id);
            wrapper.css(data.posTo);

            // 修正样式
            me['@{sync.style}']();

            let cntId = data.cntId;
            let mask = $('#mask_' + me.id);
            if (mask.length > 0) {
                mask.addClass('@index.less:backdrop-out');
            }

            // 点击空白处关闭浮层
            if (data.blankSpaceClosable) {
                wrapper.on('click', (e) => {
                    if (!Magix.inside(e.target, me.id)) {
                        $('#' + me.id).trigger('dlg_close');
                    }
                })
            }

            if (data.full) {
                // mxModal 实例化对象 => 绑定事件 => 渲染浮层
                let cntVf = me.owner.mountVframe(cntId, '');
                cntVf.on('created', () => {
                    // 全屏右出浮层的左侧快捷导航
                    let quickCnts = $(`#${cntId}`).find('[mx-dialog-quick]');
                    if (quickCnts && quickCnts.length) {
                        let quicks = [];
                        for (let i = 0; i < quickCnts.length; i++) {
                            let v = $(quickCnts[i]).attr('mx-dialog-quick'),
                                t = $(quickCnts[i]).attr('mx-dialog-quick-text');
                            quicks.push({ value: v, text: t });
                        }

                        // digest会引起子view重复init
                        $(`#${cntId}`).closest('.@index.less:dialog-content').prepend(`<div class="@index.less:quick-wrapper">
                            ${quicks.map(q => `<a href="javascript:;" class="@index.less:quick" mx-dialog-modal-quick="${q.value}">${q.text}</a>`).join('')}
                        </div>`);
                    }
                });
                cntVf.mountView(data.view, data);

                $(`#${cntId}`).on('scroll', () => {
                    // popover，dropdown追加到body，滚动时通知节点改动定位
                    $(document).trigger('dialogScoll');
                })
            } else {
                // mxDialog
                me.owner.mountVframe(cntId, data.view, data);
            }
        }), Duration);
    },

    '@{sync.style}'() {
        let { cntId, full, card, width, height, dvHeight, dialogHeader, dialogFooter } = this.updater.get('extraOptions');
        let dlg = $(`#${this.id}`);
        let clientWidth = document.documentElement.clientWidth,
            clientHeight = document.documentElement.clientHeight;
        if (full) {
            // mxModal 全屏右出浮层
            let fcss = {
                height: clientHeight - (dlg.outerHeight() - $('#' + cntId).outerHeight()),
                overflowY: 'auto',
            }
            if (card) {
                fcss.backgroundColor = 'var(--mx-dialog-color-bg, var(--app-bg))';
                fcss.padding = 'var(--output-v-gap, 16px) var(--output-h-gap, 24px)';
            }
            $('#' + cntId).css(fcss);

            // 是否需要更新宽度位置 + 左距离
            let w = Math.min(clientWidth, width);
            dlg.css({
                width: w,
                left: Math.max(0, clientWidth - w)
            })
        } else {
            // mxDialog
            let h = height;
            let fh = $('#' + cntId).siblings(`[data-dialog-header="${cntId}"]`),
                ff = $('#' + cntId).siblings(`[data-dialog-footer="${cntId}"]`);
            if (fh && fh.length) {
                h -= fh.outerHeight();
            }
            if (ff && ff.length) {
                h -= ff.outerHeight();
            }

            $(`#${cntId}_loading`).css({
                height: h,
            });

            // 使用自带的吊头吊尾的，处理下高度
            if ((dialogHeader.title || dialogFooter.enter || dialogFooter.cancel) && (dvHeight > 0)) {
                $('#' + cntId).css({
                    height: h,
                    overflowY: 'auto',
                });
            }
        }
    },

    '@{notify.main.view.unload}'(e) {
        let vf = Vframe.get('cnt_' + this.id);
        vf && vf.invoke('fire', ['unload', e]);
    },

    /**
     * 确定按钮
     */
    '@{btn.submit}<click>'(e) {
        let me = this;
        let { cntId, callback, enterCallback, dialogFooter } = me.updater.get('extraOptions');
        let submitBtn = Vframe.get(`${cntId}_footer_submit`);
        submitBtn.invoke('showLoading');

        let models = [
            Vframe.get(cntId).invoke('check')
        ];
        if (dialogFooter.view) {
            let customFooterViewNode = $(`.@index.less:dialog-content`).find(`[mx-view*="${dialogFooter.view}"]`);
            let fvf = Vframe.get(customFooterViewNode[0]?.id);
            if (fvf) {
                models.push(fvf.invoke('check'));
            }
        }

        Promise.all(models).then(results => {
            submitBtn.invoke('hideLoading');
            let errorNode = $('#' + cntId + '_footer_error');

            // 合并校验，数据拆分提交，方式result本身为数组或者其他值
            let ok = true,
                msgs = [];
            results.forEach(result => {
                ok = ok && result.ok;
                if (!result.ok && result.msg) {
                    msgs.push(result.msg)
                }
            });

            if (ok) {
                errorNode.html('');
                me['@{close}<click>']();

                // 兼容老api callback
                // 新api统一为enterCallback
                if (callback) {
                    callback(results[0].data || {}, results[1]?.data || {});
                } else if (enterCallback) {
                    enterCallback(results[0].data || {}, results[1]?.data || {});
                }
            } else {
                if (msgs.length) {
                    errorNode.html(`<i class="mx-iconfont @index.less:error-icon">&#xe71c;</i>${msgs.join('；')}`);
                } else {
                    errorNode.html('');
                }
            }
        });
    },

    /**
     * 按钮取消
     */
    '@{btn.close}<click>'(e) {
        this['@{close}<click>']();

        let { cancelCallback } = this.updater.get('extraOptions');
        if (cancelCallback) {
            cancelCallback();
        }
    },

    /**
     * 自定义按钮
     */
    '@{btn.custom}<click>'(e) {
        let me = this;
        let { cntId, dialogCustomBtns } = me.updater.get('extraOptions');
        let { index } = e.params;
        let btnNode = Vframe.get(`${cntId}_footer_custom_btn_${index}`);
        let btnConfig = dialogCustomBtns[index];
        if (btnConfig.check) {
            btnNode.invoke('showLoading');
            Vframe.get(cntId).invoke('check').then(result => {
                btnNode.invoke('hideLoading');
                let errorNode = $('#' + cntId + '_footer_error');
                if (result.ok) {
                    errorNode.html('');
                    if (btnConfig.callback) {
                        btnConfig.callback(result.data || {});
                    }
                } else {
                    if (result.msg) {
                        errorNode.html(`<i class="mx-iconfont @index.less:error-icon">&#xe71c;</i>${result.msg}`);
                    } else {
                        errorNode.html('');
                    }
                }
            });
        } else {
            if (btnConfig.callback) {
                btnConfig.callback();
            }
        }
    },

    /**
     * 右上角取消
     */
    '@{close}<click>'(e) {
        $('#' + this.id).trigger('dlg_close');
    },

    /**
     * mxModal 左侧快捷楼梯导航
     */
    '$[mx-dialog-modal-quick]<click>'(e) {
        let id = $(e.target).attr('mx-dialog-modal-quick');
        let quicks = $(`#${this.id} .@index.less:quick`);
        quicks.removeClass('@index.less:quick-cur');

        let node = $(`[mx-dialog-quick=${id}]`);
        $(e.eventTarget).addClass('@index.less:quick-cur');

        let { cntId } = this.updater.get('extraOptions');
        let wrapper = $(`#${cntId}`);
        wrapper.scrollTop(wrapper.scrollTop() + node.offset().top - wrapper.offset().top);
    },

    '$win<resize>'(e) {
        let me = this;
        if (me['@{resize.timer}']) {
            clearTimeout(me['@{resize.timer}']);
        }

        me['@{resize.timer}'] = setTimeout(me.wrapAsync(() => {
            me['@{sync.style}']();
        }), Duration);
    }
}, {
    '@{dialog.show}'(view, options) {
        // vfDialogId自定义当前dialog id
        let id = options.vfDialogId || Magix.guid('dlg_');
        if (options.mask) {
            let mask = $('<div class="@index.less:dialog-backdrop" id="mask_' + id + '" />');
            mask.css({
                zIndex: DialogZIndex - 1
            })
            $(document.body).append(mask);
        }

        let wrapperId = 'wrapper_' + id,
            wrapperZIndex = DialogZIndex;
        let { width, left, top } = options;

        // 全屏右出浮层不需要圆角
        let wrapper = $(`<div mx-view 
                data-daynamic-view="${options.view}"
                class="@index.less:dialog-wrapper"
                id="${wrapperId}" style="z-index:${wrapperZIndex}">
                <div class="@index.less:dialog ${options.full ? '@index.less:full' : ''} ${options.dialogClass || ''}" id="${id}"
                    style="top:${top}px; left:${left}px; width:${width}px;"></div>
            </div>`);
        wrapper.css(options.posFrom);
        $(document.body).append(wrapper);

        // 禁止body滚动
        // 有滚动条的时候，加上右padding，防止页面抖动
        let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
        document.body.style.overflowY = 'hidden';

        // modal 是否允许浮层溢出滚动
        wrapper.css({
            overflowY: options.modal ? 'hidden' : 'auto'
        });

        let vf = view.owner.mountVframe(id, '@moduleId', options);
        let node = $('#' + id);
        let suspend;
        return node.on('dlg_close', () => {
            if (node.data('closed')) {
                return;
            }
            node.trigger({
                type: 'beforeClose',
                closeFn: () => {
                    if (!node.data('closing') && !suspend) {
                        let resume = () => {
                            node.data('closing', 1);

                            $('#wrapper_' + id).css(options.posFrom);
                            $('#mask_' + id).removeClass('@index.less:backdrop-out');

                            setTimeout(() => {
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
                        let e = {
                            prevent() {
                                suspend = 1;
                            },
                            resolve() {
                                e.p = 1;
                                suspend = 0;
                                resume();
                            },
                            reject() {
                                e.p = 1;
                                suspend = 0;
                            }
                        };
                        vf.invoke('@{notify.main.view.unload}', [e]);
                        if (!suspend && !e.p) {
                            resume();
                        }
                    }
                }
            });
        });
    },

    /**
     * this.confirm(viewOptions, dialogOptions);
     *    viewOptions: {
     *       title: '标题',
     *       content: '内容',
     *       enter: true or false，默认true
     *       enterText: '自定义确定按钮文案，默认确定',
     *       enterCallback: '确定按钮响应事件',
     *       cancel: true or false，默认true
     *       cancelText: '自定义取消按钮文案，默认取消',
     *       cancelCallback: '取消按钮响应事件'
     *    }
     */
    confirm(viewOptions, dialogOptions) {
        let voptions = {
            ...(viewOptions || {}),
            title: viewOptions?.title || I18n['dialog.title'],
            content: viewOptions?.content || '',
            enter: true,
            enterText: viewOptions?.enterText || I18n['dialog.submit'],
            cancel: true,
            cancelText: viewOptions?.cancelText || I18n['dialog.cancel'],
            spm: viewOptions?.spm || `${this.id}_confirm`,
        };
        let doptions = {
            width: 320,
            blankSpaceClosable: true, //点击空白区域是否允许关闭浮层
            closable: false, // 无右上角关闭按钮（可关闭时点击空白处关闭浮层）
            mask: false,
            ...(dialogOptions || {}),
        };

        if (doptions.asyncCallback) {
            // 异步回调方式
            return new Promise((resolve, reject) => {
                this.mxDialog('@./confirm', {
                    ...voptions,
                    enterCallback: () => {
                        resolve(true);
                    },
                    cancelCallback: () => {
                        resolve(false);
                    }
                }, doptions);
            })
        } else {
            return this.mxDialog('@./confirm', voptions, doptions);
        }
    },

    /**
     * 系统提示
     * 快捷写法：
     * this.alert(title, content, enterCallback, dialogOptions)
     *    title: '标题',
     *    content: '内容',
     *    enterCallback: '点击确认按钮的回调',
     *
     * 同this.confirm的api：this.alert(viewOptions, dialogOptions);
     * viewOptions: {
     *       title: '标题',
     *       content: '内容',
     *       enterText: '自定义确定按钮文案，默认确定',
     *       enterCallback: '确定按钮响应事件',
     * }
     */
    alert() {
        let alertDialogOptions = {
            width: 320,
            blankSpaceClosable: true, //点击空白区域是否允许关闭浮层
            closable: false, // 无右上角关闭按钮（可关闭时点击空白处关闭浮层）
            mask: false,
        }

        if ($.isPlainObject(arguments[0])) {
            // alert(viewOptions, dialogOptions)
            let viewOptions = arguments[0] || {},
                dialogOptions = arguments[1] || {};
            return this.mxDialog(
                '@./confirm',
                {
                    ...viewOptions,
                    title: viewOptions.title || I18n['dialog.title'],
                    content: viewOptions.content || '',
                    enter: true,
                    enterText: viewOptions.enterText || I18n['dialog.submit'],
                    cancel: false,
                    spm: viewOptions.spm || `${this.id}_alert`,
                },
                {
                    ...alertDialogOptions,
                    ...dialogOptions,
                }
            );
        } else {
            // alert(title, content, enterCallback, dialogOptions)
            return this.mxDialog(
                '@./confirm',
                {
                    title: arguments[0] || I18n['dialog.title'],
                    content: arguments[1],
                    enter: true,
                    enterText: I18n['dialog.submit'],
                    enterCallback: arguments[2],
                    cancel: false,
                    spm: `${this.id}_alert`,
                },
                {
                    ...alertDialogOptions,
                    ...(arguments[3] || {}),
                }
            );
        }
    },

    /**
     * 弹出登录框，规范登录框的弹出样式
     * 宽度350，高度400, 淘宝登录框要求至少400，https://yuque.antfin-inc.com/up/login-doc/rgfgka
     * 登陆框点击空白处不可关闭，所有closable: false，自定义一个关闭按钮
     *
     * 历史配置：mxLoginView(viewPath, viewOptions)
     * viewPath：自定义弹出框view
     * viewOptions：传入参数
     *
     * 当前配置：mxLoginView(viewOptions)
     * viewOptions.bizCode：产品线定义，bizCode包装登陆框逻辑
     * viewOptions：其他参数
     */
    mxLoginView(viewPath, viewOptions = {}) {
        if ($.isPlainObject(viewPath) || !viewPath) {
            // viewOptions.bizCode配置
            viewOptions = viewPath;
            viewPath = '@./login-iframe';
        }

        // 判断设置：是否为移动端
        let width = window.innerWidth;
        if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else if (document.body && document.body.clientWidth) {
            width = document.body.clientWidth;
        } else if (screen.width) {
            width = screen.width;
        }
        if (width > 768) {
            // pc
            // 内容宽350，border2，内部边距8，为了不影响二维码展示
            // 高400，内部边距8
            let gap = 8;
            return this.mxDialog('@./login', {
                loginViewPath: viewPath,
                loginViewData: viewOptions,
            }, {
                width: 350 + 2 + gap * 2,
                height: 400 + 2 + gap * 2,
                closable: false,
                blankSpaceClosable: false,
            });
        } else {
            let wirelessFn = (loginBizMap) => {
                let bizCode = viewOptions.bizCode;
                let info = loginBizMap[bizCode] || loginBizMap.def;

                // 淘宝登陆url，默认有
                //    css_style：为主站那边给定的样式约定值
                //    from 平台来源 tb / alimama
                let redirectURL = '';
                if (info.fullRedirectURL) {
                    // 全路径直接跳转
                    redirectURL = encodeURIComponent(info.fullRedirectURL);
                } else if (!info.redirectURL) {
                    // 未配置重定向地址，跳转回当前页面
                    redirectURL = encodeURIComponent(window.location.href);
                } else {
                    // example redirectURL = '/indexbp.html'
                    let routeParams = {
                        ...Magix.Router.parse().params
                    }

                    // mxredirectUrl 上次访问的地址
                    let forward = routeParams.mxredirectUrl;
                    if (!forward || forward.indexOf(window.location.origin) != 0) {
                        delete routeParams['mxredirectUrl'];
                        redirectURL = encodeURIComponent(Magix.toUrl(window.location.origin + info.redirectURL, routeParams));
                    } else {
                        redirectURL = encodeURIComponent(forward);
                    }
                };

                let params = [
                    `redirectURL=${redirectURL}` // 登录成功回跳页面
                ].concat(info.params || []);
                window.location.href = 'https://login.m.taobao.com/login.htm?' + params.join('&');
            }

            // 移动：直接跳转登录页
            $.getJSON('//g.alicdn.com/mm/bp-source/lib/login.json', (loginBizMap) => {
                wirelessFn(loginBizMap);
            }).fail((data, status, xhr) => {
                // 异常情况下重定向回当前页面
                wirelessFn({
                    def: {
                        params: [
                            'css_style=dingxiang'
                        ],
                        fullRedirectURL: '',
                        redirectURL: ''
                    }
                })
            });
        }
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
    mxModal(view, viewOptions, dialogOptions) {
        dialogOptions = dialogOptions || {}
        return this.mxDialog(view, viewOptions, Magix.mix({
            closable: true,
            mask: true
        }, Magix.mix(dialogOptions, {
            full: true,
            dialogHeader: Magix.mix({
                title: '',
                tip: '',
                iconTip: ''
            }, dialogOptions.header || {}),
            dialogFooter: Magix.mix({
                enter: true, // 默认有按钮
                enterText: I18n['dialog.submit'],
                cancel: true,
                cancelText: I18n['dialog.cancel'],
                textAlign: GetCssVar('--mx-dialog-text-align', 'left'),
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
     *        传入dialog的数据，组件附加挂载当前dialog实体
     *    },
     *    dialogOptions: { //浮层样式覆盖
     *        width:'宽度',
     *        height:'高度',
     *        header: {
     *              title: '标题',
     *              tip: '标题旁提示',
     *              iconTip: '标题旁小问号提示'
     *        },
     *        footer: {
     *              enter: false,
     *              enterText: '确定按钮文案',
     *              cancel: false,
     *              cancelText: '取消按钮文案',
     *        },
     *        modal: 'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false',
     *        mask: 'true or false，是否有遮罩，默认true',
     *        closable: 'true or false，是否有右上角关闭按钮，默认true',
     *        blankSpaceClosable: 'true or false，是否允许点击空白处关闭浮层，默认true',
     *        left: '最终定位相对于屏幕左侧，默认居中',
     *        top: '最终定位相对于屏幕高侧，默认居中',
     *        target: 指定节点，相对该节点下中对齐
     *        offset: 指定节点时微量偏移
     *    }
     */
    mxDialog(view, viewOptions, dialogOptions) {
        let me = this;
        let dlg;
        let beforeCloseCallback,
            afterCloseCallback;

        let output = {
            beforeClose(fn) {
                // 关闭浮层前调用
                // return true 关闭
                // return false 不关闭浮层
                beforeCloseCallback = fn;
            },
            close() {
                if (dlg) {
                    dlg.trigger('dlg_close');
                }
            },
            afterClose(fn) {
                // 关闭浮层后调用
                afterCloseCallback = fn;
            }
        };

        let dOptions = {
            view: view
        };

        // fix init 里不支持谈dialog，用mark一个view仅能弹出一个dialog，不符合需求
        // let m = Magix.mark?.(this, 'mxDialog');
        Magix.use(view, V => {
            // if (!m || m()) {
            if (me.owner) {
                // 优先级：
                // 外部传入的（dialogOptions） > view本身配置的（vDialogOptions） > 默认（dOptions）

                // view本身配置的
                // 兼容es module
                let vDialogOptions = V.__esModule ? (V.default.dialogOptions || {}) : (V.dialogOptions || {});

                // 外部传入的
                dialogOptions = dialogOptions || {};

                // 阶梯规则配置：优先级阶梯规则 > 直接配置
                let ladder = dialogOptions.ladder || {};
                let width, height;
                switch (ladder.width) {
                    case 'xlarge':
                        width = dialogOptions.full ? (1200 + 48) : 1200;
                        break;

                    case 'large':
                        width = dialogOptions.full ? (960 + 48) : 960;
                        break;

                    case 'normal':
                        width = dialogOptions.full ? (720 + 48) : 720;
                        break;

                    case 'small':
                        width = dialogOptions.full ? (480 + 48) : 480;
                        break;

                    case 'xsmall':
                        width = dialogOptions.full ? (320 + 48) : 320;
                        break;
                }
                width = width || dialogOptions.width || vDialogOptions.width || 480;
                height = height || dialogOptions.height || vDialogOptions.height || 260;

                // 浮层出现动画位置：
                //     center：居中（从上到下）
                //     right：右侧（从右到左）
                let placement = dialogOptions.placement || vDialogOptions.placement || 'center';
                let left, top, posFrom, posTo;
                let clientWidth = document.documentElement.clientWidth,
                    clientHeight = document.documentElement.clientHeight;
                let target = dialogOptions.target || vDialogOptions.target;
                if (!target) {
                    switch (placement) {
                        case 'center':
                            left = (clientWidth - width) / 2;
                            top = Math.max((clientHeight - height) / 2, 0);
                            posFrom = {
                                opacity: 0,
                                top: '-50px'
                            }
                            posTo = {
                                opacity: 1,
                                top: 0
                            }
                            break;

                        case 'right':
                            left = clientWidth - width;
                            top = 0;
                            posFrom = {
                                opacity: 0,
                                top: 0,
                                left: clientWidth
                            }
                            posTo = {
                                opacity: 1,
                                top: 0,
                                left: 0
                            }
                            break;
                    }
                } else {
                    // 指定相对定位节点
                    target = $(target);
                    let customOffset = dialogOptions.offset || vDialogOptions.offset || {};
                    customOffset.top = +customOffset.top || 0;
                    customOffset.left = +customOffset.left || 0;
                    let offset = target.offset();
                    top = offset.top + target.outerHeight() + 10 - $(window).scrollTop() + customOffset.top;
                    left = offset.left - (width - target.outerWidth()) / 2 + customOffset.left;
                    posFrom = {
                        opacity: 0,
                        top: '-50px'
                    }
                    posTo = {
                        opacity: 1,
                        top: 0
                    }
                }

                Magix.mix(dOptions, {
                    mask: true,
                    modal: false,
                    width,
                    height,
                    dvHeight: +(dialogOptions.height || vDialogOptions.height), // 显示指定的高度
                    closable: true,
                    blankSpaceClosable: true,
                    left,
                    top,
                    posFrom,
                    posTo,
                    dialogHeader: Magix.mix({
                        title: '',
                        tip: '',
                        iconTip: ''
                    }, dialogOptions.header || vDialogOptions.header || {}),
                    dialogFooter: Magix.mix({
                        enter: false,
                        enterText: I18n['dialog.submit'],
                        cancel: false,
                        cancelText: I18n['dialog.cancel'],
                        textAlign: GetCssVar('--mx-dialog-text-align', 'left'),
                    }, dialogOptions.footer || vDialogOptions.footer || {}),
                }, vDialogOptions, dialogOptions);

                // 指定高度的情况下，高度相对可视位置进行修正，12预留少许空白
                let marginGap = 12;
                if (dOptions.top + dOptions.height > clientHeight) {
                    dOptions.top = Math.max(clientHeight - dOptions.height - marginGap, 0);
                }
                if (dOptions.left + dOptions.width > clientWidth) {
                    dOptions.left = Math.max(clientWidth - dOptions.width - marginGap, 0);
                }

                // 数据
                Magix.mix(dOptions, viewOptions);
                dOptions.dialog = output;
                dlg = me['@{dialog.show}'](me, dOptions);

                dlg.on('beforeClose', (event) => {
                    if (!beforeCloseCallback) {
                        event.closeFn();
                    } else {
                        beforeCloseCallback().then(() => {
                            event.closeFn();
                        })
                    }
                })

                dlg.on('close', () => {
                    // delete me[key];
                    if (afterCloseCallback) {
                        afterCloseCallback();
                    }
                });
            }
        }, viewOptions);

        return output;
    },
    mxCloseAllDialogs() {
        CacheList.forEach(view => {
            let dlg = $('#' + view.id);
            if (dlg) {
                dlg.trigger('dlg_close');
            }
        })
    }
});