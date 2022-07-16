<script>
  import ClosedEyeIcon from '../assets/images/Closed_Eye.svg';
  import OpenedEyeIcon from '../assets/images/Opened_Eye.svg';

  export let labelClass = '';
  export let inputClass = '';
  export let titleClass = '';
  export let name = '';
  export let inputType = 'text';
  export let placeholder = '';

  let isPasswordVisible = false;
</script>

<label for={name} class="{labelClass} animate-input">
  <input 
    type={isPasswordVisible && inputType === 'password' ? 'text' : inputType}
    id={name}
    name={name}
    class="{inputClass} input animate-input-control"
    placeholder=" "
  >
  <span class="{titleClass} animate-input-placeholder">{placeholder}</span>
  {#if inputType === 'password'}
  <div on:click={() => isPasswordVisible = !isPasswordVisible} class="animate-input-eye">
    <img src={isPasswordVisible ? OpenedEyeIcon : ClosedEyeIcon} alt="">
  </div>
  {/if}
</label>