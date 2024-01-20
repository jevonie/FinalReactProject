import { create } from 'zustand';


export const userStore = create((set, get) => ({
    token: "",
    userName: "",
    updateToken: newToken => {
        set({ token: newToken })
    },
    updateName: newUserName => {
        set({ userName: newUserName })
    },
    removeToken: () => set({ token: "" }), 
    tokenExist: () => {token != "" ? true : false },
}))