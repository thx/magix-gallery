## 弹框组件

> 该组件包含“alert，confirm，弹出普通view”三个功能。推荐`mixins`的形式进行使用，示例代码如下


### alert与confirm
<div style="position:relative" id="mx_1">
    <iframe src="http://localhost/magix-gallery/test.html#!/mx-dialog/alert?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-dialog/alert" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| content    | 提示内容 | string |  |
| enterCallback     | 确定按钮被点击时调用 | function |  |
| cancelCallback     | 当调用confirm方法时，取消按钮被点击时调用 | function |  |
| title     | 弹出框标题 | string | 提示 |

----

### 显示普通view

<div style="position:relative" id="mx_2">
    <iframe src="http://localhost/magix-gallery/test.html#!/mx-dialog/index?inline=true&id=mx_2" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-dialog/index" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| view    | view路径，如`app/views/agreement` | string |  |
| width     | 弹出框宽度 | number | 500 |
| left     | 弹出框居左侧位置 | number | 默认水平居中，动态计算left的位置 |
| top     | 弹出框居顶部位置 | number | 100 |
| closable | 右上角是否有关闭按钮 | boolean | true |



