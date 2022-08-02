<template>
  <label for="phone" :class="`${labelClass} phone`">
    <InputSelect 
      :selectClass="`${selectClass} phone-select-input`"
      dropdownClass="phone-select"
      arrowClass="phone-arrow"
      arrowActiveClass="phone-arrow--active"
      menuClass="phone-select-menu"
      options="phonePrefixes"
      name="phone" 
    />
    <input 
      :class="`${inputClass} phone-input input`"
      type="text" 
      name="phone" 
      id="phone"
    >
  </label>
</template>

<script>
export default {
  props: {
    labelClass: String,
    selectClass: String,
    inputClass: String,
  },
}
</script>