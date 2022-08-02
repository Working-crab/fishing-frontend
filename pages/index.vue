<template>
  <div class="container">
    <article class="stuffs">
      <StuffMenu />
      <Stuffs />
    </article>
    <button @click="getProducts1">запрос</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import StuffMenu from '@/components/stuffs/StuffMenu'
import Stuffs from '@/components/stuffs/Stuffs'
import Modal from '@/components/Modal.vue'
import ModalAuth from '@/components/modals/ModalAuth.vue'

export default {
  name: 'IndexPage',
  layout: 'default',
  components: {
    StuffMenu,
    Stuffs,
    Modal,
  },
  data() {
    return {
      foo: false,
      products: '',
    }
  },
  methods: {
    getProducts1(){
      console.log(this.products.edges[0].node)
    },
    ...mapActions({
      getProducts: 'products/getProducts'
    })
  }
}
</script>

<style scoped>
</style>
