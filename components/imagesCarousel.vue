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
          <img :src="`https://diwos.ru/uploads/` + image.image" alt="brands">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
    classes: String,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  },
}
</script>