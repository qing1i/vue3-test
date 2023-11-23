import {ref} from "vue";
import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    // date
    const count = ref(0)

    function $reset() {
        count.value = 0
    }

    // computed
    function doubleCount() {
        return count.value * 2
    }

    // methods
    function increment() {
        count.value++
    }

    return {count, increment, $reset, doubleCount}
})