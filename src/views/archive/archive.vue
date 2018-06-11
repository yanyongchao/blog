<template>
  <div class="m-archive">
    <h2 class="title">最近的{{articles.length}}篇文章（共{{total}}篇）</h2>
    <ul>
      <li v-for="(item, index) in articles" :key="index">
        <span>{{new Date(item.createAt).getTime() | timestampFormat('YYYY.MM.DD')}}：</span>
        <router-link :to="{name: 'article', params: { id: item._id }}">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getArticlesRes } from '@/http'

export default {
  data() {
    return {
      articles: [],
      total: 0
    }
  },
  methods: {
    getAtricles() {
      getArticlesRes(this.$route.query).then(res => {
        if (res.state === 1000) {
          this.articles = res.data.articles
          this.total = res.data.total
        }
      })
    }
  },
  created() {
    this.getAtricles()
  }
}
</script>
<style lang="stylus">
.m-archive
  background-color #f5e5bf
  .title
    font-size 20px
    line-height 26px
    height 28px
    color #333
    padding 15px 0 8px 15px
    border-bottom 1px solid #b5b5b5
    box-sizing content-box
    margin-bottom 20px
  ul
    margin-left 40px
    li
      list-style-type disc
      margin 10px 0
      font-size 14px
      span
        color #111
      a
        color #000
</style>
