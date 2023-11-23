import {createStore} from 'vuex'

const store = createStore({
    // 类似于组件中的date
    state() {
        return {
            count: 0,
            date: []
        }
    },
    // 类似于组件中的methods
    mutations: {
        increment(state) {
            state.count++
        },
        setDate(state, data) {
            state.date = data
        }
    },
    // 类似于组件中的computed
    getters: {
        doubleCount(state) {
            return state.count * 2
        }
    },
    // actions类似于mutations，不同的是actions提交的是mutation和执行异步操作
    actions: {
        incrementAction(context) {
            // commit:提交mutation
            context.commit('increment')
        },
        // 发送异步请求获取数据
        // fetchDateAction() {
        //     fetch("http://localhost:8000/api/list")
        //         .then(response => response.json())
        //         .then(data => {
        //             console.log(data)
        //         })
        // }

        async fetchDateAction(context) {
            const response = await fetch("http://localhost:8000/api/list")
            const data = await response.json()
            // 修改state数据
            context.commit('setDate', data)
        }
    }
})

export default store