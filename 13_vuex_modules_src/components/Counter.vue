<script setup>
import {useStore} from "vuex"

const store = useStore()

const increment = () => {
  store.commit("counter/increment")
}
</script>

<template>
  <h2>当前值为：{{ $store.state.counter.count }}</h2>
  <!-- <h3>doubleCount:{{ $store.getters.doubleCount }}</h3> -->
  <h3>doubleCount:{{ $store.getters["counter/doubleCount"] }}</h3>
  <button @click="increment">+1</button>
</template>

<style scoped>

</style>