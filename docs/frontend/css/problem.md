# 遇见的css问题

## 1. transform属性对父容器的影响

起因: 在使用vue的`transition`组件时，写了一个`transform: translate(150px)`属性，给一个详情组件弹出隐藏加一个动效，结果发现在最开始和结束的时候页面会抖一下，发现是出现了一个滚动条导致的，可以通过设置`overflow：hidden`属性来避免。

### 父容器没有设置`overflow`属性前

```html
<div class="d1">
    <div class="d2"></div>
</div>
```

```css
.d1{
    width: 500px;
    height: 200px;
    background-color: red;
    /* overflow: auto; */
}
.d2{
    width: 500px;
    height: 150px;
    background-color: yellow;
    transform: translateX(150px);
}
```

[![IXjTW8.png](https://z3.ax1x.com/2021/11/21/IXjTW8.png)](https://imgtu.com/i/IXjTW8)

### 父容器在设置`overflow:auto`属性后

```css
.d1{
    width: 500px;
    height: 200px;
    background-color: red;
    overflow: auto;
}
```

[![IXjjwn.png](https://z3.ax1x.com/2021/11/21/IXjjwn.png)](https://imgtu.com/i/IXjjwn)
