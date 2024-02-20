import { defineStore } from "pinia";

export const useStore = defineStore("portfolioStore", {
  state: () => {
    return {
      hello: "Hey!",
    };
  },
  getters: {},
  actions: {},
});
