<template>
  <ul class="list">
    <li>姓名：{{ name }}</li>
    <!-- 把attribute应用到根元素之外的其他元素上 -->
    <!-- <li :class="$attrs.class">姓名：{{ name }}</li> -->
    <li>年龄：{{ age }}</li>
  </ul>
</template>

<script>
export default {
  // props作用：接收父组件传递过来的属性
  // 1.props数组写法
  // props: ['name', 'age']

  // 2.props对象写法
  // 好处：可以对类型进行验证；可以添加默认值
  props: {
    name: {
      type: String,
      default: "default name"
    },
    age: {
      type: Number,
      default: 0
    },
    // 重要：对象类型写默认值是，需要编写default的函数，函数返回默认值
    friend: {
      type: Object,
      default: () => ({name: "default friend",})
    },
    hobbies: {
      type: Array,
      default: () => ["唱", "跳", "rap"]
    }
  },
  // 不希望子元素的根元素继承attribute
  // inheritAttrs: false
}
</script>