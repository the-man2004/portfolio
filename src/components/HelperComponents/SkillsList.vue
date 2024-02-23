<template>
  <div id="skills">
    <ul :class="store.grayClass">
      <li v-for="(skill, index) in props.skills" :key="index">
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from "@/store";

const store = useStore();

const props = defineProps(["skills"]);
</script>

<style scoped>
#skills ul {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

#skills li {
  padding: 10px 30px;
  border-radius: 100px;
  list-style: none;
  text-align: center;
  font-size: 0.8rem;
  transition: background-color 250ms ease;
}

/* Mode styles */
.dark-skill li {
  background: var(--dark-gray-color);
}

.light-skill li {
  background: var(--light-gray-color);
}

@media (min-width: 750px) {
  #skills li {
    font-size: 1rem;
  }
}
</style>
