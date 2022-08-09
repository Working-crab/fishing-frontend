<template>
  <div class="type-container">
    <ul>
      <li v-for="item of 20" :key="item">
        kb
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.type-container {
  width: 100%;
  height: 200px;
  border-radius: 5px;
  padding: 7px;
  padding-top: 2px;
  overflow: auto;
  background-color: #F8F8F8!important;
}
</style>