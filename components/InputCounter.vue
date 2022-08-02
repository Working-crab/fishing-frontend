<template>
    <div :class="`${className} counter`">
        <button @click="buttonMinusHandler" class="counter-button button">
            <img src="@/assets/images/Minus.svg" alt="" />
        </button>
        <input 
            @input="handleInput"
            :min="minValue"
            :max="maxValue"
            type="number" 
            name="name" 
            :class="`${inputClassName} input counter-input`" 
            id="name"
            v-model="initialValue"
        >
        <button @click="buttonPlusHandler" class="counter-button button">
            <img src="@/assets/images/Plus.svg" alt="" />
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            className: '',
            inputClassName: '',
            initialValue: 0,
            minValue: 0,
            maxValue: 10,
        }
    },
    methods: {
        buttonMinusHandler() {
            if(this.initialValue <= this.minValue) {
                return;
            }

            this.initialValue--;
        },

        buttonPlusHandler() {
            if(this.initialValue >= this.maxValue) {
                return;
            }
            
            this.initialValue++;
        },

        handleInput(e) {
            if(e.target.value > this.maxValue) {
                this.initialValue = this.maxValue
            }
        },
    }
}
</script>