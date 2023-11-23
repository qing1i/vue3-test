<template>
  <div>
    <tab-control :titles="['衣服','鞋子','裤子']" @itemClick="tabClick"/>
    <h3>{{ pageContents[currentIndex] }}</h3>
  </div>
</template>

<script>
import TabControl from "./components/TabControl.vue"

export default {
  components: {
    TabControl
  },
  data() {
    return {
      pageContents: ['衣服列表', '鞋子列表', '裤子列表'],
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
    }
  }
}
</script>