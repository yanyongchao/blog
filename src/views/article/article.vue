<template>
  <div class="m-article">
    <h2 class="title">{{title}}</h2>
    <div class="meta clearfix">
      <div class="time pull--left">
        <i class="icon-calendar"></i>
        <span>{{new Date(createAt).getTime() | timestampFormat('YYYY-MM-DD')}}</span>
      </div>
      <div class="split-line pull--left">|</div>
      <div class="classification pull--left">
        <i class="icon-sort" style="font-size: 14px;"></i>
        <span>{{getClassification(classification)}}</span>
      </div>
      <div class="split-line pull--left">|</div>
      <div class="hits">
        <i class="icon-fits"></i>
        <span>{{pv}}</span>
      </div>
    </div>
    <div v-html="content" class="markdown-body"></div>
  </div>
</template>

<script>
import { getArticleRes } from '@/http'
import marked from '@/util/marked'
import sortMixin from '@/mixin/sort.js'

export default {
  mixins: [sortMixin],
  data() {
    return {
      title: '',
      content: '',
      createAt: '',
      desc: '',
      classification: '',
      pv: ''
    }
  },
  methods: {
    getAtricle() {
      getArticleRes(this.$route.params.id).then(res => {
        const {
          classification,
          content,
          createAt,
          desc,
          title,
          pv
        } = res.data.article
        this.content = marked(content)
        this.title = title
        this.createAt = createAt
        this.desc = desc
        this.classification = classification
        this.pv = pv
      })
    }
  },
  created() {
    this.getAtricle()
  },
  watch: {
    $route(to, from) {
      this.getAtricle()
    }
  }
}
</script>

<style lang="stylus">
.m-article
  padding 25px
  background-color #f5e5bf
  box-shadow 1px 2px 3px #ecd293
  border 1px solid #ecd293
  .title
    font-size 22px
    line-height 22px
    color #333
    padding-bottom 10px
    border-bottom 1px solid #b5b5b5
    margin-bottom 10px
  .meta
    color #666
    margin-bottom 15px
    .split-line
      margin 0 10px
</style>
