<template>
    <div>
        <Header />
        <div class="container">
          <transition name="fade">
            <Nuxt />
          </transition>
        </div>
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
