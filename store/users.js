export const namespaced = true;

export const state = () => ({
  currentUser: '',
  errors: '',
  response: '',
})

export const getters = {
  currentUser(state) {
    return state.currentUser;
  },
  isUserAuthorize() {
    return null
  }
}

export const mutations = {
  SET_CURRENT_USER(state, currentUser) {
    state.currentUser = currentUser;
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
    const response = await this.$mRestQuery('api/accounts/login/', authData)
    if(response.statusText === 'OK') {
      console.log('норм', response)
      commit('SET_CURRENT_USER', response)
    }
    else {
      commit('SET_ERRORS', response)
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
    this.$axios.$get('http://127.0.0.1:8000/api/accounts/profile/', {withCredentials: false})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
    })
    // const response = await this.$mRestQuery.query('api/accounts/send-reset-password-link/', login)
    // if(response.ok) {
    //   commit('SET_RESPONSE', response)
    //   console.log("Норм")
    // }
    // else {
    //   commit('SET_ERRORS', response)
    //   console.log('Не норм')
    // }
  }
}