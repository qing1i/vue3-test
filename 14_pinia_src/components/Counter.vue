<script setup>
import {storeToRefs} from "pinia";
import {useCounterStore} from "@/store/counter";

const countStore = useCounterStore();
const {count} = storeToRefs(countStore);

const incrementCount = () => {
  countStore.increment()
}

const resetCount = () => {
  countStore.$reset()
}
</script>

<template>
  <!-- <h2>当前值为：{{ countStore.count }}</h2> -->
  <h2>当前值为：{{ count }}</h2>
  <h3>doubleCount：{{ countStore.doubleCount() }}</h3>
  <button @click="incrementCount">+1</button>
  <button @click="resetCount">reset</button>
</template>

<style scoped>

</style>