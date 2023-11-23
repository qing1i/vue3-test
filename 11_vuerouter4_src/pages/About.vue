<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

const onBackClick = () => {
  router.back()  // 后退
  // router.forward()  // 前进
  // router.go(-1)
}
</script>

<template>
  <h2>About</h2>
  <span>{{ $route.query.name }}</span>
  <button @click="onBackClick">返回</button>
</template>

<style scoped>

</style>