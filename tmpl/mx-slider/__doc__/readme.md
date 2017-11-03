## 滑块组件

> 该组件包含“单个滑块、范围滑块”两个子组件。


### 单滑块组件

<div style="position:relative" id="mx_1">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-slider/index?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-slider/index" target="_blank">新窗口查看示例</a>


### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| value    | 设置滑块的值 | number | 0 |
| min     | 区间最小值 | number | 0 |
| max     | 区间最大值 | number | 100 |
| step     | 步长 | number | 1 |
| width     | 宽度 | number | 340 |
| disabled     | 是否禁用 | boolean | false |
| vertical     | 是否垂直 | boolean | false |
| height     | 当垂直时，设置高度 | number | 340 |


#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| val | 设置或获取值 | number | number | &nbsp; |

> method调用方法： $('#id').invokeView('val',[20]);

#### event
#### change 滑块位置变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| value | number | value |

-----

### 范围滑块组件

<div style="position:relative" id="mx_2">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-slider/range?inline=true&id=mx_2" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-slider/range" target="_blank">新窗口查看示例</a>


### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| value    | 逗号分割的值 | string | 0,0 |
| min     | 区间最小值 | number | 0 |
| max     | 区间最大值 | number | 100 |
| step     | 步长 | number | 1 |
| width     | 宽度 | number | 340 |
| disabled     | 是否禁用 | boolean | false |
| vertical     | 是否垂直 | boolean | false |
| height     | 当垂直时，设置高度 | number | 340 |


#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| val | 设置或获取值 | array | array | &nbsp; |

> method调用方法： $('#id').invokeView('val',[[20,40]]);

#### event
#### change 滑块位置变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| value | array | value |
| start | number | 开始滑块的值 |
| end | number | 结束滑块的值 |




