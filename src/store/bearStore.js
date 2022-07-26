let bearStore = (set) => ({
  bear: 0,

  increBear: (actionType) => set((state) => {
    return {
      bear: state.bear + 1
    }
  },
  false,
  `bear/${actionType}`
  )
});

export default bearStore;
