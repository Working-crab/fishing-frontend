<template>
  <div class="modal auth-modal">
    <form @submit.prevent="auth" class="auth auth-modal-form" action="">
      <div class="auth-container">
        <div class="auth-title">
          <div class="auth-title-logo">
            <img src="@/assets/images/logo.png" alt="">
          </div>
          <h1 class="auth-title-text">Авторизация</h1>
        </div>
        <AnimateInput
        v-model="login"
        :inputType="'text'"
        :name="'email'"
        :placeholder="'E-mail'"
        :labelClass="'auth-input'"
        />
        <AnimateInput
        v-model="password"
        :inputType="'password'"
        :name="'password'"
        :placeholder="'password'"
        :labelClass="'auth-input'"
        />
        <div class="auth-reset">
          <span @click="showResetModal">Забыли пароль?</span>
        </div>
        <div class="auth-footer">
          <span @click="showRegModal" class="auth-footer-link">Регистрация</span>
          <button type="submit" class="auth-footer-button button">Войти</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ModalReg from '@/components/modals/ModalReg.vue'
import ModalReset from '@/components/modals/ModalReset.vue'
export default {
  data() {
    return {
      logo: '@/assets/images/logo.png',
      login: '',
      password: '',
    }
  },
  methods: {
    showRegModal() {
      this.$mModal.show(ModalReg);
    },
    async auth() {
      const form = {
        login: this.login,
        password: this.password
      }
      await this.$nuxt.$store.dispatch('users/auth', form)
      this.$nuxt.$cookies.set('dateCheck', new Date().getTime())
      this.$nuxt.$router.go(this.$nuxt.$router.currentRoute)
    },
    showResetModal() {
      this.$mModal.show(ModalReset);
    }
  }
}
</script>