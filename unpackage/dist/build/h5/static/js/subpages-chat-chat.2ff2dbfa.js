(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subpages-chat-chat"],{"049a":function(t,e,n){"use strict";var a=n("aa3f"),i=n.n(a);i.a},3170:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-scroll-view",{staticClass:"out-body"},[n("v-uni-view",{staticClass:"chat-body"},[t._l(t.chatList,(function(e,a){return[e.isMe?n("v-uni-view",{staticClass:"chat-one chat-one-right"},[n("v-uni-image",{staticClass:"chat-face",attrs:{src:""}}),n("v-uni-view",{staticClass:"chat-box"},["txt"===e.type?n("v-uni-view",{staticClass:"chat-content"},[t._v(t._s(e.content))]):t._e()],1),"img"===e.type?n("v-uni-image",{attrs:{src:e.content,mode:"aspectFit"}}):t._e()],1):n("v-uni-view",{key:a+"_0",staticClass:"chat-one chat-one-left"},[n("v-uni-image",{staticClass:"chat-face",attrs:{src:"",mode:""}}),n("v-uni-view",{staticClass:"chat-box"},[n("v-uni-view",{staticClass:"chat-sender"},[t._v("知心姐姐")]),"txt"===e.type?n("v-uni-view",{staticClass:"chat-content"},[t._v(t._s(e.content))]):t._e(),"img"===e.type?n("v-uni-image",{attrs:{src:e.content,mode:"aspectFit"}}):t._e()],1)],1)]}))],2),n("v-uni-view",{staticClass:"chat-footer"},[n("v-uni-input",{staticClass:"msg-input",attrs:{type:"text"},model:{value:t.myInput,callback:function(e){t.myInput=e},expression:"myInput"}}),n("v-uni-image",{staticClass:"img-chose",attrs:{src:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choseImgAndSend()}}}),n("v-uni-view",{staticClass:"send-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendMsg.apply(void 0,arguments)}}},[t._v("发送")])],1)],1)},o=[]},a4e7:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.out-body[data-v-1d398070]{height:auto;background:#e7daf4}.out-body .chat-body .chart-timer[data-v-1d398070]{text-align:center;color:#616161;font-size:13px}.out-body .chat-body .chat-one[data-v-1d398070]{display:-webkit-box;display:-webkit-flex;display:flex;padding:5px 5px 10px 0}.out-body .chat-body .chat-one .chat-face[data-v-1d398070]{width:50px;height:50px;border-radius:100px}.out-body .chat-body .chat-one .chat-box[data-v-1d398070]{margin-left:16px}.out-body .chat-body .chat-one .chat-box .chat-sender[data-v-1d398070]{color:#404040}.out-body .chat-body .chat-one .chat-box .chat-content[data-v-1d398070]{margin-top:%?5?%;background:#fff;border-radius:4px;padding:5px;max-width:%?500?%}.out-body .chat-body .chat-one-left[data-v-1d398070]{margin-left:5px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.out-body .chat-body .chat-one-right[data-v-1d398070]{margin-right:5px;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.out-body .chat-body .chat-one-right .chat-box[data-v-1d398070]{margin:8px 10px 0 0}.out-body .chat-footer[data-v-1d398070]{position:fixed;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;background:#e7daf4;width:100%;border-top:1px solid #d2cfd4;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.out-body .chat-footer .msg-input[data-v-1d398070]{background:#fff;height:%?50?%;width:%?550?%}.out-body .chat-footer .send-btn[data-v-1d398070]{background:green;width:%?100?%;height:%?50?%;line-height:%?50?%;text-align:center;color:#fff;border-radius:5px;margin-left:%?15?%}.out-body .chat-footer .img-chose[data-v-1d398070]{width:%?50?%;height:%?50?%}',""]),t.exports=e},aa3f:function(t,e,n){var a=n("a4e7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("c28c2676",a,!0,{sourceMap:!1,shadowMode:!1})},d764:function(t,e,n){"use strict";n.r(e);var a=n("3170"),i=n("f655");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("049a");var c,s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"1d398070",null,!1,a["a"],c);e["default"]=r.exports},daaa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{chatList:[{isMe:!1,type:"txt",content:"你好。我是知心姐姐"},{isMe:!1,type:"img",content:""},{isMe:!0,type:"txt",content:"哇，你真漂亮"},{isMe:!0,type:"img",content:""}],myInput:""}},onLoad:function(){},onShow:function(){if(uni.getStorageSync("chatList")){this.chatList=JSON.parse(uni.getStorageSync("chatList")),console.log(this.chatList);var t=setTimeout((function(){clearTimeout(t),uni.pageScrollTo({scrollTop:2e6,duration:0})}),50)}},methods:{sendMsg:function(){if(console.log(this.myInput),this.myInput){var t={isMe:!0,type:"txt",content:this.myInput};this.chatList.push(t);var e=setTimeout((function(){clearTimeout(e),uni.pageScrollTo({scrollTop:2e6,duration:0})}),50);uni.setStorageSync("chatList",JSON.stringify(this.chatList)),this.myInput=""}},choseImgAndSend:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){console.log(e.tempFilePaths[0]);var n={isMe:!0,type:"img",content:e.tempFilePaths[0]};t.chatList.push(n);var a={isMe:!1,type:"img",content:e.tempFilePaths[0]};t.chatList.push(a);var i=setTimeout((function(){clearTimeout(i),uni.pageScrollTo({scrollTop:2e6,duration:0})}),50);uni.setStorageSync("chatList",JSON.stringify(t.chatList))}})}}};e.default=a},f655:function(t,e,n){"use strict";n.r(e);var a=n("daaa"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}}]);