<script>
  import { Navigation, A11y } from 'swiper';

  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import 'swiper/css';
  import 'swiper/css/navigation';

  import StuffsList from './StuffsList.svelte';

  import AbugarciaIcon from '../../assets/images/brands/AbuGarcia.png';
  import DIcon from '../../assets/images/brands/D.png';
  import JackallIcon from '../../assets/images/brands/Jackall.png';
  import ShimanoIcon from '../../assets/images/brands/Shimano.png';
  import SunlineIcon from '../../assets/images/brands/Sunline.png';
  import RodImage from '../../assets/images/rod.png';
  import StuffsSort from './StuffsSort.svelte';

  let options = [
    {id: 1, value: 'val'},
    {id: 2, value: 'val'},
    {id: 3, value: 'val'},
    {id: 4, value: 'val'},
    {id: 5, value: 'val'},
    {id: 6, value: 'val'},
    {id: 7, value: 'val'},
    {id: 8, value: 'val'},
  ];

  let stuffs = [
    {
      id: 1,
      image: RodImage,
      title: 'Удилище',
      price: '7999',
    },
    {
      id: 2,
      image: RodImage,
      title: 'Удилище',
      price: '13999',
    },
    {
      id: 3,
      image: RodImage,
      title: 'Удилище',
      price: '13999',
    },
    {
      id: 4,
      image: null,
      title: 'Удилище',
      price: '13999',
    },
  ];
</script>

<div class="stuffs-wrapper">
  <!-- todo: swiper styles are broken, try add more swiper sldies and then you'll see -->
  <Swiper
    modules={[Navigation, A11y]}
    spaceBetween={28}
    slidesPerView={3}
    navigation
    class="stuffs-brands"
  >
    <SwiperSlide class="stuffs-brands-item">
      <img src={AbugarciaIcon} alt="" />
    </SwiperSlide>
    <SwiperSlide class="stuffs-brands-item">
      <img src={DIcon} alt="" />
    </SwiperSlide>
    <SwiperSlide class="stuffs-brands-item">
      <img src={JackallIcon} alt="" />
    </SwiperSlide>
    <SwiperSlide class="stuffs-brands-item">
      <img src={ShimanoIcon} alt="" />
    </SwiperSlide>
    <SwiperSlide class="stuffs-brands-item">
      <img src={SunlineIcon} alt="" />
    </SwiperSlide>
  </Swiper>
  <StuffsSort types={options} />
  <StuffsList stuffs={stuffs} />
</div>