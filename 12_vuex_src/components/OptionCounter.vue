<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['doubleCount']),
    ...mapMutations(['increment'])
  },
  methods: {
    ...mapActions(['incrementAction'])
  }
}
</script>

<template>
  <h3>当前值为：{{ count }}</h3>
  <h4>计算后的值为：{{ doubleCount }}</h4>
  <button @click="increment">+1</button>
  <button @click="incrementAction">action +1</button>
</template>

<style scoped>

</style>