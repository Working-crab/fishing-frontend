<template>
  <label :for="uid" :class="`${labelClass} animate-input`">

    <input 
      v-on="inputListeners"
      :type="isPasswordVisible && inputType === 'password' ? 'text' : inputType"
      :id="uid"
      :name="name"
      :pattern="pattern"
      :class="`${inputClass} input animate-input-control`"
      placeholder=" "
    >
    <span :class="`${titleClass} animate-input-placeholder`">{{placeholder}}</span>
    
  </label>
</template>

<script>
export default {
  props: {
    inputType: String,
    name: String,
    pattern: String,
    placeholder: String,
    labelClass: String,
    inputClass: String,
    titleClass: String,
    isPasswordVisible: String,
  },
  data() {
    return {
      uid: ''
    }
  },
  mounted(){
    this.uid = this._uid
  },
  computed: {
    inputListeners: function () {
      return {
        ...this.$listeners,
        input: (event) => {
          this.$emit('input', event.target.value);
        },
      };
    },
  }
}
</script>