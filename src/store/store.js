import create from "zustand";
import { devtools } from 'zustand/middleware'

const useStore = create(devtools((set) => ({
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
})));

export default useStore;
