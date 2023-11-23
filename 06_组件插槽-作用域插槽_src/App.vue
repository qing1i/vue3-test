<template>
  <div>
    <tab-control :titles="['衣服','鞋子','裤子']" @itemClick="tabClick"/>
    <h3>{{ pageContents[currentIndex] }}</h3>

    <tab-control :titles="['衣服','鞋子','裤子']" @itemClick="tabClick">
      <template #default="slotProps">
        <button>{{ slotProps.item }}</button>
      </template>
    </tab-control>

    <tab-control :titles="['衣服','鞋子','裤子']" @itemClick="tabClick" v-slot="slotProps">
      <strong>{{ slotProps.item }}</strong>
    </tab-control>
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