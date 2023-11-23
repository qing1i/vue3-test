<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

const btnClick = () => {
  router.push({
    path: '/about',
    query: {
      name: 'jack',
      age: 18
    }
  })
}

</script>

<template>
  <div class="app">
    <header>
      <ul>
        <li>
          <router-link to="/home">HOME</router-link>
          <!-- to属性，可以传入一个对象 -->
          <!-- replace属性，会调用router.replace() -->
          <!-- active-class属性，设置a元素active后的class名，默认是router-link-active -->
          <!-- <router-link :to="{path: '/home'}" replace active-class="active">HOME</router-link> -->
        </li>
        <li>
          <router-link to="/about">ABOUT</router-link>
        </li>
        <li>
          <router-link to="/user/12">USER12</router-link>
        </li>
        <li>
          <router-link to="/user/13">USER13</router-link>
        </li>
        <button @click="$router.push('/about')">about</button>
        <button @click="btnClick">about</button>
      </ul>
    </header>
    <!-- 路由显示占位 -->
    <router-view/>
  </div>
</template>

<style>
.active {
  color: red;
}
</style>