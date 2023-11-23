<template>
  <div>
    <h3>Count值为：{{ modelValue }}</h3>
    <button @click="changeCount">change</button>
  </div>

</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number
    }
  },
  emits: ["update:modelValue"],
  methods: {
    changeCount() {
      this.$emit("update:modelValue", 1000);
    }
  }
}
</script>