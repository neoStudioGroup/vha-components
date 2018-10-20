<style scoped lang="stylus">
._UI-menu
  padding 20px 0
  .ui-l-i-title
    margin 8px 20px
    // line-height 1em
    font-size 1.1em
    font-weight 700
    letter-spacing 1px
    color #666
  li
    a
      @extend ._clear-a
      padding 4px 28px
      display block
      font-size 1em
      color #777 !important
      // border-left 5px solid transparent
      &:hover
        color #000 !important
      span
        margin-left 2px
        color #aaa
        font-size 0.8em
  .ui-l-i-avtive
    >a
      color /*Tstart-mainCl*/mainCl/*Tend-mainCl*/ !important
      // border-left 5px solid mainCl
      &:hover
        color /*Tstart-mainCl*/mainCl/*Tend-mainCl*/ !important
  >section
    >ul
      >li
        >ul
          >li
            >a
              padding 4px 36px
              font-size 0.8em

</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="_UI-menu">
    <section v-for="(menu, menuIndex) in this.pData" :key="menuIndex">
      <p class="ui-l-i-title">{{menu.title}}</p>
      <ul>
        <li :class="menuList.select ? 'ui-l-i-avtive' : ''" v-for="(menuList, menuListIndex) in menu.list" :key="menuListIndex">
          <a :href="procURL(menuList.href)" @click="onItemshow(menuIndex, menuListIndex)">
            {{menuList.text}}
            <span :class="menuList.noteClass">{{menuList.note}}</span>
          </a>
          <ul v-show="menuList.showItem">
            <li :class="menuListItem.select ? 'ui-l-i-avtive' : ''" v-for="(menuListItem, menuListItemIndex) in menuList.item" :key="menuListItemIndex">
              <a @click="onToscroll(menuListItem.href)">
                {{menuListItem.subText}}
                <span :class="menuListItem.noteClass">{{menuListItem.subNote}}</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'UImenu',
  props: {
    //父组件参数
    pData: {
      type: Array,
      default:  function () {
        return []
      }
    },
    getContainer: {
      type: Function,
      default: function () {
      }
    },
    getContainerNode: {
      type: Function,
      default: function () {
      }
    }
  },
  data() {
    //动态数据
    return {
      observer: null,
      nowElement: null
    }
  },
  methods: {
    //方法 - 进入页面创建
    // onItemshow: function (menusIndex, listIndex) {
    //   this.menus[menusIndex].list[listIndex].showItem = !this.menus[menusIndex].list[listIndex].showItem
    // },
    procURL: function (url) {
      return this.$router.history.base + url
    },
    procMenu: function () {
      //处理左侧菜单按钮点亮状态
      this.pData.forEach(p_el => {
        p_el.list.forEach(pl_el => {
          // 判断router路径展开一级菜单与滚动条位置无关
          let temp_path = this.$router.history.current.path
          if('/' + temp_path.replace(/\//g, '') === pl_el.href) {
            pl_el.showItem = true
            pl_el.select = true
          }
          // 以后完善父节点的自动展开
          // if (el.href.indexOf('#') != -1) {
          // }
          
          // 根据滚动条位置元素设置菜单选中
          pl_el.item.forEach(pli_el => {
            if ('#' + this.nowElement.id === pli_el.href) {
              pli_el.select = true
            } else {
              pli_el.select = false
            }
          })
        })
      })
      
      window.history.replaceState({}, null, '#' + this.nowElement.id)
      // window.document.title = this.nowElement.id
    },
    handleScroll: function () {
      // 滚动处理
      let scrollTop = 0, scrollHeight = 0, clientHeight = 0
      if (this.getContainer()) {
        scrollTop = this.getContainer().scrollTop
        scrollHeight = this.getContainer().scrollHeight
        clientHeight = this.getContainer().clientHeight
      } else {
        scrollTop = document.body.scrollTop
        scrollHeight = document.body.scrollHeight
        clientHeight = document.body.clientHeight
      }
      // console.log(scrollTop, scrollHeight - clientHeight)
      if (scrollTop >= scrollHeight - clientHeight - 50) {
        //滚动条滚到最底部
        this.nowElement = this.getContainerNode()[this.getContainerNode().length - 2]
        this.procMenu()
      } else {
        let listHeight = 0
        for (const element of this.getContainerNode()) {
          listHeight += element.clientHeight
          if (scrollTop < listHeight) {
            // console.log(scrollTop, listHeight)
            if (element != this.nowElement) {
              this.nowElement = element
              this.procMenu()
            }
            break
          }
        }
      }
    },
    onToscroll: function (href) {
      for (const element of this.getContainerNode()) {
        if ("#" + element.id === href) {
          this.$scrollTo(element)
          // element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
          break
        }
      }
    }
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.el存在
    
    // 滚动监听
    if (this.getContainer()) {
      this.getContainer().addEventListener('scroll', this.handleScroll)
    } else {
      window.addEventListener('scroll', this.handleScroll)
    }
    this.handleScroll()
    
    for (const element of this.getContainerNode()) {
      if ("#" + element.id === this.$router.history.current.hash) {
        element.scrollIntoView()
        // this.getContainer().scrollTop = element.offsetTop
        break
      }
    }
    
  },
  destroyed() {
    //销毁后
    
    // 取消滚动监听
    if (this.getContainer()) {
      this.getContainer().removeEventListener('scroll', this.handleScroll)
    } else {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
</script>