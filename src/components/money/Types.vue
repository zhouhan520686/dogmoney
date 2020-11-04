import Types from '@/components/money/Types.vue';
import Vue from 'vue';
<template>
  <ul class="types">
    <li :class="value === '-' && 'selected'" @click="selectType('-')">支出</li>
    <li :class="value === '+' && 'selected'" @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator"; // 第三方库引入
// 1.文档自动提示更智能
// 2.你不能写随便写 .toString()
// 3.编译报错,无法变成JS,严谨
@Component //自动处理data和methods
export default class Types extends Vue {
  // @Prop(Number) xxx: number | undefined;
  // 不写undefined写个初始值
  // @Prop(Number) xxx=0;
  // 右边是编译时,左边是运行时
  // Prop告诉Vue xxx不是data 是prop
  // Number 告诉Vue xxx 运行时是个Number
  // xxx 是属性名
  // number | undefined; 告诉TS xxx的编译时类型
  @Prop() readonly value!: string; // !,不用管有没有初始值,外部传入会有值
  selectType(type: string) {
    //type只能说'-'和'+'中的一个
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    this.$emit('update:value',type)
  }
}
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  align-items: center;
  > li {
    width: 50%;
    height: 64px;
    line-height: 64px;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>