<script>
  import { Navigation, A11y } from 'swiper';

  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import 'swiper/css';
  import 'swiper/css/navigation';

  import InputCounter from '../InputCounter.svelte';
  import InputSelect from '../InputSelect.svelte';

  import AbugarciaIcon from '../../assets/images/brands/AbuGarcia.png';
  import DIcon from '../../assets/images/brands/D.png';
  import JackallIcon from '../../assets/images/brands/Jackall.png';
  import ShimanoIcon from '../../assets/images/brands/Shimano.png';
  import SunlineIcon from '../../assets/images/brands/Sunline.png';
  import RodImage from '../../assets/images/rod.png';
  import StuffFooter from '../stuffs/StuffFooter.svelte';

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
    // {
    //   id: 4,
    //   image: null,
    //   title: 'Удилище',
    //   price: '13999',
    // },
  ];

  import { stuffModal, stuffModalJSON } from '../../stores';

  const showStuffInfo = (stuff) => {
    stuffModal.update(item => {
      return {
        id: stuff.id,
        images: [],
        title: stuff.title,
        description: '',
        properties: [],
        rating: 0,
        price: ''
      }
    })
  }
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
      <InputCounter
        name="quantity"
        className="stuffs-sort-input"
        minValue={0}
        maxValue={3}
      />
    </div>
    <div class="stuffs-sort-control">
      <label for="type" class="stuffs-sort-label">Тип</label>
      <InputSelect
        name="quantity"
        className="stuffs-sort-input"
        options={options}
      />
    </div>
    <div class="stuffs-sort-control">
      <label for="length" class="stuffs-sort-label">Длина</label>
      <div class="stuffs-sort-group">
        <input type="number" name="length" class="stuffs-sort-input input" id="length-from" placeholder="От 50">
        <span> — </span>
        <input type="number" name="length" class="stuffs-sort-input input" id="length-to" placeholder="До 150">
      </div>
    </div>
  </div>
  <ul class="stuffs-list">
    {#each stuffs as stuff}
      <li class="stuffs-list-item">
        <div on:click={() => showStuffInfo(stuff)} class="stuffs-list-info">
          <div class="stuffs-list-info-image">
            <img src={stuff.image} alt="" />
          </div>
          <h3 class="stuffs-list-info-title">{stuff.title}</h3>
        </div>
        <StuffFooter
          stuff={stuff}
        />
      </li>
    {/each}
  </ul>
</div>