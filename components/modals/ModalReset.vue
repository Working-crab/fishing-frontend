<template>
  <div @click="hideModal" class="modal auth-modal">
      <form @click="handleFormSubmit" class="reset auth-modal-form" action="">
          <div class="auth-container">
              <div class="reset-title">
                  <div class="reset-title-logo">
                      <img src="@/assets/images/logo.png" alt="">
                  </div>
                  <h1 class="reset-title-text">Восстановление пароля</h1>
              </div>
              <AnimateInput
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

export default {
  methods: {
    showAuthModal() {
      this.$mModal.show(ModalAuth)
    },
    hideModal() {
      //this.$mModal.hide()
    },
    handleFormSubmit() {

    }
  }
}
</script>

