<template>
  <h1>{{ store.hello }}</h1>
</template>

<script setup>
import { useStore } from "./store/index";

const store = useStore();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
