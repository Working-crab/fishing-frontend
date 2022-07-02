<script>
    import '../assets/index.css'
    import logo from '../assets/logo.png'
    import SearchIcon from '../assets/Search Icon.svg'
    import Heart from '../assets/Heart Icon.svg'
    import cart from '../assets/Vector.svg'
    import chel from '../assets/person-svgrepo-com.svg'
</script>

<header>
    <div class="container main-wrapper">
        <img class="logo-img" src={logo} alt="">
        <label class="search-container" for="search" >
            <input placeholder="Поиск по сайту" type="search" name="search">
            <img class="search-icon" src={SearchIcon} alt="">
        </label>
        <nav class="nav-items-container">
            <ul>
                <li class="nav-item">
                    <img src={Heart} alt="">
                    <p>Избранное</p>
                </li>
                <li class="nav-item">
                    <img src={cart} alt="">
                    <p>Корзина</p>
                </li>
                <li class="nav-item">
                    <img src={chel} alt="">
                    <p>Войти</p>
                </li>
            </ul>
        </nav>
    </div>
</header>

<style scoped>
header {
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 6px 4px rgba(29, 34, 74, 0.1);
    margin-bottom: 30px;
}

.main-wrapper {
    height: 80px;
    display: flex;
    align-items: center;
}

.logo-img{
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

.nav-items-container {
    display: flex;
}

.nav-item {
    display: flex;
    margin-left: 20px;
}

.nav-items-container:nth-child(1) {
    margin-left: 0;
}

.search-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}

ul {
    display: flex;
}
p {
    margin-left: 10px;
}
li {
    cursor: pointer;
}
</style>