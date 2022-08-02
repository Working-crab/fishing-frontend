<template>
    <div class="">
        <Header />
        <transition name="fade">
            <div>
                <Nuxt />
            </div>
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
