<template>
  <div @click="hideModal" class="modal auth-modal">
      <form @submit="handleFormSubmit" class="auth-modal-form" action="">
          <div class="auth-container">
              <div class="reg-title">
                  <div class="reg-title-logo">
                      <img src="@/assets/images/logo.png" alt="">    
                  </div>
                  <h1 class="reg-title-text"> Создание учётной записи</h1>
              </div>
              <div class="reg-grouping">
                  <AnimateInput
                      name='name'
                      placeholder='Имя'
                      labelClass='reg-input'
                  />    
                  <AnimateInput
                      name='surname'
                      placeholder='Фамилия'
                      labelClass='reg-input'
                  />  
              </div>
              <PhoneInput labelClass='reg-input' />
              <AnimateInput
                  inputType='email'
                  name='email'
                  placeholder='E-mail'
                  labelClass='reg-input'
              />  
              <AnimateInput
                  inputType='password'
                  name='password'
                  placeholder='Пароль'
                  labelClass='reg-input'
              />  
              <AnimateInput
                  inputType='password'
                  name='repeat-password'
                  placeholder='Повторите пароль'
                  labelClass='reg-input'
              />  
              <div class="reg-footer">
                  <span @click="handleAuthLink" class="reg-footer-link">Есть аккаунт?</span>
                  <button class="reg-footer-button button">Регистрация</button>
              </div>
          </div>
      </form>
  </div>
</template>

<script>

import ModalAuth from '@/components/modals/ModalAuth.vue'
export default {
  props: {
    selectClass: String,
    inputClass: String,
  },
  methods: {
    handleAuthLink() {
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