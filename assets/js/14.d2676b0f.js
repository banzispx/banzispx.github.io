(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{369:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"介绍一下标准的css的盒子模型？与低版本ie的盒子模型有什么不同的？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下标准的css的盒子模型？与低版本ie的盒子模型有什么不同的？"}},[t._v("#")]),t._v(" 介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？")]),t._v(" "),e("p",[t._v("标准盒子模型：宽度=内容的宽度（content）+ border + padding + margin\n低版本IE盒子模型：宽度=内容宽度（content+border+padding）+ margin")]),t._v(" "),e("h2",{attrs:{id:"box-sizing属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#box-sizing属性"}},[t._v("#")]),t._v(" box-sizing属性?")]),t._v(" "),e("p",[t._v("用来控制元素的盒子模型的解析模式## ，默认为content-box\ncontext-box：W3C的标准盒子模型，设置元素的 height/width 属性指的是content部分的高/宽\nborder-box：IE传统盒子模型。设置元素的height/width属性指的是border + padding + content部分的高/宽")]),t._v(" "),e("h2",{attrs:{id:"css选择器有哪些？哪些属性可以继承"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css选择器有哪些？哪些属性可以继承"}},[t._v("#")]),t._v(" CSS选择器有哪些？哪些属性可以继承")]),t._v(" "),e("p",[t._v('CSS选择符：id选择器(#myid)、类选择器(.myclassname)、标签选择器(div, h1, p)、相邻选择器(h1 +  p)、子选择器（ul > li）、后代选择器（li  a）、通配符选择器（*）、属性选择器（a[rel="external"]）、伪类选择器（a:hover, li:nth-child）')]),t._v(" "),e("p",[t._v("可继承的属性：font-size, font-family, color")]),t._v(" "),e("p",[t._v("不可继承的样式：border, padding, margin, width, height")]),t._v(" "),e("p",[t._v("优先级（就近原则）：!important > [ id > class > tag ]\n!important 比内联优先级高")]),t._v(" "),e("h2",{attrs:{id:"css优先级算法如何计算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css优先级算法如何计算"}},[t._v("#")]),t._v(" CSS优先级算法如何计算")]),t._v(" "),e("p",[t._v("元素选择符/ 伪元素选择符 ： 1\n类选择符/属性选择符/伪类选择符： 10\nid选择符：100\n行内选择符：1000")]),t._v(" "),e("ol",[e("li",[t._v("!important声明的样式优先级最高，如果冲突再进行计算。")]),t._v(" "),e("li",[t._v("如果优先级相同，则选择最后出现的样式。")]),t._v(" "),e("li",[t._v("继承得到的样式的优先级最低。")])]),t._v(" "),e("h2",{attrs:{id:"css3新增伪类有那些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3新增伪类有那些"}},[t._v("#")]),t._v(" CSS3新增伪类有那些?")]),t._v(" "),e("p",[t._v("p:first-of-type 选择属于其父元素的首个元素\np:last-of-type 选择属于其父元素的最后元素\np:only-of-type 选择属于其父元素唯一的元素\np:only-child 选择属于其父元素的唯一子元素\np:nth-child(2) 选择属于其父元素的第二个子元素\n:enabled :disabled 表单控件的禁用状态。\n:checked 单选框或复选框被选中。")]),t._v(" "),e("h2",{attrs:{id:"如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？"}},[t._v("#")]),t._v(" 如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？")]),t._v(" "),e("p",[t._v("div：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("border: 1px solid red;\nmargin: 0 auto; \nheight: 50px;\nwidth: 80px;\n")])])]),e("p",[t._v("浮动元素的上下左右居中：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("border: 1px solid red;\nfloat: left;\nposition: absolute;\nwidth: 200px;\nheight: 100px;\nleft: 50%;\ntop: 50%;\nmargin: -50px 0 0 -100px; \n")])])]),e("p",[t._v("绝对定位的左右居中：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("border: 1px solid black;\nposition: absolute;\nwidth: 200px;\nheight: 100px;\nmargin: 0 auto;\nleft: 0;\nright: 0; \n")])])]),e("p",[t._v("还有更加优雅的居中方式就是用flexbox，我以后会做整理。")]),t._v(" "),e("h2",{attrs:{id:"display有哪些值？说明他们的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display有哪些值？说明他们的作用"}},[t._v("#")]),t._v(" display有哪些值？说明他们的作用?")]),t._v(" "),e("p",[t._v("inline（默认）--内联\nnone--隐藏\nblock--块显示\ntable--表格显示\nlist-item--项目列表\ninline-block")]),t._v(" "),e("h2",{attrs:{id:"position的值？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#position的值？"}},[t._v("#")]),t._v(" position的值？")]),t._v(" "),e("p",[t._v("static（默认）：按照正常文档流进行排列；\nrelative（相对定位）：不脱离文档流，参考自身静态位置通过 top, bottom, left, right 定位；\nabsolute(绝对定位)：参考距其最近一个不为static的父级元素通过top, bottom, left, right 定位；\nfixed(固定定位)：所固定的参照对像是可视窗口。")]),t._v(" "),e("h2",{attrs:{id:"css3有哪些新特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3有哪些新特性"}},[t._v("#")]),t._v(" CSS3有哪些新特性")]),t._v(" "),e("ol",[e("li",[t._v("RGBA和透明度")]),t._v(" "),e("li",[t._v("background-image background-origin(content-box/padding-box/border-box) background-size background-repeat")]),t._v(" "),e("li",[t._v("word-wrap（对长的不可分割单词换行）word-wrap：break-word")]),t._v(" "),e("li",[t._v("文字阴影：text-shadow： 5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）")]),t._v(" "),e("li",[t._v("font-face属性：定义自己的字体")]),t._v(" "),e("li",[t._v("圆角（边框半径）：border-radius 属性用于创建圆角")]),t._v(" "),e("li",[t._v("边框图片：border-image: url(border.png) 30 30 round")]),t._v(" "),e("li",[t._v("盒阴影：box-shadow: 10px 10px 5px #888888")]),t._v(" "),e("li",[t._v("媒体查询：定义两套css，当浏览器的尺寸变化时会采用不同的属性")])]),t._v(" "),e("h2",{attrs:{id:"请解释一下css3的flexbox（弹性盒布局模型）-以及适用场景？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请解释一下css3的flexbox（弹性盒布局模型）-以及适用场景？"}},[t._v("#")]),t._v(" 请解释一下CSS3的flexbox（弹性盒布局模型）,以及适用场景？")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("flex 详解"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("该布局模型的目的是提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间。在传统的布局方式中，block  布局是把块在垂直方向从上到下依次排列的；而 inline 布局则是在水平方向来排列。弹性盒布局并没有这样内在的方向限制，可以由开发人员自由操作。\n试用场景：弹性布局适合于移动前端开发，在Android和ios上也完美支持。")]),t._v(" "),e("h2",{attrs:{id:"常见的兼容性问题？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见的兼容性问题？"}},[t._v("#")]),t._v(" 常见的兼容性问题？")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("不同浏览器的标签默认的margin和padding不一样。")]),t._v(" "),e("p",[t._v("*{margin:0;padding:0;}")])]),t._v(" "),e("li",[e("p",[t._v("IE6双边距bug：块属性标签float后，又有横行的margin情况下，在IE6显示margin比设置的大。hack：display:inline;将其转化为行内属性。")])]),t._v(" "),e("li",[e("p",[t._v("渐进识别的方式，从总体中逐渐排除局部。首先，巧妙的使用“9”这一标记，将IE浏览器从所有情况中分离出来。接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{\nbackground-color:#f1ee18;/*所有识别*/\n.background-color:#00deff\\9; /*IE6、7、8识别*/\n+background-color:#a200ff;/*IE6、7识别*/\n_background-color:#1e0bd1;/*IE6识别*/\n}\n")])])])]),t._v(" "),e("li",[e("p",[t._v("设置较小高度标签（一般小于10px），在IE6，IE7中高度超出自己设置高度。hack：给超出高度的标签设置overflow:hidden;或者设置行高line-height 小于你设置的高度。")])]),t._v(" "),e("li",[e("p",[t._v("IE下，可以使用获取常规属性的方法来获取自定义属性,也可以使用getAttribute()获取自定义属性；Firefox下，只能使用getAttribute()获取自定义属性。解决方法:统一通过getAttribute()获取自定义属性。")])]),t._v(" "),e("li",[e("p",[t._v("Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。")])]),t._v(" "),e("li",[e("p",[t._v("超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了。解决方法是改变CSS属性的排列顺序:L-V-H-A ( love hate ):  a:link {} a:visited {} a:hover {} a:active {}")])])]),t._v(" "),e("h2",{attrs:{id:"display-none与visibility：hidden的区别？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-none与visibility：hidden的区别？"}},[t._v("#")]),t._v(" display:none与visibility：hidden的区别？")]),t._v(" "),e("p",[t._v("display：none 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）\nvisibility：hidden 隐藏对应元素，在文档布局中仍保留原来的空间（重绘）")]),t._v(" "),e("h2",{attrs:{id:"position跟display、overflow、float这些特性相互叠加后会怎么样？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#position跟display、overflow、float这些特性相互叠加后会怎么样？"}},[t._v("#")]),t._v(" position跟display、overflow、float这些特性相互叠加后会怎么样？")]),t._v(" "),e("p",[t._v("display属性规定元素应该生成的框的类型；position属性规定元素的定位类型；float属性是一种布局方式，定义元素在哪个方向浮动。\n类似于优先级机制：position：absolute/fixed优先级最高，有他们在时，float不起作用，display值需要调整。float 或者absolute定位的元素，只能是块元素或表格。")]),t._v(" "),e("h2",{attrs:{id:"bfc块级格式化上下文：block-formatting-context？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc块级格式化上下文：block-formatting-context？"}},[t._v("#")]),t._v(" BFC块级格式化上下文：block formatting context？")]),t._v(" "),e("p",[t._v("BFC规定了内部的Block Box如何布局。\n定位方案：")]),t._v(" "),e("ol",[e("li",[t._v("内部的Box会在垂直方向上一个接一个放置。")]),t._v(" "),e("li",[t._v("Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。")]),t._v(" "),e("li",[t._v("每个元素的margin box 的左边，与包含块border box的左边相接触。")]),t._v(" "),e("li",[t._v("BFC的区域不会与float box重叠。")]),t._v(" "),e("li",[t._v("BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。")]),t._v(" "),e("li",[t._v("计算BFC的高度时，浮动元素也会参与计算。")])]),t._v(" "),e("p",[t._v("满足下列条件之一就可触发BFC")]),t._v(" "),e("ol",[e("li",[t._v("根元素，即html")]),t._v(" "),e("li",[t._v("float的值不为none（默认） left  right  inherit")]),t._v(" "),e("li",[t._v("overflow的值不为visible（默认）  hidden  scroll  auto  inherit")]),t._v(" "),e("li",[t._v("display的值为inline-block、table-cell、table-caption")]),t._v(" "),e("li",[t._v("position的值为absolute或fixed")])]),t._v(" "),e("h2",{attrs:{id:"为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式？"}},[t._v("#")]),t._v(" 为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式？")]),t._v(" "),e("p",[t._v("浮动元素碰到包含它的边框或者浮动元素的边框停留。由于浮动元素不在文档流中，所以文档流的块框表现得就像浮动框不存在一样。浮动元素会漂浮在文档流的块框上。\n浮动带来的问题：")]),t._v(" "),e("ol",[e("li",[t._v("父元素的高度无法被撑开，影响与父元素同级的元素")]),t._v(" "),e("li",[t._v("与浮动元素同级的非浮动元素（内联元素）会跟随其后")]),t._v(" "),e("li",[t._v("若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。")])]),t._v(" "),e("p",[t._v("清除浮动的方式：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("父级div定义height")])]),t._v(" "),e("li",[e("p",[t._v("最后一个浮动元素后加空div标签 并添加样式clear:both。")])]),t._v(" "),e("li",[e("p",[t._v("包含浮动元素的父标签添加样式overflow为hidden或auto。")])]),t._v(" "),e("li",[e("p",[t._v("父级div定义zoom")])]),t._v(" "),e("li",[e("p",[t._v("伪元素清除浮动")]),t._v(" "),e("ol",[e("li",[e("div",{staticClass:"language-j extra-class"},[e("pre",{pre:!0,attrs:{class:"language-j"}},[e("code",[e("span",{pre:!0,attrs:{class:"token conjunction variable"}},[t._v(".")]),t._v("clearfi"),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("x:")]),t._v("after"),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("{")]),t._v("\n    conten"),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("t:")]),e("span",{pre:!0,attrs:{class:"token conjunction variable"}},[t._v('"')]),e("span",{pre:!0,attrs:{class:"token conjunction variable"}},[t._v('"')]),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v(";")]),t._v("\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("*")]),t._v("设置内容为空"),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("/")]),t._v("\n    heigh"),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("t:")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v(";")]),t._v("\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("*")]),t._v("高度为"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("/")]),t._v("\n    line"),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("-")]),t._v("heigh"),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("t:")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v(";")]),t._v("\t\t\t"),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("*")]),t._v("行高为"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("/")]),t._v("\n    display"),e("span",{pre:!0,attrs:{class:"token conjunction variable"}},[t._v(":")]),t._v("block"),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v(";")]),t._v("\t\t\t"),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("*")]),t._v("将文本转为块级元素"),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("/")]),t._v("\n    visibility"),e("span",{pre:!0,attrs:{class:"token conjunction variable"}},[t._v(":")]),t._v("hidden"),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v(";")]),t._v("\t\t"),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("*")]),t._v("将元素隐藏"),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("/")]),t._v("\n    clear"),e("span",{pre:!0,attrs:{class:"token conjunction variable"}},[t._v(":")]),t._v("both"),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v(";")]),t._v("\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("*")]),t._v("清除浮动"),e("span",{pre:!0,attrs:{class:"token verb keyword"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token adverb builtin"}},[t._v("}")]),t._v("\n")])])])])])])]),t._v(" "),e("h2",{attrs:{id:"_21-上下margin重合的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_21-上下margin重合的问题"}},[t._v("#")]),t._v(" 21 上下margin重合的问题")]),t._v(" "),e("p",[t._v("在重合元素外包裹一层容器，并触发该容器生成一个BFC。\n例子：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<div class="aside"></div>\n<div class="text">\n    <div class="main"></div>\n</div>\n\x3c!--下面是css代码--\x3e\n .aside {\n            margin-bottom: 100px;  \n            width: 100px;\n            height: 150px;\n            background: #f66;\n        }\n        .main {\n            margin-top: 100px;\n            height: 200px;\n            background: #fcc;\n        }\n         .text{\n            /*盒子main的外面包一个div，通过改变此div的属性使两个盒子分属于两个不同的BFC，以此来阻止margin重叠*/\n            overflow: hidden;  //此时已经触发了BFC属性。\n        }\n')])])]),e("h2",{attrs:{id:"设置元素浮动后，该元素的display值是多少"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置元素浮动后，该元素的display值是多少"}},[t._v("#")]),t._v(" 设置元素浮动后，该元素的display值是多少")]),t._v(" "),e("p",[t._v("自动变成display:block")]),t._v(" "),e("h2",{attrs:{id:"移动端的布局用过媒体查询吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动端的布局用过媒体查询吗"}},[t._v("#")]),t._v(" 移动端的布局用过媒体查询吗")]),t._v(" "),e("p",[t._v("通过媒体查询可以为不同大小和尺寸的媒体定义不同的css，适应相应的设备的显示。")]),t._v(" "),e("ol",[e("li",[e("code",[t._v('<head>里边 <link rel="stylesheet" type="text/css" href="xxx.css" media="only screen and (max-device-width:480px)">')])]),t._v(" "),e("li",[t._v("CSS : @media only screen and (max-device-width:480px) {/"),e("em",[t._v("css样式")]),t._v("/}")])]),t._v(" "),e("h2",{attrs:{id:"css优化、提高性能的方法有哪些？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css优化、提高性能的方法有哪些？"}},[t._v("#")]),t._v(" CSS优化、提高性能的方法有哪些？")]),t._v(" "),e("ol",[e("li",[t._v("避免过度约束")]),t._v(" "),e("li",[t._v("避免后代选择符")]),t._v(" "),e("li",[t._v("避免链式选择符")]),t._v(" "),e("li",[t._v("使用紧凑的语法")]),t._v(" "),e("li",[t._v("避免不必要的命名空间")]),t._v(" "),e("li",[t._v("避免不必要的重复")]),t._v(" "),e("li",[t._v("最好使用表示语义的名字。一个好的类名应该是描述他是什么而不是像什么")]),t._v(" "),e("li",[t._v("避免！important，可以选择其他选择器")]),t._v(" "),e("li",[t._v("尽可能的精简规则，你可以合并不同类里的重复规则")])]),t._v(" "),e("h2",{attrs:{id:"浏览器是怎样解析css选择器的？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是怎样解析css选择器的？"}},[t._v("#")]),t._v(" 浏览器是怎样解析CSS选择器的？")]),t._v(" "),e("p",[t._v("CSS选择器的解析是从右向左解析的。若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面。\n而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。在建立  Render Tree 时（WebKit 中的「Attachment」过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS  的解析结果（Style Rules）来确定生成怎样的 Render Tree。")]),t._v(" "),e("h2",{attrs:{id:"在网页中的应该使用奇数还是偶数的字体？为什么呢？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在网页中的应该使用奇数还是偶数的字体？为什么呢？"}},[t._v("#")]),t._v(" 在网页中的应该使用奇数还是偶数的字体？为什么呢？")]),t._v(" "),e("p",[t._v("使用偶数字体。偶数字号相对更容易和 web 设计的其他部分构成比例关系。Windows 自带的点阵宋体（中易宋体）从 Vista  开始只提供 12、14、16 px 这三个大小的点阵，而 13、15、17 px时用的是小一号的点。（即每个字占的空间大了 1  px，但点阵没变），于是略显稀疏。")]),t._v(" "),e("h2",{attrs:{id:"margin和padding分别适合什么场景使用？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#margin和padding分别适合什么场景使用？"}},[t._v("#")]),t._v(" margin和padding分别适合什么场景使用？")]),t._v(" "),e("p",[t._v("何时使用margin：")]),t._v(" "),e("ol",[e("li",[t._v("需要在border外侧添加空白")]),t._v(" "),e("li",[t._v("空白处不需要背景色")]),t._v(" "),e("li",[t._v("上下相连的两个盒子之间的空白，需要相互抵消时。")])]),t._v(" "),e("p",[t._v("何时使用padding：")]),t._v(" "),e("ol",[e("li",[t._v("需要在border内侧添加空白")]),t._v(" "),e("li",[t._v("空白处需要背景颜色")]),t._v(" "),e("li",[t._v("上下相连的两个盒子的空白，希望为两者之和。")])]),t._v(" "),e("p",[t._v("兼容性的问题：在IE5 IE6中，为float的盒子指定margin时，左侧的margin可能会变成两倍的宽度。通过改变padding或者指定盒子的display：inline解决。")]),t._v(" "),e("h2",{attrs:{id:"元素竖向的百分比设定是相对于容器的高度吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元素竖向的百分比设定是相对于容器的高度吗"}},[t._v("#")]),t._v(" 元素竖向的百分比设定是相对于容器的高度吗")]),t._v(" "),e("p",[t._v("当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性，例如 padding-top ,  padding-bottom , margin-top , margin-bottom  等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。")]),t._v(" "),e("h2",{attrs:{id:"全屏滚动的原理是什么？用到了css的哪些属性？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全屏滚动的原理是什么？用到了css的哪些属性？"}},[t._v("#")]),t._v(" 全屏滚动的原理是什么？用到了CSS的哪些属性？")]),t._v(" "),e("ol",[e("li",[t._v("原理：有点类似于轮播，整体的元素一直排列下去，假设有5个需要展示的全屏页面，那么高度是500%，只是展示100%，剩下的可以通过transform进行y轴定位，也可以通过margin-top实现")]),t._v(" "),e("li",[t._v("overflow：hidden；transition：all 1000ms ease；")])]),t._v(" "),e("h2",{attrs:{id:"什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的ie？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的ie？"}},[t._v("#")]),t._v(" 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？")]),t._v(" "),e("p",[t._v("响应式网站设计(Responsive Web design)是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。\n基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。\n页面头部必须有meta声明的viewport。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<meta name=’viewport’ content=”width=device-width, initial-scale=1. maximum-scale=1,user-scalable=no”>\n")])])]),e("h2",{attrs:{id:"视差滚动效果？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#视差滚动效果？"}},[t._v("#")]),t._v(" 视差滚动效果？")]),t._v(" "),e("p",[t._v("视差滚动（Parallax Scrolling）通过在网页向下滚动的时候，控制背景的移动速度比前景的移动速度慢来创建出令人惊叹的3D效果。")]),t._v(" "),e("ol",[e("li",[t._v("CSS3实现\n优点：开发时间短、性能和开发效率比较好，缺点是不能兼容到低版本的浏览器")]),t._v(" "),e("li",[t._v("jQuery实现\n通过控制不同层滚动速度，计算每一层的时间，控制滚动效果。\n优点：能兼容到各个版本的，效果可控性好\n缺点：开发起来对制作者要求高")]),t._v(" "),e("li",[t._v("插件实现方式\n例如：parallax-scrolling，兼容性十分好")])]),t._v(" "),e("h2",{attrs:{id:"before-和-after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#before-和-after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用"}},[t._v("#")]),t._v(" ::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用")]),t._v(" "),e("ol",[e("li",[t._v("单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。")]),t._v(" "),e("li",[t._v("::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。")])]),t._v(" "),e("p",[t._v(":before 和 :after 这两个伪元素，是在CSS2.1里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，在CSS3的规范里，伪元素的语法被修改成使用双冒号，成为::before  ::after")]),t._v(" "),e("h2",{attrs:{id:"你对line-height是如何理解的？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#你对line-height是如何理解的？"}},[t._v("#")]),t._v(" 你对line-height是如何理解的？")]),t._v(" "),e("p",[t._v("行高是指一行文字的高度，具体说是两行文字间基线的距离。CSS中起高度作用的是height和line-height，没有定义height属性，最终其表现作用一定是line-height。\n单行文本垂直居中：把line-height值设置为height一样大小的值可以实现单行文字的垂直居中，其实也可以把height删除。\n多行文本垂直居中：需要设置display属性为inline-block。")]),t._v(" "),e("h2",{attrs:{id:"怎么让chrome支持小于12px-的文字？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么让chrome支持小于12px-的文字？"}},[t._v("#")]),t._v(" 怎么让Chrome支持小于12px 的文字？")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("p{font-size:10px;-webkit-transform:scale(0.8);} //0.8是缩放比例\n")])])]),e("h2",{attrs:{id:"让页面里的字体变清晰，变细用css怎么做？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#让页面里的字体变清晰，变细用css怎么做？"}},[t._v("#")]),t._v(" 让页面里的字体变清晰，变细用CSS怎么做？")]),t._v(" "),e("p",[t._v("-webkit-font-smoothing在window系统下没有起作用，但是在IOS设备上起作用-webkit-font-smoothing：antialiased是最佳的，灰度平滑。")]),t._v(" "),e("h2",{attrs:{id:"position-fixed-在android下无效怎么处理？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#position-fixed-在android下无效怎么处理？"}},[t._v("#")]),t._v(" position:fixed;在android下无效怎么处理？")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>\n')])])]),e("h2",{attrs:{id:"如果需要手动写动画，你认为最小时间间隔是多久，为什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果需要手动写动画，你认为最小时间间隔是多久，为什么？"}},[t._v("#")]),t._v(" 如果需要手动写动画，你认为最小时间间隔是多久，为什么？")]),t._v(" "),e("p",[t._v("多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms。")]),t._v(" "),e("h2",{attrs:{id:"li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？"}},[t._v("#")]),t._v(" li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？")]),t._v(" "),e("p",[t._v("行框的排列会受到中间空白（回车空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。\n解决方法：")]),t._v(" "),e("ol",[e("li",[t._v("可以将")]),e("li",[t._v("代码全部写在一排")]),t._v(" "),e("li",[t._v("浮动li中float：left")]),t._v(" "),e("li",[t._v("在ul中用font-size：0（谷歌不支持）；可以使用letter-space：-3px")])]),t._v(" "),e("h2",{attrs:{id:"display-inline-block-什么时候会显示间隙？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-inline-block-什么时候会显示间隙？"}},[t._v("#")]),t._v(" display:inline-block 什么时候会显示间隙？")]),t._v(" "),e("ol",[e("li",[t._v("有空格时候会有间隙 解决：移除空格")]),t._v(" "),e("li",[t._v("margin正值的时候 解决：margin使用负值")]),t._v(" "),e("li",[t._v("使用font-size时候 解决：font-size:0、letter-spacing、word-spacing")])]),t._v(" "),e("h2",{attrs:{id:"有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度"}},[t._v("#")]),t._v(" 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度")]),t._v(" "),e("p",[t._v("外层div使用position：relative；高度要求自适应的div使用position: absolute; top: 100px; bottom: 0; left: 0")]),t._v(" "),e("h2",{attrs:{id:"png、jpg、gif-这些图片格式解释一下，分别什么时候用。有没有了解过webp？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#png、jpg、gif-这些图片格式解释一下，分别什么时候用。有没有了解过webp？"}},[t._v("#")]),t._v(" png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？")]),t._v(" "),e("ol",[e("li",[t._v("png是便携式网络图片（Portable Network Graphics）是一种无损数据压缩位图文件格式.优点是：压缩比高，色彩好。 大多数地方都可以用。")]),t._v(" "),e("li",[t._v("jpg是一种针对相片使用的一种失真压缩方法，是一种破坏性的压缩，在色调及颜色平滑变化做的不错。在www上，被用来储存和传输照片的格式。")]),t._v(" "),e("li",[t._v("gif是一种位图文件格式，以8位色重现真色彩的图像。可以实现动画效果.")]),t._v(" "),e("li",[t._v("webp格式是谷歌在2010年推出的图片格式，压缩率只有jpg的2/3，大小比png小了45%。缺点是压缩的时间更久了，兼容性不好，目前谷歌和opera支持。")])]),t._v(" "),e("h2",{attrs:{id:"style标签写在body后与body前有什么区别？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#style标签写在body后与body前有什么区别？"}},[t._v("#")]),t._v(" style标签写在body后与body前有什么区别？")]),t._v(" "),e("p",[t._v("页面加载自上而下 当然是先加载样式。\n写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）")]),t._v(" "),e("h2",{attrs:{id:"css属性overflow属性定义溢出元素内容区的内容会如何处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css属性overflow属性定义溢出元素内容区的内容会如何处理"}},[t._v("#")]),t._v(" CSS属性overflow属性定义溢出元素内容区的内容会如何处理?")]),t._v(" "),e("p",[t._v("参数是scroll时候，必会出现滚动条。\n参数是auto时候，子元素内容大于父元素时出现滚动条。\n参数是visible时候，溢出的内容出现在父元素之外。\n参数是hidden时候，溢出隐藏。")]),t._v(" "),e("h2",{attrs:{id:"阐述一下css-sprites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#阐述一下css-sprites"}},[t._v("#")]),t._v(" 阐述一下CSS Sprites")]),t._v(" "),e("p",[t._v("将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的 background-image，background-  repeat，background-position 的组合进行背景定位。利用CSS  Sprites能很好地减少网页的http请求，从而大大的提高页面的性能；CSS Sprites能减少图片的字节。")]),t._v(" "),e("h2",{attrs:{id:"层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文"}},[t._v("#")]),t._v(" 层叠上下文")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/css/zindex.png"),alt:"jiami"}}),t._v(" "),e("h2",{attrs:{id:"由link和-import的区别引发的css渲染杂谈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#由link和-import的区别引发的css渲染杂谈"}},[t._v("#")]),t._v(" 由link和@import的区别引发的CSS渲染杂谈")]),t._v(" "),e("p",[t._v("1.从属关系区别\n@import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。")]),t._v(" "),e("p",[t._v("2.加载顺序区别\n加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。")]),t._v(" "),e("p",[t._v("3.兼容性区别\n@import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。")]),t._v(" "),e("p",[t._v("4.DOM可控性区别\n可以通过 JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。")]),t._v(" "),e("p",[t._v("5.权重区别(该项有争议，下文将详解)\nlink引入的样式权重大于@import引入的样式。")])])}),[],!1,null,null,null);a.default=r.exports}}]);