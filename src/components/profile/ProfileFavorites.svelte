<script>
import HeartIcon from '../../assets/images/Heart.svg';
</script>

<article class="profile-favorites profile-block">
  <div class="profile-favorites-logo">
    <img src={HeartIcon} alt="">
  </div>
  <h2 class="profile-favorites-title">Избранное</h2>
  <p class="profile-favorites-count">Избранных товаров не найдено</p>
</article>

<style scoped>
  .profile-favorites-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    border: 2px solid #D2D2D2;
    border-radius: 100%;
    margin-bottom: 15px;
  }

  .profile-favorites-logo img {
    width: 35px;
    height: 35px;
    opacity: .5;
  }

  .profile-favorites-title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .profile-favorites-count {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
</style>