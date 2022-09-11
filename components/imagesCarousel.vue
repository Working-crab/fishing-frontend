<template>
  <div class="swiper-container">
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div
      class="swiper"
      v-swiper:mySwiper="swiperOptions"
    >
      <div :class="`${classes} swiper-wrapper images-carousel`">
        <div class="swiper-slide images-carousel-item" v-for="image, index in images" :key="index">
          <img @click="switchImg(image)" :src="`${Constants.BASE_URL}uploads/` + image.imageName" alt="brands">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Constants from '@/config'

export default {
  props: {
    images: Array,
    classes: String,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 20,
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
          },
      },
      Constants: Constants
    }
  },
  methods: {
    switchImg (image) {
      this.$emit('changeImg', image.imageName)
    },
  },
}
</script>