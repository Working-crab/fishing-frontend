<template>
  <div>
    <transition name="fade" mode="out-in">
      <ul v-if="loading" :class="`${parentClass} stuffs-list`">
        <li v-for="stuff in products.edges" :key="stuff.node.id" class="stuffs-list-item">
            <div @click="showStuffInfoModal(stuff)" class="stuffs-list-info">
                <div class="stuffs-list-info-image">
                    <img :src="require(`@/assets/images/rod.png`)" alt="" />
                </div>
                <h3 class="stuffs-list-info-title">{{stuff.node.name}}</h3>
            </div>
            <StuffFooter
                :stuff="stuff"
            />
        </li>
      </ul>
    </transition>
    <Paginator :first="currentPage" :rows="1" :totalRecords="totalItemsCount" @page="onPage($event)" />
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
        rows: 1,
      }
  },
  methods: {
    showStuffInfoModal(){
      this.$mModal.show(StuffModal)
    },
    ...mapActions({
      getProductsPage: 'products/getProductsPage',
      getProductsCount: 'products/getProductsCount'
    }),
    async onPage(event) {
      if (this.currentPage != event.page) {
        this.loading = false
        this.$router.push({ query: { currentPage: event.page } })
        this.currentPage = event.page
        
        await this.getProductsPage(this.startItemGql)
        this.loading = true
      }
    },
  },
  async beforeMount() {
    await this.getProductsCount()
    this.totalItemsCount = (this.productsCount.edges.length / this.rows)

    await this.getProductsPage(Number(this.$route.query.currentPage))
    this.currentPage = Number(this.$route.query.currentPage)
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