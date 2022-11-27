export interface IMainState {
  darkMode: boolean;
}

export const useMainStore = defineStore("main", {
  state: (): IMainState => ({
    darkMode: false,
  }),
  getters: {},
  actions: {},
});
