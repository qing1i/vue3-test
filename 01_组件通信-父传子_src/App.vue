<template>
  <div>
    <!-- 如果当前的属性是一个非props的attribute，那么该属性会默认添加到子组件的根元素上 -->
    <show-info name="张三" :age="18" class="active" abc="cba"></show-info>
    <show-info name="李四" :age="19"></show-info>
    <show-info/>
  </div>
</template>

<script>
import ShowInfo from "./components/ShowInfo.vue"

export default {
  components: {
    ShowInfo
  }
}
</script>