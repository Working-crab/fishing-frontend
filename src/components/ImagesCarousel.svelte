<script>
    import { Navigation, A11y } from 'swiper';

    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/css';
    import 'swiper/css/navigation';

    export let images = [];
    export let classes = "";
</script>

  <Swiper
    modules={[Navigation, A11y]}
    spaceBetween={28}
    slidesPerView={3}
    navigation
    class="{classes} images-carousel"
  >
  {#each images as image}
    <SwiperSlide class="images-carousel-item">
      <img src={image} alt="" />
    </SwiperSlide>
  {/each}
  </Swiper>