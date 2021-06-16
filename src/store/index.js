import { createStore } from 'vuex'

export default createStore({
    // 定义所需要的状态的
    state: {
        name: 'johnson',
    },
    // 同步修改state 都是方法
    // 第一个参数state 第二个参数是需要修改的值
    mutations: {
        setName(state, payload) {
            state.name = payload
            // state.name.slice(0, 1)
        },
    },
    // 异步提交mutation
    // 第一个参数是store 第二个参数是修改的值
    actions: {
        asyncSetName(store, params) {
            setTimeout(() => {
                // commit是提交mutation 调用mutation的方法
                store.commit('setName', params)
            }, 2000)
        },
    },
    // 模块化
    modules: {},
})
