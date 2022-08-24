import Vue from 'vue';
import MaxModal from '@/components/Modal.vue';
import Constants from '@/config.js'




// async function baseAxiosQuery (options) {
    
//   try {
//     const result = await context.$axios(options);
//   }
//   catch (err){
//     console.log(err.response.data)
//   }
//   return result;
// }

export default (context, inject) => {

  let errorStor = ''

  async function baseAxiosQuery (options) {
    try {
      const result = await context.$axios(options);
      return  result //{data: result, status: 'ок'};
    }
    catch (err){
      return err.response.data//;{data: err.response.data, status: 'err'}
    }
  }

  // function baseAxiosQuery (options) {
  //   const result = context.$axios(options)
  //   .then((response) => {
  //   })
  //   .catch(error => {
  //     errorStor = error.response.data
  //   })
  //   return result
  // }

  async function mRestQuery (apiUrl, data = undefined,  options = {}) {
    
    let csrftoken = ''; 

    if (!options.nocsrf) {
      csrftoken = await getCsrftoken();
    }

    if (!csrftoken) {
      console.error('Not able to get csrf token');
      return;
    }

    const mainOptions = {
      url: Constants.BASE_URL + apiUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-csrftoken': csrftoken
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
        url: Constants.BASE_URL + 'api/csrftoken/',
        method: 'GET',
      }
      await baseAxiosQuery(options)
      cookie = context.app.$cookies.get('csrftoken')
      return cookie
    }
    return cookie
  }

  Vue.use({
    install (App, options) {
      App.prototype.$mRestQuery = function (apiUrl, data = undefined,  options = {}) {
        mRestQuery(apiUrl, data,  options)
      } 
      App.$mRestQuery = App.prototype.$mRestQuery;
    }
  })

  inject('mRestQuery', mRestQuery)
}

