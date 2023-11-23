<script setup>
import {computed} from "vue"
import {useStore} from "vuex"

const store = useStore()

const count = computed(() => store.state.count)

const doubleCount = computed(() => store.getters.doubleCount)

const increment = () => {
  // 重要：修改state中的状态的唯一方法就是提交mutation
  store.commit("increment")
}

const actionIncrement = () => {
  // 分发action
  store.dispatch("incrementAction")
}

// 发送网络请求
store.dispath("fetchDateAction")
</script>

<template>
  <h2>当前值为：{{ $store.state.count }}</h2>
  <h3>doubleCount值为：{{ $store.getters.doubleCount }}</h3>

  <h3>count值为：{{ count }}</h3>
  <h3>doubleCount值为：{{ doubleCount }}</h3>
  <button @click="increment">+1</button>
  <button @click="actionIncrement">Action +1</button>
</template>

<style scoped>

</style>