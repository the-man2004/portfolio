import { defineStore } from "pinia";

export const useStore = defineStore("portfolioStore", {
  state: () => {
    return {
      hello: "Hey!",
      mode: "light",
    };
  },
  getters: {
    modeClass: (state) =>
      state.mode === "dark" ? { "dark-mode": true } : { "light-mode": true },
    oppositeModeClass: (state) =>
      state.mode === "dark" ? { "light-mode": true } : { "dark-mode": true },
    modeSwitchClass: (state) =>
      state.mode === "dark" ? { "dark-btn": true } : { "light-btn": true },
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
