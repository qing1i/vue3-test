<script setup>
import {useRoute, onBeforeRouteUpdate} from 'vue-router'

// 获取userid
const route = useRoute()
console.log("userid:", route.params.id)

// 用户之间切换
onBeforeRouteUpdate((to, from) => {
  console.log("from:", from.params.id)
  console.log("to:", to.params.id)
})
</script>

<template>
  <!-- 在模板中获取id -->
  <h2>UserID：{{ $route.params.id }}</h2>
</template>

<style scoped>

</style>