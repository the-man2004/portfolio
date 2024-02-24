<template>
  <li class="item">
    <slot></slot>
    <div class="item-info" :class="store.modeClass">
      <h3>{{ props.title }}</h3>
      <p>
        {{ props.description }}
      </p>
      <SkillsList :skills="props.skills"></SkillsList>
      <NavigationBtn :link="props.link">CHECK IT OUT</NavigationBtn>
    </div>
  </li>
</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from "../../store/index";
import NavigationBtn from "../HelperComponents/NavigationBtn.vue";
import SkillsList from "../HelperComponents/SkillsList.vue";

const props = defineProps(["title", "description", "skills", "link"]);

const store = useStore();
</script>

<style scoped>
.item {
  list-style: none;
  margin: 30px auto;
  padding-bottom: 30px;
  max-width: 1250px;

  overflow: hidden;

  transition: background-color 250ms ease;
}

.item img {
  display: block;
  width: 100%;
}

.item-info {
  padding: 30px;
  margin: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 30px;

  transition: background-color 250ms ease;
}

.item-info h3 {
  text-align: center;
  font-size: 1.5rem;
}

.item-info p {
  text-align: center;
  max-width: 750px;
  font-size: 1rem;
}

@media (min-width: 750px) {
  .item-info h3 {
    font-size: 2.5rem;
  }

  .item-info p {
    font-size: 1.5rem;
  }

  .item-info {
    gap: 30px;
  }
}
</style>
