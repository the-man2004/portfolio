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
        <li class="project-item">
          <img
            src="../assets/ProjectThumbnails/free-2-play-monitor.png"
            alt=""
          />
          <div :class="store.modeClass">
            <h3>Free-2-Play</h3>
            <p>Information about free to play PC and Browser games</p>
            <NavigationBtn link="https://free-2-play.netlify.app"
              >CHECK IT OUT</NavigationBtn
            >
          </div>
        </li>
        <!-- Sudoki -->
        <li class="project-item">
          <img src="../assets/ProjectThumbnails/sudoki-monitor.png" alt="" />
          <div :class="store.modeClass">
            <h3>Sudoki</h3>
            <p>A puzzle game based on the classic Japanese game Sudoku</p>
            <NavigationBtn link="https://sudoki.netlify.app"
              >CHECK IT OUT</NavigationBtn
            >
          </div>
        </li>
        <!-- Delicious foods -->
        <li class="project-item">
          <img
            src="../assets/ProjectThumbnails/delicious-foods-monitor.png"
            alt=""
          />
          <div :class="store.modeClass">
            <h3>Delicious Foods</h3>
            <p>
              A place to find Delicious recipes ranging from Dessert to Starter
            </p>
            <NavigationBtn link="https://delicious-foods-app.netlify.app"
              >CHECK IT OUT</NavigationBtn
            >
          </div>
        </li>
        <!-- Weather app -->
        <li class="project-item">
          <img
            src="../assets/ProjectThumbnails/weather-app-monitor.png"
            alt=""
          />
          <div :class="store.modeClass">
            <h3>Weather App</h3>
            <p>
              Provides users with accurate weather information, forecasts, and
              other weather-related data
            </p>
            <NavigationBtn link="https://weather-app-heinrich.netlify.app"
              >CHECK IT OUT</NavigationBtn
            >
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "@/store";
import NavigationBtn from "./HelperComponents/NavigationBtn.vue";

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

/* Item styles */
.project-item {
  list-style: none;
  margin: 30px auto;
  padding-bottom: 30px;
  max-width: 1250px;

  overflow: hidden;

  transition: background-color 250ms ease;
}

.project-item h3 {
  text-align: center;
  margin-bottom: 5px;
  font-size: 1.5rem;
}

.project-item p {
  text-align: center;
  margin: 15px 0 30px 0;
  max-width: 750px;
  font-size: 1rem;
}

.project-item img {
  display: block;
  width: 100%;
}

.project-item div {
  padding: 30px;
  margin: 0 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 30px;

  transition: background-color 250ms ease;
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

  /* Item styles */
  .project-item h3 {
    font-size: 2.5rem;
  }
}
</style>
