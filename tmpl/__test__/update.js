let Magix = require('magix');
Magix.applyStyle('@update.less');

module.exports = Magix.View.extend({
    tmpl: '@update.html',
    render() {
        let list = [{
            ver: '1.6.37 ~ 1.6.41',
            time: '2022-08-30',
            subs: [{
                type: 'add',
                title: 'B类改版功能上线&细节优化',
                subs: [{
                    title: 'mx-radio.cards：选项禁用提示信息，<a href="#!/radio/card?highlightId=mx_12_demo8" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-checkbox.cards：选项禁用提示信息，<a href="#!/checkbox/card?highlightId=mx_12_demo7" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-error：type=complex-graphics复杂图文引导增加埋点'
                }, {
                    title: 'mx-dropdown：支持反白模式，<a href="#!/dropdown/bd?highlightId=mx_12_demo46" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-calendar.datepicker：支持反白模式，<a href="#!/calendar/index?highlightId=mx_12_demo26" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-header：导航对齐&打标形式调整，<a href="#!/header/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.pipeline',
                    subs: [
                        '步骤条进度，多种展现样式&异常状态，<a href="#!/effects/step" class="color-brand">点击查看</a>',
                        '日历切换支持无背景无logo模式，<a href="#!/effects/pipeline?highlightId=mx_12_demo87" class="color-brand">点击查看</a>'
                    ]
                }, {
                    title: 'mx-dropdown：支持向上展开，<a href="#!/dropdown/bd?highlightId=mx_12_demo58" class="color-brand">点击查看</a>'
                }, {
                    title: '中文&英文字体替换'
                }, {
                    title: '品牌人物形象替换'
                }]
            }]
        }, {
            ver: '1.6.33-1.6.36',
            time: '2022-08-23',
            subs: [{
                type: 'add',
                title: 'feedback增加triggerType autoShowByRemote从远端控制卡片自动弹出',
                subs: [{
                    title: 'feedback增加triggerType autoShowByRemote从远端控制卡片自动弹出'
                }]
            }]
        }, {
            ver: '1.6.24 ~ 1.6.32',
            time: '2022-08-18',
            subs: [{
                type: 'add',
                title: 'B类改版功能上线&细节优化',
                subs: [{
                    title: 'mx-effects.icon：新增默认图标，<a href="#!/effects/icon?highlightId=mx_12_demo86" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-input：支持反白模式，<a href="#!/input/index?highlightId=mx_12_demo9" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-guides：新增品牌人物引导样式，<a href="#!/guides/index?highlightId=mx_12_demo7" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tabs.box：新增离散点切换tab，shadow样式微调，<a href="#!/tabs/box?highlightId=mx_12_demo7" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-grid.bfilter：包裹内容，则可定位到卡片右上角，<a href="#!/grid/index?highlightId=mx_12_demo14" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-grid: 新增渐变背景卡片，<a href="#!/grid/index?highlightId=mx_12_demo15" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-btn: icon新增语义化标签配置，<a href="#!/btn/index?highlightId=mx_12_demo14" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-grid.footer: 新增卡片底部样式，<a href="#!/grid/index?highlightId=mx_12_demo16" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-indics: 支持部分禁用，<a href="#!/indics/index?highlightId=mx_12_demo8" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-stickytable: 表格卡片内对齐样式，<a href="#!/stickytable/style?highlightId=mx_12_demo50" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-checkbox: 支持配置color自定义颜色，<a href="#!/checkbox/index?highlightId=mx_12_demo9" class="color-brand">点击查看</a>'
                }, {
                    title: '动画效果优化'
                }, {
                    title: '样式细节调整'
                }]
            }]
        }, {
            ver: '1.6.23',
            time: '2022-08-11',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-tabs.menu：二级导航，<a href="#!/tabs/menu" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-popover：配置transform=false取消缩放显示动画，滑动显示，<a href="#!/popover/index?highlightId=mx_12_demo18" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-grid.link：新增卡片标题右侧外链标签，<a href="#!/grid/index?highlightId=mx_12_demo8" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.6.22',
            time: '2022-08-09',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-main.nav：线型主流程组件，<a href="#!/main/1" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.6.21',
            time: '2022-08-08',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.pipeline：支持配置mode="nav"展示为二级导航组件，<a href="#!/tabs/pipeline" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-grid：支持多种使用场景尺寸，<a href="#!/grid/index?highlightId=mx_12_demo13" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-preview：增加显示动画+展开情况下防重复触发'
                }]
            }]
        }, {
            ver: '1.6.20',
            time: '2022-08-04',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-cascade：支持多选，<a href="#!/cascade/multi" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-switch：支持loading态，支持同步阻断校验，<a href="#!/switch/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-color.picker：色值快捷选项，<a href="#!/color/index?highlightId=mx_12_demo5" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-popover：新增带箭头场景，<a href="#!/popover/index?highlightId=mx_12_demo17" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.progress：条形进度支持异常&警告&通过场景，自定义提示文案，重刷按钮，<a href="#!/effects/progress" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.progress：圆形进度支持异常&警告&通过场景，支自定义提示文案，持缺口圆环，重刷按钮，<a href="#!/effects/circle" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.pipeline：纯展示及可操作的活动日历进度，<a href="#!/effects/pipeline" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '动画效果优化',
                subs: [{
                    title: '下拉渐显+上拉渐隐效果'
                }, {
                    title: '标签选择+移除效果'
                }]
            }]
        }, {
            ver: '1.6.19',
            time: '2022-07-27',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-stickytable：设置mx-stickytable-row关联设置了rowspan的tr，方便计算表格hover态，<a href="#!/stickytable/rowspan" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tabs：支持溢出缩略显示，<a href="#!/tabs/index?highlightId=mx_12_demo24" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tabs.edit：可编辑tab根据B类规范调整，支持溢出缩略显示，<a href="#!/tabs/edit" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.icon：支持圆形，方形，圆点打标，支持打标定位，<a href="#!/effects/icon" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-breadcrumb：根据B类规范调整，支持下拉列表选项，<a href="#!/breadcrumb/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-btn：新增警告类按钮，<a href="#!/btn/index?highlightId=mx_12_demo12" class="color-brand">点击查看</a>；支持纯icon按钮，<a href="#!/btn/index?highlightId=mx_12_demo13" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-collapse：根据B类规范调整，新增幽灵折叠卡片样式，<a href="#!/collapse/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-slider：根据B类规范调整，<a href="#!/slider/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-slider.range：根据B类规范调整，<a href="#!/slider/range" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-area：根据B类规范调整，支持切换按照地理区选择，<a href="#!/area/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.result：根据B类规范调整，支持切换水平布局，<a href="#!/effects/result" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-stickytable：支持配置sort-action="event"自定义排序事件，支持配置sort-range="all"扩大排序可点击范围到整个单元格，<a href="#!/stickytable/sort" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.6.17 ~ 1.6.18',
            time: '2022-06-30',
            subs: [{
                type: 'notice',
                title: 'aem分析',
                subs: [{
                    title: '主流程分步组件添加分步表单和表单区块选择器'
                }]
            }]
        }, {
            ver: '1.6.16',
            time: '2022-06-29',
            subs: [{
                type: 'add',
                subs: [{
                    title: '新增复杂图文空状态，<a href="#!/error/index?highlightId=mx_12_demo9" class="color-brand">独立使用点击查看</a>，<a href="#!/stickytable/empty" class="color-brand">表格中使用场景</a>'
                }, {
                    title: 'mx-radio：支持配置img显示前置小图标，<a href="#!/radio/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-checkbox：支持配置img显示前置小图标，<a href="#!/checkbox/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-stickytable：支持紧凑型 & 常规尺寸 & 宽松型，<a href="#!/stickytable/style" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tabs：支持配置adc-list联动adc树结构，<a href="#!/tabs/index?highlightId=mx_12_demo22" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tabs.box：支持配置adc-list联动adc树结构，<a href="#!/tabs/box?highlightId=mx_12_demo23" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-radio.cards：支持配置adc-list联动adc树结构，<a href="#!/radio/card?highlightId=mx_12_demo12" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-checkbox.cards：支持配置adc-list联动adc树结构，<a href="#!/checkbox/card?highlightId=mx_12_demo8" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dropdown.bd：支持配置adc-list联动adc树结构，<a href="#!/dropdown/bd?highlightId=mx_12_demo55" class="color-brand">单选adc示例</a>，<a href="#!/dropdown/bd-multi?highlightId=mx_12_demo56" class="color-brand">多选adc示例</a>'
                }, {
                    title: 'mx-guides：支持追加到容器场景，<a href="#!/guides/index?highlightId=mx_12_demo5" class="color-brand">单选adc示例</a>，<a href="#!/dropdown/bd-multi?highlightId=mx_12_demo56" class="color-brand">多选adc示例</a>'
                }]
            }, {
                type: 'notice',
                title: 'B类改版',
                subs: [{
                    title: 'mx-stickytable：提取可配置变量，适配表格改版需求'
                }]
            }]
        }, {
            ver: '1.6.14 ~ 1.6.15',
            time: '2022-06-22',
            subs: [{
                type: 'notice',
                title: 'aem分析',
                subs: [{
                    title: '表单校验提示添加class选择器'
                }, {
                    title: 'dialog添加class选择器'
                }]
            }]
        }, {
            ver: '1.6.13',
            time: '2022-06-17',
            subs: [{
                type: 'add',
                subs: [{
                    title: '使用变量书写样式示例，<a href="#!/style/var" class="color-brand">点击查看</a>'
                }, {
                    title: '关于常用样式class的说明，<a href="#!/style/class" class="color-brand">点击查看</a>'
                }, {
                    title: '表单多层嵌套样式示例，<a href="#!/form/style?highlightId=mx_12_demo28" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: 'B类改版',
                subs: [{
                    title: 'B类改版配色方案调整'
                }]
            }]
        }, {
            ver: '1.6.12',
            time: '2022-06-09',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.notice：支持配置type="fault"显示严重故障提示，<a href="#!/effects/notice?highlightId=mx_12_demo72" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-indics：fix mode=text 的情况下，line-number不生效的情况'
                }]
            }]
        }, {
            ver: '1.6.10 ~ 1.6.11',
            time: '2022-05-25',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-grid：fix mx-grid.title 文案超长溢出'
                }, {
                    title: 'mx-input：fix value = 0不显示问题'
                }, {
                    title: 'mx-header：fix outer-key 配置不生效'
                }]
            }]
        }, {
            ver: '1.6.9',
            time: '2022-05-24',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-switch：支持配置value-map自定义value值，<a href="#!/switch/index?highlightId=mx_12_demo7" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-popover：fix动态placement样式未重新初始化问题'
                }, {
                    title: 'mx-error：fix标签包裹内容动态更新内容重复'
                }]
            }]
        }, {
            ver: '1.6.8',
            time: '2022-05-10',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.card：各种打标样式详细说明，<a href="#!/effects/card?highlightId=mx_12_demo71" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-grid.title：支持配置tag-color'
                }, {
                    title: 'mx-header：扩大导航可点击范围'
                }]
            }, {
                type: 'bug',
                title: '实现方案调整',
                subs: [{
                    title: 'mx-form双向绑定调整为mxo节点绑定'
                }]
            }]
        }, {
            ver: '1.6.6 ~ 1.6.7',
            time: '2022-04-29',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-radio.cards：更新无radio卡片样式，打标支持配置提示信息，<a href="#!/radio/card" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-status：新增埋点'
                }]
            }]
        }, {
            ver: '1.6.5',
            time: '2022-04-26',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-tabs：支持部分禁用 or 整体禁用，<a href="#!/tabs/index?highlightId=mx_12_demo20" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tabs.box：支持部分禁用&整体禁用，<a href="#!/tabs/box?highlightId=mx_12_demo21" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dropdown.box：支持部分禁用&整体禁用，<a href="#!/dropdown/box?highlightId=mx_12_demo54" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-switch：支持自定义显示文案，自定义圆角，<a href="#!/switch/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-edit：支持配置disabled表示禁用，<a href="#!/editor/index?highlightId=mx_12_demo6" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '样式&交互优化',
                subs: [{
                    title: 'mx-dragsort：cursor move，<a href="#!/dragsort/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-pagination：大数据量样式优化，<a href="#!/pagination/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-btn：重新定义按钮类型，主要，次要，跟随，白色，支持配置icon，<a href="#!/btn/index" class="color-brand">点击查看</a>'
                }, {
                    title: '禁用态统一调整为整体透明度0.4'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-input：包装change事件时，阻断原生change，避免重复触发'
                }, {
                    title: 'mx-dialog：login frame mxredirectUrl，恢复历史打开地址'
                }]
            }]
        }, {
            ver: '1.6.4',
            time: '2022-04-13',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-im.alime：新增阿里小蜜自定义埋点'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-suggest：fix动态更新list=[]，一直loading的问题；下拉框失去焦点时关闭下拉列表展示框；'
                }, {
                    title: 'mx-main：展开收起子view改为dom操作避免子view重复digest'
                }]
            }]
        }, {
            ver: '1.6.2 ~ 1.6.3',
            time: '2022-04-11',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-dropdown.bd：fix spm'
                }, {
                    title: 'mx-suggest：多类型搜索 input stopPropagation'
                }]
            }]
        }, {
            ver: '1.6.0 ~ 1.6.1',
            time: '2022-04-01',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-input：功能补齐，普通输入框，搜索框，密码框，前后缀，输入个数，多尺寸展现等，<a href="#!/input/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-suggest：支持多类型搜索，<a href="#!/suggest/index?highlightId=mx_12_demo7" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-form：多种校验样式，<a href="#!/form/warn" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dropdown.bd：多选模式下，支持配置mode="tag"展示为可操作标签样式，<a href="#!/dropdown/bd-multi?highlightId=mx_12_demo53" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-taginput：调整taginput交互同mx-dropdown，<a href="#!/taginput/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.breath：支持配置width自定义宽度，<a href="#!/style/anim-common?highlightId=mx_12_demo58" class="color-brand">点击查看</a>'
                }, {
                    title: '点击logo切换多主题'
                }]
            }, {
                type: 'notice',
                title: 'B类改版',
                subs: [{
                    title: '提取更多变量已适配改版需求',
                }]
            }]
        }, {
            ver: '1.5.64',
            time: '2022-03-14',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-main：子模块支持配置toggle表示是否可展开收起，<a href="#!/main/index-def?campaignId=1&stepIndex=2" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-radio.cards：支持text-lines=0，<a href="#!/radio/card?highlightId=mx_12_demo4" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-checkbox.cards：支持text-lines=0，<a href="#!/checkbox/card?highlightId=mx_12_demo6" class="color-brand">点击查看</a>'
                }, {
                    title: 'group.less新增可配置变量及抄底逻辑',
                    subs: [
                        'mx-effects.card新增变量配置',
                        'mx-dropdown.box新增变量配置'
                    ]
                }]
            }]
        }, {
            ver: '1.5.60 ~ 1.5.63',
            time: '2022-03-10',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-grid.title：可配置字段示例更新，<a href="#!/grid/index?highlightId=mx_12_demo8" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-main：包含无卡片样式纯自定义模块示例，<a href="#!/main/index?highlightId=mx_12_demo2" class="color-brand">点击查看</a>'
                }, {
                    title: '组件在线预览多主题入口拆分',
                    subs: [
                        '点击查看<a href="#!/all/revision/qianniu" target="_blank" class="color-brand">千牛版（fusion主题）</a>',
                        '点击查看<a href="#!/all/revision/update2022" target="_blank" class="color-brand">B类改版</a>'
                    ]
                }, {
                    title: 'group.less新增可配置变量及抄底逻辑',
                    subs: [
                        'mx-trigger相关配置变量，间隔跟圆角关联',
                        'mx-dialog新增变量配置',
                        'mx-calendar新增变量配置'
                    ]
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-effects.ua：fix chrome版本获取方法'
                }]
            }]
        }, {
            ver: '1.5.59',
            time: '2022-02-21',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.notice：配置img图片提示，<a href="#!/effects/notice?highlightId=mx_12_demo4" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-grid：sticky=true滚动吸顶事件key加上this.id，避免多个mx-grid时，滚动失效'
                }]
            }]
        }, {
            ver: '1.5.58',
            time: '2022-02-10',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-gtip：自定义view场景传入当前完整配置，<a href="#!/gtip/index?highlightId=mx_12_demo5" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-radio.cards：支持自定义radio-name实现不同mx-radio.cards指向同一选择结果，<a href="#!/radio/card?highlightId=mx_12_demo9" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-btn：disabled时阻止所有默认事件'
                }]
            }]
        }, {
            ver: '1.5.56 ~ 1.5.57',
            time: '2022-01-27',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.card：新增卡片展示样式，<a href="#!/effects/card?highlightId=mx_12_demo70" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tree：单选支持叶子节点可选 or 任意节点可选，<a href="#!/tree/index?highlightId=mx_12_demo11" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.5.55',
            time: '2022-01-21',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-tree.data：支持切换单选多选模式，<a href="#!/tree/index?highlightId=mx_12_data" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.5.54',
            time: '2022-01-20',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-tree：支持切换单选多选模式，<a href="#!/tree/index?highlightId=mx_12_demo10" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.5.53',
            time: '2022-01-20',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-dropdown.bd：单选支持配置opers: ["edit", "delete"]显示操作项，<a href="#!/dropdown/bd?highlightId=mx_12_demo52" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-guides：增加埋点；处理滚动容器内滚动跟随显示；'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-carousel：fix轮播组件嵌套bug，<a href="#!/carousel/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-status：处理hover不显示的特殊场景'
                }]
            }, {
                type: 'notice',
                title: '实现方案优化',
                subs: [{
                    title: 'mx-popover',
                    subs: [
                        '隐藏样式从 display:none 切换为 z-index: -99999; pointer-events: none; 避免popover内有mx-chart时获取宽高异常',
                    ]
                }]
            }]
        }, {
            ver: '1.5.49 ~ 1.5.52',
            time: '2022-01-13',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-main：新增配置prevent-repeat-click（默认false），按钮防止重复点击，<a href="#!/main/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-indics：mode="custom"自定义指标的模式下，支持多种展现样式，<a href="#!/indics/index?highlightId=mx_12_demo6" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-guides：单点 or 模块分步引导，<a href="#!/guides/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-grid：支持配置title部分或者body部分吸顶，<a href="#!/grid/index?highlightId=mx_12_demo11" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-form：fix动态加载时，mx-checkbox，mx-radio双向绑定失效问题'
                }]
            }]
        }, {
            ver: '1.5.47 ~ 1.5.48',
            time: '2021-12-03',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-header：根据biz-code内置产品logo，深色浅色版区分，<a href="#!/header/index?highlightId=mx_12_demo8" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.card：卡片无线兼容，<a href="#!/effects/card" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.5.46',
            time: '2021-11-24',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-btn：支持配置link-href，link-target外链参数，<a href="#!/btn/index?highlightId=mx_12_demo7" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dropdown.bd：多选情况下，支持配置over=false取消一行4个显示，<a href="#!/dropdown/bd-multi?highlightId=mx_12_demo48" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.5.45',
            time: '2021-11-16',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-form：支持配置inranges校验多数值区间，<a href="#!/form/mixins?highlightId=mx_12_demo25" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.result：结果反馈组件，<a href="#!/effects/result" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.5.43 ~ 1.5.44',
            time: '2021-11-11',
            subs: [{
                type: 'notice',
                title: '文档优化',
                subs: [{
                    title: 'mx-dropdown.bd',
                    subs: [
                        '补齐单选下拉框所有示例，包括异常场景的解决方案说明，<a href="#!/dropdown/bd" class="color-brand">点击查看</a>',
                        '补齐多选下拉框所有示例，包括异常场景的解决方案说明，<a href="#!/dropdown/bd-multi" class="color-brand">点击查看</a>',
                    ]
                }]
            }, {
                type: 'add',
                subs: [{
                    title: 'mx-tabs：支持配置mode="edit"展示可编辑tab，<a href="#!/tabs/edit" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.breath：新增呼吸灯组件，<a href="#!/style/anim-common?highlightId=mx_12_demo58" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-breadcrumb：新增面包屑组件，<a href="#!/breadcrumb/index" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-dropdown.bd：展开情况下更新数据bugfix'
                }]
            }]
        }, {
            ver: '1.5.42',
            time: '2021-11-03',
            subs: [{
                type: 'notice',
                title: '文档结构调整',
                subs: [{
                    title: '重新定义组件分类，建立B类设计语言更新机制，<a href="https://yuque.antfin-inc.com/docs/share/4b8d082e-f738-4360-827a-41bdee73f652?# 《B类语言建立机制》" target="_blank" class="color-brand">详情参见</a>'
                }]
            }, {
                type: 'add',
                subs: [{
                    title: 'mx-stickytable：支持配置subs-expand-icon，subs-close-icon自定义展开收起icon'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-header：直接配置link跳转时关闭popover'
                }, {
                    title: 'mx-main：window.scrollTo(options) chrome60以下兼容'
                }, {
                    title: 'mx-stickytable：thead-sticky-wrapper找不到节点兼容'
                }]
            }]
        }, {
            ver: '1.5.41',
            time: '2021-10-28',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-pagination：兼容fusion主题风格'
                }]
            }]
        }, {
            ver: '1.5.39 ~ 1.5.40',
            time: '2021-10-19',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-header：支持tagContent自定义打标，<a href="#!/header/index?highlightId=mx_12_demo3" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tabs.box：支持tagContent自定义打标，<a href="#!/tabs/box?highlightId=mx_12_demo10" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-calendar.rangepicker：min-gap和max-gap，选择时实时校验，<a href="#!/calendar/range?highlightId=mx_12_demo22" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.5.38',
            time: '2021-10-15',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-indics：支持disabled="true"配置禁用状态，<a href="#!/indics/index?highlightId=mx_12_demo7" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-stickytable',
                    subs: [
                        'fix mx-stickytable.filter 吸顶联动筛选项操作时定位保持问题，<a href="#!/stickytable/filter-sticky" class="color-brand">点击查看</a>',
                        'fix thead-sticky=true 水平滚动时吸顶跟随问题，<a href="#!/stickytable/sticky" class="color-brand">点击查看</a>'
                    ]
                }]
            }, {
                type: 'notice',
                title: '实现优化',
                subs: [{
                    title: 'mx-number：优化动画，数字移动方向始终保持从下往上，<a href="#!/number/index" class="color-brand">点击查看</a>'
                }, {
                    title: '移除组件moment.js，accounting.js依赖'
                }]
            }]
        }, {
            ver: '1.5.37',
            time: '2021-09-30',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-stickytable：支持color-brand-opacity  color-brand-light为rgba格式'
                }]
            }]
        }, {
            ver: '1.5.36',
            time: '2021-09-27',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-input：mx-input-focus 增加 pointer-events:none; 避免双击选不中的问题'
                }, {
                    title: 'mx-status.dropdown：change时更新ui'
                }, {
                    title: 'mx-form：input[checkbox]分开写时生成mxe不一样，双向绑定兼容该情况'
                }]
            }]
        }, {
            ver: '1.5.35',
            time: '2021-09-22',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-dialog：this.confirm，this.alert 支持 e.preventDefault 阻止默认关闭浮层动作，<a href="#!/dialog/index?highlightId=mx_12_demo2" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tabs.pipeline：支持部分选项禁用，<a href="#!/tabs/style?highlightId=mx_12_demo14" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '实现方案调整',
                subs: [{
                    title: 'mx-dialog：更新dialog z-index计算方式'
                }]
            }]
        }, {
            ver: '1.5.34',
            time: '2021-09-16',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-stickytable：mx-checkbox翻页保留选中项示例，<a href="#!/stickytable/checkbox?highlightId=mx_12_demo41" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-hour：自定义开始时间（min，默认0），结束时间（max，默认24），<a href="#!/hour/index?highlightId=mx_12_demo5" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-feedback：更新版本，<a href="#!/feedback/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dropdown.box：新增按钮型单选多选，<a href="#!/dropdown/box" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '实现方案调整',
                subs: [{
                    title: 'mx-duration：flex布局'
                }, {
                    title: 'dialog-footer：padding'
                }]
            }]
        }, {
            ver: '1.5.17 ~ 1.5.33',
            time: '至 2021-09-08',
            subs: [{
                type: 'add',
                subs: [{
                    title: '提取变量--mx-以适配千牛样式规范'
                }]
            }]
        }, {
            ver: '1.5.16',
            time: '2021-08-23',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-btn：新增disabled-placement，配置禁用时hover提示框在目标的方位'
                }, {
                    title: 'mx-radio.cards：新增tag配置卡片右上角打标，<a href="#!/radio/index?highlightId=mx_12_demo8" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '样式微调已适应千牛嵌入',
                subs: [{
                    title: 'mx-effects.card：间距调整'
                }, {
                    title: 'mx-effects.pipeline：间距调整'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-stickytable：dynamicProjectName=true时组件依赖动态加载，如果table的样式在组件内，则会导致table先缩起来，再显示重新计算后的样式，解决方案将mx-stickytable样式挪到全局去；fix自由列宽设置时滚动条位置异常问题；'
                }]
            }]
        }, {
            ver: '1.5.13 ~ 1.5.15',
            time: '2021-08-11',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-popover：no-transform样式fix'
                }, {
                    title: 'mx-preview：样式fix'
                }, {
                    title: 'mx-main：样式fix'
                }, {
                    title: 'mx-header：无线drawer浮层关闭icon处理'
                }]
            }]
        }, {
            ver: '1.5.12',
            time: '2021-08-05',
            subs: [{
                type: 'notice',
                title: '文档优化',
                subs: [{
                    title: 'mx-header：详情配置交互规范调整'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-dropdown.bd：处理selected == 0 / null / undefined / "" 异常情况'
                }]
            }]
        }, {
            ver: '1.5.11',
            time: '2021-07-28',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-status：新增mode配置，展示文案版或者icon版，<a href="#!/status/index?highlightId=mx_12_demo10" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.5.10',
            time: '2021-07-28',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.star：支持配置hover单个icon给提示信息，<a href="#!/effects/star?highlightId=mx_12_demo58" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.zan：点赞点踩组件，<a href="#!/effects/zan" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-main：滚动动效，<a href="#!/main/index" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '文档优化',
                subs: [{
                    title: '站点搜索优化，支持搜索说明关键词'
                }, {
                    title: 'mx-dropdown.bd 支持 mx-dropdown 和 mx-dropdown.multiple 全量功能，隐藏旧版文档'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-radio.cards：处理selected == 0 / null / undefined / "" 异常情况'
                }, {
                    title: 'mx-suggest：fix focusout双向参数'
                }, {
                    title: 'mx-preview：chrome升级视频预览bugfix（max-height失效），<a href="#!/preview/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.5.9',
            time: '2021-07-13',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-checkbox.cards：直接整体禁用和部分禁用配置，<a href="#!/checkbox/index?highlightId=mx_12_demo7" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-radio.cards：直接整体禁用和部分禁用配置，<a href="#!/radio/index?highlightId=mx_12_demo8" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-chart：文档更新，<a href="#!/chart/index" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-dropdown：初始化selected被修正之后trigger change'
                }]
            }]
        }, {
            ver: '1.5.8',
            time: '2021-07-08',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-dropdown.bd：',
                    subs: [
                        '单选配置empty-text添加一个选项，<a href="#!/dropdown/bd?highlightId=mx_12_demo35" class="color-brand">点击查看</a>',
                        '单选/多选支持配置name添加前缀，<a href="#!/dropdown/bd?highlightId=mx_12_demo37" class="color-brand">点击查看</a>',
                        '单选选项包含图片内容，<a href="#!/dropdown/bd?highlightId=mx_12_demo36" class="color-brand">点击查看</a>',
                    ]
                }]
            }, {
                type: 'notice',
                title: '性能优化',
                subs: [{
                    title: 'mx-stickytable：合并修改样式，减少dom操作，优化组件性能；去除doc htmlchanged的影响，避免重复render；'
                }, {
                    title: '替换组件内class="btn"为mx-btn'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-dropdown：初始化selected被修正之后trigger change'
                }]
            }]
        }, {
            ver: '1.5.7',
            time: '2021-07-05',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-main：视觉规范调整（去除渐变色使用纯色）；更新动态切换stepInfos的demo，<a href="#!/main/index?highlightId=mx_12_demo4" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dialog',
                    subs: [
                        'mxDialog支持header和footer配置，使用默认的吊头吊尾，<a href="#!/dialog/index?highlightId=mx_12_demo16" class="color-brand">点击查看</a>',
                        '对齐alert和confirm的api，<a href="#!/dialog/index?highlightId=mx_12_demo1" class="color-brand">点击查看alert示例</a>，<a href="#!/dialog/index?highlightId=mx_12_demo2" class="color-brand">点击查看confirm示例</a>',
                        'alert和confirm支持自带的倒计时自动关闭浮层功能，<a href="#!/dialog/index?highlightId=mx_12_demo17" class="color-brand">点击查看</a>'
                    ]
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-stickytable：处理display:none时宽度计算为0的情况'
                }]
            }]
        }, {
            ver: '1.5.6',
            time: '2021-06-21',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-topbar/index实现同mx-topbar/router，避免预加载导致的直接执行'
                }]
            }]
        }, {
            ver: '1.5.5',
            time: '2021-06-21',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-tabs：支持切换前同步校验阻断，<a href="#!/tabs/index?highlightId=mx_12_demo15" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-gtip/index：options参数被覆盖'
                }]
            }]
        }, {
            ver: '1.5.4',
            time: '2021-06-17',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.degree：支持配置count自定义刻度个数，<a href="#!/effects/degree?highlightId=mx_12_demo61" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-stickytable：自由列宽场景下，拖动结束时，回置trigger的z-index，避免反复唤起trigger，<a href="#!/stickytable/drag?highlightId=mx_12_demo" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.5.3',
            time: '2021-06-08',
            subs: [{
                type: 'notice',
                title: '交互优化',
                subs: [{
                    title: 'mx-header：二级分组不同组数样式处理，<a href="http://localhost:5556/test.html#!/header/white?links=true&ceiling=true&login=true&user=%E6%B5%8B%E8%AF%95%E8%B4%A6%E5%8F%B7&logoutUrl=/api/member/logout.action" target="_blank" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-form：电话校验支持195开头，<a href="#!/form/mixins?highlightId=mx_12_demo10" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-switch：隔离父元素样式影响'
                }]
            }]
        }, {
            ver: '1.5.2',
            time: '2021-06-03',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-header：支持配置二级分组详情说明，<a href="http://localhost:5556/test.html#!/header/white?links=true&ceiling=true&login=true&user=%E6%B5%8B%E8%AF%95%E8%B4%A6%E5%8F%B7&logoutUrl=/api/member/logout.action" target="_blank" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-search：点击搜索icon同回车操作，<a href="#!/search/index?highlightId=mx_12_demo4" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.5.1',
            time: '2021-05-25',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-cascade：支持配置alig=right右对齐，<a href="#!/cascade/index?highlightId=mx_12_demo9" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '调整优化',
                subs: [{
                    title: 'mx-status：样式微调'
                }, {
                    title: 'vendor依赖文件：以下划线命名，命中cli闲时加载过滤规则，避免依赖关系出错'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-editor：change时更新选中值缓存，避免重复change'
                }]
            }]
        }, {
            ver: '1.5.0',
            time: '2021-05-18',
            subs: [{
                type: 'notice',
                title: '交互规范调整',
                subs: [{
                    title: '基础状态的统一调整：调整默认态，hover态，激活态，禁用态，<a target="_blank" target="_blank" href="https://yuque.antfin-inc.com/yujia.yjq/yxrf9b/kr6v64" class="color-brand">详情点击查看</a>'
                }, {
                    title: '基础动效的统一调整：新增点击扩散动画，下拉展开动画，<a target="_blank" target="_blank" href="https://yuque.antfin-inc.com/yujia.yjq/yxrf9b/kr6v64#lDVUp" class="color-brand">详情点击查看</a>'
                }]
            }, {
                type: 'bug',
                title: '配色方案交互逻辑更新',
                subs: [{
                    title: '此项更新包含一些向前不兼容的场景，请根据文档自查，<a target="_blank" target="_blank" href="https://yuque.antfin-inc.com/yujia.yjq/yxrf9b/kr6v64#wHmq0" class="color-brand">详情点击查看</a>'
                }]
            }, {
                type: 'add',
                title: '新增基础组件',
                subs: [{
                    title: 'mx-input：包装输入框常用功能，建议使用mx-input替换原生input，<a href="#!/input/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-checkbox：包装checkbox常用功能，建议使用mx-checkbox替换原生checkbox，<a href="#!/checkbox/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-checkbox.cards：包装卡片样式的checkbox，<a href="#!/checkbox/index?highlightId=mx_12_demo_cards" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-radio：包装radio常用功能，建议使用mx-radio替换原生radio，<a href="#!/radio/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-radio.cards：包装卡片样式的radio，<a href="#!/radio/index?highlightId=mx_12_demo_cards" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'add',
                subs: [{
                    title: 'mx-cascade',
                    subs: [
                        '支持配置empty-text增加空选项，<a href="#!/cascade/index?highlightId=mx_12_demo2" class="color-brand">查看示例</a>',
                        '支持配置searchbox支持搜索，<a href="#!/cascade/index?highlightId=mx_12_demo8" class="color-brand">查看示例</a>',
                    ]
                }, {
                    title: 'mx-form：新增文本校验样式，<a href="#!/form/mixins?highlightId=mx_12_demo24" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-stickytable：linkages筛选支持原生checkbox和mx-checkbox，<a href="#!/stickytable/checkbox" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dialog：对于指定高度的浮层，相对屏幕可视范围进行修正，<a href="#!/dialog/index?preview=&highlightId=mx_12_demo15" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tree.data：数据驱动版本树状结构组件，<a href="#!/tree/data" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.4.34',
            time: '2021-04-19',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-preview：type=video时支持配置video-poster，<a href="#!/preview/index?highlightId=mx_12_demo2" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-duration：新增只读模式配置，<a href="#!/duration/index?highlightId=mx_12_demo4" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '实现方案优化',
                subs: [{
                    title: 'mx-stickytable',
                    subs: [
                        '增加colgroup占位，避免第一行td有colspan导致样式错位的问题，<a href="#!/stickytable/desc" class="color-brand">查看示例</a>',
                        '更新分栏table宽度和<容器宽度时的计算规则，固定栏设置多少即为多少，滚动栏按比例分配剩余宽度，<a href="#!/stickytable/left-right-sticky?highlightId=mx_12_demo17" class="color-brand">查看示例</a>'
                    ]
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-main：切换主菜单时回到顶部'
                }]
            }]
        }, {
            ver: '1.4.33',
            time: '2021-03-29',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-main：底部按钮位置调整，支持自定义底部view，<a target="_blank" href="#!/main/index-custom" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-error：this.owner.pId == null时异常兼容'
                }, {
                    title: 'mx-status：事件重复绑定'
                }]
            }]
        }, {
            ver: '1.4.32',
            time: '2021-03-24',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-number：动效数值，<a href="#!/number/index" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-calendar.rangepicker：单个时间窗跳转阻止focusin和focusout冒泡'
                }, {
                    title: 'mx-main：子view的id加viewId前缀'
                }]
            }]
        }, {
            ver: '1.4.31',
            time: '2021-03-23',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-main：支持配置mode="common"设置浅色版，<a href="#!/main/index?highlightId=mx_12_demo3" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-main.dis：流程展示模块，<a href="#!/main/dis" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '交互规范调整',
                subs: [{
                    title: 'mx-error：交互规范调整，<a href="#!/error/index" class="color-brand">查看示例</a>，<a href="https://done.alibaba-inc.com/file/BfeHD00VvQXv/myXymOLxV7CzLfCj/preview?aid=E94400E7-4A72-4B2C-9F7B-638D34E9091A" target="_blank" class="color-brand">查看交互规范</a>'
                }]
            }]
        }, {
            ver: '1.4.30',
            time: '2021-03-19',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-header：支持配置深色版，<a href="#!/popover/index?highlightId=mx_12_demo11" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-calendar.rangepicker：多key值双向绑定focustout异常处理，增加入参'
                }]
            }]
        }, {
            ver: '1.4.29',
            time: '2021-03-17',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-popover.fn：popover处理内容为包含事件处理的变量，<a href="#!/popover/index?highlightId=mx_12_demo11" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-stickytable：配置linkages-shift="true"，支持按住shift键批量选中和反选，<a href="#!/stickytable/checkbox?highlightId=mx_12_demo39" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '实现方案优化',
                subs: [{
                    title: 'mx-stickytable：tbody，thead，模拟滚动条同步function优化'
                }]
            }]
        }, {
            ver: '1.4.28',
            time: '2021-03-15',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-preview：type=video时支持配置video-autoplay，video-controls，video-muted，<a href="#!/preview/index?highlightId=mx_12_demo2" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '实现方案调整',
                subs: [{
                    title: 'mx-status：hover节点追加到body，<a href="#!/status/index" class="color-brand">查看示例</a>'
                }, {
                    title: 'mx-status.dropdown：hover节点追加到body，<a href="#!/status/dropdown" class="color-brand">查看示例</a>'
                }]
            }]
        }, {
            ver: '1.4.28',
            time: '2021-03-11',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-preview：type=video时支持配置video-autoplay，video-controls，video-muted，<a href="#!/preview/index?highlightId=mx_12_demo2" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '交互规范调整',
                subs: [{
                    title: 'mx-effects.notice：交互规范调整，<a href="#!/effects/notice" class="color-brand">查看示例</a>，<a href="https://done.alibaba-inc.com/file/BfeHD00VvQXv/MJYOC6696E9S7ql8/preview" target="_blank" class="color-brand">查看交互规范</a>'
                }, {
                    title: 'mx-gtip：交互规范调整，<a href="#!/gtip/index" class="color-brand">查看示例</a>，<a href="https://done.alibaba-inc.com/file/BfeHD00VvQXv/MJYOC6696E9S7ql8/preview" target="_blank" class="color-brand">查看交互规范</a>'
                }, {
                    title: 'alert：交互规范调整，支持配置不同type的icon，<a href="#!/dialog/index?highlightId=mx_12_demo1" class="color-brand">查看示例</a>，<a href="https://done.alibaba-inc.com/file/BfeHD00VvQXv/MJYOC6696E9S7ql8/preview" target="_blank" class="color-brand">查看交互规范</a>'
                }, {
                    title: 'confirm：交互规范调整，支持配置不同type的icon，<a href="#!/dialog/index?highlightId=mx_12_demo2" class="color-brand">查看示例</a>，<a href="https://done.alibaba-inc.com/file/BfeHD00VvQXv/MJYOC6696E9S7ql8/preview" target="_blank" class="color-brand">查看交互规范</a>'
                }]
            }]
        }, {
            ver: '1.4.27',
            time: '2021-03-04',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-stickytable：新版table组件，后续mx-table不再维护，请使用mx-stickytable，<a href="#!/stickytable/desc" class="color-brand">点击查看</a>'
                }, {
                    title: '其他优化：内置主题配色方案增加超级直播配置，<a href="#!/all/edit/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.4.26',
            time: '2021-03-02',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-header：支持无菜单使用场景'
                }, {
                    title: 'mx-area：checkbox增加indeterminate状态，<a href="#!/area/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dialog：mxModal支持左侧配置快捷导航，<a href="#!/dialog/modal?highlightId=mx_12_demo14" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '交互细节调整',
                subs: [{
                    title: '排序箭头替换'
                }]
            }]
        }, {
            ver: '1.4.25',
            time: '2021-02-03',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-form：多key值双向绑定方案'
                }]
            }]
        }, {
            ver: '1.4.25',
            time: '2021-02-03',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-suggest：支持双向绑定，<a href="#!/search/index?highlightId=mx_12_demo4" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.icon：支持配置tip-view和tip-data自定义hover浮层view，<a href="#!/effects/icon?highlightId=mx_12_demo17" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.4.24',
            time: '2021-02-01',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-form：双向绑定选中bugfix'
                }]
            }]
        }, {
            ver: '1.4.23',
            time: '2021-01-28',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-carousel：支持配置trigger-hook翻页钩子，<a href="#!/carousel/index?highlightId=mx_12_demo11" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '交互细节调整',
                subs: [{
                    title: 'mx-loading：规范loading交互规范，全屏遮罩，局部模块遮罩，品牌色loading动画，<a href="#!/loading/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.4.22',
            time: '2021-01-19',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mxLoginView：支持只阿里妈妈登陆配置'
                }]
            }, {
                type: 'notice',
                title: '异常兼容',
                subs: [{
                    title: '兼容常量配置code.json的异常情况，涉及mx-header，mx-footer，mxLoginView'
                }, {
                    title: 'mx-footer：吊底信息更新'
                }]
            }]
        }, {
            ver: '1.4.21',
            time: '2021-01-18',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mxLoginView：阿里妈妈登陆支持自定义重定向地址'
                }]
            }]
        }, {
            ver: '1.4.20',
            time: '2021-01-15',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-dialog：支持传入spm埋点'
                }, {
                    title: 'mx-header：外链支持配置outer（是否外链打开），默认true'
                }, {
                    title: 'mx-popover：show-delay（显示延迟时间，单元毫秒，默认100，可模拟自带的title效果）；hide-delay（消失延迟时间，单元毫秒，默认200）'
                }, {
                    title: 'mx-loading：品牌loading动画，<a href="#!/loading/index?highlightId=mx_12_demo12" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.4.19',
            time: '2021-01-04',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.icon：带提示信息的浮层配置补齐=popover，<a href="#!/effects/icon?highlightId=mx_12_demo17" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-form：checkbox支持配置minlength和maxlength配置至少至多选择个数，<a href="#!/form/mixins?highlightId=mx_12_demo11" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '实现方案调整',
                subs: [{
                    title: 'mx-popover：内容浮层每次展开时重新渲染'
                }, {
                    title: 'mx-error复用mx-effects.empty样式'
                }]
            }]
        }, {
            ver: '1.4.18',
            time: '2020-12-02',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-style：项目初始化节点#app设置默认最小宽度1420（1440预留20px滚动条位置），bp内可配置--app-min-width覆盖'
                }]
            }]
        }, {
            ver: '1.4.17',
            time: '2020-11-24',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-indics：分组支持批量操作，<a href="#!/indics/index" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-slider：初始化数据格式化'
                }]
            }]
        }, {
            ver: '1.4.16',
            time: '2020-11-19',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-preview',
                    subs: [
                        '支持配置border=true显示带有边框和底色的预览图，<a href="#!/preview/index?highlightId=mx_12_demo5" class="color-brand">点击查看</a>',
                        '支持配置range-width和range-height限制可见宽高度，<a href="#!/preview/index?highlightId=mx_12_demo12" class="color-brand">点击查看</a>'
                    ]
                }]
            }, {
                type: 'notice',
                title: '视觉规范调整',
                subs: [{
                    title: 'table：td 的 padding="16px 12px" 改成 padding="12px"，<a href="#!/table/index1" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.4.15',
            time: '2020-11-12',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-uploader：支持配置type=oss使用阿里云分片上传，常用于上传视频等，<a href="#!/uploader/index?highlightId=mx_12_demo4" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-carousel：active支持双向绑定，<a href="#!/carousel/index?highlightId=mx_12_demo10" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.progress：type="circle"圆形进度改成svg实现，支持配置渐变色，<a href="#!/effects/circle?highlightId=mx_12_demo59" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-slider：支持自定义显示点dots，自定义点的数值hover显示文案，<a href="#!/slider/index?highlightId=mx_12_demo13" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-slider.range：支持自定义显示点dots，自定义点的数值hover显示文案，<a href="#!/slider/range?highlightId=mx_12_demo14" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '实现方案调整',
                subs: [{
                    title: 'mx-effects.degree：调整实现方案，减少一半dom节点'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-form：手机校验规则更新，17[0347]电信，17[28]移动，17[356]联通，<a href="#!/form/mixins?highlightId=mx_12_demo10" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.4.14',
            time: '2020-10-22',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-dropdown.bd：fix默认selected，<a href="#!/dropdown/bd?highlightId=mx_12_demo28" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.4.13',
            time: '2020-10-16',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-grid.title：支持配置icon-tip小问号提示信息，<a href="#!/grid/index?highlightId=mx_12_grid2" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-table.sort：兼容 mx-table.excel 和 mx-table'
                }]
            }]
        }, {
            ver: '1.4.12',
            time: '2020-10-14',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-indics：支持配置mode=custom，纯自定义按钮，<a href="#!/indics/index?highlightId=mx_12_demo6" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.4.9 ~ 1.4.11',
            time: '2020-09-30',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-tree.data：之前支持全选时，返回值汇总出错'
                }, {
                    title: 'mx-popover,mx-popmenu,mx-popconfirm：实现assign，delete 模板'
                }]
            }]
        }, {
            ver: '1.4.8',
            time: '2020-09-28',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.empty：插画更新，<a href="#!/effects/empty" class="color-brand">点击查看</a>'
                }, {
                    title: '新增默认呼吸灯样式，<a href="#!/effects/anim" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-popover：配置light带呼吸灯，适用于提示场景，<a href="#!/popover/index?highlightId=mx_12_demo16" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.4.7',
            time: '2020-09-09',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-area：支持自定义字母分组数据'
                }, {
                    title: 'mx-popover：chartpark图表tip在容器内定位，transform情况下定位异常，mx-popover支持配置transform=false关闭transform样式'
                }, {
                    title: 'mx-error：统一异常展示插画，<a href="#!/error/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.4.6',
            time: '2020-09-07',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-feedback：修复事件绑定及蒙层场景移除时蒙层未删除的bug'
                }]
            }]
        }, {
            ver: '1.4.5',
            time: '2020-09-01',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-feedback：need-mask配置是否需要蒙层，<a href="#!/feedback/index?highlightId=mx_12_demo4" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.4.4',
            time: '2020-08-28',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.star：icon=number数字版，<a href="#!/effects/star?highlightId=mx_12_demo57" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-preview：修复视频预览位置不居中'
                }, {
                    title: 'mx-dropdown：超出屏幕位置修正'
                }, {
                    title: 'mx-header：修复dark版links不能隐藏'
                }]
            }]
        }, {
            ver: '1.4.0 ~ 1.4.3',
            time: '2020-08-21',
            subs: [{
                type: 'notice',
                title: '样式调整',
                subs: [{
                    title: '无线端组件样式微调'
                }]
            }]
        }, {
            ver: '1.3.98 ~ 1.3.99',
            time: '2020-08-19',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-im.alimei：支持自定义内容及浮层打开场景，<a href="#!/im/alime?highlightId=mx_12_demo5" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tabs.anchor：支持配置logo + 右侧自定义view'
                }, {
                    title: 'mx-carousel：鼠标事件加延时及短时内重复操作过滤'
                }]
            }]
        }, {
            ver: '1.3.97',
            time: '2020-08-10',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-carousel',
                    subs: [
                        '透出事件prev，next，to，<a href="#!/carousel/index?highlightId=mx_12_demo9" class="color-brand">点击查看</a>',
                        '支持配置mousewheel，表示垂直方向播放时是否支持鼠标滚动事件'
                    ]
                }, {
                    title: 'mx-status：支持tipView和tipData自定义提示view，<a href="#!/status/index?highlightId=mx_12_demo2" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.93 ~ 1.3.96',
            time: '2020-08-03',
            subs: [{
                type: 'notice',
                title: '无线端兼容',
                subs: [{
                    title: 'mx-carousel：移动端手势轮播'
                }, {
                    title: 'mx-effects.card：轮播侧边透出'
                }]
            }]
        }, {
            ver: '1.3.92',
            time: '2020-07-31',
            subs: [{
                type: 'notice',
                title: '无线端兼容',
                subs: [{
                    title: 'mx-header：底部导航滚动时隐藏，滚动结束显示'
                }, {
                    title: 'mx-effects.logo：flat-logo-list移动端样式调整'
                }, {
                    title: 'mx-dialog：mxLoginView移动端直接当前页跳转登录页，登陆完再跳转回当前页'
                }]
            }]
        }, {
            ver: '1.3.90 ~ 1.3.91',
            time: '2020-07-30',
            subs: [{
                type: 'notice',
                title: '实现方案调整',
                subs: [{
                    title: 'mx-tree：子view展开时加载，支持配置最大高度'
                }, {
                    title: '无线端样式兼容',
                    subs: [
                        'mx-header：吊头无线兼容；菜单底部显示，滚动时隐藏；顶部信息抽屉展开显示；'
                    ]
                }]
            }]
        }, {
            ver: '1.3.89',
            time: '2020-07-29',
            subs: [{
                type: 'notice',
                title: '实现方案调整',
                subs: [{
                    title: '无线端样式兼容',
                    subs: [
                        'mx-footer',
                        'mx-effects.card：不同设备显示卡片个数限制，增加touch事件'
                    ]
                }, {
                    title: 'mx-tree.data：dom => data'
                }]
            }]
        }, {
            ver: '1.3.88',
            time: '2020-07-28',
            subs: [{
                type: 'notice',
                title: '妈妈官网改版样式调整',
                subs: [{
                    title: 'mx-footer：products=true时底部加彩虹条，营销服务增加链接'
                }, {
                    title: 'mx-header：点击logo回到首页，样式微调'
                }, {
                    title: 'mx-effects.card：样式调整'
                }]
            }]
        }, {
            ver: '1.3.87',
            time: '2020-07-24',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-slider.range：双向绑定，<a href="#!/slider/range?highlightId=mx_12_demo12" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-tree：自定义key情况下bugfix'
                }]
            }]
        }, {
            ver: '1.3.85 ~ 1.3.86',
            time: '2020-07-23',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-tree：支持搜索和real-values双向绑定',
                    subs: [
                        '支持搜索：设置searchbox=true支持搜索，默认false，命中的选项展开高亮，<a href="#!/tree/index?highlightId=mx_12_demo4" class="color-brand">点击查看</a>',
                        '支持设置real-values，支持双向绑定；real-values（选中的父节点值）和bottom-values（选中的叶子节点值）互斥，<a href="#!/tree/index?highlightId=mx_12_demo6" class="color-brand">点击查看</a>'
                    ]
                }, {
                    title: 'mx-slider.range：支持tip，<a href="#!/slider/range" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.84',
            time: '2020-07-21',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-tree：自定义key时getReal返回bug'
                }, {
                    title: 'mx-carousel：mode="fade"时，当前帧挪到最前方'
                }]
            }]
        }, {
            ver: '1.3.82 ~ 1.3.83',
            time: '2020-07-20',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-cascade：hover展开时非叶子节点可选，<a href="#!/cascade/index?highlightId=mx_12_demo5" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tree：支持获取向父节点汇总的数据，<a href="#!/tree/index?highlightId=mx_12_demo6" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-effects.card：多按钮事件触发多次'
                }, {
                    title: 'mx-dropdown.bd：fix value="" 时不可选中的问题'
                }, {
                    title: 'mx-calendar.rangepicker：fix safari下时分秒不可选择'
                }]
            }]
        }, {
            ver: '1.3.79 ~ 1.3.81',
            time: '2020-07-09',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.card：新增多种卡片样式',
                    subs: [
                        'mode=carousel-btns-list/flat-btns-list，多按钮图文卡片，<a href="#!/effects/card?highlightId=mx_12_demo49" class="color-brand">点击查看</a>',
                        'mode=carousel-logo-list/flat-logo-list，产品图文介绍卡片，<a href="#!/effects/card?highlightId=mx_12_demo48" class="color-brand">点击查看</a>',
                        'mode=carousel-links-list/flat-links-list，多链接图文卡片，<a href="#!/effects/card?highlightId=mx_12_demo50" class="color-brand">点击查看</a>'
                    ]
                }]
            }]
        }, {
            ver: '1.3.78',
            time: '2020-07-08',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-header：支持三级分组group配置，<a href="#!/header/white?links=true&ceiling=true&login=false&rightView=mx-header%2F__test__%2Fright&rightCeilingShow=true&cur=61" target="_blank" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-main.ver：交互及示例更新，<a href="#!/main/ver" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.77',
            time: '2020-07-06',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.progress：支持自定义背景颜色color-bg'
                }, {
                    title: 'mx-main：支持配置一个view不在左侧导航显示，中间操作区域显示（subHide）；支持配置不显示标题（titleHide）。<a href="#!/main/index-def?campaignId=1&adgroupId=1&stepIndex=3" target="_blank" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.card：支持图片上打标imgTag，图文指标卡片支持配置无指标打底文案，<a href="#!/effects/card" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '文案链接调整',
                subs: [{
                    title: 'mx-header：顶部相关产品信息调整，<a href="#!/header/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-footer：相关产品信息调整，<a href="#!/footer/index?highlightId=mx_12_demo3" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.76',
            time: '2020-06-22',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-tabs.pipeline：可切换tab的pipeline样式，<a href="#!/tabs/style?highlightId=mx_12_demo14" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dropdown.bd：支持配置额外的提示信息tip，展开下拉框时，展示位置修正到可视范围之内，<a href="#!/dropdown/bd?highlightId=mx_12_demo34" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.star：支持自定义图标尺寸width，<a href="#!/effects/star?highlightId=mx_12_demo47" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.card：支持标题旁打标titleTag，<a href="#!/effects/card" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '样式调整',
                subs: [{
                    title: 'mx-effects.pipeline：调整pipeline样式，<a href="#!/effects/pipeline" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.75',
            time: '2020-05-25',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.pipeline：新增pipeline组件，<a href="#!/effects/pipeline" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.74',
            time: '2020-05-18',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mxLoginView：包装阿里妈妈会员登陆，<a href="#!/dialog/index?highlightId=mx_12_demo13" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.73',
            time: '2020-05-14',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-im.alime：外链icon类型，<a href="#!/im/alime?highlightId=mx_12_demo4" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.72',
            time: '2020-05-09',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-im.alime：包装阿里小蜜，<a href="#!/im/alime" class="color-brand">点击查看</a>'
                }, {
                    title: 'mxLoginView：支持扩展自定义参数，<a href="#!/dialog/index?highlightId=mx_12_demo13" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.71',
            time: '2020-05-09',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-form：fix json校验，<a href="#!/form/mixins?highlightId=mx_12_demo22" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.70',
            time: '2020-05-07',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-wxi：小icon展示万象内容，切换新开页面问答，<a href="#!/im/wanxiang?highlightId=mx_12_demo3" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-form：支持校验是否为合法json，<a href="#!/form/mixins?highlightId=mx_12_demo22" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.69',
            time: '2020-05-01',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-tabs.box：多种展现形式，<a href="#!/tabs/box?highlightId=mx_12_demo7" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-footer：兼容联盟bizCode，<a href="#!/footer/index?highlightId=mx_12_demo3" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.68',
            time: '2020-04-26',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-duration：支持配置biz-code，特殊产品线的配色方案定制'
                }, {
                    title: 'mx-area：支持实时获取数据改动，<a href="#!/area/index?highlightId=mx_12_demo5" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-hour：支持实时获取数据改动，<a href="#!/hour/index?highlightId=mx_12_demo4" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-gtip：gmessage右侧固定样式多条提示信息，<a href="#!/gtip/index?highlightId=mx_12_demo5" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-popover：fix内部input disabled事件不响应的问题，pointer-events: none'
                }]
            }]
        }, {
            ver: '1.3.67',
            time: '2020-04-20',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-switch：切换前支持配置二次确认提示信息，<a href="#!/switch/index?highlightId=mx_12_demo4" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tabs.box：支持配置mode="vertical"，竖版tab切换，<a href="#!/tabs/box?highlightId=mx_12_demo13" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-gtip：gview弹出自定义view，<a href="#!/gtip/index?highlightId=mx_12_demo4" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.66',
            time: '2020-04-09',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-header：打标支持自定义颜色tagColor，<a href="#!/header/index" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                subs: [{
                    title: 'mx-footer：为保证各bp展现一致，对齐方式进行收敛，极简版居中对齐，其他左对齐，<a href="#!/footer/index" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-dialog：view 本身配置 dialogOptions 兼容 es module'
                }]
            }]
        }, {
            ver: '1.3.65',
            time: '2020-04-01',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-dropdown：bugfix'
                }]
            }]
        }, {
            ver: '1.3.64',
            time: '2020-04-01',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mxLoginView：登陆框bizCode映射在线添加，无需发版，<a href="#!/dialog/index?highlightId=mx_12_demo13" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-duration：直接配置custom，是否支持自定义投放折扣，custom=false时只可选择无折扣或者不投放，<a href="#!/duration/index?highlightId=mx_12_demo3" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dropdown：配置empty-text会默认补充一个value=""的选项，<a href="#!/dropdown/index?highlightId=mx_12_demo6" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dropdown.bd：禁选项可配置disabledTip显示禁选原因，<a href="#!/dropdown/bd?highlightId=mx_12_demo24" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.63',
            time: '2020-03-24',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-tabs.anchor：锚点导航工具，显示模块联动导航更新，<a href="#!/tabs/anchor" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-carousel：支持每帧配置不同轮播点样式，<a href="#!/carousel/index?highlightId=mx_12_demo8" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-main：fix单步hide时，侧边导航也需要隐藏'
                }]
            }]
        }, {
            ver: '1.3.62',
            time: '2020-03-19',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.card：增加埋点，增加展现模式carousel-icon-list（icon图文卡片轮播），flat-icon-list（icon图文卡片平铺），<a href="#!/effects/card?highlightId=mx_12_demo43" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-hour：支持自定义分组文案，<a href="#!/hour/index?highlightId=mx_12_demo3" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-form：当前校验配置多个校验规则时，是交的逻辑，如果需要按照或的逻辑则可使用此配置，<a href="#!/form/mixins?highlightId=mx_12_demo21" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mxLoginView：/member/login.jhtml增加参数sub=true解决子账号登陆跳转不正确的问题'
                }]
            }]
        }, {
            ver: '1.3.61',
            time: '2020-03-12',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-dialog：按钮加埋点，右上角叉关闭触发两次fix'
                }]
            }]
        }, {
            ver: '1.3.60',
            time: '2020-03-12',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.card：卡片样式显示图文链接，指标，支持轮播，<a href="#!/effects/card" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '实现调整',
                subs: [{
                    title: 'mx-calendar：加icon区分普通输入框，<a href="#!/calendar/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'color工具处理：兼容处理语义色值red，blue等'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-footer：兼容传入不支持的bizCode'
                }, {
                    title: 'mxLoginView：兼容传入不支持的bizCode'
                }, {
                    title: 'mx-uploader：fix [mx-view] input 优先级'
                }, {
                    title: 'mx-dialog：按钮加埋点，右上角叉关闭触发两次fix'
                }]
            }]
        }, {
            ver: '1.3.59',
            time: '2020-03-04',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-uploader：支持数据预处理，可中断提交，<a href="#!/uploader/index?highlightId=mx_12_demo2" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '样式微调',
                subs: [{
                    title: 'mx-header：二级导航展开样式微调，<a href="#!/header/index" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-carousel：htmlchanged和navslidend进行重绘'
                }]
            }]
        }, {
            ver: '1.3.58',
            time: '2020-02-21',
            subs: [{
                type: 'add',
                subs: [{
                    title: '完善项目主题色配置文档，<a href="#!/all/pro/theme" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-wanxiang：删除冗余调用AW.show'
                }]
            }]
        }, {
            ver: '1.3.57',
            time: '2020-02-13',
            subs: [{
                type: 'notice',
                subs: [{
                    title: 'mx-feedback：更新feedback版本，<a href="#!/feedback/index" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-effects.icon：fix隐藏的情况下处理scale留白问题'
                }]
            }]
        }, {
            ver: '1.3.56',
            time: '2020-02-06',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-copy.dt：支持复制动态内容，<a href="#!/copy/index?highlightId=mx_12_demo3" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-table.excel：mx-table组件计算rowspan时会有一些偏差，为了避免影响线上在使用的项目，不在mx-table中进行处理，新增mx-table.excel组件fix rowspan的问题，<a href="#!/table/index9" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-status，mx-status.dropdown：操作项可配置二次确认提示，<a href="#!/status/index?highlightId=mx_12_demo6" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-indics：支持配置选择上限max和选择下限min，<a href="#!/indics/index?highlightId=mx_12_demo5" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-footer：增加阿里安全连接'
                }, {
                    title: '增加默认class：table-no-hover，无hover样式的table，避免rowspan，colspan时hover态错位，<a href="#!/main/index" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '实现方案调整',
                subs: [{
                    title: 'mx-style：拆分index.less为bp.less（组件相关样式，直接设置标签样式的加前缀[mx-view]）和normalize.less（通用标签设置，body，html等等），按需加载，避免跨框架加载时normalize.less污染全局样式'
                }, {
                    title: 'mx-form.validator：升级magix-combine至3.11.34，节点校验交给节点所在view处理，mxo==this.id'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-form：电话校验支持191开头'
                }, {
                    title: 'mx-effects.icon：处理scale之后的留白'
                }, {
                    title: 'mx-carousel：跑马灯实现仅调整位置，不复制节点，避免复制子view的bug，<a href="#!/carousel/index?highlightId=mx_12_demo7" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.55',
            time: '2020-01-06',
            subs: [{
                type: 'notice',
                subs: [{
                    title: '打包es3 => es6'
                }]
            }]
        }, {
            ver: '1.3.54',
            time: '2019-12-30',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-form：isValid通过查找节点的方式会查到子view的节点，需要过滤掉非本view的节点'
                }]
            }, {
                type: 'add',
                subs: [{
                    title: 'mx-main：支持单步不透出（hide），切换步骤时回置子步骤，<a href="#!/main/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.53',
            time: '2019-12-27',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.icon：透出字体颜色配置color-text，<a href="#!/effects/icon?highlightId=mx_12_demo16" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                subs: [{
                    title: '常量码表提取为覆盖式发布cdn资源，内容更新无需发布组件版本'
                }]
            }]
        }, {
            ver: '1.3.52',
            time: '2019-12-25',
            subs: [{
                type: 'notice',
                subs: [{
                    title: 'mxLoginView：新申请的各bp登陆框样式，<a href="#!/dialog/index?highlightId=mx_12_demo13" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-footer：版权信息，增值电信业务经营许可证，浙公网安备号信息更新，补齐tanx，etao，iconfont版本，支持传bizCode定制，<a href="#!/footer/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.51',
            time: '2019-12-19',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-form：纯手机（mobine），固定电话（landline），手机+固定（phone），<a href="#!/form/mixins?highlightId=mx_12_demo10" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.50',
            time: '2019-12-17',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-form：增加固定电话 landline 校验，<a href="#!/form/mixins?highlightId=mx_12_demo10" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '交互细节调整',
                subs: [{
                    title: 'mx-header：hover有二级菜单时，点击一级菜单跳转到第一个本页打开的二级菜单，若二级全部外链则不响应，<a target="_blank" href="#!/header/white?links=true&ceiling=true&login=true&user=测试账号&logoutUrl=/api/member/logout.action" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-popover：定位对可视位置进行修正，<a href="#!/popover/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.49',
            time: '2019-12-12',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-checkbox/storestate：clearStoreState支持批量清除子节点，逗号分隔或者数组均可，<a href="#!/table/index7" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-form：isValid支持sizzle选择器，<a href="#!/form/valid" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-calendar.rangepicker：fix 只可选择到月份bug，<a href="#!/calendar/range?highlightId=mx_12_demo24" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dropdown：fix 当text-key=value-key，且配置了empty-text时显示不全问题，<a href="#!/dropdown/index?highlightId=mx_12_demo3" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.48',
            time: '2019-12-10',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-main / mx-main.hor / mx-main.ver：支持自定义按钮，支持单步锁定逻辑，<a href="#!/main/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.47',
            time: '2019-12-07',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mxLoginView：包装淘宝登陆框逻辑，传入bizCode即可，<a href="#!/dialog/index?highlightId=mx_12_demo13" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-hour：支持自定义分组，<a href="#!/hour/index?highlightId=mx_12_demo3" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-preview：fix preview-data.scale，<a href="#!/preview/index?highlightId=mx_12_demo9" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.46',
            time: '2019-11-22',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-indics：支持配置浮层提示，提供恢复默认功能，<a href="#!/indics/index?highlightId=mx_12_demo3" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-preview：支持自定义预览页面preview-view，<a href="#!/preview/index?highlightId=mx_12_demo10" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-cascade：支持hover展开子项模式，<a href="#!/cascade/index?highlightId=mx_12_demo5" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-cascade.card：卡片形式展示多级菜单，适用于营销拍档，淘宝客等，<a href="#!/cascade/card?highlightId=mx_12_demo" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-form.validator：统一异常情况展示，<a href="#!/form/index?highlightId=mx_12_demo" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.45',
            time: '2019-11-20',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-style：透出变量 --font-family 配置平台字体'
                }, {
                    title: 'mx-carousel：轮播点可定义变量透出，<a href="#!/carousel/index?highlightId=mx_12_demo6" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-taginput：items根据text-key，value-key进行转换'
                }, {
                    title: 'mx-main：跳转bugfix'
                }, {
                    title: 'mx-duration：bugfix，<a href="https://aone.alibaba-inc.com/task/23518886" target="_blank" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.44',
            time: '2019-11-13',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-footer：支持自定义权限信息'
                }]
            }]
        }, {
            ver: '1.3.43',
            time: '2019-11-06',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-header：新增配置right-ceiling-show，支持右侧自定义view，默认情况下不展示，吸顶才展示，<a href="#!/header/white?links=true&ceiling=true&login=false&rightView=mx-header%2F__test__%2Fright&rightCeilingShow=true" class="color-brand" target="_blank">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '展示优化',
                subs: [{
                    title: 'mx-slider：显示刻度点的情况下，文案显示优化，<a href="#!/slider/index?highlightId=mx_12_demo10" class="color-brand">点击查看</a>'
                }, {
                    title: 'mxLoginView：规范新版登陆框展示，新版mini要求高度必须大于=400（<a href="https://yuque.antfin-inc.com/up/login-doc/rgfgka" class="color-brand" target="_blank" rel="noopener noreferrer">查看说明</a>），否则验证码，加验场景展示不全，<a href="#!/dialog/index?highlightId=mx_12_demo13" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-table：fix safari下宽度计算问题，<a href="#!/table/index1" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.42',
            time: '2019-10-29',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-slider：显示刻度点bugfix，<a href="#!/slider/index?highlightId=mx_12_demo10" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.41',
            time: '2019-10-24',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.icon：type展示类型补齐common，pass，warn，error，<a href="#!/effects/icon" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.notice：type展示类型补齐common，pass，warn，error，<a href="#!/effects/notice?highlightId=mx_12_demo3" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.degree：type展示类型补齐common，pass，warn，error，<a href="#!/effects/degree" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-slider：显示刻度点bugfix，<a href="#!/slider/index?highlightId=mx_12_demo10" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.40',
            time: '2019-10-22',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-slide：单个滑块支持展示刻度点，<a href="#!/slider/index?highlightId=mx_12_demo10" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-slider.range：滑块选择范围支持展示刻度点，<a href="#!/slider/range?highlightId=mx_12_demo11" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-footer：支持多种对齐方式，<a href="#!/footer/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-im.wx：新版万象，<a href="#!/im/wanxiang" class="color-brand">点击查看</a>'
                }, {
                    title: '增加组件埋点：mx-header，mx-search，mx-pagination'
                }]
            }, {
                type: 'notice',
                title: '实现调整',
                subs: [{
                    title: 'mx-util/view：提取通用base view，挂载spm处理等通用方法'
                }]
            }]
        }, {
            ver: '1.3.39',
            time: '2019-10-19',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-table：调整td计算规则'
                }]
            }]
        }, {
            ver: '1.3.38',
            time: '2019-10-11',
            subs: [{
                type: 'notice',
                subs: [{
                    title: 'mx-header：替换吊头平台连接，<a href="#!/header/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-footer：替换吊尾平台连接'
                }]
            }]
        }, {
            ver: '1.3.37',
            time: '2019-10-08',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-carousel：复制节点时避免id重复，<a href="#!/carousel/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-uploader：销毁时移除添加节点，<a href="#!/uploader/index" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                subs: [{
                    title: 'mx-dialog：mxLoginView登陆框点击空白处不可关闭，<a href="#!/dialog/index?highlightId=mx_12_demo13" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dialog：去掉一个页面对于同一个弹出浮层只能一个的限制，例如同时弹出多个alert'
                }]
            }]
        }, {
            ver: '1.3.36',
            time: '2019-09-23',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-checkbox/storestate：支持清空某一个子input，<a href="#!/table/index7" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-btn：新增mode="hollow"，默认普通按钮，hover品牌色按钮，<a href="#!/btn/index?highlightId=mx_12_demo8" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-im.ww：旺旺点灯支持多种形式的展现形式，<a href="#!/im/wangwang" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                subs: [{
                    title: 'mx-header：样式调整，<a href="#!/header/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-footer：样式调整，<a href="#!/footer/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.35',
            time: '2019-09-17',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-carousel：autoplay时hover暂停播放，移除恢复自动播放，单帧不自动播放，<a href="#!/carousel/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.34',
            time: '2019-09-17',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.star：支持自定义基数count，支持动态操作，<a href="#!/effects/star" class="color-brand">点击查看</a>'
                }, {
                    title: '统一打标样式，<a href="#!/effects/icon" class="color-brand">mx-effects.icon</a>，<a href="#!/btn/index" class="color-brand">mx-btn</a>，<a href="#!/tabs/index" class="color-brand">mx-tabs</a>，<a href="#!/tabs/box" class="color-brand">mx-tabs.box</a>'
                }, {
                    title: 'mx-carousel：多帧跑马灯平滑滚动，支持左右切换trigger，支持多种轮播点样式，<a href="#!/carousel/index?highlightId=mx_12_demo5" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-header：支持自定义key，<a href="#!/header/index?highlightId=mx_12_demo5" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.33',
            time: '2019-09-05',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-tabs：支持带icon，<a href="#!/tabs/index?highlightId=mx_12_demo11" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dialog：增加 mxLoginView 规范登录框的弹出样式，<a href="#!/dialog/index?highlightId=mx_12_demo13" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.32',
            time: '2019-09-04',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-header：兼容bp的导航使用情况，支持展示用户登录信息包括登录登出操作，支持右侧自定义view，支持二级菜单，支持配置吸顶，<a href="#!/header/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-btn：支持loading btn，<a href="#!/btn/index?highlightId=mx_12_demo6" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-form：支持不包括边界的数字范围rangeborder，maxborder，minborder，<a href="#!/form/mixins?highlightId=mx_12_demo7" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-calendar.datepicker：双向绑定初始化值未绑定，<a href="#!/form/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-table/sort：去除依赖vframe.id，隔离子view的table，隔离不同table的trigger，<a href="#!/table/index10" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-checkbox/linkage：联动父节点状态bugfix，<a href="#!/table/index7" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.31',
            time: '2019-08-26',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-feedback：支持多种展开方式，<a href="#!/feedback/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-edit：支持双向绑定，<a href="#!/editor/index?highlightId=mx_12_demo5" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-gtip：支持单实例，多实例，自定义样式，<a href="#!/gtip/index" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-gtip：ondestroy unmountvframe(this.id)'
                }, {
                    title: 'mx-feedback：更新feedback版本解决乱码问题'
                }]
            }]
        }, {
            ver: '1.3.30',
            time: '2019-08-15',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-header：支持新版导航视觉规范 + 支持二级菜单，<a href="#!/header/white" target="_blank" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tabs：支持自定义打标内容，<a href="#!/tabs/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.29',
            time: '2019-08-09',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.progress：支持自定义base-opacity，渐变 opacity = base + i * (1 - base) / 9，<a href="#!/effects/progress2?highlightId=mx_12_demo32" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-checkbox/linkage：无[linkage-parent]时bugfix'
                }]
            }]
        }, {
            ver: '1.3.28',
            time: '2019-08-02',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-dialog：closable = false的情况下，点击空白区域才允许关闭浮层 ，<a href="#!/dialog/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.27',
            time: '2019-08-02',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-chart：图表支持字符串配置，<a href="#!/chart/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.26',
            time: '2019-08-01',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-chart：图表支持 iife，<a href="#!/chart/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.25',
            time: '2019-07-29',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-indics：fix 传入子view当前view的vId，导致子view的vId重复'
                }]
            }]
        }, {
            ver: '1.3.24',
            time: '2019-07-25',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-dropdown.multiple：直接配置 submit-checker 自定义提交校验函数，<a href="#!/dropdown/multiple?highlightId=mx_12_demo32" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.23',
            time: '2019-07-19',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-dialog：点击非浮层内部分时关闭浮层；beforeClose return promise，<a href="#!/dialog/index?highlightId=mx_12_demo8" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-feedback：包装新版feedback，<a href="#!/feedback/index" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-form：range范围校验bugfix，<a href="#!/form/mixins?highlightId=mx_12_demo7" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.22',
            time: '2019-07-09',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-chart：兼容无chartId'
                }]
            }]
        }, {
            ver: '1.3.21',
            time: '2019-06-28',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-dropdown：兼容选项为空时异常情况'
                }, {
                    title: 'mx-suggest：点击删除按钮清空选项并触发change，上下键切换选中选项，<a href="#!/suggest/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.20',
            time: '2019-06-28',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-preview：支持配置preview-data,预览内容和缩略图内容不一样，<a href="#!/preview/index?highlightId=mx_12_demo9" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-copy：支持直接配置copy-text，无需显示复制内容，<a href="#!/copy/index?highlightId=mx_12_demo2" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.19',
            time: '2019-06-21',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-dialog（mxModal）：window resize 时更新全屏右出浮层宽度+left，最大宽度不超过屏幕可视范围，<a href="#!/dialog/modal" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-calendar.rangepicker：支持配置min-gap（最少选择n天），max-gap（最多选择n天），支持自定义快捷日期，<a href="#!/calendar/range?highlightId=mx_12_demo22" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                title: 'bugfix',
                subs: [{
                    title: 'mx-table.sort：排序节点隔离子view，支持同view多个table排序'
                }, {
                    title: 'mx-gtip：z-index修改完100000，调整为最上层'
                }]
            }]
        }, {
            ver: '1.3.16 ~ 1.3.18',
            time: '2019-06-13',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-chart：新增图表组件，支持chartpark图表以及新特性<a href="https://yuque.antfin-inc.com/docs/share/5c7a5600-6989-48a6-8db4-424b3d5d6fcf">图表变量</a>，<a href="#!/chart/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.15',
            time: '2019-06-03',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-grid.title：标题支持自定义html内容，<a href="#!/grid/index?highlightId=mx_12_grid2" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dialog（mxModal）：window resize 时更新全屏右出浮层高度，<a href="#!/dialog/modal" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-suggest：直接配置dynamic-enter（回车直接搜索关键词），<a href="#!/suggest/index?highlightId=mx_12_demo8" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-table：加入magix.task'
                }]
            }]
        }, {
            ver: '1.3.13 ~ 1.3.14',
            time: '2019-05-30',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-effects.progress：进度条支持显示左右占比，<a href="#!/effects/progress?highlightId=mx_12_demo29" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.notice：支持innerHTML写法（与父view有数据交互时可用），支持所有颜色自定义，支持可关闭操作，<a href="#!/effects/notice?highlightId=mx_12_demo31" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dropdown：下拉选项支持html片段，<a href="#!/dropdown/index?highlightId=mx_12_demo31" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.3.12',
            time: '2019-05-22',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-btn：解决不规范iconfont居中对齐，支持自定义颜色，自定义tag，<a href="#!/btn/index" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'notice',
                title: '实现调整',
                subs: [{
                    title: '统一组件打标逻辑，<a href="#!/tabs/index" class="color-brand">底边线分组</a>，<a href="#!/tabs/box" class="color-brand">盒状分组</a>，<a href="#!/btn/index" class="color-brand">按钮</a>，<a href="#!/effects/icon" class="color-brand">checkbox + radio</a>'
                }]
            }]
        }, {
            ver: '1.3.9 ~ 1.3.11',
            time: '2019-05-14',
            subs: [{
                type: 'notice',
                title: '实现调整',
                subs: [{
                    title: '所有trigger + list类型容器加上默认高度，避免异步刷新时占位改变'
                }, {
                    title: 'mx-disabled：作为属性，动态更新的时候不会触发组件view更新，建议直接使用disabled属性'
                }]
            }, {
                type: 'add',
                subs: [{
                    title: '配色方案透出变量名'
                }]
            }]
        }, {
            ver: '1.3.1 ~ 1.3.8',
            time: '2019-04-22',
            subs: [{
                type: 'bug',
                title: '修复大改版遗留问题',
                subs: [{
                    title: 'mx-wanxiang：异步初始化，直接使用线上文件'
                }, {
                    title: 'mx-dialog：fix指定target + offset时定位错误'
                }, {
                    title: 'mx-grid：样式调整'
                }, {
                    title: '修正textarea样式'
                }, {
                    title: 'mx-effects.empty：示例更新'
                }, {
                    title: '增加iframe sandbox'
                }, {
                    title: 'mx-wanxiang：refresh时传入bizCode'
                }]
            }]
        }, {
            ver: '1.3.0',
            time: '2019-04-22',
            subs: [{
                type: 'notice',
                title: '实现调整',
                subs: [{
                    title: '去除对less变量的依赖，直接使用css变量；less变量配置依然保留兼容历史项目，建议项目中也直接css变量'
                }, {
                    title: '提取同样样式（trigger + 展开列表）：mx-trigger，mx-output，<a href="#!/style/trigger" class="color-brand">点击查看</a>如何使用组件内置class实现一个类似于dropdown，下拉框内容自定义的模块'
                }, {
                    title: '提取组件内部通用方法'
                }, {
                    title: '统一所有禁用方式为disabled，兼容所有历史配置'
                }, {
                    title: 'mx-effects.icon，mx-effects.star：调整为代码片段实现'
                }]
            }, {
                type: 'add',
                subs: [{
                    title: '点击导航logo快速切换主题'
                }, {
                    title: '在线编辑项目主题，<a href="#!/all/edit/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.ua：由于组件实现时未考虑兼容性，提供内置的浏览器切换和升级提示，<a href="#!/effects/ua" class="color-brand">点击查看</a>'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-grid：修复子节点内容过长时，父容器宽度被撑开的bug'
                }]
            }]
        }, {
            ver: '1.2.26',
            time: '2019-04-08',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-tree：支持双向绑定，切换数据时保留历史选中状态 + 历史展开收起状态，<a href="#!/tree/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tabs：支持双向绑定，<a href="#!/tabs/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-tabs.box：支持双向绑定，<a href="#!/tabs/box" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-popover：支持自定义offset + left + top，<a href="#!/popover/index" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.2.25',
            time: '2019-03-29',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-calendar：日历支持配置disabled整体禁用，<a href="#!/calendar/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-dialog：mxModal支持传target指定相对定位节点，默认相对该节点下10px居中对齐，可配置offset设置微量偏移，简化计算，<a href="#!/dialog/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-wanxiang：万象支持配置同一个页面不同参数'
                }]
            }, {
                type: 'bug',
                subs: [{
                    title: 'mx-table：修复边框样式bug'
                }]
            }]
        }, {
            ver: '1.2.24',
            time: '2019-03-27',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-table.sort：本地排序方法，非数字类型直接字符串排序，<a href="#!/table/index10" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-wanxiang：避免重复init；locationchange调用render；'
                }]
            }]
        }, {
            ver: '1.2.23',
            time: '2019-03-26',
            subs: [{
                type: 'add',
                subs: [{
                    title: 'mx-collapse：展开收起时抛出change事件，<a href="#!/collapse/index" class="color-brand">点击查看</a>'
                }, {
                    title: 'mx-effects.progress：支持渐变色，<a href="#!/effects/progress" class="color-brand">点击查看</a>'
                }]
            }]
        }, {
            ver: '1.2.22',
            time: '2019-03-21',
            subs: [{
                type: 'bug',
                subs: [{
                    title: 'mx-preview',
                    subs: [
                        '托管IntersectionObserver，防止异步组件错位',
                        '触发节点部分不可见的时候，预览完整可见'
                    ]
                }, {
                    title: 'mx-dialog：修复浮层配置优先级顺序，外部自定义属性 > 浮层内属性 > 默认属性'
                }, {
                    title: 'mx-collapse：折叠面板实现assign，传入数据不改变时不刷新组件'
                }]
            }, {
                type: 'add',
                subs: [{
                    title: 'mx-popover：支持自定义z-index'
                }, {
                    title: 'mx-table：表头吸顶时支持配置sticky-end，滚动时隐藏，滚动结束显示表头'
                }, {
                    title: 'mx-effects.progress：进度条支持配置宽度，配置文案不显示'
                }]
            }, {
                type: 'notice',
                title: '关于脚手架（zs_scaffold）和magix-pro',
                subs: [{
                    title: 'zs_scaffold：只保留各种菜单的配置示例 + 常用列表示例 + 图表场景示例'
                }, {
                    title: 'magix-pro：完成应用场景示例，包含真实的广告投放业务场景，以及跨项目mount示例'
                }]
            }]
        }, {
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
                    title: 'mx-calendar：日历默认格式YYYY-MM-DD，safari不支持YYYY-MM-DD，支持自定义formatter。'
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
                type: 'add', // add or bug or notice
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
        }]
        this.updater.digest({
            list,
            expand: 10
        });
    },
    'expand<click>'(e) {
        let { expand } = this.updater.get();
        this.updater.digest({
            expand: expand + 10
        })
    }
});