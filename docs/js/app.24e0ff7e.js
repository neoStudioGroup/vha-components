(function(t){function e(e){for(var o,i,a=e[0],c=e[1],l=e[2],h=0,d=[];h<a.length;h++)i=a[h],r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},s=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vha-components/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3663:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("3a0f"),n("a3a3"),n("4d0b");var o=n("329b"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i={name:"App",beforeCreate:function(){},props:{},data:function(){return{}},components:{},computed:{},methods:{},watch:{},created:function(){},mounted:function(){},activated:function(){},deactivated:function(){},beforeDestroy:function(){},destroyed:function(){}},a=i,c=(n("7faf"),n("048f")),l=Object(c["a"])(a,r,s,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,h=n("b8e5"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_PG-index _df"},[n("div",{staticClass:"_UI-menu _df _fdc"},[n("div",{staticClass:"ui-l-title _df _aic _cl-fff",on:{click:function(e){t.$router.push("/")}}},[n("i",{staticClass:"fa fa-mobile-phone fa-2x"}),n("span",{staticClass:"_di"},[t._v("Components docs")])]),t._m(0),n("div",{staticClass:"ui-l-menu _flexYauto"},[n("UImenu",{attrs:{pData:t.$store.state.menus,getContainer:t.getContainer,getContainerNode:t.getContainerNode}})],1)]),n("div",{staticClass:"_UI-content _flexYauto"},[n("router-view")],1),t.$store.state.showSidebar?n("div",{staticClass:"_UI-sidebar"},[n("div",{staticClass:"ui-s-phone"},[n("div",{staticClass:"ui-s-p-if"},[n("iframe",{attrs:{src:t.iframeSrc,frameborder:"0"}})])])]):t._e()])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-l-search"},[n("input",{staticClass:"_reInput",attrs:{placeholder:"Search"}})])}],f=(n("bc72"),n("5616"),n("aba3"),n("25d7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_UI-menu"},t._l(this.pData,function(e,o){return n("section",{key:o},[n("p",{staticClass:"ui-l-i-title"},[t._v(t._s(e.title))]),n("ul",t._l(e.list,function(e,r){return n("li",{key:r,class:e.select?"ui-l-i-avtive":""},[n("a",{attrs:{href:t.procURL(e.href)},on:{click:function(e){t.onItemshow(o,r)}}},[t._v("\n          "+t._s(e.text)+"\n          "),n("span",{class:e.noteClass},[t._v(t._s(e.note))])]),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.showItem,expression:"menuList.showItem"}]},t._l(e.item,function(e,o){return n("li",{key:o,class:e.select?"ui-l-i-avtive":""},[n("a",{on:{click:function(n){t.onToscroll(e.href)}}},[t._v("\n              "+t._s(e.subText)+"\n              "),n("span",{class:e.noteClass},[t._v(t._s(e.subNote))])])])}))])}))])}))}),p=[],m=(n("ec80"),n("aa0f"),{name:"UImenu",props:{pData:{type:Array,default:function(){return[]}},getContainer:{type:Function,default:function(){}},getContainerNode:{type:Function,default:function(){}}},data:function(){return{observer:null,nowElement:null}},methods:{procURL:function(t){return this.$router.history.base+t},procMenu:function(){var t=this;this.pData.forEach(function(e){e.list.forEach(function(e){var n=t.$router.history.current.path;"/"+n.replace(/\//g,"")===e.href&&(e.showItem=!0,e.select=!0),e.item.forEach(function(e){"#"+t.nowElement.id===e.href?e.select=!0:e.select=!1})})}),window.history.replaceState({},null,"#"+this.nowElement.id)},handleScroll:function(){var t=0,e=0,n=0;if(this.getContainer()?(t=this.getContainer().scrollTop,e=this.getContainer().scrollHeight,n=this.getContainer().clientHeight):(t=document.body.scrollTop,e=document.body.scrollHeight,n=document.body.clientHeight),t>=e-n-50)this.nowElement=this.getContainerNode()[this.getContainerNode().length-2],this.procMenu();else{var o=0,r=!0,s=!1,i=void 0;try{for(var a,c=this.getContainerNode()[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var l=a.value;if(o+=l.clientHeight,t<o){l!=this.nowElement&&(this.nowElement=l,this.procMenu());break}}}catch(t){s=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(s)throw i}}}},onToscroll:function(t){var e=!0,n=!1,o=void 0;try{for(var r,s=this.getContainerNode()[Symbol.iterator]();!(e=(r=s.next()).done);e=!0){var i=r.value;if("#"+i.id===t){this.$scrollTo(i);break}}}catch(t){n=!0,o=t}finally{try{e||null==s.return||s.return()}finally{if(n)throw o}}}},watch:{},mounted:function(){this.getContainer()?this.getContainer().addEventListener("scroll",this.handleScroll):window.addEventListener("scroll",this.handleScroll),this.handleScroll();var t=!0,e=!1,n=void 0;try{for(var o,r=this.getContainerNode()[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){var s=o.value;if("#"+s.id===this.$router.history.current.hash){s.scrollIntoView();break}}}catch(t){e=!0,n=t}finally{try{t||null==r.return||r.return()}finally{if(e)throw n}}},destroyed:function(){this.getContainer()?this.getContainer().removeEventListener("scroll",this.handleScroll):window.removeEventListener("scroll",this.handleScroll)}}),_=m,b=(n("ef2c"),Object(c["a"])(_,f,p,!1,null,"54fdf769",null));b.options.__file="menu.vue";var g=b.exports,x=n("d471"),C=n.n(x),w=(n("981a"),{name:"PGindex",data:function(){return{iframeSrc:""}},components:{UImenu:g},methods:{getContainer:function(){return document.querySelector("._UI-content")},getContainerNode:function(){return document.querySelectorAll("._UI-content>div>*")},onColor:function(t,e){var n=document.querySelectorAll("head style"),o=function(t,e,n){var o=t.indexOf(e)+e.length,r=t.indexOf(n,o);return t.substring(o,r)};n.forEach(function(n){if(-1!=n.innerHTML.indexOf("/*Tstart-")){var r=o(n.innerHTML,"/*Tstart-".concat(t,"*/"),"/*Tend-".concat(t,"*/")),s=n.innerHTML;n.innerHTML=s.replace(new RegExp("(/".concat(r,"/)"),"g"),"/".concat(e,"/"))}})}},watch:{},created:function(){},mounted:function(){var t=this,e=function(t){var e=document.createElement("style");e.type="text/css",e.rel="stylesheet",e.appendChild(document.createTextNode(t));var n=document.getElementsByTagName("head")[0];n.appendChild(e)};e("\n      ._PG-index ._UI-menu .ui-l-title {\n        background-color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/;\n      }\n      ._PG-index ._UI-menu .ui-l-search input:focus {\n        border-left: 5px solid /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/;\n      }\n      ._PG-index ._UI-menu .ui-l-menu .ui-l-i-avtive >a {\n        color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/ !important;\n      }\n      ._PG-index ._UI-menu .ui-l-menu .ui-l-i-avtive >a:hover {\n        color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/ !important;\n      }\n    "),this.$nextTick(function(){var t=document.querySelectorAll("pre code");t.forEach(function(t){C.a.highlightBlock(t)})});var n=document.querySelectorAll("._PG-index ._UI-content h1 strong a");n.forEach(function(e){e.addEventListener("click",function(e){t.$scrollTo(document.querySelector("._PG-index ._UI-content "+e.target.hash)),e.preventDefault()})});var o=document.querySelectorAll("._PG-index ._UI-content h2 strong a");if(o.forEach(function(e){e.addEventListener("click",function(e){t.$scrollTo(document.querySelector("._PG-index ._UI-content "+e.target.hash)),e.preventDefault()})}),this.$store.state.showSidebar){var r=this.$store.state.showSideOutrouter.split(",");r.forEach(function(e){var n=t.$router.history.current.path.replace(/\//g,"");e===n&&(t.$store.state.showSidebar=!1)}),this.iframeSrc+=this.$store.state.showSidebarSrc+this.$router.history.current.path.replace(/\//g,"")}},beforeDestroy:function(){}}),y=w,S=(n("a6d5"),Object(c["a"])(y,d,v,!1,null,null,null));S.options.__file="index.vue";var I=S.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index_PG-guide"},[n("section",{attrs:{id:"intro"}},[n("h1",[n("a",{attrs:{href:"#intro"}},[t._v("介绍")])]),n("p",[t._v("vha(Vue hybrid app) 是基于vue开发的移动端混合app前端库，为快速构建移动端“定制化”ui界面而生。")]),n("p",[t._v("特点是即可快速构建也可自由修改。")]),n("p",[t._v("如果你对界面有“定制化”需求我推荐你使用它，如果有“快速构建”的需求我也推荐你使用它。")]),n("p",[t._v("vha提供了cordova插件的封装"),n("a",{attrs:{href:"https://github.com/neoStudioGroup/vha-native"}},[t._v("vha-native")]),t._v("和构建平台"),n("a",{attrs:{href:"https://github.com/neoStudioGroup/vha"}},[t._v("vha")])]),n("p",[t._v("当然你也可以使用它和weex，hbuild，mpvue等框架配合使用。")])]),n("section",{attrs:{id:"GettingStarted"}},[n("h1",[n("a",{attrs:{href:"#GettingStarted"}},[t._v("快速开始")])]),n("p",[n("a",{staticClass:"ui-r-npm",attrs:{href:"https://www.npmjs.com/package/vha-components",target:"_blank"}},[t._v("vha-components")])]),n("br"),n("p",[t._v("1.添加npm包到项目。")]),n("blockquote",[n("p",[t._v("npm install vha-components --save")])]),n("p",[t._v("2.在main.js内引入组件库")]),n("pre",[n("code",{staticClass:"language-javascript"},[t._v("// import\nimport Vue from 'vue'\nimport vhaComponents from 'vha-components'\nVue.use(vhaComponents)")])]),n("p",[t._v("3.全局使用 rpx() （根目录建立vue.config.js文件内配置）")]),n("pre",[n("code",{staticClass:"language-javascript"},[t._v("module.exports = {\n  css: {\n    loaderOptions: {\n      stylus: {\n        import: ['~vha-components/src/assets/stylus/method.styl']\n      }\n    }\n  }\n}")])])]),n("section",{attrs:{id:"directory"}},[n("h1",[n("a",{attrs:{href:"#directory"}},[t._v("目录结构")])]),n("h3",[t._v("vha")]),n("pre",[n("code",[t._v("vha\n├_docs //官网源文件夹\n├docs //文档网站\n├_ui //ui工具界面源文件\n├ui //ui工具界面\n└bin //\n ├apis.js //全局方法\n ├config.js //配置文件方法\n ├config.json //配置文件\n ├config_debug.json //debug配置文件\n ├global.js //全局挂载\n ├index.js //入口文件\n └index_ui.js //ui命令\n├README //README相关文件\n├.gitignore //git忽略文件\n├.npmignore //npm忽略文件\n├LICENSE //开源协议\n├package.json //包信息\n└README.md //说明文档")])]),n("h3",[t._v("vha-components")]),n("pre",[n("code",[t._v("src\n├assets\n├─fonts //图标文件夹\n├─images //图片文件夹\n└─stylus //css文件夹\n  ├global.styl //全局样式\n  ├iconfont.styl //图标样式\n  ├method.styl //公共方法\n  ├mixin.styl //变量/方法\n  └reset.styl //重置默认css\n├components //组件文件夹\n └utils.js //公共工具类方法\n├vhaEvent.js //vha事件\n├vhaInstall.js //vha组件挂载安装\n├vhaMixin.js //vha_rpx 等方法\n└vhaRouter.js //vhaRt等指令")])])]),n("section",{attrs:{id:"design"}},[n("h1",[n("a",{attrs:{href:"#design"}},[t._v("设计指南")])]),n("p",[t._v("vha全部采用了以750px为基准的rpx单位")]),n("p",[t._v("设计图应采用iphone6尺寸（1334 x 750）。")]),n("p",[t._v("应用rpx()按照设计图尺寸填写即可。")])]),n("section",{attrs:{id:"onepx"}},[n("h1",[n("a",{attrs:{href:"#onepx"}},[t._v("1px线")])]),n("p",[t._v("vha的1px实现与其它库略有不同，因此支持圆角边框。")]),n("p",[t._v("支持的css方法有：")]),n("pre",[n("code",[t._v("border-radius-line($radius)\nborder-top-line($parm)\nborder-right-line($parm)\nborder-bottom-line($parm)\nborder-left-line($parm)")])]),n("p",[t._v("例：")]),n("blockquote",[n("p",[t._v("border-line(1px solid red)")])])]),n("section",{attrs:{id:"directive"}},[n("h1",[n("a",{attrs:{href:"#directive"}},[t._v("指令&方法")])]),n("p",[t._v("vha指令支持将v-vhaRt绑定在元素上进行路由转跳方法与$Router用法相同只不过多了路由动画控制和动态缓存控制。")]),n("p",{staticClass:"ui-r-note _bdc-info"},[t._v("v-vhaRt")]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("类型")]),n("th",[t._v("说明")])])]),n("tbody",[n("tr",[n("td",[t._v("push")]),n("td",[t._v("location")]),n("td",[t._v("转到路由的路径&参数")])]),n("tr",[n("td",[t._v("go")]),n("td",[t._v("Number")]),n("td",[t._v("前进后退的步数")])]),n("tr",[n("td",[t._v("animate")]),n("td",[t._v("String")]),n("td",[t._v('动画的字符串内置的参数"in","out","none"')])]),n("tr",[n("td",[t._v("keepAlive")]),n("td",[t._v("Boolean")]),n("td",[t._v("设置即将转跳过去的页面是否开启缓存(路由内也可完成相同设置)")])])])]),n("p",[t._v("相同作用的js代码为this.$vhaRt")]),n("p",{staticClass:"ui-r-note _bdc-info"},[t._v("this.$vhaRt")]),n("table",[n("thead",[n("tr",[n("th",[t._v("方法")]),n("th",[t._v("类型")]),n("th",[t._v("说明")])])]),n("tbody",[n("tr",[n("td",[t._v("push")]),n("td",[t._v("Object")]),n("td",[t._v("转到路由的路径&参数")])]),n("tr",[n("td",[t._v("go")]),n("td",[t._v("Object")]),n("td",[t._v("前进后退的步数")])])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("类型")]),n("th",[t._v("说明")])])]),n("tbody",[n("tr",[n("td",[t._v("value")]),n("td",[t._v("any")]),n("td",[t._v("指令附带的值")])]),n("tr",[n("td",[t._v("animate")]),n("td",[t._v("String")]),n("td",[t._v('动画的字符串内置的参数"in","out","none"')])]),n("tr",[n("td",[t._v("keepAlive")]),n("td",[t._v("Boolean")]),n("td",[t._v("设置即将转跳过去的页面是否开启缓存(路由内也可完成相同设置)")])])])]),n("p",[t._v("例：")]),n("pre",[n("code",[t._v("<div v-vhaRt=\"{push:'/xxx', animate:'in', keepAlive:true}\"></div>\n<div @click=\"$vhaRt.push({value:'/xxx', animate: 'in', keepAlive:true})\"></div>")])])]),n("section",{attrs:{id:"componentized"}},[n("h1",[n("a",{attrs:{href:"#componentized"}},[t._v("neo组件化命名规范")])]),n("p",[t._v("强烈推荐组合"),n("a",{attrs:{href:"https://github.com/mixingyu/Componentized-name-rules"}},[t._v("neo组件化命名规范")]),t._v("开发")]),n("p",[t._v("可以让开发过程非常简单清晰。")])]),n("section",{staticClass:"_df _jcsb",attrs:{id:"lastSection"}},[n("a",{staticClass:"ui-r-a",attrs:{href:"https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/guide.md",target:"_blank"}},[t._v("在 GitHub 上编辑此页")]),n("span",[t._v("上次更新：2018-12-14 15:55:47")])])])}],j={},k=Object(c["a"])(j,E,T,!1,null,null,null);k.options.__file="guide.vue";var $=k.exports;o["a"].use(h["a"]);var N=new h["a"]({mode:"history",base:"/vha-components/",routes:[{path:"/",component:I,redirect:"/guide",children:[{path:"/guide",component:$}]}]}),O=n("f2de");o["a"].use(O["a"]),o["a"].mixin({components:{},created:function(){},methods:{}});var G=new O["a"].Store({state:{showSidebar:!0,showSideOutrouter:"guide",showSidebarSrc:"https://neostudiogroup.com/vha-appDemo/#/components/",menus:[{title:"开发指南",list:[{text:"开发指南",note:"",noteClass:"",href:"/guide",select:!1,showItem:!1,item:[{subText:"介绍",subNote:"",noteClass:"",href:"#intro",select:!1},{subText:"快速开始",subNote:"",noteClass:"",href:"#GettingStarted",select:!1},{subText:"目录结构",subNote:"",noteClass:"",href:"#directory",select:!1},{subText:"设计指南",subNote:"",noteClass:"",href:"#design",select:!1},{subText:"1px线",subNote:"",noteClass:"",href:"#onepx",select:!1},{subText:"指令",subNote:"",noteClass:"",href:"#directive",select:!1},{subText:"neo组件化命名规范",subNote:"",noteClass:"",href:"#componentized",select:!1}]}]},{title:"基础 Base",list:[{text:"路由视图",note:"Router View",noteClass:"",href:"/routerView",select:!1,showItem:!1,item:[]},{text:"滚动视图",note:"Scroll View",noteClass:"",href:"/scrollView",select:!1,showItem:!1,item:[]},{text:"风格",note:"style",noteClass:"",href:"/style",select:!1,showItem:!1,item:[]},{text:"视图区域",note:"view",noteClass:"",href:"/view",select:!1,showItem:!1,item:[]},{text:"导航栏",note:"NavBar",noteClass:"",href:"/navBar",select:!1,showItem:!1,item:[]},{text:"标签栏",note:"TabBar",noteClass:"",href:"/tabBar",select:!1,showItem:!1,item:[]},{text:"弹出层",note:"Popup",noteClass:"",href:"/popup",select:!1,showItem:!1,item:[]}]},{title:"表单 Forms",list:[{text:"按钮",note:"Button",noteClass:"",href:"/button",select:!1,showItem:!1,item:[]},{text:"按钮组",note:"Button Group",noteClass:"",href:"/buttonGroup",select:!1,showItem:!1,item:[]},{text:"输入框",note:"Input",noteClass:"",href:"/input",select:!1,showItem:!1,item:[]},{text:"开关",note:"Switch",noteClass:"",href:"/switch",select:!1,showItem:!1,item:[]},{text:"单选框",note:"Radio",noteClass:"",href:"/radio",select:!1,showItem:!1,item:[]},{text:"多选框",note:"Checkbox",noteClass:"",href:"/checkbox",select:!1,showItem:!1,item:[]},{text:"滑块",note:"Slider",noteClass:"",href:"/slider",select:!1,showItem:!1,item:[]}]},{title:"扩展 Expansion",list:[{text:"轮播",note:"Swipe",noteClass:"",href:"/swipe",select:!1,showItem:!1,item:[]},{text:"角标",note:"Badge",noteClass:"",href:"/badge",select:!1,showItem:!1,item:[]},{text:"对话框",note:"Dialog",noteClass:"",href:"/dialog",select:!1,showItem:!1,item:[]},{text:"上拉菜单",note:"Action Sheet",noteClass:"",href:"/actionSheet",select:!1,showItem:!1,item:[]},{text:"信息提示",note:"Toast",noteClass:"",href:"/toast",select:!1,showItem:!1,item:[]},{text:"弹出气泡",note:"Popover",noteClass:"",href:"/popover",select:!1,showItem:!1,item:[]}]}]},mutations:{},actions:{}}),U=n("9838");Object(U["a"])("".concat("/vha-components/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var A=n("38bc"),P=n.n(A);n("70e7");N.beforeEach(function(t,e,n){""===t.hash&&P.a.start(),n()}),N.afterEach(function(){P.a.done()});var R=n("aff2");o["a"].use(R,{container:"._UI-content",duration:200,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),o["a"].config.productionTip=!1,new o["a"]({router:N,store:G,render:function(t){return t(u)}}).$mount("#app")},"7faf":function(t,e,n){"use strict";var o=n("b4f6"),r=n.n(o);r.a},a6d5:function(t,e,n){"use strict";var o=n("3663"),r=n.n(o);r.a},b0ba:function(t,e,n){},b4f6:function(t,e,n){},ef2c:function(t,e,n){"use strict";var o=n("b0ba"),r=n.n(o);r.a}});