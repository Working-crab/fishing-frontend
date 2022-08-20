<template>
  <div class="modal auth-modal">
      <form @submit.prevent="handleFormSubmit" class="auth-modal-form" action="">
          <div class="auth-container">
              <div class="reg-title">
                  <div class="reg-title-logo">
                      <img src="@/assets/images/logo.png" alt="">    
                  </div>
                  <h1 class="reg-title-text"> Создание учётной записи</h1>
              </div>
              <div class="reg-grouping">
                  <AnimateInput
                  v-model="first_name"
                    name='name'
                    placeholder='Имя'
                    labelClass='reg-input'
                  />    
                  <AnimateInput
                    v-model="last_name"
                    name='surname'
                    placeholder='Фамилия'
                    labelClass='reg-input'
                  />  
              </div>
              <AnimateInput
                v-model="phone"
                inputType='tel'
                pattern="8[0-9]{10}"
                name='phone'
                placeholder='Phone'
                labelClass='reg-input'
              /> 
              <AnimateInput
                v-model="email"
                inputType='email'
                name='email'
                placeholder='E-mail'
                labelClass='reg-input'
              />  
              <AnimateInput
                v-model="password"
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
import {mapActions, mapGetters} from 'vuex'
export default {
  props: {
    selectClass: String,
    inputClass: String,
  },
  data() {
    return{
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      password: '',
      password_confirm: '',
    }
  },
  methods: {
    ...mapActions({
      register: 'user/'
    }),
    handleAuthLink() {
      this.$mModal.show(ModalAuth)
    },
    async handleFormSubmit() {

      //await setTimeout(() => console.log('сработало'), 1000)
      console.log(this.phone)
    }
  }
}
</script>