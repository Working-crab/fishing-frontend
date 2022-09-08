import mGQLquery from '@/plugins/M-gql.js'

export const namespaced = true;

export const state = () => ({
  items: []
})

export const getters = {
  favorites(state) {
    return state.items;
  },
}

export const mutations = {
  SET_CART_ITEMS(state, items) {
    state.items = items;
  },
}

export const actions = {
  async getFavorites(){
    const favorites =
    `
      {
        products {
          edges {
            node {
              id
              description
              name
              
            }
          }
        }
      }
    `

    try {
      const response = await mGQLquery(favorites)
      
      commit('SET_FAVORITES', response.body)
      console.log(response)
    } 
    catch (e) {
      console.error(e.response)
    }
  },
  async addFavorit(){
    // try {
    //   await mGQLquery(favorites)
    //   commit('SET_FAVORITES', response.body)
    // } 
    // catch (e) {
    //   console.error(e.response)
    // }
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