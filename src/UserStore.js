import {create} from "zustand";
import { devtools } from "zustand/middleware";

let store = (set, get) => ({
  users: [
    { id: 1, name: "Kemal" },
    { id: 2, name: "Deniz" }
  ],
  addUser: name => 
    set(state => (
        {
            users: [...state.users, {
                id: Math.floor(Math.random() * 1000),
                name: name
            }]
        }
    ))
});

store = devtools(store);
/* 
store = persist(store, { name: "users" }); */

const useUserStore = create(store);

export default useUserStore;
