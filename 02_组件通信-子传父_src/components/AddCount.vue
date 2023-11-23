<template>
  <div>
    <button @click="btnClick(1)">+1</button>
    <button @click="btnClick(5)">+5</button>
    <button @click="btnClick(10)">+10</button>
  </div>
</template>

<script>
export default {
  methods: {
    btnClick(num) {
      // 让子组件发出去一个自定义事件
      // 第一个参数是自定义事件名称，第二个参数是传递的参数
      this.$emit('add', num)
    }
  },
  // 子组件向父组件注册事件，可以方便查看
  emits: ['add']
  // 对传递的参数进行验证
  // emits: {
  //   add: (num) => {
  //     if (num <= 10) {
  //       return true
  //     }
  //     return false
  //   }
  // }
}
</script>