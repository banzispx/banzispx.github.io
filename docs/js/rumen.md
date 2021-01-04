## Javascript 的作用域和作用域链

**作用域：** 作用域是定义变量的区域，它有一套访问变量的规则，这套规则来管理浏览器引擎如何在当前作用域以及嵌套的作用域中根据变量（标识符）进行变量查找。

**作用域链：** 作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和 函数。

作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前 端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。

当我们查找一个变量时，如果当前执行环境中没有找到，我们可以沿着作用域链向后查找。

作用域链的创建过程跟执行上下文的建立有关....

详细资料可以参考： [《JavaScript 深入理解之作用域链》](http://cavszhouyou.top/JavaScript深入理解之作用域链.html)也可以看看我的文章：[「前端料包」深究JavaScript作用域（链）知识点和闭包](https://juejin.im/post/5e93e4eaf265da47fc0ce177)

## javascript 创建对象的几种方式？
1. Object构造函数 let obj = new Object()
2. 字面量方式 
   ```
   let obj = {
   	name: 'xiaoming'
   }
   ```
3. 工厂函数
   ```
   function createPerson(name, age, job){
       var o = new Object();
       o.name = name;
       o.age = age;
       o.job = job;
       o.sayName = function(){
           alert(this.name);
       };
       return o;
   }
   ```
4. 构造函数模式
   ```
   function createPerson(name, age, job){
   	this.name = name;
   	this.age = age;
   }
   ```
5. 构造函数 + 原型
  ```
   function createPerson(name, age, job){
   	this.name = name;
   	this.age = age;
   }
   createPerson.prototype.eat = function () {}
   ```
## 寄生式组合继承的实现？

```
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log("My name is " + this.name + ".");
};

function Student(name, grade) {
  Person.call(this, name);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayMyGrade = function() {
  console.log("My grade is " + this.grade + ".");
  
};
```

## 谈谈你对this、call、apply和bind的理解
详情可看我之前的文章：[「前端料包」一文彻底搞懂JavaScript中的this、call、apply和bind](https://juejin.im/post/5de4fe1d5188255e8b76e1f2)

1. 在浏览器里，在全局范围内this 指向window对象；
2. 在函数中，this永远指向最后调用他的那个对象；
3. 构造函数中，this指向new出来的那个新的对象；
4. call、apply、bind中的this被强绑定在指定的那个对象上；
5. 箭头函数中this比较特殊,箭头函数this为父作用域的this，不是调用时的this.要知道前四种方式,都是调用时确定,也就是动态的,而箭头函数的this指向是静态的,声明的时候就确定了下来；
6. apply、call、bind都是js给函数内置的一些API，调用他们可以为函数指定this的执行,同时也可以传参。

## js 获取原型的方法？

- p.**proto**
- p.constructor.prototype
- Object.getPrototypeOf(p)

## 闭包
其实闭包的本质就是作用域链的一个特殊的应用，只要了解了作用域链的创建过程，就能够理解闭包的实现原理。
## 事件委托是什么？

**事件委托** 本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到 目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理。

使用事件代理我们可以不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗。并且使用事件代理我们还可以实现事件的动态绑定，比如说新增了一个子节点，我们并不需要单独地为它添加一个监听事件，它所发生的事件会交给父元素中的监听函数来处理。

## 什么是事件冒泡？

事件冒泡刚好与事件捕获相反，`当前元素---->body ----> html---->document ---->window`。当事件发生在DOM元素上时，该事件并不完全发生在那个元素上。在冒泡阶段，事件冒泡，或者事件发生在它的父代，祖父母，祖父母的父代，直到到达window为止。
## js 延迟加载的方式有哪些？

js 的加载、解析和执行会阻塞页面的渲染过程，因此我们希望 js 脚本能够尽可能的延迟加载，提高页面的渲染速度。
我了解到的几种方式是：
1. 将 js 脚本放在文档的底部，来使 js 脚本尽可能的在最后来加载执行。
2. 给 js 脚本添加 defer属性，这个属性会让脚本的加载与文档的解析同步解析，然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。多个设置了 defer 属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器中可能不是这样。
3. 给 js 脚本添加 async属性，这个属性会使脚本异步加载，不会阻塞页面的解析过程，但是当脚本加载完成后立即执行 js脚本，这个时候如果文档没有解析完成的话同样会阻塞。多个 async 属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。
4. 动态创建 DOM 标签的方式，我们可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本

## arguments 的对象是什么？

arguments对象是函数中传递的参数值的集合。它是一个类似数组的对象，因为它有一个length属性，我们可以使用数组索引表示法arguments[1]来访问单个值，但它没有数组中的内置方法，如：forEach、reduce、filter和map。
我们可以使用Array.prototype.slice将arguments对象转换成一个数组。
```
function one() {
  return Array.prototype.slice.call(arguments);
}
```

注意:箭头函数中没有arguments对象。
## 哪些操作会造成内存泄漏？

- 1.意外的全局变量
- 2.被遗忘的计时器或回调函数
- 3.脱离 DOM 的引用
- 4.闭包

- 第一种情况是我们由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。
- 第二种情况是我们设置了`setInterval`定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。
- 第三种情况是我们获取一个DOM元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回收。
- 第四种情况是不合理的使用闭包，从而导致某些变量一直被留在内存当中。

## ECMAScript 2015（ES6）有哪些新特性？

- 块作用域
- 类
- 箭头函数
- 模板字符串
- 加强的对象字面
- 对象解构
- Promise
- 模块
- Symbol
- 代理（proxy）Set
- 函数默认参数
- rest 和展开
## 垃圾回收

引用计数（reference counting）

在内存管理环境中，对象 A 如果有访问对象 B 的权限，叫做对象 A 引用对象 B。引用计数的策略是将“对象是否不再需要”简化成“对象有没有其他对象引用到它”，如果没有对象引用这个对象，那么这个对象将会被回收。
标记-清除（mark and sweep）

这是 JavaScript 中最常见的垃圾回收方式。为什么说这是种最常见的方法，因为从 2012 年起，所有现代浏览器都使用了标记-清除的垃圾回收方法，除了低版本 IE...它们采用的是引用计数方法。

那什么叫标记清除呢？JavaScript 中有个全局对象，浏览器中是 window。定期的，垃圾回收期将从这个全局对象开始，找所有从这个全局对象开始引用的对象，再找这些对象引用的对象...对这些活着的对象进行标记，这是标记阶段。清除阶段就是清除那些没有被标记的对象。
## Set、 Map
  ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
  >Set本身是一个构造函数，用来生成 Set 数据结构 不会添加重复的值。

  Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构=>> 类数组）作为参数，用来初始化。

    // 去除数组的重复成员
    [...new Set(array)]
    [...new Set('ababbc')].join('')
    // "abc" 字符串里面的重复字符。

  ::: warning
  在 Set 内部，两个NaN是相等的。两个对象总是不相等的
  Array.from方法可以将 Set 结构转为数组。
  function dedupe(array) {
    return Array.from(new Set(array));
  }
  dedupe([1, 1, 2, 3]) // [1, 2, 3]
  :::
  Set 结构的实例有以下属性。

- `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
- `Set.prototype.size`：返回`Set`实例的成员总数。

Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

- `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值。

另外还有`WeakSet`， 与 `Set` 类似，也是不重复的值的集合。但是 `WeakSet` 的成员只能是对象，而不能是其他类型的值。`WeakSet` 中的对象都是弱引用，即垃圾回收机制不考虑 `WeakSet`对该对象的引用。

- Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
- WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。但是 WeakMap 只接受对象作为键名（ null 除外），不接受其他类型的值作为键名。而且 WeakMap 的键名所指向的对象，不计入垃圾回收机制。
## 什么是高阶函数？

高阶函数只是将函数作为参数或返回值的函数。

##  手动实现 `Array.prototype.map 方法`

map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

```
function map(arr, mapCallback) {
  // 首先，检查传递的参数是否正确。
  if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') { 
    return [];
  } else {
    let result = [];
    // 每次调用此函数时，我们都会创建一个 result 数组
    // 因为我们不想改变原始数组。
    for (let i = 0, len = arr.length; i < len; i++) {
      result.push(mapCallback(arr[i], i, arr)); 
      // 将 mapCallback 返回的结果 push 到 result 数组中
    }
    return result;
  }
}
复制代码
```

## 手动实现`Array.prototype.filter`方法

`filter()`方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

```
function filter(arr, filterCallback) {
  // 首先，检查传递的参数是否正确。
  if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') 
  {
    return [];
  } else {
    let result = [];
     // 每次调用此函数时，我们都会创建一个 result 数组
     // 因为我们不想改变原始数组。
    for (let i = 0, len = arr.length; i < len; i++) {
      // 检查 filterCallback 的返回值是否是真值
      if (filterCallback(arr[i], i, arr)) { 
      // 如果条件为真，则将数组元素 push 到 result 中
        result.push(arr[i]);
      }
    }
    return result; // return the result array
  }
}
复制代码
```

##  手动实现`Array.prototype.reduce`方法

[reduce()]() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

```
function reduce(arr, reduceCallback, initialValue) {
  // 首先，检查传递的参数是否正确。
  if (!Array.isArray(arr) || !arr.length || typeof reduceCallback !== 'function') 
  {
    return [];
  } else {
    // 如果没有将initialValue传递给该函数，我们将使用第一个数组项作为initialValue
    let hasInitialValue = initialValue !== undefined;
    let value = hasInitialValue ? initialValue : arr[0];
   、

    // 如果有传递 initialValue，则索引从 1 开始，否则从 0 开始
    for (let i = hasInitialValue ? 1 : 0, len = arr.length; i < len; i++) {
      value = reduceCallback(value, arr[i], i, arr); 
    }
    return value;
  }
}
```

