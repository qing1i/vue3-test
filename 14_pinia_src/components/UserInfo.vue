<script setup>
import {storeToRefs} from "pinia";
import {useUserInfoStore} from "@/store/userInfo";

const userInfoStore = useUserInfoStore();
const {username, age} = storeToRefs(userInfoStore);
</script>

<template>
  <div>
    <h2>{{ username }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<style scoped>

</style>