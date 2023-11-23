<template>
  <div>
    <Navbar>
      <template v-slot:left>
        <button>返回</button>
      </template>
      <template v-slot:center>
        <span>内容</span>
      </template>
      <template v-slot:right>
        <a href="#">登录</a>
      </template>
    </Navbar>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'

export default {
  components: {
    Navbar
  }
}
</script>