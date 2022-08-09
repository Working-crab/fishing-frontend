<template>
  <article class="profile-order profile-block">
    <div class="profile-order-logo">
      <img src="@/assets/images/Order.svg" alt="">
    </div>
    <h2 class="profile-order-title">Активные заказы</h2>
    <p class="profile-order-count">Заказы отсутствуют</p>
  </article>
</template>


<script>
export default {
  
}
</script>

<style scoped>
.profile-order-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  border: 2px solid #D2D2D2;
  border-radius: 100%;
  margin-bottom: 15px;
}

.profile-order-title {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.profile-order-count {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 500;
}
</style>