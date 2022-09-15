let countStore = (set) => ({
  count: 0,
  incre: () => set((state) => (state)),
  decre: () => set((state) => (state))
});

export default countStore;
