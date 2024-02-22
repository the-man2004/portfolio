import { defineStore } from "pinia";

export const useStore = defineStore("portfolioStore", {
  state: () => {
    return {
      mode: "light",
      prjects: [
        {
          title: "Free-2-Play",
          imgPath: "../../assets/ProjectThumbnails/free-2-play.png",
        },
        {
          title: "Sudoki",
          imgPath: "../../assets/ProjectThumbnails/sudoki.png",
        },
        {
          title: "Delicious Foods",
          imgPath: "../../assets/ProjectThumbnails/delicious-foods.png",
        },
        {
          title: "Weather App",
          imgPath: "../../assets/ProjectThumbnails/weather-app.png",
        },
      ],
    };
  },
  getters: {
    modeClass: (state) =>
      state.mode === "dark" ? { "dark-mode": true } : { "light-mode": true },
    oppositeModeClass: (state) =>
      state.mode === "dark" ? { "light-mode": true } : { "dark-mode": true },
    modeSwitchClass: (state) =>
      state.mode === "dark" ? { "dark-btn": true } : { "light-btn": true },
    heroClass: (state) =>
      state.mode === "dark" ? { "dark-hero": true } : { "light-hero": true },
    grayClass: (state) =>
      state.mode === "dark" ? { "dark-skill": true } : { "light-skill": true },
  },
  actions: {
    toggleMode() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
});
