<template>
  <div :class="store.modeClass">
    <h1 class="accent">{{ store.hello }}</h1>
    <p>{{ store.mode }}</p>
    <button @click="store.toggleMode">click me</button>
  </div>
</template>

<script setup>
import { useStore } from "./store/index";

const store = useStore();
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --light-color: white;
  --dark-color: #2a3439;
  --accent-color: #74c365;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;
}

/* Mode classes */
.light-mode {
  color: var(--dark-color);
  background: var(--light-color);
}

.dark-mode {
  color: var(--light-color);
  background: var(--dark-color);
}
</style>
