<script>
import logo from '../../assets/images/logo.png'

import { authModal } from '../../stores';
import AnimateInput from '../AnimateInput.svelte';
import PhoneInput from '../PhoneInput.svelte';
import Auth from './Auth.svelte';

const handleFormSubmit = () => {

}

const hideModal = () => {
    authModal.update(() => {
        return {
            component: null
        }
    })
}

const handleAuthLink = () => {
    authModal.update(() => {
        return {
            component: Auth
        }
    })
}

</script>

<div on:click|stopPropagation={hideModal} class="modal auth-modal">
    <form on:click|preventDefault|stopPropagation={handleFormSubmit} class="reg auth-modal-form" action="">
        <div class="auth-container">
            <div class="reg-title">
                <div class="reg-title-logo">
                    <img src={logo} alt="">    
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
                <span on:click={handleAuthLink} class="reg-footer-link">Есть аккаунт?</span>
                <button class="reg-footer-button button">Регистрация</button>
            </div>
        </div>
    </form>
</div>