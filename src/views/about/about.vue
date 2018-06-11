<template>
  <div class="m-about">
    <div class="title">关于</div>
    <div class="author">
      <img class="avatar" src="../../assets/images/avatar.jpg" alt="">
      <ul>
        <li>
          <span>name：</span>
          <span>happy我欲成风</span>
        </li>
        <li>
          <span>email：</span>
          <a href="mailto:1585094062@qq.com" target="_blank">1585094062@qq.com</a>
        </li>
        <li>
          <span>github：</span>
          <a href="https://github.com/yanyongchao" target="_blank">yanyongchao</a>
        </li>
        <li>
          <span>掘金：</span>
          <a href="https://juejin.im/user/5a7fdfbf6fb9a0633c660b3f">yanyongchao</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.m-about
  position relative
  padding 25px
  background-color #f5e5bf
  .title
    font-size 20px
    line-height 20px
    color #333
    padding-bottom 10px
    box-sizing content-box
    border-bottom 1px solid #b5b5b5
  li
    margin-bottom 20px
    &:last-child
      margin-bottom 0
  .author
    position absolute
    top 56px
    bottom 0
    left 0
    right 0
    display flex
    align-items center
    justify-content center
  .avatar
    height 200px
    border-radius 50%
    margin-right 50px
</style>
