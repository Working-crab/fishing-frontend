<template>
  <article class="profile-order-history profile-block">
    <div class="profile-order-history-logo">
      <img src="@/assets/images/History.svg" alt="">
    </div>
    <h2 class="profile-order-history-title">История заказов</h2>
    <p class="profile-order-history-count">Пока в истории нет заказов</p>
  </article>
</template>

<script>
export default {
  
}
</script>


<style scoped>
  .profile-order-history-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    border: 2px solid #D2D2D2;
    border-radius: 100%;
    margin-bottom: 15px;
  }

  .profile-order-history-title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .profile-order-history-count {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
</style>