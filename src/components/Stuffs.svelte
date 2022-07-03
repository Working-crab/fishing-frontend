<script>
  import { Navigation, A11y } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/svelte';

  import 'swiper/css';
  import 'swiper/css/navigation';
</script>

<div class="stuffs-wrapper">
  <Swiper
    modules={[Navigation, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper>
  <div class="stuffs-sort">
    <div class="stuffs-sort-control">
      <label for="price" class="stuffs-sort-label">Цена (₽)</label>
      <div class="stuffs-sort-group">
        <input type="number" name="price" class="stuffs-sort-input input" id="price-from" placeholder="От 3 999">
        <span> — </span>
        <input type="number" name="price" class="stuffs-sort-input input" id="price-to" placeholder="До 14 999">
      </div>
    </div>
    <div class="stuffs-sort-control">
      <label for="quantity" class="stuffs-sort-label">Количество</label>
      <div class="stuffs-sort-group">
        <input type="number" name="quantity" class="stuffs-sort-input input" id="quantity" value="0">
      </div>
    </div>
  </div>
</div>

<style>
    .swiper {
        width: 100%;
        min-width: 0;
    }
</style>