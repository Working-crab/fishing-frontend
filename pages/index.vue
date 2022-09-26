<template>
  <div class="container">
    <article class="stuffs">
      <div class="icon-container">
        <i @click="() => isBurgerActive = true" id="opStuffMenu" class="pi pi-angle-right open-menu-icon"></i>
      </div>
      <div class="staff-menu-container">
        <StuffMenu />
        <StuffsSort />
      </div>
      <div :class="isBurgerActive ? 'burger-drop-active' : 'burger-drop-deactive'">
        <div @click="() => isBurgerActive = false" class="modal-mask"></div>
        <div class="modal-stuff-menu-body">
          <div class="staff-menu-container-burger">
            <StuffMenu />
            <StuffsSort />
          </div>
        </div>
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
      isBurgerActive: false
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
.staff-menu-container-burger {
    background-color: white;
    width: 300px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    overflow: auto;
    padding: 10px;
}

.burger-drop-active {
  display: block;
}

.burger-drop-deactive {
  display: none
}


.open-menu-icon {
  display: none;  
  margin: auto;
}
@media screen and (max-width: 1024px) {
  .open-menu-icon {
    display: block;
    position: fixed;
    cursor: pointer;
    font-size: 2rem;
  }
  .icon-container {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 16px;;
  }
}

.modal-stuff-menu-body {
  position: absolute;
  z-index: 103;
  padding: 10px;
}



</style>
