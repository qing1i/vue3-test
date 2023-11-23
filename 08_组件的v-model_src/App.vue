<template>
  <div>
    <!-- 组件的v-model -->
    <Counter v-model="appCount"></Counter>
    <!-- 相当于 -->
    <!-- <Counter v-bind:modelValue="appCount" v-on:update:modelValue="appCount=$event"/> -->

    <MyInput v-model="inputValue"></MyInput>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import MyInput from "./components/MyInput.vue";

export default {
  components: {
    Counter,
    MyInput
  },
  data() {
    return {
      appCount: 100,
      inputValue: "hello"
    }
  }
}
</script>