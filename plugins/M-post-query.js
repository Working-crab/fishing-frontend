import Vue from 'vue';
import MaxModal from '@/components/Modal.vue';
import Constants from '@/config.js'


export default (context, inject) => {

  async function baseAxiosQuery (options) {
    try {
      const result = await context.$axios(options);
      return result
    }
    catch (err){ 
      return err.response
    }
  }

  async function mRestQuery (apiUrl, data = undefined,  options = {}) {

    let csrftoken_query = {}
    let csrftoken = context.app.$cookies.get('csrftoken')

    if (!csrftoken) {
      csrftoken_query = await getCsrftoken()
      csrftoken = context.app.$cookies.get('csrftoken')
    }

    if (!csrftoken) {
      console.error('Not able to get csrf token');
      return csrftoken_query;
    }

    const mainOptions = {
      withCredentials: true,
      url: Constants.BASE_URL + apiUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-csrftoken': context.app.$cookies.get('csrftoken')
      },
      data: data ? JSON.stringify(data) : undefined,
    };
    Object.assign(mainOptions, options)
    const result = await baseAxiosQuery(mainOptions);
    return result;
  }

  async function getCsrftoken() {
    let cookie = context.app.$cookies.get('csrftoken')
    if(!cookie) {
      const options = {
        withCredentials: true,
        url: Constants.BASE_URL + 'api/csrftoken/',
        method: 'GET',
      }
      let result = await baseAxiosQuery(options)
      cookie = context.app.$cookies.get('csrftoken')
      return result
    }
    //return cookie
  }

  Vue.use({
    install (App, options) {
      App.prototype.$mRestQuery = async function (apiUrl, data = undefined,  options = {}) {
        return await mRestQuery(apiUrl, data,  options)
      } 
      App.$mRestQuery = App.prototype.$mRestQuery;
    }
  })

  inject('mRestQuery', mRestQuery)
}

