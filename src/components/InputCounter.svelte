<script>
    export let name = '';
    export let className = '';
    export let inputClassName = '';
    export let initialValue = 0;
    export let minValue = 0;
    export let maxValue = null;

    import PlusIcon from '../assets/images/Plus.svg';
    import MinusIcon from '../assets/images/Minus.svg';

    function buttonMinusHandler() {
        if(initialValue <= minValue) {
            return;
        }

        initialValue--;
    }

    const buttonPlusHandler = () => {
        if(initialValue >= maxValue) {
            return;
        }

        initialValue++;
    }
</script>

<div class="{className} counter">
    <button on:click|preventDefault={buttonMinusHandler} class="counter-button button">
        <img src={MinusIcon} alt="" />
    </button>
    <input type="number" name="{name}" class="{inputClassName} input counter-input" id="{name}" value="{initialValue ? initialValue : 0}">
    <button on:click|preventDefault={buttonPlusHandler} class="counter-button button">
        <img src={PlusIcon} alt="" />
    </button>
</div>

