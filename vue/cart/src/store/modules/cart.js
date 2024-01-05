const state = {
    items: [], // 商品信息 

}

const getters = {

}

const actions = {
    addProductToCart({ commit, state }, product) {
        if (product.inventory > 0) {
            const cartItem = state.items.find(item => item.id === product.id) // state来自commit解构
            if (!cartItem) {
                commit('pushProductToCart', { id: product.id })
            } else {
                commit('incrementItemQuantity', cartItem)
            }
        }
    }
}

const mutations = {
    pushProductToCart(state, { id }) {
        state.items.push({
            id,
            quantity: 1
        })
    },
    incrementItemQuantit(state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    }
}

export default {
    namespace: true,  // 给分支命名
    state,
    getters,
    actions,
    mutations
}