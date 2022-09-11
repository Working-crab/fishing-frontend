import gql from 'graphql-tag'
//import {useQuery} from '@vue/apollo'


export const namespaced = true;

export const state = () => ({
  products: {},
  productsPage: {},
  productsCount: 0,
  product: {},
  pictures: {}
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
  productPictures(state) {
    return state.pictures;
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
  SET_PRODUCT_PICTURES(state, pictures) {
    state.pictures = pictures;
  }

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
      const products = response.data.products.edges.map((product) => {
        return {
          id: product.node.id,
          name: product.node.name,
          description: product.node.description,
          mainPicture: product.node.mainPicture.image
        }
      });
      commit('SET_PRODUCTS_PAGE', products)
    }
    catch (e) {
      console.error(e.response?.data)
    }
  },
  async getAdditionalPictures({commit}, id) {
    const PRODUCTS =
    `query {
      products(id: ${id}){
        edges {
          node {
            id
            pictures {
              edges {
                node {
                  id
                  image
                }
              }
            }
          }
        }
      }
    }`
    try {
      const response = await this.$mGQLquery(PRODUCTS)
      const productPictures = response.data.products.edges[0].node.pictures.edges.map((product) => {
        return {
          id: product.node.id,
          imageName: product.node.image
        }
      });
      commit('SET_PRODUCT_PICTURES', productPictures)
    } 
    catch (e) {
      console.error(e.response?.data)
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
      console.error(e.response?.data)
    }
  },
}

