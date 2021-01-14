(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{362:function(t,n,e){"use strict";e.r(n);var s=e(42),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"ajax-是什么-如何创建一个-ajax？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajax-是什么-如何创建一个-ajax？"}},[t._v("#")]),t._v(" Ajax 是什么? 如何创建一个 Ajax？")]),t._v(" "),e("p",[t._v("我对 ajax 的理解是，它是一种异步通信的方法，通过直接由 js 脚本向服务器发起 http 通信，然后根据服务器返回的数据，更新网页的相应部分，而不用刷新整个页面的一种方法。")]),t._v(" "),e("h3",{attrs:{id:"创建步骤："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建步骤："}},[t._v("#")]),t._v(" 创建步骤：")]),t._v(" "),e("p",[t._v("创建axios ——> 配置Ajax请求地址 ——> 发送请求 ——> 监听请求，接受响应")]),t._v(" "),e("h3",{attrs:{id:"面试手写（原生）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试手写（原生）"}},[t._v("#")]),t._v(" 面试手写（原生）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//1：创建Ajax对象\nvar xhr = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');// 兼容IE6及以下版本\n//2：配置 Ajax请求地址\nxhr.open('get','index.xml',true);\n//3：发送请求\nxhr.send(null); // 严谨写法\n//4:监听请求，接受响应\nxhr.onreadysatechange=function(){\n     if(xhr.readySates==4&&xhr.status==200 || xhr.status==304 )\n          console.log(xhr.responsetXML)\n}\n\n\n")])])]),e("h3",{attrs:{id:"jquery写法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jquery写法"}},[t._v("#")]),t._v(" jQuery写法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  $.ajax({\n          type:'post',\n          url:'',\n          async:ture,//async 异步  sync  同步\n          data:data,//针对post请求\n          dataType:'jsonp',\n          success:function (msg) {\n\n          },\n          error:function (error) {\n\n          }\n        })\n\n\n")])])]),e("h3",{attrs:{id:"promise-封装实现："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise-封装实现："}},[t._v("#")]),t._v(" promise 封装实现：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// promise 封装实现：\n\nfunction getJSON(url) {\n  // 创建一个 promise 对象\n  let promise = new Promise(function(resolve, reject) {\n    let xhr = new XMLHttpRequest();\n\n    // 新建一个 http 请求\n    xhr.open("GET", url, true);\n\n    // 设置状态的监听函数\n    xhr.onreadystatechange = function() {\n      if (this.readyState !== 4) return;\n\n      // 当请求成功或失败时，改变 promise 的状态\n      if (this.status === 200) {\n        resolve(this.response);\n      } else {\n        reject(new Error(this.statusText));\n      }\n    };\n\n    // 设置错误监听函数\n    xhr.onerror = function() {\n      reject(new Error(this.statusText));\n    };\n\n    // 设置响应的数据类型\n    xhr.responseType = "json";\n\n    // 设置请求头信息\n    xhr.setRequestHeader("Accept", "application/json");\n\n    // 发送 http 请求\n    xhr.send(null);\n  });\n\n  return promise;\n}\n\n')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);