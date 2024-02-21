<template>
  <section id="hero" :class="store.modeClass">
    <h1>HEY, I'M HEINRICH BASSON!</h1>
    <p>
      I'm a <span class="highlighted-txt">Front-end</span> focused
      <span class="highlighted-txt">Web Developer</span> building the
      <span class="highlighted-txt">Front-end</span> of Websites and Web
      Applications that leads to the overall
      <span class="highlighted-txt">success</span> of the product
    </p>
    <a href="#about" id="hero-about-link">ABOUT ME</a>
  </section>
</template>

<script setup>
import { useStore } from "@/store";

const store = useStore();
</script>

<style scoped>
#hero {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  min-height: 650px;
  transition: background-color 250ms ease;
}

#hero h1 {
  margin: 0 30px;
  font-size: 2.5rem;
  text-align: center;
  line-height: 120%;
}

#hero p {
  margin: 30px 30px;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  line-height: 120%;
  max-width: 750px;
}

#hero .highlighted-txt {
  color: var(--accent-color);
  font-weight: 500;
}

#hero #hero-about-link {
  padding: 5px 15px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 5px 15px 5px 15px;
  background: var(--accent-color);
  color: var(--light-color);

  transition: all 250ms ease;
}
#hero #hero-about-link:hover,
#hero #hero-about-link:focus {
  box-shadow: 1px 1px 15px var(--dark-color);
  transform: translateY(-2.5px);
}

@media (min-width: 750px) {
  #hero h1 {
    font-size: 4rem;
  }

  #hero p {
    margin: 45px 30px;
    font-size: 1.5rem;
  }

  #hero #hero-about-link {
    padding: 10px 30px;
    font-size: 1.5rem;
  }
}
</style>
