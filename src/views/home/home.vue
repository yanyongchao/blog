<template>
  <div class="m-home" :class="articles.length ? null : 'empty'">
    <ul v-if="articles.length">
      <li v-for="(item, index) in articles" :key="index">
        <router-link class="title" :to="{name: 'article', params: { id: item._id }}">{{item.title}}</router-link>
        <div class="meta clearfix">
          <div class="time pull--left">
            <i class="icon-calendar"></i>
            <span>{{new Date(item.createAt).getTime() | timestampFormat('YYYY-MM-DD')}}</span>
          </div>
          <div class="split-line pull--left">|</div>
          <div class="classification pull--left">
            <i class="icon-sort" style="font-size: 14px;"></i>
            <span>{{getClassification(item.classification)}}</span>
          </div>
        </div>
        <p class="desc">{{item.desc}}</p>
        <router-link class="more" :to="{name: 'article', params: { id: item._id }}">阅读更多 >></router-link>
      </li>
    </ul>
    <div class="wrapper" v-if="!articles.length">
      <i class="icon-empty"></i>
      <p>暂无文章</p>
    </div>
  </div>
</template>

<script>
import { getArticlesRes } from '@/http'
import { mapGetters } from 'vuex'
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
    getAtricles() {
      getArticlesRes(this.$route.query).then(res => {
        if (res.state === 1000) {
          this.articles = res.data.articles
        }
      })
    }
  },
  created() {
    this.getAtricles()
  },
  watch: {
    $route(to, from) {
      this.getAtricles()
    }
  }
}
</script>

<style lang="stylus">
.m-home
  li
    position relative
    height 180px
    padding 25px
    background-color #f5e5bf
    box-shadow 1px 2px 3px #ecd293
    border 1px solid #ecd293
    margin-bottom 40px
    &:last-child
      margin-bottom 0
    .title
      display inline-block
      font-size 22px
      line-height 26px
      height 28px
      color #333
    .meta
      color #666
      margin 10px 0 15px 0
      padding-top 10px
      border-top 1px solid #b5b5b5
      .split-line
        margin 0 10px
    .desc
      font-size 15px
      color #333
    .more
      position absolute
      right 25px
      bottom 25px
      color #666
      cursor pointer
      height 21px
  &.empty
    position relative
    text-align center
    background-color #f5e5bf
    height 100%
    .wrapper
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      i
        font-size 100px
        color #666
      p
        color #333
        font-size 16px
        margin-top 10px
</style>
