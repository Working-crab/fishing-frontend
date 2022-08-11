<template>
  <div class="stuff-list-container">
    <transition name="fade" mode="out-in">
      <ul v-if="loading" :class="`${parentClass} stuffs-list`">
        <li v-for="stuff in products.edges" :key="stuff.node.id" class="stuffs-list-item">
            <div @click="showStuffInfoModal(stuff)" class="stuffs-list-info">
                <div class="stuffs-list-info-image">
                    <img :src="`https://diwos.ru/uploads/` + stuff.node.mainPicture.image" alt="" />
                </div>
                <h3 class="stuffs-list-info-title">{{stuff.node.name}}</h3>
            </div>
            <StuffFooter
                :stuff="stuff"
            />
        </li>
      </ul>
      <ProgressSpinner class="progeress-spin" v-else />
    </transition>
    <Paginator :first="startItemGql" :rows="rows" :totalRecords="totalItemsCount" @page="onPage($event)" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import StuffFooter from '@/components/stuffs/StuffFooter.vue'
import StuffModal from '@/components/stuffs/StuffModal.vue'
import QueryProducts from '@/apollo/products.gql'

export default {
  // apollo: {
  //   products: {
  //     prefetch: true,
  //     query: QueryProducts
  //   }
  // },
  props: {
      stuffs: Array,
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
        rows: 3,
      }
  },
  methods: {// + stuff.node.mainPicture.image
    showStuffInfoModal(stuff){
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
        //setTimeout(() => this.loading = true, 1000)
        this.loading = true
      }
    },
  },

  async mounted() {
    await this.getProductsCount()
    this.totalItemsCount = this.productsCount.edges.length
 
    if(this.$route.query.currentPage) {// если есть query
      this.currentPage = Number(this.$route.query.currentPage)
      await this.getProductsPage({start: this.startItemGql, size: this.rows})
    }

    if(!this.$route.query.currentPage){// если нет query
      this.currentPage = localStorage.curProductPage
      await this.getProductsPage({start: this.startItemGql, size: this.rows})
    }
  },

  computed: {
    startItemGql() {
      return this.currentPage * this.rows
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
  min-height: 82%;
}
.progeress-spin {
  margin: auto;
}
</style>