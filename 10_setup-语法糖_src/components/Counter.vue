<script setup>
const props = defineProps({
  count: {
    type: Number,
  }
})

const emits = defineEmits(['update:count'])
const increment = () => {
  emits('update:count', props.count + 1)
}

function foo() {
  console.log("fooFn")
}

// 暴露
defineExpose({
  foo
})
</script>

<template>
  <h2>当前值为：{{ count }}</h2>
  <button @click="increment">+1</button>
</template>