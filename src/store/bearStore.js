let bearStore = (set) => ({
  bear: 0,
  increBear: () => set((state) => ({bear: state.bear + 1}))
});

export default bearStore;
