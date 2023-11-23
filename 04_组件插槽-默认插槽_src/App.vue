<template>
  <div>
    <!-- 1.内容是button -->
    <show-message title="Hello">
      <button>button</button>
    </show-message>

    <!-- 2.内容是超链接 -->
    <show-message>
      <a href="#">百度一下></a>
    </show-message>

    <!-- 3.内容没有传递 -->
    <show-message></show-message>
  </div>
</template>

<script>
import ShowMessage from "./components/ShowMessage.vue"

export default {
  components: {
    ShowMessage
  }
}
</script>