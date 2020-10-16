let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@update.less');

module.exports = Magix.View.extend({
    tmpl: '@update.html',
    render() {
        let list = [{
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
                    title: 'mx-btn：新增hollow="true"，默认普通按钮，hover品牌色按钮，<a href="#!/btn/index?highlightId=mx_12_demo8" class="color-brand">点击查看</a>'
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
                    title: 'mx-effects.progress：进度条支持显示左右占比，<a href="#!/effects/progress1?highlightId=mx_12_demo29" class="color-brand">点击查看</a>'
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
                    title: 'mx-effects.progress：支持渐变色，<a href="#!/effects/progress1" class="color-brand">点击查看</a>'
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
            list
        });
    }
});