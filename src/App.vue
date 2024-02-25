<template>
  <TheHeader></TheHeader>
  <TheHero></TheHero>
  <TheAbout></TheAbout>
  <TheProjects></TheProjects>
  <TheContact></TheContact>
  <TheFooter></TheFooter>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheHero from "./components/TheHero.vue";
import TheAbout from "./components/TheAbout.vue";
import TheProjects from "./components/TheProjects.vue";
import TheContact from "./components/TheContact.vue";
import TheFooter from "./components/TheFooter.vue";
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
  --light-gray-color: rgb(228, 228, 228);
  --dark-gray-color: rgb(46, 58, 63);
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
</style>
