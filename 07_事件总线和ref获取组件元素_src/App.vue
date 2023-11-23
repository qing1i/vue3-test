<template>
  <div>
    <Home ref="homeRef"/>
  </div>
</template>

<script>
import Home from "@/components/Home.vue";

export default {
  components: {Home},
  mounted() {
    // 获取Home组件实例
    console.log(this.$refs.homeRef)
    // 获取Home组件中的元素
    console.log(this.$refs.homeRef.$el)
    // 获取父组件
    console.log(this.$parent)
    // 获取根组件
    console.log(this.$root)
  }
}
</script>