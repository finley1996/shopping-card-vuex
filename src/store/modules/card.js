export default {
    namespaced: true,
    state: {
        shopcard: []
    },
    mutations: {
        GET_ITEM(state, payload) {
            const result = state.shopcard.find(item => item.id == payload.id)
            if (result) {
                result.count++
            } else {
                let obj = {
                    id: payload.id,
                    title: payload.title,
                    price: payload.price,
                    count: 1
                }
                state.shopcard.push(obj)
            }
        }
    },
    actions: {
        ADD_PDT({ commit }, payload) {
            commit('GET_ITEM', payload),
                commit('shop/GET_ADD', payload, { root: true })
        }
    },
    getters: {
        TOTAL(state) {
            return state.shopcard.reduce((total, item) => {
                return total += item.price * item.count
            }, 0)
        }
    }
}