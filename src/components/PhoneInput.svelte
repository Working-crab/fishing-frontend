<script>
  export let labelClass = '';
  export let selectClass = '';
  export let inputClass = '';
  import InputSelect from "./InputSelect.svelte";

  let phonePrefixes = [
    {
      id: 1,
      value: 7,
    }
  ]
</script>

<label for="phone" class="{labelClass} phone">
  <InputSelect 
    selectClass={`${selectClass} phone-select-input`}
    dropdownClass='phone-select'
    arrowClass='phone-arrow'
    arrowActiveClass='phone-arrow--active'
    menuClass='phone-select-menu'
    options={phonePrefixes} 
    name='phone' 
  />
  <input 
    class={`${inputClass} phone-input input`}
    type="text" 
    name="phone" 
    id="phone"
  >
</label>
