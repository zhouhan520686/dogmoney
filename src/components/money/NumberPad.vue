<template>
  <div class="number-pad">
    <div class="output">{{ output }}</div>
    <div class="btns">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="okbtn">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator"; // 第三方库引入
// 1.文档自动提示更智能
// 2.你不能写随便写 .toString()
// 3.编译报错,无法变成JS,严谨
@Component //自动处理data和methods
export default class NumberPad extends Vue {
  @Prop() readonly value!: number;
  output = this.value.toString();
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent as string; //输入的值
    // const input=button.textContent !// 第二种写法:不为空
    if (this.output.length === 16) {
      return;
    }
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0 && input === ".") {
      return;
    }
    this.output += input;
  }
  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }
  clear() {
    this.output = "0";
  }
  ok() {
    this.$emit("update:value", this.output);
    this.$emit('submit',this.output)
    console.log(this.value);
    this.output='0'
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.number-pad {
  .output {
    height: 72px;
    padding: 9px 16px;
    font-size: 36px;
    font-family: Consolas, monospace;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px fade_out(black, 0.5),
      inset 0 5px 5px -5px fade_out(black, 0.5);
  }
  .btns {
    @extend %clearFix;
    @extend %innerShadow;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.okbtn {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 25 * 2%;
      }
      $bg: #f2f2f2;
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken($bg, 4%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bg, 8%);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($bg, 12%);
      }
      &:nth-child(8),
      &:nth-child(13),
      &:nth-child(11) {
        background: darken($bg, 16%);
      }
      &:nth-child(12) {
        background: darken($bg, 20%);
      }
      &:nth-child(14) {
        background: darken($bg, 24%);
      }
    }
  }
}
</style>