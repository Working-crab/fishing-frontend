<template>
    <div :class="`${classes} stuffs-footer `">
        <button ref="decrBtn" class="plus-minus-bounce button" @click="decrQuantity">
            <i class="pi pi-minus"></i>
        </button>
        <strong class="stuffs-footer-price">
            <input v-model="quantity" min="0" class="stuffs-footer-price-input" type="text" id="quantity" name="productQuantity" >
        </strong>
        <button ref="incrBtn" @click="incrQuantity" class="plus-minus-bounce button">
            <i class="pi pi-plus"></i>
        </button>
    </div>
</template>

<script>
export default {
  props: {
    classes: String,
    stuff: Object,
  },
  data() {
    return {
      quantity: this.stuff.quantity,
    }
  },
  methods: {
    async incrQuantity($event) {
      this.$refs.incrBtn.disabled = true
      if(this.quantity >= 1){
        this.quantity++
        let props = {
          product_id: this.stuff.id,
          quantity: this.quantity
        }
        await this.$nuxt.$store.dispatch('cart/addItemToCard', props)
        if(this.quantity != 0) {
          this.$refs.incrBtn.disabled = false
        }
      }
    },
    async decrQuantity() {
      if(this.quantity >= 1){
        this.$refs.decrBtn.disabled = true
        this.quantity--
        let props = {
          product_id: this.stuff.id,
          quantity: this.quantity
        }
        await this.$nuxt.$store.dispatch('cart/addItemToCard', props)
        if(this.quantity != 0) {
          this.$refs.decrBtn.disabled = false
        }
      }
    }
  }
}
</script>

<style scoped>
.stuffs-footer {
  margin-bottom: 10px;
}
.stuffs-footer-price-input {
  outline: none;
  border: none;
  width: 50%;
  text-align: center;
}
.stuffs-footer-price input {
  background-color: #FFF;
  font-size: inherit;
}
</style>