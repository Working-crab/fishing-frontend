<template>
    <ul v-if="loading" :class="`${parentClass} stuffs-list`">
        <li v-for="stuff in stuffs" :key="stuff.id" class="stuffs-list-item">
            <div @click="showStuffInfoModal(stuff)" class="stuffs-list-info">
                <div class="stuffs-list-info-image">
                    <img :src="require(`@/assets/images/${stuff.image}`)" alt="" />
                </div>
                <h3 class="stuffs-list-info-title">{{stuff.title}}</h3>
            </div>
            <StuffFooter
                :stuff="stuff"
            />
        </li>
        <button>Показать obj</button>
    </ul>
    
</template>

<script>
import StuffFooter from '@/components/stuffs/StuffFooter.vue'
import StuffModal from '@/components/stuffs/StuffModal.vue'
import gql from 'graphql-tag'

export default {
    props: {
        stuffs: Array,
    },
    components: {
        StuffFooter
    },
    data() {
        return {
          parentClass: '',
          loading: false,

        }
    },
    async created () {
      setTimeout(() => {
              this.loading = true
      }, 600)
    },
    methods: {
      showStuffInfoModal(){
        //console.log(this.stuffs[0])
        this.$mModal.show(StuffModal)
      },
      
        // const showStuffInfo = (stuff) => {
        //     stuffModal.update(item => {
        //         return {
        //             id: stuff.id,
        //             images: [],
        //             title: stuff.title,
        //             description: '',
        //             properties: [],
        //             rating: 0,
        //             price: ''
        //         }
        //     })
        // }
    }
}
</script>