<script>
  import { Navigation, Virtual } from 'swiper';

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

  const sliderElements = [
    AbugarciaIcon,
    DIcon,
    JackallIcon,
    ShimanoIcon,
    SunlineIcon,
  ];

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

  <div class="swiper-container">
  
    <Swiper
      modules={[Navigation, Virtual]}
      spaceBetween={50}
      slidesPerView={4}
      loop={true}
      navigation
      class="stuffs-brands"
    >

      {#each sliderElements as slide, index}
        <SwiperSlide class="swiper-slide-item">
          <img id={"slide" + index} src={slide} alt="" />
        </SwiperSlide>
      {/each}
      
    </Swiper>

  </div>

  <StuffsSort types={options} />
  <StuffsList stuffs={stuffs} />
</div>