<script>
    import { Link } from "svelte-routing";
    import Logo from '../assets/images/logo.png'
    import SearchIcon from '../assets/images/Search.svg'
    import HeartIcon from '../assets/images/Heart.svg'
    import CartIcon from '../assets/images/Vector.svg'
    import UserIcon from '../assets/images/Person.svg'
</script>

<header class="header">
    <div class="container container-header">
        <h1 class="header-logo">
            <Link to="/" class="header-logo-link">
                <img class="logo-img" src={Logo} alt="">
            </Link>
        </h1>
        <label class="search-container" for="search" >
            <input placeholder="Поиск по сайту" type="search" name="search">
            <img class="search-icon" src={SearchIcon} alt="">
        </label>
        <nav class="header-nav">
            <ul class="header-nav-list">
                <li class="header-nav-list-item">
                    <Link to="/" class="header-nav-list-link link">
                        <img src={HeartIcon} alt="">
                        <p class="header-nav-list-text">Избранное</p>
                    </Link>
                </li>
                <li class="header-nav-list-item">
                    <Link to="/cart" class="header-nav-list-link link">
                        <img src={CartIcon} alt="">
                        <p class="header-nav-list-text">Корзина</p>
                    </Link>
                </li>
                <li class="header-nav-list-item">
                    <Link to="/" class="header-nav-list-link link">
                        <img src={UserIcon} alt="">
                        <p class="header-nav-list-text">Войти</p>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
</header>

<style scoped>
    .header {
        height: 80px;
        background: #FFFFFF;
        box-shadow: 0px 6px 4px rgba(29, 34, 74, 0.1);
        margin-bottom: 30px;
    }

    .container-header {
        height: 80px;
        display: flex;
        align-items: center;
    }

    .logo-img {
        width: 50px;
        height: 50px;
    }

    .search-container{
        margin: 0 112px;
        width: 650px;
        height:50px;
        position: relative;
    }

    input {
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        outline: none;
        border: 0px;
        border-radius: 9px;
        background-color: #F8F8F8;
        padding: 0 20px;
    }

    .header-nav {
        position: relative;
    }

    .header-nav-list {
        display: flex;
        align-items: center;
    }

    .header-nav-list-item + .header-nav-list-item {
        margin-left: 20px;
    }

    .search-icon {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    .header-nav-list-text {
        font-size: 16px;
        line-height: 22px;
        margin-left: 10px;
    }
    li {
        cursor: pointer;
    }
</style>