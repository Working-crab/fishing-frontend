<script>
    import logo from '../../assets/images/logo.png'

    import { authModal } from '../../stores';
    import { resetPassModal } from '../../stores';

    const showResetPassModal = () =>{
        authModal.update(modal => {
            return {
                ...modal, isVisible: true
            }
        });
        resetPassModal.update(modal => {
            return {
                ...modal, isVisible: false
            }
        });
    }
</script>

<div class="reset-pass-wrapper">
    <div class="blackover"></div>
    <form class="reset-pass-form" action="">
        <div class="title-container">
            <div class="logo-img">
                <img  src={logo} alt="">
            </div>
            <h1>Восстановление пароля</h1>
        </div>
        <input class="input reset-pass-form-input" placeholder="E-mail" type="text">
        <span class="message-prompt">На указанную электронную почту придёт письмо с восстановлением пароля</span>
        <div class="reset-pass-footer">
            <span on:click={showResetPassModal}>Авторизация</span>
            <button class="btn">Отправить</button>
        </div>
    </form>
</div>

<style>
    .reset-pass-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
    }

    .reset-pass-form {
        z-index: inherit;
        background-color: #fff;
        border-radius: 10px;
        width: 600px;
        height: 525px;
        padding: 0 100px;
    }

    .reset-pass-form-input {
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
    .message-prompt {
        color: rgba(0, 0, 0, 0.5);
    }
    .reset-pass-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 72px;
    }
    .reset-pass-footer span {
        color: #2D75E1;
        cursor: pointer;
    }
    span{
        font-size: 14px;
    }
</style>