<template>
  <nav class="nav">
    <router-link class="item" to="/money" active-class="selected"> <Icons name="label" />记账 </router-link>
    <router-link class="item" to="/labels" active-class="selected"> <Icons name="money" />标签</router-link>
    <router-link class="item" to="/statistics" active-class="selected"> <Icons name="sta" />统计</router-link>
  </nav>
</template>

<script lang='ts'>

export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.nav {
  @extend %outerShadow;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #777;
  > .item{
    padding: 2px 0;
    width: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon{
      width: 20px;
      height: 20px;
    }
  }
  > .item.selected{
   color: orange;
  }
}

</style>