export const namespaced = true;

export const state = () => ({
    component: ''
})

export const getters = {
  currentUser(state) {
      return state.component;
  },
}

export const mutations = {
  SET_MODAL(state, component) {
      state.component = component;
  },
}

export const actions = {
  
}