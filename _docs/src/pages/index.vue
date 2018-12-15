<style lang="stylus">
._PG-index
  height 100%
  
  *
    transition all .4s
  
  .ui-l-menu::-webkit-scrollbar-track-piece
    background-color transparent
  
  // UI组件-左侧列表
  ._UI-menu
    width 240px
    border-right 1px solid lineCl
    background-color #fefefe
    .ui-l-title
      cursor pointer
      padding 0 20px
      height 60px
      background url('../assets/images/cloud-bg.png') no-repeat 0% bottom
      background-color /*Tstart-mainCl*/mainCl/*Tend-mainCl*/
      box-shadow inset -10px 0 10px -10px rgba(0,0,0,.1)
      span
        margin-left 8px
        font-size 1.6em
    .ui-l-search
      input
        padding 13px
        border none
        width 100%
        font-weight 600
        color #000
        font-size 1.1em
        border-left 5px solid #fff
        border-bottom 1px solid lineCl
        box-sizing border-box
        background-color #fff
        &:focus
          border-left 5px solid /*Tstart-mainCl*/mainCl/*Tend-mainCl*/
    .ui-l-color
      padding 20px
      div
        cursor pointer
        width 18px
        height 18px
        border-radius 3px
        border 2px solid #fff
        box-shadow 0 0 0 1px #ddd
        box-sizing content-box
      
  // UI组件-右侧内容
  ._UI-content
    // padding 40px
    // background-color white
    .ui-r-a
      font-size .8em
      color #1890ff !important
      &:hover
        text-decoration underline
    
    #lastSection
      font-size 14px
      span
        color #aaa
    .ui-r-npm
      padding 6px
      padding-left 26px
      font-size .8em
      border 1px solid #eee
      border-radius 3px
      color #888888 !important
      background url('../assets/images/npm.png') no-repeat 6px center
      &:hover
        color #474a54 !important
        
    .ui-r-return
      padding-left 10px
      font-size 0.8em
      color #999
      span
        color #1890ff
    
    ul
      padding 10px 30px
      li
        list-style-type disc
    
    blockquote
      padding 10px
      border 0px
      border-radius 3px
      box-shadow 0 0 0 1px #eee
      p
        margin 0
    
    section
      padding 25px 40px
      width 100%
      font-size 1.1em
      color #474a54
      border-top 1px solid lineCl
      &:first-child
        border none
      ._cl-aaaaaa
        font-style italic
      h1, h2, h3, h4, h5, h6
        margin-bottom 30px
        strong
          a
            &:after
              content '#'
              margin-left 6px
              color #1890ff
      h1
        a
          font-weight bold
          @extend ._clear-a
          color #474a54 !important
      table
        border 1px solid #E1E1E1
        margin 0 0 20px 0
        border-collapse collapse
        td, th
          border 1px solid #ccc
          padding 10px
          font-size .9em
          text-align left
        th
          background #f7f7f7

      pre
        padding 0
        border 1px solid #eee
        border-radius 8px
        // box-shadow 0 1px 6px rgba(0,0,0,0.15)
        code
          padding 15px
          border-radius 8px
          white-space pre-wrap
          font-size 16px
          letter-spacing .1px
          // background-color #282c34
      
      dl
        border-top 1px solid #eee
        border-bottom 1px solid #eee
        padding 0 0 20px 0
        margin 0 0 20px 0
        dt
          width 30%
          float left
          font-weight 700
          position relative
          top 20px
        dd
          margin-left 30%
          padding-left 15px
          margin-top 20px
          &:after
            visibility hidden
            display block
            content ""
            clear both
            height 0
          +dd
            margin-top 0
        
      .ui-r-note
        border-left 5px solid #aaa
        padding 12px 15px
        margin-left -20px
        margin-right -15px
        background-color #FAFAFA
        border-radius 2px
      ._bdc-info
        font-weight bold
  
  //UI组件-侧边栏
  ._UI-sidebar
    padding 20px
    .ui-s-phone
      padding 90px 12px
      height 100%
      font-size 0
      background-image url('../assets/images/phone-case.png')
      background-repeat no-repeat
      background-size 100%
      .ui-s-p-if
        border-radius 6px
        overflow hidden
        transform translateY(0px) 
      iframe
        width 375px
        height 667px
        transition all 0s

</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="_PG-index _df">
    <!-- UI组件-左侧列表 -->
    <div class="_UI-menu _df _fdc">
      <div class="ui-l-title _df _aic _cl-fff" @click="$router.push('/')">
        <i class="fa fa-mobile-phone fa-2x"></i>
        <span class="_di">Components docs</span>
      </div>
      <div class="ui-l-search">
        <input class="_reInput" placeholder="Search" />
      </div>
      <div class="ui-l-menu _flexYauto">
        <UImenu :pData="$store.state.menus" :getContainer="getContainer" :getContainerNode="getContainerNode"></UImenu>
        <!-- 
        <section>
          <p class="ui-l-i-title">Documentation</p>
          <ul>
            <li class="ui-l-i-avtive">
              <a href="#documentationgetting_started">
                Getting Started
              </a>
              <ul>
                <li class="ui-l-i-avtive">
                  <a href="#documentationgetting_started">
                    启动屏幕
                    <span>Splashscreen</span>
                  </a>
                </li>
                <li>
                  <a href="#documentationgetting_started">
                    状态栏
                    <span>StatusBar</span>
                  </a>
                </li>
                <li>
                  <a href="#documentationgetting_started">
                    网络状态
                    <span>Network</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#documentationauthentication">
                Authentication
              </a>
            </li>
            <li>
              <a href="#documentationerrors">
                Errors
              </a>
            </li>
          </ul>
        </section>
         -->
      </div>
      <!-- <div class="ui-l-color _df _jssa">
        <div style="background-color:#03a6ff" @click="onColor('mainCl', '#03a6ff')"></div>
        <div style="background-color:#f1404b" @click="onColor('mainCl', '#f1404b')"></div>
        <div style="background-color:#3ac569" @click="onColor('mainCl', '#3ac569')"></div>
        <div style="background-color:#35d69b" @click="onColor('mainCl', '#35d69b')"></div>
      </div> -->
    </div>
    <!-- UI组件-右侧内容 -->
    <div class="_UI-content _flexYauto">
      <router-view></router-view>
    </div>
    <!-- UI组件-侧边栏 -->
    <div class="_UI-sidebar" v-if="$store.state.showSidebar">
      <div class="ui-s-phone">
        <div class="ui-s-p-if">
          <iframe :src="iframeSrc" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UImenu from "../components/menu";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css";
export default {
  name: 'PGindex',
  data() {
    //动态数据
    return {
      iframeSrc: ''
    }
  },
  components: {
    //组件 - 引入或定义
    UImenu
  },
  methods: {
    //方法 - 进入页面创建
    getContainer: function () {
      return document.querySelector('._UI-content')
    },
    getContainerNode: function () {
      return document.querySelectorAll('._UI-content>div>*')
    },
    onColor: function (name, color) {
      let temp_styles = document.querySelectorAll('head style')
      
      //取字符串中间内容
      let getStrMid = function (str, starStr, endStr) {
        let temp_for = str.indexOf(starStr) + starStr.length
        let temp_back = str.indexOf(endStr, temp_for)
        return str.substring(temp_for, temp_back)
      }
      
      // 更换主题色
      temp_styles.forEach(element => {
        if (element.innerHTML.indexOf(`/*Tstart-`) != -1) {
          let temp_string = getStrMid(element.innerHTML, `/*Tstart-${name}*/`, `/*Tend-${name}*/`)
          let temp_innerHTML = element.innerHTML
          element.innerHTML = temp_innerHTML.replace(new RegExp(`(/${temp_string}/)`,'g'), `/${color}/`)
        }
      })
    }
  },
  watch: {
    //观察 - 数据或方法变动
    // 'this.$router': function () {
    //   console.log(this.$router)
    // }
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.el存在
    let loadCssCode = function (code){
        var style = document.createElement('style');
        style.type = 'text/css';
        style.rel = 'stylesheet';
        //for Chrome Firefox Opera Safari
        style.appendChild(document.createTextNode(code));
        //for IE
        //style.styleSheet.cssText = code;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(style);
    }
    loadCssCode(`
      ._PG-index ._UI-menu .ui-l-title {
        background-color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/;
      }
      ._PG-index ._UI-menu .ui-l-search input:focus {
        border-left: 5px solid /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/;
      }
      ._PG-index ._UI-menu .ui-l-menu .ui-l-i-avtive >a {
        color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/ !important;
      }
      ._PG-index ._UI-menu .ui-l-menu .ui-l-i-avtive >a:hover {
        color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/ !important;
      }
    `)

    //下次渲染时渲染代码高亮
    this.$nextTick(function() {
      let blocks = document.querySelectorAll("pre code")
      blocks.forEach(block => {
        // hljs.configure({languages: ['javascript']})
        hljs.highlightBlock(block)
        // hljs.registerLanguage('javascript', javascript);
      })
    })
    
    // 使h1里的a链接带有动画
    let temp_h1a = document.querySelectorAll('._PG-index ._UI-content h1 strong a')
    temp_h1a.forEach(el => {
      el.addEventListener('click', (event) => {
        this.$scrollTo(document.querySelector('._PG-index ._UI-content ' + event.target.hash))
        event.preventDefault()
      })
    })
    // 使h2里的a链接带有动画
    let temp_h2a = document.querySelectorAll('._PG-index ._UI-content h2 strong a')
    temp_h2a.forEach(el => {
      el.addEventListener('click', (event) => {
        this.$scrollTo(document.querySelector('._PG-index ._UI-content ' + event.target.hash))
        event.preventDefault()
      })
    })
    
    //自适应侧边栏iframe src
    if (this.$store.state.showSidebar) {
      // 分割被去除的路由组
      let temp_outRouter = this.$store.state.showSideOutrouter.split(",")
      temp_outRouter.forEach(element => {
        let temp_path = this.$router.history.current.path.replace(/\//g,'')
        // 如果在被去除的路由组找到当前路径名,就不显示
        if (element === temp_path) {
          this.$store.state.showSidebar = false
        }
      })
      // this.iframeSrc = this.$store.state.showSidebarSrc
      this.iframeSrc += this.$store.state.showSidebarSrc + this.$router.history.current.path.replace(/\//g,'')
    }
    
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  }
}
</script>