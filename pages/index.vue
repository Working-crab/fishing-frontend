<template>
  <div class="container">
    <article class="stuffs">
      <div class="staff-menu-container">
        <StuffMenu />
        <StuffsSort />
      </div>
      <Stuffs />
    </article>
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
  mounted() {
  },
  methods: {
    show() {
      this.$store.dispatch('users/checkAuth')
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'users/currentUser'
    })
  }
}
</script>

<style scoped>
.staff-menu-container {
  max-width: 300px;
  width: 100%;
}

@media screen and (max-width: 1024px) {
  .staff-menu-container {
    display: none;
  }
}


</style>
