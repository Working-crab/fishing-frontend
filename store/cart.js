import mGQLquery from '@/plugins/M-gql.js'

export const namespaced = true;

export const state = () => ({
  cartItems: [],
  errors: []
})

export const getters = {
  cartItems(state) {
    return state.cartItems;
  },
  errors(state) {
    return state.errors;
  },
}

export const mutations = {
  SET_CART_ITEMS(state, items) {
    state.cartItems = items;
  },
  SET_ERRPRS(state, items) {
    state.items = items;
  },
}

export const actions = {
  async getCartPage({commit}){
    const response = await this.$mRestQuery('/api/cart/',{},{method: 'GET'})
    if(response.statusText === 'OK') {
      console.log('норм', response)
      commit('SET_CART_ITEMS', response.data)
    }
    else {
      commit('SET_ERRPRS')
      console.log('Не норм', response)
    }
  },

  async addItemToCard({commit}, product_id){
    try {
      const cartProduct = [{ 
        "product_id": product_id,
        "quantity": 1
      }]
      this.$mRestQuery('/api/cart/', cartProduct)
      commit('SET_ERRPRS', response.body)
    } 
    catch (e) {
      console.error(e?.data)
    }

  },

  async removeFaivorit(item){
    // try {
    //   const response = await mGQLquery(favorites)
      
    //   commit('SET_FAVORITES', response.body)
    //   console.log(response)
    // } 
    // catch (e) {
    //   console.error(e.response)
    // }
  },
}