<script>
    export let name = "";
    export let className = "";
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

<div class="{className} dropdown">
    <input on:click={dropdownButtonHandler} type="text" name={name} id={name} value={options[currentItem].value} class="dropdown-input input" disabled>
    <button on:click|preventDefault={dropdownButtonHandler} class="dropdown-arrow button {isActive ? "dropdown-arrow--active" : ""}">
        <img src={Arrow} alt="" />
    </button>
    <ul class="dropdown-menu {isActive ? "dropdown-menu--active" : ""}">
        {#each options as item}
            <li on:click={() => itemClickHandler(item.id)} class="dropdown-menu-item">{item.value}</li>
        {/each}
    </ul>
</div>