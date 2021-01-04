## 未知宽高的元素实现水平垂直居中

 1、父元素dispaly:table,子元素display:cell-table。
```
​		.parent1{
​          display: table;
​          height:300px;
​          width: 300px;
​          background-color: #FD0C70;
​      }
​      .parent1 .child{
​          display: table-cell;
​          vertical-align: middle;
​          text-align: center;
​          color: #fff;
​          font-size: 16px;
​      }
```
2、利用空元素或伪类
```
  .wrap {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        background: #92b922;
    }
    .test {
        background: #de3168;
        display: inline-block;
        color: #fff;
        padding: 20px;
    }
    .wrap:after {
        display: inline-block;
        content: '';
        width: 0px;
        height: 100%;
        vertical-align: middle;
    }
```
3、绝对定位+transform
```
    .parent3{
      position: relative;
      height:300px;
      width: 300px;
      background: #FD0C70;
    }
    .parent3 .child{
      position: absolute;
      top: 50%;
      left: 50%;
      color: #fff;
      transform: translate(-50%, -50%);
    }
```
4、flexbox布局

## 实现自适应两列布局

1、BFC实现

```
.father {
        background-color: lightblue;
    }
    .left {
        float: left;
        width: 100px;
        height: 200px;
        background-color: red;
    }
    .right {
        overflow: auto;
        height: 500px;
        background-color: lightseagreen
    }

```

2、 margin-left实现

```
.father {
        background-color: lightblue;
    }
    .left {
        width: 100px;
        float: left;
        background-color: red;
    }
    .right {
        margin-left: 100px;
        background-color: lightseagreen
    }

```

## 两边固定 中间自适应

[参考链接](https://blog.csdn.net/sleepwalker_1992/article/details/82802202)
### flex 布局实现
```
<style>
.father {
    display: flex;
    height: 100%;
}
.left,
.right {
    flex: 0 1 100px;
    background-color: red;
}

.middle {
    flex: 1;
    height: 100%;
    background-color: green;
}
</style>
<body>
    <div class="father">
        <div class='left'>left</div>
        <div class='middle'>middle</div>
        <div class='right'>center</div>
    </div>
</body>
```
### margin-left -righ 和float

```
.left{
    float: left;
    height: 100px;
    width: 200px;
    background-color: #333333;
  }
  .center{
    height: 100px;
    background-color: #555555;
    margin-left: 250px;
    margin-right: 250px;
  }
  .right{
    float: right;
    height: 100px;
    width: 200px;
    background-color: #666666;
  }
  // 注意中间位置放在最后
  <div class="">
    <div class="left"></div>
    <div class="right"></div>
    <div class="center"></div>
  </div> 
```

### position absolute 加上left right 为0

```
.left{
    position: absolute;
    height: 100px;
    width: 200px;
    background-color: #333333;
  }
  .center{
    height: 100px;
    background-color: #555555;
    margin-left: 250px;
    margin-right: 250px;
  }
  .right{
    position: absolute;
    right: 0px;
    height: 100px;
    width: 200px;
    background-color: #666666;
  }
```

### 通过margin实现

```
.boxCenter4{
      width: 100%;
      min-height: 100px;
      float: left;
    }
    .center{
      min-height: 100px;
      margin-left: 220px;
      margin-right: 320px;
      background: #192;
    }
    .boxLeft4{
      min-height: 100px;
      width: 200px;
      background: #987;
      float: left;
      margin-left: -100%;
    }
    .boxRight4{
      min-height: 100px;
      width: 300px;
      background: #369;
      float: left;
      margin-left: -300px;
    }
   <div class=box4>
    <!-- 注意这个div一定要放最上面 -->
      <div class="boxCenter4">
        <div class="center">中间</div>
      </div>
      <div class="boxLeft4">左边</div>
      <div class="boxRight4">右边</div>
    </div>
```

## 用纯CSS创建一个三角形的原理是什么？

首先，需要把元素的宽度、高度设为0。然后设置边框样式。

```
width: 0;
height: 0;
border-top: 40px solid transparent;
border-left: 40px solid transparent;
border-right: 40px solid transparent;
border-bottom: 40px solid #ff0000;
```
