export default async function({store, app, redirect}) {
  let now = new Date().getTime()
  if ( now - app.$cookies.get('dateCheck')  >= 300000) {
    console.log('пришло в мидлвару', now,  app.$cookies.get('dateCheck'))
    await store.dispatch('users/checkAuth')
    app.$cookies.set('dateCheck', new Date().getTime())
  }
}