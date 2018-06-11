<template>
  <div class="m-sidebar" ref="sidebar">
    <div class="search-bar">
      <input type="text" placeholder="Search">
      <i class="icon-search"></i>
    </div>
    <div class="latest-article list-container">
      <h2 class="title">
        <i class="icon-article"></i>
        <span>最新文章</span>
      </h2>
      <ul>
        <li v-for="(item, index) in articles" :key="index">
          <router-link :to="{name: 'article', params: { id: item._id }}">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="classification list-container">
      <h2 class="title">
        <i class="icon-sort"></i>
        <span>分类</span>
      </h2>
      <ul>
        <li v-for="(item, index) in classifications" :key="index">
          <router-link :to="{name: 'home', query: {classification: item._id}}">{{getClassification(item._id)}}</router-link>
        </li>
      </ul>
    </div>
    <div class="category list-container">
      <h2 class="title">
        <i class="icon-biaoqian"></i>
        <span>标签</span>
      </h2>
      <ul>
        <li v-for="(item, index) in categories" :key="index">
          <router-link :to="{name: 'home', query: {category: item._id}}">{{getCategory(item._id)}}</router-link>
        </li>
      </ul>
    </div>
    <!-- <div class="archive list-container">
      <h2 class="title">
        <i class="icon-archive"></i>
        <span>归档</span>
      </h2>
      <ul>
        <li>
          <a href="#">四月 2018</a>
        </li>
        <li>
          <a href="#">四月 2018</a>
        </li>
        <li>
          <a href="#">四月 2018</a>
        </li>
      </ul>
    </div> -->
    <!-- <div class="friend-link list-container">
      <h2 class="title">
        <i class="icon-lianjie"></i>
        <span>友情链接</span>
      </h2>
      <ul>
        <li>
          <a href="#">燕山大学</a>
        </li>
        <li>
          <a href="#">燕山大学</a>
        </li>
        <li>
          <a href="#">燕山大学</a>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { getArticlesRes } from '@/http'
import { mapGetters, mapActions } from 'vuex'
import sortMixin from '@/mixin/sort.js'

export default {
  mixins: [sortMixin],
  data() {
    return {
      articles: []
    }
  },
  computed: {
    ...mapGetters(['categories', 'classifications'])
  },
  methods: {
    ...mapActions(['getCategories', 'getClassifications']),
    getAtricles() {
      return new Promise((resolve, reject) => {
        getArticlesRes().then(res => {
          if (res.state === 1000) {
            this.articles = res.data.articles
            resolve()
          }
        })
      })
    }
  },
  mounted() {
    const p1 = this.getAtricles()
    const p2 = this.getCategories()
    const p3 = this.getClassifications()
    Promise.all([p1, p2, p3]).then(() => {
      this.$nextTick(() => {
        this.$emit('height-setting', this.$refs.sidebar.offsetHeight)
      })
    })
  }
}
</script>

<style lang="stylus">
.sidebar
  .search-bar
    position relative
    margin-bottom 20px
    input
      width 100%
      height 32px
      box-shadow 1px 2px 3px #ecd293
      border 1px solid #ecd293
      border-radius 16px
      padding-left 35px
      background-color #f5e5bf
      font-size 14px
      color #333
    i
      position absolute
      top 50%
      transform translateY(-50%)
      left 15px
      font-size 14px
  .list-container
    padding 20px
    box-shadow 1px 2px 3px #ecd293
    border 1px solid #ecd293
    background-color #f5e5bf
    border-radius 4px
    margin-bottom 20px
    &:last-child
      margin-bottom 0
    .title
      padding-bottom 10px
      border-bottom 1px solid #b5b5b5
      line-height 20px
      font-size 16px
      color #333
      margin-bottom 5px
      i
        font-size 16px
    ul
      li
        padding 5px 0
        a:hover
          border-bottom 1px solid #b5b5b5
  .classification, .category
    li
      display inline-block
      margin 0 5px
</style>
