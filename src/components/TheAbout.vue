<template>
  <section id="about" :class="store.modeClass">
    <div>
      <h2>ABOUT ME</h2>
      <p id="intro">
        Here you can find out more about me, what I can do, and my skills.
      </p>
    </div>
    <div id="about-and-skills">
      <div id="about-me">
        <h3>Get to know me!</h3>
        <p>
          I'm a Front-end focused Web Developer building the Front-end of
          Websites and Web Applications that leads to the overall success of the
          product. Check out some of my <a href="#projects">Projects</a> down
          below.
        </p>
        <p>
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills then don't
          hesitate to contact me.
        </p>
        <NavigationBtn :link="'#contact'">CONTACT ME</NavigationBtn>
      </div>
      <div id="skills">
        <h3>My Skills & tools</h3>
        <SkillsList
          :skills="[
            'JAVASCRIPT',
            'HTML',
            'TAILWINDCSS',
            'CSS',
            'VUE',
            'PINIA',
            'VSCODE',
            'TERMINAL',
            'GIT',
            'GITHUB',
            'NPM',
          ]"
        ></SkillsList>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "@/store";
import NavigationBtn from "./HelperComponents/NavigationBtn.vue";
import SkillsList from "./HelperComponents/SkillsList.vue";

const store = useStore();
</script>

<style scoped>
#about {
  scroll-margin: 68.69px;
  padding: 60px 30px;

  transition: background-color 250ms ease;
}

#about h2 {
  margin: 15px 0 30px 0;
  text-align: center;
}
#about h2::after {
  content: "";
  margin: 0 auto;
  display: block;
  height: 5px;
  width: 45px;
  border-radius: 100px;
  background: var(--accent-color);
  transform: translateY(10px);
}

#about #intro {
  text-align: center;
}

/* About me and skills styles */
#about-and-skills {
  margin: 30px auto 0 auto;
  max-width: 1250px;
}

#about-and-skills h3 {
  margin-bottom: 30px;
}

#about-me {
  margin-bottom: 60px;
}

#about-me p {
  margin-bottom: 15px;
  font-weight: 350;
}
#about-me p:nth-child(3) {
  margin-bottom: 45px;
}
#about-me p a {
  color: var(--accent-color);
}

#contact-link {
  padding: 5px 15px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 5px 15px 5px 15px;
  background: var(--accent-color);
  color: var(--light-color);

  transition: all 250ms ease;
}
#contact-link:hover,
#contact-link:focus {
  box-shadow: 1px 1px 15px var(--dark-color);
  transform: translateY(-2.5px);
}

@media (min-width: 750px) {
  #about h2 {
    font-size: 2.5rem;
  }

  #about p {
    font-size: 1.5rem;
  }

  /* About me and skills styles */
  #about-and-skills {
    margin: 60px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
  }

  #about-and-skills h3 {
    font-size: 1.5rem;
  }
}
</style>
