export const namespaced = true;

export const state = () => ({
  currentUser: '',
  errors: '',
  response: '',
  test: {},
})

export const getters = {
  currentUser(state) {
    return state.currentUser;
  },
  isUserAuthorize() {
    return null
  },
  test(state) {
    return state.test
  },
  isTokenTrue() {
    this.$cookies.get('isTokenTrue');
  }
}

export const mutations = {
  SET_CURRENT_USER(state, currentUser) {
    state.currentUser = currentUser;
  },
  SET_TOKEN_STATUS_TRUE(state) {
    this.$cookies.set('isTokenTrue', true);
  },
  SET_TOKEN_STATUS_FALSE(state) {
    this.$cookies.set('isTokenTrue', false);
  },
  SET_RESPONSE(state, response) {
    state.response = response;
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  },
}

export const actions = {
  async register({ commit }, form) {
    // const response = await this.$mRestQuery.query('api/accounts/register/' ,form)
    // if(response.ok) {
    //   commit('SET_RESPONSE', response)
    //   console.log("Норм")
    // }
    // else {
    //   commit('SET_ERRORS', response)
    //   console.log('Не норм')
    // }
  },
  async auth({ commit }, authData) {
    const response = await this.$mRestQuery('api/accounts/login/',authData)
    if(response.statusText === 'OK') {
      console.log('норм', response)
      commit('SET_TOKEN_STATUS_TRUE')
    }
    else {
      commit('SET_TOKEN_STATUS_FALSE')
      console.log('Не норм', response)
    }
  },
  async resetPass({ commit }, login) {
    console.log(login)
    // const response = await this.$mRestQuery.query('api/accounts/send-reset-password-link/', login)
    // if(response.ok) {
    //   commit('SET_RESPONSE', response)
    //   console.log("Норм")
    // }
    // else {
    //   commit('SET_ERRORS', response)
    //   console.log('Не норм')
    // }
  },
  async checkAuth({ commit }) {
    var response = {}
    await this.$axios.get('http://127.0.0.1:8000/api/accounts/profile/', {withCredentials: true})
    .then(res => {
      commit('SET_CURRENT_USER', res.data)
      //commit('SET_TOKEN_STATUS_TRUE') 
    })
    .catch( err => {
      console.log(err)
      commit('SET_TOKEN_STATUS_FALSE')
    })
    // const response = await this.$mRestQuery('http://127.0.0.1:8000/api/accounts/profile/')
    // if(response.statusText === 'OK') {
    //   console.log('норм', response)
    //   commit('SET_TOKEN_STATUS_TRUE')
    // }
    // else {
    //   commit('SET_TOKEN_STATUS_FALSE')
    //   console.log('Не норм', response)
    // }
  }
}