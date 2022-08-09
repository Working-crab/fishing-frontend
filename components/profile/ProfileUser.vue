<template>
  <article class="user profile-block">
    <main class="user-main">
      <div class="user-avatar">
        <img src="@/assets/images/Default_Avatar.svg" alt="">
      </div>
      <div class="user-info">
        <h2 class="user-info-initials">
          Иванов Иван Иванович
        </h2>
        <div class="user-contacts">
          <p class="user-contacts-item">
            <img src="@/assets/images/Mail.svg" alt="">
            <span>example@fishing.ru</span>
          </p>
          <p class="user-contacts-item">
            <img src="@/assets/images/Phone.svg" alt="">
            <span>+7(904)964-22-24</span>
          </p>
        </div>
      </div>
    </main>
    <footer class="user-footer">
      <div class="user-footer-password">
        <img src="@/assets/images/Lock.svg" alt="">
        <span>Пароль был изменён 3 дня назад</span>
      </div>
      <button class="user-footer-button button">
        <span>Выход</span>
      </button>
    </footer>
  </article>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.user {
  position: relative;
}

.user-main {
  display: flex;
  margin-top: 20px;
}

.user-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 2px solid #D2D2D2;
  border-radius: 100%;
}

.user-info {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 20px;
}

.user-info-initials {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  font-weight: 600;
}

.user-contacts {
  margin-top: auto;
}

.user-contacts-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.user-contacts-item img {
  margin-right: 15px;
}

.user-contacts-item span {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 500;
}

.user-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: auto;
}

.user-footer-password {
  display: flex;
  align-items: center;
}

.user-footer-password img {
  margin-right: 10px;
}

.user-footer-password span {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 500;
}

.user-footer-button {
  width: 100px;
  height: 35px;
  padding: 8px;
  border: 1.5px solid #2D75E1;
  border-radius: 5px;
  cursor: pointer;
}

.user-footer-button:hover {
  color: #FFF;
  background-color: #2D75E1;
}

.user-footer-button span {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.03em;
}
</style>