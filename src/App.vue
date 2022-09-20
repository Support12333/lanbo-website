<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const Header = defineAsyncComponent(() => import('@components/Header.vue'))
const Footer = defineAsyncComponent(() => import('@components/Footer.vue'))
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}

html,body {
  height: 100%;
}

img {
  display: block;
}

ul {
  margin: 0 !important;
  padding: 0 !important;
}

ul li {
  list-style: none;
}

a,
button {
  cursor: pointer;
}

a {
  text-decoration: none !important;
  background: transparent;
}

a:active,
a:hover {
  outline: 0;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 5px rgb(0 0 0 / 20%);
}

::-webkit-scrollbar-track {
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 5px rgb(0 0 0 / 20%);
}
</style>
