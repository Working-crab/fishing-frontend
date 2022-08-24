<template>
  <div>
    <h1>Cart</h1>
    <article class="favorites">
        <header class="favorites-header">
            <h2 class="favorites-header-title">Позиций в корзине: {{ stuffs.length }}</h2>
        </header>
        <StuffsList :parentClass="`stuffs-list--favorites`" :stuffs="stuffs" />
    </article>
    <h1>Итого: {{ total }}</h1>
  </div>
</template>

<script>
import StuffsList from '@/components/stuffs/StuffsList'

export default {
    components: {
        StuffsList
    },
    data() {
        return {
            stuffs: [
                {
                    id: 1,
                    image: 'rod.png',
                    title: 'Удилище',
                    price: '7999',
                },
                {
                    id: 2,
                    image: 'rod.png',
                    title: 'Удилище',
                    price: '13999',
                },
                {
                    id: 3,
                    image: 'rod.png',
                    title: 'Удилище',
                    price: '13999',
                },
                {
                    id: 4,
                    image: 'rod.png',
                    title: 'Удилище',
                    price: '13999',
                },
                {
                    id: 5,
                    image: 'rod.png',
                    title: 'Удилище',
                    price: '13999',
                },
            ]
        }
    },
    methods: {
    },
  computed: {
    total() {
      return this.stuffs.reduce((total, stuff) => {
        return total + parseInt(stuff.price)
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>