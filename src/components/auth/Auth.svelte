<script>
    import logo from '../../assets/images/logo.png'

    import { regModal } from '../../stores';
    import { authModal } from '../../stores';
    import { resetPassModal } from '../../stores';

    const showRegModal = () =>{
        regModal.update(modal => {
            return {
                ...modal, isVisible: true
            }
        });
        authModal.update(modal => {
            return {
                ...modal, isVisible: false
            }
        });
    }

    const closeModal = () =>{
        authModal.update(modal => {
            return {
                ...modal, isVisible: false
            }
        });
    };

    const showResetPassModal = () =>{
        regModal.update(modal => {
            return {
                ...modal, isVisible: false
            }
        });
        authModal.update(modal => {
            return {
                ...modal, isVisible: false
            }
        })
        resetPassModal.update(modal => {
            return {
                ...modal, isVisible: true
            }
        })
    }
</script>

<div class="auth-wrapper">
    <div on:click={closeModal} class="blackover"></div>
    <form class="auth-form" action="">
        <div class="title-container">
            <div class="logo-img">
                <img  src={logo} alt="">
            </div>
            <h1>Авторизация</h1>
        </div>
        <input class="input auth-form-input" placeholder="E-mail" type="email">
        <input class="input auth-form-input" placeholder="пароль" type="password">
        <div class="forgot-password-container">
            <span on:click={showResetPassModal}>Забыли пароль?</span>
        </div>
        <div class="auth-footer">
            <span on:click={showRegModal}>Регистрация</span>
            <button class="btn">Войти</button>
        </div>
    </form>
</div>

<style>
    .auth-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
    }

    .auth-form {
        z-index: inherit;
        background-color: #fff;
        border-radius: 10px;
        width: 600px;
        height: 525px;
        padding: 0 100px;
    }

    .auth-form-input {
        background-color: #F8F8F8;
        border-radius: 10px;
        height: 50px;
        padding: 0 20px;
        width: 100%;
        margin-bottom: 10px;
    }

    .title-container {
        display: grid;
        align-items: center;
        justify-content: center;
        justify-items: center;
        margin-top: 50px;
        margin-bottom: 30px;
    }

    .logo-img {
        width: 75px;
        height: 75px;
        position: relative;
    }
    .logo-img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
        top: 0;
        left: 0;
    }
    h1 {
        font-weight: 400;
        font-size: 24px;
        margin-top: 20px;
    }
    .forgot-password-container {
        display: flex;
        justify-content: flex-end;
    }
    .forgot-password-container span {
        color: #2D75E1;
        cursor: pointer;
    }
    .auth-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 40px;
    }
    .auth-footer span {
        color: #2D75E1;
        cursor: pointer;
    }

    span{
        font-size: 14px;
    }
</style>
    