<template>
  <div>
    <h1>Cart</h1>
    <article class="favorites">
        <header class="favorites-header">
          <client-only>
            <h2 class="favorites-header-title">Позиций в корзине: {{ cartItems.length }}</h2>
          </client-only>
        </header>
        <StuffsList :parentClass="`stuffs-list--favorites`" />
    </article>
    <h1>Итого: {{ total }}</h1>
  </div>
</template>

<script>
import StuffsList from '@/components/stuffs/StuffsList'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
    StuffsList
  },
  data() {
    return {
      stuffs: 0
    }
  },
  methods: {
    ...mapActions({
      getCartPage: 'cart/getCartPage'
    })
  },
  computed: {
    total() {
      return this.cartItems.reduce((total, stuff) => {
        return total + parseInt(stuff.product.formatted_price)
      }, 0)
    },
    ...mapGetters({
      cartItems: 'cart/cartItems'
    })
  },
  async mounted() {
    await this.getCartPage()
  }
}
</script>

<style lang="scss" scoped>

</style>