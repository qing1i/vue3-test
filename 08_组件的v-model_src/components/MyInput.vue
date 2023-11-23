<template>
  <div>
    <input :value="inputValue" @input="inputChange"/>
  </div>
</template>

<script>
export default {
  props: ["inputValue"],
  emits: ["update:inputValue"],
  methods: {
    inputChange(event) {
      this.$emit("update:inputValue", event.target.value);
    }
  }
}
</script>