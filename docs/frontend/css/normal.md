# 常见样式

## 滚动条

### 伪元素选择器

[点击查看详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar)

::: tip 提示

* ::-webkit-scrollbar               — 整个滚动条
* ::-webkit-scrollbar-button        — 滚动条上的按钮 (上下箭头)
* ::-webkit-scrollbar-thumb         — 滚动条上的滚动滑块
* ::-webkit-scrollbar-track         — 滚动条轨道
* ::-webkit-scrollbar-track-piece   — 滚动条没有滑块的轨道部分
* ::-webkit-scrollbar-corner        — 当同时有垂直滚动条和水平滚动条时交汇的部分
* ::-webkit-resizer                 — 某些元素的corner部分的部分样式(例:textarea的可拖动按钮)
:::

::: warning 注意

* ::-webkit-scrollbar 仅仅在支持WebKit的浏览器 (例如, 谷歌Chrome, 苹果Safari)可以使用
:::

### 本站的浏览器滚动条样式

```css
/* 滚动条样式 */
body::-webkit-scrollbar{
    /* 纵向滚动条的宽度 */
    width: 8px;
    /* 横向滚动条的高度 */
    height: 8px;
}
/* 滚动条里面小方块 */
body::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #c1c1c1;
}
/* 滚动条里面小方块hover */
body::-webkit-scrollbar-thumb:hover {
    background: #969696;
    /* 暂不生效,待研究 */
    cursor: pointer; 
}
/* 滚动条里面轨道 */
body::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #ededed;
}
```

## Loading

<loading/>
