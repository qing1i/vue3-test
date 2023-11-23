<template>
  <div>
    <button @click="bannerBtnClick">button</button>
  </div>
</template>

<script>
import eventBus from "@/event-bus";

export default {
  methods: {
    bannerBtnClick() {
      eventBus.emit("bannerClickEvent", "banner")
    }
  }
}
</script>