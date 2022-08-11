import gql from 'graphql-tag'
//import {useQuery} from '@vue/apollo'


export const namespaced = true;

export const state = () => ({
  products: {},
  productsPage: {},
  productsCount: 0,
  product: {},
})

export const getters = {
  products(state) {
      return state.products;
  },
  productsPage(state) {
    return state.productsPage;
  },
  productsCount(state) {
    return state.productsCount;
  },
}

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_PRODUCTS_PAGE(state, page) {
    state.productsPage = page;
  },
  SET_PRODUCTS_COUNT(state, productsCount) {
    state.productsCount = productsCount;
  },
}

export const actions = {
  async getProductsPage({commit}, page) {
    const PRODUCTS = 
    `{
      products(offset: ${page.start}, first: ${page.size}) {
        edges {
          node {
            id
            description
            name
            mainPicture {
              id
              image
            }
          }
        }
      }
    }`
    try {
      const response = await this.$mGQLquery(PRODUCTS)
      commit('SET_PRODUCTS_PAGE', response.data.products)
    } 
    catch (e) {
      console.error(e.response)
    }
  },
  async getProductsCount({commit}) {
    const productsValue = 
    `{
      products {
        edges {
          node {
            id
          }
        }
      }
    }`
    try {
      const response = await this.$mGQLquery(productsValue)
      commit('SET_PRODUCTS_COUNT', response.data.products)
    } 
    catch (e) {
      console.error(e.response)
    }
  },
}

