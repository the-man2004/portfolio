<template>
  <header :class="store.modeClass">
    <nav>
      <a href="#hero" class="home-link">
        <img
          class="header-profile"
          src="../assets/profile-removebg.png"
          alt=""
        />
        <span>HEINRICH BASSON</span>
      </a>
      <ul class="nav-links">
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <ModeSwitch></ModeSwitch>
        </li>
      </ul>
      <TheDropdown></TheDropdown>
    </nav>
  </header>
</template>

<script setup>
import { useStore } from "@/store";
import ModeSwitch from "./Header/ModeSwitch.vue";
import TheDropdown from "./Header/TheDropdown.vue";

const store = useStore();
</script>

<style scoped>
header {
  padding: 10px 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  transition: background-color 250ms ease;
  z-index: 10;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

a {
  text-decoration: none;
  font-weight: 700;
  color: inherit;
  transition: color 250ms ease;
}

a:hover,
a:focus {
  color: var(--accent-color);
}

.home-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.header-profile {
  width: 50px;
  height: auto;
  border-radius: 100px;
  background: var(--accent-color);
}

.nav-links {
  display: none;
}
.nav-links li {
  list-style: none;
}

@media (min-width: 750px) {
  .nav-links {
    display: flex;
    gap: 30px;
  }
}
</style>
