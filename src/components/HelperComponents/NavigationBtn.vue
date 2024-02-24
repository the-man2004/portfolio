<template>
  <a :href="props.link" :target="props.target"><slot></slot></a>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["link", "target"]);
</script>

<style scoped>
a {
  display: inline-block;
  padding: 5px 15px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 5px 15px 5px 15px;
  background: var(--accent-color);
  color: var(--light-color);

  transition: all 250ms ease;
}
a:hover,
a:focus {
  box-shadow: 1px 1px 15px var(--accent-color);
  transform: translateY(-5px);
}

@media (min-width: 750px) {
  a {
    padding: 10px 30px;
    font-size: 1.5rem;
  }
}
</style>
