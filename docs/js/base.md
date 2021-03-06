## js的数据类型 值是如何存储的
JavaScript一共有8种数据类型，其中有7种基本数据类型：

    Undefined、Null、Boolean、Number、String、Symbol（es6新增，表示独一无二的值）和BigInt（es10新增)

1种引用数据类型——Object（Object本质上是由一组无序的名值对组成的）。里面包含 function、Array、Date等。JavaScript不支持任何创建自定义类型的机制，而所有值最终都将是上述 8 种数据类型之一。
原始数据类型：直接存储在栈（stack）中，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。
引用数据类型：同时存储在栈（stack）和堆（heap）中，占据空间大、大小不固定。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。
  <!-- <img :src="$withBase('/logo.jpg')" alt="mixureSecure"> -->
## js的数据类型的转换 
在 JS 中类型转换只有三种情况，分别是：
    转换为布尔值（调用Boolean()方法）
    转换为数字（调用Number()、parseInt()和parseFloat()方法）
    转换为字符串（调用.toString() 或者String()方法）
::: warning 注意
null和underfined没有.toString方法 
:::
  <img :src="$withBase('/js/zhuanhuan.jpg')" alt="mixureSecure">

## JS中数据类型的判断

typeof，instanceof，constructor，Object.prototype.toString.call()

**（1）typeof**

typeof 对于原始类型来说，除了 null 都可以显示正确的类型

```
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object     []数组的数据类型在 typeof 中被解释为 object
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object     null 的数据类型被 typeof 解释为 object
复制代码
```

typeof 对于对象来说，除了函数都会显示 object，所以说 typeof 并不能准确判断变量到底是什么类型,所以想判断一个对象的正确类型，这时候可以考虑使用 instanceof

**（2）instanceof 判断对象**

instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype。

```
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false  
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true    
// console.log(undefined instanceof Undefined); ReferenceError: Undefined is not defined
// console.log(null instanceof Null); ReferenceError: Null is not defined
复制代码
```
可以看出直接的字面量值判断数据类型，instanceof可以精准判断引用数据类型（Array，Function，Object），而基本数据类型不能被instanceof精准判断。
我们来看一下 instanceof 在MDN中的解释：instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。其意思就是判断对象是否是某一数据类型（如Array）的实例，请重点关注一下是判断一个对象是否是数据类型的实例。在这里字面量值，2， true ，'str'不是实例，所以判断值为false。

**（3）constructor**

```
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true
```
  > 这里有一个坑，如果我创建一个对象，更改它的原型，constructor就会变得不可靠了 
```
function Fn(){};
Fn.prototype=new Array();
var f=new Fn();
console.log(f.constructor===Fn);    // false
console.log(f.constructor===Array); // true 
```

**（4）Object.prototype.toString.call()** 
使用 Object 对象的原型方法 toString ，使用 call 进行狸猫换太子，借用Object的 toString  方法
```
var a = Object.prototype.toString; 
console.log(a.call(2));  [object Number]
console.log(a.call(true));  [object Boolean]
console.log(a.call('str'));  [object String]
console.log(a.call([])); [object Array]
console.log(a.call(function(){}));  [object Function]
console.log(a.call({}));  [object Object]
console.log(a.call(undefined)); [object Undefined]
console.log(a.call(null));  [object Null]
```
## null 和 undefined 的区别？

首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。

undefined 代表的含义是未定义， null 代表的含义是空对象（其实不是真的对象，请看下面的**注意**！）。一般变量声明了但还没有定义的时候会返回 undefined，null 主要用于赋值给一些可能会返回对象的变量，作为初始化。 
::: warning
其实 null 不是对象，虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来 
:::

undefined 在 js 中不是一个保留字，这意味着我们可以使用 undefined 来作为一个变量名，这样的做法是非常危险的，它 会影响我们对 undefined 值的判断。但是我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。

当我们对两种类型使用 typeof 进行判断的时候，Null 类型化会返回 “object”，这是一个历史遗留的问题。当我们使用双等 号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。

详细资料可以参考：[《JavaScript 深入理解之 undefined 与 null》](http://cavszhouyou.top/JavaScript深入理解之undefined与null.html)

## {}和[]的valueOf和toString的结果？

```
{} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"

[] 的 valueOf 结果为 [] ，toString 的结果为 ""
```
## JS数组和字符串常用方法
  <img :src="$withBase('/js/shuzu.jpg')" alt="mixureSecure">
  <img :src="$withBase('/js/zifu.png')" alt="mixureSecure">

## DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？
（1）创建新节点
```
  createDocumentFragment()    //创建一个DOM片段
  createElement()   //创建一个具体的元素
  createTextNode()   //创建一个文本节点
```
（2）添加、移除、替换、插入
```
appendChild(node)
removeChild(node)
replaceChild(new,old)
insertBefore(new,old)
```
（3）查找
```
getElementById();
getElementsByName();
getElementsByTagName();
getElementsByClassName();
querySelector();
querySelectorAll();
```
（4）属性操作
```
getAttribute(key);
setAttribute(key, value);
hasAttribute(key);
removeAttribute(key);
```