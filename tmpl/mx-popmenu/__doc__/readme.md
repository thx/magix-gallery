## 弹出菜单组件

> 该组件仅控制行为，不提供html代码。


<div style="position:relative" id="mx_1">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-popmenu/index?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>

<a href="https://thx.github.io/magix-gallery/#!/mx-popmenu/index" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| related    | 关联的节点id，包含#号 | string |  |
| placement | 弹出菜单在目标的方位，仅top与bottom | string | bottom |
| align | 弹出菜单与目标的对齐方式，仅left与right | string | left |

#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| @{show} | 显示菜单 |  |  |  |
| @{hide} | 隐藏菜单 |  |  | &nbsp; |

> method调用方法： $('#id').invokeView('@{hide}');