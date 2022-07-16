<script>
  import StuffsList from '../components/stuffs/StuffsList.svelte';
  import HeartIcon from '../assets/images/Heart.svg';
  import RodImage from '../assets/images/rod.png';

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
    {
      id: 5,
      image: null,
      title: 'Удилище',
      price: '13999',
    },
  ];
</script>

<article class="favorites">
  <header class="favorites-header">
    <img class="favorites-header-logo" src={HeartIcon} alt="">
    <h2 class="favorites-header-title">Избранное ({stuffs.length})</h2>
  </header>
  <StuffsList parentClass='stuffs-list--favorites' stuffs={stuffs} />
</article>

<style scoped>
  .favorites-header {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }

  .favorites-header-logo {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    opacity: .5;
  }

  .favorites-header-title {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 18px;
  }
</style>