<script setup>
import {ref, onMounted} from "vue";
// 不需要在components注册，直接使用
import Counter from "./components/Counter.vue"

const count = ref(0)

const updateCount = (date) => {
  count.value = date
}

// 获取组件实例
const counterRef = ref(null)

onMounted(() => {
  console.log(counterRef.value)
  counterRef.value.foo()
})

</script>

<template>
  <div class="app">
    <Counter :count="count" @update:count="updateCount"
             ref="counterRef"/>
  </div>
</template>