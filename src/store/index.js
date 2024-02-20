import { defineStore } from "pinia";

export const useStore = defineStore("portfolioStore", {
  state: () => {
    return {
      hello: "Hey!",
      mode: "dark",
    };
  },
  getters: {
    modeClass: (state) => {
      return {
        "dark-mode": state.mode === "dark",
      };
    },
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
