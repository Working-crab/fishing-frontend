<template>
  <div class="container">
    <transition name="fade">
      <Nuxt />
    </transition>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components: { 
    Header,
  },

}
</script>
