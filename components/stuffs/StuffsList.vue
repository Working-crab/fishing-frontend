<template>
  <div class="stuff-list-container">
    <transition name="fade" mode="out-in">
      <ul v-if="loading" :class="`${parentClass} stuffs-list`">
        <li v-for="stuff in products" :key="stuff.id" class="stuffs-list-item">
            <div @click="showStuffInfoModal(stuff)" class="stuffs-list-info">
                <div class="stuffs-list-info-image">
                    <img v-if="stuff.mainPicture" :src="`${Constants.BASE_URL}uploads/` + stuff.mainPicture" alt="nety" />
                    <img v-else src="@/assets/images/empty.png" alt="nety" />
                </div>
                <h3 class="stuffs-list-info-title">{{stuff.name}}</h3>
            </div>
            <StuffFooter
                :stuff="stuff"
            />
        </li>
      </ul>
      <ProgressSpinner class="progeress-spin" v-else />
    </transition>
    <Paginator v-if="totalItemsCount > rows" :first="startItemGql" :rows="rows" :totalRecords="totalItemsCount" @page="onPage($event)" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import StuffFooter from '@/components/stuffs/StuffFooter.vue'
import StuffModal from '@/components/stuffs/StuffModal.vue'
import Constants from '@/config'

export default {
  props: {
    parentClass: String
  },
  components: {
      StuffFooter,
  },
  data() {
      return {
        loading: true,
        totalItemsCount: 0,
        currentPage: 0,
        rows: 10,
        Constants: Constants
      }
  },
  methods: {
    async showStuffInfoModal(stuff){
      await this.$nuxt.$store.dispatch('products/getAdditionalPictures', stuff.id)
      //await 
      this.$mModal.show(StuffModal, stuff)
    },
    ...mapActions({
      getProductsPage: 'products/getProductsPage',
      getProductsCount: 'products/getProductsCount'
    }),
    async onPage(event) {
      if (this.currentPage != event.page) {
        this.loading = false
        this.$router.push({ query: { currentPage: event.page } })
        localStorage.curProductPage = event.page
        this.currentPage = event.page

        await this.getProductsPage({start: this.startItemGql, size: this.rows})
        this.loading = true
      }
    },
  },

  async mounted() {
    await this.getProductsCount()
    this.totalItemsCount = this.productsCount?.edges?.length
    if(this.$route.query.currentPage) {// если есть query
      this.currentPage = Number(this.$route.query.currentPage)
      await this.getProductsPage({start: this.startItemGql, size: this.rows})
    }
    if(!this.$route.query.currentPage && localStorage.curProductPage){// если нет query
      this.currentPage = localStorage.curProductPage
      await this.getProductsPage({start: this.startItemGql, size: this.rows})
    }
    await this.getProductsPage({start: this.startItemGql, size: this.rows})// если нет нихуя
  },

  computed: {
    startItemGql() {
      return this.currentPage * this.rows
    },
    imgSrc(stuff) {
      return `${Constants.BASE_URL}uploads/` + stuff.mainPicture
    },
    ...mapGetters({
      products: 'products/productsPage',
      productsCount: 'products/productsCount'
    })
  }
}
</script>

<style scoped>
.stuff-list-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 79%;
  margin-right: 10px;
}
.progeress-spin {
  margin: auto;
}
</style>