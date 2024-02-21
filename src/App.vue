<template>
  <TheHeader></TheHeader>
  <TheHero></TheHero>
  <div class="test"></div>
  <div id="contact" class="test-2">scroll to me</div>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheHero from "./components/TheHero.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

:root {
  --light-color: white;
  --dark-color: #2a3439;
  --accent-color: #007fff;
}

#app {
  font-family: "Oswald", Helvetica, Arial, sans-serif;
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

/* Test div */
.test {
  height: 200vh;
  background: gray;
}

.test-2 {
  height: 100vh;
  background: gray;
}
</style>
