import mGQLquery from '@/plugins/M-gql.js'

export const namespaced = true;

export const state = () => ({
  cartItems: [],
  errors: [],
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
  SET_ADDITIONALLY_INF(state, CartInfo) {
    Object.assign(state.cartItem, CartInfo)
  },
  SET_ERRPRS(state, items) {
    state.items = items;
  },
}

export const actions = {
  async getCartPage({commit}){
    const response = await this.$mRestQuery('/api/cart/',{},{method: 'GET'})
    if(response.statusText === 'OK') {
      const products = await response.data.map((item) => {
        return {
          id: item.product.id,
          name: item.product.name,
          description: item.product.description,
          mainPicture: item.product.main_picture?.image,
          formatted_price: item.product.formatted_price,
          quantity: item.quantity,
          propertys: []
        }
      });
      commit('SET_CART_ITEMS', products)
    }
    else {
      commit('SET_ERRPRS')
      console.log('Не норм', response)
    }
  },
  async getCartItemInfo({commit}, productId) {
    const PRODUCTS_INF =
    `query {
      productProperties(product_Id: ${productId}){
        edges{
          node{
            property{
              name
            }
            stringValue
            numValue
          }
        }
      }
    }`
    try {
      const response = await this.$mGQLquery(PRODUCTS_INF)
      const CartInfo = response.data.productProperties.edges.map((property) => {
        return {
          numValue: property.node.numValue,
          stringValue: property.node.stringValue,
          nameProp: property.node.property.name
        }
      });
      console.log(CartInfo)
      //commit('SET_PRODUCT_PICTURES', productPictures)
      this.getters['cart/cartItems'].map((cartItem) => {
        if(cartItem.id === productId) {
          Object.assign(cartItem.propertys, CartInfo)
        }
      })
      console.log(this.getters['cart/cartItems'])
    } 
    catch (e) {
      console.error(e.response?.data)
    }
  },

  async addItemToCard({commit}, props){
    try {
      const cartProduct = [{ 
        "product_id": props.product_id,
        "quantity": props.quantity
      }]
      await this.$mRestQuery('/api/cart/', cartProduct)
      await this.dispatch('cart/getCartPage')
    } 
    catch (e) {
      console.error(e)
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