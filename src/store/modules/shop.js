import { getProduct } from '../../api/axios.js'
export default {
    namespaced: true,
    state: {
        products: []
    },
    mutations: {
        SET_PDT(state, payload) {
            state.products = payload
        },
        GET_ADD(state,payload){
            const result = state.products.find(item=>item.id==payload.id)
            result.inventory--
        }
    },
    actions: {
        GET_PDT({ commit }) {
            getProduct().then(
                res => {
                    console.log(res.data.data);
                    commit('SET_PDT', res.data.data)
                }
            ).catch(err => {
                console.log(err)
            })
        }
    }

}