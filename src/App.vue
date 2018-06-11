<template>
  <div class="layout">
    <div class="container">
      <v-header></v-header>
      <div class="content clearfix">
        <router-view class="view pull--left" :style="`min-height: ${sidebarH}px`"/>
        <side-bar class="sidebar pull--right" @height-setting="setHeight"></side-bar>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import SideBar from '@/components/sidebar.vue'
import Footer from '@/components/footer.vue'

export default {
  data () {
    return {
      sidebarH: 500
    }
  },
  name: 'App',
  components: {
    'v-header': Header,
    SideBar,
    'v-footer': Footer
  },
  methods: {
    setHeight (val) {
      this.sidebarH = val
    }
  }
}
</script>

<style lang="stylus">
@import './assets/css/reset.css'
@import './assets/css/common.css'
.layout
  min-height 100%
.container
  max-width 1100px
  margin 0 auto
.view
  width 785px
.sidebar
  width 254px
</style>
