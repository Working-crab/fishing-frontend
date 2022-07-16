<script>
    export let name = "";
    export let dropdownClass = "";
    export let selectClass = "";
    export let arrowClass = "";
    export let arrowActiveClass = "";
    export let menuClass = "";
    // options contain objects with properties like: id and value
    export let options = [];

    import Arrow from "../assets/images/Arrow.svg";


    let isActive = false;
    let currentItem = 0;

    function dropdownButtonHandler() {
        isActive = !isActive;
    }

    function itemClickHandler(id) {
        currentItem = id
    }
</script>

<div on:click={dropdownButtonHandler} class="{dropdownClass} dropdown">
    <input 
        on:click={dropdownButtonHandler} 
        type="text" 
        name={name} 
        id={name} 
        value={options[currentItem].value} 
        class="{selectClass} dropdown-input input" 
        disabled
    >
    <button 
        type="button" 
        class="{arrowClass} dropdown-arrow button {isActive ? `${arrowActiveClass} dropdown-arrow--active` : ""}"
    >
        <img src={Arrow} alt="" />
    </button>
    <ul class="{menuClass} dropdown-menu {isActive ? "dropdown-menu--active" : ""}">
        {#each options as item}
            <li 
                on:click={() => itemClickHandler(item.id)} 
                class="dropdown-menu-item"
            >
                {item.value}
            </li>
        {/each}
    </ul>
</div>