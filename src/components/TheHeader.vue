<template>
  <header :class="store.modeClass">
    <div>
      <a href="#" class="home-link">
        <img class="header-profile" src="../assets/github-profile.jpg" alt="" />
        <span>HEINRICH BASSON</span>
      </a>
    </div>
    <div>
      <ul class="nav-links">
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">PROJECTS</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
        <li>
          <button @click="store.toggleMode">MODE</button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { useStore } from "@/store";

const store = useStore();
</script>

<style scoped>
header {
  padding: 10px 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 1px 1px 7.5px var(--dark-color);
  transition: all 250ms ease;
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
}

.nav-links {
  display: flex;
  gap: 30px;
}
.nav-links li {
  list-style: none;
}
</style>
