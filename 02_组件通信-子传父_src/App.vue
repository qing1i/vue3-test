<template>
  <div>
    <h2>当前值为 {{ count }}</h2>
    <!-- 1.监听子组件的add事件，调用父组件中的increment方法 -->
    <AddCount @add="increment"></AddCount>
  </div>
</template>

<script>
import AddCount from "./components/AddCount.vue"

export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment(count) {
      this.count += count
    }
  },
  components: {
    AddCount
  }
}
</script>