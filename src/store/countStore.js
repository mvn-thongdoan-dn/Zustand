import create from "zustand";

const countStore = create((set) => ({
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
}));

export default countStore;
