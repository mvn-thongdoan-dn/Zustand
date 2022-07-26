let countStore = (set) => ({
  count: 0,

  incre: (actionType) => set({count: 1},
  false,
  `count/${actionType}`
  ),

  decre: (actionType) => set((state) => {
    return {
      count: state.count - 1
    }
  },
  false,
  `count/${actionType}`
  )
});

export default countStore;
