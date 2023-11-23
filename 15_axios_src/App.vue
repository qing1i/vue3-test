<script setup>
import myRequest from "./utils/request"

myRequest.request({
  url: "http://localhost:3000/home/multidata",
  method: "get"
}).then(res => {
  console.log(res)
})
</script>

<template>
  <div>
    App
  </div>
</template>

<style scoped>

</style>