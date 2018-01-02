/**
 * magix gallery
 */
declare namespace MagixGallery {
    /**
     * view dom事件对象
     */
    interface IViewDOMEvent extends MouseEvent, KeyboardEvent {
        /**
         * 事件参数
         */
        params: {
            readonly [key: string]: any
        },
        /**
         * 拥有mx-事件的dom节点
         */
        readonly eventTarget: HTMLElement
    }
    /**
     * change事件接口
     */
    interface IChangeEvent extends IViewDOMEvent {
        /**
         * 固定的change字符串
         */
        readonly type: 'change'
    }
    /**
     * 日历组件
     */
    namespace Calendar {
        /**
         * 日期范围对象
         */
        type DateRangeDescriptor = {
            /**
             * 开始日期
             */
            start: Date
            /**
             * 结束日期
             */
            end: Date
            /**
             * 开始日期字符串
             */
            startStr: string
            /**
             * 结束日期字符串
             */
            endStr: string
            /**
             * 形如yyyy-mm-dd格式化日期的字符串
             */
            formatter: string
            /**
             * 如果日期是快捷日期，则该值表示快捷日期的key
             */
            quickDateKey?: string
            /**
             * 如果日期是快捷日期，则该值表示快捷日期的文本显示
             */
            quickDateText?: string
        }
        /**
         * 快捷日期描述对象
         */
        type QuickDateDescriptor = {
            /**
             * 起始日期
             */
            start: Date
            /**
             * 结束日期
             */
            end: Date
            /**
             * 快捷日期说明文本
             */
            text: string
        }
        /**
         * 日历change事件对象
         */
        interface ChangeEvent extends IChangeEvent {
            /**
             * 形如1986-03-02的日期字符串
             */
            readonly date: string
            /**
             * 如果日历显示时间，则时间形如12:12:12的字符串
             */
            readonly time?: string | null
        }
        /**
         * 日期范围change事件对象
         */
        interface RangeChangeEvent extends IChangeEvent {
            /**
             * 日期范围对象
             */
            readonly dates: DateRangeDescriptor
        }
    }
    /**
     * 颜色组件
     */
    namespace Color {
        /**
         * 颜色change事件对象
         */
        interface ChangeEvent extends IChangeEvent {
            /**
             * 形如#ff00ff十六进制的颜色字符串
             */
            readonly color: string
        }
    }
    /**
     * 复制组件
     */
    namespace Copy {
        /**
         * 成功事件对象
         */
        interface SuccessEvent extends IViewDOMEvent {
            /**
             * 事件类型
             */
            readonly type: 'success'
        }
        /**
         * 错误事件对象
         */
        interface ErrorEvent extends IViewDOMEvent {
            /**
             * 事件类型
             */
            readonly type: 'error'
        }
    }

    /**
     * 天选择组件
     */
    namespace Day {
        /**
         * 天描述对象
         */
        type DaysDescriptor = {
            /**
             * key表示年份，value是选中的日期
             */
            readonly [year: string]: string[]
        }
        /**
         * 天选择change事件对象
         */
        interface ChangeEvent extends IChangeEvent {
            /**
             * 选中的天对象
             */
            readonly days: DaysDescriptor
        }
    }
    /**
     * 对话框组件
     */
    namespace Dialog {
        /**
         * 对话框mxDialog方法的返回值对象
         */
        type DialogReturned = {
            /**
             * 关闭打开的dialog
             */
            close(): void
            /**
             * 当dialog关闭时调用
             */
            whenClose(fn?: () => void): void
        }
        /**
         * 对话框初始化对象
         */
        type DialogOptions = {
            /**
             * 标题
             */
            title?: string
            /**
             * 是否模态对话框
             */
            modal?: boolean
            /**
             * 对话框的宽度
             */
            width?: number
            /**
             * 是否有关闭按钮
             */
            closable?: boolean
            /**
             * 左侧位置
             */
            left?: number
            /**
             * 顶部位置
             */
            top?: number
            /**
             * 其它根据view提供的配置
             */
            [key: string]: any
        }
    }

    /**
     * 拖动选择组件
     */
    namespace Dragselect {
        /**
         * 被选择的节点发生改变时的事件对象
         */
        interface ChangeEvent extends IChangeEvent {
            /**
             * 指示node节点是添加还是移除选区
             */
            readonly action: 'add' | 'remove'
            /**
             * 指示node节点是点击还是拖动进行的操作
             */
            readonly mode: 'click' | 'drag'
            /**
             * 被添加或移除到选区的节点
             */
            readonly node: HTMLElement
        }
    }
    /**
     * 拖动排序组件
     */
    namespace Dragsort {
        /**
         * 开始拖动事件对象
         */
        interface DragBeginEvent extends IViewDOMEvent {
            /**
             * dragbegin字符串
             */
            readonly type: 'dragbegin'
            /**
             * 拖动的节点
             */
            readonly dragNode: HTMLElement
            /**
             * 拖动的节点所在的父节点
             */
            readonly dragZone: HTMLElement
        }
        /**
         * 拖进某个接受拖放区域时触发
         */
        interface EnterZoneEvent extends IViewDOMEvent {
            /**
             * enterzone字符串
             */
            readonly type: 'enterzone'
            /**
             * 区域对象
             */
            readonly zone: HTMLElement
            /**
             * 改变鼠标指针的方法
             * @param state 当为true时显示可接收，否则显示不可接受
             */
            changePointer(state?: boolean): void
        }
        /**
         * 拖离某个接受拖放区域时触发
         */
        interface LeaveZoneEvent extends IViewDOMEvent {
            /**
             * leavezone字符串
             */
            readonly type: 'leavezone'
            /**
             * 区域对象
             */
            readonly zone: HTMLElement
            /**
             * 改变鼠标指针的方法
             * @param state 当为true时显示可接收，否则显示不可接受
             */
            changePointer(state?: boolean): void
        }
        /**
         * 拖动结束事件对象
         */
        interface DragFinishEvent extends IViewDOMEvent {
            /**
             * dragfinish字符串
             */
            readonly type: 'dragfinish'
            /**
             * 指示鼠标是否有移动过
             */
            readonly moved: boolean
            /**
             * 拖动的节点
             */
            readonly dragNode: HTMLElement
            /**
             * 拖动的节点所在的父节点
             */
            readonly dragZone: HTMLElement
            /**
             * 拖放的节点
             */
            readonly dropNode: HTMLElement
            /**
             * 拖放的节点所在的父节点
             */
            readonly dropZone: HTMLElement
            /**
             * 指示是否在接收拖放区域外释放的鼠标
             */
            readonly outZone: boolean
        }
    }

    /**
     * 下拉框组件
     */
    namespace Dropdown {
        /**
         * 下拉框change事件对象
         */
        interface ChangeEvent extends IChangeEvent {
            /**
             * 被选中的下拉项数据对象
             */
            readonly item: any
            /**
             * 包含读取text,value值的对象
             */
            readonly keys: {
                readonly text: string
                readonly value: string
            }
            /**
             * 被选中的值
             */
            readonly value: any
            /**
             * 被选中的文本
             */
            readonly text: string
        }
        /**
         * 多选框change事件对象
         */
        interface MultipleChangeEvent extends IChangeEvent {
            /**
             * 包含读取text,value值的对象
             */
            readonly keys: {
                readonly text: string
                readonly value: string
            }
            /**
             * 逗号分割的选中的多个value的值
             */
            readonly values: string
        }
        /**
         * focusin事件对象
         */
        interface FocusinEvent extends IViewDOMEvent {
            /**
             * focusin字符串
             */
            readonly type: 'focusin'
        }

        /**
         * focusout事件对象
         */
        interface FocusoutEvent extends IViewDOMEvent {
            /**
             * focusout字符串
             */
            readonly type: 'focusout'
        }
    }
    /**
     * 小时选择组件
     */
    namespace Hour {
        /**
         * 小时change事件对象
         */
        interface ChangeEvent extends IChangeEvent {
            /**
             * 包含选中小时的字符串
             */
            readonly range: string
        }
        /**
         * 天小时change事件对象
         */
        interface DayChangeEvent extends IChangeEvent {
            /**
             * 包含选中小时的字符串
             */
            readonly hours: string
        }
        /**
         * 周小时change事件对象
         */
        interface WeekChangeEvent extends IChangeEvent {
            /**
             * 包含24小时的长度为7的数组
             */
            readonly days: string[]
        }
    }

    /**
     * 联动组件
     */
    namespace Linkage {
        /**
         * 联动change事件对象
         */
        interface ChangeEvent extends IChangeEvent {
            /**
             * 包含选中内容的数组
             */
            readonly selected: string[]
        }
    }
    /**
     * 菜单组件
     */
    namespace Menu {
        /**
         * 菜单项被选择后的事件对象
         */
        interface PickEvent extends IViewDOMEvent {
            /**
             * pick字符串
             */
            readonly type: 'pick'
            /**
             * 被选中的菜单项数据对象
             */
            readonly item: any
        }
    }

    /**
     * 数字输入组件
     */
    namespace Number {
        /**
         * input事件对象
         */
        interface InputEvent extends IViewDOMEvent {
            /**
             * input字符串
             */
            readonly type: 'input'
            /**
             * 当前输入框内的值
             */
            readonly value: string
        }
        /**
         * change事件对象
         */
        interface ChangeEvent extends IChangeEvent {
            /**
             * 当前输入框内的值
             */
            readonly value: string
        }
    }

    /**
     * 分页组件
     */
    namespace Pagination {
        /**
         * change事件对象
         */
        interface ChangeEvent extends IChangeEvent {
            /**
             * 当前第几页
             */
            readonly page: number
            /**
             * 每页显示多少条
             */
            readonly size: number
        }
    }
    /**
     * 操作确认弹出组件
     */
    namespace Popconfirm {
        /**
         * 确定按钮点击后的事件对象
         */
        interface EnterEvnet extends IViewDOMEvent {
            /**
             * enter字符串
             */
            readonly type: 'enter'
        }
    }
    /**
     * 评分组件
     */
    namespace Rating {
        /**
         * 移到某个星星上的事件对象
         */
        interface ItemOverEvent extends IViewDOMEvent {
            /**
             * itemover字符串
             */
            readonly type: 'itemover'
            /**
             * 分值
             */
            readonly value: number
        }

        /**
         * 移出某个星星上的事件对象
         */
        interface ItemOutEvent extends IViewDOMEvent {
            /**
             * itemout字符串
             */
            readonly type: 'itemout'
            /**
             * 分值
             */
            readonly value: number
        }
        /**
         * change事件对象
         */
        interface ChangeEvent extends IChangeEvent {
            /**
             * 分值
             */
            readonly value: number
        }
    }
    /**
     * 定时运行组件
     */
    namespace Runner {
        /**
         * 合并定时器对象
         */
        interface FX {
            /**
             * 初始化
             * @param interval 间隔
             * @param alg 算法
             */
            new(interval?: number, alg?: (v: number) => number): FX
        }
    }
    /**
     * 滑块组件
     */
    namespace Slider {
        /**
         * change事件对象
         */
        interface ChangeEvent extends IChangeEvent {
            /**
             * 滑块值
             */
            readonly value: number
        }
        /**
         * 范围change事件对象
         */
        interface RangeChangeEvent extends IChangeEvent {
            /**
             * 开始滑块的值
             */
            start: number
            /**
             * 结束滑块的值
             */
            end: number
            /**
             * 由start,end组合成的值
             */
            value: number[]
        }
    }
    /**
     * suggest组件
     */
    namespace Suggest {
        /**
         * 建议项被选择后的事件对象
         */
        interface PickEvent extends IViewDOMEvent {
            /**
             * pick字符串
             */
            readonly type: 'pick'
            /**
             * 被选中的建议项数据对象
             */
            readonly item: any
        }
        /**
         * 列表显示事件对象
         */
        interface ShowListEvent extends IViewDOMEvent {
            /**
             * showlist字符串
             */
            readonly type: 'showlist'
        }
        /**
         * 列表隐藏事件对象
         */
        interface HideListEvent extends IViewDOMEvent {
            /**
             * hidelist字符串
             */
            readonly type: 'hidelist'
        }
    }
    /**
     * 标签选择组件
     */
    namespace Taginput {
        /**
         * 标签change事件
         */
        interface ChangeEvent extends IChangeEvent {
            /**
             * 选中的ids数组
             */
            readonly ids: string
            /**
             * 选中的对象，方便开发者获取其它信息
             */
            readonly items: any[]
        }
    }
    /**
     * 时间组件
     */
    namespace Time {
        /**
         * 时间改变组件
         */
        interface ChangeEvent extends IChangeEvent {
            /**
             * 形如12:12:12的字符串
             */
            readonly time: string
        }
    }
    /**
     * 上传组件
     */
    namespace Uploader {
        /**
         * start事件对象
         */
        interface StartEvent extends IViewDOMEvent {
            /**
             * start字符串
             */
            readonly type: 'start'
            /**
             * 文件输入框对象
             */
            readonly files: FileList
        }

        /**
         * error事件对象
         */
        interface ErrorEvent extends IViewDOMEvent {
            /**
             * error字符串
             */
            readonly type: 'error'
            /**
             * 错误对象
             */
            readonly error: Error
        }

        /**
         * progress事件对象
         */
        interface ProgressEvent extends IViewDOMEvent {
            /**
             * progress字符串
             */
            readonly type: 'progress'
            /**
             * 0-1之间的上传进度
             */
            readonly percent: number
        }

        /**
         * success事件对象
         */
        interface SuccessEvent extends IViewDOMEvent {
            /**
             * success字符串
             */
            readonly type: 'success'
            /**
             * 文件输入框对象
             */
            readonly files: FileList
            /**
             * 服务器返回的数据对象
             */
            readonly response: Object
        }
    }
}