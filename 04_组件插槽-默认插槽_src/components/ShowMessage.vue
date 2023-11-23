<template>
  <h2>{{ title }}</h2>
  <slot>
    <!-- 插槽添加默认值 -->
    <p>插槽的默认值</p>
  </slot>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "default title"
    }
  }
}
</script>