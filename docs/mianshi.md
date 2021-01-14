## 面试

## 实现图片懒加载的思路

​	首先需要判断图片是否在可视化区域内

> 判断图片所在位置是否在可视区内，图片移到可视区内进行加载，提供三种判断方法
>
> 1. offsetTop(图片距离顶部的距离) < clientHeight（网页可视化区域的高度） + scrollTop（网页滚动的距离）
>
> 2. element.getBoundingClientRect().top （原素距离顶部的高度）< clientHeight
>
> 3. [IntersectionObserver]: http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html

​	如果在可视化区域内，只需要把img 元素data-src中的地址放到src的里面就好了

## 说说你对GraphQL的理解

> GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。
>
> 1. 多终端的出现，APP、小程序、PC端都需要相同的接口，但是又略有差异，常规接口需要提供几套，GraphQL的话只需要写好查询语句即可
> 2. 天生的聚合接口，以前一个页面需要请求不同的数据，我们可以请求多个接口，我们可以让服务端进行聚合，有了GraphQL后我们可以自己去聚合想要的数据
> 3. 不用被版本困扰，之前写接口的时候为了兼容老的项目可以正常被访问，尤其是APP，线上的项目，我们接口肯定是不能影响线上的，所以有比较大的改变的时候，只能升级版本，有了GraphQL后就无需关心版本问题了，接口还是那个接口查询语句变一下就好了
> 4. 迁移很简单，服务端在之前的接口上稍加改造就好，前端写查询语句

## 要实现一个js的持续动画，你有什么比较好的方法？

> 使用[requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)

```js
window.requestAnimationFrame(callback);
参数
callback
下一次重绘之前更新动画帧所调用的函数(即上面所说的回调函数)。该回调函数会被传入DOMHighResTimeStamp参数，该参数与performance.now()的返回值相同，它表示requestAnimationFrame() 开始去执行回调函数的时刻。
返回值
一个 long 整数，请求 ID ，是回调列表中唯一的标识。是个非零值，没别的意义。你可以传这个值给 window.cancelAnimationFrame() 以取消回调函数。
```

setTimeout和setInterval的问题是，它们都不精确。它们的内在运行机制决定了时间间隔参数实际上只是指定了把动画代码添加到浏览器UI线程队列中以等待执行的时间。如果队列前面已经加入了其他任务，那动画代码就要等前面的任务完成后再执行。

requestAnimationFrame采用系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，造成过度绘制，增加开销；也不会因为间隔时间太长，使用动画卡顿不流畅，让各种网页动画效果能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果。

**如何渲染几万条数据并不卡住界面** (用到了上面的知识)

```html
 <ul>控件</ul>
  <script>
    setTimeout(() => {
      // 插入十万条数据
      const total = 100000
      // 一次插入 20 条，如果觉得性能不好就减少
      const once = 20
      // 渲染数据总共需要几次
      const loopCount = total / once
      let countOfRender = 0
      let ul = document.querySelector("ul");
      function add() {
        // 优化性能，插入不会造成回流
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < once; i++) {
          const li = document.createElement("li");
          li.innerText = Math.floor(Math.random() * total);
          fragment.appendChild(li);
        }
        ul.appendChild(fragment);
        countOfRender += 1;
        loop();
      }
      function loop() {
        if (countOfRender < loopCount) {
          window.requestAnimationFrame(add);
        }
      }
      loop();
    }, 0);
  </script>
```

## js中自定义事件的使用与触发

```javascript
var event = new Event('build');

// Listen for the event.
elem.addEventListener('build', function (e) { ... }, false);

// Dispatch the event.
elem.dispatchEvent(event);
```

## [如何解决在移动端1px的问题？](https://www.jianshu.com/p/31f8907637a6)

## 介绍下promise的特性、优缺点，内部是如何实现的？

> Promise是一种异步解决方案，Promise对象接受一个回调函数作为参数, 该回调函数接受两个参数，分别是成功时的回调resolve和失败时的回调reject；另外resolve的参数除了正常值以外， 还可能是一个Promise对象的实例；reject的参数通常是一个Error对象的实例。
>
> 1. 优点就是更好的异步解决方案
> 2. 缺点就是无法取消Promise，一旦新建它就会立即执行，无法中途取消

## 能说一下你项目中遇到了哪些安全问题么，一般都是怎么解决的?

> 具体可以查看这篇文章[2020年前端安全综述-填坑记](https://juejin.cn/post/6898124066063024136)
>
> xss、csrf、爬虫、薅羊毛等安全问题
>
> 传输加密、接口加签、环境变量、token、输入校验等

## webpack打包速度太慢怎么办？

> 使用高版本的 Webpack、
>
> 多线程/多实例构建、缩小打包作用域、
>
> 充分利用缓存提升二次构建速度、DLL

## vue3.0为什么要引入CompositionAPI？

> 1. 更好的代码组织，options api造成了代码的跳来跳去
> 2. 逻辑复用更加的方便，虽然mixin也能够很好的复用代码，但是当mixin多了以后就不知道变量哪里来的了，还会造成命名冲突
> 3. 没有让人捉摸不透的this

## 双向绑定和vuex是否冲突？

> 是有冲突的，其实官网上就有解释https://vuex.vuejs.org/zh/guide/forms.html v-model会去修改state的值，
>
> 但是vuex数据修改又必须经过mutation，这样就冲突了 简单的办法就是不要使用v-model，自己进行数据绑定即可


