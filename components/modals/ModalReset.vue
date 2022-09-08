<template>
  <div class="modal auth-modal">
      <form @submit.prevent="handleFormSubmit" class="reset auth-modal-form" action="">
          <div class="auth-container">
              <div class="reset-title">
                  <div class="reset-title-logo">
                      <img src="@/assets/images/logo.png" alt="">
                  </div>
                  <h1 class="reset-title-text">Восстановление пароля</h1>
              </div>
              <AnimateInput
                  v-model="email"
                  inputType='email'
                  name='email'
                  placeholder='E-mail'
                  labelClass='reset-input'
              />
              <span class="reset-prompt">На указанную электронную почту придёт письмо с восстановлением пароля</span>
              <div class="reset-footer">
                  <span class="reset-footer-link" @click="showAuthModal">Авторизация</span>
                  <button class="reset-footer-button button">Отправить</button>
              </div>
          </div>
      </form>
  </div>
</template>

<script>
import ModalAuth from '@/components/modals/ModalAuth.vue'
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    ...mapActions({
      resetPass: 'users/resetPass'
    }),
    showAuthModal() {
      this.$mModal.show(ModalAuth)
    },
    async handleFormSubmit() {
      //console.log(this.$store)
      console.log(this)
      try {
        this.$mRestQuery('api/accounts/send-reset-password-link/', {login: this.email})
      }
      catch (e) {
        console.log('njn', e.response.data)
      }
    }
  }
}
</script>

