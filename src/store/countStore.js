import create from "zustand";

const useStore = create((set) => ({
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

export default useStore;
