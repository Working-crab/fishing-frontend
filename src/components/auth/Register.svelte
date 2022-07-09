<script>
import logo from '../../assets/images/logo.png'

import { regModal } from '../../stores';
import { authModal } from '../../stores';

const showAuthModal = () =>{
    regModal.update(modal => {
        return {
            ...modal, isVisible: false
        }
    });
    authModal.update(modal => {
        return {
            ...modal, isVisible: true
        }
    });
};

const closeModal = () =>{
    regModal.update(modal => {
        return {
            ...modal, isVisible: false
        }
    });
};
</script>

<div class="reg-wrapper">
    <div on:click={closeModal} class="blackover"></div>
    <form class="reg-form" action="">
        <div class="title-container">
            <div class="logo-img">
                <img  src={logo} alt="">
            </div>
            <h1>Создание учётной записи</h1>
        </div>
        <div class="reg-form-grouping">
            <input class="input reg-form-input" placeholder="Имя" type="text">

            <input class="input reg-form-input" placeholder="Фамилия" type="text">
        </div>

        <input class="input reg-form-input" type="phone">
        
        <label class="email-label" for="">
            <span>E-mail</span>
            <input class="input reg-form-input" type="email">
        </label>
        <input class="input reg-form-input" placeholder="Пароль" type="password">
        <input class="input reg-form-input" placeholder="Повторите пароль" type="password">

        <div class="reg-footer">
            <span on:click={showAuthModal}>Есть аккаунт?</span>
            <button class="btn">Регистрация</button>
        </div>
    </form>
</div>

<style>
.reg-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
}

.blackover {
    position: absolute;
    z-index: 98;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
}
.reg-form {
    z-index: inherit;
    background-color: #fff;
    border-radius: 10px;
    width: 600px;
    height: 525px;
    padding: 0 100px;
}

.title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
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

.reg-form-grouping {
    display: flex;
    
}

.reg-form-input {
    background-color: #F8F8F8;
    border-radius: 10px;
    height: 50px;
    padding: 0 20px;
    width: 100%;
    margin-bottom: 10px;
}
.reg-form-grouping input:first-child {
    margin-right: 20px;
}

h1 {
    font-weight: 400;
    font-size: 24px;
    margin-left: 24px;
}

.email-label{
    position: relative;
}

.email-label span{
    position: absolute;
    left: 20px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
}

.reg-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
}

.reg-footer span {
    color: #2D75E1;
    cursor: pointer;
}

span{
    font-size: 14px;
}
</style>