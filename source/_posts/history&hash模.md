---
title: History模式和Hash模式之间的差别
---
使用Vue也有一段时间了，一直没有好好的理解过Vue-router中**history**和**hash**模式的区别，今天在这里简单记录一下自己的理解。
## 在vue中配置路由模式
```javascript
mode:"hash";
mode:"history";
```
## Hash模式
 1. **形式**
	URL: http://127.0.0.1:8848/check/01.html#red
	这个链接可以很明显的看到一个**#**号，此时的hash值可以就是#red，可以通过location.hash获取。
 2. **事件**
 	我们可以通过onHashChange事件来监听URL中hash值的改变，通过不同的hash值改变文本的颜色
	```javascript
	window.onhashchange = function(){
		console.log(location.hash)
		let color = location.hash.slice(1);
		document.getElementById("app").style.color = color;
	}
	```
 3. **特点**
 		#后面的值不会被包括在http请求中
 		http://127.0.0.1:8848/check/01.html#red
 		http://127.0.0.1:8848/check/01.html#blue
 		这两个url对于http请求来说是一样的，**因此改变hash值不会重新加载页面**
 		因此可以通过onhashchange事件来执行不同的业务逻辑，并且支持浏览器的前进和后退，但是直		  接刷新页面，url不会生改变，页面会回到最初始的状态。


![来自Vue-Router官网](https://img-blog.csdnimg.cn/20200703230820311.png)
这是引用Vue-Router的一段话，我们可以用history来代替hash模式所实现的功能

## history模式
**什么是history：**
			history是一个保存着用户在浏览器窗口中访问过的url的一个对象，属于window对象，可以通过window.history来调用。
**属性：**
		**history.length：**
				返回一个整数，保存当千会话历史访问过的url数目。
		**history.state：**
				返回当前页面的 state对象，当his对象改变时，会触发popState事件，可以传入一个回调函数，这个回调函数的参数就是一个event对象，其中的state属性就指向当前的state对象，通过history.state属性可以不用等待popstate事件而直接查看状态的方式。
**方法：**
**history.go(n)：**
在当前会话记录中，以自身为相对位置，向前或者向后访问记录
**history.back()：**
返回，等同于浏览器的后退按钮，或者history.go(-1)
**history.forword()：**
前进，等同于浏览器的前进按钮，或者history.go(1)
这三个都是跳转方法，加载不到对应页面的时候，不会报错，会静默失败。
**history.pushState()：**
此方法向浏览器历史添加了一个状态。pushState()方法带有三个参数：一个状态对象、一个标题以及一个可选的URL地址：
　	 history.pushState(state, title, url);
　     state object —— 状态对象是一个由pushState()方法创建的、与历史纪录相关的javascript对象。当用户定向到一个新的状态时，会触发popstate事件。事件的state属性包含了历史纪录的state对象。如果不需要这个对象，此处可以填null
　　title —— 新页面的标题，但是所有浏览器目前都忽略这个值，因此这里可以填null。
　　URL —— 这个参数提供了新历史纪录的地址。新URL必须和当前URL在同一个域，否则，pushState()将丢出异常。这个参数可选，如果它没有被特别标注，会被设置为文档的当前URL。
　　假定当前网址是example.com/1.html，使用pushState方法在浏览记录(history对象)中添加一个新记录：	
```javascript
var stateObj = { foo: ‘bar‘ };
history.pushState(stateObj, ‘page 2‘, ‘2.html‘);
```

　　添加上面这个新记录后，浏览器地址栏立刻显示example.com/2.html，但并不会跳转到2.html，甚至也不会检查2.html是否存在，它只是成为浏览历史中的最新记录。假如这时访问了google.com，然后点击了倒退按钮，页面的url将显示2.html，但是内容还是原来的1.html。再点击一次倒退按钮，url将显示1.html，内容不变。总之，pushState方法不会触发页面刷新，只是导致history对象发生变化，地址栏的显示地址发生变化，如果pushState的url参数，设置了一个新的锚点值(即hash)，并不会触发hashchange事件，，即使新的URL和旧的只在hash上有区别，如果设置了一个跨域网址，则会报错。这样设计的目的是，防止恶意代码让用户以为他们是在另一个网站上
**history.replaceState()：**
		history.replaceState方法的参数与pushState方法一模一样，不					同之处在于replaceState()方法会修改当前历史记录条目而并非创建新的条目。
**事件**
popstate：
当history对象发生改变时，会触发popstate事件(pushState和replace方法不会触发)
history模式的注意点
history有个问题，刷新页面经常会返回404，因为你自由修改了URL，如果访问不到对应的静态资源就会返回404，所以需要后端做一个重定向的配置，没有对应的静态资源时返回一个候选资源。
