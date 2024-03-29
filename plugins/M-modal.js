import Vue from 'vue';
import MaxModal from '@/components/Modal.vue';
import Vuex from 'vuex'

let currModalId = null

Vue.use({
  install (App, options) {

    let currModalId = null
    App.prototype.$mModal = {
      show(showComponent, componentProps = []) {
        const modalId = 'modal-' + showComponent.name + '-' + Math.random();
        
        if (currModalId != null) {
          const modal = document.getElementById(currModalId);
          document.body.removeChild(modal);
        }
        
        currModalId = modalId
        const modal = new Vue({
          el: document.createElement('div'),
          render: h => h(MaxModal, {
            props: {
              showComponent,
              modalId,
              componentProps
            }
          })
        });
        document.body.appendChild(modal.$el);
        return {modal, modalId};
      },
      hide(modalId) {
        const modal = document.getElementById(modalId);
        //modal.$destroy();
        document.body.removeChild(modal);
        currModalId = null
      }
    }

    App.$mModal = App.prototype.$mModal;
  }
});
