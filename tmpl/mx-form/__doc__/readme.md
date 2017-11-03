## 表单组件
> 该组件包含同步界面到数据的同步，校验表单功能

<div style="position:relative" id="mx_1">
    <iframe src="http://localhost/magix-gallery/test.html#!/mx-form/index?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-form/index" target="_blank">新窗口查看示例</a>

### API

#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| isValid | 获取表单项是否全部通过了校验 | void | boolean | &nbsp; |
| fromKeys | 从数据中获取指定key的数据 | data,keys | array | &nbsp; |

> method调用方法： this.isValid(); this.fromKeys(data,'key1,key2');


#### 校验规则

| 规则名 | 说明 | 类型 |
| -------- | -------- | -------- |
| required | 必须输入 | boolean |
| number | 输入必须是数字 | boolean |
| length | 长度范围校验，如length:[20,50] | array |
| blength | 字符长度范围校验，一个汉字2个字符，如blength:[20,50] | array |
| minLength | 最小长度 | integer |
| maxLength | 最大长度 | integer |
| equalto | 验证是否与另一个值相等，如equalto:'#passwd' 与另外一个节点的值相等 | string |
| pattern | 使用正则来验证 | string |
| max | 数值的最大值 | interger |
| min | 数值的最小值 | interger |

#### 综合示例
```html
<div class="form-item clearfix">
    <label class="form-label form-required">活动名称：</label>
    <div class="form-content"><input class="input" placeholder="请填写活动名称" value="<%:name{required:true,blength:[20,50]}%>" /></div>
</div>
```


## 关于表单拆分

> 实际开发中，通常一个复杂的表单会拆分成n个子view，子view再拆分来分解复杂的需求。数据传递、获取子view的数据及校验子view通常会比较麻烦，这里展示下这3个功能的实现


### 向子view传递数据

```html
<mx-view path="path/to/sub/view" data="<%@ selfData %>"></mx-view>
```

```js
//path/to/sub/view

let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@sub.html',
    init(extra) {
        this.$data = extra.data;
    },
    render() {
        let me = this;
        me.updater.digest();
    }
});
```

> 该示例把当前view的updater中的selfData数据传递给子view，子view在init方法中通过data来接收



> 如果想把当前view中的所有数据传递给子view，可以使用this关键字，如
```html
<mx-view path="path/to/sub/view" data="<%@ this %>"></mx-view>
```

### 校验子view

> 校验子view时，子view只需要写好绑定的校验规则即可。然后在父view调用this.isValid()方法即可完成所有子view的校验


> 如何校验复杂的规则，比如要对几个数据进行组合校验，那么这个校验的规则统一写在最外层的表单view上。子view仅做根据数据展现和输入数据，不再承担其它功能。


### 从子view获取数据

> 仍然通过绑定表达式进行，如



```html
<mx-view path="path/to/sub/view" data="<%@ this %>" <%:name{from:'name'}%> <%:nick{from:'nick'}%>></div>
```

> 该示例表示把子view中的name,nick同步到自身的name,nick上。

> 孙view也是如此，先把子view上的数据同步到自身，然后才可以把自身的数据同步到父view

