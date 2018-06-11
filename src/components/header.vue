<template>
  <div class="m-header">
    <div class="nav clearfix">
      <ul class="clearfix">
        <li>
          <router-link to="/">
            <span>首页</span>
            <i class="icon-home"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/archive">
            <span>归档</span>
            <i class="icon-archive"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <span>关于</span>
            <i class="icon-about"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/subscribe">
            <span>订阅</span>
            <i class="icon-subscribe"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="author">
      <h2>
        <router-link to="/">happy我欲成风</router-link>
      </h2>
      <p class="intro">前端打字员，代码搬运工</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.m-header
  padding-top 25px
  .nav
    height 40px
  ul
    float right
  li
    float left
    a
      display inline-block
      padding 3px 18px 3px
      line-height 30px
      color #98630a
      font-size 16px
      border 1px solid transparent
      transition all 0.3s
      &.router-link-exact-active
        box-shadow 0 0 10px rgba(0, 0, 0, 0.2) inset
        border-bottom 2px solid #98630a
      &:hover
        box-shadow 0 0 10px rgba(0, 0, 0, 0.2) inset
        border-bottom 2px solid #98630a
  .author
    margin-top 50px
    margin-bottom 110px
    a
      font-size 42px
      font-weight bold
      color #98630a
      line-height 60px
      letter-spacing 3px
    .intro
      color #845608
      text-indent 2px
</style>
