<script setup>

</script>

<template>
  <h2>Home</h2>
  <ul>
    <li>
      <router-link to="/home/news">News</router-link>
    </li>
    <li>
      <router-link to="/home/message">Message</router-link>
    </li>
  </ul>
  <!-- 添加路由显示占位 -->
  <router-view></router-view>
</template>

<style scoped>

</style>