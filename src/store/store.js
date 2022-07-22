import create from "zustand";
import { devtools } from 'zustand/middleware'

const useStore = create(devtools((set) => ({
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
})));

export default useStore;
