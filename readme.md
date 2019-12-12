### 简介
该组件库为与 [Magix](https://github.com/thx/magix) 配套的组件库，目前只存放pc端组件


### 文档地址
[https://thx.github.io/magix-gallery/](https://thx.github.io/magix-gallery/)


### 发布说明
提交的组件必须有足够的文档和测试
tmpl/mx-*
* 源码
* \_\_test\_\_
    * 所有配置说明
    * 方法
    * 示例源码，可直接拷贝


### 开发说明
1. 安装[magix-cli工具](https://thx.github.io/magix-cli-book/#/)

2. master执行mx createDaily切出日常分支

3. 执行 gulp watch 开发测试，访问test.html页面，mx daily提交到日常

4. 调整完相关逻辑，修改package.json里version + 1，执行mx publish发布，包含以下发布操作：
	* 提交到gitlab仓库zs_gallery（[git@gitlab.alibaba-inc.com:mm/zs_gallery.git](http://gitlab.alibaba-inc.com/mm/zs_gallery)）
	* 同步提交到github仓库magix-gallery（[https://github.com/thx/magix-gallery](https://github.com/thx/magix-gallery)）
    
5. 发布完成在master分支执行tnpm pub发布组件包


### 关于同步zs_gallery到magix-gallery配置
1. 命令行执行 git remote -v，当前只有一台远程主机origin
![1.jpg](https://img.alicdn.com/tfs/TB1E7iYbGSs3KVjSZPiXXcsiVXa-978-104.jpg) 

2. 使用 git remote set-url 命令远程库origin拥有多个url地址
> git remote set-url --add origin https://github.com/thx/magix-gallery.git

3. 再次执行 git remote -v，可以看到 origin 有两个 push 远程路径
![未标题-1.jpg](https://img.alicdn.com/tfs/TB1iouObUWF3KVjSZPhXXXclXXa-993-144.jpg) 

4. 此时再执行提交到origin可同时提交到两个仓库


### 添加本仓库的tnpm包发布权限
1. 执行 `tnpm login` 登录tnpm

2. 执行 `tnpm owner add [域账号] @ali/zs-gallery` 即可完成发布权限添加

