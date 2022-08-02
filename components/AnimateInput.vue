<template>
  <label for="name" :class="`${labelClass} animate-input`">
    <input 
      :type="isPasswordVisible && inputType === 'password' ? 'text' : inputType"
      id="name"
      name="name"
      :class="`${inputClass} input animate-input-control`"
      :placeholder="placeholder"
    >
    <span :class="`${titleClass} animate-input-placeholder`">{{placeholder}}</span>
    
  </label>
</template>

<script>
export default {
  props: {
    inputType: String,
    name: String,
    placeholder: String,
    labelClass: String,
    inputClass: String,
    titleClass: String,
    isPasswordVisible: String
  },
  methods: {
    lolg() {
      
    }
  },
  data() {
    return {
    }
  }
}
</script>