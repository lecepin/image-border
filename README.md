# 图片加边框

写博客时，由于背景是白色的，导致文章中的白色背景图片就很丑，所以通常需要给图片加一个边框。为了实现这个功能，每次需要依赖 PS，太麻烦了。找了一些在线工具，要么把你的文件上传到它的服务器，要么上传下载太麻烦。所以也就有了这个小工具。

- 纯浏览器实现，不用担心你的图片被储存。
- 同时支持打开图片、拖动图片、粘贴图片到本工具，方便快捷。


[工具在线地址](https://lecepin.github.io/image-border/)

---

## 使用

- 上传：同时支持拖住图片文件、粘贴图片文件 和 打开图片文件
- 下载：同时支持点击 “复制”按钮再粘贴到文档中、点击“下载”按钮使用图片文件、点击“预览”按钮 右键另存为下载。


我最常用的方式：

`截图` -> `打开本工具网站` -> `Cmd + V` (在工具中加载图片) -> `Cmd + C` (工具会把图片写到剪切板里) 

然后直接在你的文档中 `Cmd + V` 使用即可。

---

![image](https://user-images.githubusercontent.com/11046969/157022951-a59ed876-61ce-4833-bd19-d6cbce42c0b6.png)


![image](https://user-images.githubusercontent.com/11046969/157580206-d763befd-ad63-496c-9713-04716ecddbb8.png)




---

基于 XState 状态机实现：

![viz-screenshot](https://user-images.githubusercontent.com/11046969/160356822-0fd9c415-dfe5-47b9-a6bf-b31aafbfe52d.jpeg)

