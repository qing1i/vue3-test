<template>
  <div class="tab-list">
    <template v-for="(item,index) in titles" :key="index">
      <div class="tab-item" @click="itemClick(index)" :class="{active:index===currentIndex}">
        <slot :item="item">
          <span>{{ item }}</span>
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0

    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit("itemClick", index)
    }
  },
  emits: ["itemClick"]
}
</script>

<style>
.tab-list {
  display: flex;
  height: 32px;
  line-height: 32px;
  text-align: center;
}

.tab-item {
  flex: 1;
}

.tab-item.active {
  color: red;
  font-weight: bold;
}

.tab-item.active span {
  border-bottom: 2px solid red;
  padding: 8px;
}
</style>