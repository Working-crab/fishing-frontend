<template>
  <div class="reset-pass-container">
    <div class="modal modal-mask"></div>
    <form @submit.prevent="resetPass" class="auth auth-modal-form reset-pass" action="">
      <div class="auth-container">
        <div class="auth-title">
          <div class="auth-title-logo">
            <img src="@/assets/images/logo.png" alt="">
          </div>
          <h1 class="auth-title-text">Смена пароля</h1>
        </div>
        <AnimateInput
        v-model="passsword"
        :inputType="'password'"
        :name="'password'"
        :placeholder="'пароль'"
        :labelClass="'auth-input'"
        />
        <AnimateInput
        v-model="confirm_passsword"
        :inputType="'password'"
        :name="'confirm password'"
        :placeholder="'повторить пароль'"
        :labelClass="'auth-input'"
        />
        <div class="reset-next-footer">
          <button type="submit" class="auth-footer-button button">Изменить пароль</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ModalReg from '@/components/modals/ModalReg.vue'
import ModalReset from '@/components/modals/ModalReset.vue'
import Constants from '@/config.js'
export default {
  layout: 'clear',
  data() {
    return {
      logo: '@/assets/images/logo.png',
      passsword: '',
      confirm_passsword: '',
    }
  },
  methods: {
    resetPass() {
      console.log(this)
      // if(this.passsword === this.confirm_passsword) {
      //   //Отправить passsword на сервер
      // }
      // else {
        
      // }
      
      //this.$mRestQuery()
    }
  }
}
</script>

<style scoped>
.reset-pass-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
}

.reset-pass {
  z-index: 103;
  margin: auto;
}

.reset-next-footer {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  margin-top: auto;
}
</style>