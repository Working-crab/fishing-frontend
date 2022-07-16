<script>
import logo from '../../assets/images/logo.png'

import { authModal } from '../../stores';
import AnimateInput from '../AnimateInput.svelte';
import Register from './Register.svelte';
import ResetPassword from './ResetPassword.svelte';

const hideModal = () => {
    authModal.update(() => {
        return {
            component: null
        }
    });
};

const handleFormSubmit = () => {

}

const handleRegistrationLink = () => {
    authModal.update(() => {
        return {
            component: Register
        }
    })
}

const handleResetLink = () => {
    authModal.update(() => {
        return {
            component: ResetPassword
        }
    })
}

</script>

<div on:click|stopPropagation={hideModal} class="modal auth-modal">
    <form on:click|stopPropagation|preventDefault={handleFormSubmit} class="auth auth-modal-form" action="">
        <div class="auth-container">
            <div class="auth-title">
                <div class="auth-title-logo">
                    <img src={logo} alt="">
                </div>
                <h1 class="auth-title-text">Авторизация</h1>
            </div>
            <AnimateInput
                inputType='email'
                name='email'
                placeholder='E-mail'
                labelClass='auth-input'
            />
            <AnimateInput
                inputType='password'
                name='password'
                placeholder='Пароль'
                labelClass='auth-input'
            />
            <div class="auth-reset">
                <span on:click={handleResetLink}>Забыли пароль?</span>
            </div>
            <div class="auth-footer">
                <span class="auth-footer-link" on:click={handleRegistrationLink}>Регистрация</span>
                <button type="submit" class="auth-footer-button button">Войти</button>
            </div>
        </div>
    </form>
</div>
    