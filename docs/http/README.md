## **介绍一下HTTP 常见状态码**

RFC 规定 HTTP 的状态码为**「三位数」**，第一个数字定义了响应的类别，被分为五类:

- **「1xx」**: 代表请求已被接受，需要继续处理。
- **「2xx」**: 表示成功状态。
- **「3xx」**: 重定向状态。
- **「4xx」**: 客户端错误。
- **「5xx」**: 服务器端错误。

### 1xx 信息类

接受的请求正在处理，信息类状态码。

### 2xx 成功

- 200 OK 表示从客户端发来的请求在服务器端被正确请求。
- 204 No content，表示请求成功，但没有资源可返回。
- 206 不完全的响应: 响应状态码 206，只返回局部的信息。

### 3xx 重定向

- 301 moved permanently，永久性重定向，表示资源已被分配了新的 URL，这时应该按 Location 首部字段提示的 URI 重新保存。
- 302 found，临时性重定向，表示资源临时被分配了新的 URL。
- 303 see other，表示资源存在着另一个 URL，应使用 GET 方法获取资源。
- 304 not modified，当协商缓存命中时会返回这个状态码。
- 307 temporary redirect，临时重定向，和302含义相同,不会改变method

> 当 301、302、303 响应状态码返回时，几乎所有的浏览器都会把 POST 改成 GET，并删除请求报文内的主体，之后请求会自动再次发送 301、302 标准是禁止将 POST 方法改变成 GET 方法的，但实际使用时大家都会这么做

### 4XX 客户端错误

- 400 bad request，请求报文存在语法错误。
- 401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息。
- 403 forbidden，表示对请求资源的访问被服务器拒绝。
- 404 not found，表示在服务器上没有找到请求的资源。
- 405 Method Not Allowed，服务器禁止使用该方法，客户端可以通过options方法来查看服务器允许的访问方法，如下 👇

```
Access-Control-Allow-Methods →GET,HEAD,PUT,PATCH,POST,DELETE复制代码
```

### 5XX 服务器错误

- 500 internal sever error，表示服务器端在执行请求时发生了错误。
- 502 Bad Gateway，服务器自身是正常的，访问的时候出了问题，具体啥错误我们不知道。
- 503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求。

## 前端缓存

 [一文读懂http缓存（超详细）](https://www.jianshu.com/p/227cee9c8d15)

前端缓存可分为两大类：http缓存和浏览器缓存。我们今天重点讲的是http缓存，所以关于浏览器缓存大家自行去查阅。下面这张图是前端缓存的一个大致知识点：

<img :src="$withBase('/http/huancun.png')" alt="mixureSecure">

常见的http缓存只能缓存get请求响应的资源，对于其他类型的响应则无能为力，所以后续说的请求缓存都是指GET请求。 

http缓存都是从第二次请求开始的。第一次请求资源时，服务器返回资源，并在respone header头中回传资源的缓存参数；第二次请求时，浏览器判断这些请求参数，命中强缓存就直接200，否则就把请求参数加到request header头中传给服务器，看是否命中协商缓存，命中则返回304，否则服务器会返回新的资源。

**http缓存的分类：**
 根据是否需要重新向服务器发起请求来分类，可分为(强制缓存，协商缓存) 根据是否可以被单个或者多个用户使用来分类，可分为(私有缓存，共享缓存) 强制缓存如果生效，不需要再和服务器发生交互，而协商缓存不管是否生效，都需要与服务端发生交互。下面是强制缓存和协商缓存的一些对比：
 
<img :src="$withBase('/http/fenlei.png')" alt="mixureSecure">

**强制缓存**

<img :src="$withBase('/http/qiang.png')" alt="mixureSecure">

**协商缓存**
 当第一次请求时服务器返回的响应头中没有Cache-Control和Expires或者Cache-Control和Expires过期还或者它的属性设置为no-cache时(即不走强缓存)，那么浏览器第二次请求时就会与服务器进行协商，与服务器端对比判断资源是否进行了修改更新。如果服务器端的资源没有修改，那么就会返回304状态码，告诉浏览器可以使用缓存中的数据，这样就减少了服务器的数据传输压力。如果数据有更新就会返回200状态码，服务器就会返回更新后的资源并且将缓存信息一起返回。跟协商缓存相关的header头属性有（ETag/If-Not-Match 、Last-Modified/If-Modified-Since）请求头和响应头需要成对出现

<img :src="$withBase('/http/xieshang.png')" alt="mixureSecure">

 协商缓存的执行流程是这样的：当浏览器第一次向服务器发送请求时，会在响应头中返回协商缓存的头属性：ETag和Last-Modified,其中ETag返回的是一个hash值，Last-Modified返回的是GMT格式的最后修改时间。然后浏览器在第二次发送请求的时候，会在请求头中带上与ETag对应的If-Not-Match，其值就是响应头中返回的ETag的值，Last-Modified对应的If-Modified-Since。服务器在接收到这两个参数后会做比较，如果返回的是304状态码，则说明请求的资源没有修改，浏览器可以直接在缓存中取数据，否则，服务器会直接返回数据

<img :src="$withBase('/http/xieshan.png')" alt="mixureSecure">

**注意：**
 ETag/If-Not-Match是在HTTP/1.1出现的，主要是解决以下问题：

(1)、Last-Modified标注的最后修改只能精确到秒级，如果某些文件在1秒钟以内，被修改多次的话，它将不能准确标注文件的修改时间

(2)、如果某些文件被修改了，但是内容并没有任何变化，而Last-Modified却改变了，导致文件没法使用缓存

(3)、有可能存在服务器没有准确获取文件修改时间，或者与代理服务器时间不一致等情形

**1.3、私有缓存（浏览器级缓存）**
 私有缓存只能用于单独的用户：Cache-Control: Private

**1.4、共享缓存（代理级缓存）**
 共享缓存可以被多个用户使用: Cache-Control: Public

## 为什么要使用HTTP缓存 ？

根据上面的学习可发现使用缓存的好处主要有以下几点：
 1. 减少了冗余的数据传输，节省了网费。
 2. 缓解了服务器的压力， 大大提高了网站的性能
 3. 加快了客户端加载网页的速度

 ## GET POST 区别
 安全、大小、缓存、浏览器回退无害(post有害，数据会重新提交), 传参方式、大小不同, 是否可收藏

 从编码的角度，GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制。

 GET和POST还有一个重大区别，简单的说：
 
GET产生一个TCP数据包；POST产生两个TCP数据包。

对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；

而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次。
## http请求方法

GET方法请求一个指定资源的表示形式. 使用GET的请求应该只被用于获取数据.

HEAD方法请求一个与GET请求的响应相同的响应，但没有响应体.

POST方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用. 

PUT方法用请求有效载荷替换目标资源的所有当前表示。

DELETE方法删除指定的资源。

CONNECT方法建立一个到由目标资源标识的服务器的隧道。

OPTIONS方法用于描述目标资源的通信选项。

TRACE方法沿着到目标资源的路径执行一个消息环回测试。

PATCH方法用于对资源应用部分修改。
  ##  跨域解决方法
**什么是同源策略？**
同源策略/SOP（Same origin  policy）是一种约定，由Netscape公司1995年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击。所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。

同源策略限制以下几种行为：

```
1.) Cookie、LocalStorage 和 IndexDB 无法读取
2.) DOM 和 Js对象无法获得
3.) AJAX 请求不能发送
```
[前端常见跨域解决方案（全）](https://segmentfault.com/a/1190000011145364)
### **一、 通过jsonp跨域**
> <script>标签的src属性并不被同源策略所约束，所以可以获取任何服务器上脚本并执行. 通过动态创建script标签，其src指向非同源的url，并传递一个callback参数作为函数名的函数的调用和一系列参数，页面接收到响应后执行回调并对数据进行处理

1.）原生实现：

```
 <script>
    var script = document.createElement('script');
    script.type = 'text/javascript';

    // 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数
    script.src = 'http://www.domain2.com:8080/login?user=admin&callback=handleCallback';
    document.head.appendChild(script);

    // 回调执行函数
    function handleCallback(res) {
        alert(JSON.stringify(res));
    }
 </script>
```

服务端返回如下（返回时即执行全局函数）：

```
handleCallback({"status": true, "user": "admin"})
```
### **二、 跨域资源共享（CORS）**

 普通跨域请求：只服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求：前后端都需要设置。 

### **三、 nginx代理跨域**

### 四、 WebSocket协议跨域

 WebSocket protocol是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是server push技术的一种很好的实现。 

### **五、 postMessage跨域**

postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一，它可用于解决以下方面的问题：
a.） 页面和其打开的新窗口的数据传递
b.） 多窗口之间消息传递
c.） 页面与嵌套的iframe消息传递
d.） 上面三个场景的跨域数据传递

用法：postMessage(data,origin)方法接受两个参数
data： html5规范支持任意基本类型或可复制的对象，但部分浏览器只支持字符串，所以传参时最好用JSON.stringify()序列化。
origin： 协议+主机+端口号，也可以设置为"*"，表示可以传递给任意窗口，如果要指定和当前窗口同源的话设置为"/"。
## HTTP 报文结构是怎样的？

对于 TCP 而言，在传输的时候分为两个部分:**TCP头**和**数据部分**。

而 HTTP 类似，也是`header + body`的结构，具体而言:

```text
起始行 + 头部 + 空行 + 实体
```

由于 http `请求报文`和`响应报文`是有一定区别，因此我们分开介绍。

### [#](http://47.98.159.95/my_blog/http/001.html#起始行) 起始行

对于请求报文来说，起始行类似下面这样:

```js
GET /home HTTP/1.1
```

也就是**方法 + 路径 + http版本**。

对于响应报文来说，起始行一般张这个样:

```js
HTTP/1.1 200 OK
```

响应报文的起始行也叫做`状态行`。由**http版本、状态码和原因**三部分组成。

值得注意的是，在起始行中，每两个部分之间用**空格**隔开，最后一个部分后面应该接一个**换行**，严格遵循`ABNF`语法规范。

## URI 的结构

URI 真正最完整的结构是这样的。

[![img](http://47.98.159.95/my_blog/http/004.png)](http://47.98.159.95/my_blog/http/004.png)

可能你会有疑问，好像跟平时见到的不太一样啊！先别急，我们来一一拆解。

**scheme** 表示协议名，比如`http`, `https`, `file`等等。后面必须和`://`连在一起。

**user:passwd**@ 表示登录主机时的用户信息，不过很不安全，不推荐使用，也不常用。

**host:port**表示主机名和端口。

**path**表示请求路径，标记资源所在位置。

**query**表示查询参数，为`key=val`这种形式，多个键值对之间用`&`隔开。

**fragment**表示 URI 所定位的资源内的一个**锚点**，浏览器可以根据这个锚点跳转到对应的位置。

举个例子:

```js
https://www.baidu.com/s?wd=HTTP&rsv_spt=1
```

这个 URI 中，`https`即`scheme`部分，`www.baidu.com`为`host:port`部分（注意，http 和 https 的默认端口分别为80、443），`/s`为`path`部分，而`wd=HTTP&rsv_spt=1`就是`query`部分。

## 深入理解http协议的特点

 [深入理解http协议的特点](https://www.cnblogs.com/xuxinstyle/p/9813654.html)             

HTTP 是一个属于应用层的面向对象的协议，HTTP 协议一共有五大特点：1、支持客户/服务器模式；2、简单快速；3、灵活；**4、无连接；5、无状态**。

 **无连接**

 **无连接的含义**是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。

 随着时间的推移，网页变得越来越复杂，里面可能嵌入了很多图片，这时候每次访问图片都需要建立一次 TCP 连接就显得很低效。后来，Keep-Alive 被提出用来解决这效率低的问题。

 **Keep-Alive 功能使客户端到服务器端的连接持续有效，当出现对服务器的后继请求时，Keep-Alive 功能避免了建立或者重新建立连接**。

 **无状态**

 **无状态**是指协议对于事务处理没有记忆能力，**服务器不知道客户端是什么状态**。即我们给服务器发送 HTTP 请求之后，服务器根据请求，会给我们发送数据过来，但是，发送完，不会记录任何信息。

HTTP 协议这种特性有优点也有缺点，优点在于解放了服务器，每一次请求“点到为止”不会造成不必要连接占用，缺点在于每次请求会传输大量重复的内容信息。

 客户端与服务器进行动态交互的 Web 应用程序出现之后，HTTP  无状态的特性严重阻碍了这些应用程序的实现，毕竟交互是需要承前启后的，简单的购物车程序也要知道用户到底在之前选择了什么商品。于是，两种用于保持  HTTP 连接状态的技术就应运而生了，一个是 Cookie，而另一个则是 Session。

 **Cookie可以保持登录信息到用户下次与服务器的会话，换句话说，下次访问同一网站时，用户会发现不必输入用户名和密码就已经登录了**（当然，不排除用户手工删除Cookie）。而还有一些Cookie在用户退出会话的时候就被删除了，这样可以有效保护个人隐私。

 Cookies 最典型的应用是判定注册用户是否已经登录网站，用户可能会得到提示，是否在下一次进入此网站时保留用户信息以便简化登录手续，这些都是  Cookies 的功用。另一个重要应用场合是“购物车”之类处理。用户可能会在一段时间内在同一家网站的不同页面中选择不同的商品，这些信息都会写入  Cookies，以便在最后付款时提取信息。

 **与 Cookie 相对的一个解决方案是 Session，它是通过服务器来保持状态的。**

 当客户端访问服务器时，服务器根据需求设置 Session，将会话信息保存在服务器上，同时将标示 Session 的 SessionId  传递给客户端浏览器，浏览器将这个 SessionId 保存在内存中，我们称之为无过期时间的 Cookie。浏览器关闭后，这个 Cookie  就会被清掉，它不会存在于用户的 Cookie 临时文件。

 以后浏览器每次请求都会额外加上这个参数值，服务器会根据这个 SessionId，就能取得客户端的数据信息。

 如果客户端浏览器意外关闭，服务器保存的 Session 数据不是立即释放，此时数据还会存在，只要我们知道那个  SessionId，就可以继续通过请求获得此 Session 的信息，因为此时后台的 Session 还存在，当然我们可以设置一个  Session 超时时间，一旦超过规定时间没有客户端请求时，服务器就会清除对应 SessionId 的 Session 信息。

## [彻底弄懂session，cookie，token ](https://segmentfault.com/a/1190000017831088)

### cookie和session

由于http的无状态性，为了使某个域名下的所有网页能够共享某些数据，session和cookie出现了。客户端访问服务器的流程如下

- 首先，客户端会发送一个http请求到服务器端。
- 服务器端接受客户端请求后，建立一个session，并发送一个http响应到客户端，这个响应头，其中就包含Set-Cookie头部。该头部包含了sessionId。Set-Cookie格式如下，具体请看[Cookie详解](http://bubkoo.com/2014/04/21/http-cookies-explained/)
  `Set-Cookie: value[; expires=date][; domain=domain][; path=path][; secure]` 
- 在客户端发起的第二次请求，假如服务器给了set-Cookie，浏览器会自动在请求头中添加cookie
- 服务器接收请求，分解cookie，验证信息，核对成功后返回response给客户端

 **简而言之, session 有如用户信息档案表, 里面包含了用户的认证信息和登录状态等信息. 而 cookie 就是用户通行证** 

### token

token 也称作令牌，由uid+time+sign[+固定参数]
token 的认证方式类似于**临时的证书签名**, 并且是一种服务端无状态的认证方式, 非常适合于 REST API 的场景. 所谓无状态就是服务端并不会保存身份认证相关的数据。

### 组成

- uid: 用户唯一身份标识
- time: 当前时间的时间戳
- sign: 签名, 使用 hash/encrypt 压缩成定长的十六进制字符串，以防止第三方恶意拼接
- 固定参数(可选): 将一些常用的固定参数加入到 token 中是为了避免重复查库

### 存放

token在客户端一般存放于localStorage，cookie，或sessionStorage中。在服务器一般存于数据库中

### token认证流程

token 的认证流程与cookie很相似

- 用户登录，成功后服务器返回Token给客户端。
- 客户端收到数据后保存在客户端
- 客户端再次访问服务器，将token放入headers中
- 服务器端采用filter过滤器校验。校验成功则返回请求数据，校验失败则返回错误码

### 总结

- session存储于服务器，可以理解为一个状态列表，拥有一个唯一识别符号sessionId，通常存放于cookie中。服务器收到cookie后解析出sessionId，再去session列表中查找，才能找到相应session。依赖cookie
- cookie类似一个令牌，装有sessionId，存储在客户端，浏览器通常会自动添加。
- token也类似一个令牌，无状态，用户信息都被加密到token中，服务器收到token后解密就可知道是哪个用户。需要开发者手动添加。
- jwt只是一个跨域认证的方案  [Json Web Token 入门教程](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)

##  JWT  [Json Web Token 入门教程](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)

特点

（1）JWT 默认是不加密，但也是可以加密的。生成原始 Token 以后，可以用密钥再加密一次。

（2）JWT 不加密的情况下，不能将秘密数据写入 JWT。

（3）JWT 不仅可以用于认证，也可以用于交换信息。有效使用 JWT，可以降低服务器查询数据库的次数。

（4）JWT 的最大缺点是，由于服务器不保存 session 状态，因此无法在使用过程中废止某个 token，或者更改 token 的权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。

（5）JWT 本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT 的有效期应该设置得比较短。对于一些比较重要的权限，使用时应该再次对用户进行认证。

（6）为了减少盗用，JWT 不应该使用 HTTP 协议明码传输，要使用 HTTPS 协议传输。

### JWT 的使用方式

客户端收到服务器返回的 JWT，可以储存在 Cookie 里面，也可以储存在 localStorage。

此后，客户端每次与服务器通信，都要带上这个 JWT。你可以把它放在 Cookie 里面自动发送，但是这样不能跨域，所以更好的做法是放在 HTTP 请求的头信息`Authorization`字段里面。

> ```javascript
> Authorization: Bearer <token>
> ```

另一种做法是，跨域的时候，JWT 就放在 POST 请求的数据体里面。
##  前端常见的安全性问题 

[参考链接，前端开发常见错误](https://www.jianshu.com/p/f8e47a132e1c)

### 跨站脚本攻击（XSS攻击）

 XSS攻击其核心都是利用了脚本注入，因此我们解决办法其实很简单，不信赖用户输入，对特殊字符如”<”,”>”转义，就可以从根本上防止这一问题， 

### 跨站请求伪造(CSRF攻击)

##### 原理：

CSRF(Cross Site Request Forgery)，即跨站请求伪造，是一种常见的Web攻击。CSRF攻击过程的受害者用户登录网站A，输入个人信息，在本地保存服务器生成的cookie。然后在A网站点击由攻击者构建一条恶意链接跳转到B网站，然后B网站携带着的用户cookie信息去访问B网站。让A网站造成是用户自己访问的假相，从而来进行一些列的操作，常见的就是转账。

解决方法： 验证码、token

### SQL注入攻击

SQL注入(SQL Injection)，应用程序在向后台数据库传递SQL(Structured Query Language，结构化查询语言)时，攻击者将SQL命令插入到Web表单提交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。

### 文件上传漏洞

##### 原理：

由于文件上传功能实现代码没有严格限制用户上传的文件后缀以及文件类型，导致允许攻击者向某个可通过 Web 访问的目录上传任意后台文件，并能够将这些文件传递给解释器，就可以在远程服务器上执行任意后台脚本。