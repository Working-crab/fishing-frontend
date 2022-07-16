<script>
    import logo from '../../assets/images/logo.png'

    import { authModal } from '../../stores';
    import Auth from './Auth.svelte';
    import AnimateInput from '../AnimateInput.svelte';

    const handleFormSubmit = () => {

    }

    const hideModal = () => {
        authModal.update(() => {
            return {
                component: null
            }
        });
    };

    const handleAuthLink = () => {
        authModal.update(() => {
            return {
                component: Auth
            }
        })
    }
</script>

<div on:click|stopPropagation={hideModal} class="modal auth-modal">
    <form on:click|preventDefault|stopPropagation={handleFormSubmit} class="reset auth-modal-form" action="">
        <div class="auth-container">
            <div class="reset-title">
                <div class="reset-title-logo">
                    <img src={logo} alt="">
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
                <span class="reset-footer-link" on:click={handleAuthLink}>Авторизация</span>
                <button class="reset-footer-button button">Отправить</button>
            </div>
        </div>

    </form>
</div>