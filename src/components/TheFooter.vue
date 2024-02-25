<template>
  <footer :class="store.modeClass">
    <div id="info">
      <div>
        <div>
          <h3>HEINRICH BASSON</h3>
          <p>
            I'm a Front-end focused Web Developer building the Front-end of
            Websites and Web Applications that leads to the overall success of
            the product
          </p>
        </div>
        <div>
          <h3>DESIGN</h3>
          <p>
            Inspired by
            <a href="https://www.rammaheshwari.com/" target="_blank"
              >Ram Maheshwari</a
            >'s website.
          </p>
        </div>
      </div>
      <div>
        <h3>SOCIAL</h3>
        <a href="https://www.linkedin.com/in/heinrich-basson" target="_blank"
          ><img src="../assets/linkedin.svg" alt=""
        /></a>
        <a href="https://github.com/the-man2004" target="_blank"
          ><img src="../assets/square-github.svg" alt=""
        /></a>
      </div>
    </div>
    <div id="legal">
      © Copyright 2024. Made by <a href="#hero">Heinrich Basson</a>
    </div>
  </footer>
</template>

<script setup>
import { useStore } from "@/store";

const store = useStore();
</script>

<style scoped>
footer {
  padding: 60px 30px;
  border-top: 1px solid var(--accent-color);
  transition: background-color 250ms ease;
}

footer a {
  color: var(--accent-color);
}

#info {
  padding-bottom: 30px;
  margin: 0 auto;
  max-width: 1250px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

#info h3 {
  margin-bottom: 15px;
}

#info p {
  max-width: 350px;
}

#info img {
  width: 30px;
  margin-right: 15px;
}

#info > div:nth-child(1) {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

#legal {
  padding-top: 15px;
  margin-top: 30px;
  margin: 0 auto;
  max-width: 1250px;
}

@media (min-width: 750px) {
  #info h3 {
    font-size: 1.7rem;
  }
}
</style>
