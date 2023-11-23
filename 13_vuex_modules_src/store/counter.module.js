export default {
    // 开启命名空间
    namespaced: true,
    state: () => ({
        count: 0
    }),
    mutations: {
        increment(state) {
            state.count++
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2
        }
    },
    actions: {
        incrementAction(context) {
            context.commit('increment')
        }
    }
}