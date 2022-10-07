<template>
  <transition name="fade">
    <div :id="modalId" class="modal">
      <div @click="hide"  class="modal-mask"></div>
      <div class="modal-body">
        <component :props="componentProps" :is="showComponent"></component>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {

  props: ['showComponent', 'modalId', 'componentProps'],

  mounted() {
  },

  methods: {
    hide() {
      this.$mModal.hide(this.modalId)
    },
  },

}
</script>

<style lang="scss" >
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 102;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-body {
  position: absolute;
  z-index: 103;
  padding: 10px;
  min-width: 1000px;
}
 @media(max-width: 1024px) {
  .modal-body {
    margin: auto;
    position: static;
    z-index: 103;
    padding: 10px;
    min-width: initial;
  }
 }
</style>