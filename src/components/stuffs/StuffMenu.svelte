<script>
    import { Link } from "svelte-routing";
    import FishingRodIcon from "../../assets/images/Fishing_Rod.svg";
    import FishingLinesIcon from "../../assets/images/Fishing_Lines.svg";
    import CoilIcon from "../../assets/images/Coil.svg";
    import HookIcon from "../../assets/images/Hook.svg";
    import BiteIcon from "../../assets/images/Bite.svg";
    import MountingIcon from "../../assets/images/Mounting.svg";
    import FishingNetIcon from "../../assets/images/Fishing_Net.svg";
</script>

<div class="stuffs-menu">
    <ul class="stuffs-menu-list">
        <li class="stuffs-menu-list-item">
            <Link to="/" class="stuffs-menu-list-link link">
                <img src={FishingRodIcon} alt="">
                <p class="stuffs-menu-list-text">Удилища</p>
                <small class="stuffs-menu-list-count">131</small>
            </Link>
        </li>
        <li class="stuffs-menu-list-item">
            <Link to="/" class="stuffs-menu-list-link link">
                <img src={FishingLinesIcon} alt="">
                <p class="stuffs-menu-list-text">Лески, шнуры</p>
                <small class="stuffs-menu-list-count">131</small>
            </Link>
        </li>
        <li class="stuffs-menu-list-item">
            <Link to="/" class="stuffs-menu-list-link link">
                <img src={CoilIcon} alt="">
                <p class="stuffs-menu-list-text">Катушки</p>
                <small class="stuffs-menu-list-count">131</small>
            </Link>
        </li>
        <li class="stuffs-menu-list-item">
            <Link to="/" class="stuffs-menu-list-link link">
                <img src={HookIcon} alt="">
                <p class="stuffs-menu-list-text">Крючки</p>
                <small class="stuffs-menu-list-count">131</small>
            </Link>
        </li>
        <li class="stuffs-menu-list-item">
            <Link to="/" class="stuffs-menu-list-link link">
                <img src={BiteIcon} alt="">
                <p class="stuffs-menu-list-text">Приманки</p>
                <small class="stuffs-menu-list-count">131</small>
            </Link>
        </li>
        <li class="stuffs-menu-list-item">
            <Link to="/" class="stuffs-menu-list-link link">
                <img src={MountingIcon} alt="">
                <p class="stuffs-menu-list-text">Монтажи</p>
                <small class="stuffs-menu-list-count">131</small>
            </Link>
        </li>
        <li class="stuffs-menu-list-item">
            <Link to="/" class="stuffs-menu-list-link link">
                <img src={FishingNetIcon} alt="">
                <p class="stuffs-menu-list-text">Подсачеки</p>
                <small class="stuffs-menu-list-count">131</small>
            </Link>
        </li>
    </ul>
</div>