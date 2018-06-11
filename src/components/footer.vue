<template>
  <div class="m-footer">
    <div class="pv">
      <span>大神到访数：</span>
      <span>{{pvs}}</span>
    </div>
    <div class="motto">All or Nothing，Now or Never</div>
    <div class="copyright">&copy;浙ICP备17042290</div>
  </div>
</template>

<script>
import { getPvsRes } from '@/http'
export default {
  data () {
    return {
      pvs: ''
    }
  },
  methods: {
    getPvs () {
      getPvsRes().then(res => {
        if (res.state === 1000) {
          this.pvs = res.data.pvs
        }
      })
    }
  },
  created () {
    this.getPvs()
  }
}
</script>

<style lang="stylus">
.m-footer
  font-size 12px
  margin-top 80px
  text-align center
  padding 50px 0
  color #55575b
  line-height 20px
  .copyright
    letter-spacing 1px
</style>
