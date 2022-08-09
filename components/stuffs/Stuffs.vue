<template>
  <div class="stuffs-wrapper">
    <div class="swiper-container">
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div
        class="swiper stuffs-brands"
        v-swiper:mySwiper="swiperOptions"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide-item" v-for="slide,index in sliderElements" :key="slide">
            <img :id="index" :src="require(`@/assets/images/brands/${slide}`)" alt="brands">
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div> 
      </div>
    </div>
    <ProductFilter />
    <StuffsList :stuffs="stuffs" />
  </div>
</template>

<script>
import StuffsSort from '@/components/stuffs/StuffsSort'
import StuffsList from '@/components/stuffs/StuffsList'

  export default {
      name: 'swiper-nuxt',
      directives: {
    },
    components: {
      StuffsSort,
      StuffsList
    },
    data () {
      return {
        swiperOptions: {
          loop: true,
          slidesPerView: 5,
          spaceBetween: 50,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        sliderElements: [
          'AbuGarcia.png',
          'D.png',
          'Jackall.png',
          'Shimano.png',
          'Sunline.png'
        ],
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
        ],
      }
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>

</style>