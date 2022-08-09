<template>
  <div class="filter-container">
    <div v-for="filter in filters" :key="'filter_' + filter.enabled + filter.id">
      <span 
        :class="filter.enabled ? 'selected' : ''"
        @click="filter.enabled = !filter.enabled"
      > {{ filter.name }} </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        {
          id: 0,
          enabled: false,
          name: 'По цене'
        }, 
        {
          id: 1,
          enabled: false,
          name: 'По популярности'
        }, 
        {
          id: 2,
          enabled: false,
          name: 'Скидка'
        }, 
        {
          id: 3,
          enabled: false,
          name: 'По бренду'
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.filter-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgb(57 54 77 / 10%);
  border-radius: 10px;
  margin-bottom: 20px;
  width: 99%;
  height: 45px;
}

span {
  font-size: 17px;
  cursor: pointer;
  user-select: none;
}
span:hover {
  color: red;
}
span:focus {
  color: red;
}
span:nth-child(1) {
 margin-left: 20px;
}

span + span {
  margin-left: 40px;
}
.discount {
  font-weight: bold;
}
.selected {
  color: red;
}
</style>