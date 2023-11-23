import {createStore} from 'vuex'

import counterModule from "./counter.module";

const store = createStore({
    modules: {
        counter: counterModule
    }
})

export default store