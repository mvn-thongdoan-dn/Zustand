import create from "zustand";
import { devtools, persist } from 'zustand/middleware';
import bearStore from "./bearStore";
import countStore from "./countStore";
import userStore from './userStore';

let combineStores = (set, get) => ({
  ...bearStore(set, get),
  ...countStore(set, get),
  ...userStore(set, get)
})

combineStores = devtools(combineStores);

combineStores = persist(combineStores, {
  name: 'zustand', // declare key name
  getStorage: () => sessionStorage, // defautl localStorage 
  partialize: (state) => {              
    return {
      users: state.userState.users  // select the state you want to store
    }
  }
})

export default create(combineStores);
