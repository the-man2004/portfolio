<template>
  <div @click="toggleDropdown" class="burger-wrapper">
    <div
      class="burger"
      :class="[store.oppositeModeClass, isDropdownOpen === true ? 'cross' : '']"
    ></div>
  </div>
  <transition>
    <div
      v-if="isDropdownOpen === true"
      class="dropdown"
      :class="store.modeClass"
    >
      <ul>
        <li><a @click="toggleDropdown" href="#about">ABOUT</a></li>
        <li><a @click="toggleDropdown" href="#projects">PROJECTS</a></li>
        <li><a @click="toggleDropdown" href="#contact">CONTACT</a></li>
        <li><ModeSwitch></ModeSwitch></li>
      </ul>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "../../store/index";
import ModeSwitch from "./ModeSwitch.vue";

const store = useStore();

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped>
.burger-wrapper {
  display: flex;
  align-items: center;
  height: 30px;
  cursor: pointer;
  overflow: hidden;
}

.burger {
  position: relative;
  display: block;
  height: 3px;
  width: 30px;
  transition: background-color 250ms ease;
}
.burger::before,
.burger::after {
  content: "";
  position: absolute;
  display: block;
  height: 3px;
  width: 30px;
  background: inherit;
  transition: all 250ms ease;
}

.burger::before {
  top: 10px;
}

.burger::after {
  top: -10px;
}

.cross {
  transform: translateX(-30px);
}

.cross::before,
.cross::after {
  display: block;
}
.cross::before {
  transform: translateX(30px) translateY(-10px) rotate(45deg);
}
.cross::after {
  transform: translateX(30px) translateY(10px) rotate(-45deg);
}

/* Dropdown classes */
.dropdown {
  position: absolute;
  top: 65px;
  right: 0;
  left: 0;

  padding: 30px;

  transition: background-color 250ms ease;
  z-index: 10;
}

.dropdown ul {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.dropdown li {
  display: flex;
  justify-content: end;
  list-style: none;
}

.dropdown a {
  text-decoration: none;
  font-weight: 700;
  color: inherit;
  transition: color 250ms ease;
}

.dropdown a:hover,
.dropdown a:focus {
  color: var(--accent-color);
}

/* Dropdown transition animation */
.v-enter-active,
.v-leave-active {
  transition: all 250ms ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100vw);
}

@media (min-width: 750px) {
  .burger-wrapper {
    display: none;
  }

  .dropdown {
    display: none;
  }
}
</style>
