<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input
        class="value"
        type="text"
        placeholder="在这里添加备注"
        v-model="value"
      />
    </label>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator"; // 第三方库引入
@Component //自动处理data和methods
export default class Notes extends Vue {
  value = "";
  @Watch("value")
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  display: block;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
    padding-left: 16px;
  }
  .value {
    border: none;
    height: 64px;
    flex-grow: 1;
    background: transparent;
  }
}
</style>