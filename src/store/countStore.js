import create from "zustand";

const countStore = (set) => ({
  count: 0,
  incre: () => set((state) => {
      return {
        count: state.count + 1
      }
    }),
  decre: () => set((state) => {
      return {
        count: state.count - 1
      }
    })
});

export default create(countStore);
