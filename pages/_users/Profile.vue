<template>
  <div class="profile">
    <ProfileUser @click="pushToCart"/>
    <ProfileOrder @click="pushToCart"/>
    <ProfileFavorites @click="pushToCart"/>
    <ProfileOrdersHistory @click="pushToCart"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import ProfileFavorites from "@/components/profile/ProfileFavorites.vue";
import ProfileOrder from "@/components/profile/ProfileOrder.vue";
import ProfileOrdersHistory from "@/components/profile/ProfileOrdersHistory.vue";
import ProfileUser from "@/components/profile/ProfileUser.vue";

export default {
  components: {
    ProfileFavorites, ProfileOrder,
    ProfileOrdersHistory,ProfileUser
  },
  // computed: {
  //   ...mapGetters({
  //     productList: 'products/getThis'
  //   }),
    
  // },
  methods: {
    pushToCart() {
      this.$router.push('/')
    }
    // ...mapActions({
    //   getProducts: 'products/getProducts'
    // }),
    // getThis() {
    //   this.getProducts()
    // }
  },
}
</script>

<style lang="scss" scoped>

</style>