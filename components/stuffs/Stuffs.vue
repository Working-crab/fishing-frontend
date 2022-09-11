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
          <div @click="showone" class="swiper-slide swiper-slide-item" v-for="slide,index in sliderElements" :key="slide">
            <img :id="index" :src="require(`@/assets/images/brands/${slide}`)" alt="brands">
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div> 
      </div>
    </div>
    <ProductFilter />
    <StuffsList />
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
    methods: {
      showone() {
        console.log(this.perView, document.body.clientWidth)
      },
    },
    computed: {
      // perView() {
      //   return document.body.clientWidth || 1920
      // }
    },
    data () {
      return {
        test: 0,
        swiperOptions: {
          loop: true,
          slidesPerView: 5,
          spaceBetween: 50,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
            },
            425: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1245: {
              slidesPerView: 5,
            },
          },
        },
        sliderElements: [
          'AbuGarcia.png',
          'D.png',
          'Jackall.png',
          'Shimano.png',
          'Sunline.png'
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>