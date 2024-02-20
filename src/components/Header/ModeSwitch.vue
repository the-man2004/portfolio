<template>
  <div @click="store.toggleMode" :class="store.modeSwitchClass">
    <span></span>
  </div>
</template>

<script setup>
import { useStore } from "@/store";

const store = useStore();
</script>

<style scoped>
div {
  width: 50px;
  height: 25px;
  border-radius: 100px;
  cursor: pointer;
}

span {
  display: block;
  width: 21px;
  height: 21px;
  border: 2px solid var(--dark-color);
  border-radius: 100px;
  background: var(--light-color);
  transition: all 250ms ease;
}

.dark-btn {
  border: 2px solid var(--light-color);
  color: var(--light-color);
}
.dark-btn span {
  border-color: var(--dark-color);
  background: var(--light-color);
}

.light-btn {
  border: 2px solid var(--dark-color);
  color: var(--dark-color);
}
.light-btn span {
  transform: translateX(25px);
  border-color: var(--light-color);
  background: var(--dark-color);
}
</style>
