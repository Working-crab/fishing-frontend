<template>
    <header class="header">
        <div class="container container-header">
            <h1 class="header-logo">
                <NuxtLink to="/" class="header-logo-link">
                    <img class="logo-img" src="@/assets/images/logo.png" alt="">
                </NuxtLink>
            </h1>
            <div class="header-nav-container">
              <label class="search-container" for="search" >
                <input placeholder="Поиск по сайту" type="search" name="search">
                <img class="search-icon" src="@/assets/images/Search.svg" alt="">
              </label>
              <nav class="header-nav">
                  <ul class="header-nav-list">
                      <li class="header-nav-list-item">
                          <NuxtLink to="/Favorites" class="header-nav-list-link link">
                              <img src="@/assets/images/Heart.svg" alt="">
                              <p class="header-nav-list-text">Избранное</p>
                          </NuxtLink>
                      </li>
                      <li class="header-nav-list-item">
                          <NuxtLink to="/cart" class="header-nav-list-link link">
                              <img src="@/assets/images/Cart.svg" alt="">
                              <p class="header-nav-list-text">Корзина</p>
                          </NuxtLink>
                      </li>
                      <li class="header-nav-list-item">
                      <!--TODO: преименовать класс header-nav-list-link link и link -->
                          <div v-if="!isTokenTrue" @click="showModal" class="header-nav-list-link link">
                              <img src="@/assets/images/Person.svg" alt="">
                              <p class="header-nav-list-text">Войти</p>
                          </div>
                          <div v-else @click="pushToProfile" class="header-nav-list-link link">
                            <img src="@/assets/images/Person.svg" alt="">
                            {{currentUser.username}}
                          </div>
                      </li>
                  </ul>
              </nav>
            </div>
        </div>
    </header>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import ModalAuth from '@/components/modals/ModalAuth.vue'
import ModalReg from '@/components/modals/ModalReg.vue'
import ModalReset from '@/components/modals/ModalReset.vue'

export default {
    methods: {
      showModal() {
        this.$mModal.show(ModalAuth)
      },
      pushToProfile() {
        this.$router.push('/users/Profile/')
      }
    },
    computed: {
      ...mapGetters({
        currentUser: 'users/currentUser',
      }),
      isTokenTrue() {
        return this.$cookies.get('isTokenTrue')
      }
    },
    mounted() {
      this.modalComponent = 'ModalAuth'
    }
}
</script>

<style scoped>
.header {
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 6px 4px rgba(29, 34, 74, 0.1);
    margin-bottom: 30px;
}

.container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}

.logo-img {
    width: 50px;
    height: 50px;
}

.search-container{
    width: 650px;
    height:50px;
    position: relative;
    margin: 0 40px;
}

input {
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    outline: none;
    border: 0px;
    border-radius: 9px;
    background-color: #F8F8F8;
    padding: 0 20px;
}

.header-nav {
    position: relative;
    margin-right: 40px
}


.header-nav-list {
    display: flex;
    align-items: center;
}

.header-nav-list-item + .header-nav-list-item {
    margin-left: 20px;
}

.search-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}

.header-nav-list-text {
    font-size: 16px;
    line-height: 22px;
    margin-left: 10px;
}
li {
    cursor: pointer;
}

.header-nav-container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
@media screen and (max-width: 1024px) {
  .header-nav-container {
    display: none;
  }
}
</style>