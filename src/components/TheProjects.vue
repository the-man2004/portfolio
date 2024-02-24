<template>
  <section id="projects" :class="store.grayClass">
    <div>
      <h2>PROJECTS</h2>
      <p id="intro">
        Here you can find some of my personal Projects that i've created.
      </p>
    </div>
    <div id="projects-container">
      <ul>
        <!-- Free-2-Play -->
        <ProjectItem
          title="Free-2-Play"
          description="Provides users with information about free to play PC and Browser games"
          link="https://free-2-play.netlify.app"
          :skills="[
            'JAVASCRIPT',
            'TAILWINDCSS',
            'VUE',
            'PINIA',
            'GIT',
            'GITHUB',
          ]"
        >
          <img
            src="../assets/ProjectThumbnails/free-2-play-monitor.png"
            alt=""
          />
        </ProjectItem>
        <!-- Sudoki -->
        <ProjectItem
          title="Sudoki"
          description="A puzzle game based on the classic Japanese game Sudoku"
          link="https://sudoki.netlify.app"
          :skills="['JAVASCRIPT', 'CSS', 'VUE', 'PINIA', 'GIT', 'GITHUB']"
        >
          <img src="../assets/ProjectThumbnails/sudoki-monitor.png" alt="" />
        </ProjectItem>
        <!-- Delicious foods -->
        <ProjectItem
          title="Delicious Foods"
          description="A place to find new and interesting Delicious recipes ranging from Dessert to Starter"
          link="https://delicious-foods-app.netlify.app"
          :skills="['JAVASCRIPT', 'CSS', 'VUE', 'PINIA', 'GIT', 'GITHUB']"
        >
          <img
            src="../assets/ProjectThumbnails/delicious-foods-monitor.png"
            alt=""
          />
        </ProjectItem>
        <!-- Weather app -->
        <ProjectItem
          title="Weather App"
          description="Provides users with accurate weather information, forecasts, and other weather-related data"
          link="https://weather-app-heinrich.netlify.app"
          :skills="[
            'JAVASCRIPT',
            'TAILWINDCSS',
            'VUE',
            'PINIA',
            'GIT',
            'GITHUB',
          ]"
        >
          <img
            src="../assets/ProjectThumbnails/weather-app-monitor.png"
            alt=""
          />
        </ProjectItem>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "@/store";
import ProjectItem from "./Projects/ProjectItem.vue";

const store = useStore();
</script>

<style scoped>
#projects {
  scroll-margin: 68.69px;
  padding: 60px 0;
  transition: background-color 250ms ease;
}

#projects h2 {
  margin: 15px 0 30px 0;
  text-align: center;
}
#projects h2::after {
  content: "";
  margin: 0 auto;
  display: block;
  height: 5px;
  width: 45px;
  border-radius: 100px;
  background: var(--accent-color);
  transform: translateY(10px);
}

#projects #intro {
  text-align: center;
  padding: 0 30px;
}

#projects-container {
  margin-top: 60px;
}

#projects-container img {
  display: block;
  width: 100%;
}

/* Mode styles */
.dark-skill {
  background: var(--dark-gray-color);
  color: var(--light-color);
}

.light-skill {
  background: var(--light-gray-color);
  color: var(--dark-color);
}

@media (min-width: 750px) {
  #projects h2 {
    font-size: 2.5rem;
  }

  #projects p {
    font-size: 1.5rem;
  }
}
</style>
