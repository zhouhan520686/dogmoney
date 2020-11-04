import Icons from '@/components/Icons.vue';
<template>
  <Layout>
    <ul class="tags">
      <li>
        <span>衣</span>
        <Icons name="right" />
      </li>
      <li>
        <span>食</span>
        <Icons name="right" />
      </li>
      <li>
        <span>住</span>
        <Icons name="right" />
      </li>
      <li>
        <span>行</span>
        <Icons name="right" />
      </li>
    </ul>
    <div class="createTag-wrapper">
      <button class="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang='ts'>
export default {
  name: "Labels",
};
</script>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
    }
  }
}
.createTag {
  background: #767676;
  color: #fff;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    // 表示父元素 里面的选择器也可以是父元素
    text-align: center;
    padding: 16px;
    margin-top: 44 - 16px;
  }
}
</style>