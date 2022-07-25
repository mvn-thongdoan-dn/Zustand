import create from "zustand";
import { devtools } from 'zustand/middleware'

let countStore = (set) => ({
  count: 0,

  incre: (actionType) => set((state) => {
    return {
      count: state.count + 1
    }
  },
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

countStore = devtools(countStore)

export default create(countStore);
