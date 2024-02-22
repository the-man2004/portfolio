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
        <li :class="store.modeClass" class="project-item">
          <div class="project-item-info">
            <h3>Free-2-Play</h3>
            <p>Information about free to play PC and Browser games</p>
          </div>

          <img src="../assets/ProjectThumbnails/free-2-play.png" alt="" />
        </li>
        <!-- Sudoki -->
        <li :class="store.modeClass" class="project-item">
          <div class="project-item-info">
            <h3>Sudoki</h3>
            <p>A puzzle game based on the classic Japanese game Sudoku</p>
          </div>

          <img src="../assets/ProjectThumbnails/sudoki.png" alt="" />
        </li>
        <!-- Delicious foods -->
        <li :class="store.modeClass" class="project-item">
          <div class="project-item-info">
            <h3>Delicious Foods</h3>
            <p>
              A place to find Delicious recipes ranging from Dessert to Starter
            </p>
          </div>

          <img src="../assets/ProjectThumbnails/delicious-foods.png" alt="" />
        </li>
        <!-- Weather app -->
        <li :class="store.modeClass" class="project-item">
          <div class="project-item-info">
            <h3>Weather App</h3>
            <p>
              Provides users with accurate weather information, forecasts, and
              other weather-related data
            </p>
          </div>

          <img src="../assets/ProjectThumbnails/weather-app.png" alt="" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "@/store";

const store = useStore();
</script>

<style scoped>
#projects {
  scroll-margin: 68.69px;
  padding: 60px 30px;
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
}

#projects-container {
  margin-top: 60px;
}

/* Item styles */
.project-item {
  display: grid;
  grid-template-columns: 1fr;

  list-style: none;
  margin: 60px auto;
  border-radius: 15px;
  max-width: 1250px;

  overflow: hidden;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
  transition: background-color 250ms ease, box-shadow 250ms ease;
}
.project-item:hover {
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
}

.project-item-info {
  padding: 15px;
}

.project-item-info h3 {
  margin-bottom: 5px;
  font-size: 1.5rem;
}

.project-item-info p {
  font-size: 1rem;
}

.project-item img {
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

  /* Item styles */
  .project-item {
    grid-template-columns: 1fr 2fr;
  }

  .project-item-info h3 {
    font-size: 2rem;
  }
}
</style>
