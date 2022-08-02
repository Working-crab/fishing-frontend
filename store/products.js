import gql from 'graphql-tag'
//import {useQuery} from '@vue/apollo'


export const namespaced = true;

export const state = () => ({
  products: ''
})

export const getters = {
  currentUser(state) {
      return state.products;
  },
}

export const mutations = {
  SET_PRODUCTS(state, products) {
      state.products = products;
  },
}

export const actions = {
  getProducts({commit}) {
    const PRODUCTS = gql`
      query{
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
    const {result} = useQuery(PRODUCTS)
    console.log(result)
  }
}

