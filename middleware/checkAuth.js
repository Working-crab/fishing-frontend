import ModalAuth from '@/components/modals/ModalAuth.vue'

export default async function({store, app, redirect}) {
  let now = new Date().getTime()
  if(app.$cookies.get('isTokenTrue')) {
    await store.dispatch('users/checkAuth')
    .catch( err => {
      console.log(err)
      //redirect('/index')
    })
    app.$cookies.set('dateCheck', new Date().getTime())
  }
}