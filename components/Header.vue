<template>
    <header class="header">
        <div class="container container-header">
            <h1 class="header-logo">
                <NuxtLink to="/" class="header-logo-link">
                    <img class="logo-img" src="@/assets/images/logo.png" alt="">
                </NuxtLink>
            </h1>
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
                        <div @click="showModal" class="header-nav-list-link link">
                            <img src="@/assets/images/Person.svg" alt="">
                            <p class="header-nav-list-text">Войти</p>
                        </div> 
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import ModalAuth from '@/components/modals/ModalAuth.vue'
import ModalReg from '@/components/modals/ModalReg.vue'
import ModalReset from '@/components/modals/ModalReset.vue'

export default {
    methods: {
      showModal() {
        this.$mModal.show(ModalAuth)
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
</style>