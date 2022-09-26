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
        <span class="error-placeholder">{{error}}</span> 
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
      error: '',
    }
  },
  methods: {
    async resetPass() {
      console.log(this.$route)
      
      const formReset =
      {
        "user_id": this.$route.query.user_id,
        "timestamp": this.$route.query.timestamp,
        "signature": this.$route.query.signature,
        "password": this.passsword
      }
      if(this.passsword === this.confirm_passsword) {

        const response = await this.$mRestQuery('api/accounts/reset-password/', formReset)
        if(response?.statusText === 'OK') {
          this.$router.push('/')
          console.log(response)
        }
        else {
          if(response?.data?.password) {
            this.error = 'password: '
              response?.data?.password?.map(err => {
              this.error += err
            })
          }
          
        }
        // try {
        //   const response = await this.$mRestQuery('api/accounts/reset-password/', formReset)
        //   //this.$router.push('/')
        //   console.log(response)
        // }
        // catch (e) {
        //   console.log(response)
        //   this.error = e?.response?.data.password
        // }
        
        // if (response.data?.password?.length) {
        //   this.error = response.data.password.join(' \n')
        // }
      }
      else {
        this.error = 'Пароли не совпаают'
      }
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

.auth-footer-button {
  margin-top: 10px;
}
</style>