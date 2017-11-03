## 菜单组件

<div style="position:relative" id="mx_1">
    <iframe src="http://localhost/magix-gallery/test.html#!/mx-menu/index?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-menu/index" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| list    | 列表数组，对象数组，如[{id:1,text:'a'}] | array |  |
| textKey     | 渲染text时读取的key | string |  |
| valueKey     | 渲染value时读取的key | string |  |
| parentKey     | 数据关联时的父key | string |  |
| width     | 菜单宽度 | number | 340 |

#### event
#### picked 菜单点击时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| item | any | 选中的数据对象 |

