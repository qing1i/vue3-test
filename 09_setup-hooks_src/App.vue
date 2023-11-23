<template>
  <div>
    <h2>count值为：{{ count }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <button @click="changeTitle">About</button>

    <div>
      <h3>x: {{ scrollX }}</h3>
      <h3>y: {{ scrollY }}</h3>
    </div>
    <br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import useCounter from "./hooks/useCounter";
import useTitle from "./hooks/useTitle";
import useScrollPosition from "./hooks/useScrollPosition";

export default {
  setup() {
    // const {count, increment, decrement} = useCounter()
    // return {count, increment, decrement}

    const title = useTitle("首页")
    const changeTitle = () => {
      title.value = "关于"
    }

    return {...useCounter(), changeTitle, ...useScrollPosition()}
  }
}
</script>