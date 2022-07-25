import create from "zustand";
import { devtools } from 'zustand/middleware'

let countStore = (set) => ({
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

countStore = devtools(countStore);

export default create(countStore);
