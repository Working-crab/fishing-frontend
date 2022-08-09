<template>
    <div @click="dropdownButtonHandler" @mouseleave="offdropdownButton" :class="`${dropdownClass} dropdown`">
        <input 
            @click="dropdownButtonHandler"
            type="text" 
            name="name"
            id="name"
            v-model="options[currentItem].value"
            :class="`${selectClass} dropdown-input input`" 
            disabled
        >
        <button 
            type="button" 
            :class="isActive ? 'dropdown-arrow button arrowActiveClass dropdown-arrow--active' : 'dropdown-arrow button' "
        >
            <img src="@/assets/images/Arrow.svg" alt="" />
        </button>
        <ul :class="isActive ? 'dropdown-menu dropdown-menu--active' : 'dropdown-menu'">
            <li v-for=" option in options" :key="option.id"
                @click="itemClickHandler(option.id)"
                class="dropdown-menu-item"
            >
                {{option.value}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
  selectClass: String
  },
    data() {
      return {
          isActive: false,
          options: [
              {
                  id: 0,
                  value: 'val 1',
              },
              {
                  id: 1,
                  value: 'val 2',
              }
              
          ],
          name: '',
          dropdownClass: '',
          arrowClass: '',
          arrowActiveClass: '',
          menuClass: '',
          currentItem: 0,
      }
    },
    methods: {
        dropdownButtonHandler() {
            this.isActive = !this.isActive;
        },
        itemClickHandler(id) {
            this.currentItem = id
        },
        offdropdownButton() {
          this.isActive = false
        }
    }
}
</script>