import {defineStore} from 'pinia'

export const useUserInfoStore = defineStore('userInfo', {
    state: () => ({
        username: "admin",
        age: 20
    })
})