<template>
  <div class="container">
    <article class="stuffs">
      <div class="staff-menu-container">
        <StuffMenu />
        <StuffsSort />
      </div>
      <Stuffs />
      <nuxt-link to="/PassChange">К тестовой модалке</nuxt-link>
    </article>
    <button @click="vivod">asdads</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import StuffMenu from '@/components/stuffs/StuffMenu'
import Stuffs from '@/components/stuffs/Stuffs'
import StuffsSort from '@/components/stuffs/StuffsSort'

export default {
  name: 'IndexPage',
  layout: 'default',
  components: {
    StuffMenu,
    Stuffs,StuffsSort
  },
  data() {
    return {
    }
  },
  created() {
    //this.getProducts()
  },
  methods: {
    vivod() {
      console.log(this)
    }
  }
}
</script>

<style scoped>
.staff-menu-container {
  max-width: 300px;
  width: 100%;
}

</style>
